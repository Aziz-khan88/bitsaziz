"use client"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Analytics } from '@vercel/analytics/react';
//
import Header from "../components/NewHeader";
import HeaderMbl from "../components/HeaderMbl";
import Headerlp from "../components/Headerlp";
import Headerlphome from "../components/Headerlphome";
import NewServiceHeader from "../components/NewServiceHeader/NewServiceHeader";
import NewHeaderMbl from "../components/NewMobileApp/NewHeaderMbl/NewHeaderMbl";
import VideoHeader from "../components/video-explainer/Header/Header";
import EcommerceBanner from "../components/EcommerceBanner";
import Footer from "../components/Footer";
import Footernewlp from "../components/Footernewlp";
import Footernewdesign from "../components/Footernewdesign";
import VideoFooter from "../components/video-explainer/Footer/Footer";
import EcommerceFooter from "../components/EcommerceFooter";
//
import Cursor from "../components/Cursor";
import Skicky from "../components/Skicky";
import Pixel from "../components/Pixel";
import Pixel2 from "../components/Pixel2";
import MetaData from "../components/MetaData";
import FooterNewLps from "../components/FooterNewLps";
import NewServiceHeaderTwo from "../components/servicePage/NewServiceHeaderTwo/NewServiceHeaderTwo";
import NewMobileHeader from "../components/NewMobileApp/Header/NewMobileHeader";

const ConditionalLayout = ({ children }) => {
    const pathname = usePathname();
    // =============== Mouse ===============
    const mouse =
        pathname == "/" ||
        pathname == "/about-us" ||
        pathname == "/our-work" ||
        pathname == "/privacy-policy" ||
        pathname == "/term-and-condition" ||
        pathname == "/ios-app-development" ||
        pathname == "/android-application-development" ||
        pathname == "/augmented-reality-apps-development-company" ||
        pathname == "/artificial-intelligence-development-company" ||
        pathname == "/cross-platform-app-development" ||
        pathname == "/web-app-development" ||
        pathname == "/react-native-mobile-development" ||
        pathname == "/hybrid-mobile-apps-development" ||
        pathname == "/custom-mobile-development" ||
        pathname == "/native-mobile-development" ||
        pathname == "/flutter-mobile-development" ||
        pathname == "/mobile-application" ||
        pathname == "/mobile-application-usa" ||
        pathname == "/mobile-application-huston" ||
        pathname == "/mobile-application-newyork" ||
        pathname == "/mobile-application-los-angeles" ||
        pathname == "/mobile-application-duplicate" ||
        pathname == "/mobile-application-duplicate2" ||
        pathname == "/top-mobile-app-development-company" ||
        pathname == "/mobile-app-development-company-lp2" ||
        pathname == "/game-application-development" ||
        pathname == "/nft-game-development" ||
        pathname == "/2d-game-development-company" ||
        pathname == "/3d-game-development-company" ||
        pathname == "/blockchain-game-development" ||
        pathname == "/travel-app-development-case-study" ||
        pathname == "/real-estate-app-development-case-study" ||
        pathname == "/clothing-marketplace-app-development-case-study" ||
        pathname == "/social-app-development-case-study" ||
        pathname == "/automobile-repair-app-development-case-study" ||
        pathname == "/marketing-partnership-app-development-case-study" ||
        pathname == "/healthcare-app-development-case-study" ||
        pathname == "/ride-app-development-case-study" ||
        pathname == "/fitness-app-development-case-study" ||
        pathname == "/hiring-app-development-case-study" ||
        pathname == "/music-app-development-case-study" ||
        pathname == "/handyman-on-demand-app-development-case-study" ||
        pathname == "/food-delivery-app-development-case-study" ||
        pathname == "/ios-developer" ||
        pathname == "/android-developer" ||
        pathname == "/hybrid-developer" ||
        pathname == "/native-developer" ||
        pathname == "/mobile-developer" ||
        pathname == "/top-ecommerce-app-development-company" ||
        pathname == "/top-mobile-app-development-company" ||
        pathname == "/mobile-app-development-services" ||
        pathname == "/create-a-mobile-app" ||
        pathname == "/top-mobile-app-developers";
    // =======================================
    const [showPixels, setShowPixels] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowPixels(true);
        }, 10000);
        return () => clearTimeout(timeout);
    }, []);
    // =======================================
    return (
        <>
            {showPixels && (
                <>
                    <MetaData />
                    <Pixel />
                    <Pixel2 />
                    <Analytics />
                </>
            )}
            {
                pathname == "/mobile-app-development-company-lp2" ? <Headerlp /> :
                    pathname == "/top-mobile-app-developers" ? <Headerlphome /> :
                        pathname == "/top-ecommerce-app-development-company" ? <EcommerceBanner /> :
                            pathname == "/video-explainer-lp" ? <VideoHeader /> :
                                pathname == "/lp/mobile-app-development-services" ? <>
                                    <NewMobileHeader />
                                    <NewHeaderMbl />
                                </> :
                                    pathname == "/bitswits-services-page-1" ? <>
                                        <NewServiceHeaderTwo />
                                        <NewHeaderMbl />
                                    </> :
                                        pathname == "/thankyou-pagenew" ? <>
                                            <NewServiceHeaderTwo />
                                            <NewHeaderMbl />
                                        </> :
                                            pathname == "/bitswits-services-page-2" ? <>
                                                <NewServiceHeader />
                                                <HeaderMbl />
                                            </> :
                                                pathname == "/bitswits-services-page-3" ? <>
                                                    <NewServiceHeaderTwo />
                                                    <NewHeaderMbl />
                                                </> :
                                                    pathname == "/meet-our-team" ? null :
                                                        <>
                                                            <Header />
                                                            <HeaderMbl />
                                                        </>
            }
            {mouse && <Cursor />}
            {
                pathname == "/top-mobile-app-developers" ? '' :
                    pathname == "/top-ecommerce-app-development-company" ? '' :
                        pathname == "/lp/mobile-app-development-services" ? '' :
                            <Skicky />
            }
            {children}
            {
                pathname == "/mobile-app-development-company-lp2" ? <Footernewlp /> :
                    pathname == "/top-mobile-app-developers" ? <Footernewdesign /> :
                        pathname == "/top-ecommerce-app-development-company" ? <EcommerceFooter /> :
                            pathname == "/video-explainer-lp" ? <VideoFooter /> :
                                pathname == "/lp/mobile-app-development-services" ? <FooterNewLps /> :
                                    pathname == "/meet-our-team" ? null :
                                        pathname == "/calculator" ? null :
                                            <Footer />
            }
        </>
    )
}

export default ConditionalLayout