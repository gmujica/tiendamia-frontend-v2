import React, { useEffect, useState } from 'react';

import { Container, Button, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { fetchData } from '../../api/dataFetcher';
import { CardComponent, HeaderComponent } from '../../components';

export const ItemsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = '/items';
  
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
        title="Items manager"
        description="On this page you can perform CRUD actions regarding Items"
        element={
          <Link to={'/items/create-item'} style={{ textDecoration: "none" }}>
            <Button fullWidth variant="contained">
              Create New Item
            </Button>
          </Link>
        }
      />
      <Box my={2}>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.item_id}>
              <Link to={`/items/${item.item_id}`} style={{ textDecoration: "none" }}>
                <CardComponent 
                  title={item.title}
                  description={item.description}
                  created_at={item.created_at}
                  updated_at={item.updated_at}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}