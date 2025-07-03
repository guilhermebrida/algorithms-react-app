import React from 'react';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleModal({ show, toggleModal, card }) {
  if (!card) return null;

  return (
    <Modal open={show} onClose={toggleModal}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 600 },
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 3,
          p: 3,
          outline: 'none',
        }}
      >
        <IconButton
          onClick={toggleModal}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          component="img"
          src={card.image}
          alt={card.title}
          sx={{
            width: '100%',
            borderRadius: 2,
            boxShadow: 2,
            mb: 2,
          }}
        />

        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: 'center' }}
        >
          {card.title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ whiteSpace: 'pre-wrap', textAlign: 'justify' }}
        >
          {card.description}
        </Typography>
      </Box>
    </Modal>
  );
}
