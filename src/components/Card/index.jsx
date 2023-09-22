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

export const CardComponent = ({title, description, created_at, updated_at}) => {
    return (
        <Card>
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
                <Typography sx={{mt: 1.5}}>created: {created_at}</Typography>
                <Typography sx={{mt: 1.5}}>updated: {updated_at}</Typography>
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained" size="small">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}