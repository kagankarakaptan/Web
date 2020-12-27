import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useToasts } from 'react-toast-notifications';
import Copyright from "../components/Copyright"
import Api from '../components/Api';
import Cookies from 'universal-cookie';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {

  const cookies = new Cookies();
  const classes = useStyles();
  const { addToast } = useToasts();

  const home = "http://localhost:3000/";

  if (cookies.get("loginToken") === "true") window.location.href = home;

  const validation = target => {
    //frontend check!
    if (!(/^$|.+@.+..+/).test(target.email)) return false;
    return true;
  }

  const handleSubmit = e => {

    e.preventDefault();

    const values = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    }

    //Acı Dev Logini
    if (values.email === "dev") {
      cookies.set("loginToken", JSON.stringify(true));
      cookies.set("loginEmail", JSON.stringify(values.email));
      window.location.href = home;
    }
    //Acı Dev Logini

    else if (validation(values)) {
      Api.Users().loginCheck(values)
        .then(res => {
          if (res.status === 200) {
            cookies.set("loginToken", JSON.stringify(true));
            cookies.set("loginEmail", JSON.stringify(values.email));

            window.location.href = home;
          }
        })
        .catch(err => {
          if (err.response.status === 401) addToast("Access denied!", { appearance: "error", autoDismiss: true });
          else if (err.response.status === 404) addToast("E-mail not found!", { appearance: "error", autoDismiss: true });
          //if (err.response.status === 500) addToast("Couldn't get a response from the server!", { appearance: "error", autoDismiss: true });
        })
    }
    else
      addToast("email field is wrong", { appearance: "warning" })
  }

  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} lg={9} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} lg={3} component={Paper} elevation={24} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h6">
              Login
          </Typography>

            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                id="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                id="password"
                type="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
            </Button>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;