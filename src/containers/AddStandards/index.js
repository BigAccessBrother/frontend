import {connect} from "react-redux";
import {Component} from "react";
import Button from "@material-ui/core/Button/Button";
import TextField from '@material-ui/core/TextField';
import React from "react";
import {add_standard} from "../../store/actions/content";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 1000,
    margin: 'auto'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 285,
    backgroundColor: "primary"
  },
  button: {
    marginLeft: 80,
    marginTop: 20,
    borderRadius: '100px',
    height: 50
  },
});


class AddStandards extends Component {
    state = {
          os_type: '',
          quick_scan_age: '',
          full_scan_age: '',
          nis_signature_last_updated: '',
          antivirus_signature_last_updated: '',
          antispyware_signature_last_updated: '',
          nis_enabled: '',
          antivirus_enabled: '',
          antispyware_enabled: '',
          behavior_monitor_enabled: '',
          on_access_protection_enabled: '',
          real_time_protection_enabled: '',
    }



    handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

    add_standard = (e) => {
    e.preventDefault();
    this.props.dispatch(add_standard(this.state))

    }

     render(){
    const { classes } = this.props;
    return (
      <div>

       <form
        className={classes.container}
        noValidate autoComplete="off"
        onSubmit={ this.add_standard }
       >

        <TextField
             name="os_type"
             id="os_type"
             label="OS type"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].os_type) }
              value={this.state.os_type}
              onChange={this.handleChange('os_type')}
              margin="normal"
              variant="outlined"
            />
          <TextField
               name="quick_scan_age"
               id="quick_scan_age"
              label="Quick scan age"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].quick_scan_age) }
              value={this.state.quick_scan_age}
              onChange={this.handleChange('quick_scan_age')}
              margin="normal"
              variant="outlined"
            />
           <TextField
               name="full_scan_age"
               id="full_scan_age"
              label="Full scan age"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].full_scan_age) }
              value={this.state.full_scan_age}
              onChange={this.handleChange('full_scan_age')}
              margin="normal"
              variant="outlined"
            />
           <TextField
               name="nis_signature_last_updated"
               id="nis_signature_last_updated"
              label="Nis signature last updated"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].nis_signature_last_updated) }
              value={this.state.nis_signature_last_updated}
              onChange={this.handleChange('nis_signature_last_updated')}
              margin="normal"
              variant="outlined"
            />
           <TextField
               name="antivirus_signature_last_updated"
               id="antivirus_signature_last_updated"
              label="Antivirus signature last updated"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].antivirus_signature_last_updated) }
              value={this.state.antivirus_signature_last_updated}
              onChange={this.handleChange('antivirus_signature_last_updated')}
              margin="normal"
              variant="outlined"
            />
           <TextField
               name="antispyware_signature_last_updated"
               id="antispyware_signature_last_updated"
              label="Antispyware signature last updated"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].antispyware_signature_last_updated) }
              value={this.state.antispyware_signature_last_updated}
              onChange={this.handleChange('antispyware_signature_last_updated')}
              margin="normal"
              variant="outlined"
            />
           <TextField
               name="nis_enabled"
               id="nis_enabled"
              label="Nis enabled"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].nis_enabled) }
              value={this.state.nis_enabled}
              onChange={this.handleChange('nis_enabled')}
              margin="normal"
              variant="outlined"
            />
           <TextField
               name="antivirus_enabled"
               id="antivirus_enabled"
              label="Antivirus enabled"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].antivirus_enabled) }
              value={this.state.antivirus_enabled}
              onChange={this.handleChange('antivirus_enabled')}
              margin="normal"
              variant="outlined"
            />
         <TextField
             name="antispyware_enabled"
             id="antispyware_enabled"
             label="Antispyware enabled"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].antispyware_enabled) }
              value={this.state.antispyware_enabled}
              onChange={this.handleChange('antispyware_enabled')}
              margin="normal"
              variant="outlined"
            />
              <TextField
               name="behavior_monitor_enabled"
               id="behavior_monitor_enabled"
              label="Behavior monitor enabled"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].behavior_monitor_enabled) }
              value={this.state.behavior_monitor_enabled}
              onChange={this.handleChange('behavior_monitor_enabled')}
              margin="normal"
              variant="outlined"
            />
           <TextField
               name="on_access_protection_enabled"
               id="on_access_protection_enabled"
              label="On access protection enabled"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].on_access_protection_enabled) }
              value={this.state.on_access_protection_enabled}
              onChange={this.handleChange('on_access_protection_enabled')}
              margin="normal"
              variant="outlined"
            />
           <TextField
               name="real_time_protection_enabled"
               id="real_time_protection_enabled"
              label="Real time protection enabled"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].real_time_protection_enabled) }
              value={this.state.real_time_protection_enabled}
              onChange={this.handleChange('real_time_protection_enabled')}
              margin="normal"
              variant="outlined"
            />
          <Button
            type="submit"
            onClick={ this.add_standard }
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Apply standards
          </Button>

        </form>
      </div>
    )
  }

}

export default withStyles(styles)(connect(
    ({ content }) => ({ content })
)(AddStandards))
