import React from 'react'
import { Row, Col, Container, Card, Stack } from 'react-bootstrap'
import imgsrc from './img/image04-thumbnail.webp'
import { IoShareSocialSharp } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";


// https://codepen.io/frankenstein88-the-looper/pen/PoaggWq

const Layout = () => {
  return (
    <>

      <div className="product-card">
        <div className="card  z-depth-4">
          <div className="card-image">
            <a className="btn-floating">
              5 €
            </a>
            <img src={imgsrc} className="product-img" />
            <span className="card-title">
              <span>Macaron</span>
            </span>
          </div>
          <ul className="card-action-buttons">
            <li>
              <a className="btn-floating waves-effect waves-light white">
                <IoShareSocialSharp />
              </a>
            </li>
            <li>
              <a className="btn-floating waves-effect waves-light red accent-2">
                <IoMdHeartEmpty />
              </a>
            </li>
            <li>
              <a id="buy" className="btn-floating waves-effect waves-light blue">
                <FaCartPlus />
              </a>
            </li>
          </ul>
          <div className="card-content">
            <div className="row">
              <div className="col s12">
                <p>
                  <strong>Description:</strong> <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ornare auctor metus vel mollis.
                </p>
              </div>
            </div>
            <div className="row">
              <div style={{ width: "95%", margin: "auto" }}>
                <div className="chip">Dessert</div>
                <div className="chip">French</div>
                <div className="chip">Sweet</div>
                <div className="chip">Chocolate</div>
                <div className="chip">
                  <a href="#">More...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

const Home = () => {

  return (
    <>
      <Container>
        <Row>
          <Col lg='4'>
            <Layout />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
