import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { fetchOrderDetails } from "../../api/dataFetcher";

export const OrderDetailsPage = () => {
  const { order_id } = useParams(); 
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    if (order_id) {
      fetchOrderDetails(order_id)
        .then((response) => {
          const data = {
            ...response.data,
            created_at: new Date(response.data.created_at),
            updated_at: new Date(response.data.updated_at),
          };
          setItemDetails(data);
          
        })
        .catch((error) => {
          console.error("Error fetching event details:", error);
        });
    }
  }, [order_id]);

  return (
    <Container sx={{ mt: 15 }} maxWidth="xl">
      <div>
      <Grid 
          container
          direction="column"
          alignItems="center" 
          justifyContent="top"
          sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          {itemDetails ? ( 
          <Paper sx={{padding: "1.2em", borderRadius: "0.5em"}}>
            <Typography variant="h4">Order Details</Typography>
            <Typography variant="h6">Order Id: {itemDetails.order_id}</Typography>
            <Typography variant="h6">Client: {itemDetails.client}</Typography>
            <Typography>Status: {itemDetails.status}</Typography>
            <Typography>Items: items</Typography>
            <Typography>shipping address: {itemDetails.shipping_address}</Typography>
            <Typography>shipping promise: {itemDetails.shipping_promise}</Typography>
            <Typography>Created At: {itemDetails.created_at.toString()}</Typography>
            <Typography>Updated At: {itemDetails.updated_at.toString()}</Typography>
          </Paper>
          ) : (
          <div>Loading...</div>
          )}
            <Button fullWidth variant="outlined"  href="/">Back</Button>
        </Grid>     
      </Grid>
      </div>
    </Container>
  );
};
