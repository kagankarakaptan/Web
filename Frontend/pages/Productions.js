import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Copyright from "../components/Copyright";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Cookies from 'universal-cookie';
import moment from "moment";
import { Button, InputLabel } from '@material-ui/core';
import Api from "../components/Api";
import { useToasts } from 'react-toast-notifications';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));

const Productions = () => {
    const classes = useStyles();
    const cookies = new Cookies();
    const { addToast } = useToasts();


    const date = moment().format("DD.MM.YYYY");

    //const validation = target => {

    //};

    const formateData = data => ({
        ...data,
        wet_amount: parseFloat(data.wet_amount ? data.wet_amount : 0),
        dry_amount: parseFloat(data.dry_amount ? data.dry_amount : 0),
        accounted_amount: parseFloat(data.accounted_amount ? data.accounted_amount : 0),
        not_accounted_amount: parseFloat(data.not_accounted_amount ? data.not_accounted_amount : 0),
        total_amount: parseFloat(data.total_amount ? data.total_amount : 0),
        average_price: parseFloat(data.average_price ? data.average_price : 0),
        estimated_cert_amount: parseFloat(data.estimated_cert_amount ? data.estimated_cert_amount : 0),
        efficiency_weight: parseFloat(data.efficiency_weight ? data.efficiency_weight : 0),
        average_efficiency: parseFloat(data.average_efficiency ? data.average_efficiency : 0),
        total_red_amount: parseFloat(data.total_red_amount ? data.total_red_amount : 0),
        average_red_amount: parseFloat(data.average_red_amount ? data.average_red_amount : 0),
        average_grams: parseFloat(data.average_grams ? data.average_grams : 0),
    });

    const handleSubmit = e => {
        e.preventDefault();

        let values = {
            kind: document.getElementById("kind").value,
            variety: document.getElementById("variety").value,
            production_year: moment().format("YYYY-MM-DD"),
            diagnosis: document.getElementById("diagnosis").checked,
            wet_amount: document.getElementById("wetAmount").value,
            dry_amount: document.getElementById("dryAmount").value,
            accounted_amount: document.getElementById("accountedAmount").value,
            not_accounted_amount: document.getElementById("nAccountedAmount").value,
            total_amount: document.getElementById("totalAmount").value,
            average_price: document.getElementById("averagePrice").value,
            estimated_cert_amount: document.getElementById("estCertAmount").value,
            efficiency_weight: document.getElementById("effWeight").value,
            average_efficiency: document.getElementById("avgEff").value,
            total_red_amount: document.getElementById("totalRed").value,
            average_red_amount: document.getElementById("avgRed").value,
            average_grams: document.getElementById("avgGrams").value
        }

        values = formateData(values);

        Api.Products().create(values)
            .then(res => {
                addToast("submitted successfully", { appearance: "success", autoDismiss: true })
            })
            .catch(err => {
                addToast("an error occured!", { appearance: "error", autoDismiss: true })
            })

    }

    if (cookies.get("loginToken") === "true")
        return (
            <div>
                <React.Fragment>
                    <main className={classes.layout}>
                        <Paper className={classes.paper}>
                            <Typography component="h1" variant="h4" align="center">
                                Products
                            </Typography>
                            <React.Fragment>
                                <Typography
                                    align="center"
                                >
                                    {date}
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <InputLabel>Kind</InputLabel>
                                            <Select
                                                required
                                                id="kind"
                                                fullWidth
                                                variant="standard"
                                            >
                                                <MenuItem value="Rice">Rice</MenuItem>
                                                <MenuItem value="seed2">seed2</MenuItem>
                                                <MenuItem value="seed3">seed3</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <InputLabel>Variety</InputLabel>
                                            <Select
                                                required
                                                id="variety"
                                                fullWidth
                                                variant="standard"
                                            >
                                                <MenuItem value="Toros CL">Toros CL</MenuItem>
                                                <MenuItem value="Luna CL">Luna CL</MenuItem>
                                                <MenuItem value="Cammeo">Cammeo</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="wetAmount"
                                                label="Wet Amount"
                                                fullWidth
                                                variant="filled"
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="dryAmount"
                                                label="Dry Amount"
                                                fullWidth
                                                variant="filled"
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="accountedAmount"
                                                label="Accounted Amount"
                                                fullWidth
                                                variant="filled"
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="nAccountedAmount"
                                                label="Unaccounted Amount"
                                                fullWidth
                                                variant="filled"
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="totalAmount"
                                                label="Total Amount"
                                                fullWidth
                                                variant="filled"
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="averagePrice"
                                                label="Average Price"
                                                fullWidth
                                                variant="filled"
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="estCertAmount"
                                                label="Estimated Certified Amount"
                                                fullWidth
                                                variant="filled"
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="effWeight"
                                                label="Efficiency Weight"
                                                fullWidth
                                                variant="filled"
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="avgEff"
                                                label="Average Efficiency"
                                                fullWidth
                                                variant="filled"
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="totalRed"
                                                label="Total Red Amount"
                                                fullWidth
                                                variant="filled"
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="avgRed"
                                                label="Average Red Amount"
                                                fullWidth
                                                variant="filled"
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="avgGrams"
                                                label="Average Grams"
                                                fullWidth
                                                variant="filled"
                                                type="number"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox id="diagnosis" color="secondary" />}
                                                label="Diagnosis"
                                            />
                                        </Grid>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                        >
                                            Submit
                                    </Button>
                                    </Grid>
                                </form>
                            </React.Fragment>
                        </Paper>
                        <Copyright />
                    </main>
                </React.Fragment>
            </div>

        );
    else
        return (
            <div>
                <h1>
                    You must login first!
                </h1>
                <a href="login">
                    Go to login page
                </a>
            </div>
        );
}

export default Productions;