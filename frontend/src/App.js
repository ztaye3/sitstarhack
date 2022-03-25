import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { useTheme } from "./theme";
import { DataProvider } from "./Providers/DataProvider";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Signup from "./component/signup/Signup";
import Login from "./component/login/Login";
import ResetPassword from "./component/login/ResetPassword";
import ResetPasswordConfirm from "./component/login/ResetPasswordConfirm";
import Root from "./redux/Root";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import authentication from "./utils/Authentication";
import {BASE_BACKEND_URL, BASE_FRONTEND_URL, STRIPE_PUB_KEY} from "./utils/Constant";
import Activate from "./component/signup/Activate";
import Logout from "./component/logout/Logout";

import Search from "./component/Search/Search";
import Subscription from "./component/Subscription/Subscription";
import Result from "./component/Search/Result";
import Home from "./component/dashboard/Home"

/* Check if server is running in development or production*/
// if (window.location.origin === BASE_FRONTEND_URL) {
  axios.defaults.baseURL = BASE_BACKEND_URL; // Development
// } else {
//   axios.defaults.baseURL = window.location.origin; // Production
// }

export default function App() {

  const [currentTheme, setCurrentTheme] = useTheme();

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={currentTheme}>
            <ToastContainer hideProgressBar={true} newestOnTop={true} />
            <DataProvider>
              <Root>
                <div>

                  <Switch>

                    <Route  exact path="/activate/:token" component={Activate}/>

                    <Route path="/login" component={Login}/>

                    <Route path="/signup" component={Signup}/>

                    <Route exact path='/reset-password' component={ResetPassword} />

                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />

                    <Route exact path="/subscription" component={Subscription}/>

                    <Route exact path="/result" component={Result}/>

                    <Route  path="/" component={Home}/>
                  </Switch>

                  <Switch>
                    <Route exact path="/logout">
                      <Logout />
                    </Route>

                  </Switch>
                </div>
              </Root>
            </DataProvider>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </div>
  );
}


