import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

const FooterSection = () => {
  return (
    <Footer>
      <Container>
        <div className="d-flex flex-row align-items-center mb-3">
          <div className="p-3">
            <Link to="/">
              <StaticImage
                src="../images/scms-lad.png"
                width={100}
                quality={80}
                formats={["AUTO", "WEBP"]}
                alt="LAD: Laboratorio di Archeologia Digitale alla Sapienza"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="p-3 border-start border-primary">
            <p className="p-s-3">
              The <strong>ELAMortuary</strong> database is the outcome of the
              project
              <em>
                Villages to Empire: 4,000 Years of Death and Society in Elam
                (4500-525 BCE)
              </em>
              carried out by the project researcher, Yasmina Wicks, in the frame
              of a
              <a
                href="https://marie-sklodowska-curie-actions.ec.europa.eu/actions/postdoctoral-fellowships"
                rel="noreferrer noopener"
                target="_blank"
              >
                Marie Skłodowska-Curie Individual Fellowship
              </a>
              hosted by{" "}
              <a
                href="https://www.unior.it"
                rel="noreferrer noopener"
                target="_blank"
              >
                Università di Napoli, “L’Orientale”
              </a>{" "}
              (2022-2024). <br />
              The project research and database were funded by the European
              Union’s Horizon 2020 research and innovation programme under the
              Marie Skłodowska-Curie grant agreement No. 892581 — ELAMortuary.
            </p>
          </div>
        </div>
      </Container>
    </Footer>
  )
}

//style
const Footer = styled.footer`
  background-color: #ececec;
  border-top: #000 solid 0.5rem;
  min-height: auto;
  margin-top: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export default FooterSection
