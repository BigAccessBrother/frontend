import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions/auth';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  login = e => {
    e.preventDefault();
    this.props.dispatch(login(
      this.state.email,
      this.state.password
    ));
    this.setState({
      email: '',
      password: ''
    });
  }

  render () {
    const { classes } = this.props;

    return (
      <div className='LoginForm'>
        <form
          className={classes.container}
          noValidate
          autoComplete='on'
          onSubmit={this.login}
        >
          <TextField
            id='Email'
            label='Email/Username'
            placeholder='email/username...'
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange('email')}
            margin='normal'
            variant='outlined'
          />
          <TextField
            id='Password'
            type='password'
            label='Password'
            placeholder='password...'
            className={classes.textField}
            value={this.state.password}
            onChange={this.handleChange('password')}
            margin='normal'
            variant='outlined'
          />
          <Button
            type='submit'
            size='large'
            color='primary'
            onClick={this.login}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(connect()(Login));
