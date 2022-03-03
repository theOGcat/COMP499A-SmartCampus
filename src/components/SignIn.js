import React from 'react'
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from "@mui/material/Alert";
import axois from 'axios';

import { useNavigate } from "react-router-dom";



function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/Homepage">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const theme = createTheme();
  
  export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValidated, setValidation] = useState(true)
    const [isLogin, setLogin] = useState(false)
   


    const navigate = useNavigate()
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const customerEmail = data.get('email');
      const customerPassword = data.get('password');


      if(customerEmail.length > 0 && customerPassword.length > 0 ){
        setValidation(true)
        
      }else{
        setValidation(false)
      }

      if (isValidated){
      setLogin(true)
      const res = await axois.post("http://localhost:3001/SignIn", {
          email: customerEmail,
          Password: customerPassword,
        });
        console.log(res);
        // if(res.status === 200){
        //   navigate('/Homepage')
        // }
     }
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };
  
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {/* if user input is invalid, show alert message on the screen */}
            { !isValidated && 
                <Alert severity="error">Please Complete the Form</Alert>
              }
              {
                isLogin &&<>
                <Typography component="h1" variant="h5" align="center">
              You are Logged in as {email}
            </Typography>
            
            <Button
                onClick={() => {setLogin(false)}}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Logout
              </Button>
              </>
              }

              
              {isLogin === false &&
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onBlur={(e) => setEmail(e.target.value)}
                error={email === ""}
                helperText={email === "" ? "Field is empty" : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onBlur={(e) => setPassword(e.target.value)}
                error={password === ""}
                helperText={password === "" ? "Field is empty" : ""}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/SignUpPage" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
            }
          </Box>
          
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    );
  }