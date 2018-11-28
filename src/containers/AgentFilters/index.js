import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppBar } from '@material-ui/core';
import { connect } from 'react-redux';
import { types } from '../../constants';



const filters = [
    ['all', agent => agent],
    ['insecure', agent => !agent.secure],
    ['secure', agent => agent.secure],
]

class AgentFilters extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.dispatch({
        type: types.SET_AGENT_FILTER,
        payload: { filter: filters[value][1] }
    })
  };

  render() {
    return (
      <AppBar position="static" color="default">
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
        { filters.map(filter => <Tab 
                                    key={filter[0]} 
                                    label={filter[0]} 
                                />
        ) }
        </Tabs>
      </AppBar>
    );
  }
}

export default connect()(AgentFilters);