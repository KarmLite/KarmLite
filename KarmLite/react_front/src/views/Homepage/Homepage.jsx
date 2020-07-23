import React, { Component } from 'react'
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
import Timer from 'react-compound-timer';
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";


import {
  dailySalesChart,
} from "variables/charts.jsx";

export class Homepage extends Component {
        state = {
            value: 0
        };
        handleChange = (event, value) => {
            this.setState({ value });
        };
        
        handleChangeIndex = index => {
            this.setState({ value: index });
        }
        render(){
            const { classes }  = this.props;
        return (
          <React.Fragment>
          <div>
            <Timer
            initialTime={1000}
            startImmediately={false}>
            {({ start, resume, pause, stop, reset, timerState }) => (
                  <div>
                  <div>
                      <Timer.Hours /> hours &nbsp;
                      <Timer.Minutes /> minutes &nbsp;
                      <Timer.Seconds /> Seconds
                  </div>
                  {/* integrate tasks here */}
                  {/* <div>{timerState}</div> */}
                  <br />
                  <div>
                      <button onClick={start}>Start</button>
                      <button onClick={pause}>Pause</button>
                      <button onClick={resume}>Resume</button>
                      <button onClick={stop}>Stop</button>
                      <button onClick={reset}>Reset</button>
                  </div>
                  </div>
                      )}
            </Timer>
        </div>
            <div>
            <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Daily Tasks</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in today sales.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        </div>
         </React.Fragment>
      )
    }
}

Homepage.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(dashboardStyle)(Homepage);
