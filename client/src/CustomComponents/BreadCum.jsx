import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const BreadCum = ({
    mainNavigation,
    rootNavigation,
    middleNavigation,
    currentNavigation,
    rootNavLink,
    middleNavLink,
}) => (
    <Grid container spacing={3}>
        {/* breadcum area */}
        <Grid item md={4} />
        <Grid item xs={12} md={4}>
            <Typography
                color="primary"
                variant="h4"
                component="h2"
                className="text-center breadcumHeader"
            >
                {mainNavigation}
            </Typography>
        </Grid>
        <Grid item md={4} />

        <Grid item md={3} />
        <Grid item xs={12} md={6}>
            <Typography
                color="primary"
                className="text-center bradcumNav"
                variant="h6"
                component="h6"
            >
                <Link to={rootNavLink}>{rootNavigation}</Link>{' '}
                {middleNavigation ? <Link to={middleNavLink}>{middleNavigation}</Link> : null}{' '}
                {currentNavigation}
            </Typography>
        </Grid>
        <Grid item md={3} />
    </Grid>
);

export default BreadCum;
