import React from 'react';
import logo from '../logo.svg';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const Img = styled('img')``;
const useStyles = makeStyles(
    (theme) => ({
        shadowed: {
            boxShadow: "0 1px 15px 0 rgb(0 0 0 / 5%)"
        }
    })
);


function Footer() {
    return (
        <Typography fontSize="small" variant="body2" color="text.secondary" align="center">
            {'Made with'} 
            <FavoriteBorderOutlinedIcon sx={{mt: -2}} />
            {'for '} 
            <Link color="inherit" href="https://careerfoundry.com/">
                Career Foundry
            </Link>{' '}
        </Typography>
    );
}

export default function Layout({ children }) {
    const classes = useStyles();
    return (
        <Box>
            <Img sx={{ mx: 'auto', maxWidth: 200, display: 'block', mt: 4, mb: 0 }} src={logo} />
            <Typography sx={{ mt: 1, mb: 0 }} variant="body2" color="text.secondary" align="center">
                Call Reservation
            </Typography>
            <Container component="main" maxWidth="md" sx={{ mb: 4, mt: 0 }}>
                <Paper className={classes.shadowed} variant="outlined" sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
                    <Box sx={{ flexGrow: 1 }}>
                        {children}
                    </Box>
                </Paper>
                <Footer />
            </Container>
        </Box>
    )
}
