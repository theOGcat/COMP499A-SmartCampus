import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';



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
        paddingTop: theme.spacing(3)
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
          Articles
        </Typography>



      </Container>
        </div>


    )
}


export default HomeContent
