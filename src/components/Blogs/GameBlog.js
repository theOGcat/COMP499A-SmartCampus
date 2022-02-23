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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.game.de/wp-content/uploads/2020/09/iStock-1050763638.jpg')`,
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



function Blogpage3() {

    const classes = useStyles();


    return (
        <div className='home-Container'>
        <Box className={classes.hero}>
        <Box>Games/News</Box>
        
        </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h3" className={classes.blogTitle}>
          Games
        </Typography>
        <Typography variant="h4" >
        1st: League Of Legends:
        </Typography>
        
        <Typography gutterBottom variant="h6" component="h2">
                    
        Platform: PC/MOBILE

        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            
              <CardActionArea>
                
                <CardMedia
                  className={classes.media}
                  image="https://cdn1.dotesports.com/wp-content/uploads/2019/09/12195522/league-of-legends.jpg"
                  
                  title="Contemplative Reptile" 
                  
                />

                <CardContent>
                
                  <Typography gutterBottom variant="h5" component="h2">
                  League Of Legends
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
                  image="https://www.washingtonpost.com/resizer/6zOuyeY-z31e5Uwf8mHiKKuHoNA=/arc-anglerfish-washpost-prod-washpost/public/AAW3H3YGWRBOTJ6OWY65HA3A4M.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    5V5 Moba Game
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
                  image="https://resizing.flixster.com/nkzTC6k89ZUcSQTfmeGOJGsiuZA=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvMzRiYTc0NzUtZjJhNS00ZTlhLWI4ODMtY2MxNWNjMWU1ZjJmLmpwZw=="
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    One of the most Popular Game?
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>


          </Grid>

        

          <Typography  >
          <Typography variant="h4">About League of Legends:</Typography>
          League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and 
          published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a 
          stand-alone game in the same genre. Since its release in October 2009, the game has been free-to-play and is monetized through 
          purchasable character customization. The game is available for Microsoft Windows and macOS.

          In the game, two teams of five players battle in player versus player combat, each team occupying and defending their half of the map. 
          Each of the ten players controls a character, known as a "champion", with unique abilities and differing styles of play. During a match, 
          champions become more powerful by collecting experience points, earning gold, and purchasing items to defeat the opposing team. In the 
          game's main mode, Summoner's Rift, a team wins by pushing through to the enemy base and destroying their "Nexus", a large structure located 
          within.

          League of Legends received generally positive reviews; critics highlighted its accessibility, character designs, and production value. 
          The game's long lifespan has resulted in a critical reappraisal, with reviews trending positively; the negative and abusive in-game behavior
          of its players, criticized since early in the game's lifetime, persists despite Riot's attempts to fix the problem. In 2019, the game 
          regularly peaked at eight million concurrent players, and its popularity has led to tie-ins such as music videos, comic books, short stories, 
          and an animated series, Arcane. Its success has also spawned several spin-off video games, including a mobile version, a digital collectible 
          card game and a turn-based role-playing game, among others. A massively multiplayer online role-playing game based on the property is in 
          development.

          Regularly cited as the world's largest esport, the game has an international competitive scene consisting of 12 leagues. These domestic leagues 
          culminate in the annual League of Legends World Championship. The 2019 event registered over 100 million unique viewers, peaking at a concurrent
          viewership of 44 million. Domestic and international events have been broadcast on livestreaming websites such as Twitch, YouTube, Bilibili,
          and on cable television sports channel ESPN.


        </Typography>
      
      
      














        <Typography variant="h4" >
        2nd: Counter-Strike: Global Offensive:
        </Typography>
        <Typography gutterBottom variant="h6" component="h2">
                    
        Platform: PC/PS/XBOX

        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            
              <CardActionArea>
                
                <CardMedia
                  className={classes.media}
                  image="https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1641233427"
                  
                  title="Contemplative Reptile" 
                  
                />

                <CardContent>
                
                  <Typography gutterBottom variant="h5" component="h2">
                    2nd: Counter-Strike: Global Offensive
                   
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
                  image="https://static-cdn.jtvnw.net/ttv-boxart/32399-285x380.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  One of the best 5v5 fps game?
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
                  image="https://variety.com/wp-content/uploads/2018/07/csgo-image.png"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Guns/Bombs
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>


          </Grid>

        

          <Typography  >
          <Typography variant="h4">About Counter-Strike: Global Offensive</Typography>
          Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter developed by Valve and Hidden 
          Path Entertainment. It is the fourth game in the Counter-Strike series. Developed for over two years, Global Offensive was
           released for Windows, macOS, Xbox 360, and PlayStation 3 in August 2012, and for Linux in 2014. Valve still regularly updates 
           the game, both with smaller balancing patches and larger content additions.

            The game pits two teams, Terrorists and Counter-Terrorists, against each other in different objective-based game modes. The most common
          game modes involve the Terrorists planting a bomb while Counter-Terrorists attempt to stop them, or Counter-Terrorists attempting to 
            rescue hostages that the Terrorists have captured. There are nine official game modes, all of which have distinct characteristics specific 
            to that mode. The game also has matchmaking support that allows players to play on dedicated Valve servers, in addition to community-hosted 
            servers with custom maps and game modes. A battle-royale game-mode, "Danger Zone", was introduced in December 2018.


            Global Offensive received positive reviews from critics on release, who praised the game for its gameplay and faithfulness to the Counter-Strike 
            series, though it was criticized for some early features and the differences between the console and PC versions. Since its release, it has drawn
            in an estimated 11 million players per month, and remains one of the most played games on Valve's Steam platform. In December 2018, 
            Valve transitioned the game to a free-to-play model, focusing on revenue from cosmetic items.

            The game has an active esports scene, continuing the history of international competitive play from previous games in the series. 
            Teams compete in professional leagues and tournaments, and Global Offensive is now one of the largest global esports.
            Global Offensive, like prior games in the Counter-Strike series, is an objective-based, multiplayer first-person shooter. 
            Two opposing teams, the Terrorists and the Counter-Terrorists, compete in game modes to repeatedly complete objectives, 
            such as securing a location to plant or defuse a bomb and rescuing or capturing hostages.[1][2] At the end of each short round, 
            players are rewarded based on individual and team performance with in-game currency to spend on other weapons or utility in subsequent
             rounds. Winning rounds generally rewards more money than losing does, and completing map-based objectives, including killing 
             enemies, gives additional cash bonuses.
        </Typography>
      




















        <Typography variant="h4" >
        3rd: Apex Legends:
        </Typography>
        <Typography gutterBottom variant="h6" component="h2">
                    
                    Platform: PC/PS/SWITCH/XBOX

        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            
              <CardActionArea>
                
                <CardMedia
                  className={classes.media}
                  image="https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg"
                  
                  title="Contemplative Reptile" 
                  
                />

                <CardContent>
                
                  <Typography gutterBottom variant="h5" component="h2">
                    3rd: Apex Legends
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
                  image="https://cdn.vox-cdn.com/thumbor/3sL1FukaWcwtoZ3z6_TQ6XiYpcE=/0x0:1920x1080/1400x933/filters:focal(807x387:1113x693):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/63753699/Apex_Legends_20190206091643.0.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  a free-to-play battle royale-hero shooter game
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
                  image="https://www.pcgamesn.com/wp-content/uploads/2021/09/Apex-Legends-pathfinder-sad.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  People love it
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>


          </Grid>

        

          <Typography  >
          <Typography variant="h4">About Apex Legends</Typography>
          Apex Legends is an online multiplayer battle royale game featuring squads of three players using pre-made characters with
           distinctive abilities, called "Legends", similar to those of hero shooters.[1] Alternate modes have been introduced allowing for 
           single and for two-player squads since the game's release.[2][3] The game is free-to-play and monetized through microtransactions
            and loot boxes, which allow the player to spend both real money and in-game currency on cosmetic items, such as outfits for the 
            Legends and new colors for weapons.[4][5]

            Each match generally features twenty teams of three-player squads. Players can join friends in a squad or can be matched randomly with 
            other players. Before the match, each player on the squad selects one of the 19 playable characters (as of season 11), with the exception
            that no character may be selected more than once by a squad. Each character in the squad has a unique design, personality, and abilities 
            that provide different playstyles to the team. All teams are then placed on an aircraft that passes over the game map. One player in each
            squad is the jumpmaster, selecting when the squad should skydive out of the aircraft and where to land with the concurrence of the other 
            squad members. However, players are free to deviate from the squad's path.

            Once on the ground, the squad can scavenge for weapons, armor, and other equipment that is scattered around buildings, or in crates randomly
            distributed around the map, while keeping an eye out for other squads. Apex Legends includes a nonverbal communication "ping system" which 
            allows players to use their game controller to communicate to their squad certain directions, weapon locations, enemies, and suggested 
            strategies.[6] While the game offers movement options similar to other shooters, it includes some of the gameplay features of previous 
            Titanfall games, such as the ability to climb over short walls, slide down inclined surfaces, and use zip-lines to traverse an area quickly.[7]

                Over time, the game's safe zone will reduce in size around a randomly-selected point on the map; players outside the safe zone take damage 
                and may die if they do not reach the safe zone in time. This also confines squads to smaller spaces to force encounters. The last squad with
            any members left alive is crowned the "Apex Champions" of that match. Players who become knocked down in the course of a game can be revived 
            by their squadmates. Should a player be killed completely, they can still be resurrected if their team member(s) collect their respawn banner, 
            which appears at the place where they died, and bring it to one of several beacons on the island. The banner, however, must be collected within 
            a time limit, before expiring and fully eliminating the player.[1]

            Season 9 introduced a new permanent mode named "Arena". In this mode, players form into three-player squads and fight against another squad 
            in a 3v3 team deathmatch over a series of rounds to determine the winner of the match. Teams win when their team has at least 3 points and 
            is 2 points ahead. Additionally, if a game should drag on to round 9 (where both teams have 4 points) a final sudden death round begins. 
            Respawn stated this scoring system "prevents total blowout games from dragging on for too long" and also "lets more competitive games keep 
            the heat going for longer". Rather than skydiving onto the map and gathering equipment like in the battle royale mode, players spawn in 
            a "shop" where they can purchase equipment and charges of their Legend's abilities using materials earned in the previous rounds to prepare 
            for the next fight. This variation of the game borrows mechanics from other shooters such as Counter Strike and Valorant. The mode is the
            first permanent deviation away from the battle royale format.
        </Typography>







        <CommentBox apiUrl="api/blog/comments.json" />

      </Container>
      
        </div>

      
    )
}


export default Blogpage3


          
        