import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HubspotForm from '../HubspotForm';

const boxStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'black',
};

const buttonStyle = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 238,
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
};

export default function ContactUsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={buttonStyle} onClick={handleOpen}>Contact Us</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={boxStyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Hubspot Contact Form
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <HubspotForm />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}