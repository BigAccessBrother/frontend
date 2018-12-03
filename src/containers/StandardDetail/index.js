import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import Card from "@material-ui/core/Card/Card";
import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {getStringOrBool} from "../../utils";
import './style.css';
import moment from "moment";


// export const getTimeAndDate = (standardDate) => {
//     const DateTime = new Date(standardDate);
//     const year = DateTime.getFullYear();
//     const day = DateTime.getDay();
//     const month = DateTime.getMonth() + 1;
//     return `${day}.${month}.${year}`
// }



const bool_standards = ['antispyware_enabled', 'antivirus_enabled', 'behavior_monitor_enabled', 'nis_enabled',
    'on_access_protection_enabled', 'real_time_protection_enabled']

const int_standards = ['full_scan_age', 'quick_scan_age', 'antispyware_signature_last_updated',
    'antivirus_signature_last_updated', 'nis_signature_last_updated']


class StandardDetail extends Component {
    state = {
        expand: false
    }

    render() {
        return (
            <Card className={"card"}>
                <CardContent className={"textContent"}>
                  <Typography align="center" component="h3" variant="display2" className={"title"}>
                      Security Standards
                  </Typography>
                  <Typography align="center" variant="display1" color="primary">
                      for { this.props.content.standards[0].os_type }
                  </Typography>
                  <Typography align="center" className={"date"}>
                      applied since { moment(this.props.content.standards[0].date_created).format('DD.MM.YYYY') }
                      {/*applied since { getTimeAndDate(this.props.content.standards[0].date_created) }*/}
                  </Typography>
                    <Typography color="primary">
                        ------------------------------------------
                    </Typography>
                  <div className={"list"}>
                    {bool_standards.map(key => (
                        <div className={"textLine"}>
                            <span>
                            { key.replace(/_/g, ' ') }
                            </span>
                            <span>
                            { getStringOrBool(this.props.content.standards[0][key]) }
                            </span>
                        </div>
                        ))}

                    {int_standards.map(key => (
                        <div className={"textLine"}>
                            <span>
                            { key.replace(/_/g, ' ') }
                            </span>
                            <span>
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

export default (connect(
    ({ content }) => ({ content })
)(StandardDetail));