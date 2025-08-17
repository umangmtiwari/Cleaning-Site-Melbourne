import React, { useState } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle,
  TextField, Grid, IconButton, useMediaQuery, Box
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', message: 'Hey! Need help? Ask me anything!' }
  ]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const predefinedQuestions = [
    "How much do your services cost?",
    "How can I make a booking?",
    "Do you provide services in my area?",
    "Can I get a discount?",
    "What services do you offer?"
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendMessage = (message) => {
    const userMessageText = message.trim();
    if (userMessageText === '') return;

    let botResponse = '';

    if (userMessageText.toLowerCase().includes('cost')) {
      botResponse = 'Our professional home cleaning services start from just $169.';
    } else if (userMessageText.toLowerCase().includes('booking')) {
      botResponse = 'You can book directly through our website by selecting your preferred service.';
    } else if (userMessageText.toLowerCase().includes('area')) {
      botResponse = 'Yes! We provide cleaning services across Melbourne.';
    } else if (userMessageText.toLowerCase().includes('discount')) {
      botResponse = 'We currently offer $40 off for customers in the Western Suburbs! Offer valid for First Booking!';
    } else if (userMessageText.toLowerCase().includes('services')) {
      botResponse = 'Clean Commerce offers a variety of cleaning services, including home, kitchen, and bathroom cleaning.';
    } else {
      botResponse = 'For more information, please call 1234567890.';
    }

    setChatHistory(prev => [
      ...prev,
      { sender: 'user', message: userMessageText },
      { sender: 'bot', message: botResponse }
    ]);
    setUserMessage('');
  };

  return (
    <div>
      {/* Floating Chat Icon */}
      <Button
        variant="contained"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          borderRadius: '50%',
          padding: 2,
          zIndex: 1000,
          backgroundColor: '#006699',
          '&:hover': { backgroundColor: '#005780' },
        }}
        onClick={handleClickOpen}
      >
        <ChatIcon />
      </Button>

      {/* Chatbot Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={isMobile}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          sx: {
            borderRadius: isMobile ? 0 : '16px',
            position: isMobile ? 'relative' : 'fixed',
            bottom: isMobile ? 'auto' : 20,
            right: isMobile ? 'auto' : 20,
            m: isMobile ? 0 : 1,
          }
        }}
      >
        <DialogTitle sx={{
          backgroundColor: '#006699',
          color: 'white',
          fontWeight: 'bold',
          position: 'relative'
        }}>
          Clean Commerce Chatbot
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 10,
              top: 10,
              color: 'white',
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 1, paddingBottom: 2 }}>
          {/* Chat History */}
          <Box sx={{ flexGrow: 1, overflowY: 'auto', maxHeight: isMobile ? '40vh' : '300px', px: 1 }}>
            {chatHistory.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: msg.sender === 'bot' ? 'left' : 'right',
                  mb: 1
                }}
              >
                <Box
                  sx={{
                    display: 'inline-block',
                    px: 2,
                    py: 1,
                    borderRadius: '20px',
                    backgroundColor: msg.sender === 'bot' ? '#e5e5e5' : '#006699',
                    color: msg.sender === 'bot' ? '#333' : '#fff',
                    maxWidth: '80%',
                    wordBreak: 'break-word'
                  }}
                >
                  {msg.message}
                </Box>
              </Box>
            ))}
          </Box>

          {/* Predefined Questions */}
          <Grid container spacing={1} sx={{ mt: 1 }}>
            {predefinedQuestions.map((question, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    textTransform: 'none',
                    fontSize: '14px',
                    fontWeight: 500,
                    borderRadius: '20px',
                  }}
                  onClick={() => handleSendMessage(question)}
                >
                  {question}
                </Button>
              </Grid>
            ))}
          </Grid>

          {/* Input with Send */}
          <Box sx={{ position: 'relative', mt: 2 }}>
            <TextField
              fullWidth
              label="Type your message"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(userMessage)}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                  pr: 6,
                },
              }}
            />
            {userMessage && (
              <IconButton
                onClick={() => handleSendMessage(userMessage)}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: '#006699',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#005780',
                  },
                }}
              >
                <SendIcon />
              </IconButton>
            )}
          </Box>
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'center' }}>
          {/* Optional footer actions */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Chatbot;
