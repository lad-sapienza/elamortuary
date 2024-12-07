import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

const FooterSection = () => {
  return (
    <footer>
      <Container>
        <div className="d-md-flex flex-row align-items-center mb-3">
          <div className="p-3 text-center">
            <Link to="/">
            <StaticImage
              src="../images/elamortuary-logo.png"
              width={250}
              quality={80}
              formats={["AUTO", "WEBP"]}
              alt="ELAMortuary: Villages to Empire: 4,000 Years of Death and Society in Elam (4500-525 BCE)"
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
              of a {" "}
              <a
                href="https://cordis.europa.eu/project/id/892581"
                rel="noreferrer noopener"
                target="_blank"
              >
                Marie Skłodowska-Curie Individual Fellowship
              </a>{" "}
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
            

            <StaticImage
                src="../images/daal-orientale.png"
                width={150}
                quality={80}
                formats={["AUTO", "WEBP"]}
                alt="ELAMortuary: Villages to Empire: 4,000 Years of Death and Society in Elam (4500-525 BCE)"
                className="img-fluid m-2"
              />
            <StaticImage
                src="../images/horizon-2020.jpg"
                width={150}
                quality={80}
                formats={["AUTO", "WEBP"]}
                alt="ELAMortuary: Villages to Empire: 4,000 Years of Death and Society in Elam (4500-525 BCE)"
                className="img-fluid"
              />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default FooterSection
