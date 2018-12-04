import Typography from "@material-ui/core/Typography/Typography";
import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {getStringOrBool} from "../../utils";
import moment from "moment";
import Table from "@material-ui/core/Table/Table";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableRow from "@material-ui/core/TableRow/TableRow";
import {withStyles} from "@material-ui/core";

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
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
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <Typography component="h3" variant="display2" style={{alignItems: 'center'}}>
                    Security Standards
                </Typography>
                <Typography variant="display1" color="primary">
                    for {this.props.content.standards[0].os_type}
                </Typography>
                <Typography>
                    applied since {moment(this.props.content.standards[0].date_created).format('DD.MM.YYYY')}
                </Typography>
                <Typography color="primary">
                    ------------------------------------------
                </Typography>

                <div>
                    <Table>
                        <TableBody>
                            {bool_standards.map(standard => {
                                return (
                                    <TableRow key={standard}>
                                        <TableCell component="th" scope="row">
                                            {standard.replace(/_/g, ' ')}
                                        </TableCell>
                                        <TableCell>
                                            {getStringOrBool(this.props.content.standards[0][standard])}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {int_standards.map(standard => {
                                return (
                                    <TableRow key={standard}>
                                        <TableCell component="th" scope="row">
                                            {standard}
                                        </TableCell>
                                        <TableCell>
                                            {getStringOrBool(this.props.content.standards[0][standard])} days ago
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    };
};


export default withStyles(styles)(connect(
    ({content}) => ({content})
)(StandardDetail));
