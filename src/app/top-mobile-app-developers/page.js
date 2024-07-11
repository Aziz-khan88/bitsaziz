"use client"

import React, { useEffect, useState } from "react";
// Components
import Appmaking from "../../components/Appmaking";
import Homeslider from "../../components/Homeslider";
import ProjectProcesshome from "../../components/ProjectProcesshome";
import Creative from "../../components/Creative";
import Expertapphome from "../../components/Expertapphome";
import Thrthy from "../../components/Thrthy";
import Everyone from "../../components/Everyone";
import Testimonailslider from "../../components/Testimonailslider";
import Startaproject from "../../components/Startaproject";
import Formnewlpnewhome from "../../components/Formnewlpnewhome";
import SupersaleStiky from "../../components/SupersaleStiky";

export default function Home() {
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
      <Appmaking />
      {isMobile ? (
        showMobileComponents && (
          <>
            <Homeslider />
            <ProjectProcesshome processclass="process" />
            <Creative />
            <Expertapphome expertapp="expertapp" />
            <Thrthy />
            <Everyone />
            <Testimonailslider />
            <Startaproject />
            <Formnewlpnewhome />
            <SupersaleStiky />
          </>
        )
      ) : (
        showDesktopComponents && (
          <>
            <Homeslider />
            <ProjectProcesshome processclass="process" />
            <Creative />
            <Expertapphome expertapp="expertapp" />
            <Thrthy />
            <Everyone />
            <Testimonailslider />
            <Startaproject />
            <Formnewlpnewhome />
            <SupersaleStiky />
          </>
        )
      )}
    </>
  );
}
