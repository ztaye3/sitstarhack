import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import background from '../static/background/wallpaper.jpg'


export const useStyles = makeStyles((theme) => ({
    outerColumn: {
    // borderRight: "1px solid grey",
    // borderBottom: "1px solid grey",
    // borderLeft: "1px solid grey",
    height: 100
  },
  centerColumn: {
    // borderBottom: "1px solid grey",
    height: 100
  },
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    paddingTop: "40px",
  },
  paper: {
    margin: theme.spacing(8, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar2: {
    border: `3px solid white`,
    width: theme.spacing(13),
    height: theme.spacing(13),
    boxShadow: theme.shadows[3],
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 function UpdatedComponent(Component) {
  return function WrappedComponent(props) {
    const classes = useStyles();
    return <Component {...props} classes={classes} />;
  }
}
export default UpdatedComponent;

export function Copyright() {
          return (
            <Typography variant="body2" color="textSecondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://klar.zekariashirpo.com/">
                AnyData Inc
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          );
        }
