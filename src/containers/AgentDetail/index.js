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


const styles = {
  card: {
    margin: '30px auto 0 auto',
  },
  media: {
    height: 48,
    width: 48,
    margin: '20px',
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

    render() {
        const { classes } = this.props;
        return (
          <Card className={classes.card}>
            <CardActionArea>
              <div className={classes.container}>
                <CardMedia
                    className={classes.media}
                    image={monitor}
                    title="machine"
                />
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
                  latest response: { this.props.agent.last_response_received }
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                deactivate
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
