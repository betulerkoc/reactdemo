import React from 'react'
import {Link} from 'react-router';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import SimilarMovie from './SimilarMovie';

export default function SimilarMovieList({data}) {

  const StyledLink = styled(Link)`
  &:hover {
    text-decoration:none;
  }
`;

    let similars = data.map(function(similar) {
        return(
          <Col xs={4} sm={3} md={2} key={similar.id} >
             <StyledLink ><SimilarMovie similars={similar} /></StyledLink>
          </Col>
        );
    });
   
  return(
    <div>
      <h3>Related Movies</h3>
      <Row>
        {similars}
      </Row>
    </div>
  );
}
