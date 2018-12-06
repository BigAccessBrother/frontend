import React, { Component } from 'react';
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import {AppBar} from "@material-ui/core";
import {getContent} from "../../store/actions/content";
import connect from "react-redux/es/connect/connect";
import AddStandards from '../AddStandards';
import StandardDetail from '../StandardDetail';


class SecurityStandards extends Component {
  state = {
    value: 1,
  };

  componentWillMount = () => {
      this.props.dispatch((getContent('standards', 'standards/')))
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  getBackToCurrentStandard = () => {
    this.setState({
        value: 1
    });
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
                     <Tab label="New" />
                     <Tab label="Current" />
                     {/* <Tab label="History" /> */}
                    </Tabs>
                </AppBar>
                { this.state.value === 0 && this.props.content.standards &&
                <  AddStandards getBack={this.getBackToCurrentStandard} /> }
                { this.state.value === 1 && this.props.content.standards &&
                <  StandardDetail /> }
                {/*{ this.state.value === 2 &&*/}
                {/*< History /> }*/}
            </div>
            )
    }
}

export default connect(
    ({ content }) => ({ content })
)(SecurityStandards);

