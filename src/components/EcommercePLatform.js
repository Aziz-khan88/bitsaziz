import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '@/styles/ecommerceplatform.module.css'
///images
import Shopify from '/public/ecommerce/shopify.svg'
import RightArrow from '/public/ecommerce/r-arrow.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react'
import { useEffect } from 'react'

const EcommercePLatform = () => {

    const [isSliderActive, setIsSliderActive] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1200) {
                setIsSliderActive(false);
            } else {
                setIsSliderActive(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // slider 
    var awardslogo = {
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,

    };


    return (
        <>
            <section className={styles.ecommerceSec}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h4 className='font20 text-white font-bold mb-0 text-white'>Top</h4>
                            <h2 className='font50 text-white font-bold mb-0'> Ecommerce Platforms!</h2>
                            <p className='font16 text-white mb-3'>Begin on a retail revolution with our diverse eCommerce development services.</p>


                            {isSliderActive ?
                                <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-4`}>
                                   
                                        <div className={`${styles.expendCard} ${styles.shopify}`}>
                                            <Image alt='BitsWits' src={Shopify} />
                                            <h4 className='text-white font18 font-semibold mt-2 mb-0'>Shopify</h4>
                                            <p className='text-white font12 mt-1'>Our team of app developers are expert in Shopify app development, website development, and storefronts customization making us the most valued mobile apps development company.</p>
                                            {/* <Link href="javascript:;" className='text-white font16 font-semibold'>
                                                Call Now
                                                <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                            </Link> */}
                                            <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                                <a href="tel:8335006007" className={styles.btn1}>
                                                    Call Now: +1 833 500 6007
                                                </a>
                                                <a href="javascript:$zopim.livechat.window.show();" className={styles.btn1}>
                                                    Start Live Chat
                                                </a>
                                            </div>
                                        </div>
                                        <div className={`${styles.expendCard} ${styles.magento}`}>
                                            <Image alt='BitsWits' src={Shopify} />
                                            <h4 className='text-white font18 font-semibold mt-2 mb-0'>Magento/2.0</h4>
                                            <p className='text-white font12 mt-1'>As a Magento e-commerce development agency, BitsWits have built and launched thousands of stores. Hire Magento mobile app developers today and turn your brand into a digital success story.</p>
                                            {/* <Link href="javascript:;" className='text-white font16 font-semibold'>
                                                Call Now
                                                <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                            </Link> */}
                                            <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                                <a href="tel:8335006007" className={styles.btn1}>
                                                    Call Now: +1 833 500 6007
                                                </a>
                                                <a href="javascript:$zopim.livechat.window.show();" className={styles.btn1}>
                                                    Start Live Chat
                                                </a>
                                            </div>
                                        </div>
                                        <div className={`${styles.expendCard} ${styles.WooCommerce}`}>
                                            <Image alt='BitsWits' src={Shopify} />
                                            <h4 className='text-white font18 font-semibold mt-2 mb-0'>WooCommerce</h4>
                                            <p className='text-white font12 mt-1'>Hire WooCommerce developers for ecommerce website development. Our expert team excels in WooCommerce plugin development, and creative custom. We offer our clients with flexible payment methods too.</p>
                                            {/* <Link href="javascript:;" className='text-white font16 font-semibold'>
                                                Call Now
                                                <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                            </Link> */}
                                            <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                                <a href="tel:8335006007" className={styles.btn1}>
                                                    Call Now: +1 833 500 6007
                                                </a>
                                                <a href="javascript:$zopim.livechat.window.show();" className={styles.btn1}>
                                                    Start Live Chat
                                                </a>
                                            </div>
                                        </div>
                                        <div className={`${styles.expendCard} ${styles.OpenCart}`}>
                                            <Image alt='BitsWits' src={Shopify} />
                                            <h4 className='text-white font18 font-semibold mt-2 mb-0'>OpenCart</h4>
                                            <p className='text-white font12 mt-1'>BitsWits, the best OpenCart development company, offers apps and website development, theme customization, and vQmod-based extensions. Hire our skilled OpenCart developers and boost your online sales.</p>
                                            {/* <Link href="javascript:;" className='text-white font16 font-semibold'>
                                                Call Now
                                                <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                            </Link> */}
                                            <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                                <a href="tel:8335006007" className={styles.btn1}>
                                                    Call Now: +1 833 500 6007
                                                </a>
                                                <a href="javascript:$zopim.livechat.window.show();" className={styles.btn1}>
                                                    Start Live Chat
                                                </a>
                                            </div>
                                        </div>
                                        <div className={`${styles.expendCard} ${styles.XCart}`}>
                                            <Image alt='BitsWits' src={Shopify} />
                                            <h4 className='text-white font18 font-semibold mt-2 mb-0'>XCart</h4>
                                            <p className='text-white font12 mt-1'>Experience excellence of X-Cart custom ecommerce development services with BitsWits. Get a fully customized user-friendly online shopping store with multiple payment gateways.</p>
                                            {/* <Link href="javascript:;" className='text-white font16 font-semibold'>
                                                Call Now
                                                <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                            </Link> */}
                                            <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                                <a href="tel:8335006007" className={styles.btn1}>
                                                    Call Now: +1 833 500 6007
                                                </a>
                                                <a href="javascript:$zopim.livechat.window.show();" className={styles.btn1}>
                                                    Start Live Chat
                                                </a>
                                            </div>
                                        </div>
                                        <div className={`${styles.expendCard} ${styles.BigCommerce}`}>
                                            <Image alt='BitsWits' src={Shopify} />
                                            <h4 className='text-white font18 font-semibold mt-2 mb-0'>BigCommerce</h4>
                                            <p className='text-white font12 mt-1'>Your search for a BigCommerce development company ends here. From web development to maintenance, our professional BigCommerce developers will transform your ecommerce store into a money-making empire.</p>
                                            {/* <Link href="javascript:;" className='text-white font16 font-semibold'>
                                                Call Now
                                                <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                            </Link> */}
                                            <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                                <a href="tel:8335006007" className={styles.btn1}>
                                                    Call Now: +1 833 500 6007
                                                </a>
                                                <a href="javascript:$zopim.livechat.window.show();" className={styles.btn1}>
                                                    Start Live Chat
                                                </a>
                                            </div>
                                        </div>
                                  
                                </Slider>
                                :
                                <div className={`d-flex ${styles.flexCard}`}>
                                    <div className={`${styles.expendCard} ${styles.shopify}`}>
                                        <Image alt='BitsWits' src={Shopify} />
                                        <h4 className='text-white font18 font-semibold mt-2 mb-0'>Shopify</h4>
                                        <p className='text-white font12 mt-1'>Our team of app developers are expert in Shopify app development, website development, and storefronts customization making us the most valued mobile apps development company.</p>
                                        {/* <Link href="javascript:;" className='text-white font16 font-semibold'>
                                            Call Now
                                            <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                        </Link> */}
                                        <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                            <a href="tel:8335006007" className={styles.btn1}>
                                                Call Now: +1 833 500 6007
                                            </a>
                                            <a href="javascript:$zopim.livechat.window.show();" className={styles.btn1}>
                                                Start Live Chat
                                            </a>
                                        </div>
                                    </div>
                                    <div className={`${styles.expendCard} ${styles.magento}`}>
                                        <Image alt='BitsWits' src={Shopify} />
                                        <h4 className='text-white font18 font-semibold mt-2 mb-0'>Magento/2.0</h4>
                                        <p className='text-white font12 mt-1'>As a Magento e-commerce development agency, BitsWits have built and launched thousands of stores. Hire Magento mobile app developers today and turn your brand into a digital success story.</p>
                                        {/* <Link href="javascript:;" className='text-white font16 font-semibold'>
                                            Call Now
                                            <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                        </Link> */}
                                        <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                            <a href="tel:8335006007" className={styles.btn1}>
                                                Call Now: +1 833 500 6007
                                            </a>
                                            <a href="javascript:$zopim.livechat.window.show();" className={styles.btn1}>
                                                Start Live Chat
                                            </a>
                                        </div>
                                    </div>
                                    <div className={`${styles.expendCard} ${styles.WooCommerce}`}>
                                        <Image alt='BitsWits' src={Shopify} />
                                        <h4 className='text-white font18 font-semibold mt-2 mb-0'>WooCommerce</h4>
                                        <p className='text-white font12 mt-1'>Hire WooCommerce developers for ecommerce website development. Our expert team excels in WooCommerce plugin development, and creative custom. We offer our clients with flexible payment methods too.</p>
                                        {/* <Link href="javascript:;" className='text-white font16 font-semibold'>
                                            Call Now
                                            <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                        </Link> */}
                                        <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                            <a href="tel:8335006007" className={styles.btn1}>
                                                Call Now: +1 833 500 6007
                                            </a>
                                            <a href="javascript:$zopim.livechat.window.show();" className={styles.btn1}>
                                                Start Live Chat
                                            </a>
                                        </div>
                                    </div>
                                    <div className={`${styles.expendCard} ${styles.OpenCart}`}>
                                        <Image alt='BitsWits' src={Shopify} />
                                        <h4 className='text-white font18 font-semibold mt-2 mb-0'>OpenCart</h4>
                                        <p className='text-white font12 mt-1'>BitsWits, the best OpenCart development company, offers apps and website development, theme customization, and vQmod-based extensions. Hire our skilled OpenCart developers and boost your online sales.</p>
                                        {/* <Link href="javascript:;" className='text-white font16 font-semibold'>
                                            Call Now
                                            <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                        </Link> */}
                                        <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                            <a href="tel:8335006007" className={styles.btn1}>
                                                Call Now: +1 833 500 6007
                                            </a>
                                            <a href="javascript:$zopim.livechat.window.show();" className={styles.btn1}>
                                                Start Live Chat
                                            </a>
                                        </div>
                                    </div>
                                    <div className={`${styles.expendCard} ${styles.XCart}`}>
                                        <Image alt='BitsWits' src={Shopify} />
                                        <h4 className='text-white font18 font-semibold mt-2 mb-0'>XCart</h4>
                                        <p className='text-white font12 mt-1'>Experience excellence of X-Cart custom ecommerce development services with BitsWits. Get a fully customized user-friendly online shopping store with multiple payment gateways.</p>
                                        {/* <Link href="javascript:;" className='text-white font16 font-semibold'>
                                            Call Now
                                            <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                        </Link> */}
                                        <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                            <a href="tel:8335006007" className={styles.btn1}>
                                                Call Now: +1 833 500 6007
                                            </a>
                                            <a href="javascript:$zopim.livechat.window.show();" className={styles.btn1}>
                                                Start Live Chat
                                            </a>
                                        </div>
                                    </div>
                                    <div className={`${styles.expendCard} ${styles.BigCommerce}`}>
                                        <Image alt='BitsWits' src={Shopify} />
                                        <h4 className='text-white font18 font-semibold mt-2 mb-0'>BigCommerce</h4>
                                        <p className='text-white font12 mt-1'>Your search for a BigCommerce development company ends here. From web development to maintenance, our professional BigCommerce developers will transform your ecommerce store into a money-making empire.</p>
                                        {/* <Link href="javascript:;" className='text-white font16 font-semibold'>
                                            Call Now
                                            <Image src={RightArrow} alt='right-arrow' className='ms-2' />
                                        </Link> */}
                                        <div className={`d-flex align-items-center pt-2 gap-2 ${styles.btns}`}>
                                            <a href="tel:8335006007" className={styles.btn1}>
                                                Call Now: +1 833 500 6007
                                            </a>
                                            <a href="javascript:$zopim.livechat.window.show();" className={styles.btn1}>
                                                Start Live Chat
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            }

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default EcommercePLatform