import React from 'react';
import CommentBox from '../BlogPages/comment-box';



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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.mcgill.ca/oss/files/oss/styles/hd/public/eatables-3873462_1920.jpg?itok=u-zzZg1P&timestamp=1560998397')`,
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



function Blogpage() {

    const classes = useStyles();


    return (
        <div className='home-Container'>
        <Box className={classes.hero}>
        <Box>Best Food You Could Find In Windsor</Box>
        
        </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h3" className={classes.blogTitle}>
          Name Of Restaurants
        </Typography>
        <Typography variant="h4" >
        1st: Shanghai Bistro:
        </Typography>
        
        <Typography gutterBottom variant="h6" component="h2">
                    
        Address: 2045 Wyandotte St W, Windsor, ON N9B 1J8

        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            
              <CardActionArea>
                
                <CardMedia
                  className={classes.media}
                  image="https://cdn.usarestaurants.info/assets/uploads/00514be205eca5313a5a53c2797470c3_-canada-ontario-essex-county-windsor-shanghai-bistro-%E4%B8%8A%E6%B5%B7%E5%B0%8F%E9%A6%86-519-253-8880htm.jpg"
                  
                  title="Contemplative Reptile" 
                  
                />

                <CardContent>
                
                  <Typography gutterBottom variant="h5" component="h2">
                    Shanghai Bistro
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
                  image="https://10619-2.s.cdn12.com/c8/Restaurant-Shanghai-Bistro-food.jpg?@m@t@s@d"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Best Asian/Chinese Food Restaurant in Windsor?
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
                  image="https://img.restaurantguru.com/ce5a-Restaurant-Shanghai-Bistro-dishes.jpg"
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
          <Typography variant="h4">About Shanghai Bistro:</Typography>
        Shanghai Bristo Is A Fantastic Experience!!Amazing Aromas Of Freshly Made Dumplings Fill The Entire Restaurant 
        As You Wait For Your Order!Staff Are Friendly And Accommodating!Thank You Chester For Your Amazing Service.
        Highly Recommend This Delightful RestaurantPick-up, Delivery Or Eat In Available!10 Years In Windsor. 
        It is totally deserving of it's Google rating. This little Shanghainese gem pumps out dishes with mouth warming flavours in an 
        unpretentious eating cafe. Soup filled dumplings which explode in your mouth careful hot, hot, hot. Boiled dumplings stuffed heavy with pork, 
        shrimp and veggie, juicy not dry. Beans in garlic, tender, the light sauce warms your lips after each mouthful. Fresh squid tender not tough 
        in succulent teriyaki sauce that dribbles down your chin with each slender morsel you pop in your mouth. The savory flavor of the pork belly 
        enhanced by the fiery chilies. Pork belly, chili, onion and rice on each bite an orgasm of flavor.To cap the meal off, savory red bean pancakes. 
        Every plate cleaned to the last morsel as to leave a shred of food evidence would be a crime for this indulgence. I've found a gem to hike down 
        to from Blenheim every couple of weeks. I'm already planning what I want to try next.  
      

        </Typography>
      
      
      














        <Typography variant="h4" >
        2nd: Saigon House:
        </Typography>
        <Typography gutterBottom variant="h6" component="h2">
                    
                    Address: 2169 Wyandotte St W, Windsor, ON N9B 1K1

        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            
              <CardActionArea>
                
                <CardMedia
                  className={classes.media}
                  image="https://s3-media0.fl.yelpcdn.com/bphoto/SWkw62PAYKYus-MQgwQjqA/l.jpg"
                  
                  title="Contemplative Reptile" 
                  
                />

                <CardContent>
                
                  <Typography gutterBottom variant="h5" component="h2">
                    2nd: Saigon House
                   
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
                  image="https://d1ralsognjng37.cloudfront.net/5ead14f3-d38d-43fb-ba88-a89ebcb9b160.jpeg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Best Place To Have Rice Noodles/Fried Rice Vietnamese Restaurant in Windsor?
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
                  image="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=jpeg,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/bd385e4d-b561-4cce-86f6-8d164e065101.073"
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
          <Typography variant="h4">About Saigon House</Typography>
          Great food , beautiful portions.
          Food is very tasty, great menu with a very nice selection of a great variety of dishes.
          The place is very clean and the service is fantastic.
          Make sure you tell the level of spice you wish to have since it is generally on the Hot side!!!
          The proportions are fantastic for the price and the food is so so good! I love Saigon House. 
          It's so so good, my friends and I eat there at least once a week. Their fresh rolls (without pork) and pad Thai 
          are definitely a staple in my diet. The peanut sauce that comes with the fresh rolls is served in heaven for sure it's so so good. 
          I said it once and I'll say it again I LOVE SAIGON HOUSE.
          Came here with some friends while visiting Windsor for Christmas holidays.  Decided to try it based on a friends recommendation.
          Interior was clean and nice.  Service was friendly. Food wise.... I was expecting a full Vietnamese restaurant, but their selection 
          was pretty slim.  They didn't have tripe on their pho list, and their rice dishes only had choice of meat and egg really (no shredded pork,
          or steamed egg quiche).  They were missing most of the standard toppings for all their Viet dishes.  Because of this I opted to try their 
          Thai red curry instead (even though I was craving Viet food).  It was good, but more spicy than most red curries I've had at other
          restaurants. I give honest and straight-forward reviews and I was a little skeptical about the authenticity of this restaurant from 
          the name "Saigon House". A typical name of a pho restaurant would be a vietnamese name, numbers, etc. Decor was nice inside. We were given 
          the option to pick our own seats which was also nice. Menu selection was fine (bonus: relative to portion size, prices are cheaper as well). 
          I ordered a typical pho dish. Great portions! Which is very good. Taste was great, broth smelled & tasted great. Their iced/hot coffee was 
          excellent too. The first time I was here I ordered a vermicelli (bun) dish, but I wasn't fan of their nuoc mam sauce. I would give this 
          restaurant 5 stars, but the one problem I had was the parking (-1 star). No private parking for customers. For students at the university who 
          don't want to walk far to xic-lo, this is a GREAT alternative.
        </Typography>
      




















        <Typography variant="h4" >
        3rd: Saigon House:
        </Typography>
        <Typography gutterBottom variant="h6" component="h2">
                    
                    Address: 2169 Wyandotte St W, Windsor, ON N9B 1K1

        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            
              <CardActionArea>
                
                <CardMedia
                  className={classes.media}
                  image="https://s3-media0.fl.yelpcdn.com/bphoto/SWkw62PAYKYus-MQgwQjqA/l.jpg"
                  
                  title="Contemplative Reptile" 
                  
                />

                <CardContent>
                
                  <Typography gutterBottom variant="h5" component="h2">
                    3rd: Saigon House
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
                  image="https://d1ralsognjng37.cloudfront.net/5ead14f3-d38d-43fb-ba88-a89ebcb9b160.jpeg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Best Place To Have Rice Noodles/Fried Rice Vietnamese Restaurant in Windsor?
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
                  image="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=jpeg,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/bd385e4d-b561-4cce-86f6-8d164e065101.073"
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
          <Typography variant="h4">About Saigon House</Typography>
          Great food , beautiful portions.
          Food is very tasty, great menu with a very nice selection of a great variety of dishes.
          The place is very clean and the service is fantastic.
          Make sure you tell the level of spice you wish to have since it is generally on the Hot side!!!
          The proportions are fantastic for the price and the food is so so good! I love Saigon House. 
          It's so so good, my friends and I eat there at least once a week. Their fresh rolls (without pork) and pad Thai 
          are definitely a staple in my diet. The peanut sauce that comes with the fresh rolls is served in heaven for sure it's so so good. 
          I said it once and I'll say it again I LOVE SAIGON HOUSE.
          Came here with some friends while visiting Windsor for Christmas holidays.  Decided to try it based on a friends recommendation.
          Interior was clean and nice.  Service was friendly. Food wise.... I was expecting a full Vietnamese restaurant, but their selection 
          was pretty slim.  They didn't have tripe on their pho list, and their rice dishes only had choice of meat and egg really (no shredded pork,
          or steamed egg quiche).  They were missing most of the standard toppings for all their Viet dishes.  Because of this I opted to try their 
          Thai red curry instead (even though I was craving Viet food).  It was good, but more spicy than most red curries I've had at other
          restaurants. I give honest and straight-forward reviews and I was a little skeptical about the authenticity of this restaurant from 
          the name "Saigon House". A typical name of a pho restaurant would be a vietnamese name, numbers, etc. Decor was nice inside. We were given 
          the option to pick our own seats which was also nice. Menu selection was fine (bonus: relative to portion size, prices are cheaper as well). 
          I ordered a typical pho dish. Great portions! Which is very good. Taste was great, broth smelled & tasted great. Their iced/hot coffee was 
          excellent too. The first time I was here I ordered a vermicelli (bun) dish, but I wasn't fan of their nuoc mam sauce. I would give this 
          restaurant 5 stars, but the one problem I had was the parking (-1 star). No private parking for customers. For students at the university who 
          don't want to walk far to xic-lo, this is a GREAT alternative.
        </Typography>







        <CommentBox apiUrl="api/blog/comments.json" />

      </Container>
      
        </div>

      
    )
}


export default Blogpage


          
        