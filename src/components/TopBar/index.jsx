import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import models from '../../modelData/models';

function TopBar() {
  const location = useLocation();

  const match = location.pathname.match(/^\/(users|photos)\/(.+)$/);
  let contextText = "Photo Sharing App";

  if (match) {
    const userId = match[2];
    const user = models.userModel(userId); 

    if (user) {
      if (location.pathname.includes('/photos/')) {
        contextText = `Photos of ${user.first_name} ${user.last_name}`;
      } else {
        contextText = `${user.first_name} ${user.last_name}`;
      }
    }
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Vũ Thị Mỹ Lệ
        </Typography>
        <Typography variant="h6">
          {contextText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;