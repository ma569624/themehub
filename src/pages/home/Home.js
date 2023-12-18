import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

// import HeroSection from '../../component/herosection/HeroSection';
import LatestProducts from '../../component/Latestproductsection/LatestProducts';
import BenifitsSection from '../../component/Benifits/BenifitsSection';

const Home = () => {

  return (
    <>
      <Container fluid> 
        <Row>
          <Col lg='12' className='g-0'>
            <BenifitsSection />
            {/* <HeroSection /> */}
            <LatestProducts />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
