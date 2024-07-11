import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from "next/navigation"
import { Row, Col } from 'react-bootstrap'
import styles from '@/styles/Header.module.css'
//
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
// images
import logo from '/public/images/icons/footerlogo.webp'
import mbllogo from '/public/images/icons/footerlogo.png'
import backarrow from '/public/images/icons/back-arrow.webp'
import newImg from '/public/images/1.jpg'
//
import apps from '/public/images/icons/apps.png'
import games from '/public/images/icons/games.png'
import web from '/public/images/icons/web.png'
import travelimg from "/public/headerbits/travel.png";
import realestateimgg from "/public/headerbits/realestate.png";
import ecommerceimg from "/public/headerbits/ecommerce.png";
import scribeimg from "/public/headerbits/scribe.png";
import greepeimg from "/public/headerbits/greepe.png";
import sponserdimg from "/public/headerbits/sponserd.png";
import healthimg from "/public/headerbits/health.png";
import riderimg from "/public/headerbits/rider.png";
import fitnowimg from "/public/headerbits/fitnow.png";
import cruveimg from "/public/headerbits/cruve.png";
import homeconnctimg from "/public/headerbits/homeconnct.png";
import beatsimg from "/public/headerbits/beats.png";
import readyappimg from "/public/headerbits/readyapp.png";

const HeaderMbl = () => {

    const [isActive, setIsActive] = useState(false);
    const [megamenu3, setMegaMenu3] = useState(false);
    const [megamenu4, setMegaMenu4] = useState(false);

    const handleMenu = () => {
        setIsActive((prev) => !prev);
    }

    const handleMegaMenu3 = () => {
        setMegaMenu3((prev) => !prev);
    }

    const handleMegaMenu4 = () => {
        setMegaMenu4((prev) => !prev);
    }

    const router = usePathname();
    const currentRoute = router.pathname;
    const path = currentRoute

    return (
        <>
            <header className={path ? `${styles.header}` : `${styles.header} header`}>
                <div className={styles.navLogo}>
                    <Link href="/">
                        <Image
                            alt="bitswits"
                            className='img-fluid'
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
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMenu}>
                            <Link href='/' className={`${styles.megaLink} ${styles.befLink}`}>
                                Home
                            </Link>
                        </li>
                        <li className={`${styles.megaList3} ${styles.navList}`} onClick={handleMegaMenu3}>
                            <Link href='#' className={`${styles.megaLink} ${styles.befLink}`}>
                                SERVICES
                                <FaAngleDown />
                            </Link>
                            <div className={megamenu3 ? `${styles.megaMenu3} ${styles.opnMenu3}` : `${styles.megaMenu3}`}>
                                <div className={styles.backArrow}>
                                    <Image alt="bitswits"
                                        src={backarrow}
                                    />
                                </div>
                                <Row className='mt-0 mt-lg-0'>
                                    <Col md={12}>
                                        <Row className={styles.megaRow}>
                                            <Col lg={12}>
                                                <Link href="/">
                                                    <Image alt="bitswits" className='img-fluid w-50'
                                                        src={mbllogo}
                                                    />
                                                </Link>
                                            </Col>
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
                                                                        <h5 className='font12 fontf font-semibold mb-0'>Mobile App Development</h5>
                                                                    </div>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/top-mobile-app-development-company'>
                                                                            <FaAngleRight />
                                                                            <span>Mobile App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/ios-app-development'>
                                                                            <FaAngleRight />
                                                                            <span>iOS App Development</span>
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
                                                                        <Link onClick={handleMenu} href='/cross-platform-app-development'>
                                                                            <FaAngleRight />
                                                                            <span>Cross Platform App Development</span>
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
                                                                                        <h5 className='font14 fontf font-semibold mb-0'>Game Development</h5>
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
                                                                        <h5 className='font14 fontf font-semibold mb-0'>Other</h5>
                                                                    </div>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/blockchain-development-services'>
                                                                            <FaAngleRight />
                                                                            <span>Blockchain Development Services</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/blockchain-development-lp'>
                                                                            <FaAngleRight />
                                                                            <span>Blockchain App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/artificial-intelligence-development-company'>
                                                                            <FaAngleRight />
                                                                            <span>Artificial Intelligence</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/custom-mobile-development'>
                                                                            <FaAngleRight />
                                                                            <span>Custom Mobile Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/augmented-reality-apps-development-company'>
                                                                            <FaAngleRight />
                                                                            <span>Augmented Reality App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/custom-web-development-services'>
                                                                            <FaAngleRight />
                                                                            <span>Web Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/web-app-development'>
                                                                            <FaAngleRight />
                                                                            <span>Web App Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/business-intelligence-software-development'>
                                                                            <FaAngleRight />
                                                                            <span>Business Intelligence Software Development</span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link onClick={handleMenu} href='/ui-&-ux-design-and-development-services'>
                                                                            <FaAngleRight />
                                                                            <span>UI & UX Design And Development</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
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
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMegaMenu4}>
                            <Link href='/our-work' className={`${styles.megaLink} ${styles.befLink}`}>
                                OUR WORK
                                <FaAngleDown />
                            </Link>
                            <div className={megamenu4 ? `${styles.megaMenu4} ${styles.opnMenu4}` : `${styles.megaMenu4}`}>
                                <div className={styles.backArrow}>
                                    <Image alt="bitswits"
                                        src={backarrow}
                                    />
                                </div>
                                <Row className={`${styles.megaRow} mt-lg-0`}>
                                    <Col lg={12}>
                                        <Link href="/">
                                            <Image alt="bitswits" className='img-fluid w-50'
                                                src={mbllogo}
                                            />
                                        </Link>
                                    </Col>
                                    <Col lg={4}>
                                        <div className={styles.boxSpace}>
                                            <div className={styles.workBox}>
                                                <Image
                                                    alt="bitswits"
                                                    src={fitnowimg}
                                                    className="img-fluid"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/fitness-app-development-case-study" onClick={handleMenu}>
                                                        FITNESS APP
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox}`}>
                                                <Image
                                                    alt="bitswits"
                                                    src={ecommerceimg}
                                                    className="img-fluid"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/clothing-marketplace-app-development-case-study" onClick={handleMenu}>
                                                        ECOMMERCE APP
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={styles.workBox}>
                                                <Image
                                                    alt="bitswits"
                                                    src={scribeimg}
                                                    className="img-fluid"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/social-app-development-case-study" onClick={handleMenu}>
                                                        SOCIAL MEDIA APP
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={styles.workBox}>
                                                <Image
                                                    alt="bitswits"
                                                    src={readyappimg}
                                                    className="img-fluid"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/hiring-app-development-case-study" onClick={handleMenu}>
                                                        HIRING APP
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox}`}>
                                                <Image
                                                    alt="bitswits"
                                                    src={greepeimg}
                                                    className="img-fluid"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/automobile-repair-app-development-case-study" onClick={handleMenu}>
                                                        AUTOMOBILE REPAIR APP
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={styles.workBox}>
                                                <Image
                                                    alt="bitswits"
                                                    src={cruveimg}
                                                    className="img-fluid"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/food-delivery-app-development-case-study" onClick={handleMenu}>
                                                        FOOD DELIVERY APP
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox}`}>
                                                <Image
                                                    alt="bitswits"
                                                    src={beatsimg}
                                                    className="img-fluid"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/music-app-development-case-study" onClick={handleMenu}>
                                                        MUSIC APP
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={styles.workBox}>
                                                <Image
                                                    alt="bitswits"
                                                    src={travelimg}
                                                    className="img-fluid"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/travel-app-development-case-study" onClick={handleMenu}>
                                                        TRAVEL APP
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={styles.workBox}>
                                                <Image
                                                    alt="bitswits"
                                                    src={sponserdimg}
                                                    className="img-fluid"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/marketing-partnership-app-development-case-study" onClick={handleMenu}>
                                                        INFLUENCER MARKETING APP
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox}`}>
                                                <Image
                                                    alt="bitswits"
                                                    src={realestateimgg}
                                                    className="img-fluid"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/real-estate-app-development-case-study" onClick={handleMenu}>
                                                        REAL ESTATE APP
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={styles.workBox}>
                                                <Image
                                                    alt="bitswits"
                                                    src={homeconnctimg}
                                                    className="img-fluid"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/handyman-on-demand-app-development-case-study" onClick={handleMenu}>
                                                        HANDYMAN APP
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={styles.workBox}>
                                                <Image
                                                    alt="bitswits"
                                                    src={healthimg}
                                                    className="img-fluid"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/healthcare-app-development-case-study" onClick={handleMenu}>
                                                        HEALTH CARE APP
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={`${styles.workBox} ${styles.lastBox}`}>
                                                <Image
                                                    alt="bitswits"
                                                    src={riderimg}
                                                    className="img-fluid"
                                                />
                                                <div className={styles.ourWork}>
                                                    <Link className={styles.workTitle} href="/ride-app-development-case-study" onClick={handleMenu}>
                                                        RIDE APP
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </li>
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMenu}>
                            <Link href='/about-us' className={`${styles.megaLink} ${styles.befLink}`}>
                                About
                            </Link>
                        </li>
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMenu}>
                            <Link href='/contact-us' className={`${styles.megaLink} ${styles.befLink}`}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <div className={styles.mbInq}>
                                <div className={`${styles.ourWork} ${styles.cntct}`}>
                                    <div className={styles.fill}>
                                        <div>
                                            <BsFillEnvelopeFill size={20} className={styles.email} />
                                        </div>
                                        <div>
                                            <a className='font15 font-medium white fontf text-lowercase' href="mailto:info@bitswits.co" onClick={handleMenu}>
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
            </header>
        </>
    )
}

export default HeaderMbl