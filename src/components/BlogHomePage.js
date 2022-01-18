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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.ontariouniversitiesinfo.ca/assets/files/images/feature%20image%205.jpg')`,
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
        paddingBottom: theme.spacing(40)
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



function BlogHomeContent() {

    const classes = useStyles();


    return (
        <div className='home-Container'>
        <Box className={classes.hero}>
        <Box>Welcome To Our Blog</Box>
        
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Our Blogs
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            
              <CardActionArea>
                
                <CardMedia
                  className={classes.media}
                  image="https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/unhealthiest-foods-planet.jpg?quality=82&strip=1&resize=640%2C360"
                  
                  title="Contemplative Reptile" 
                  
                />

                <CardContent>
                
                  <Typography gutterBottom variant="h5" component="h2">
                    Food/Resturant Around The University
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  <a href="./Blog">Food/Resturant Around The University</a>
                    
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
                  image="https://windsorite.ca/wp-content/uploads/2021/10/uwindsor-aerial.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    University Of Windsor Home Page
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">

                    <a href="https://www.youtube.com/user/uwindsor">University Of Windsor Youtube Page</a>
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
                  image="https://www.ic.gc.ca/eic/site/051.nsf/vwimages/35560_University-of-Windsor1.jpg/$file/35560_University-of-Windsor1.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    University Of Windsor Home Page
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  <a href="https://twitter.com/uwindsor">University Of Windsor Twitter Page</a>
                  </Typography>
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>


          </Grid>

        

        <Typography  >
          It’s a digital world and with this degree, you will have the flexibility to chart your own career path in almost any industry. 
          We offer hands-on learning opportunities and support as you learn computer languages, operation systems, and the mathematics behind 
          computation. University degree holders from another subject area can fast track through this program. This excellent career prep has 
          helped all of our grads find jobs in their chosen fields within two years. UWindsor Computer Science program is tied for first in Ontario 
          university employment rates.

          Sample Courses:Introduction to Algorithms and Programming, System Programming, Computer Architecture I: Digital Design, Database Management
          Systems, Web Information Systems Development

          Career Tracks: Web developer, software developer, computer programmer, IT manager, video game developer, graduate studies.

        </Typography>

      
      


      </Container>
      
        </div>

      
    )
}


export default BlogHomeContent
