import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({

    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.macleans.ca/wp-content/uploads/2021/03/MACU01_ON_WINDSOR01-766x431.jpg')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
          height: 300,
          fontSize: "3em"
        }
      },

      blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
      },


      blogsContainer: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(50)
      },


      cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
      },

      media: {
        height: 240
      },

}));



function HomeContent() {

    const classes = useStyles();


    return (
        <div className='home-Container'>
        <Box className={classes.hero}>
        <Box>Welcome To The University Of Windsor</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Navigations
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.ontariouniversitiesinfo.ca/assets/files/images/feature%20image%206.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    University Of Windsor Home Page
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.ontariouniversitiesinfo.ca/assets/files/images/feature%20image%206.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    University Of Windsor Home Page
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>



          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.ontariouniversitiesinfo.ca/assets/files/images/feature%20image%206.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    University Of Windsor Home Page
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>


          </Grid>

        

        <Typography  >It’s a digital world and with this degree, you will have the flexibility to chart your own career path in almost any industry. We offer hands-on learning opportunities and support as you learn computer languages, operation systems, and the mathematics behind computation. University degree holders from another subject area can fast track through this program. This excellent career prep has helped all of our grads find jobs in their chosen fields within two years. UWindsor Computer Science program is tied for first in Ontario university employment rates.

Sample Courses:Introduction to Algorithms and Programming, System Programming, Computer Architecture I: Digital Design, Database Management Systems, Web Information Systems Development

Career Tracks: Web developer, software developer, computer programmer, IT manager, video game developer, graduate studies

ADMISSION REQUIREMENTS FOR APPLICANTS IN CANADA
Course Requirements: Advanced Functions/MHF4U. English/ENG4U.
Strongly Recommended: Calculus & Vectors/MCV4U
Minimum Average: 70% (70% average of math courses)
Minimum Average (Co-op): 75% (Co-op Programs: 75% + 70% average in all attempted math courses, excluding Data Management/MDM4U)
Mean Average (Entering Fall 2019): 82%

Learn more about Course EquivalenciesIt’s a digital world and with this degree, you will have the flexibility to chart your own career path in almost any industry. We offer hands-on learning opportunities and support as you learn computer languages, operation systems, and the mathematics behind computation. University degree holders from another subject area can fast track through this program. This excellent career prep has helped all of our grads find jobs in their chosen fields within two years. UWindsor Computer Science program is tied for first in Ontario university employment rates.

Sample Courses:Introduction to Algorithms and Programming, System Programming, Computer Architecture I: Digital Design, Database Management Systems, Web Information Systems Development

Career Tracks: Web developer, software developer, computer programmer, IT manager, video game developer, graduate studies

ADMISSION REQUIREMENTS FOR APPLICANTS IN CANADA
Course Requirements: Advanced Functions/MHF4U. English/ENG4U.
Strongly Recommended: Calculus & Vectors/MCV4U
Minimum Average: 70% (70% average of math courses)
Minimum Average (Co-op): 75% (Co-op Programs: 75% + 70% average in all attempted math courses, excluding Data Management/MDM4U)
Mean Average (Entering Fall 2019): 82%

</Typography>
      </Container>
        </div>


    )
}


export default HomeContent
