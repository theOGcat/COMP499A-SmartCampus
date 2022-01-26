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
        <Box>Welcome To Our Blogs</Box>
        
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
                  <a href="./FoodBlog">Food/Resturant Around The University</a>
                    
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
                  image="https://media.wired.com/photos/5c9040ee4950d24718d6da99/1:1/w_1800,h_1800,c_limit/shoppingcart-1066110386.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Shopping/Malls Around The University
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">

                    <a href="./FoodBlog">Shopping/Malls Around The University</a>
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
                  image="https://cdn.vox-cdn.com/thumbor/ADYxDCTUKewcGxhYGZ_XMUh4uzQ=/0x0:2040x1360/1200x675/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/64035800/acastro_190618_1777_cloud_gaming_0003.0.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   Gaming And News  
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  <a href="./FoodBlog">Gaming And News </a>
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
