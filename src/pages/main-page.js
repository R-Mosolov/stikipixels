import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

import Box from '@material-ui/core/Box';
import PhotoCard from '../components/photo-card';

// async function getImageURL() {
  const URL = 'https://api.unsplash.com/photos/random/?client_id=' + 'staCw-UZQJJApKS9QthfvDP6QIXYUmlQnfnkwgkKh8o';
  let imageURL = '';

//   fetch(URL)
//     .then((res) => res.json())
//     .catch((err) => console.log(err))
//     .then(
//       (res) => imageURL = res.urls.full,
//       (err) => console.log(err))

//   return imageURL;
// }

// getImageURL();

export default class MainPage extends Component {
  componentDidMount() {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => console.log(res))
      // .then(
      //   (res) => imageURL = res.urls.full,
      //   (err) => console.log(err))
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <Container maxWidth="lg" className="d-flex flex-wrap justify-content-around">
        <Box mt={5}>
          <PhotoCard imageURL={imageURL} />
        </Box>
        <Box mt={5}>
          <PhotoCard />
        </Box>
        <Box mt={5}>
          <PhotoCard />
        </Box>
        <Box mt={5}>
          <PhotoCard />
        </Box>
        <Box mt={5}>
          <PhotoCard />
        </Box>
        <Box mt={5}>
          <PhotoCard />
        </Box>
        <Box mt={5}>
          <PhotoCard />
        </Box>
        <Box mt={5}>
          <PhotoCard />
        </Box>
        <Box mt={5}>
          <PhotoCard />
        </Box>
      </Container>
    );
  }
}