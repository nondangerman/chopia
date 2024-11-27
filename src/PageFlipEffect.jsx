import React, { useState } from 'react';
import { Paper, Button, Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';

const flipAnimation = keyframes`
  from {
    transform: perspective(600px) rotateY(0deg);
  }
  to {
    transform: perspective(600px) rotateY(-180deg);
  }
`;

const Page = styled(Paper)(({ theme }) => ({
  width: '400px',
  height: '400px',
  position: 'absolute',
  backfaceVisibility: 'hidden',
  transformStyle: 'preserve-3d',
}));

const FlippablePage = styled(Box)(({ flipped }) => ({
  position: 'relative',
  transform: flipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
  transformStyle: 'preserve-3d',
  transition: 'transform 1s',
}));

function PageFlipEffect() {
  const [flipped, setFlipped] = useState(false);

  const handleFlipPage = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div style={{ perspective: '1000px' }}>
      <FlippablePage flipped={flipped}>
        <Page elevation={4} sx={{ backgroundColor: 'lightblue' }}>
          <h2>Página 1</h2>
          <Button variant="contained" onClick={handleFlipPage}>
            Voltear
          </Button>
        </Page>
        <Page
          elevation={4}
          sx={{
            backgroundColor: 'lightcoral',
            transform: 'rotateY(180deg)',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <h2>Página 2</h2>
          <Button variant="contained" onClick={handleFlipPage}>
            Voltear
          </Button>
        </Page>
      </FlippablePage>
    </div>
  );
}

export default PageFlipEffect;