import ImgHolder from "./components/ImgHolder";
import MusicPlayer from "./components/MusicPlayer";


import {Typography, Container, styled, Box} from "@mui/material";

const WallPaper = styled('div')({
  position: 'absolute',
  zIndex: "-1",
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflow: 'hidden',
  background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
  '&:before': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    top: '-40%',
    right: '-50%',
    background:
      'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
  },
  '&:after': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    bottom: '-50%',
    left: '-30%',
    background:
      'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
    transform: 'rotate(30deg)',
  },
});

export default function App() {
  return (
    <div className="App">
      <Typography 
        component={"h2"} 
        variant="h3"
        mb={3}
      >
        Gallery
      </Typography>
      <Container
        className="mediaHolder"
      >
        <ImgHolder />
        <MusicPlayer />
      </Container>

      <WallPaper />
    </div>
  );
}
