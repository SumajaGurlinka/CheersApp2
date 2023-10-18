
import { Container, Toolbar, Typography, Box } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => {
    return {
        textContainer: {
            color: '#413E47',
            marginLeft: '0px !important',
            fontFamily: "'Manrope', sans-serif !important",
            fontWeight: '700 !important'
        }
    };
});

const Logo = props => {
    const classes = useStyles();
    return (
        <div>
            <Box>
                <Container maxWidth="xl" sx={{ paddingLeft: '8px !important' }}>
                    <Toolbar disableGutters className={props.className}>
                        
                        <div>
                            
                            <Typography variant="h5" noWrap className={classes.textContainer}>
                              CheersApp
                            </Typography>
                        </div>
                    </Toolbar>
                </Container>
            </Box>
        </div>
    );
};

export default Logo;
