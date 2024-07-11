"use client"
import React, { useState, useEffect } from "react";
//components
import Banner from "../../components/HireBanner";
import NewAddress from "../../components/NewAddress";
import HireLogoSlider from "../../components/HireLogoSlider";
import HireWant from "../../components/HireWant";
import HireSteps from "../../components/HireSteps";
import HireBenifits from "../../components/HireBenifits";
import HireChoose from "../../components/HireChoose";
import Technologieswe from "../../components/Technologieswe";
import Homenextproject from "../../components/Homenextproject";
import Faqs from "../../components/NewhomeFaqs";
import HomeLocation from "../../components/HomeLocation";
//images
import banImg from "/public/images/hire-page/hybrid.png";
import step1 from "/public/images/hire-page/hireicon1.png";
import step2 from "/public/images/hire-page/hireicon2.png";
import step3 from "/public/images/hire-page/hireicon3.png";
import step4 from "/public/images/hire-page/hireicon4.png";
import benif1 from "/public/images/hire-page/benifit-icon1.png";
import benif2 from "/public/images/hire-page/benifit-icon2.png";
import benif3 from "/public/images/hire-page/benifit-icon3.png";
import benif4 from "/public/images/hire-page/benifit-icon4.png";
import benif5 from "/public/images/hire-page/benifit-icon5.png";
import benif6 from "/public/images/hire-page/benifit-icon6.png";

export default function HybridDeveloper() {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Banner
        subtitle={<> Hire </>}
        title={<> Hire Hybrid App Developer </>}
        para={
          <>          We deliver great results, on time and on budget. Contact usto start
            talking about your project today!
          </>
        }
        banImg={banImg}
        bannerClass="hybrid"
      />
      <NewAddress />
      <HireLogoSlider />
      <HireWant
        textArray={[
          {
            title: (
              <>Want to Hire <br /> <span>Hybrid App Developers</span>?</>
            ),
            text: [
              <> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                rutrum erat id odio maximus, nec vehicula diam venenatis.
                Integer tempus mattis felis finibus sodales. Donec malesuada
                justo ac mauris varius sagittis. Nunc elit justo, fermentum sed
                diam vel, tincidunt placerat sapien. Cras consectetur ut odio
                nec maximus. Proin pretium tortor est, a sagittis enim rutrum
                sed.
              </>,

              <>              Nunc ligula sapien, viverra a est at, eleifend consequat massa.
                Suspendisse felis mi, posuere in quam nec, egestas blandit
                risus. Nam eleifend malesuada diam, semper eleifend velit porta
                at. Nullam commodo mi tincidunt nulla facilisis, a interdum nibh
                suscipit. Sed at ornare nunc.
              </>,
            ],
          },
        ]}
        contentArray={[
          [
            {
              text: "Upto 60% Cost Saving",
            },
            {
              text: "Non-Disclosure Agreement",
            },
          ],
          [
            {
              text: "Non-Disclosure Agreement",
            },
            {
              text: "Upto 2X less time",
            },
          ],
        ]}
        items={[
          {
            title: "Full-Time Hiring",
            description: "Works only for you.",
            workingHours: "8 hours/day, 5 days/week",
          },
          {
            title: "Part-Time Hiring",
            description: "Prefer better half for your business.",
            workingHours: "4 hours/day, 5 days/week",
          },
          {
            title: "Hourly Hiring",
            description: "Need a few hours of attention to the work.",
            workingHours: "5 days/week",
          },
          {
            title: "Contractual Hiring",
            description: "Agree on your condition when needed.",
            workingHours: "8 hours/day, 5 days/week",
          },
        ]}
      />
      <HireSteps
        textArray={[
          {
            title: <>How to Hire Hybrid Programmer</>,
            text: [
              <>              You Click It, We Gear Up. Our process starts as soon as you send
                us a query.
              </>,
            ],
          },
        ]}
        stepsArray={[
          {
            step: "Step 01",
            imageSrc: step1,
            description: "Send us a request",
          },
          {
            step: "Step 02",
            imageSrc: step2,
            description: "Select the resume that fits for you",
          },
          {
            step: "Step 03",
            imageSrc: step3,
            description: "Take interview session of selected geeks",
          },
          {
            step: "Step 04",
            imageSrc: step4,
            description: "Start the rollercoaster of your project",
          },
        ]}
      />
      <HireBenifits
        textArray={[
          {
            title: (
              <>              Benefits to Hire Remote <br />
                <span> Hybrid App Developer</span>
              </>
            ),
          },
        ]}
        tabsData={[
          {
            id: 1,
            title: "Custom Hybrid App Development",
            content: {
              imageSrc: benif1,
              heading:
                "Hire Hybrid App Programmer to Gear-Up Your App with Influential Technologies and Methodologies",
              text: [
                "Hiring our extravagant Hybrid app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and Hybrid app solutions suitable to your business.",

                "We are liable to your queries and will provide you with the most decent Hybrid app development services yet classy for the users. Hire Hybrid developer BitsWits team to keep you buoyant whole app development cycle.",

                "Our Hybrid app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.",

                "In the past 10 years, we have excelled our skills and worked on more than 1000+ Hybrid app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our Hybrid programmer’s aim.",

                "Hire Hybrid app developer  to take the best service to your workplace.",
              ],
            },
          },
          {
            id: 2,
            title: "Third-Party Integration",
            content: {
              imageSrc: benif2,
              heading:
                "Hire Third-Party Integration Programmer to Gear-Up Your App with Influential Technologies and Methodologies",
              text: [
                "Hiring our extravagant Hybrid app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and Hybrid app solutions suitable to your business.",

                "We are liable to your queries and will provide you with the most decent Hybrid app development services yet classy for the users. Hire Hybrid developer BitsWits team to keep you buoyant whole app development cycle.",

                "Our Hybrid app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.",

                "In the past 10 years, we have excelled our skills and worked on more than 1000+ Hybrid app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our Hybrid programmer’s aim.",

                "Hire Hybrid app developer  to take the best service to your workplace.",
              ],
            },
          },
          {
            id: 3,
            title: "Wearable Integration",
            content: {
              imageSrc: benif3,
              heading:
                "Hire Wearable Integration Programmer to Gear-Up Your App with Influential Technologies and Methodologies",
              text: [
                "Hiring our extravagant Hybrid app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and Hybrid app solutions suitable to your business.",

                "We are liable to your queries and will provide you with the most decent Hybrid app development services yet classy for the users. Hire Hybrid developer BitsWits team to keep you buoyant whole app development cycle.",

                "Our Hybrid app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.",

                "In the past 10 years, we have excelled our skills and worked on more than 1000+ Hybrid app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our Hybrid programmer’s aim.",

                "Hire Hybrid app developer  to take the best service to your workplace.",
              ],
            },
          },
          {
            id: 4,
            title: "E-Commerce App Development",
            content: {
              imageSrc: benif4,
              heading:
                "Hire Hybrid E-Commerce App Programmer to Gear-Up Your App with Influential Technologies and Methodologies",
              text: [
                "Hiring our extravagant Hybrid app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and Hybrid app solutions suitable to your business.",

                "We are liable to your queries and will provide you with the most decent Hybrid app development services yet classy for the users. Hire Hybrid developer BitsWits team to keep you buoyant whole app development cycle.",

                "Our Hybrid app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.",

                "In the past 10 years, we have excelled our skills and worked on more than 1000+ Hybrid app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our Hybrid programmer’s aim.",

                "Hire Hybrid app developer  to take the best service to your workplace.",
              ],
            },
          },
          {
            id: 5,
            title: "Custom API Integration",
            content: {
              imageSrc: benif5,
              heading:
                "Hire Custom API Integration Programmer to Gear-Up Your App with Influential Technologies and Methodologies",
              text: [
                "Hiring our extravagant Hybrid app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and Hybrid app solutions suitable to your business.",

                "We are liable to your queries and will provide you with the most decent Hybrid app development services yet classy for the users. Hire Hybrid developer BitsWits team to keep you buoyant whole app development cycle.",

                "Our Hybrid app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.",

                "In the past 10 years, we have excelled our skills and worked on more than 1000+ Hybrid app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our Hybrid programmer’s aim.",

                "Hire Hybrid app developer  to take the best service to your workplace.",
              ],
            },
          },
          {
            id: 6,
            title: "Hybrid App Development",
            content: {
              imageSrc: benif6,
              heading:
                "Hire Hybrid App Programmer to Gear-Up Your App with Influential Technologies and Methodologies",
              text: [
                "Hiring our extravagant Hybrid app developer will bring an extra edge to your business by designing exceptionally remarkable apps. Once you choose our services, all your burden is ours and we assure you the best iPad and Hybrid app solutions suitable to your business.",

                "We are liable to your queries and will provide you with the most decent Hybrid app development services yet classy for the users. Hire Hybrid developer BitsWits team to keep you buoyant whole app development cycle.",

                "Our Hybrid app development cycle includes a diverse range of meticulously design strategies that brings 100% client satisfaction. We include our clients in the development process to reduce the error rate by up to 95%. Yet we make sure that our post-development services always leave clients with happy faces.",

                "In the past 10 years, we have excelled our skills and worked on more than 1000+ Hybrid app development projects. Offering the best quality is our motto. Delivering innovative and awestruck apps is our Hybrid programmer’s aim.",

                "Hire Hybrid app developer  to take the best service to your workplace.",
              ],
            },
          },
        ]}
      />
      <HireChoose
        textArray={[
          {
            title: (
              <>Why should you Hire <br /> <span> Hybrid App Developer</span>
                Online?
              </>
            ),
          },
        ]}
        choosesArray={[
          {
            number: "01",
            title: (
              <>
                Happy <br /> Coders
              </>
            ),
            description:
              "Hire the web programmers and app programmers to your working place. It’s pretty bond building and pleasure for us to assist you.",
          },
          {
            number: "02",
            title: (
              <>
                Your Ideas <br /> Are Secret
              </>
            ),
            description:
              "We would love to sign an NDA with you. This states that your ideas are totally safe and it’s secret between us.",
          },
          {
            number: "03",
            title: (
              <>
                You Owns <br /> The Code
              </>
            ),
            description:
              "With the fantastic project, the source code will also be given to you. You have a complete right on it and will never use by us.",
          },
          {
            number: "04",
            title: (
              <>
                We’re Always <br /> Open For You
              </>
            ),
            description:
              "Connect us through various channels. We are happy to assist you at any time.",
          },
          {
            number: "05",
            title: (
              <>
                Happy <br /> Coders
              </>
            ),
            description:
              "When comes to hire mobile app developers and web app developer, we have a happy gang of coders who frame every idea into reality. They work in synchronisation with clients.",
          },
          {
            number: "06",
            title: (
              <>
                No Invisible <br /> Charges
              </>
            ),
            description:
              "We never prefer any extra cost apart from the quoted price. We believe to stick on the quoted budget, in order to make the transparency between our client.",
          },
          {
            number: "07",
            title: (
              <>
                Keep An Eye <br /> On Your Project
              </>
            ),
            description:
              "Get the regular updates in the form of a report to avoid any mistakes. Likewise, you can trace the progress in your project.",
          },
          {
            number: "08",
            title: (
              <>
                Secure <br /> Alert
              </>
            ),
            description:
              "We assure 100% security of data at our working centre. The systems and channels are encrypted strongly to avoid any data breaching.",
          },
          {
            number: "09",
            title: (
              <>
                Rocket Speed <br /> Delivery
              </>
            ),
            description:
              "We always burn candles at both the ends to meet up your delivery date. On-time delivery is assured by our team.",
          },
          {
            number: "10",
            title: (
              <>
                Bug-Free <br /> Solution
              </>
            ),
            description:
              "Our QA team test the project from every possible end. We make sure the deliverable is bug-free and secure from every aspect.",
          },
          {
            number: "11",
            title: (
              <>
                Scale <br /> The Team
              </>
            ),
            description:
              "Tell us, in case you want to add or decrease the number of hired developers. We will take action at its quick.",
          },
          {
            number: "12",
            title: (
              <>
                We’re <br /> With You
              </>
            ),
            description:
              "Our experts are always there to help you during the development cycle and after that. We are always open to sort your queries.",
          },
        ]}
      />
      <Technologieswe />
      <Homenextproject title="Brace yourself for an App-venture!" />
      <Faqs />
      <HomeLocation />

    </>
  );
}
