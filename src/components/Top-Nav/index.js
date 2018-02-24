import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = {
  root: {
    flexGrow: 1,
    background: '#282828',
    borderTop: '1px solid #3eb974',
    borderBottom: '1px solid #3eb974'
  },
  flex: {
    flex: 1,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 50,
    height: 50,
  }
};


function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static"    
      classes={{
        root: props.classes.root
      }}>
      <Toolbar>
        <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
          <Avatar
          alt="Adelle Charles"
          src="http://www.hiremagentoprogrammer.com/wp-content/themes/hire-magento-programmer/images/home-expert-img.png"
          className={(classes.avatar, classes.bigAvatar)}
        />
        </Button>
        <Button color="inherit" >Home</Button>
        <Button color="inherit" >PROJECTS</Button>
        <Button color="inherit" >SITE-MAP</Button>
        <Button color="inherit" >ABOUT US</Button>
        <Button color="inherit" >OUR TEAM</Button>
        <Button color="inherit" >SERVICES</Button>
        <Button color="inherit" >LOGIN</Button>
      </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);