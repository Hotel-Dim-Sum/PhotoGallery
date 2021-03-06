/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React from 'react';
import styles from '../styles/GalleryMainGrid.css';

class GalleryMainGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.imageClickHandler = this.imageClickHandler.bind(this);
  }

  imageClickHandler() {
    this.props.showDetailGrid();
  }

  render() {
    const { photos, numPhotos } = this.props;
    return (
      <div className={styles.galleryMainGridContainer}>
        <img className={styles.galleryMainGridImage} onClick={this.imageClickHandler} src={photos.room_photos[0].imageUrl} />
        <div className={styles.gridInfoBackground}></div>
        <span className={styles.galleryMainGridInfo}>
          1 / {numPhotos}
        </span>
      </div>
    );
  }
}

export default GalleryMainGrid;
