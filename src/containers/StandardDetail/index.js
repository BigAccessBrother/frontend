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
        textAlign: 'center',
        maxWidth: 520,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    title: {
        marginTop: 60,
        alignContent: 'center',
    },
    table: {
       marginTop: 20,

    },
    tableContent: {
        fontSize: 16,
    },
    date: {
        marginTop: 20,
    }

}


const bool_standards = [ ['antivirus_enabled', 'Antivirus'],['antispyware_enabled', 'Antispyware'],
    ['behavior_monitor_enabled','Behavior Monitor'], ['nis_enabled', 'Network Information Service'],
    ['on_access_protection_enabled', 'On-Access Protection'], ['real_time_protection_enabled', 'Real-Time Protection'] ]

const int_standards = [ ['full_scan_age', 'Full-Scan Age'], ['quick_scan_age', 'Quick-Scan Age'],
    ['antispyware_signature_last_updated', 'Antispyware Signature last Update'],
    ['antivirus_signature_last_updated', 'Antivirus Signature last Update'],
    ['nis_signature_last_updated', 'NIS Signature last Update'] ]


class StandardDetail extends Component {
    state = {
        expand: false
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <Typography component="h1" variant="display2" className={classes.title} >
                    Security Standard
                </Typography>
                <Typography variant="display1" color="primary">
                    for {this.props.content.standards[0].os_type}
                </Typography>
                <Typography className={classes.date}>
                    applied since {moment(this.props.content.standards[0].date_created).format('DD.MM.YYYY')}
                </Typography>
                <Typography color="primary">
                    ------------------------------------------
                </Typography>

                <div className={classes.table}>
                    <Table>
                        <TableBody className={classes.tableContent}>
                            {bool_standards.map(standard => {
                                return (
                                    <TableRow key={standard}>
                                        <TableCell component="th" scope="row" className={classes.tableContent}>
                                            {standard[1]}
                                        </TableCell>
                                        <TableCell className={classes.tableContent}>

                                            {getStringOrBool(this.props.content.standards[0][standard[0]])}

                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {int_standards.map(standard => {
                                return (
                                    <TableRow key={standard}>
                                        <TableCell className={classes.tableContent} component="th" scope="row">
                                            {standard[1]}
                                        </TableCell>
                                        <TableCell className={classes.tableContent}>
                                            max {getStringOrBool(this.props.content.standards[0][standard[0]])} days ago
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
