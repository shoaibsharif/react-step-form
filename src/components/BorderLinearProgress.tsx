import React from "react";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

export const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
      width: "50%",
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#1a90ff",
    },
  })
)(LinearProgress);
