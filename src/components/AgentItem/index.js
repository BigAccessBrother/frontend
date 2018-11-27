import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import monitor from '../../assets/icons/monitor.png'

const styles = {
  card: {
    width: 200,
    margin: 10
  },
  secure: {
    backgroundColor: 'green',
  },
  not_secure: {
    backgroundColor: 'red',
  },
  media: {
    height: 96,
    width: 96,
    margin: '10px auto 0 auto',
  },
  name: {
    fontWeigth: 600,
  },
  secure: {

  },
  last_response: {

  },
};

function AgentItem(props) {
  const { classes, agent } = props;
  console.log('agent detail', agent)
  return (
    <Card className={classes.card}>
      <CardActionArea className={agent.secure ? classes.secure : classes.not_secure}>
        <CardMedia
          component="img"
          className={classes.media}
          image={monitor}
          alt="machine"
        />
        <CardContent>
          <Typography className={classes.name}>
            { agent.computer_name }
          </Typography>
          <Typography className={classes.secure}>
            { agent.secure ? "secure" : "not secure" }
          </Typography>
          <Typography className={classes.last_response}>
            last response: { agent.last_response_received }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          detail
        </Button>
        <Button size="small" color="primary">
          deactivate
        </Button>
      </CardActions>
    </Card>
  );
}

AgentItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AgentItem);
