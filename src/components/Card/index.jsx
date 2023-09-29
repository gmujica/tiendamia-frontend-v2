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
import { formatDate } from '../../utils';

 const CardComponent = ({title, description, created_at, updated_at}) => {
    const formattCreatedDate = formatDate(created_at);
    const formatedUpdateDate = formatDate(updated_at);
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia 
                component="img"
                height="194"
                image={'https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png'}
                alt="img"
            />
            <CardContent>
                <Typography sx={{mb: 1.5}} variant="h4">Title: {title}</Typography>
                <Divider />
                <Typography sx={{mt: 1.5}}>Description: {description}</Typography>
                <Typography sx={{mt: 1.5}}>created: {formattCreatedDate}</Typography>
                <Typography sx={{mt: 1.5}}>updated: {formatedUpdateDate}</Typography>
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained" size="small">
                    More Details
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardComponent;