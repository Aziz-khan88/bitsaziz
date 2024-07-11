import React, { useState } from 'react'
import { usePathname } from "next/navigation"
import Link from 'next/link'
import Image from 'next/image'
import { Row, Col } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import styles from '@/styles/Headerlp.module.css'
//
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
// images
import logo from '/public/images/icons/footerlogo.png'
import mbllogo from '/public/images/icons/footerlogo.png'
import apps from '/public/images/icons/apps.png'
import games from '/public/images/icons/games.png'
import company from '/public/images/icons/company.png'
import about from '/public/images/icons/about.png'
import ourbg from '/public/images/icons/ourbg.png'
import web from '/public/images/icons/web.png'
import hosting from '/public/images/icons/hosting.png'
import estate from '/public/images/icons/estate.png'
import travel from '/public/images/icons/travel.png'
import health from '/public/images/icons/health.png'
import foods from '/public/images/icons/foods.png'
import backarrow from '/public/images/icons/back-arrow.webp'
import music from '/public/images/icons/music.png'
import ride from '/public/images/icons/ride.png'
import wisu from '/public/images/icons/wisu.png'
import fit from '/public/images/icons/fit.png'
import grease from '/public/images/icons/grease.png'
import homeconnect from '/public/images/icons/homeconnect.png'
import ready from '/public/images/icons/ready.png'
import scribe from '/public/images/icons/scribe.png'
import sponsord from '/public/images/icons/sponsord.png'
import newImg from '/public/images/1.jpg'
import call from '/public/images/icons/phone-icon.webp'
//
import Bitswitspopup from '../components/Bitswitspopup'


const Header = () => {


    const [show, setShow] = useState(false);

    function modal(e) { e.preventDefault(); setShow(true); }
    function closemodal() { setShow(false); }

    const opnen = () => {
        window.open('../companyprofile.pdf', '_blank');
    }

    const [isActive, setIsActive] = useState(false);
    const [megamenu1, setMegaMenu1] = useState(false);
    const [megamenu2, setMegaMenu2] = useState(false);
    const [megamenu3, setMegaMenu3] = useState(false);
    const [megamenu4, setMegaMenu4] = useState(false);

    const handleMenu = () => {
        setIsActive((prev) => !prev);
    }

    const handleMegaMenu1 = () => {
        setMegaMenu1((prev) => !prev);
    }

    const handleMegaMenu2 = () => {
        setMegaMenu2((prev) => !prev);
    }

    const handleMegaMenu3 = () => {
        setMegaMenu3((prev) => !prev);
    }

    const handleMegaMenu4 = () => {
        setMegaMenu4((prev) => !prev);
    }

   const router = usePathname();
    const currentRoute = router;
    const path = currentRoute


    return (
        <>
            <header className={path ? `${styles.header}` : `${styles.header} header`}>
                <div className={styles.navLogo}>
                    <Link href="/">
                        <Image alt="bitswits" className='img-fluid'
                            src={logo}
                        />
                    </Link>
                </div>
                <nav className={styles.navBar}>
                    <ul className={isActive ? `${styles.menu} ${styles.active}` : `${styles.menu}`}>
                        <div className={`${styles.navLogo} ${styles.mblLogo}`}>
                            <Link href="/">
                                <Image alt="bitswits" className='img-fluid'
                                    src={mbllogo}
                                />
                            </Link>
                        </div>
                        <li className={`${styles.megaList3} ${styles.navList}`} onClick={handleMegaMenu3}>
                            <Link href='#' className={`${styles.megaLink} ${styles.befLink}`}>
                            Technologies
                                <FaAngleDown />
                            </Link>

                        </li>
                        <li className={`${styles.megaList3} ${styles.navList}`} onClick={handleMegaMenu3}>
                            <Link href='#' className={`${styles.megaLink} ${styles.befLink}`}>
                                Services
                                <FaAngleDown />
                            </Link>
                            <div className={megamenu3 ? `${styles.megaMenu3} ${styles.opnMenu3}` : `${styles.megaMenu3}`}>
                                <div className={styles.backArrow}>
                                    <Image alt="bitswits"
                                        src={backarrow}
                                    />
                                </div>
                                <Row className='mt-4 mt-lg-0'>
                                    <Col md={12}>
                                        <Row className={styles.megaRow}>
                                            <Col lg={3}>
                                                <div className={styles.listMain}>

                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <ul className='mb-0 mt-0'>

                                                                    <div className={styles.listHeading}>
                                                                        <div className={styles.megaIcon}>
                                                                            <Image alt="bitswits" className='img-fluid'
                                                                                src={apps} />
                                                                        </div>
                                                                        <h5 className='font14 fontf font-semibold mb-0'>APP</h5>
                                                                    </div>

                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/ios-app-development'>
                                                                            <FaAngleRight />
                                                                            <span>iOS App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/mobile-application'>
                                                                            <FaAngleRight />
                                                                            <span>Mobile App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/android-application-development'>
                                                                            <FaAngleRight />
                                                                            <span>Android App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/flutter-mobile-development'>
                                                                            <FaAngleRight />
                                                                            <span>Flutter App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/react-native-mobile-development'>
                                                                            <FaAngleRight />
                                                                            <span>React Native App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='hybrid-mobile-apps-development'>
                                                                            <FaAngleRight />
                                                                            <span>Hybird Mobile App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/cross-platform-app-development'>
                                                                            <FaAngleRight />
                                                                            <span>Cross Platform App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    {/* <li>
                                                                        <Link onClick={handleMenu} href='/web-app-development'>
                                                                            <FaAngleRight />
                                                                            <span>Web App Development</span>
                                                                        </Link>
                                                                    </li> */}
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={3}>
                                                <div className={styles.listMain}>

                                                    <div className={styles.listBody}>
                                                        <Row className={styles.network}>
                                                            <Col md={12}>
                                                                <ul className={` ${styles.megpost} mb-0 mt-0 `}>

                                                                    <div className={styles.listHeading}>
                                                                        <div className={styles.megaIcon}>
                                                                            <Image alt="bitswits" className='img-fluid'
                                                                                src={web}
                                                                            />
                                                                        </div>
                                                                        <h5 className='font14 fontf font-semibold mb-0'>APP</h5>
                                                                    </div>

                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/augmented-reality-apps-development-company'>
                                                                            <FaAngleRight />
                                                                            <span>Augmented Reality App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/custom-mobile-development'>
                                                                            <FaAngleRight />
                                                                            <span>Custom Mobile Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/artificial-intelligence-development-company'>
                                                                            <FaAngleRight />
                                                                            <span>Artificial Intelligence</span>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/web-app-development'>
                                                                            <FaAngleRight />
                                                                            <span>Web App Development</span>
                                                                        </Link>
                                                                    </li>



                                                                    <div className={`${styles.listHeading} ${styles.neuport}`}>
                                                                        <div className={styles.megaIcon}>
                                                                            <Image alt="bitswits" className='img-fluid'
                                                                                src={hosting}
                                                                            />
                                                                        </div>
                                                                        <h5 className='font14 fontf font-semibold mb-0'>BLOCKCHAIN</h5>
                                                                    </div>

                                                                    <li>
                                                                        <Link onClick={handleMenu} href="/blockchain-development-lp">
                                                                            <FaAngleRight />
                                                                            <span>Blockchain Development</span>
                                                                        </Link>
                                                                    </li>



                                                                </ul>

                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={3}>
                                                <div className={`${styles.listMain} mt-0`}>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <div className={`${styles.listMain} ${styles.resList} mt-0`}>
                                                                    <div className={styles.listBody}>
                                                                        <Row>
                                                                            <Col md={12}>

                                                                                <ul className={` ${styles.megpost} mb-0 mt-0 `}>

                                                                                    <div className={styles.listHeading}>
                                                                                        <div className={styles.megaIcon}>
                                                                                            <Image alt="bitswits" className='img-fluid'
                                                                                                src={games}
                                                                                            />
                                                                                        </div>
                                                                                        <h5 className='font14 fontf font-semibold mb-0'>GAME</h5>
                                                                                    </div>



                                                                                    <li>
                                                                                        <Link onClick={handleMenu} href='/game-application-development'>
                                                                                            <FaAngleRight />
                                                                                            <span>Game App Development</span>
                                                                                        </Link>
                                                                                    </li>

                                                                                    <li>
                                                                                        <Link onClick={handleMenu} href='/2d-game-development-company'>
                                                                                            <FaAngleRight />
                                                                                            <span>2D Game Development</span>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link onClick={handleMenu} href='/3d-game-development-company'>
                                                                                            <FaAngleRight />
                                                                                            <span>3D Game Development</span>
                                                                                        </Link>
                                                                                    </li>

                                                                                    <li>
                                                                                        <Link onClick={handleMenu} href='/nft-game-development'>
                                                                                            <FaAngleRight />
                                                                                            <span>Nft Game Development</span>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link onClick={handleMenu} href='/blockchain-game-development'>
                                                                                            <FaAngleRight />
                                                                                            <span>Blockchain Game Development</span>
                                                                                        </Link>
                                                                                    </li>
                                                                                    {/* <li>
                                                                                        <Link onClick={handleMenu} href='#'>
                                                                                            <FaAngleRight />
                                                                                            <span>Game Development</span>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link onClick={handleMenu} href='#'>
                                                                                            <FaAngleRight />
                                                                                            <span>2D Art</span>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link onClick={handleMenu} href='#'>
                                                                                            <FaAngleRight />
                                                                                            <span>3D Art</span>
                                                                                        </Link>
                                                                                    </li> */}
                                                                                </ul>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={3} className='d-none d-lg-block'>
                                                <div className={`${styles.listMain} mt-0`}>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <div className={`${styles.listMain} ${styles.resList} mt-0`}>

                                                                    <div className={styles.listBody}>
                                                                        <Row>
                                                                            <Col md={12}>
                                                                                <ul className='mb-0 mt-0'>
                                                                                    <li>
                                                                                        <Image quality={75} src={newImg} alt='BitsWits' className='img-fluid' />
                                                                                    </li>
                                                                                </ul>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </li>
                        <li className={`${styles.megaList2} ${styles.navList}`} onClick={handleMegaMenu2}>
                            <Link href='#' className={`${styles.megaLink} ${styles.befLink}`}>
                                Our Company
                                <FaAngleDown />
                            </Link>
                            <div className={megamenu2 ? `${styles.megaMenu2} ${styles.opnMenu2}` : `${styles.megaMenu2}`}>
                                <div className={styles.backArrow}>
                                    <Image alt="bitswits"
                                        src={backarrow}

                                    />
                                </div>
                                <Row className={`${styles.megaRow} mt-4 mt-lg-0`}>

                                    <Col lg={4}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listBody}>
                                                <ul className='mb-0 mt-0'>
                                                    <div className={styles.listHeading}>
                                                        <div className={styles.megaIcon}>
                                                            <Image alt="bitswits" className='img-fluid'
                                                                src={about}
                                                            />
                                                        </div>
                                                        <h5 className='font14 fontf font-semibold mb-0'>ABOUT US</h5>
                                                    </div>
                                                    <div className={styles.listBody}>
                                                        <Row>
                                                            <Col md={12}>
                                                                <p>Based in California, US, our company is driven by a relentless commitment to client satisfaction, fueled by our passion for technology innovation and business process expertise. Since our inception in 2002, we have experienced remarkable growth year after year, currently boasting a thriving in-house team of over 1,000 employees spread across various international locations.</p>
                                                                <Link className={styles.download} onClick={opnen} href='#' download><FaAngleRight className='white font14' />Download our E-brochure</Link>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={2}>
                                        <div className={styles.listMain}>

                                            <div className={styles.listBody}>
                                                <Row>
                                                    <Col md={12}>
                                                        <ul className='mb-0 mt-0'>

                                                            <div className={styles.listHeading}>
                                                                <div className={styles.megaIcon}>
                                                                    <Image alt="bitswits" className='img-fluid'
                                                                        src={company}
                                                                    />
                                                                </div>
                                                                <h5 className='font14 fontf font-semibold mb-0'>COMPANY</h5>
                                                            </div>

                                                            <li>
                                                                <Link onClick={handleMenu} href='/about-us'>
                                                                    <FaAngleRight />
                                                                    <span>About Us</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className={styles.listMain}>
                                            <div className={styles.listImg}>
                                                <Image alt="bitswits" className='img-fluid'
                                                    src={ourbg}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </li>
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMegaMenu4}>
                            <Link href='/our-work' className={`${styles.megaLink} ${styles.befLink}`}>
                                Our Work
                                <FaAngleDown />
                            </Link>
                            <div className={megamenu4 ? `${styles.megaMenu4} ${styles.opnMenu4}` : `${styles.megaMenu4}`}>
                                <div className={styles.backArrow}>
                                    <Image alt="bitswits"
                                        src={backarrow}

                                    />
                                </div>
                                <Row className={`${styles.megaRow} mt-4 mt-lg-0`}>
                                    <Col lg={4}>
                                        <div className={styles.boxSpace}>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"
                                                    src={travel}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/travel-app-development-case-study" onClick={handleMenu}>
                                                        Travel App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Create Hassle-Free Travel...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox}`}>
                                                <Image alt="bitswits"
                                                    src={estate}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/real-estate-app-development-case-study" onClick={handleMenu}>
                                                        Real Estate App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        A Real Estate App Instilling...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"
                                                    src={wisu}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/clothing-marketplace-app-development-case-study" onClick={handleMenu}>
                                                        Ecommerce App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Ecommerce - E-Store...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"
                                                    src={scribe}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/social-app-development-case-study" onClick={handleMenu}>
                                                        Scribe App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Soul Scribe - Germ-Guard...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox} ${styles.lastBox}`}>
                                                <Image alt="bitswits"
                                                    src={grease}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/automobile-repair-app-development-case-study" onClick={handleMenu}>
                                                        Grease App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Monkey Grease - Cleaning...
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className={styles.boxSpace}>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"
                                                    src={sponsord}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/marketing-partnership-app-development-case-study" onClick={handleMenu}>
                                                        Sponsord App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Developed A Sponsord App...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox}`}>
                                                <Image alt="bitswits"
                                                    src={health}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/healthcare-app-development-case-study" onClick={handleMenu}>
                                                        Health Care App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        AS Medicare - A Pharmacy...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"
                                                    src={ride}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/ride-app-development-case-study" onClick={handleMenu}>
                                                        Rider App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        EZ Ride is a two-sided market...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"
                                                    src={fit}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/fitness-app-development-case-study" onClick={handleMenu}>
                                                        Fitnow App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Fitnow two-sided...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox} ${styles.lastBox}`}>
                                                <Image alt="bitswits"
                                                    src={ready}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/hiring-app-development-case-study" onClick={handleMenu}>
                                                        Ready App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Ready App market...
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className={styles.boxSpace}>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"
                                                    src={foods}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/crave-courier-app-development" onClick={handleMenu}>
                                                        Crave App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Crave Courier - Food...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles.workBox}>
                                                <Image alt="bitswits"
                                                    src={homeconnect}

                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/home-pro-connect-app-development" onClick={handleMenu}>
                                                        Homeconnect Pro
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Home connect...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox}`}>
                                                <Image alt="bitswits"
                                                    src={music}
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/music-app-development-case-study" onClick={handleMenu}>
                                                        Beats App
                                                    </Link>
                                                    <span className={styles.realDummy}>
                                                        Ios And Android Games...
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox} ${styles.lastBox}`}>
                                                <div className={`${styles.ourWork} ${styles.cntct}`}>
                                                    <div className={styles.fill}>
                                                        <div>
                                                            <BsFillEnvelopeFill size={20} className={styles.email} />
                                                        </div>
                                                        <div>
                                                            <a className='font15 font-medium white fontf' href="mailto:info@bitswits.co" onClick={handleMenu}>
                                                                info@bitswits.co
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className={styles.fill}>
                                                        <div>
                                                            <BsFillTelephoneFill size={25} className={styles.email} />
                                                        </div>
                                                        <div>
                                                            <a className='font15 font-medium white fontf' href="tel:3123795987" onClick={handleMenu}>
                                                                +1 312 379 5987
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className={styles.fill}>
                                                        <div>
                                                            <BsFillTelephoneFill size={25} className={styles.email} />
                                                        </div>
                                                        <div>
                                                            <a className='font15 font-medium white fontf' href="tel:8335006007" onClick={handleMenu}>
                                                                +1 833 500 6007
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </li>

                        <li className={`${styles.navList} ${styles.inqBtn}`} >
                            <a href='tel:8335006007' className={styles.befLink}> <Image src={call} alt='BitsWits' className='img-fluid' /> +1 833 500 6007</a>
                        </li>
                        <li>
                            <div className={styles.mbInq}>
                                <div className={`${styles.ourWork} ${styles.cntct}`}>
                                    <div className={styles.fill}>
                                        <div>
                                            <BsFillEnvelopeFill size={20} className={styles.email} />
                                        </div>
                                        <div>
                                            <a className='font15 font-medium white fontf' href="mailto:info@bitswits.co" onClick={handleMenu}>
                                                info@bitswits.co
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.fill}>
                                        <div>
                                            <BsFillTelephoneFill size={25} className={styles.email} />
                                        </div>
                                        <div>
                                            <a className='font15 font-medium white fontf' href="tel:3123795987" onClick={handleMenu}>
                                                +1 312 379 5987
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.fill}>
                                        <div>
                                            <BsFillTelephoneFill size={25} className={styles.email} />
                                        </div>
                                        <div>
                                            <a className='font15 font-medium white fontf' href="tel:8335006007" onClick={handleMenu}>
                                                +1 833 500 6007
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className={styles.navTogle} onClick={handleMenu}>
                        <span className={isActive ? `${styles.line} ${styles.line1}` : `${styles.line}`}></span>
                        <span className={isActive ? `${styles.line} ${styles.line2}` : `${styles.line}`}></span>
                        <span className={isActive ? `${styles.line} ${styles.line3}` : `${styles.line}`}></span>
                    </div>
                </nav>

                <Modal show={show} onHide={closemodal} className={styles.modalnew}>
                    <Modal.Body> <Bitswitspopup formsaspire='popquote' /> <span onClick={closemodal} className={styles.cross}> <RxCross2 /> </span> </Modal.Body>


                </Modal>


            </header>
        </>
    )
}

export default Header