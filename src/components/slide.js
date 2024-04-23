import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

function Slide() {
  return (
    <Slider>
      <Carousel>
        <Carousel.Item>
          <StaticImage
            src="../images/susa.jpg"
            className="d-block w-100"
            formats={["AUTO", "WEBP"]}
            alt="Susa"
          />
           <Carousel.Caption>
            <h3>Susa</h3>
            {/* <span className="subTitle">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </span>
            <br></br>
            <button className="btn btn-primary m-4">LINK</button> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/chogha_zanbil.jpg"
            className="d-block w-100"
            formats={["AUTO", "WEBP"]}
            alt="Chogha Zanbil"
          />
          <Carousel.Caption>
            <h3>Chogha Zanbil</h3>
            {/* <span className="subTitle">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </span>
            <br></br>
            <button className="btn btn-primary m-4">LINK</button> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Slider>
  )
}

//style
const Slider = styled.div`
  margin-bottom: 3rem;
  
  .subTitle {
  }
  .btn-primary {
    background-color: #8b5a40 !important;
    color: #fff;
    border-color: #8b5a40;
    padding-left: 40px;
    padding-right: 40px;
  }
  .btn:hover {
    border-color: #3e281c;
  }
`

export default Slide
