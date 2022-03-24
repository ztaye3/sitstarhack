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
import {ListItem} from "@material-ui/core";
import List from "@material-ui/core/List";
import {Translation, withTranslation} from "react-i18next";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import "../../static/style/css/Home.css";
import {isMobile} from "react-device-detect";
import addUserAction from "../../redux/admin/user/addUserAction";

class Search extends Component {
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



      this.props.addUserAction(this.state.searchProduct, "getData")

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



        const userLanguage = localStorage.getItem("i18nextLng");

        // Translate placeholder
        const  translateSearchPlaceholder = () => {

            let placeholder;


            // Switch statement is not working as expected

                if (userLanguage === "en")
                    placeholder =  "Search item ...";
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

        return (

            <Grid container component="main" className={classes.root}>
                <div style={{ flexGrow: 0.8 }}/>
              <CssBaseline />
                  <Grid container justify="center" className={classes.image}>

                    <Grid
                      item
                      xs={12}
                      sm={8}
                      md={5}
                      direction="row"
                      elevation={6}
                      square

                    >
                      <Grid className={classes.paper}>
                            <Grid
                                  container
                                  spacing={0}
                                  direction="column"
                                  alignItems="center"
                                  justifyContent="center"
                                  style={{ minHeight: '100vh' }}
                                >
                                <TextField
                                      onKeyPress={(ev) => {
                                        if (ev.key === 'Enter') {
                                          // Do code here
                                          ev.preventDefault();
                                          this.handleSearchProductSubmit()
                                        }
                                      }}
                                    style={{backgroundColor: "white",
                                            borderRadius: "15px"}}
                                    variant="outlined"
                                    placeholder={search}
                                    size="small"
                                    fullWidth={true}
                                    class={classes.inputRounded}
                                        id="searchProduct"
                                        name="searchProduct"
                                        autoComplete="searchProduct"
                                        onChange={this.onChange}
                                        value={this.state.searchProduct}
                                    InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end" >
                                        <IconButton onClick={this.handleSearchProductSubmit}>
                                            <SearchOutlinedIcon style={{color: "gray"}}/>
                                        </IconButton>
                                      </InputAdornment>
                                    ),
                                  }}
                                  />
                                <Button

                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={this.handleSearchProductSubmit}
                          >
                            {t("search.button.data_analytics")}
                          </Button>
                                                                              {
                !this.props.loginUser.isAuthenticated && (
                    <Button
                        color="primary"
                        aria-label="open drawer"
                        edge="end"
                        href={"/login"}
                      >
                          <Typography >
                              {t("appbaranddrawer_nav_login")}
                          </Typography>
                      </Button>
                )
            }

                        {
                this.props.loginUser.isAuthenticated &&(
                    <Button
                        color="primary"
                        aria-label="open drawer"
                        edge="end"
                        href={"/logout"}
                      >
                          <Typography >
                              {t("appbaranddrawer_nav_logout")}
                          </Typography>
                      </Button>
                )
            }
                            </Grid>

                          <Box mt={5}>
                            <Copyright />
                          </Box>
                      </Grid>
                </Grid>
              </Grid>
    </Grid>
        );
    }
}

Search.propTypes = {
  loginUserAction: PropTypes.func.isRequired,
  loginUser: PropTypes.object.isRequired,
    addUserAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {
        loginUser: state.loginUser
    }
}

export default connect(mapStateToProps, {loginUserAction, addUserAction}) (withTranslation()(withRouter(UpdatedComponent(Search))));