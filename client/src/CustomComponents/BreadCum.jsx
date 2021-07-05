import { Breadcrumbs, Link as MuLink, Chip, Grid, Typography } from '@material-ui/core';
import { emphasize, withStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import './style.css';

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[300],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip);

const BreadCum = ({
    rootNavigation,
    middleNavigation,
    currentNavigation,
    rootNavLink,
    middleNavLink,
}) => (
    <div className="custom_breadcum">
        <div item xs={12} className="text-center">
            <Typography component="h1" variant="h5">
                {currentNavigation}
            </Typography>
            <Breadcrumbs
                aria-label="breadcrumb"
                className="my-3 d-flex align-items-center justify-content-center"
                separator={<NavigateNextIcon fontSize="small" />}
            >
                <Link href={rootNavLink}>
                    <MuLink color="primary" className="d-flex">
                        <HomeIcon style={{ width: 20, height: 20, marginRight: 5 }} />
                        <span>{rootNavigation}</span>
                    </MuLink>
                </Link>
                {middleNavigation ? (
                    <Link href={middleNavLink}>
                        <MuLink color="primary">{middleNavigation}</MuLink>
                    </Link>
                ) : null}

                <StyledBreadcrumb label={currentNavigation} />
            </Breadcrumbs>
        </div>
    </div>
);

export default BreadCum;
