import React, { useEffect, useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Link, Skeleton } from "@mui/material";
import SimpleModal from '../SimpleModal/SimpleModal';

export default function CardsGrid() {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleModal = () => setShow(!show);

  const handleOpenModal = (card) => {
    setSelectedCard(card);
    setShow(true);
  };

  async function fetchCards() {
    try {
      const apiURL = 'https://portfolio-api-nextjs-git-main-guilhermebridas-projects.vercel.app';
      const urls = [
        "/api/fota",
        "/api/todo-app",
        "/api/finance-ai",
        "/api/agenda",
        "/api/short-my-url",
        "/api/user-management-system",
      ];

      const responses = await Promise.all(urls.map((url) => fetch(apiURL + url)));
      const jsons = await Promise.all(responses.map((res) => res.json()));

      const cards = jsons.map((item, idx) => ({
        id: idx + 1,
        image: `data:image/png;base64,${item.image}`,
        title: item.title,
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
    <Grid container spacing={2}>
      {cardsData.map(({ id, image, title, description }) => (
        <Grid item xs={12} sm={6} md={4} key={id} >
          <Card sx={{ height: "100%", backgroundColor:"#ffffff"}} >
            <CardMedia component="img" height="160" image={image} alt={title} />
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" noWrap>
                {description}
              </Typography>
              <Link
                href="#"
                underline="hover"
                sx={{ display: "inline-block", mt: 1 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenModal({ id, image, title, description });
                }}
              >
                Read More →
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <SimpleModal show={show} toggleModal={toggleModal} card={selectedCard} />
    </Grid>
  );
}
