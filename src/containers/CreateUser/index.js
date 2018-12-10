import React, { Component } from 'react';
import { createUser } from '../../store/actions/content';
import TextField from '@material-ui/core/TextField/TextField';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Button from '@material-ui/core/Button/Button';
import { withStyles } from '@material-ui/core';
import connect from 'react-redux/es/connect/connect';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '30%',
    margin: 'auto',
    marginTop: 60
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 260,
    width: '30%',
    backgroundColor: 'primary'
  },
  button: {
    marginTop: 20,
    textAlign: 'center',
    borderRadius: '100px',
    height: 50
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 260,
    width: '30%'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class CreateUser extends Component {
  state = {
    email: '',
    password: '',
    is_staff: false
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  createUserClick = (e) => {
    e.preventDefault();
    this.props.dispatch(createUser(this.state, this.props.getBack));
  }

  render () {
    const { classes } = this.props;
    return (
      <div>
        <form
          className={classes.container}
          noValidate autoComplete='off'
          onSubmit={this.add_standard}
        >
          <TextField
            name='email'
            id='email'
            label='Email'
            className={classes.textField}
            type='text'
            value={this.state.email}
            onChange={this.handleChange('email')}
            margin='normal'
            variant='outlined'
          />
          <TextField
            name='password'
            id='password'
            label='Password'
            className={classes.textField}
            type='text'
            value={this.state.password}
            onChange={this.handleChange('password')}
            margin='normal'
            variant='outlined'
          />
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='is_staff'>Admin privileges</InputLabel>
            <Select
              value={this.state.is_staff}
              onChange={this.handleChange('is_staff')}
            >
              <MenuItem value>yes</MenuItem>
              <MenuItem value={false}>no</MenuItem>
            </Select>
          </FormControl>
          <Button
            type='submit'
            onClick={this.createUserClick}
            size='large'
            color='primary'
            className={classes.button}
          >
            Create User
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(connect(
  ({ content }) => ({ content })
)(CreateUser));
