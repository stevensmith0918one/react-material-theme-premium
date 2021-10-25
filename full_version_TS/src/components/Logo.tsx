// material
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
import Image from '../assets/logo.png';
// ----------------------------------------------------------------------

export default function Logo({ sx }: BoxProps) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    <Box sx={{ width: 100, height: 100, ...sx }}>
      <img src={Image} alt="logo" loading="lazy" style={{ marginTop: '50px' }} />
    </Box>
  );
}
