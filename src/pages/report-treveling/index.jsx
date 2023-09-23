import React, { useState } from 'react';
import { Container, Button, Box, Grid, TextField } from "@mui/material";
import { fetchData } from '../../api/dataFetcher';
import { CardOrderComponent, HeaderComponent } from '../../components';
import { Link } from "react-router-dom";

export const ReportTravelingPage = () => {
  const [reportData, setReportData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [noResults, setNoResults] = useState(false);

  const fetchTravelingOrdersReport = () => {
    setIsLoading(true);


    const endpoint = '/reports/approve-orders-with-deadline'; 
    const params = {
      start_date: startDate,
      end_date: endDate,
    };

    fetchData(endpoint, params)
    .then((response) => {
      if (response.length === 0) {
        setNoResults(true);
      } else {
        setReportData(response);
      }
      setIsLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setIsLoading(false);
    });
  };

  const handleGenerateReportClick = () => {
    fetchTravelingOrdersReport();
  }

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="Reports"
        description="NestJS + React App"
        element={
          <>
            <Button fullWidth variant="contained" onClick={handleGenerateReportClick}>
              Generate Traveling Orders Report
            </Button>
            <TextField
              label="Start Date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              label="End Date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              sx={{ mt: 1 }}
            />
          </>
        }
      />
      <Box my={2}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Grid container spacing={2}>
            {reportData.map((dataItem, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={dataItem.order_id}>
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
