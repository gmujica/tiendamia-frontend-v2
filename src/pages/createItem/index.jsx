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
  
  export const CreateItemPage = () => {
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
          setregisterData({
            title: "",
            description: "",
            item_id: "", 
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
                Create New Item
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  name="title"
                  margin="normal"
                  type="text"
                  fullWidth
                  label="Title"
                  sx={{ mt: 2, mb: 1.5 }}
                  onChange={dataRegister}
                  value={registerData.title}
                />
                <TextField
                  name="description"
                  margin="normal"
                  type="text"
                  fullWidth
                  label="description"
                  sx={{ mt: 2, mb: 1.5 }}
                  onChange={dataRegister}
                  value={registerData.description}
                />
                <TextField
                  name="price"
                  margin="normal"
                  type="text"
                  fullWidth
                  label="price"
                  sx={{ mt: 2, mb: 1.5 }}
                  onChange={dataRegister}
                  value={registerData.price}
                />
                <TextField
                  name="quantity"
                  margin="normal"
                  type="number"
                  fullWidth
                  label="quantity"
                  sx={{ mt: 2, mb: 1.5 }}
                  onChange={dataRegister}
                  value={registerData.quantity}
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

  