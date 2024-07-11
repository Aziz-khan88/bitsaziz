"use client"
import React, { useEffect, useState } from "react";
// CSS
import stylesjust from "@/styles/Justbuilditlp.module.css";
// Components
import Bannerlpfinal from "../../components/Bannerlpfinal";
import Awardsrecognition from "../../components/Awardsrecognition";
import Nothinglp2 from "../../components/Nothinglp2";
import Innovate from "../../components/Innovate";
import Technologieslp from "../../components/Technologieslp";
import Globallplp6 from "../../components/Globallplp6";
import ProjectProcesslpfinal6 from "../../components/ProjectProcesslpfinal6";
import Justbuilditlp from "../../components/Justbuilditlp";
import Transformideaslp6 from "../../components/Transformideaslp6";
import Formnewlp2lp6 from "../../components/Formnewlp2lp6";
import NewFaqslp from "../../components/NewFaqslp";
import HomeLocationlp from "../../components/HomeLocationlp";
import Expertapplp6 from "../../components/Expertapplp6";

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
      <Bannerlpfinal newHomeBgprops="newHomeBg" />
      {isMobile ? (
        showMobileComponents && (
          <>
            <Awardsrecognition />
            <Nothinglp2 Nothing="lp6final" />
            <Innovate />
            <Expertapplp6 expertapp="expertapp" />
            <ProjectProcesslpfinal6 processclass="process1" />
            <Transformideaslp6 transform="transform" />
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
              slide="slide2lp6"
            />
            <Globallplp6 />
            <Formnewlp2lp6 />
            <NewFaqslp />
            <HomeLocationlp />
          </>
        )
      ) : (
        showDesktopComponents && (
          <>
            <Awardsrecognition />
            <Nothinglp2 Nothing="lp6final" />
            <Innovate />
            <Expertapplp6 expertapp="expertapp" />
            <ProjectProcesslpfinal6 processclass="process1" />
            <Transformideaslp6 transform="transform" />
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
              slide="slide2lp6"
            />
            <Globallplp6 />
            <Formnewlp2lp6 />
            <NewFaqslp />
            <HomeLocationlp />
          </>
        )
      )}
      
    </>
  );
}
