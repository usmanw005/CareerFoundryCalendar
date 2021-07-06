import React from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Info from './Info';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    }
});

export default function ReservationPage({ children, ...props }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs>
                    <Info {...props} />
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={9}>
                    {children}
                </Grid>
            </Grid>
        </div>
    );
}