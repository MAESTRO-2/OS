import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import CallIcon from '@mui/icons-material/Call';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const calls = ['+963 994 554 735', '+963 947 106 008'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>تواصل معنا من خلال الارقام التالية</DialogTitle>
      <List sx={{ pt: 0 }}>
        {calls.map((call) => (
          <ListItem disableGutters>
            <ListItemButton onClick={() => handleListItemClick(call)} key={call}>
              <ListItemAvatar>
                  <CallIcon />
                  <WhatsAppIcon/>
              </ListItemAvatar>
              <ListItemText primary={call} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disableGutters>
          <ListItemButton
            autoFocus
          >
            <ListItemAvatar>
              
            </ListItemAvatar>
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Cities() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(calls[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button 
      variant="contained" 
      onClick={handleClickOpen}
      
      >
        للتواصل
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
