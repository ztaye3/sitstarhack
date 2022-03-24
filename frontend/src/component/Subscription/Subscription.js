import React, {Component, useState} from 'react';
import {withRouter, Redirect} from "react-router-dom";
import loginUserAction from "../../redux/login/loginAction";
import {connect} from "react-redux";
import {CATEGORY_URL, DASHBOARD_URL, GET_PRODUCT_BY_NAME, HOME_URL} from "../../utils/Constant";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import UpdatedComponent from "../../utils/StyleUtil";
import { FormControl} from "react-bootstrap";
import {Copyright} from "../../utils/StyleUtil";
import {Card, CardContent, CardHeader, ListItem} from "@material-ui/core";
import List from "@material-ui/core/List";
import {Translation, withTranslation} from "react-i18next";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

class Subscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
            searchProduct: ""
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onLoginClick = e =>{
        e.preventDefault();
        const userInput = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUserAction(userInput, HOME_URL)
    }

    handleSearchProductSubmit = () => {

      let userInput = {
          // name: searchProduct,
          // locale: userLanguage
      }

      // this.props.categoryAction(userInput, GET_PRODUCT_BY_NAME, CATEGORY_URL)

  }

     handleSearchProduct = (e) => {

      // setSearchProduct(e.target.value);

  }
    render() {
        const classes = this.props.classes;
        const { t } = this.props;
        const flexContainer = {
          display: 'flex',
          flexDirection: 'row',
          padding: 0,
        };


        if (this.props.loginUser.isAuthenticated) {
        return <Redirect to={HOME_URL} />
            }
        const userLanguage = localStorage.getItem("i18nextLng");

        // Translate placeholder
        const  translateSearchPlaceholder = () => {

            let placeholder;


            // Switch statement is not working as expected

                if (userLanguage === "en")
                    placeholder =  "Subscription item ...";
                else if (userLanguage ==="fr")
                    placeholder =  "Rechercher un élément ...";
                else if (userLanguage === "de")
                    placeholder = "Artikel suchen ...";
                else if (userLanguage === "am")
                    placeholder = "ዕቃ ፈልግ ...";
                else if (userLanguage === "ti")
                    placeholder = "ዓቕሃ ድለይ ...";
                else if (userLanguage ==="it")
                    placeholder = "Cerca elemento ...";
                else if (userLanguage ==="ar")
                    placeholder = "عنصر البحث ...";
                else
                    placeholder = "Artikel suchen ..."

            return placeholder;

        }
        const search = translateSearchPlaceholder();
            const data = [
        { title: "Basic Plan", subtitle: "$20 Per Month" , content:"Unlimited search\nAI models:10\nData plots:10" +
                "\nData downloads:100 MB\nCustomer service:No\nCustom AI & Analytics:No"},
        { title: "Medium Plan", subtitle: "$50 Per Month", content: "Unlimited search\nAI models:100\nData plots:100" +
                "\nData downloads:10 GB\nCustomer service:Yes\nCustom AI & Analytics:No" },
        { title: "Premium Plan", subtitle: "$200 Per Month", content: "Unlimited search\nAI models:Unlimited\nData plots:Unlimited" +
                "\nData downloads:Unlimited\nCustomer service:No\nCustom AI & Analytics:Yes" },
    ]

        return (

            <Grid container component="main" className={classes.root}>
                <div style={{ flexGrow: 0.8 }}/>
                <CssBaseline />
                  <Grid container justify="center" className={classes.image}>
                    <Grid
                      item
                      xs={12}
                      sm={11}
                      md={10}
                      direction="row"
                      elevation={6}
                      square

                    >
                        <Grid
                            container
                            spacing={4}
                            direction="row"
                            justify="center"
                            alignItems="center"
                            >
                            {data.map(elem => (
                                    <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)}>
                                        <Card style={{
                                                        borderRadius: "20px 20px 0px 0px",
                                                        border: "2px solid #C3073F",
                                                        background: "#000000"
                                                    }}>
                                            <CardHeader
                                                title={elem.title}
                                                subheader={elem.subtitle}
                                                style={{backgroundColor:"#C3073F",
                                                        color: "white",
                                                        textAlign: "center",
                                                        }}
                                            />
                                            <CardContent style={{textAlign: "center",
                                                                 color: "#FFFFFF"   }}>
                                                <Typography variant="h6" style={{whiteSpace:"pre-line",
                                                    textAlign: "left",fontFamily:"sans-serif"}}>
                                                    {elem.content}
                                                </Typography>
                                                <Button
                                                            style={{backgroundColor:"#C3073F",
                                                                    color:"#FFFFFF"}}
                                                            variant="contained"
                                                            color="#C3073F"
                                                            className={classes.submit}
                                                            onClick={this.onSignupClick}
                                                  >
                                                    {t("search.button.select_plan")}
                                                  </Button>
                                            </CardContent>
                                        </Card>
                                     </Grid>
                                ))}
                            </Grid>
                            <Box mt={5}>
                                <Copyright />
                            </Box>

                    </Grid>
                  </Grid>
            </Grid>
        );
    }
}

Subscription.propTypes = {
  loginUserAction: PropTypes.func.isRequired,
  loginUser: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        loginUser: state.loginUser
    }
}

export default connect(mapStateToProps, {loginUserAction}) (withTranslation()(withRouter(UpdatedComponent(Subscription))));