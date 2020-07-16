import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import NoteDialog from "components/Dialog/notedialog.jsx"
import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";
// import CheckboxList from "components/List/checklist.jsx"

function Icons(props) {
  const { classes } = props;
  return (
    <div>
    <NoteDialog>
    </NoteDialog>
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Notes</h4>
            <p className={classes.cardCategoryWhite}></p>
          </CardHeader>
          <CardBody>
          </CardBody>
        </Card>
        </GridItem>
        <GridItem xs={4} sm={4} md={4}>
        <Card>
        <CardHeader plain color="info">
            <h4 className={classes.cardTitleWhite}>Note 1</h4>
            <p className={classes.cardCategoryWhite}></p>
          </CardHeader>
          <CardBody>
            this is something i am keeping a note of.
          </CardBody>       
        </Card>
        </GridItem>
        <GridItem xs={4} sm={4} md={4}>
        <Card>
        <CardHeader plain color="info">
            <h4 className={classes.cardTitleWhite}>Note 2</h4>
            <p className={classes.cardCategoryWhite}></p>
          </CardHeader>
          <CardBody>
            this is something i am keeping a note of.
          </CardBody>
        </Card>
        </GridItem>
        <GridItem xs={4} sm={4} md={4}>
        <Card>
        <CardHeader plain color="info">
            <h4 className={classes.cardTitleWhite}>Checklist 1</h4>
            <p className={classes.cardCategoryWhite}></p>
          </CardHeader>
          <CardBody>
            {/* <CheckboxList>              
            </CheckboxList> */}
          </CardBody>
        </Card>
        </GridItem>
    </GridContainer>
    </div>
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
