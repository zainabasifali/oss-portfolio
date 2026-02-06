import Container from 'react-bootstrap/Container';
import NavBar from '../components/Navbar';
import './home.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import client5 from '../assets/client5.png';
import client6 from '../assets/client6.png';
import contact from '../assets/contact.jpg';
import linkedin from '../assets/linkedin.png';
import email from '../assets/mail.png';
import upwork from '../assets/upwork.png';
import whatsappp from '../assets/whatsapp.png';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'

const Home = () => {
  return (
    <Container fluid className='p-0 m-0 bg-gray parent-container'>
      <NavBar />
      <p className='text-center fs-3 text-weight sub-head'>My name is Ali Raza & I am a freelance</p>

      {/* header section */}
      <Container className='header-bg'>
      </Container>

      {/* Project section */}
      <Container className='mt-2'>
        <p className='text-center text-color head-tags'>
          SHOPIFY, WORDPRESS, CUSTOM PROJECTS
        </p>

        <h2 className='text-center heads'>My Latest Projects</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="mt-5"
        >
          <SwiperSlide>
            <div className="project-box">
              <img src={project1} alt="Project 1" className="w-100 rounded mb-2" />
              <p className='text-color project-box-tag'>Shopify</p>
              <h4 className='project-box-text'>
                Cleaner eCommerce Shopify Website
              </h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-box">
              <img src={project2} alt="Project 2" className="w-100 rounded mb-2" />
              <p className='text-color project-box-tag'>Shopify</p>
              <h4 className='project-box-text'>
                Beauty & Cosmetics eCommerce Shopify Website
              </h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-box">
              <img src={project3} alt="Project 3" className="w-100 rounded mb-2" />
              <p className='text-color project-box-tag'>Shopify</p>
              <h4 className='project-box-text'>
                Responsive Kids Furniture eCommerce Shopify Store
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-box">
              <img src={project3} alt="Project 3" className="w-100 rounded mb-2" />
              <p className='text-color project-box-tag'>Shopify</p>
              <h4 className='project-box-text'>
                Responsive Kids Furniture eCommerce Shopify Store
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-box">
              <img src={project3} alt="Project 3" className="w-100 rounded mb-2" />
              <p className='text-color project-box-tag'>Shopify</p>
              <h4 className='project-box-text'>
                Responsive Kids Furniture eCommerce Shopify Store
              </h4>
            </div>
          </SwiperSlide>

        </Swiper>
      </Container>

      {/* Pricing section */}
      <Container className='mt-5'>
        <div className='text-center'>
          <Button className='text-color rounded-pill button-pricing p-3'>
            Lets start a project together
          </Button>
        </div>
        <Row className='mt-5 d-flex justify-content-around'>
          <Col lg={3} md={5} sm={12}>
            <p className='text-color fw-bold'>PRICING</p>
            <h2>Pricing 🚀</h2>
            <p className='pricing-box-text'>
              Our Shopify development pricing is designed to be transparent, flexible, and tailored to your business needs. Whether you’re launching a new store or upgrading an existing one, we offer scalable solutions that deliver high performance, modern design, and seamless functionality. No hidden costs just reliable Shopify development focused on growth, user experience, and conversions.
            </p>
          </Col>
          <Col className='pricing-box p-4' lg={3} md={5} sm={12}>
            <p className='fw-bold'>STARTER</p>
            <p className='text-secondary'>TRY AND DECIDE</p>
            <h2 className='text-color fw-bold'>$150</h2>
            <ul className='list-unstyled'>
              <li>Basic Shopify Store</li>
              <li>Design Customization</li>
              <li>Basic Banner Design</li>
              <li>Responsive Design</li>
              <li>Content Upload</li>
            </ul>
            <Button className='text-color rounded button-white w-100'>
              Buy Now
            </Button>
          </Col>
          <Col className='pricing-box p-4' lg={3} md={5} sm={12}>
            <p className='fw-bold'>STARTER</p>
            <p className='text-secondary'>TRY AND DECIDE</p>
            <h2 className='text-color fw-bold'>$600</h2>
            <ul className='list-unstyled'>
              <li>Advanced Shopify Store</li>
              <li>Design Customization</li>
              <li>Responsive Design</li>
              <li>Content Upload</li>
              <li>Design Customization</li>
            </ul>
            <Button className='text-color rounded button-white w-100'>
              Buy Now
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Clients section */}
      <Container className='mt-5'>
        <p className='text-center text-color head-tags fw-bold'>VISIT MY CLIENTS</p>
        <hr />
        <h2 className='text-center heads'>My Trusted Client</h2>
        <Row className='mt-5 d-flex  gap-5 justify-content-center'>
          <Col className='project-box' lg={2} md={5} sm={12}>
            <img src={client1} alt="Client 1" className="client-img w-100" />
            <hr />
            <h6 className='text-center'>Destalayr</h6>
          </Col>
          <Col className='project-box p-4' lg={2} md={5} sm={12}>
            <img src={client2} alt="Client 2" className="client-img w-100" />
            <hr />
            <h6 className='text-center'>Avon Vacuums</h6>
          </Col>
          <Col className='project-box p-4' lg={2} md={5} sm={12}>
            <img src={client3} alt="Client 3" className="client-img w-100" />
            <hr />
            <h6 className='text-center'>Fudgee kids</h6>
          </Col>
          <Col className='project-box p-4' lg={2} md={5} sm={12}>
            <img src={client4} alt="Client 4" className="client-img w-100" />
            <hr />
            <h6 className='text-center'>Divine Designs</h6>
          </Col>
        </Row>

        <Row className='mt-5 d-flex  gap-5 justify-content-center'>
          <Col className='project-box' lg={2} md={5} sm={12}>
            <img src={client5} alt="Client 5" className="client-img w-100" />
            <hr />
            <h6 className='text-center'>Liberty Paw</h6>
          </Col>
          <Col className='project-box p-4' lg={2} md={5} sm={12}>
            <img src={client6} alt="Client 6" className="client-img w-100" />
            <hr />
            <h6 className='text-center'>Robin clip store</h6>
          </Col>
        </Row>
      </Container>

      {/* Contact section */}
      <Container className='mt-5'>
        <p className='text-center text-color head-tags fw-bold'>LETS MEET</p>
        <h2 className='text-center heads'>Hire me</h2>
        <Row className='mt-5 d-flex  gap-5 justify-content-center'>
          <Col lg={4} md={6} sm={12} className='project-box'>
            <img src={contact} alt="Project 1" className="w-100 rounded mb-3" />
            <h4 className='text-color fw-bold'>Ali Raza Patel</h4>
            <p className='text-secondary'>Full Stack Developer</p>
            <p>
              I am available for freelance work. Connect with me via message into my account.
            </p>
            <p>
              Phone: +01234567890 <br />
              Email: aadmin@example.com
            </p>
            <p>Find with me</p>
            <div className='d-flex gap-3 mt-3 mb-3'>
              <div className='rounded social-icons'><img src={linkedin} alt="linkedin" className="w-75 mt-1 ms-1" /></div>
              <div className='rounded social-icons'><img src={upwork} alt="upwork" className="w-75 mt-1 ms-1" /></div>
            </div>
          </Col>
          <Col lg={7} md={6} sm={12} className='project-box'>
            <Form className='p-4'>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                  />
                </Form.Group>
              </Row>

              <Button className='text-black rounded button-white w-100'>
                SEND MESSAGE
              </Button>
            </Form>
          </Col>

        </Row>
      </Container>

      {/* footer section */}
      <footer className='text-center mt-5'>
        <hr />
        <h4 className='text-color footer-text'>Lets start project together</h4>
        <div className='d-flex justify-content-center gap-3 mt-3 mb-5'>
          <div className='rounded-pill social-icons'><img src={email} alt="email" className="mt-2" /></div>
          <div className='rounded-pill social-icons'><img src={whatsappp} alt="whatsapp" className="mt-2 ms-1" /></div>
        </div>
        <p className='text-decoration-underline text-color footer-sub-text'>© 2025. All rights reserved by Orientsoft Solutions</p>
      </footer>
    </Container>
  )
}
export default Home;