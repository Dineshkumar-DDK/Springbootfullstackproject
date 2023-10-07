import React from 'react'
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpeg';
import { Carousel } from 'react-bootstrap';

function CLoading() {
  return (
    <div>
     <Carousel >
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            style={{height:"500px"}}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>l</h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            style={{height:"500px"}}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            style={{height:"500px"}}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
  
  )
}

export default CLoading