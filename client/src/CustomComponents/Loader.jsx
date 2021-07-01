import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
}));

const Loader = ({loading}) => {
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} style={{display:'flex',flexDirection:'column'}} open={true}>
            <CircularProgress color="inherit" />
            <Typography variant="h4" style={{color:'white'}}>BrainsCamp</Typography>
        </Backdrop>
    )
}

export default Loader
