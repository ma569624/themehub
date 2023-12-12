import React from 'react'
import { Row, Col, Container, Card, Stack } from 'react-bootstrap'
import imgsrc from './img/image04-thumbnail.webp'


const Layout = () => {
  return (
    <>

      <Col xs='4' lg='4' sm='12' md='6'>
        <Card>
          <img src={imgsrc} alt="" />

          <Stack direction='horizontal' className='justify-content-between'>
            <div className='bg-primary rounded'>icon</div>
            <div>
              <h4 className='m-0'>reactify style engine</h4>
              <span>meta inscription</span>
            </div>
            <div>
              <span>$ 2</span>
              <span>$ 8</span>
            </div>
          </Stack>
        </Card>
      </Col>

    </>
  )
}

const Home = () => {

  return (
    <section>
      <Container fluid>
        <Row className='g-4'>
          <Layout />
          <Layout />
          <Layout />
          <Layout />
          <Layout />
          <Layout />
          <Layout />
          <Layout />
        </Row>

      </Container>
    </section>
  )
}

export default Home
