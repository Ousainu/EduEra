import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//Image Files

import Evaluation from "../../../img/Evaluation-2.png";
import Reviews from "../../../img/Reviews-2.png";
import Timing from "../../../img/Timing-2.png";
import Subjects from "../../../img/Subjects-2.png";

const styles = makeStyles((theme) => ({
  item1: {
    order: 1,
    [theme.breakpoints.down("xs")]: {
      order: 2,
    },
  },
  item2: {
    order: 2,
    [theme.breakpoints.down("xs")]: {
      order: 1,
    },
  },
}));

export default function StepGuide() {
  const classes = styles();
  return (
    <div>
      <div style={{ paddingBottom: "100px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm container justify="center">
            <Grid item>
              <div>
                <img src={Subjects} />
              </div>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm justify="center">
            <Typography gutterBottom variant="h6" align="center">
              <b>CURRENTLY SUPPORTS SIX SUBJECTS </b>
            </Typography>

            <Typography gutterBottom variant="subtitle1" align="center">
              You have access to all the past papers under thes subjects
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div style={{ paddingBottom: "100px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid
            item
            xs={12}
            sm
            container
            justify="center"
            className={classes.item1}
          >
            <Grid item>
              <Typography gutterBottom variant="h6" align="center">
                <b>WE WILL TIME YOUR ATTEMP</b>
              </Typography>

              <Typography gutterBottom variant="subtitle1" align="center">
                Your attempt will be timed and the individual time taken for
                each question will be also displayed under Reviews
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justify="center"
            className={classes.item2}
            sm
          >
            <div>
              <img src={Timing} />
            </div>
          </Grid>
        </Grid>
      </div>

      <div style={{ paddingBottom: "100px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm container justify="center">
            <Grid item>
              <div>
                <img src={Evaluation} />
              </div>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm justify="center">
            <Typography gutterBottom variant="h6" align="center">
              <b>YOUR ANSWER SCRIPTS WILL BE VERIFIED IN REAL TIME</b>
            </Typography>

            <Typography gutterBottom variant="subtitle1" align="center">
              You will be able to get results and an analysis of your answers
              instantly after finishing the quiz.
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div style={{ paddingBottom: "100px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid
            item
            xs={12}
            sm
            container
            justify="center"
            className={classes.item1}
          >
            <Grid item>
              <Typography gutterBottom variant="h6" align="center">
                <b>REVIEW ANSWERS RIGHT AFTER ANSWERING</b>
              </Typography>

              <Typography gutterBottom variant="subtitle1" align="center">
                A review for each question will be provided at the end.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justify="center"
            sm
            className={classes.item2}
          >
            <div>
              <img src={Reviews} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}