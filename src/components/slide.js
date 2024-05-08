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
            src="../images/Susa-Loghman-Ahmadzadeh.jpg"
            className="d-block w-100"
            formats={["AUTO", "WEBP"]}
            alt="Susa (© Loghman Ahmadzadeh)"
          />
           <Carousel.Caption>
            <h3>Susa</h3>
            <span className="subTitle">
              © Loghman Ahmadzadeh
            </span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/Chogha-Mish-Loghman-Ahmadzadeh.jpg"
            className="d-block w-100"
            formats={["AUTO", "WEBP"]}
            alt="Chogha Mish (© Loghman Ahmadzadeh)"
          />
          <Carousel.Caption>
            <h3>Chogha Mish</h3>
            <span className="subTitle">
            © Loghman Ahmadzadeh
            </span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/Chogha-Zanbil-Loghman-Ahmadzadeh.jpg"
            className="d-block w-100"
            formats={["AUTO", "WEBP"]}
            alt="Chogha Zanbil (© Loghman Ahmadzadeh)"
          />
          <Carousel.Caption>
            <h3>Chogha Zanbil</h3>
            <span className="subTitle">
            © Loghman Ahmadzadeh
            </span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../images/Tall-e Ghazir-Mound-A-Loghman-Ahmadzadeh.jpg"
            className="d-block w-100"
            formats={["AUTO", "WEBP"]}
            alt="Tall-e Ghazir, Mound A (© Loghman Ahmadzadeh)"
          />
          <Carousel.Caption>
            <h3>Tall-e Ghazir, Mound A</h3>
            <span className="subTitle">
            © Loghman Ahmadzadeh
            </span>
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
