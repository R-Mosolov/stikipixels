import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import PhotoCard from '../components/photo-card';

// TODO: Move ACCESS_TOKEN to .env module before production
const ACCESS_TOKEN = 'staCw-UZQJJApKS9QthfvDP6QIXYUmlQnfnkwgkKh8o';
const URL = 'https://api.unsplash.com/photos/?per_page=12&client_id=' + ACCESS_TOKEN;

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      allPhotos: [],
    };
  }

  async componentDidMount() {
    // TODO: Add a spinner here working while data are loading
    return fetch(URL)
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({ allPhotos: res });
          return console.log(this.state.allPhotos);
        },
        (err) => console.log(err)
      )
      .catch((err) => console.log(err))
  }

  renderPhotos() {
    return this.state.allPhotos.map((photo) => {
      const {
        urls,
        description,
        likes
      } = photo;

      return (
        <Box
          mt={5}
          onClick={this.handleClickOpen}
        >
          <PhotoCard
            imageURL={urls.small}
            description={description}
            likes={likes}
          />
        </Box>
      );
    });
  }

  render() {
    return (
      <Container maxWidth="lg" className="d-flex flex-wrap justify-content-around">
        {this.renderPhotos()}
      </Container>
    );
  }
}