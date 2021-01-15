import React from 'react';
import Container from '@material-ui/core/Container';

import Box from '@material-ui/core/Box';
import PhotoPreview from '../components/card';

// fetch(`https://api.unsplash.com/photos/random/?client_id=${process.env.ACCESS_KEY}`)
//   .then((photo) => console.log(photo))
//   .catch((err) => console.log(err))

export default function MainPage() {
  return (
    <Container maxWidth="lg" className="d-flex flex-wrap justify-content-around">
      <Box mt={5}>
        <PhotoPreview />
      </Box>
      <Box mt={5}>
        <PhotoPreview />
      </Box>
      <Box mt={5}>
        <PhotoPreview />
      </Box>
      <Box mt={5}>
        <PhotoPreview />
      </Box>
      <Box mt={5}>
        <PhotoPreview />
      </Box>
      <Box mt={5}>
        <PhotoPreview />
      </Box>
      <Box mt={5}>
        <PhotoPreview />
      </Box>
      <Box mt={5}>
        <PhotoPreview />
      </Box>
      <Box mt={5}>
        <PhotoPreview />
      </Box>
    </Container>
  );
}