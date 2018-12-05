import React,{ Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import monitor from '../../assets/icons/monitor.png';
import cancel from '../../assets/icons/cancel.png';
import check from '../../assets/icons/check.png';
import OsIcon from '../../components/OsIcon';
import { activateDeactivateAgent } from '../../store/actions/content';
import { types } from '../../constants';
import AgentDetailResponse from '../../components/AgentDetailResponse';
import AgentDetailStatus from '../../components/AgentDetailStatus';


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
    marginTop: '24px',
  },
  container: {
      display: 'flex',
      justifyContent: 'center',
  },
  close: {
    margin: '0 0 0 auto'
  }
};

class AgentDetail extends Component {
    state = {
        expand: 0
    }

    componentWillMount = () => {
      this.setState({
        expand: 0
      })
    }

    expand = () => {
      this.setState({
        expand: this.state.expand > 0 ? 0 : this.state.expand + 1
      })
    }

    activateDeactivate = () => {
      this.props.dispatch(activateDeactivateAgent(this.props.agent))
    }

    close = () => {
      this.props.dispatch({
        type: types.SET_AGENT_DETAIL,
        payload: {
            data: {
                agent: {},
                responses: []
            }
        }
      });
    }

    render() {
        const { classes } = this.props;
        return (
          <Card 
            className={ [classes.card, this.props.agent.is_active ? null : classes.disabled]
                        .join(' ') }>
            <CardActionArea
              onClick={ this.expand }
            >
              <div className={classes.container}>
                <CardMedia
                    className={classes.media}
                    image={monitor}
                    title="machine"
                />
                <div className={classes.icon}>
                  <OsIcon type={ this.props.agent.latest_response.os_type } />
                </div>
                <CardMedia
                    className={classes.media}
                    image={this.props.agent.secure ? check : cancel}
                    title="status"
                />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  { this.props.agent.computer_name }
                </Typography>
                <Typography component="p">
                  security status: { this.props.agent.secure ? 'secure' : 'not secure' }
                </Typography>
                <Typography component="p">
                  owner: { this.props.agent.user.username }
                </Typography>
                <AgentDetailResponse 
                  agent={ this.props.agent }
                  expand={ this.state.expand }
                />
                <AgentDetailStatus
                  agent={ this.props.agent }
                  expand={ true }
                />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button 
                size="small" 
                color="primary"
                onClick={ this.activateDeactivate }
              >
                { this.props.agent.is_active ? 'deactivate' : 'activate'} agent
              </Button>
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

export default withStyles(styles)(connect()(AgentDetail));
