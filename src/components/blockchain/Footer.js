import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import style from '../styles/Footer.module.css';
//
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaBehance, FaDribbble, FaPinterestP, FaWhatsapp } from "react-icons/fa6";
//
import FooterLogo from "/public/images/logo.svg";
import email from "/public/images/email.png";
import usa from "/public/images/usa.png";
import uae from "/public/images/uae.png";
import pakistan from "/public/images/pakistan.png";
import whatsapp from "/public/images/whatsapp.png";


const Footer = () => {
    return (
        <footer className={style.footer}>
            <Container className="pt-5 pb-5">
                <Row>
                    <Col lg={2}>
                        <div className={style.widgets}>
                            <Image quality={75} src={FooterLogo} alt="Blockchain" className="img-fluid mb-5" />
                            <ul>
                                <li className={style.IconText}>
                                    <Image quality={75} src={email} alt="Blockchain" className="img-fluid" />
                                    <span><a className="d-block mb-1" href="mailto:info@BitsWits.co"> CONTACT EMAIL</a> </span>
                                </li>
                                <li className={style.IconText}>
                                    <Image quality={75} src={usa} alt="Blockchain" className="img-fluid" />
                                    <p><a className="d-block mb-1" href="tel:3123795987"> +1 833 500 6007</a>
                                        <a className="d-block" href="tel:3123795987">+1 312 379 5987</a>
                                    </p>
                                </li>
                                <li className={style.IconText}>
                                    <Image quality={75} src={uae} alt="Blockchain" className="img-fluid" />
                                    <p><a href="tel:3123795987"> +97 155 503 1266</a></p>
                                </li>
                                <li className={style.IconText}>
                                    <Image quality={75} src={pakistan} alt="Blockchain" className="img-fluid" />
                                    <p><a href="tel:923468280101"> +92 346 828 0101</a></p>
                                </li>
                            </ul>

                        </div>
                    </Col>
                    <Col lg={7}>
                        <Row>
                            <Col lg={4}>
                                <div className={style.widgets}>
                                    <ul>
                                        <h4>Web 3</h4>
                                        <li>
                                            <Link href="#">Web3 Development</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <h4>DeFi</h4>
                                        <li>
                                            <Link href="#">Web3 Development</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Lending Borrowing</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Dapp Development</Link>
                                        </li>
                                        <li>
                                            <Link href="#">DeFi Lottery</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <h4>Metaverse</h4>
                                        <li>
                                            <Link href="#">Metaverse Development</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Metaverse Decentralized</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Metaverse NFT</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <h4>Artificial Intelligence</h4>
                                        <li>
                                            <Link href="#">AI Development Company</Link>
                                        </li>
                                        <li>
                                            <Link href="#">AI Consulting Company</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Generative AI Development Comapny</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={style.widgets}>
                                    <ul>
                                        <h4>NFT</h4>
                                        <li>
                                            <Link href="#">NFT Marketplace</Link>
                                        </li>
                                        <li>
                                            <Link href="#">NFT Marketplace Solutions</Link>
                                        </li>
                                        <li>
                                            <Link href="#">NFT Wallet Developmen</Link>
                                        </li>

                                    </ul>
                                    <ul>
                                        <h4>Crypto Coin Development</h4>
                                        <li>
                                            <Link href="#">Crypto Coin Development</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Token Development</Link>
                                        </li>
                                        <li>
                                            <Link href="#">ICO Development</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Security Token</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <h4>Resources</h4>
                                        <li>
                                            <Link href="#">Blog</Link>
                                        </li>
                                        <li>
                                            <Link href="#">YouTube</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Hire Developer</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <h4>Wallet</h4>
                                        <li>
                                            <Link href="#">Crypto Wallet Development</Link>
                                        </li>

                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={style.widgets}>
                                    <ul>
                                        <h4>Gaming</h4>
                                        <li>
                                            <Link href="#">Blockchain Game</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Play To Earn Game</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Web3 Game</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Metaverse Game</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Mobile Game</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Video Game </Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <h4>Industries</h4>
                                        <li>
                                            <Link href="#">Supply Chain</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Ecommerce Block Brew</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Healthcare Usecase</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Real Estate</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Real Estate Tokenisation</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <h4>Contact Us</h4>
                                        <li>
                                            <Link href="#">Contact</Link>
                                        </li>

                                    </ul>

                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3}>
                        <ul>
                            <Link href="#">
                                <li className={style.IconText}>
                                    <Image quality={75} src={whatsapp} alt="Blockchain" className="img-fluid" />
                                    <h4 className="fw700 f20 text-white"> WhatsApp Updates </h4>
                                </li>
                            </Link>
                        </ul>
                        <form className='d-flex justify-content-center align-items-center'>
                            <PhoneInput country='us' regions={['america', 'carribean']} />
                            <button className='btn btn-primary d-inline formBtn bitsForm'>Submit</button>
                        </form>

                        <div className={style.social}>
                            <h4 className="f700 f20 text-white mb-3 mt-5">Our Social Presence</h4>
                            <ul>
                                <li>
                                    <Link href="#">
                                        <FaFacebookF />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <FaInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <FaTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <FaLinkedinIn />
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link href="#">
                                        <FaBehance />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <FaDribbble />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <FaPinterestP />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <FaWhatsapp />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>

            </Container>
            <Container fluid className={`${style.copyright} pt-2 pb-2 text-white f12 fw400 text-center`}>
                <Row>
                    <Col lg={12}>
                        <div>
                            <p>© Copyright 2023 Blockchain | All Rights Reserved Privacy Polic</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;