import * as React from "react"
import { Link, withPrefix } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"

const HeaderSection = ({ siteTitle }) => (
  <header>
    <Container>
      <div className="d-sm-flex align-items-center text-center">
        <Link to={withPrefix("/")}>
          <StaticImage
            src="../images/elamortuary-logo.png"
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
  </header>
)

export default HeaderSection
