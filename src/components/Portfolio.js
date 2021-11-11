import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../html_css.png";
import project2 from "../python.png";
import project3 from "../java.jpg";
import project4 from "../mern.jpg";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height:"100%"
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto"
  }
})

const Portfolio = () => {
  const classes = useStyles()
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
        <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
            component="img"
            alt="Project 1"
            height="140"
            image={project1}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                  Project 1
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Eu non qui incididunt ut qui commodo duis deserunt nostrud cupidatat sit excepteur consequat. Minim incididunt eiusmod mollit fugiat ad. Minim amet tempor veniam ea minim amet irure adipisicing proident deserunt amet ea incididunt. Do ut ad anim esse laboris non nulla qui et ex. Ea proident sint adipisicing ut pariatur sunt culpa. Sunt dolor id exercitation eu aliquip officia ex elit officia.
              </Typography>
            </CardContent>
          </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
        </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
        <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
            component="img"
            alt="Project 2"
            height="140"
            image={project2}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                  Project 2
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Eu non qui incididunt ut qui commodo duis deserunt nostrud cupidatat sit excepteur consequat. Minim incididunt eiusmod mollit fugiat ad. Minim amet tempor veniam ea minim amet irure adipisicing proident deserunt amet ea incididunt. Do ut ad anim esse laboris non nulla qui et ex. Ea proident sint adipisicing ut pariatur sunt culpa. Sunt dolor id exercitation eu aliquip officia ex elit officia.
              </Typography>
            </CardContent>
          </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
        </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
        <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
            component="img"
            alt="Project 3"
            height="140"
            image={project3}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                  Project 3
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Eu non qui incididunt ut qui commodo duis deserunt nostrud cupidatat sit excepteur consequat. Minim incididunt eiusmod mollit fugiat ad. Minim amet tempor veniam ea minim amet irure adipisicing proident deserunt amet ea incididunt. Do ut ad anim esse laboris non nulla qui et ex. Ea proident sint adipisicing ut pariatur sunt culpa. Sunt dolor id exercitation eu aliquip officia ex elit officia.
              </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
        </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
        <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
            component="img"
            alt="Project 4"
            height="140"
            image={project4}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                  Project 4
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Eu non qui incididunt ut qui commodo duis deserunt nostrud cupidatat sit excepteur consequat. Minim incididunt eiusmod mollit fugiat ad. Minim amet tempor veniam ea minim amet irure adipisicing proident deserunt amet ea incididunt. Do ut ad anim esse laboris non nulla qui et ex. Ea proident sint adipisicing ut pariatur sunt culpa. Sunt dolor id exercitation eu aliquip officia ex elit officia.
              </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
        </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Portfolio;
