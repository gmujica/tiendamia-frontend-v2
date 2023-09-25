import {
    Container,
    Button,
    Grid,
    Paper,
    Box,
    Typography,
    TextField,
    InputLabel,
    Select,
    MenuItem
  } from "@mui/material";
  import React, { useEffect, useState } from 'react';
  import { createItem } from "../../api/dataFetcher";
  import { fetchData } from '../../api/dataFetcher';
  import { v4 as uuidv4 } from "uuid";
  
  export const CreateOrderPage = () => {
    const [registerData, setregisterData] = useState({
      client: "",
      status: "",
      shipping_address: "",
      shipping_promise: "",
      order_id: "",
    });
    const [ItemData, setItemData] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    
    useEffect(() => {
      const endpoint = '/items';
    
      fetchData(endpoint)
        .then((response) => {
          setItemData(response);
          console.log(ItemData);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    const dataRegister = (e) => {
      const { name, value } = e.target;
  
      if (name === "Items") {
        const selectedItem = ItemData.find(item => item.title === value);
        setSelectedItems(prevSelectedItems => [...prevSelectedItems, selectedItem]);
        console.log('selectedItem', selectedItems);
      } else {
        setregisterData({ ...registerData, [name]: value });
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const newItemId = uuidv4();
  
        const orderData = {
          client: registerData.client,
          status: registerData.status,
          shipping_address: registerData.shipping_address,
          shipping_promise: registerData.shipping_promise,
          order_id: newItemId,
          items: selectedItems.map((item) => item.item_id), // Assuming you want to send item IDs
        };
        const response = await createOrder(orderData);
        console.log('Order created:', response);
        return response;
          
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item>
            <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
              <Typography sx={{ mt: 1, mb: 1 }} variant="h6">
                Create New Order
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  name="client"
                  margin="normal"
                  type="text"
                  fullWidth
                  label="Client"
                  sx={{ mt: 2, mb: 1.5 }}
                  onChange={dataRegister}
                />
                <TextField
                  name="shipping_address"
                  margin="normal"
                  type="text"
                  fullWidth
                  label="shipping address"
                  sx={{ mt: 2, mb: 1.5 }}
                  onChange={dataRegister}
                />
                <TextField
                  name="status"
                  margin="normal"
                  type="text"
                  fullWidth
                  label="status"
                  sx={{ mt: 2, mb: 1.5 }}
                  onChange={dataRegister}
                />
                <TextField
                  name="shipping_promis"
                  margin="normal"
                  type="text"
                  fullWidth
                  label="shipping_promis"
                  sx={{ mt: 2, mb: 1.5 }}
                  onChange={dataRegister}
                />
                <InputLabel id="demo-simple-select-label">Select Item</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={''}
                  label="Items"
                  onChange={dataRegister}
                >
                  {ItemData.map((item) => (
                    <MenuItem key={item.item_id} value={item}>
                      {item.title}
                    </MenuItem>
                  ))}
                </Select>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{ mt: 1.5, mb: 3 }}
                >
                  Create
                </Button>
                <Button fullWidth variant="outlined" href="/">
                  Back
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  };
  