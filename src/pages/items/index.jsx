import React, { useEffect, useState } from 'react';

import { Container, Button, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { fetchData } from '../../api/dataFetcher';
import { CardComponent, HeaderComponent } from '../../components';

export const ItemsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const dataT = [
    {
      "item_id": "079d8c23-335e-4571-b6c3-499dd9f4806c",
      "title": "iphone 8",
      "description": "iphone 8 white",
      "price": "399.99",
      "quantity": 100,
      "created_at": "2023-09-20T16:55:11.885Z",
      "updated_at": "2023-09-20T16:55:11.885Z"
    },
    {
      "item_id": "079d8c23-335e-4571-b6c3-499dd9f4806c",
      "title": "iphone 8",
      "description": "iphone 8 white",
      "price": "399.99",
      "quantity": 100,
      "created_at": "2023-09-20T16:55:11.885Z",
      "updated_at": "2023-09-20T16:55:11.885Z"
    },
    {
      "item_id": "079d8c23-335e-4571-b6c3-499dd9f4806c",
      "title": "iphone 8",
      "description": "iphone 8 white",
      "price": "399.99",
      "quantity": 100,
      "created_at": "2023-09-20T16:55:11.885Z",
      "updated_at": "2023-09-20T16:55:11.885Z"
    },
    {
      "item_id": "079d8c23-335e-4571-b6c3-499dd9f4806c",
      "title": "iphone 8",
      "description": "iphone 8 white",
      "price": "399.99",
      "quantity": 100,
      "created_at": "2023-09-20T16:55:11.885Z",
      "updated_at": "2023-09-20T16:55:11.885Z"
    },{
      "item_id": "079d8c23-335e-4571-b6c3-499dd9f4806c",
      "title": "iphone 8",
      "description": "iphone 8 white",
      "price": "399.99",
      "quantity": 100,
      "created_at": "2023-09-20T16:55:11.885Z",
      "updated_at": "2023-09-20T16:55:11.885Z"
    },
    {
      "item_id": "079d8c23-335e-4571-b6c3-499dd9f4806c",
      "title": "iphone 8",
      "description": "iphone 8 white",
      "price": "399.99",
      "quantity": 100,
      "created_at": "2023-09-20T16:55:11.885Z",
      "updated_at": "2023-09-20T16:55:11.885Z"
    },
  ];

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
        description="NestJS + React App"
        element={
          <Link to={'/items/create-item'} style={{ textDecoration: "none" }}>
            <Button fullWidth variant="contained">
              Create New Item
            </Button>
          </Link>
        }
      />
      <Box my={2}>
        {data.map((item) => (
          <Link to={`/items/${item.item_id}`} style={{ textDecoration: "none" }}>
            <CardComponent 
              title={item.title}
              description={item.description}
              created_at={item.created_at}
              updated_at={item.updated_at}
            />
          </Link>
        ))}
      </Box>
    </Container>
  );
}