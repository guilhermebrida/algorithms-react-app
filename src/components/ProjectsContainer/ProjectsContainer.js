import { Container, Typography, Grid } from "@mui/material"
import CardsGrid from "../CardsGrid/CardsGrid"

export default function ProjectsContainer () {

    return (
        <>
            <Container maxWidth="lg" >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Check out some of my projects
                </Typography>
                <Grid sx={{marginTop:5}}>
                    <CardsGrid />
                </Grid>
            </Container>
        </>
    )
}