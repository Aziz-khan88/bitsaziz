import Image from 'next/image';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Slider from "react-slick";
import style from '@/styles/blockchain/Banner.module.css';
//
import logo1 from '@/public/blockchain/images/logo-1.png';
import logo2 from '@/public/blockchain/images/logo-2.png';
import logo3 from '@/public/blockchain/images/logo-3.png';
import logo4 from '@/public/blockchain/images/logo-4.png';
import logo5 from '@/public/blockchain/images/logo-5.png';
import logo6 from '@/public/blockchain/images/logo-6.png';


function LogoSlide() {

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <Slider {...settings} className={`${style.partnerLogos} partnerLogos ForSeoLogo`}>
                                <div>
                                    <Image quality={75} src={logo1} width="127" alt="trustPilot" height="auto" className='mx-auto' />
                                </div>
                                <div>
                                    <Image quality={75} src={logo2} alt="amazon" width="127" height="auto" className='mx-auto' />
                                </div>
                                <div>
                                    <Image quality={75} src={logo3} alt="googleCloud" width="127" height="auto" className='mx-auto' />
                                </div>
                                <div>
                                    <Image quality={75} src={logo4} alt="microSoft" width="127" height="auto" className='mx-auto' />
                                </div>
                                <div>
                                    <Image quality={75} src={logo5} alt="googlePartner" width="127" height="auto" className='mx-auto' />
                                </div>
                                <div>
                                    <Image quality={75} src={logo6} alt="fb" width="127" height="auto" className='mx-auto' />
                                </div>

                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default LogoSlide;