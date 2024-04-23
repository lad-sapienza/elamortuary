import * as React from "react"
import { Link, withPrefix } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container } from "react-bootstrap"

const HeaderSection = ({ siteTitle }) => (
  <Header>
    <Container>
      <div className="d-sm-flex align-items-center text-center">
        <Link to={withPrefix("/")}>
          <StaticImage
            src="../images/scms-lad.png"
            width={150}
            quality={80}
            formats={["AUTO", "WEBP"]}
            alt={siteTitle}
            className="img-fluid"
          />
        </Link>
        <div className="text-start ms-3">
          <h1>ELAMortuary</h1>
          <p className="lead">
            Villages to Empire: 4,000 Years of Death and Society in Elam
            (4500-525 BCE)
          </p>
        </div>
      </div>
    </Container>
  </Header>
)

const Header = styled.header`
  background-color: #fe04fc;
  color: #ffffff;
  margin-bottom: 5rem;

  .gatsby-image-wrapper {
    background-color: #ffffff;
    img {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`

export default HeaderSection
