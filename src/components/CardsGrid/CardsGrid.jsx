import React, { useEffect, useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Link, Skeleton } from "@mui/material";

export default function CardsGrid() {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchCards() {
    try {
      const apiURL = 'https://portfolio-api-nextjs-git-main-guilhermebridas-projects.vercel.app'
      const urls = [
        "/api/fota",
        "/api/todo-app",
        "/api/finance-ai",
        "/api/agenda",
      ];

      
      const responses = await Promise.all(urls.map((url) => fetch(apiURL+url)));
      const jsons = await Promise.all(responses.map((res) => res.json()));

      const cards = jsons.map((item, idx) => ({
        id: idx + 1,
        image: `data:image/png;base64,${item.image}`,
        title: item.description.split('.')[0], // só um exemplo de título tirado da descrição
        description: item.description,
      }));

      setCardsData(cards);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCards();
  }, []);

    if (loading) {
    return (
      <Grid container spacing={2}>
        {Array.from(new Array(4)).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: "100%" }}>
              <Skeleton variant="rectangular" height={160} />
              <CardContent>
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" width="40%" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid id="CardsGrid-Grid-0"container spacing={2}>
      {cardsData.map(({ id, image, title, description }) => (
        <Grid id={"CardsGrid-Grid-"+id} item xs={12} sm={6} md={3} key={id}>
          <Card sx={{ height: "100%" }}>
            <CardMedia
              component="img"
              height="160"
              image={image}  
              alt={title}
            />
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" noWrap>
                {description}
              </Typography>
              <Link href="#" underline="hover" sx={{ display: "inline-block", mt: 1 }}>
                Read More →
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
