"use client"
import React, { useEffect, useState } from "react";
// CSS 
import styles from "@/styles/bannerlp6.module.css";
import stylesjust from "@/styles/Justbuilditlp.module.css";
// Components
import Bannerlp6 from "../../components/Bannerlp6";
import People from "../../components/People";
import HomeBannerSliderlp from "../../components/HomeBannerSliderlp";
import LpForm6 from "../../components/LpForm6";
import Nothing from "../../components/Nothing";
import NewMaintain6Lp from "../../components/NewMaintain6Lp";
import WeworkLp from "../../components/new-home-page-fy/WeworkLphome";
import StartupsLp from "../../components/StartupsLp6";
import ProjectProcess from "../../components/ProjectProcessLp6";
import LpChoose from "../../components/LpChoose";
import Technologieslp from "../../components/Technologieslp";
import Justbuilditlp from "../../components/Justbuilditlp";
import Globallplp6 from "../../components/Globallplp6";
import Partnerships from "../../components/Partnerships";
import Formnewlp from "../../components/Formnewlp";
import NewFaqslp from "../../components/NewFaqslp";
import HomeLocationlp from "../../components/HomeLocationlp";

export default function gamedevelopmentcompany() {
  const [showDesktopComponents, setShowDesktopComponents] = useState(false);
  const [showMobileComponents, setShowMobileComponents] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Show desktop components after 1 second
    const desktopTimer = setTimeout(() => {
      setShowDesktopComponents(true);
    }, 500);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(desktopTimer);
    };
  }, []);

  useEffect(() => {
    const handleTouchOrScroll = () => {
      setShowMobileComponents(true);
      // Remove event listeners after mobile components are shown
      window.removeEventListener("scroll", handleTouchOrScroll);
      window.removeEventListener("touchstart", handleTouchOrScroll);
    };

    // Add event listeners for touch and scroll events
    window.addEventListener("scroll", handleTouchOrScroll);
    window.addEventListener("touchstart", handleTouchOrScroll);

    return () => {
      window.removeEventListener("scroll", handleTouchOrScroll);
      window.removeEventListener("touchstart", handleTouchOrScroll);
    };
  }, []);

  return (
    <>
      <Bannerlp6
        title={
          <>
            <h1 className={`${styles.develop} text-center font50 font-bold mb-3`}>
              Create a Mobile App That Stands Out
            </h1>
          </>
        }
        para={
          <>
            <p className="font20 white center mb-3">
              Beautiful, High-Performance Apps Delivered <span className={styles.txtDec}>ON TIME</span> and <span className={styles.txtDec}>WITHIN BUDGET</span>
            </p>
          </>
        }
        newHomeBgprops="newHomeBg"
      />
      <People People="people" />
      {isMobile ? (
        showMobileComponents && (
          <>
            <HomeBannerSliderlp />
            <LpForm6 />
            <Nothing Nothing="nothingLp6" />
            <NewMaintain6Lp />
            <WeworkLp wework="weworkLpnewhomefy" />
            <StartupsLp startups="startups" />
            <ProjectProcess
              processclass="processLp6"
              title="Explore Our App Development Journey"
              desc="We believe in efficiency without compromising quality. Our streamlined process for app development is <br /> designed to be transparent and collaborative, ensuring your vision comes to life exactly as you imagined."
            />
            <LpChoose transform="transformlp" />
            <Technologieslp />
            <Justbuilditlp
              title={
                <>
                  <h2 className={stylesjust.just}>Just Build It.</h2>
                </>
              }
              para={
                <>
                  <h3 className={stylesjust.develop}>
                    Design, Develop, and Grow with BitsWits.
                  </h3>
                </>
              }
              slide="slide1lp"
            />
            <Globallplp6 />
            <Partnerships />
            <Formnewlp />
            <NewFaqslp />
            <HomeLocationlp />
          </>
        )
      ) : (
        showDesktopComponents && (
          <>
            <HomeBannerSliderlp />
            <LpForm6 />
            <Nothing Nothing="nothingLp6" />
            <NewMaintain6Lp />
            <WeworkLp wework="weworkLpnewhomefy" />
            <StartupsLp startups="startups" />
            <ProjectProcess
              processclass="processLp6"
              title="Explore Our App Development Journey"
              desc="We believe in efficiency without compromising quality. Our streamlined process for app development is <br /> designed to be transparent and collaborative, ensuring your vision comes to life exactly as you imagined."
            />
            <LpChoose transform="transformlp" />
            <Technologieslp />
            <Justbuilditlp
              title={
                <>
                  <h2 className={stylesjust.just}>Just Build It.</h2>
                </>
              }
              para={
                <>
                  <h3 className={stylesjust.develop}>
                    Design, Develop, and Grow with BitsWits.
                  </h3>
                </>
              }
              slide="slide1lp"
            />
            <Globallplp6 />
            <Partnerships />
            <Formnewlp />
            <NewFaqslp />
            <HomeLocationlp />
          </>
        )
      )}
    </>
  );
}
