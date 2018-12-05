import React, { Component } from 'react';
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import {AppBar} from "@material-ui/core";
import {getContent} from "../../store/actions/content";
import connect from "react-redux/es/connect/connect";
import CreateUser from '../CreateUser';


class Users extends Component {
  state = {
    value: 0,
  };

  componentWillMount = () => {
      this.props.dispatch((getContent('users', 'users/')))
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Tabs
                      value={this.state.value}
                      onChange={this.handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      fullWidth
                    >
                     <Tab label="All Users" />
                     <Tab label="Create User" />
                     <Tab label="History" />
                    </Tabs>
                </AppBar>
                {/*{ this.state.value === 0 && this.props.content.users &&*/}
                {/*<AllUsers /> }*/}
                { this.state.value === 1 && this.props.content.users &&
                <  CreateUser /> }
                {/*{ this.state.value === 2 &&*/}
                {/*< History /> }*/}
            </div>
            )
    }
}

export default connect(
    ({ content }) => ({ content })
)(Users);