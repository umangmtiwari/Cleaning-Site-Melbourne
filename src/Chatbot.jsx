import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', message: 'Hey! Need help? Ask me anything!' }
  ]);

  // Predefined questions
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

    setChatHistory([...chatHistory, { sender: 'user', message: userMessageText }]);

    let botResponse = '';

    if (userMessageText.toLowerCase().includes('cost')) {
      botResponse = 'Our cleaning services start at $80 for 2 hours of home cleaning.';
    } else if (userMessageText.toLowerCase().includes('booking')) {
      botResponse = 'You can make a booking directly on our website by choosing your service and preferred time.';
    } else if (userMessageText.toLowerCase().includes('area')) {
      botResponse = 'Yes! We provide cleaning services across Melbourne.';
    } else if (userMessageText.toLowerCase().includes('discount')) {
      botResponse = 'We currently offer $40 off for customers in the Western Suburbs!';
    } else if (userMessageText.toLowerCase().includes('services')) {
      botResponse = 'Clean Commerce offers a variety of cleaning services, including home, kitchen, and bathroom cleaning.';
    } else {
      botResponse = 'For more information, please call 1234567890.';
    }

    setChatHistory([...chatHistory, { sender: 'user', message: userMessageText }, { sender: 'bot', message: botResponse }]);
    setUserMessage('');
  };

  return (
    <div>
      {/* Chat Icon Button */}
      <Button
        variant="contained"
        color="success"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          borderRadius: '50%',
          padding: 2,
          zIndex: 1000,
        }}
        onClick={handleClickOpen}
      >
        <ChatIcon />
      </Button>

      {/* Chatbot Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="xs"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          borderRadius: '16px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'transparent', // Transparent background
          zIndex: 9999,
        }}
      >
        <DialogTitle sx={{ backgroundColor: '#006699', color: 'white', fontWeight: 'bold', position: 'relative' }}>
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
        <DialogContent sx={{ maxHeight: '500px', overflowY: 'auto' }}>  {/* Increased maxHeight here */}

          {/* Chat History */}
          <div style={{ marginBottom: '10px' }}>
            {chatHistory.map((msg, index) => (
              <div key={index} style={{ textAlign: msg.sender === 'bot' ? 'left' : 'right', marginBottom: '10px' }}>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    backgroundColor: msg.sender === 'bot' ? '#e5e5e5' : '#006699',
                    color: msg.sender === 'bot' ? '#333' : '#fff',
                    maxWidth: '70%',
                    wordBreak: 'break-word',
                  }}
                >
                  {msg.message}
                </div>
              </div>
            ))}
          </div>

          {/* Predefined Questions */}
          <Grid container spacing={1} sx={{ marginBottom: '0px' }}> 
            {predefinedQuestions.map((question, index) => (
              <Grid item xs={12} key={index}>
                <Button
                  variant="outlined"
                  fullWidth
                  color="success"
                  sx={{
                    marginBottom: '10px',
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

          {/* User Input Text Field with Send Icon */}
          <div style={{ position: 'relative', marginTop: '10px' }}>
            <TextField
              fullWidth
              label="Type your message"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' ? handleSendMessage(userMessage) : null}
              variant="outlined"
              sx={{
                borderRadius: '20px',
                paddingRight: '40px', // Make space for the send icon
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                  padding: '8px 12px',
                },
              }}
            />
            {userMessage && (
              <IconButton
                onClick={() => handleSendMessage(userMessage)}
                sx={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: '#006699',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#006699',
                  },
                }}
              >
                <SendIcon />
              </IconButton>
            )}
          </div>
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'center' }}>
          {/* Close Button (Optional) */}
          {/* <Button onClick={handleClose} color="secondary" sx={{ fontWeight: 'bold' }}>Close</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Chatbot;
