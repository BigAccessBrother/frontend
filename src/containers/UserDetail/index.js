import React,{ Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import userIcon from  '../../assets/icons/account.png';
import { types } from '../../constants';


const styles = {
  card: {
    width: 380,
    margin: '10px 5px',
    float: 'right',
  },
  disabled: {
    opacity: 0.7,
  },
  media: {
    height: 48,
    width: 48,
    margin: '20px',
  },
  icon: {
    marginTop: '22px',
  },
  iconContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 20,
  },
  close: {
    margin: '0 0 0 auto'
  }
};

class UserDetail extends Component {
    state = {
        name: this.props.user.email.split('@')[0],
        email: this.props.user.email,
        agents: this.props.content.agents.filter(
                agent => agent.user.id === this.props.user.id
            )
    }

    close = () => {
      this.props.dispatch({
        type: types.SET_USER_DETAIL,
        payload: { user: {} }
      });
    }

    render() {
        const { classes } = this.props;
        return (
            <Card 
            className={ classes.card }>
            <CardActionArea
              onClick={ this.expand }
            >
              <div className={classes.iconContainer}>
                <img src={ userIcon } alt="user" />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  { this.state.name }
                </Typography>
                <Typography component="p">
                  { this.state.email }
                </Typography>
                <Typography component="p">
                  Registered machines: { this.state.agents.length } 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button 
                className={classes.close}
                size="small" 
                color="primary"
                onClick={ this.close }
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