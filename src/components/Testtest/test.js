import {useState,useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import Button from "react-bootstrap/Button";

import React from 'react'

const Test = () => {

    let params = useParams();
    let key = params.movieId;

  return (
    <div className="react-player-container">
        test
    </div>
  )
}

export default Test