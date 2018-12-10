import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import userIcon from '../../assets/icons/account.png';
import { types } from '../../constants';
// import CardActionArea from '@material-ui/core/CardActionArea';

const styles = {
  card: {
    width: 250,
    margin: '10px 5px',
    float: 'right'
  },
  disabled: {
    opacity: 0.7
  },
  media: {
    height: 48,
    width: 48,
    margin: '20px'
  },
  icon: {
    marginTop: '24px'
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20
  },
  close: {
    margin: '0 0 0 auto'
  }
};

class UserDetail extends Component {
  getAgents = () => this.props.content.agents.filter(
    agent => agent.user.id === this.props.user.id
  )

  close = () => {
    this.props.dispatch({
      type: types.SET_USER_DETAIL,
      payload: { user: {} }
    });
  }

  render () {
    const { classes } = this.props;
    return (
      <Card
        className={classes.card}>
        {/* <CardActionArea
            onClick={ this.expand }
          > */}
        <div className={classes.iconContainer}>
          <img src={userIcon} alt='user' />
        </div>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            { this.props.user.email.split('@')[0] }
          </Typography>
          <Typography component='p'>
            { this.props.user.email }
          </Typography>
          { this.getAgents().length
            ? <div>
                  Registered agents: { this.getAgents().length }
              <ul>
                {
                  this.getAgents().map(agent => <li key={agent.computer_name}>
                    <div>
                      { agent.computer_name }
                    </div> { agent.secure
                      ? <div className='AgentDetailStatus-secure'>secure</div>
                      : <div className='AgentDetailStatus-not-secure'>not secure</div> }
                  </li>)

                }
              </ul>
            </div>
            : 'No registered agents' }
        </CardContent>
        {/* </CardActionArea> */}
        <CardActions>
          <Button
            className={classes.close}
            size='small'
            color='primary'
            onClick={this.close}
          >
              close
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(connect(
  ({ content }) => ({ content })
)(UserDetail));
