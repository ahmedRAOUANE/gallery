
import { Typography, styled, useTheme, Box, Slider, IconButton, Stack } from '@mui/material';

const Widget = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  padding: 16,
  borderRadius: 16,
  height: '100%',
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
}));

const ImgHolder = () => {
  return (
    <Box sx={{overflow: "hidden"}}>
      <Widget>
        img Holder
      </Widget>
    </Box>
  )
}

export default ImgHolder
