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
import {Card, ListItem} from "@material-ui/core";
import List from "@material-ui/core/List";
import {Translation, withTranslation} from "react-i18next";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import "../../static/style/css/Home.css";
import {isMobile} from "react-device-detect";
import addUserAction from "../../redux/admin/user/addUserAction";
import {isEmptyUtils} from "../../utils/Utils";
import CardMedia from "@material-ui/core/CardMedia";
import aboutImg1 from "../../img/anydata/data/cats/cat.9.jpg";
import aboutImg2 from "../../img/anydata/data/cats/cat.0.jpg";
import aboutImg3 from "../../img/anydata/data/cats/cat.1.jpg";
import aboutImg4 from "../../img/anydata/data/cats/cat.2.jpg";
import aboutImg5 from "../../img/anydata/data/cats/cat.3.jpg";
import aboutImg8 from "../../img/anydata/data/cats/cat.10.jpg";
import aboutImg7 from "../../img/anydata/data/cats/cat.11.jpg";
import aboutImg6 from "../../img/anydata/data/cats/cat.24.jpg";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Youtube from '@material-ui/icons/YouTube';
class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
            searchProduct: "",
            preview: false
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onPreview = e => {
        this.setState({
            preview:true
        })
    }

    onNotPreview = e => {
        this.setState({
            preview:false
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

      onDownloads = e => {

        console.log("I'm in")
            const link = document.createElement("a");
    link.download = this.props.data.data.file_url
    link.href = this.props.data.data.file_url
    link.click();
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
                    placeholder =  "Result item ...";
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

        const data_detail = [aboutImg1, aboutImg2, aboutImg3, aboutImg4, aboutImg5, aboutImg6, aboutImg7, aboutImg8];


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
                                <Typography variant="h3" component="h4" style={{color: "white"}}>{this.props.data.data.name_of_the_file}</Typography>


                                {
                                    this.state.preview && (

                                        <div style={{display: "inline" }}>
                                            <div style={{display: "inline", padding: "5px"}} >
                                                 <img src={data_detail[0]} style={{width: "20%", height: "20%"}}/></div>
                                            <div style={{display: "inline", padding: "5px"}}>
                                               <img src={data_detail[1]} style={{width: "20%", height: "20%"}}/></div>
                                              <div style={{display: "inline", padding: "5px"}} >
                                                  <img src={data_detail[2]} style={{width: "20%", height: "20%"}}/></div>
                                              <div style={{display: "inline", padding: "5px"}}>
                                                <img src={data_detail[3]} style={{width: "20%", height: "20%"}}/></div>
                                              <div style={{display: "inline", padding: "5px"}}>
                                                <img src={data_detail[4]} style={{width: "20%", height: "20%"}}/></div>
                                            <div style={{display: "inline", padding: "5px"}}>
                                                <img src={data_detail[5]} style={{width: "20%", height: "20%"}}/></div>
                                            <div style={{display: "inline", padding: "5px"}}>
                                                <img src={data_detail[6]} style={{width: "20%", height: "20%"}}/></div>
                                                                                  <div style={{display: "inline", padding: "5px"}}>
                                                <img src={data_detail[7]} style={{width: "20%", height: "20%"}}/></div>
                                 </div>
                                    )
                                }
                                <div style={{display: "inline" }}>

                                                {this.props.data.is_data_exist && (
                                                    <div style={{display: "inline", padding: "10px"}} >
                                                    <Button

                                                        variant="contained"
                                                        color="primary"
                                                        className={classes.submit}
                                                        onClick={this.onDownloads}
                                                    >
                                                        Download
                                                    </Button>
                                                    </div>
                                                    )

                                                }
                                                {this.props.data.is_data_exist && this.state.preview && (
                                                    <div style={{display: "inline", padding: "10px"}} >
                                                    <Button

                                                        variant="contained"
                                                        color="primary"
                                                        className={classes.submit}
                                                        onClick={this.onNotPreview}
                                                    >
                                                        Hide
                                                    </Button>
                                                    </div>
                                                    )

                                                }

                                                {this.props.data.is_data_exist && !this.state.preview && (
                                                    <div style={{display: "inline", padding: "10px"}} >
                                                    <Button

                                                        variant="contained"
                                                        color="primary"
                                                        className={classes.submit}
                                                        onClick={this.onPreview}
                                                    >
                                                        Preview
                                                    </Button>
                                                    </div>
                                                    )

                                                }
                                </div>



                                {!this.props.data.is_data_exist && (
                                    <Typography variant="h3" component="h4" style={{color: "white"}}>Sorry, the data doesn't exists in our repository!</Typography>
                                    )
                                }
                                <Button
                        color="primary"
                        aria-label="open drawer"
                        edge="end"
                        href={"/search"}
                      >
                          <Typography >
                              Home
                          </Typography>
                      </Button>

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

Result.propTypes = {
  loginUserAction: PropTypes.func.isRequired,
  loginUser: PropTypes.object.isRequired,
    addUserAction: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        loginUser: state.loginUser,
        data: state.userAdmin
    }
}

export default connect(mapStateToProps, {loginUserAction, addUserAction}) (withTranslation()(withRouter(UpdatedComponent(Result))));