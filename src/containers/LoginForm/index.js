import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions/auth';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '100%',
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
});

class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    login = (e) => {
        e.preventDefault();
        this.props.dispatch(login(
            this.state.username,
            this.state.password
        ))
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className="Login">
                <form 
                    className={classes.container} 
                    noValidate 
                    autoComplete="on"
                    onSubmit={ this.login }
                >
                    <TextField
                        id="Username"
                        label="Username"
                        placeholder="username..."
                        className={classes.textField}
                        value={this.state.username}
                        onChange={this.handleChange('username')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="Password"
                        type="password"
                        label="Password"
                        placeholder="password..."
                        className={classes.textField}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button 
                        type="submit"
                        size="large" 
                        color="primary"
                        onClick={ this.login }
                    >
                        Login
                    </Button>
                </form>
            </div>
        )
    }
}



Login.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(connect()(Login));
