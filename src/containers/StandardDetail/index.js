import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import Card from "@material-ui/core/Card/Card";
import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {getStringOrBool} from "../../utils";
import './style.css';
// import {withStyles} from "@material-ui/core";

// const styles = {
//   card: {
//     margin: '50px auto 300px auto',
//     height: 750,
//     width: 600,
//   },
//   title: {
//     lineHeight: 2,
//   },
//   date: {
//     lineHeight: 3,
//     fontSize: 18,
//     },
//   // textContent: {
//   //   height: 120,
//   //   width: 540,
//   //   margin: 20,
//   //   fontSize: 18,
//   //   lineHeight: 2,
//   // },
//     list: {
//       listStyle: 'none',
//     },
//     listRight: {
//     textAlign: 'right',
//     },
//     line: {
//      display: 'flex',
//      justifyContent: 'space-between',
//     },
//     oneLine: {
//       color: "primary",
//       lineHeight: "3"
//     },
//     // line: hover {
//     //   backgroundColor: rgb(39, 155, 39);
//     //   },
// };


export const getTimeAndDate = (standardDate) => {
    const DateTime = new Date(standardDate);
    const year = DateTime.getFullYear();
    const day = DateTime.getDay();
    const month = DateTime.getMonth() + 1;
    return `${day}.${month}.${year}`
}

const bool_standards = ['antispyware_enabled', 'antivirus_enabled', 'behavior_monitor_enabled', 'nis_enabled',
    'on_access_protection_enabled', 'real_time_protection_enabled']

const int_standards = ['full_scan_age', 'quick_scan_age', 'antispyware_signature_last_updated',
    'antivirus_signature_last_updated', 'nis_signature_last_updated']


class StandardDetail extends Component {
    state = {
        expand: false
    }

    render() {
        // const { classes } = this.props;
        return (
            <Card className={"card"}>
                {/*<CardContent className={classes.textContent}>*/}
                <CardContent className={"textContent"}>
                  <Typography align="center" component="h3" variant="display2" className={"title"}>
                      Security Standards
                  </Typography>
                  <Typography align="center" variant="display1" color="primary">
                      for { this.props.content.standards[0].os_type }
                  </Typography>
                  <Typography align="center" className={"date"}>
                      applied since { getTimeAndDate(this.props.content.standards[0].date_created) }
                  </Typography>
                    <Typography className={"oneLine"} color="primary">
                        ------------------------------------------
                    </Typography>
                  <div className={"list"}>
                    {bool_standards.map(key => (
                        <div className={"textLine"}>
                            <span>
                            { key.replace(/_/g, ' ') }
                            </span>
                            <span className={"listRight"}>
                            { getStringOrBool(this.props.content.standards[0][key]) }
                            </span>
                        </div>
                        ))}

                    {int_standards.map(key => (
                        <div className={"line"}>
                            <span className={"listLeft"}>
                            { key.replace(/_/g, ' ') }
                            </span>
                            <span className={"listRight"}>
                            { this.props.content.standards[0][key]} days ago
                            </span>
                        </div>
                    ))}
                  </div>
                </CardContent>
            </Card>
        );
    };
}
//
// export default withStyles(styles)(connect(
//     ({ content }) => ({ content })
// )(StandardDetail));

export default (connect(
    ({ content }) => ({ content })
)(StandardDetail));