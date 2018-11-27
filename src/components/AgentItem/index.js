// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import monitor from '../../assets/icons/monitor.png';

// const styles = {
//   card: {
//     width: 160,
//     margin: 5,
//     wordWrap: 'break-word',
//   },
//   secure: {
//     backgroundColor: 'green',
//   },
//   not_secure: {
//     backgroundColor: 'red',
//   },
//   media: {
//     height: 48,
//     width: 48,
//     margin: '10px auto 0 auto',
//   },
// };

// const getTimeAndDate = (str) => {
//   const DateTime = new Date(str);
//   const day = DateTime.getDay();
//   const month = DateTime.getMonth() + 1;
//   const hour = DateTime.getHours();
//   const minutes = DateTime.getMinutes();
//   return `${day}/${month}, ${hour}:${minutes}`
// }

// function AgentItem(props) {
//   const { classes, agent } = props;
//   console.log('agent detail', agent)
//   return (
//     <Card className={[classes.card, agent.secure ? classes.secure : classes.not_secure].join(' ')}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           className={classes.media}
//           image={monitor}
//           alt="machine"
//         />
//         <CardContent>
//           <Typography>
//             { agent.user.email } 
//           </Typography>
//           <Typography>
//             LR: { getTimeAndDate(agent.last_response_received) }
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }

// AgentItem.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(AgentItem);
