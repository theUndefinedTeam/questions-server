import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

const ThumbnailImage = ({ image, imgIdx, currentImage, setCurrentImage }) => {
  return (
    <div>
      <Image
        loading='lazy'
        src={image}
        style={currentImage !== imgIdx ? styles : highLightStyle}
        alt='product-image'
        rounded
        className='m-1'
        onClick={() => setCurrentImage(imgIdx)}
      />
    </div>
  );
};
const styles = {
  maxWidth: '70px',
  transition: 'all 0.3s',
  margin: '2rem',
};
const highLightStyle = {
  boxShadow: '1px 1px 1px 1px #CCC',
  maxWidth: '70px',
  transition: 'all 0.3s',
  scale: '1.1',
};

ThumbnailImage.propTypes = {
  image: PropTypes.string.isRequired,
  currentImage: PropTypes.number.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
};

export default ThumbnailImage;
