import { Title } from "@mui/icons-material";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const HeaderComponent = ({ title, description, element }) => {
    return (
        <div>
            <Box sx={{ width: "100%", height: "350px" }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: "100%" }}
                >
                    <Grid item xs={5}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ height: "100%" }}
                        >
                            <Grid item>
                                <Typography variant="h2">{title}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>{description}</Typography>
                            </Grid>
                            {element !== undefined && (
                                <Grid sx={{ mt: 2 }} item>
                                    {element}
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
        </div>
    );
};

export default HeaderComponent;
