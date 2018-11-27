import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import MainFrame from '../../components/MainFrame';
import { getContent } from '../../store/actions/content';
import AgentList from '../../components/AgentList';

class Admin extends Component {

    componentWillMount = () => {
        this.props.dispatch(getContent('agents', 'agent/'))
    }

    render() {
        return (
            <div>
            { this.props.auth.isLoggedIn && this.props.auth.isAdmin ? null : <Redirect to="/" /> }
                <MainFrame>
                    {
                        this.props.content.agents ?
                        <AgentList agents={this.props.content.agents} /> :
                        null
                    }
                </MainFrame>
            </div>
        )
    }
}

export default connect(
    state => ({ ...state })
)(Admin);