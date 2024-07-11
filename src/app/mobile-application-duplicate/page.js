"use client"

import React, { useEffect, useState } from "react";
//components
import NewMblBannerduplicate from "../../components/NewMblBannerduplicate";
import NewHomeAbout from "../../components/NewHomePageAbout";
import NewMblWho from "../../components/NewMblWho";
import NewMblWhat from "../../components/NewMblWhat";
import Justbuildit from "../../components/Justbuildit";
import NewMblServices from "../../components/NewMblServices";
import ServisesWhy from "../../components/ServisesWhy";
import ServicesPortfolio from "../../components/ServicesPortfolio";
import Capabilities from "../../components/Capabilities";
import Newsuccess from "../../components/NewMblSuccess";
import NewHomeGlobal from "../../components/NewHomeGlobal";
import ClientsThink2 from "../../components/ClientsThink2";
import Homenextproject from "../../components/Homenextproject";
import Technologieswe from "../../components/NewMblTechnologiesWe";
import Nextproject2 from "../../components/Nextproject2";
import ServicesFaqs from "../../components/ServicesFaqs";
import Contact2 from "../../components/Contact2";
//Icons
import icon23 from "/public/images/fymobile/1.png";
import icon24 from "/public/images/fymobile/2.png";
import icon25 from "/public/images/fymobile/3.png";
import icon26 from "/public/images/fymobile/4.png";
import icon27 from "/public/images/fymobile/5.png";
import icon28 from "/public/images/fymobile/6.png";

export default function mobileApplication() {
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <NewMblBannerduplicate />
      <NewHomeAbout />
      <NewMblWho />
      <NewMblWhat />
      <Justbuildit />
      <NewMblServices />
      <ServisesWhy
        title={
          <>
            <h4 className="font20 font-bold text-white text-center">
              Why BitsWits?
            </h4>
          </>
        }
        subtitle={
          <>
            <h2 className="grdiant f-80 font-bold text-center">
              Precision, Performance <br /> & Perfection.
            </h2>
          </>
        }
        sub1="Why Choose BitsWits for Building Mobile Applications?"
        sub2="Building your mobile app acts like a technological asset that improves the services of your business, attracting more customers, boosting its success, and letting you shape its trajectory."
        whyData={[
          {
            icon: icon23,
            title: "Greater Customer Reach",
            para: "Mobile apps allow you to connect with customers anywhere and anytime worldwide.",
          },
          {
            icon: icon24,
            title: "Simplified Payments",
            para: "Mobile applications allow users to instantly pay, donate, and order without any hassle.",
          },
          {
            icon: icon25,
            title: (
              <>
                Drive <br /> Sales
              </>
            ),
            para: "Mobile applications provide a convenient way for customers to purchase your products and services on the go.",
          },
          {
            icon: icon26,
            title: (
              <>
                Customer <br /> Loyalty
              </>
            ),
            para: "Mobile apps foster ongoing engagement and allow you to deliver customized offers and experiences.",
          },
          {
            icon: icon27,
            title: "Competitive Advantage",
            para: "Innovative mobile apps set you apart, opening new opportunities to engage users, collect data, improve customer service, and drive revenue.",
          },
          {
            icon: icon28,
            title: "Improved Customer Service",
            para: "Features like in-app chat and customer support assist in resolving issues while enhancing customer satisfaction.",
          },
        ]}
      />
      <ServicesPortfolio
        assignClass="lpFolio"
        title={
          <>
            Showcasing Our <span className="grdiant">Creative Vision</span>
          </>
        }
      />
      <Capabilities />
      <div className="status">
        <Newsuccess
          subtitle="Ready For Success?"
          maintitle="Brace Yourself for What Happens Next"
          successSteps={[
            {
              number: "01",
              title: "Talk To Our Experts",
              text: "Contact us without obligation by email or phone and secure your free consultation.",
              buttonText: "Connect Now!",
              link: "#",
            },
            {
              number: "02",
              title: "Get A Quote",
              text: "Get an exact cost breakdown structure of your app.",
              buttonText: "Chat Now!",
              link: "#",
            },
            {
              number: "03",
              title: "Build An MVP",
              text: "Contact us without obligation by email or phone and secure your free consultation.",
              buttonText: "Call Now!",
              link: "#",
            },
          ]}
        />
      </div>
      <NewHomeGlobal />
      <ClientsThink2 />
      <Nextproject2 />
      <Technologieswe />
      <Homenextproject />
      <ServicesFaqs
        faqsData={[
          {
            question: "What is mobile application development?",
            answer: (
              <>
                Mobile application development creates software applications
                that run on mobile devices and other connected devices, such as
                wearables, automotive systems, cameras, and more. It requires
                skill sets in design, development, testing, deployment, and
                maintenance to create innovative user experiences across
                multiple platforms. With that being said, businesses hire mobile
                app developers to stay ahead of the competition and deliver
                market-leading products to their customers.
              </>
            ),
          },
          {
            question: "Does BitsWits offer hybrid and native app development?",
            answer: (
              <>
                BitsWits has a team of the best mobile app developers expert in
                providing customized development solutions, whether Hybrid or
                Native mobile application development is required. Our
                developers always come up with creative and innovative app ideas
                that are best in your interest.
              </>
            ),
          },
          {
            question:
              "Why choose BitsWits as a mobile app development company?",
            answer: (
              <>
                BitsWits is a top mobile app development company due to its
                decent clientele, commitment to excellence, and innovative
                mobile app development solutions. We enjoy the top spot in the
                application development industry with affordable packages and
                professional services.
              </>
            ),
          },
          {
            question: "Is there any customer support available?",
            answer: (
              <>
                Yes, BitsWits offers 24/7 incredible customer support, even
                post-mobile apps development USA. We do not let our customers
                hang in the middle with any query that may bring trouble to
                them.
              </>
            ),
          },
          {
            question: "How to choose a mobile app development company?",
            answer: (
              <>
                Checking client portfolios, communicating your requirements
                clearly, and considering the development cost will help you
                choose the best mobile app development agency. BitsWits
                practices open communication so that the solution to your query
                is answered adequately to provide you with the utmost
                satisfaction.
              </>
            ),
          },
          {
            question: "What industries does BitsWits cater to?",
            answer: (
              <>
                At BitsWits, we specialize in developing innovative and
                efficient mobile applications for various industries across the
                United States. We offer customized mobile solutions from
                e-commerce to healthcare and gaming to meet each client's
                specific requirements and business. We are a mobile application
                development company dedicated to creating apps that cater to
                each client's unique needs.
              </>
            ),
          },
        ]}
      />
      <Contact2 />

    </>
  );
}
