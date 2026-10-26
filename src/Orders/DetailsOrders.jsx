import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Icon from '../Icon';

export default function DetailsOrders({ open, onClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      fullWidth
      maxWidth={false}
      slotProps={{
        paper: {
          sx: {
            width: 740,
            maxWidth: fullScreen ? '100%' : '95vw',
            borderRadius: fullScreen ? 0 : '28px',
          },
        },
      }}
    >
      <DialogContent
        sx={{
          position: 'relative',
          p: { xs: '56px 20px 32px', sm: '44px 68px 56px' },
          minHeight: { sm: 600 },
          color: 'var(--text)',
        }}
      >
        <IconButton
          onClick={onClose}
          aria-label="close"
          sx={{ position: 'absolute', top: 22, right: { xs: 16, sm: 60 } }}
        >
          <Icon name="close" style={{ fontSize: 20 }} />
        </IconButton>

        <Stack direction="row" alignItems="center" flexWrap="wrap" gap="18px">
          <Box
            sx={{
              width: 92,
              height: 92,
              borderRadius: '14px',
              bgcolor: '#f6f1e8',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Icon name="local_florist" style={{ fontSize: 44, color: '#b88a2e' }} />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 20, fontWeight: 500 }}>Zara Perfumes</Typography>
            <Typography sx={{ fontSize: 14, mt: '6px' }}>100 flacons · 100 mL</Typography>
          </Box>

          <Typography sx={{ fontSize: 12, fontWeight: 600, alignSelf: 'flex-end', mb: '14px' }}>
            BL_2024_05_22_001
          </Typography>
        </Stack>

        <Box sx={{ textAlign: 'center', mt: '4px' }}>
          <Typography component="small" sx={{ display: 'block', fontSize: 17, color: 'var(--muted)' }}>
            Decoration
          </Typography>
          <Typography variant="h3" sx={{ mt: '4px', fontSize: { xs: 20, sm: 24 }, fontWeight: 500, color: '#111' }}>
            Gold screen printing + zamac cap
          </Typography>
        </Box>

        <Stack direction="row" flexWrap="wrap" gap="10px" sx={{ m: { xs: '18px 0 26px', sm: '18px 0 26px -8px' } }}>
          <Chip icon={<Icon name="mail_outline" style={{ fontSize: 14 }} />} label="f.diagne@diagne.sn" />
          <Chip icon={<Icon name="phone" style={{ fontSize: 14 }} />} label="+34 77 812 34 56" />
        </Stack>

        <Typography sx={{ fontSize: 13, letterSpacing: '.5px', mb: '6px', ml: { sm: '-8px' } }}>
          ORDER STATUS
        </Typography>

        <Box
          component="svg"
          viewBox="0 0 620 330"
          xmlns="http://www.w3.org/2000/svg"
          sx={{ width: '100%', height: 'auto', display: 'block', mb: '24px', ml: { sm: '-8px' } }}
        >
          <path
            d="M205 50 Q170 65 148 95 T374 124 Q250 170 250 205 T533 295"
            fill="none"
            stroke="#2b2f6b"
            strokeWidth={5}
            strokeLinecap="round"
          />

          <g fill="#fff" stroke="#8a8c98">
            <circle cx={205} cy={22} r={11} strokeWidth={2} />
          </g>
          <text x={205} y={26} textAnchor="middle" fontSize={10}>1</text>
          <text x={228} y={27} fontSize={14}>Pending</text>

          <circle cx={147} cy={52} r={16} fill="#fff" stroke="#14b8f0" strokeWidth={2.5} />
          <text x={147} y={57} textAnchor="middle" fontSize={13} fill="#14b8f0">2</text>
          <text x={118} y={57} textAnchor="end" fontSize={14}>Sample sent</text>

          <circle cx={374} cy={70} r={22} fill="#a78bfa" fillOpacity={0.35} stroke="#a78bfa" strokeWidth={3} />
          <text x={374} y={77} textAnchor="middle" fontSize={18} fill="#7c4dff">3</text>
          <text x={408} y={75} fontSize={14} fill="#a78bfa">Sample accepted</text>

          <circle cx={250} cy={135} r={26} fill="#fff" stroke="#f5b400" strokeWidth={3.5} />
          <text x={250} y={144} textAnchor="middle" fontSize={24} fill="#f5b400">4</text>
          <text x={220} y={141} textAnchor="end" fontSize={14}>In production</text>

          <circle cx={533} cy={210} r={32} fill="#fff" stroke="#10c98f" strokeWidth={4} />
          <text x={533} y={221} textAnchor="middle" fontSize={30} fill="#10c98f">5</text>
          <text x={487} y={215} textAnchor="end" fontSize={14}>Delivered</text>
        </Box>

        <Box sx={{ ml: { sm: '-8px' } }}>
          <Link
            component="button"
            underline="always"
            sx={{ color: 'var(--blue)', fontWeight: 600, fontSize: 14 }}
          >
            Comment
          </Link>
          <Typography sx={{ mt: '14px', color: '#9a9ca8', fontSize: 16, lineHeight: 1.45 }}>
            Lorem ipsum dolor sit amet consectetur. Velit amet integer amet ac blandit
            magnis porta pretium.
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
