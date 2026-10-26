import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Icon from '../Icon';
import DetailsOrders from './DetailsOrders';

const orders = [
  { customer: 'Zara Perfumes', urgent: true, ref: 'BL_2024_05_22_001', icon: 'local_florist', decoration: 'Gold screen printing + zamac cap', bottles: 1000, price: '4 200 €', statusLabel: 'Pending...', delivery: '15/09/2026', order: 'CMD_2024_05_18_0156', selected: true },
  { customer: 'Druni Perfumeries', ref: 'BL_2024_05_23_002', icon: 'liquor', decoration: 'Matte black lacquer + hot stamping', bottles: 20, price: '8 500 €', statusLabel: 'Sample sent', delivery: '18/09/2026', order: 'CMD_2024_05_19_0157' },
  { customer: 'Primor Perfumeries', ref: 'BL_2024_05_24_003', icon: 'wine_bar', decoration: 'Silver metallisation + laser engraving', bottles: 700, price: '12 750 €', statusLabel: 'Sample accepted', delivery: '22/09/2026', order: 'CMD_2024_05_20_0158' },
  { customer: 'Bodybell', ref: 'BL_2024_05_23_002', icon: 'water_drop', decoration: 'Blue gradient + white screen printing', bottles: 50, price: '8 500 €', statusLabel: 'In production...', delivery: '25/09/2026', order: 'CMD_2024_05_19_0187' },
  { customer: 'Julia Perfumería', urgent: true, ref: 'BL_2024_05_24_003', icon: 'local_florist', decoration: 'Sandblasting + gold label', bottles: 150, price: '4 200 €', statusLabel: 'Delivered', delivery: '01/10/2026', order: 'CMD_2024_05_20_0198' },
  { customer: 'Paco Perfumerías', ref: 'BL_2024_05_25_004', icon: 'spa', decoration: 'Powder pink lacquer + embossing', bottles: 200, price: '6 750 €', statusLabel: 'Sample rejected', delivery: '06/10/2026', order: 'CMD_2024_05_21_0205' },
  { customer: 'Perfumerías If', urgent: true, ref: 'BL_2024_05_24_003', icon: 'science', decoration: '360° UV printing + selective varnish', bottles: 150, price: '12 300 €', statusLabel: 'Returned', delivery: '10/10/2026', order: 'CMD_2024_05_20_0203' },
  { customer: 'Marvimundo', ref: 'BL_2024_05_24_007', icon: 'wine_bar', decoration: 'Galvanisation + floral decal', bottles: 320, price: '8 750 €', statusLabel: 'Pending...', delivery: '15/10/2026', order: 'CMD_2024_05_19_0187' },
];

export default function Orders() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Box>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'stretch', sm: 'flex-start' }}
        gap={2}
      >
        <Box>
          <Typography sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 500 }}>
            Order list
          </Typography>
          <Typography sx={{ mt: '6px', color: 'var(--muted)', fontSize: 15 }}>
            Here is the tracking of your perfume decoration orders.
          </Typography>
        </Box>
        <Button
          startIcon={<Icon name="add" />}
          onClick={() => setDialogOpen(true)}
          sx={{
            height: 42,
            px: '34px',
            borderRadius: '999px',
            fontWeight: 500,
            letterSpacing: '.3px',
            bgcolor: 'var(--blue)',
            color: '#fff',
            marginLeft: 'auto',
            boxShadow: '0 3px 8px rgba(11, 58, 158, .3)',
            '&:hover': { bgcolor: 'var(--blue-dark)' },
          }}
        >
          ADD ORDER
        </Button>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={1}
        sx={{ mt: 1 }}
      >
        <Stack direction="row" alignItems="center" gap="10px" sx={{ color: 'var(--blue)' }}>
          <Icon name="search" style={{ fontSize: 28 }} />
          <Typography sx={{ fontSize: 22 }}>Search...</Typography>
        </Stack>

        <Stack direction="row" alignItems="center" flexWrap="wrap" gap="4px" sx={{ marginLeft: 'auto' }}>
          <Typography sx={{ color: 'var(--muted)', fontWeight: 500, mr: '6px' }}>
            Filter by
          </Typography>
          <Button sx={{ color: 'var(--blue)', fontSize: { xs: 15, md: 18 }  }} endIcon={<Icon name="expand_more" />}>
            All customers
          </Button>
          <Button sx={{ color: 'var(--blue)', fontSize: { xs: 15, md: 18 }  }} endIcon={<Icon name="expand_more" />}>
            Period
          </Button>
        </Stack>
      </Stack>

      <Typography sx={{ textAlign: 'right', fontWeight: 600, fontSize: 15, m: '24px 0 18px' }}>
        Value : 250 000 € ● Total : 23
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(340px, 100%), 1fr))',
          gap: '18px',
        }}
      >
        {orders.map((o, i) => (
          <Card
            key={i}
            elevation={0}
            sx={{
              bgcolor: '#fff',
              borderRadius: '22px',
              p: '18px 20px 14px',
              fontSize: 14,
              border: '2px solid',
              borderColor: o.selected ? 'var(--blue)' : 'transparent',
              boxShadow: o.selected
                ? '0 4px 14px rgba(11, 58, 158, .25)'
                : '0 2px 10px rgba(30, 40, 90, .05)',
            }}
          >
            <Stack direction="row" alignItems="flex-start" gap="14px">
              <Box
                sx={{
                  width: 44,
                  height: 54,
                  borderRadius: '6px',
                  bgcolor: '#f1f1f4',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <Icon name={o.icon} style={{ color: '#b88a2e' }} />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Stack direction="row" alignItems="center" gap="10px" flexWrap="wrap">
                  <Typography sx={{ fontSize: 22, lineHeight: 1.2 }}>{o.customer}</Typography>
                  {o.urgent && (
                    <Chip
                      label="Urgent"
                      size="small"
                      sx={{
                        bgcolor: '#d9820a',
                        color: '#fff',
                        fontSize: 11,
                        fontWeight: 600,
                        height: 'auto',
                        py: '2px',
                        '& .MuiChip-label': { px: '10px' },
                      }}
                    />
                  )}
                </Stack>
                <Typography sx={{ fontSize: 14, mt: '4px' }}>{o.ref}</Typography>
              </Box>

              <IconButton aria-label="more" sx={{ m: '-6px -10px 0 0' }}>
                <Icon name="more_vert" />
              </IconButton>
            </Stack>

            <Box sx={{ textAlign: 'center', m: '14px 0 12px' }}>
              <Typography>Decoration</Typography>
              <Typography sx={{ fontWeight: 500, mt: '4px', fontSize: 14 }}>
                {o.decoration}
              </Typography>
            </Box>

            <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
              <Box>
                <Typography>Bottles</Typography>
                <Typography sx={{ fontSize: 24, fontWeight: 500 }}>{o.bottles}</Typography>
              </Box>
              <Typography sx={{ fontSize: 24, fontWeight: 600, color: 'var(--blue)', marginLeft: 'auto' }}>
                {o.price}
              </Typography>
            </Stack>

            <Typography sx={{ textAlign: 'center', fontSize: 13, fontWeight: 500, m: '-4px 0 8px' }}>
              {o.statusLabel}
            </Typography>

            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Typography>Delivery date</Typography>
                <Typography sx={{ fontWeight: 500, fontSize: 15 }}>{o.delivery}</Typography>
              </Box>
              <Box sx={{ textAlign: 'right', marginLeft: 'auto' }}>
                <Typography>Order</Typography>
                <Typography sx={{ fontWeight: 500, fontSize: 15 }}>{o.order}</Typography>
              </Box>
            </Stack>
          </Card>
        ))}
      </Box>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={1}
        sx={{ mt: '28px', color: 'var(--muted)' }}
      >
        <Typography>Showing 1 to 10 of 150 orders</Typography>
        <Stack direction="row" alignItems="center" gap="12px" sx={{ marginLeft: 'auto' }}>
          <Typography>Rows per page</Typography>
          <Button sx={{ color: 'var(--blue)', fontSize: { xs: 15, md: 18 }  }} endIcon={<Icon name="expand_more" />}>
            10
          </Button>
        </Stack>
      </Stack>

      <DetailsOrders open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </Box>
  );
}
