import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { Divider, Avatar, Stack } from "@mui/material";
import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";

const Green = styled.div`
    background-color: #4eae52;
    padding: 2px 8px;
    width: fit-content;
    font-size: 12px;
    border-radius: 5px;
    color: white;
`;
const Orange = styled.div`
    background-color: #fa9b00;
    padding: 2px 8px;
    width: fit-content;
    font-size: 12px;
    border-radius: 5px;
    color: white;
`;
const Red = styled.div`
    background-color: #f0534d;
    padding: 2px 8px;
    width: fit-content;
    font-size: 12px;
    border-radius: 5px;
    color: white;
`;

interface Props {
    src?: string;
    title: string;
    heading: string;
}

const ImgMediaCard: React.FC<Props> = ({ src, title, heading }) => {
    return (
        <div style={{marginTop: "20px"}}>
            <Card sx={{ maxWidth: 300 }}>
                {src && (
                    <CardMedia
                        component="img"
                        height="140"
                        image={src}
                        alt="media image"
                        sx={{maxWidth: "300px"}}
                    />
                )}
                <CardContent>
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{ marginBottom: "1px", fontSize: "16px" }}
                    >
                        {title}
                    </Typography>
                    <p style={{ marginTop: "2px" }}>
                        {heading === "Finished" ? (
                            <Green>{heading}</Green>
                        ) : heading === "In progress" ? (
                            <Orange>{heading}</Orange>
                        ) : (
                            <Red>{heading}</Red>
                        )}
                    </p>
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                    >
                        Nam pretium turpis et arcu. Duis arcu tortor, suscipit
                        eget, imperdiet nec, imperdiet iaculis, ipsum. Sed
                        aliquam ultrices mauris.
                    </Typography>
                </CardContent>
                <Stack
                    direction="row"
                    spacing={0}
                    sx={{
                        justifyContent: "end",
                        p: 1,
                    }}
                >
                    <Avatar
                        alt="Remy Sharp"
                        src={person1}
                        sx={{ width: 44, height: 44, mr: "-6px" }}
                    />
                    <Avatar
                        alt="Example user"
                        src={person2}
                        sx={{ width: 44, height: 44, mr: "-6px" }}
                    />
                    <Avatar
                        alt="John Doe"
                        src={person3}
                        sx={{ width: 44, height: 44 }}
                    />
                </Stack>
                <Divider />
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default ImgMediaCard;
