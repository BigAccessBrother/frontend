import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import MainFrame from '../../components/MainFrame';
import { getContent } from '../../store/actions/content';
import AgentList from '../../components/AgentList';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SecurityStandards from '../SecurityStandards';
import Users from '../Users';

class Admin extends Component {
    componentWillMount = () => {
      this.props.dispatch(getContent('agents', 'agent/'));
    }

    state = {
      value: 0
    };

    handleChange = (event, value) => {
      this.setState({ value });
    };

    render () {
      return (
        <div>
          { this.props.auth.isLoggedIn && this.props.auth.isAdmin ? null : <Redirect to='/' /> }
          <MainFrame>
            <AppBar position='static' color='default'>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor='primary'
                textColor='primary'
                fullWidth
              >
                <Tab label='Agents' />
                <Tab label='Security Standards' />
                <Tab label='Users' />
              </Tabs>
            </AppBar>
            { this.state.value === 0 &&
            <AgentList /> }
            { this.state.value === 1 &&
            <SecurityStandards /> }
            { this.state.value === 2 &&
            <Users /> }
          </MainFrame>
        </div>
      );
    }
}

export default connect(
  state => ({ ...state })
)(Admin);
