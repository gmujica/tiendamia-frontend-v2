import React, { useState } from 'react';
import { Container, Button, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { fetchData } from '../../api/dataFetcher';
import { CardOrderComponent, HeaderComponent } from '../../components';

export const ReportsPage = () => {
  const [reportData, setReportData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchReport = () => {
    setIsLoading(true);

    const endpoint = '/reports/approve-orders-with-deadline';

    fetchData(endpoint)
      .then((response) => {
        setReportData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  const handleClick = () => {
    fetchReport();
  }

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="Reports"
        description="This screen generates a report of orders in Availability status and
        less than 2 days left to fail to comply with the delivery promise (ShippingPromise)"
        element={
          <Button fullWidth variant="contained" onClick={handleClick}>
            Generate report 1
          </Button>
        }
      />
      <Box my={2}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Grid container spacing={2}>
            {reportData.map((dataItem, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Link to={`/orders/${dataItem.order_id}`} style={{ textDecoration: "none" }}>
                  <CardOrderComponent 
                    client={dataItem.client}
                    status={dataItem.status}
                    shipping_promise={dataItem.shipping_promise}
                    shipping_address={dataItem.shipping_address} 
                />
              </Link>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}
