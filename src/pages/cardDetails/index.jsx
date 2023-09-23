import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { fetchItemsDetails } from "../../api/dataFetcher";

export const CardDetailsPage = () => {
  const { item_id } = useParams(); 
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    if (item_id) {
      fetchItemsDetails(item_id)
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
  }, [item_id]);

  return (
    <Container sx={{ mt: 15 }} maxWidth="xl" >
      <Grid 
          container
          direction="column"
          alignItems="center"
          sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          {itemDetails ? ( 
          <Paper sx={{padding: "1.2em", borderRadius: "0.5em"}}>
            <Typography variant="h4">Item Details</Typography>
            <Typography variant="h6">Title: {itemDetails.title}</Typography>
            <Typography>Description: {itemDetails.description}</Typography>
            <Typography>Created At: {itemDetails.created_at.toString()}</Typography>
            <Typography>Updated At: {itemDetails.updated_at.toString()}</Typography>
          </Paper>
          ) : (
            <Typography variant="h6">Loading...</Typography>
          )}
            <Button fullWidth variant="outlined"  href="/items">Back</Button>
        </Grid>     
      </Grid>
    </Container>
  );
};

//export default CardDetailsPage;
