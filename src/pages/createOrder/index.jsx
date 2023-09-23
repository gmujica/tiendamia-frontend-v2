import {
    Container,
    Button,
    Grid,
    Paper,
    Box,
    Typography,
    TextField,
  } from "@mui/material";
  import { useState } from "react";
  import { createItem } from "../../api/dataFetcher";
  import { v4 as uuidv4 } from "uuid";
  
  export const CreateOrderPage = () => {
    const [registerData, setregisterData] = useState({
      title: "",
      description: "",
      item_id: "",
    });
  
    const dataRegister = (e) => {
      setregisterData({ ...registerData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const newItemId = uuidv4();
  
        const response = await createItem({
            title: registerData.title,
            description: registerData.description,
            price: registerData.price,
            quantity: registerData.quantity,
            item_id_id: newItemId,
            created_at: new Date(),
            updated_at: new Date(),
          });
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
  