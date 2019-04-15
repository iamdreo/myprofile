import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';




const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  button: {
    margin: theme.spacing.unit,
    borderRadius: 20,
    '&:hover': {
      backgroundColor: green[700],
    },
   
  },
  text: {
    textAlign: 'center',
    marginTop: 100,
    fontFamily: 'Righteous'
  }
});




class Contact extends React.Component {
  
 

  render() {
    const { classes, id } = this.props;

    return (
      <div id={id}>
      <h1 className={classes.text}> Let's Work? </h1>
      <form action="https://formspree.io/andrew_ole@yahoo.com" method="POST" className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          className={classes.textField}
          name="name"
          placeholder="name"
          fullWidth
          type="text"
          style={{width: '50%'}}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

       

        <TextField
          id="outlined-email-input"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email"
          fullWidth
          style={{width: '50%'}}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />       

        
        <TextField
          id="outlined-full-width"
          placeholder="Placeholder"
          fullWidth
          multiline
          rows="4"
          name="message"
          type="text"
          defaultValue="Message"
          style={{width: '50%'}}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

<Button type="submit" value="Send" variant="contained" color="primary"  className={classes.button}>
        
        SEND MESSAGE
      </Button>
     

      </form>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);