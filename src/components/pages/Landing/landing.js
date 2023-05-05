import Header from "components/common/header/header"
import Footer from "components/common/footer/footer"
import {MDBIcon} from "mdb-react-ui-kit";
import { Carousel } from "react-bootstrap";
import './landing.css'

function Landing() {
  return (
    <>
      <Header />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1648737966769-98fa88fe66bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <div className="row d-flex justify-content-around">
          <div className="col-md-12 text-center team">
            <h2 className="section-title">THE TEAM</h2>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://avatars.githubusercontent.com/u/73010408?v=4"
                className="team-img"
                alt="pic"
              />
              <h3>ATURIHEIHI BLENDON</h3>
              <div className="team-info">
                <p>Full stack Developer</p>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                voluptatem optio iste saepe cum fuga? Adipisci ratione dolor
                esse reiciendis ducimus aspernatur assumenda perspiciatis
                repellat nulla? Enim minus animi molestias?
              </p>

              <ul className="team-icon">
                <li>
                  <a href="mailto:2020blendon@gmail.com" className="google">
                    <MDBIcon fab icon="google" />
                  </a>
                </li>

                <li>
                  <a href="#" className="whatsapp">
                    <MDBIcon fab icon="whatsapp" />
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/blendon-aturiheihi-1784ba211/" className="linkedin">
                    <MDBIcon fab icon="linkedin-in" />
                  </a>
                </li>

                <li>
                  <a href="https://github.com/AturiheihiBlendon?tab=repositories" className="github">
                    <MDBIcon fab icon="github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Micheal's information */}

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://avatars.githubusercontent.com/u/82696549?s=400&u=c50dc2cc69358efa330fb8f18194ca6f5f258aa1&v=4"
                className="team-img"
                alt="pic"
              />
              <h3>MICHAEL N MWANZA</h3>
              <div className="team-info">
                <p>Full stack Developer</p>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                voluptatem optio iste saepe cum fuga? Adipisci ratione dolor
                esse reiciendis ducimus aspernatur assumenda perspiciatis
                repellat nulla? Enim minus animi molestias?
              </p>

              <ul className="team-icon">
                <li>
                  <a href= "mailto:mwanza.n.m@gmail.com" className="google">
                    <MDBIcon fab icon="google" />
                  </a>
                </li>

                <li>
                  <a href="wa.link/cfgczr" className="whatsapp">
                    <MDBIcon fab icon="whatsapp" />
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/michael-mwanza-15630635/" className="linkedin">
                    <MDBIcon fab icon="linkedin-in" />
                  </a>
                </li>

                <li>
                  <a href="https://github.com/Mikelesnr?tab=repositories" className="github">
                    <MDBIcon fab icon="github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );


}

export default Landing