import {connect} from "react-redux";
import {Component} from "react";
import Button from "@material-ui/core/Button/Button";


class AddStandards extends Component {
    state = {
          antispyware_enabled: '',
          antispyware_signature_last_updated: '',
          antivirus_enabled: '',
          antivirus_signature_last_updated: '',
          behavior_monitor_enabled: '',
          full_scan_age: '',
          nis_enabled: '',
          nis_signature_last_updated: '',
          nis_signature_version: '',
          on_access_protection_enabled: '',
          quick_scan_age: '',
          real_time_protection_enabled: '',
          disk_encryption_status: '',
    }



    handleChange = standard => event => {
    this.setState({
      [standard]: event.target.value,
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
              label="antispyware enabled"
              className={classes.textField}
              type="text"
              name="antispyware_enabled"
              placeholder={ this.props.content.standards[0].antispyware_enabled }
              value={this.state.standard}
              onChange={this.handleChange('standard')}
              autoComplete=""
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



export default (connect()(AddStandards))
