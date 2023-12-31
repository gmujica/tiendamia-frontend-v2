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
  import { createOrder } from "../../api/dataFetcher";
  import { fetchData } from '../../api/dataFetcher';
  import { v4 as uuidv4 } from "uuid";
  
  export const CreateOrderPage = () => {
    const [registerData, setRegisterData] = useState({
      client: "",
      status: "",
      shipping_address: "",
      shipping_promise: "",
      order_id: "",
      itemIds: []
    });
    const [itemData, setItemData] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    
    useEffect(() => {
      const endpoint = '/items';
    
      fetchData(endpoint)
        .then((response) => {
          setItemData(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    const dataRegister = (e) => {
      const { name, value } = e.target;
  
      if (name === "Items") {
        const selectedItem = itemData.find((item) => item.title === value);
        setSelectedItems((prevSelectedItems) => [...prevSelectedItems, selectedItem.item_id]);
      } else {
        setRegisterData({ ...registerData, [name]: value });
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
          itemIds: selectedItems
        };
        const response = await createOrder(orderData);
        setRegisterData({
          client: "",
          status: "",
          shipping_address: "",
          shipping_promise: "",
          order_id: "",
          itemIds: [],
        });
        setSelectedItems([]);
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
                  value={registerData.client}
                />
                <TextField
                  name="shipping_address"
                  margin="normal"
                  type="text"
                  fullWidth
                  label="shipping address"
                  sx={{ mt: 2, mb: 1.5 }}
                  onChange={dataRegister}
                  value={registerData.shipping_address}
                />
                <TextField
                  name="status"
                  margin="normal"
                  type="text"
                  fullWidth
                  label="status"
                  sx={{ mt: 2, mb: 1.5 }}
                  onChange={dataRegister}
                  value={registerData.status}
                />
                <TextField
                  name="shipping_promise"
                  margin="normal"
                  type="text"
                  fullWidth
                  label="shipping promise"
                  sx={{ mt: 2, mb: 1.5 }}
                  onChange={dataRegister}
                  value={registerData.shipping_promise}
                />
                <InputLabel id="demo-simple-select-label">Select Item</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={''}
                  label="Items"
                  name="Items"
                  onChange={dataRegister}
                >
                  {itemData.map((item) => (
                    <MenuItem key={item.item_id} value={item.title}>
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
  