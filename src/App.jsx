import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Icon from './Icon';
import Orders from './Orders/Orders';

const topNav = [
  { icon: 'space_dashboard', label: 'Dashboard', active: false },
  { icon: 'assignment', label: 'Orders', active: true },
  { icon: 'factory', label: 'Production', active: false },
  { icon: 'edit_note', label: 'NotePad', active: false },
];

const bottomNav = [
  { icon: 'settings', label: 'Settings' },
  { icon: 'hub', label: 'Integration' },
  { icon: 'logout', label: 'Sign out' },
];

function NavList({ items }) {
  return (
    <List sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {items.map((item) => (
        <ListItemButton key={item.label} selected={!!item.active}>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <Icon name={item.icon} />
          </ListItemIcon>
          <ListItemText primary={item.label} slotProps={{ primary: { fontSize: 15 } }} />
        </ListItemButton>
      ))}
    </List>
  );
}

function SidebarContent() {
  return (
    <Stack sx={{ p: '28px 18px 18px', height: '100%', width: 285, maxWidth: '100%' }}>
      <Stack direction="row" alignItems="center" gap="14px" sx={{ px: 1, pb: '36px' }}>
        <Avatar sx={{ width: 38, height: 38, bgcolor: '#2d2f4a', fontSize: 13, fontWeight: 700 }}>
          SP
        </Avatar>
        <Box>
          <Typography sx={{ fontSize: 13 }}>S E R I G R A F I A</Typography>
          <Typography sx={{ fontWeight: 700, fontSize: 20 }}>P O R T A L</Typography>
        </Box>
      </Stack>

      <NavList items={topNav} />
      <Box sx={{ flex: 1 }} />
      <NavList items={bottomNav} />

      <Paper
        sx={{ display: 'flex', alignItems: 'center', gap: '14px', p: '14px', mt: '28px', borderRadius: '14px' }}
      >
        <Icon name="..." style={{ color: '#e8590c', fontSize: 34 }} />
        <Box>
          <Typography sx={{ fontSize: 15 }}>Micro Azur</Typography>
          <Typography sx={{ fontSize: 12 }}>+41 76 473 67 64</Typography>
        </Box>
      </Paper>
    </Stack>
  );
}

export default function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '285px 1fr' },
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {isMobile ? (
        <Drawer open={menuOpen} onClose={() => setMenuOpen(false)}>
          <SidebarContent />
        </Drawer>
      ) : (
        <Box component="aside">
          <SidebarContent />
        </Box>
      )}

      <Stack component="main" sx={{ minWidth: 0 }}>
        <Stack
          component="header"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
          sx={{ minHeight: { xs: 72, md: 94 }, px: { xs: '16px', md: '36px' } }}
        >
          <Stack direction="row" alignItems="center" gap={1}>
            {isMobile && (
              <IconButton aria-label="menu" onClick={() => setMenuOpen(true)}>
                <Icon name="menu" />
              </IconButton>
            )}
            <Typography variant="h1" sx={{ fontSize: { xs: 22, md: 26 }, fontWeight: 500, marginTop: 'auto' }}>
              Orders
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap={{ xs: '2px', md: '10px' }}  sx={{ marginLeft: 'auto' }}>
            <IconButton aria-label="search"><Icon name="search" /></IconButton>
            <IconButton aria-label="chat"><Icon name="chat" /></IconButton>
            <IconButton aria-label="notifications"><Icon name="notifications_none" /></IconButton>

            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                p: { xs: '4px', sm: '4px 22px 4px 4px' },
                borderRadius: '999px',
                color: 'var(--blue-dark)',
              }}
            >
              <Avatar
                sx={{
                  width: { xs: 40, md: 56 },
                  height: { xs: 40, md: 56 },
                  background: 'linear-gradient(135deg, #5b7bd5, #1f3a7a)',
                }}
              >
                <Icon name="home" style={{ color: '#fff' }} />
              </Avatar>
              <Typography sx={{ fontSize: 16, display: { xs: 'none', sm: 'block' } }}>
                Hello, <Box component="strong" sx={{ fontWeight: 500 }}>Eugenia</Box>
              </Typography>
            </Paper>
          </Stack>
        </Stack>

        <Box
          sx={{
            flex: 1,
            bgcolor: 'var(--bg-page)',
            borderTopLeftRadius: { xs: 0, md: '28px' },
            p: { xs: '16px', md: '36px' },
          }}
        >
          <Orders />
        </Box>
      </Stack>
    </Box>
  );
}