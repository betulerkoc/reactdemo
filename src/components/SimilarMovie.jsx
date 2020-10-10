import React from 'react';
import { URL_IMG, IMG_SIZE_LARGE } from '../const';
import { Thumbnail } from 'react-bootstrap/lib';

export default function SimilarMovie({similars}) {
  return (
    <Thumbnail src={URL_IMG+IMG_SIZE_LARGE+similars.backdrop_path} alt={similars.title} >
      <p>{similars.title}</p>
      <p>{similars.popularity}</p>
  </Thumbnail>
 )
}

SimilarMovie.propTypes = {
  similars: React.PropTypes.string.isRequired,
};
