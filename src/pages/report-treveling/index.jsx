import React, { useState } from 'react';
import { Container, Button, Box, Grid, TextField, Typography } from "@mui/material";
import { CardOrderComponent, HeaderComponent } from '../../components';
import { Link } from "react-router-dom";
import axios from 'axios';

export const ReportTravelingPage = () => {
  const [reportData, setReportData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [noResults, setNoResults] = useState(false);

  //const BASE_URL = process.env.BASE_URL;
  const BASE_URL = 'http://localhost:3000'

  const formatDateString = (dateString) => {
    // Format the date string as "YYYY-MM-DD"
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const fetchTravelingOrdersReport = () => {
    setIsLoading(true);

    const formattedStartDate = formatDateString(startDate);
    const formattedEndDate = formatDateString(endDate);

    const url = `${BASE_URL}/reports/traveling?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;

    axios.get(url)
      .then((response) => {
        if (response.data.length === 0) {
          setNoResults(true);
        } else {
          setReportData(response.data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="Reports"
        description="Report with all orders in Traveling status between a range of
        date given by parameter."
        element={
          <>
            <TextField
              label="Start Date"
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
              sx={{ mt: 2 }}
            />
            <TextField
              label="End Date"
              type="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
              sx={{ mt: 1 }}
            />
            <Button fullWidth variant="contained" onClick={fetchTravelingOrdersReport}>
              Generate Traveling Orders Report
            </Button>
          </>
        }
      />
      <Box my={2}>
        {isLoading ? (
          <div>Loading...</div>
        ) : noResults ? (
          <Typography variant="h6">No results found.</Typography>
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
};
