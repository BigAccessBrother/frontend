import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OsIcon from '../../components/OsIcon';
import axios from 'axios';


const styles = {
    card: {
        width: 600,
        margin: '100px auto',
        textAlign: 'center',
    },
    icons: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '50px 0 30px 0',
    },
    actions: {
        justifyContent: 'space-around',
    },
};


class OsInstaller extends Component {
    state = {
        loading: false
    }
    
    getInstaller = os_type => {
        if (os_type === 'mac' || os_type === 'linux') {
            alert('Agent for chosen OS is still in development')
            return true
        }
        this.setState({
            loading: true
        });
        axios.post('agent/installer/', { os_type })
        .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'BAB-agent-installer.exe');
            document.body.appendChild(link);
            link.click();
            this.setState({
                loading: false
            });
        });
    }

    render() {
        const { classes } = this.props;
        
        return (
          <Card className={classes.card}>
              <div className={classes.icons}>
                  <OsIcon type="windows" />
                  <OsIcon type="mac" />
                  <OsIcon type="linux" />
              </div>
                <Typography gutterBottom variant="h5" component="h2">
                  BAB agent download
                </Typography>
              <CardContent>
                <Typography component="p">
                  { this.state.loading ? 
                    'preparing download...' : 
                    'choose your operating system:'}
                </Typography>
              </CardContent>
            <CardActions className={classes.actions}>
            <Button 
                size="small" 
                color="primary"
                onClick={ () => this.getInstaller('windows') }    
            >
                Windows 10
            </Button>
            <Button 
                size="small" 
                color="primary"
                onClick={ () => this.getInstaller('mac') }    
            >
                mac OS Mojave
            </Button>
            <Button 
                size="small" 
                color="primary"
                onClick={ () => this.getInstaller('linux') }    
            >
                Ubuntu 18.04
            </Button>
            </CardActions>
          </Card>
        );
    }
}


export default withStyles(styles)(OsInstaller);
