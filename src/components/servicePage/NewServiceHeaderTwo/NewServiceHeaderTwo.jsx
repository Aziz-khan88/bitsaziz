import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"
import Link from "next/link";
import Image from "next/image";
import { Row, Col, Modal } from "react-bootstrap";
import styles from "@/styles/NewServiceHeader/NewHeader.module.css";
//
import { FaAngleDown } from "react-icons/fa";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
//
import ActiveLink from "@/src/components/ActiveLink";
import Bitswitspopup from "@/src/components/Bitswitspopup";
// images
import logo from "/public/images/icons/logo.png";
import discount from "/public/headerbits/discount.jpg";
import cta1 from "/public/headerbits/cta1.png";
import cta2 from "/public/headerbits/cta2.png";
import cta3 from "/public/headerbits/cta3.png";
import mbllogo from "/public/images/icons/footerlogo.png";
///// New Images Import
import IOS from "/public/images/icons/ios.png";
import andriod from "/public/images/icons/android.png";
import Flutter from "/public/images/icons/flutter.png";
import ReactNative from "/public/images/icons/reactnative.png";
import Programming from "/public/images/icons/webdevelopment.png";
import Cross from "/public/images/icons/cross.png";
import WebApp from "/public/images/icons/programming.png";
import UIUX from "/public/images/icons/uiux.png";
import TwodIcon from "/public/images/icons/2d.png";
import ThreedIcon from "/public/images/icons/3d.png";
import NFT from "/public/images/icons/nft.png";
import blockchainIcon from "/public/images/icons/blockchain.png";
import AI from "/public/images/icons/aiIcon.png";
import Augment from "/public/images/icons/augment.png";
import blockServ from "/public/images/icons/block-serv.png";
import mblApp from "/public/images/icons/mblApp.png";
// newworkimages
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
// 
import travel from "/public/images/case-studies/case-travel/banner-img.png"
import estate from "/public/images/case-studies/case-dreamhome/banner-img.png"
import ecommerce from "/public/images/case-studies/case-wisu/banner-img.png"
import scribe from "/public/images/case-studies/case-scribe/banner-img.png"
import greepe from "/public/images/case-studies/case-monkey/banner-img.png"
import sponserd from "/public/images/case-studies/case-sponsord/banner-img.png"
import health from "/public/images/case-studies/case-health/banner-img.png"
import rider from "/public/images/case-studies/case-ride/banner-img.png"
import fitnow from "/public/images/case-studies/case-fitnow/banner-img.png"
import crave from "/public/images/case-studies/case-crave/banner-img.png"
import home from "/public/images/case-studies/case-homepro/banner-img.png"
import beats from "/public/images/case-studies/case-beats/banner-img.png"
import ready from "/public/images/case-studies/case-ready/banner-img.png"


const NewServiceHeaderTwo = () => {
    const router = usePathname();
    const [isSliderActive, setIsSliderActive] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 991) {
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
    const opnen = () => {
        window.open("../companyprofile.pdf", "_blank");
    };
    const [show, setShow] = useState(false);
    function modal(e) {
        e.preventDefault();
        setShow(true);
    }
    function closemodal() {
        setShow(false);
    }
    const [isHovered, setIsHovered] = useState("");
    function fun1(vale) {
        setIsHovered(vale);
    }
    function fun2(vale1) {
        setIsHovered(vale1);
    }
    function handleClickproduct(val5) {
        setIsHovered1(val5);
    }
    const [isHovered1, setIsHovered1] = useState("");
    const [toggleCloseMeg, isToggleCloseMeg] = useState(false);
    function fun11(vale) {
        setIsHovered1(vale);
    }
    function fun21(vale1) {
        setIsHovered1(vale1);
    }
    const [isHovered2, setIsHovered2] = useState("");
    function funserve(vale) {
        setIsHovered2(vale);
    }
    function funserve2(vale1) {
        setIsHovered2(vale1);
    }
    const [isHovered3, setIsHovered3] = useState("");
    function funcom(vale) {
        setIsHovered3(vale);
    }
    function funcom2(vale1) {
        setIsHovered3(vale1);
    }
    const [isHovered4, setIsHovered4] = useState("");
    function funwork(vale) {
        setIsHovered4(vale);
    }
    function funwork2(vale1) {
        setIsHovered4(vale1);
    }
    const [isActive, setIsActive] = useState(false);
    const handleMenu = () => {
        setIsActive(!isActive);
    };
    const [activeTab1, setActiveTab1] = useState("tab1");
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }
    const [activeTab2, setActiveTab2] = useState("tab1");
    function fun2(tabs1) {
        setActiveTab2(tabs1);
    }
    useEffect(() => {
        setTimeout(() => {
            setIsHovered1("secImage11");
            setIsHovered4("secImage2");
            setIsHovered3("secImage2");
        }, 1000);
    }, [toggleCloseMeg, router]);
    // Header Scrolled Start
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 1);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <header className={`${styles.headernew} ${isScrolled ? styles.bgColor : styles.transparent}`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image alt="bitswits" loading="lazy" src={logo} className="img-fluid" />
                    </Link>
                </div>
                <nav>
                    <ul
                        className={
                            isActive
                                ? `${styles.newone} ${styles.active}`
                                : `${styles.newone}`
                        }
                    >
                        <div className={`${styles.navLogo} ${styles.mblLogo}`}>
                            <Link href="/">
                                <Image alt="bitswits" className="img-fluid" src={mbllogo} />
                            </Link>
                        </div>
                        <li>
                            <Link href="/" className={`manrope font-bold ${styles.post}`}>
                                Home
                            </Link>
                        </li>
                        <li
                            onMouseEnter={() => fun11("active1")}
                            onMouseLeave={() => fun21("secImage11")}
                            className={styles.product}
                        >
                            <Link className={`manrope font-bold ${styles.post}`} href="#">
                                Services
                                <FaAngleDown />
                            </Link>
                            {isHovered1 === "active1" ? (
                                <div className={styles.megamenu}>
                                    <Row>
                                        <Col lg={4} className={` ${styles.newspace}`}>
                                            <div>
                                                <h4 className={styles.course1}>
                                                    Mobile App Development
                                                </h4>
                                            </div>
                                            <div className={styles.hire}>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div
                                                            className={`${styles.hire} ${activeTab1 == "tab1" ? styles.active : ""
                                                                }`}
                                                            onClick={() => fun1("tab1")}
                                                            href="#"
                                                        >
                                                            <div className={styles.polo}>
                                                                <h4 className="manrope">
                                                                    Mobile App <br /> Development
                                                                </h4>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={mblApp}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div
                                                            className={`${styles.hire} ${activeTab1 == "tab2" ? styles.active : ""
                                                                }`}
                                                            onClick={() => fun1("tab2")}
                                                            href="#"
                                                        >
                                                            <div className={styles.polo}>
                                                                <h4 className="manrope">
                                                                    Game <br /> Development
                                                                </h4>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={andriod}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div
                                                            className={`${styles.hire} ${activeTab1 == "tab3" ? styles.active : ""
                                                                }`}
                                                            onClick={() => fun1("tab3")}
                                                            href="#"
                                                        >
                                                            <div className={styles.polo}>
                                                                <h4 className="manrope">
                                                                    Blockchain <br /> Development{" "}
                                                                </h4>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={blockchainIcon}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div
                                                            className={`${styles.hire} ${activeTab1 == "tab4" ? styles.active : ""
                                                                }`}
                                                            onClick={() => fun1("tab4")}
                                                            href="#"
                                                        >
                                                            <div className={styles.polo}>
                                                                <h4 className="manrope">
                                                                    Artificial <br /> Intelligence (Ai){" "}
                                                                </h4>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={AI}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div
                                                            className={`${styles.hire} ${activeTab1 == "tab5" ? styles.active : ""
                                                                }`}
                                                            onClick={() => fun1("tab5")}
                                                            href="#"
                                                        >
                                                            <div className={styles.polo}>
                                                                <h4 className="manrope">
                                                                    Web App <br /> Development
                                                                </h4>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={WebApp}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div
                                                            className={`${styles.hire} ${activeTab1 == "tab6" ? styles.active : ""
                                                                }`}
                                                            onClick={() => fun1("tab6")}
                                                            href="#"
                                                        >
                                                            <div className={styles.polo}>
                                                                <h4 className="manrope">
                                                                    Business <br /> Intelligence{" "}
                                                                </h4>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={Augment}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div
                                                            className={`${styles.hire} ${activeTab1 == "tab7" ? styles.active : ""
                                                                }`}
                                                            onClick={() => fun1("tab7")}
                                                            href="#"
                                                        >
                                                            <div className={styles.polo}>
                                                                <h4 className="manrope">
                                                                    Web <br /> Development
                                                                </h4>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={Programming}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div
                                                            className={`${styles.hire} ${activeTab1 == "tab8" ? styles.active : ""
                                                                }`}
                                                            onClick={() => fun1("tab8")}
                                                            href="#"
                                                        >
                                                            <div className={styles.polo}>
                                                                <h4 className="manrope">
                                                                    UI/UX App <br /> Design{" "}
                                                                </h4>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={UIUX}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <Col lg={4} className={` ${styles.menupostblog1}`}>
                                            {activeTab1 == "tab1" && (
                                                <div>
                                                    <ul className={`${styles.mega} mt-5 pt-3`}>
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={mblApp}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                href="/top-mobile-app-development-company"
                                                                text="Mobile App Development"
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={IOS}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                href="/ios-app-development"
                                                                text="IOS App Development"
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={andriod}
                                                                    guardicon
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/android-application-development"
                                                                text="Android App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={Flutter}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/flutter-mobile-development"
                                                                text="Flutter App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={ReactNative}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/react-native-mobile-development"
                                                                text="React Native App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={Cross}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/cross-platform-app-development"
                                                                text="Cross Platform App Development"
                                                            />
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}

                                            {activeTab1 == "tab2" && (
                                                <div>
                                                    <ul className={`${styles.mega} mt-5 pt-3`}>
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={andriod}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/game-application-development"
                                                                text="Game App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={TwodIcon}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/2d-game-development-company"
                                                                text="2D Game Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={ThreedIcon}
                                                                    guardicon
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/3d-game-development-company"
                                                                text="3D Game Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={NFT}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/nft-game-development"
                                                                text="NFT Game Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={blockchainIcon}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/blockchain-game-development"
                                                                text="Blockchain Game Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                    </ul>
                                                </div>
                                            )}

                                            {activeTab1 == "tab3" && (
                                                <div>
                                                    <ul className={`${styles.mega} mt-5 pt-3`}>
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={blockServ}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/blockchain-development-services"
                                                                text="Blockchain Development Services"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={blockchainIcon}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/blockchain-development-lp"
                                                                text="Blockchain App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={AI}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/artificial-intelligence-development-company"
                                                                text="Artificial Intelligence"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={WebApp}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/custom-mobile-development"
                                                                text="Custom Mobile Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={Augment}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/augmented-reality-apps-development-company"
                                                                text=" Augmented Reality App Development"
                                                            />
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}

                                            {activeTab1 == "tab4" && (
                                                <div>
                                                    <ul className={`${styles.mega} mt-5 pt-3`}>
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={AI}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/artificial-intelligence-development-company"
                                                                text="Artificial Intelligence"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={Augment}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/augmented-reality-apps-development-company"
                                                                text=" Augmented Reality App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={blockchainIcon}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/blockchain-development-services"
                                                                text="Blockchain Development Services"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={blockchainIcon}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/blockchain-development-lp"
                                                                text="Blockchain App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={Cross}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/cross-platform-app-development"
                                                                text="Cross Platform App Development"
                                                            />
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}

                                            {activeTab1 == "tab5" && (
                                                <div>
                                                    <ul className={`${styles.mega} mt-5 pt-3`}>
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={WebApp}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/web-app-development"
                                                                text=" Web App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={Cross}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/cross-platform-app-development"
                                                                text="Cross Platform App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={Augment}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/augmented-reality-apps-development-company"
                                                                text="Augmented Reality App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={blockchainIcon}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/blockchain-development-lp"
                                                                text="Blockchain App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={WebApp}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/custom-mobile-development"
                                                                text="Custom Mobile Development"
                                                            />
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}

                                            {activeTab1 == "tab6" && (
                                                <div>
                                                    <ul className={`${styles.mega} mt-5 pt-3`}>
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={Augment}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/business-intelligence-software-development"
                                                                text="Business Intelligence Software Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={WebApp}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/custom-mobile-development"
                                                                text="Custom Mobile Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={Cross}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/cross-platform-app-development"
                                                                text="Cross Platform App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={blockchainIcon}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/blockchain-development-services"
                                                                text="Blockchain Development Services"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={AI}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/artificial-intelligence-development-company"
                                                                text="Artificial Intelligence"
                                                            />
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}

                                            {activeTab1 == "tab7" && (
                                                <div>
                                                    <ul className={`${styles.mega} mt-5 pt-3`}>
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={Programming}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/custom-web-development-services"
                                                                text="Web Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={Augment}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/augmented-reality-apps-development-company"
                                                                text="Augmented Reality App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={WebApp}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/custom-mobile-development"
                                                                text="Custom Mobile Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={Cross}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/cross-platform-app-development"
                                                                text="Cross Platform App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={WebApp}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/web-app-development"
                                                                text="Web App Development"
                                                            />
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}

                                            {activeTab1 == "tab8" && (
                                                <div>
                                                    <ul className={`${styles.mega} mt-5 pt-3`}>
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={IOS}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                href="/ui-&-ux-design-and-development-services"
                                                                text="UI & UX Design And Development "
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={WebApp}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/web-app-development"
                                                                text="Web App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={andriod}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/game-application-development"
                                                                text="Game App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={blockchainIcon}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/blockchain-development-lp"
                                                                text="Blockchain App Development"
                                                            />
                                                        </li>
                                                        <hr />
                                                        <li className={styles.imgpost}>
                                                            <div className={styles.dsicon}>
                                                                <Image
                                                                    alt="bitswits"
                                                                    src={AI}
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <ActiveLink
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                                href="/artificial-intelligence-development-company"
                                                                text="Artificial Intelligence"
                                                            />
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </Col>
                                        <Col lg={4} className={`${styles.newset}`}>
                                            <div className={styles.lptow}>
                                                <div className={styles.newbits}>
                                                    <a href="javascript:$zopim.livechat.window.show();">
                                                        <Image
                                                            alt="bitswits"
                                                            src={discount}
                                                            className="img-fluid"
                                                        />
                                                    </a>
                                                </div>
                                                <div className={styles.proper}>
                                                    <h4 className="manrope">Development Excellence with Bitswits</h4>
                                                    <h3>
                                                        On Time, Within Budget
                                                    </h3>
                                                    <p>
                                                        At Bitswits, we bridge your ideas with the real world, turning visions into vivid experiences. Innovation drives us, whether it's through mobile apps or blockchain technology, and we're committed to keeping you ahead. Our deep understanding of technology isn't just our craft; it's our passion, powering every unique solution we create for you. At Bitswits, we don't just build solutions; we craft a future where our success is intertwined with yours.
                                                    </p>
                                                </div>
                                                <div className={styles.slaes}>
                                                    <p className="pb-0 mb-0">
                                                        <a href="tel:8335006007">
                                                            <Image
                                                                alt="bitswits"
                                                                className="img-fluid"
                                                                src={cta1}
                                                                loading="lazy"
                                                            />
                                                            <span className="number">BOOK A CALL</span>
                                                        </a>
                                                    </p>
                                                    <p className="pb-0 mb-0">
                                                        <a href="mailto:info@BitsWits.co" className={styles.saleEmail}>
                                                            <Image
                                                                alt="bitswits"
                                                                className="img-fluid"
                                                                src={cta2}
                                                                loading="lazy"
                                                            />
                                                            <span className="email f-uppercase">
                                                                Contact Email
                                                            </span>
                                                        </a>
                                                    </p>
                                                    <p className="pb-0 mb-0">
                                                        <a href="javascript:$zopim.livechat.window.show();">
                                                            <Image
                                                                alt="bitswits"
                                                                className="img-fluid"
                                                                src={cta3}
                                                                loading="lazy"
                                                            />
                                                            <span className="email f-uppercase">
                                                                Lets Chat
                                                            </span>
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            ) : null}
                        </li>
                        <li
                            onMouseEnter={() => funwork("active4")}
                            onMouseLeave={() => funwork2("secImage2")}
                            className={styles.product}
                        >
                            <Link href="#" className={`manrope font-bold ${styles.post}`}>
                                OUR WORK
                                <FaAngleDown />
                            </Link>

                            {isHovered4 == "active4" ? (
                                <div className={styles.megamenuwork}>
                                    <Row className="gy-4">
                                        <Col lg={4} className="pt-4 pb-1">
                                            <div className={`${activeTab2 == "tab1" ? styles.active2 : ""
                                                }`}
                                                onClick={() => fun2("tab1")}
                                                href="#">
                                                <div className={styles.polo1}>
                                                    <h4 className="manrope">FITNESS APP</h4>
                                                    <Image
                                                        alt="bitswits"
                                                        src={fitnowimg}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>

                                            <div className={`${activeTab2 == "tab2" ? styles.active2 : ""
                                                }`}
                                                onClick={() => fun2("tab2")}
                                                href="#">
                                                <div className={styles.polo1}>
                                                    <h4 className="manrope">ECOMMERCE APP</h4>
                                                    <Image
                                                        alt="bitswits"
                                                        src={ecommerceimg}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>

                                            <div className={`${activeTab2 == "tab3" ? styles.active2 : ""
                                                }`}
                                                onClick={() => fun2("tab3")}
                                                href="#">
                                                <div className={styles.polo1}>
                                                    <h4 className="manrope">SOCIAL MEDIA APP</h4>
                                                    <Image
                                                        alt="bitswits"
                                                        src={scribeimg}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>

                                            <div className={`${activeTab2 == "tab4" ? styles.active2 : ""
                                                }`}
                                                onClick={() => fun2("tab4")}
                                                href="#">
                                                <div className={styles.polo1}>
                                                    <h4 className="manrope">HIRING APP</h4>
                                                    <Image
                                                        alt="bitswits"
                                                        src={readyappimg}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>

                                            <div className={`${activeTab2 == "tab5" ? styles.active2 : ""
                                                }`}
                                                onClick={() => fun2("tab5")}
                                                href="#">
                                                <div className={styles.polo1}>
                                                    <h4 className="manrope">AUTOMOBILE REPAIR APP</h4>
                                                    <Image
                                                        alt="bitswits"
                                                        src={greepeimg}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>

                                            <div className={`${activeTab2 == "tab6" ? styles.active2 : ""
                                                }`}
                                                onClick={() => fun2("tab6")}
                                                href="#">
                                                <div className={styles.polo1}>
                                                    <h4 className="manrope">FOOD DELIVERY APP</h4>
                                                    <Image
                                                        alt="bitswits"
                                                        src={cruveimg}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>

                                            <div className={`${activeTab2 == "tab7" ? styles.active2 : ""
                                                }`}
                                                onClick={() => fun2("tab7")}
                                                href="#">
                                                <div className={styles.polo1}>
                                                    <h4 className="manrope">MUSIC APP</h4>
                                                    <Image
                                                        alt="bitswits"
                                                        src={beatsimg}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>

                                            <div className={`${activeTab2 == "tab8" ? styles.active2 : ""
                                                }`}
                                                onClick={() => fun2("tab8")}
                                                href="#">
                                                <div className={styles.polo1}>
                                                    <h4 className="manrope">TRAVEL APP</h4>
                                                    <Image
                                                        alt="bitswits"
                                                        src={travelimg}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>

                                            <div className={`${activeTab2 == "tab9" ? styles.active2 : ""
                                                }`}
                                                onClick={() => fun2("tab9")}
                                                href="#">
                                                <div className={styles.polo1}>
                                                    <h4 className="manrope">INFLUENCER MARKETING APP</h4>
                                                    <Image
                                                        alt="bitswits"
                                                        src={sponserdimg}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>

                                            <div className={`${activeTab2 == "tab10" ? styles.active2 : ""
                                                }`}
                                                onClick={() => fun2("tab10")}
                                                href="#">
                                                <div className={styles.polo1}>
                                                    <h4 className="manrope">REAL ESTATE APP</h4>
                                                    <Image
                                                        alt="bitswits"
                                                        src={realestateimgg}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>

                                            <div className={`${activeTab2 == "tab11" ? styles.active2 : ""
                                                }`}
                                                onClick={() => fun2("tab11")}
                                                href="#">
                                                <div className={styles.polo1}>
                                                    <h4 className="manrope">HANDYMAN APP</h4>
                                                    <Image
                                                        alt="bitswits"
                                                        src={homeconnctimg}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>

                                            <div className={`${activeTab2 == "tab12" ? styles.active2 : ""
                                                }`}
                                                onClick={() => fun2("tab12")}
                                                href="#">
                                                <div className={styles.polo1}>
                                                    <h4 className="manrope">HEALTH CARE APP</h4>
                                                    <Image
                                                        alt="bitswits"
                                                        src={healthimg}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>

                                            <div className={`${activeTab2 == "tab13" ? styles.active2 : ""
                                                }`}
                                                onClick={() => fun2("tab13")}
                                                href="#">
                                                <div className={styles.polo1}>
                                                    <h4 className="manrope">RIDE APP</h4>
                                                    <Image
                                                        alt="bitswits"
                                                        src={riderimg}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4} className={`${styles.menupostblog1} ${styles.menupostblog2} pt-4`}>
                                            <div>
                                                {activeTab2 == "tab1" && (
                                                    <div className={styles.caseTabs}>
                                                        <Image alt="bitswits" src={fitnow} className="img-fluid" />
                                                        <h5>Fitness App</h5>
                                                        <p>Fitnow is the most effective fitness app available, a product of hard work and creativity. We've made the process easy: select your workout, establish your goals, and work for them under the direction of renowned fitness experts. It's a simple, easy way to achieve your fitness goals.</p>
                                                        <div>
                                                            <ActiveLink href="/fitness-app-development-case-study" text="Read More"
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                            />
                                                            <RiArrowDropRightLine
                                                                className={styles.train}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab2 == "tab2" && (
                                                    <div className={styles.caseTabs}>
                                                        <Image alt="bitswits" src={ecommerce} className="img-fluid" />
                                                        <h5>Clothing Marketplace App</h5>
                                                        <p>Wisu Clothing Marketplace App is your one-stop destination for fashion enthusiasts. This sleek and intuitive platform connects you to an extensive array of clothing, offering both top brands and independent designers. Wisu's smart recommendation system ensures that your style preferences are catered to ensuring confident fashion choices.</p>
                                                        <div>
                                                            <ActiveLink href="/clothing-marketplace-app-development-case-study" text="Read More"
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                            />
                                                            <RiArrowDropRightLine
                                                                className={styles.train}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab2 == "tab3" && (
                                                    <div className={styles.caseTabs}>
                                                        <Image alt="bitswits" src={scribe} className="img-fluid" />
                                                        <h5>Social Networking App</h5>
                                                        <p>Soul Scribe is a social networking app that works as a digital diary. Its unique feature is to invite friends and family to be part of your online journal. The app operates on a freemium subscription model, offering a complimentary family room option that allows users to invite peers to contribute to their memories.</p>
                                                        <div>
                                                            <ActiveLink href="/social-app-development-case-study" text="Read More"
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                            />
                                                            <RiArrowDropRightLine
                                                                className={styles.train}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab2 == "tab4" && (
                                                    <div className={styles.caseTabs}>
                                                        <Image alt="bitswits" src={ready} className="img-fluid" />
                                                        <h5>Hiring App</h5>
                                                        <p>Ready App is the ultimate mobile solution for drivers and HR professionals. For drivers, it offers a platform to list themselves and gain visibility, while HRs can effortlessly find and hire the right talent. With features like secure messaging, custom matching, and real-time updates, Ready App streamlines the recruitment process, making it efficient and effective for both drivers and HRs, all within a secure and diverse community.</p>
                                                        <div>
                                                            <ActiveLink href="/hiring-app-development-case-study" text="Read More"
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                            />
                                                            <RiArrowDropRightLine
                                                                className={styles.train}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab2 == "tab5" && (
                                                    <div className={styles.caseTabs}>
                                                        <Image alt="bitswits" src={greepe} className="img-fluid" />
                                                        <h5>Automobile Repair App</h5>
                                                        <p>Grease Monkey is your automotive innovation platform that provides a thorough answer to all your car repair needs. From services and prices to locations and client reviews, we help you make informed decisions for your vehicle.</p>
                                                        <div>
                                                            <ActiveLink href="/automobile-repair-app-development-case-study" text="Read More"
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                            />
                                                            <RiArrowDropRightLine
                                                                className={styles.train}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab2 == "tab6" && (
                                                    <div className={styles.caseTabs}>
                                                        <Image alt="bitswits" src={crave} className="img-fluid" />
                                                        <h5>Food Delivery App</h5>
                                                        <p>Crave Courier, a BitsWits creation, is a food delivery app. It streamlines the process: select from local eateries, place your order, and savor restaurant-quality dishes brought straight to you. A convenient, fuss-free solution for your dining desires.</p>
                                                        <div>
                                                            <ActiveLink href="/food-delivery-app-development-case-study" text="Read More"
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                            />
                                                            <RiArrowDropRightLine
                                                                className={styles.train}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab2 == "tab7" && (
                                                    <div className={styles.caseTabs}>
                                                        <Image alt="bitswits" src={beats} className="img-fluid" />
                                                        <h5>Music App</h5>
                                                        <p>Beats, a music app, showcases music albums, lets users collaborate with other application users, and brings together a community of music enthusiasts, all within our vibrant and supportive platform.</p>
                                                        <div>
                                                            <ActiveLink href="/music-app-development-case-study" text="Read More"
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                            />
                                                            <RiArrowDropRightLine
                                                                className={styles.train}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab2 == "tab8" && (
                                                    <div className={styles.caseTabs}>
                                                        <Image alt="bitswits" src={travel} className="img-fluid" />
                                                        <h5>Travel App</h5>
                                                        <p>Tourista is your premium travel app, simplifying every aspect of your journeys. From trip planning and interactive maps to local insights and seamless booking integration, Tourista has you covered.</p>
                                                        <div>
                                                            <ActiveLink href="/travel-app-development-case-study" text="Read More"
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                            />
                                                            <RiArrowDropRightLine
                                                                className={styles.train}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab2 == "tab9" && (
                                                    <div className={styles.caseTabs}>
                                                        <Image alt="bitswits" src={sponserd} className="img-fluid" />
                                                        <h5>Marketing Partnership App</h5>
                                                        <p>Sponsor'D is a platform that connects brands, businesses, and creators for mutually beneficial collaborations. Our main goal is to reinvent influencer marketing and foster healthy collaborations.</p>
                                                        <div>
                                                            <ActiveLink href="/marketing-partnership-app-development-case-study" text="Read More"
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                            />
                                                            <RiArrowDropRightLine
                                                                className={styles.train}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab2 == "tab10" && (
                                                    <div className={styles.caseTabs}>
                                                        <Image alt="bitswits" src={estate} className="img-fluid" />
                                                        <h5>Real Estate App</h5>
                                                        <p>Dream Home, a real estate app designed to make your property search a breeze. If you're looking for your dream home, this user-friendly app offers a seamless and efficient experience. With a sleek interface, powerful search filters, and a vast database of listings, Dream Home helps you find the perfect property in no time.</p>
                                                        <div>
                                                            <ActiveLink href="/real-estate-app-development-case-study" text="Read More"
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                            />
                                                            <RiArrowDropRightLine
                                                                className={styles.train}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab2 == "tab11" && (
                                                    <div className={styles.caseTabs}>
                                                        <Image alt="bitswits" src={home} className="img-fluid" />
                                                        <h5>Handyman App</h5>
                                                        <p>HomePro Connect is an on-demand handyman services application that connects users with skilled professionals at any time and in any location. With HomePro Connect, users can bid farewell to the stress of locating reliable assistance for commercial and home maintenance tasks.</p>
                                                        <div>
                                                            <ActiveLink href="/handyman-on-demand-app-development-case-study" text="Read More"
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                            />
                                                            <RiArrowDropRightLine
                                                                className={styles.train}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab2 == "tab12" && (
                                                    <div className={styles.caseTabs}>
                                                        <Image alt="bitswits" src={health} className="img-fluid" />
                                                        <h5>Health App</h5>
                                                        <p>Health Care, an innovative app designed to empower individuals to take control of their health and well-being. This innovative mobile application offers a user-friendly platform for tracking, managing, and optimizing your health, all in one place. Health Care, your path to a healthier you start here.</p>
                                                        <div>
                                                            <ActiveLink href="/healthcare-app-development-case-study" text="Read More"
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                            />
                                                            <RiArrowDropRightLine
                                                                className={styles.train}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab2 == "tab13" && (
                                                    <div className={styles.caseTabs}>
                                                        <Image alt="bitswits" src={rider} className="img-fluid" />
                                                        <h5>Ride App</h5>
                                                        <p>Ride Me is your trusted ride-sharing app, designed for effortless daily commuting. Whether it's work, exploration, or a quick ride, Ride Me has your back. With a focus on safety, reliability, and clear pricing, Ride Me offers a smooth transportation experience.</p>
                                                        <div>
                                                            <ActiveLink href="/ride-app-development-case-study" text="Read More"
                                                                handle={() => isToggleCloseMeg((prev) => !prev)}
                                                            />
                                                            <RiArrowDropRightLine
                                                                className={styles.train}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </Col>
                                        <Col lg={4} className={`${styles.newset}`}>
                                            <div className={`${styles.lptow} ${styles.lptow2}`}>
                                                <div className={styles.newbits}>
                                                    <a href="javascript:$zopim.livechat.window.show();">
                                                        <Image
                                                            alt="bitswits"
                                                            src={discount}
                                                            className="img-fluid"
                                                        />
                                                    </a>
                                                </div>
                                                <div className={styles.proper}>
                                                    <h4 className="manrope">Crafting Success with Bitswits</h4>
                                                    <h3>
                                                        Your Vision, Our Expertise
                                                    </h3>
                                                    <p>
                                                        At Bitswits, we place your project at the center of our world. Our team approaches each endeavor with a deep respect for your vision, combining it with our extensive expertise to turn ambitious ideas into tangible successes. We understand that behind every project is a dream, a goal, and a unique set of challenges, and we're committed to honoring that with the highest level of skill, care, and dedication. Here, your project isn't just another task—it's a mission fueled by our passion to see you thrive.
                                                    </p>
                                                </div>
                                                <div className={styles.slaes}>
                                                    <p className="pb-0 mb-0">
                                                        <a href="tel:8335006007">
                                                            <Image
                                                                alt="bitswits"
                                                                className="img-fluid"
                                                                src={cta1}
                                                                loading="lazy"
                                                            />
                                                            <span className="number">BOOK A CALL</span>
                                                        </a>
                                                    </p>
                                                    <p className="pb-0 mb-0">
                                                        <a href="mailto:info@BitsWits.co" className={styles.saleEmail}>
                                                            <Image
                                                                alt="bitswits"
                                                                className="img-fluid"
                                                                src={cta2}
                                                                loading="lazy"
                                                            />
                                                            <span className="email f-uppercase">
                                                                Contact Email
                                                            </span>
                                                        </a>
                                                    </p>
                                                    <p className="pb-0 mb-0">
                                                        <a href="javascript:$zopim.livechat.window.show();">
                                                            <Image
                                                                alt="bitswits"
                                                                className="img-fluid"
                                                                src={cta3}
                                                                loading="lazy"
                                                            />
                                                            <span className="email f-uppercase">
                                                                Lets Chat
                                                            </span>
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            ) : (
                                ""
                            )}
                        </li>
                        <li>
                            <Link href="/about-us" className={`manrope font-bold ${styles.post}`}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us" className={`manrope font-bold ${styles.post}`}>
                                Contact
                            </Link>
                        </li>
                        <li onClick={modal}>
                            <Link className={`${`manrope font-bold ${styles.post}`} ${styles.quote}`} href="#">
                                GET A QUOTE
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.navTogle} onClick={handleMenu}>
                        <span
                            className={
                                isActive ? `${styles.line} ${styles.line1}` : `${styles.line}`
                            }
                        ></span>
                        <span
                            className={
                                isActive ? `${styles.line} ${styles.line2}` : `${styles.line}`
                            }
                        ></span>
                        <span
                            className={
                                isActive ? `${styles.line} ${styles.line3}` : `${styles.line}`
                            }
                        ></span>
                    </div>
                </nav>
                <Modal show={show} onHide={closemodal} className={styles.modalnew}>
                    <Modal.Body>
                        <Bitswitspopup formsaspire="popquote" />
                        <span onClick={closemodal} className={styles.cross}>
                            <RxCross2 />
                        </span>
                    </Modal.Body>
                </Modal>
            </header>
        </>
    );
};

export default NewServiceHeaderTwo;