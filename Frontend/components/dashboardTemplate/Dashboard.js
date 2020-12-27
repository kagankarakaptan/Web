import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './Chart';
import Deposits from './Deposits';
import GrowerList from './GrowerList';
import Copyright from "../Copyright"
import { Button } from '@material-ui/core';
import Modal from 'react-modal';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import moment from "moment";
import Api from "../Api";
import { useToasts } from 'react-toast-notifications';




const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    a: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
        color: "#f2f2f2",
        textDecoration: "none",
        fontSize: "17px"
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 1000

    },
    butt: {
        margin: theme.spacing(2)
    },
    pap: {
        width: 500,
        backgroundColor: "#D3D3D3",
        boxShadow: theme.shadows[24],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Dashboard = () => {

    const [show, setShow] = React.useState(false);

    const growerModalSwitch = () => setShow(!show);

    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const { addToast } = useToasts();


    const validation = target => {
        //frontend check!
        if (!(/^$|.+@.+..+/).test(target.email)) return false;
        return true;
    }

    const formateData = data => ({
        ...data,
        country_code: parseInt(data.country_code ? data.country_code : 0),
        coa_number: parseInt(data.coa_number ? data.coa_number : 0),
    });

    const handleSubmit = e => {
        e.preventDefault();


        let values = {

            created_at: moment().format("YYYY-MM-DD"),
            full_name: document.getElementById("fullName").value,
            GovermentID: document.getElementById("govID").value,
            country_code: document.getElementById("countryCode").value,
            coa_number: document.getElementById("coaNumber").value,
            mobile: document.getElementById("mobile").value,
            email: document.getElementById("email").value,
            address: document.getElementById("address").value,
            address2: document.getElementById("address2").value,

        }

        values = formateData(values);

        if (validation(values)) {
            Api.Growers().create(values)
                .then(res => {
                    addToast("submitted successfully", { appearance: "success", autoDismiss: true })

                })
                .catch(err => {
                    addToast(err.response.status, { appearance: "error", autoDismiss: true })

                })

        }





    }



    return (
        <main className={classes.content}>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper className={fixedHeightPaper}>
                            <Chart />
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Deposits />
                        </Paper>
                    </Grid>
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <GrowerList />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <a href="productions" className={classes.a}>
                            Productions
                        </a>
                    </Grid>
                    <Grid item xs={12}>
                        <Button className={classes.a} onClick={growerModalSwitch}> Add Grower </Button>
                    </Grid>


                </Grid>

                <Modal
                    isOpen={show}
                    className={classes.modal}

                >
                    <Paper className={classes.pap}>
                        <Typography component="h1" variant="h4" align="center">
                            Grower Information
                                            </Typography>
                        <React.Fragment>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="fullName"
                                            label="Full Name"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="govID"
                                            label="Government ID Number"
                                            fullWidth
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="countryCode"
                                            label="Country Code"
                                            fullWidth
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="coaNumber"
                                            label="C.O.A. Number"
                                            fullWidth
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="address"
                                            label="Address"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="address2"
                                            label="Address 2"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="email"
                                            label="E-Mail"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="mobile"
                                            label="Mobile Number"
                                            fullWidth
                                            type="number"
                                        />
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.butt}
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        className={classes.butt}
                                        onClick={growerModalSwitch}
                                    >
                                        Close
                                    </Button>
                                </Grid>
                            </form>
                        </React.Fragment>
                    </Paper>

                </Modal>


                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    );
}

export default Dashboard;