import { 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Divider, 
    Typography 
} from "@mui/material";
import React from "react";
const CardOrderComponent = ({client, status, shipping_promise, shipping_address}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia 
                component="img"
                height="194"
                image={'https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png'}
                alt="img"
            />
            <CardContent>
                <Typography sx={{mb: 1.5}} variant="h4">Client: {client}</Typography>
                <Divider />
                <Typography sx={{mt: 1.5}}>Status: {status}</Typography>
                <Typography sx={{mt: 1.5}}>shipping promise: {shipping_promise}</Typography>
                <Typography sx={{mt: 1.5}}>shipping address: {shipping_address}</Typography>
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained" size="small">
                    More Details
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardOrderComponent;