import React from 'react';


import styled from "styled-components";
import { useState } from 'react';
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
import axois from 'axios';
import UserComment from '../Comment/UserComment';



const useStyles = makeStyles((theme) => ({

    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://imageio.forbes.com/specials-images/dam/imageserve/1138257321/960x0.jpg?fit=bounds&format=jpg&width=960')`,
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



function Blogpage2({isLogin, userID, firstName, lastName}) {

  const classes = useStyles();
  //const [isLogin, setLogin] = useState(false)
 


  // useEffect(() => {
  //   handleSignIn(isLogin); // pass info back to parent
  // }, [isLogin]);
  
  console.log("Shopping Blog isloggedin: " + isLogin)
  const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

    return (
        <div className='home-Container'>
        <Box className={classes.hero}>
        <Box>Best Shopping Places In Windsor</Box>
        
        </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h3" className={classes.blogTitle}>
          The Shopping Malls/Places
        </Typography>
        <Typography variant="h4" >
        1st: Devonshire Mall:
        </Typography>
        
        <Typography gutterBottom variant="h6" component="h2">
                    
        Address: 3100 Howard Ave, Windsor, ON N8X 3Y8

        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            
              <CardActionArea>
                
                <CardMedia
                  className={classes.media}
                  image="https://decoustics.com/wp-content/uploads/2019/07/devonshire_mall_linear_wood_ceiling_acoustic_nauf_decoustics-8-1140x600-1567198157.jpg"
                  
                  title="Contemplative Reptile" 
                  
                />

                <CardContent>
                
                  <Typography gutterBottom variant="h5" component="h2">
                  Devonshire Mall
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
                  image="https://media-cdn.tripadvisor.com/media/photo-s/16/63/27/47/devonshire-mall.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Largest Shopping Mall in Windsor?
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
                  image="http://windsorite.ca/wp-content/uploads/2012/01/devonshire-600x394.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nearest Large Shopping Center Around the University
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>


          </Grid>

        

          <Typography  >
          <Typography variant="h4">About Devonshire Mall:</Typography>
          Windsor's largest shopping centre, with the best selection of retailers in the region. A shopping mall in Windsor, Ontario, Canada. 
          It was built in 1970 at the location of the former Devonshire Raceway, a horse racing track, that had existed since 1935. The mall
           has been expanded several times since its opening, in 1981, 1996, 1999-2002, 2008, and 2018.[1] At over 175 stores, it is by far the 
           largest mall in Windsor. Devonshire Mall was sold by Ivanhoé Cambridge in 2015 to the Healthcare of Ontario Pension Plan and is 
           currently operated by Cushman & Wakefield.  
           An inviting and Beautiful Shopping Experience
            The retail expansion is complimented by a program of renovations throughout the mall creating
              a bright, modern and welcoming feel throughout the centre. Floor and ceiling treatment
          construction continues as well as the upgrades at each entranceway and the addition of the
          new entranceway leading to the new food court.
          About Devonshire Mall
          Devonshire Mall is located in Windsor, Ontario and is the Windsor Essex region's largest
          premier shopping centre featuring more than 160 stores and services with over one million
          square feet of retail space. Devonshire Mall is owned by Healthcare of Ontario Pension Plan
          (HOOPP) and managed by Cushman & Wakefield Asset Management Inc. HOOPP has been a
          long term investor in Devonshire Mall and increased its ownership to 100% in 2015,
          demonstrating a commitment to Devonshire Mall and the Windsor community.
          About HOOPP
          Healthcare of Ontario Pension Plan (HOOPP) is a defined benefit pension plan that is dedicated
          to providing a secure retirement income to more than 309,000 workers in Ontario's healthcare
          sector. More than 490 employers across the province offer HOOPP to their employees. With
          more than $63 billion in assets, HOOPP is one of the largest defined benefit pension plans in
          Ontario, and in Canada. HOOPP's proven strategy and track record of investment returns have
          made HOOPP a leader among its global peers.


        </Typography>
      
      
      














        <Typography variant="h4" >
        2nd: Costco Wholesale:
        </Typography>
        <Typography gutterBottom variant="h6" component="h2">
                    
                    Address: 4411 Walker Rd, Windsor, ON N8W 3T6

        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            
              <CardActionArea>
                
                <CardMedia
                  className={classes.media}
                  image="https://media-exp1.licdn.com/dms/image/C4E1BAQHQKqO0DbY4OA/company-background_10000/0/1553094224126?e=2159024400&v=beta&t=evGEs9tBiyh_LUTfJJee_W-KEldUj9LoyFEFf2aq8Ec"
                  
                  title="Contemplative Reptile" 
                  
                />

                <CardContent>
                
                  <Typography gutterBottom variant="h5" component="h2">
                    2nd: Costco Wholesale
                   
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
                  image="https://www.eatthis.com/wp-content/uploads/sites/4/2021/03/costco-card.jpg?quality=82&strip=all"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  a chain of membership-only big-box retail stores
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
                  image="https://static.seekingalpha.com/uploads/2018/4/16/saupload_p-1-google-express-lets-you-shop-at-costco-without-a-membership-1.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    People Love It
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>


          </Grid>

        

          <Typography  >
          <Typography variant="h4">About Costco Wholesale</Typography>
          Costco Wholesale Corporation (doing business as Costco Wholesale and also known simply as Costco) is an American multinational 
          corporation which operates a chain of membership-only big-box retail stores (warehouse club). As of 2020, Costco was the fifth 
          largest retailer in the world,and the world's largest retailer of choice and prime beef, organic foods, rotisserie chicken, and 
          wine as of 2016. In 2021, Costco was ranked #10 on the Fortune 500 rankings of the largest United States corporations by total 
          revenue. Costco's worldwide headquarters are in Issaquah, Washington, an eastern suburb of Seattle, although its Kirkland Signature 
          house label bears the name of its former location in Kirkland. The company opened its first warehouse (the chain's term for its 
          retail outlets) in Seattle in 1983. Through mergers, however, Costco's corporate history dates back to 1976, when its former 
          competitor Price Club was founded in San Diego, California. As of March 2021, Costco has 804 warehouses worldwide:
          558 in the United States (including the District of Columbia and Puerto Rico), 103 in Canada, 39 in Mexico, 29 in the United Kingdom, 
          27 in Japan, 16 in South Korea, 14 in Taiwan, 13 in Australia, 4 in Spain, 2 in France, 1 in Iceland and 1 in mainland China. Costco 
          regularly opens new locations. The company plans to open warehouses in 2022 for the first time in New Zealand, and Sweden.
          Costco's history began with Sol Price and his son, Robert, opening the first Price Club warehouse on July 12, 1976, on Morena 
          Boulevard in San Diego, California. This gave birth to a new concept: a retail warehouse club. The Price family placed Price Club 
          Warehouse #1 inside a series of old airplane hangars previously owned by Howard Hughes; that warehouse, now known as Costco 
          Warehouse #401, is still in operation today.
        </Typography>
      




















        <Typography variant="h4" >
        3rd: Windsor Crossing Premium Outlet Mall:
        </Typography>
        <Typography gutterBottom variant="h6" component="h2">
                    
                    Address: 1555 Talbot Rd, Windsor, ON N9H 2N2

        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            
              <CardActionArea>
                
                <CardMedia
                  className={classes.media}
                  image="https://visitwindsoressex.com/wp-content/uploads/2018/04/Windsor-Crossing_3-scaled.jpg"
                  
                  title="Contemplative Reptile" 
                  
                />

                <CardContent>
                
                  <Typography gutterBottom variant="h5" component="h2">
                    3rd: Windsor Crossing Premium Outlet Mall
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
                  image="https://www.shopping-canada.com/mall-map/windsor-crossing-outlet-mall.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Growing Outdoor Mall located in the Town of La Salle
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
                  image="https://grouptour.com/gtimages/w/WindsorCrossingOutletsB.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  a modern open concept hybrid-outlet centre
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>


          </Grid>

        

          <Typography  >
          <Typography variant="h4">About Windsor Crossing Premium Outlet Mall</Typography>
          Windsor Crossing Premium Outlets is the only outlet mall of its kind in the Windsor area.  
          Conveniently located off Highway 401 and only minutes from the Ambassador Bridge providing easy access from Michigan and Ohio.

          Find the best deals and latest trends in an open-air outlet shopping centre with tree-lined streets and pedestrian friendly walkways. 
          Our collection of premium brand names, such as Banana Republic, The Gap, Levi's, Columbia and Tommy Hilfiger, tailored to designer 
          fashion, athletic apparel, shoes, and home accessories, as well as the latest brands at up to 70% off - it's a shopping experience 
          like no other. Your one-stop shopping destination for great savings, the best deals and deepest discounts.
          Windsor Crossing is a modern open concept hybrid-outlet centre which boasts an attractive tenant roster of national and international 
          brands featuring both full and off-price retailers. The Landlord has exciting initiatives which include next phase expansion development
          of Windsor Crossing Premium Outlets.
          OPEN 363 DAYS OF THE YEAR.
        </Typography>







        {isLogin &&<>
          
          <Typography component="h1" variant="h5" align="center">
          You are Logged in as {userID + " " + firstName + " " + lastName}
          </Typography>
          <UserComment pageNum={2} firstName={firstName} lastName={lastName} userID={userID} />
          
        </>
        }

        
        {isLogin === false && <>
          <Typography component="h1" variant="h5" align="center" >
              You are Not Signed In, Please Sign in to see the comment.
          </Typography>
          <a href="/SignIn" target="_blank">
          <Button> Sign In </Button>
          </a>
          
          </>
        }


      </Container>
      
        </div>

      
    )
}


export default Blogpage2


          
        