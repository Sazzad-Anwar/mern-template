import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';

const BreadCum = ({mainNavigation,root_navigation,middle_navigation,current_navigation,root_navLink,middle_navLink}) => {
    return (
        <Grid container spacing={3}>
            {/* breadcum area */}
            <Grid item md={4}></Grid>
            <Grid item xs={12} md={4}>
                <Typography color="primary" variant="h4" component="h2" className="text-center breadcumHeader">{mainNavigation}</Typography>
            </Grid>
            <Grid item md={4}></Grid>

            <Grid item md={3}></Grid>
            <Grid item xs={12} md={6}>
                <Typography color="primary" className="text-center bradcumNav" variant="h6" component="h6"><Link to={root_navLink}>{root_navigation}</Link> {middle_navigation?<Link to={middle_navLink}>{middle_navigation}</Link>:null} {current_navigation}</Typography>
            </Grid>
            <Grid item md={3}></Grid>
        </Grid>
    )
}

export default BreadCum;
