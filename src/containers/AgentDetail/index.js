import React,{ Component } from 'react';
import PropTypes from 'prop-types';
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
import { getTimeAndDate, getStringOrBool } from '../../utils';
import OsIcon from '../../components/OsIcon';


const styles = {
  card: {
    margin: '30px auto 0 auto',
  },
  media: {
    height: 48,
    width: 48,
    margin: '20px',
  },
  icon: {
    marginTop: '22px',
  },
  container: {
      display: 'flex',
      justifyContent: 'center',
  }
};

class AgentDetail extends Component {
    state = {
        expand: false
    }

    handleClick = () => {
      this.setState({
        expand: !this.state.expand
      })
    }

    render() {
        const { classes } = this.props;
        return (
          <Card className={classes.card}>
            <CardActionArea
              onClick={ this.handleClick }
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
                <Typography component="p">
                  latest response: { getTimeAndDate(this.props.agent) } (click to show details)
                </Typography>
                { this.state.expand ?
                <ul>
                  { Object.keys(this.props.agent.latest_response).map(key => (
                    key === 'id' || key === 'agent' ? null :
                    <li>{ key } : { getStringOrBool(this.props.agent.latest_response[key]) }</li>
                  ))}
                </ul> :
                null } 
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                deactivate agent
              </Button>
            </CardActions>
          </Card>
        );
    }
}

AgentDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect()(AgentDetail));
