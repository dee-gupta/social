import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Button,
  Container,
  Paper,
  Avatar,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Logout as LogoutIcon,
  Group as GroupIcon,
  PhotoCamera as PhotoCameraIcon,
} from '@mui/icons-material';

function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = () => {
    // TODO: Implement actual logout
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Social
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              size="small"
              placeholder="Search..."
              sx={{
                bgcolor: 'background.paper',
                borderRadius: 1,
                width: 200,
              }}
            />
            <IconButton color="inherit" onClick={() => setIsCreatePostOpen(true)}>
              <AddIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Avatar>U</Avatar>
              </ListItemIcon>
              <ListItemText primary="Username" secondary="@username" />
            </ListItem>
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          bgcolor: 'background.default',
        }}
      >
        <Container maxWidth="md">
          {/* Example Post */}
          <Paper sx={{ p: 2, mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ mr: 2 }}>U</Avatar>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Username
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2 hours ago
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" paragraph>
              Welcome to Social! This is an example post. Create your own post by clicking the + button in the top right.
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage; 