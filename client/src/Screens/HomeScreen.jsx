import { Typography } from '@material-ui/core';

const HomeScreen = () => (
    <Typography
        variant="h2"
        style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
        }}
        component="h1"
    >
        Start Editing Right Away !
    </Typography>
);

export default HomeScreen;
