import React, { useEffect, useState } from 'react';
import { Container, Button, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { fetchData } from '../../api/dataFetcher';
import { CardOrderComponent, HeaderComponent } from '../../components';


export const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const endpoint = '/orders';

    fetchData(endpoint)
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="Orders manager"
        description="On this page you can perform CRUD actions regarding orders"
        element={
          <Link to={'/orders/create-order'} style={{ textDecoration: "none" }}>
            <Button fullWidth variant="contained">
              Create New Order
            </Button>
          </Link>
        }
      />
      <Box my={2}>
      <Grid container spacing={2}>
        {data.map((order) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={order.order_id}>
            <Link to={`/orders/${order.order_id}`} style={{ textDecoration: "none" }}>
            <CardOrderComponent 
                client={order.client}
                status={order.status}
                shipping_promise={order.shipping_promise}
                shipping_address={order.shipping_address} 
            />
            </Link>
          </Grid>
        ))}
        </Grid>
      </Box>
    </Container>
  );
}
