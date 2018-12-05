import {connect} from "react-redux";
import {Component} from "react";
import Button from "@material-ui/core/Button/Button";
import TextField from '@material-ui/core/TextField';
import React from "react";
import {add_standard} from "../../store/actions/content";
import { withStyles } from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '80%',
    margin: 'auto',
    marginTop: 60,
  },
  osTypeField: {
    width: '100%',
    marginLeft: '14%',
    marginBottom: '5%',
  },
  monitorField: {
    width: '57%',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 260,
    width: '40%',
    backgroundColor: "primary"
  },

  button: {
    marginTop: 20,
    textAlign: 'center',
    borderRadius: '100px',
    height: 50
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 260,
    width: '30%',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
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
       <div className={classes.osTypeField}>
           <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="os_type">OS-type</InputLabel>
                  <Select
                    value={this.state.os_type}
                    onChange={this.handleChange('os_type')}
                  >
                    <MenuItem value={'Microsoft Windows 10 Pro'}>Microsoft Windows 10 Pro</MenuItem>
                    <MenuItem value={'Microsoft Windows 10 Home'}>Microsoft Windows 10 Home</MenuItem>
                    <MenuItem value={'Microsoft Windows 10 Education'}>Microsoft Windows 10 Education</MenuItem>
                    <MenuItem value={'Microsoft Windows 10 Enterprise'}>Microsoft Windows 10 Enterprise</MenuItem>
                  </Select>
            </FormControl>
       </div>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="antivirus_enabled">Antivirus</InputLabel>
              <Select
                value={this.state.antivirus_enabled}
                onChange={this.handleChange('antivirus_enabled')}
              >
              <MenuItem value={true}>enabled</MenuItem>
                <MenuItem value={false}>disabled</MenuItem>
              </Select>
            </FormControl>
            <TextField
               name="antivirus_signature_last_updated"
               id="antivirus_signature_last_updated"
              label="Antivirus Signature last update age (max days)"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].antivirus_signature_last_updated) }
              value={this.state.antivirus_signature_last_updated}
              onChange={this.handleChange('antivirus_signature_last_updated')}
              margin="normal"
              variant="outlined"
            />
           <FormControl className={classes.formControl}>
              <InputLabel htmlFor="antispyware_enabled">Antispyware</InputLabel>
              <Select
                value={this.state.antispyware_enabled}
                onChange={this.handleChange('antispyware_enabled')}
              >
                <MenuItem value={true}>enabled</MenuItem>
                <MenuItem value={false}>disabled</MenuItem>
              </Select>
              </FormControl>
            <TextField
               name="antispyware_signature_last_updated"
               id="antispyware_signature_last_updated"
              label="Antispyware Signature last update age (max days)"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].antispyware_signature_last_updated) }
              value={this.state.antispyware_signature_last_updated}
              onChange={this.handleChange('antispyware_signature_last_updated')}
              margin="normal"
              variant="outlined"
            />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="nis_enabled">Network Information Service</InputLabel>
              <Select
                value={this.state.nis_enabled}
                onChange={this.handleChange('nis_enabled')}
              >
                <MenuItem value={true}>enabled</MenuItem>
                <MenuItem value={false}>disabled</MenuItem>
              </Select>
            </FormControl>
              <TextField
               name="nis_signature_last_updated"
               id="nis_signature_last_updated"
              label="NIS Signature last update age (max days)"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].nis_signature_last_updated) }
              value={this.state.nis_signature_last_updated}
              onChange={this.handleChange('nis_signature_last_updated')}
              margin="normal"
              variant="outlined"
            />
              <FormControl className={classes.formControl}>
              <InputLabel htmlFor="on_access_protection_enabled">On-Access Protection</InputLabel>
              <Select
                value={this.state.on_access_protection_enabled}
                onChange={this.handleChange('on_access_protection_enabled')}
              >
                <MenuItem value={true}>enabled</MenuItem>
                <MenuItem value={false}>disabled</MenuItem>
              </Select>
              </FormControl>
            <TextField
               name="quick_scan_age"
               id="quick_scan_age"
              label="Quick scan age (max days)"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].quick_scan_age) }
              value={this.state.quick_scan_age}
              onChange={this.handleChange('quick_scan_age')}
              margin="normal"
              variant="outlined"
            />
              <FormControl className={classes.formControl}>
              <InputLabel htmlFor="real_time_protection_enabled">Real-Time Protection</InputLabel>
              <Select
                value={this.state.real_time_protection_enabled}
                onChange={this.handleChange('real_time_protection_enabled')}
              >
                <MenuItem value={true}>enabled</MenuItem>
                <MenuItem value={false}>disabled</MenuItem>
              </Select>
            </FormControl>
           <TextField
               name="full_scan_age"
               id="full_scan_age"
              label="Full scan age (max days)"
              className={classes.textField}
              type="text"
              placeholder={ String(this.props.content.standards[0].full_scan_age) }
              value={this.state.full_scan_age}
              onChange={this.handleChange('full_scan_age')}
              margin="normal"
              variant="outlined"
            />
           <div className={classes.monitorField}>
           <FormControl className={classes.formControl}>
              <InputLabel htmlFor="behavior_monitor_enabled">Behavior Monitor</InputLabel>
              <Select
                value={this.state.behavior_monitor_enabled}
                onChange={this.handleChange('behavior_monitor_enabled')}
              >
                <MenuItem value={true}>enabled</MenuItem>
                <MenuItem value={false}>disabled</MenuItem>
              </Select>
              </FormControl>
           </div>
          <Button
            type="submit"
            onClick={ this.add_standard }
            size="big"
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

