import React, { useMemo, useState } from 'react';
import { usePathname } from "next/navigation"
import Link from "next/link";
import {
  Nav,
  Navbar,
  Container,
  Image,
  Dropdown,
  NavDropdown,
  Col,
  Row,
} from "react-bootstrap";
//
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//
import Banners from '@/components/Banners';


function Header() {

  const router = usePathname();
  const onHomepage = useMemo(() => router === "/", [router]);

  return (
    <>
      <div className='HomeBanner'>
        <div className='homeVideo'>
          <video className='' autoPlay muted loop src="/images/homeback.mp4" type="video/mp4"></video>
        </div>
        <header>
          <Container className={`Homeheader ${!onHomepage ? "mb-4" : ""}`}>
            <Navbar className="navbar-dark" collapseOnSelect expand="lg">
              <Navbar.Brand className="">
                <Link href="/" >
                  <Image quality={75} src="../images/logo.svg" alt='logo' width={70} />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Offcanvas id="basic-navbar-nav navbar-collapse" aria-labelledby={`offcanvasNavbarLabel-expand`}
                placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                    <Link href="/home/" >
                      <Image quality={75} src="../images/logo.svg" alt='logo' width={70} />
                    </Link>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="ms-auto">
                    <NavDropdown
                      className="align-text-top"
                      title="Web 3.0"
                      id="basic-nav-dropdown"
                    >
                      <Row>
                        <Col xs="12" md="4" className="text-start">
                          <Dropdown.Header>
                            Web 3.0
                          </Dropdown.Header>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Web 3.0 Development Company
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Blockchain Development Company
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Wallet
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Divider className="d-lg-none" />
                        </Col>
                        <Col xs="12" md="4" className="text-start">
                          <Dropdown.Header>
                            NFT
                          </Dropdown.Header>
                          <Dropdown.Item>
                            <Link href="/home/">
                              NFT Marketplace Development
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              White-label NFT Marketplace
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              NFT Wallet Development
                            </Link>
                          </Dropdown.Item>
                        </Col>
                        <Col xs="12" md="4" className="text-start">
                          <Dropdown.Header>
                            DeFi
                          </Dropdown.Header>
                          <Dropdown.Item>
                            <Link href="/home/">
                              DeFi Development
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              DeFi Lending Borrowing Development
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              dApp Development Services
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              DeFi Lottery Platform Development
                            </Link>
                          </Dropdown.Item>
                        </Col>
                      </Row>
                    </NavDropdown>
                    <NavDropdown
                      className="align-text-top"
                      title="Metaverse"
                      id="basic-nav-dropdown"
                    >
                      <Row>
                        <Col xs="12" md="4" className="text-start">
                          <Dropdown.Header>
                            Metaverse
                          </Dropdown.Header>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Metaverse Development Company
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Metaverse Decentralized Platform Services
                            </Link>
                          </Dropdown.Item>
                        </Col>
                        <Col xs="12" md="4" className="text-start">
                          <Dropdown.Header>
                            Metaverse NFT
                          </Dropdown.Header>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Metaverse NFT Development
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Unreal Engine Metaverse Development
                            </Link>
                          </Dropdown.Item>
                        </Col>
                        <Col xs="12" md="4" className="text-start">
                          <Dropdown.Header>
                            Metaverse Game
                          </Dropdown.Header>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Metaverse Game Development
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              AR & VR Game Development Company
                            </Link>
                          </Dropdown.Item>
                        </Col>
                      </Row>
                    </NavDropdown>
                    <NavDropdown
                      className=" align-text-top"
                      title="Gaming"
                      id="basic-nav-dropdown"
                    >
                      <Row>
                        <Col xs="12" md="4" className="text-start">
                          <Dropdown.Header>
                            Gaming
                          </Dropdown.Header>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Game Development Company
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              NFT Gaming Development Company
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Blockchain Game Development
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              HTML5 Game Development Company
                            </Link>
                          </Dropdown.Item>
                        </Col>
                        <Col xs="12" md="4" className="text-start">
                          <Dropdown.Header>
                            <span className="mb-3"></span>
                          </Dropdown.Header>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Play-to-Earn Game Development
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Web3 Game Development
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Unity Game Development
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              3D Game Development Company
                            </Link>
                          </Dropdown.Item>
                        </Col>
                        <Col xs="12" md="4" className="text-start">
                          <Dropdown.Header>
                            <span className="mb-3"></span>
                          </Dropdown.Header>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Video Game Development
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Board Game Development
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Unreal Game Development
                            </Link>
                          </Dropdown.Item>
                        </Col>
                      </Row>
                    </NavDropdown>
                    <NavDropdown
                      className=" align-text-top"
                      title="Coin Development"
                      id="basic-nav-dropdown"
                    >
                      <Row>
                        <Col xs="12" md="4" className="text-start">
                          <Dropdown.Header>
                            Coin Development
                          </Dropdown.Header>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Coin Development Company
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Token Development Company
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Whitepaper Creation
                            </Link>
                          </Dropdown.Item>
                        </Col>
                        <Col xs="12" md="4" className="text-start">
                          <Dropdown.Header>
                            Coin Development
                          </Dropdown.Header>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              ICO Development
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              IDO Development
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Smart Contracts
                            </Link>
                          </Dropdown.Item>
                        </Col>
                        <Col xs="12" md="4" className="text-start">
                          <Dropdown.Header>
                            Coin Development
                          </Dropdown.Header>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              IEO Development
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              STO Development
                            </Link>
                          </Dropdown.Item>
                        </Col>
                      </Row>
                    </NavDropdown>
                    <NavDropdown
                      className=" align-text-top"
                      title="Artificial Intelligence"
                      id="basic-nav-dropdown"
                    >
                      <Row>
                        <Col xs="12" md="4" className="text-start">
                          <Dropdown.Header>
                            Artificial Intelligence
                          </Dropdown.Header>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Artificial Intelligence Development Company
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Artificial Intelligence Consulting Company
                            </Link>
                          </Dropdown.Item>
                        </Col>
                        <Col xs="12" md="4" className="text-start">
                          <Dropdown.Header>
                            Artificial Intelligence
                          </Dropdown.Header>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Generative AI Development Company
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Hire Prompt Engineers
                            </Link>
                          </Dropdown.Item>
                        </Col>
                        <Col xs="12" md="4" className="text-start">
                          <Dropdown.Header>
                            Artificial Intelligence
                          </Dropdown.Header>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Hire ChatGPT Developers
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/home/" >
                              Adaptive AI Development Company
                            </Link>
                          </Dropdown.Item>
                        </Col>
                      </Row>
                    </NavDropdown>
                  </Nav>
                  <Nav className="">
                    <Link href="/contact/" className="btn btn-primary me-3">Hire Blockchain Developer </Link>
                    <span className="line"></span>
                    <a href="tel:1-844-400-0025" className="ms-3"> <span>
                      <Image quality={75} src="../images/phone.svg" alt='logo' width={20} /></span><span className="text-white"> 1-844-400-0025</span>
                    </a>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Navbar>
          </Container>
          <Banners />
        </header>
        <div className='mixColor'></div>
      </div>
    </>
  );
}
export default Header;