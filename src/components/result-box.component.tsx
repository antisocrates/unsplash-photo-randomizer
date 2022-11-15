import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {ResultBoxProps} from "../types/result-box";
import {Box, Skeleton} from "@mui/material";

const ResultBox: React.FC<ResultBoxProps> = ({photo}) => {
    const [loading, setLoading] = useState(true);

    return (
        <Box m={6}>
            <Card raised>
                {loading &&
                    <Skeleton sx={{height: photo.height, width: photo.width}} animation="wave" variant="rectangular"/>
                }
                <CardMedia
                    component="img"
                    image={photo.urls.regular}
                    alt={photo.alt_description || ""}
                    onLoad={() => setLoading(false)}
                    sx={{height: loading ? 0 : 1}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {photo.user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {photo.description}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ResultBox;