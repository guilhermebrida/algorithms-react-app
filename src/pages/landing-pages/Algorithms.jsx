import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid,  } from "@mui/material";
import AlgorithmCarousel from "../../components/AlgorithmCarousel/AlgorithmCarousel";
import backgroundImage from "../../assets/images/flora-gb.jpeg"

// const backgroundImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb';
export default function Algorithms() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        py: 8,
      }}
    >
    <Box sx={{textAlign:'center', mb:4}}>
        <Typography variant="h3" component="h1" sx={{ color: "black", fontWeight: 600 }}>
                Explore Algorithms
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" mb={4}>
              Learn and interact with the most important algorithmic paradigms.
        </Typography>
    </Box>
      <Container maxWidth="lg">
        <Card elevation={8} sx={{ p: 4, borderRadius: 3 }}>
          <CardContent>
            {/* <Typography variant="body1" align="center" color="text.secondary" mb={4}>
              Learn and interact with the most important algorithmic paradigms.
            </Typography> */}
            <AlgorithmCarousel />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}