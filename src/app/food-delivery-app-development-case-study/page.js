"use client"
import React, { useState, useEffect } from 'react';
//components
import Banner from '../../components/CaseBanner';
import CaseGlamic from '../../components/CaseGlamic';
import CaseWants from '../../components/CaseWants';
import CaseGoal from '../../components/CaseGoal';
import CaseOvercoming from '../../components/CaseOvercoming';
import CaseAnimate from '../../components/CaseAnimate';
import CaseServices from '../../components/CaseServices';
import CaseChoose from '../../components/CaseChoose';
import CaseGlobal from '../../components/CaseGlobal';
import CaseCapabilities from '../../components/CaseCapabilities';
import Technologieswe from '../../components/Technologieswe';
import Nothing from '../../components/Nothing';
import HomeLocation from '../../components/HomeLocation';
//images
import banLogo from '/public/images/case-studies/case-crave/banner-logo.png';
import banImg from '/public/images/case-studies/case-crave/banner-img.png';
import slide1 from '/public/images/case-studies/case-crave/slide1.png';
import slide2 from '/public/images/case-studies/case-crave/slide2.png';
import slide3 from '/public/images/case-studies/case-crave/slide3.png';
import slide4 from '/public/images/case-studies/case-crave/slide4.png';
import features from '/public/images/case-studies/case-crave/features.png';
import faced from '/public/images/case-studies/case-crave/faced.png';
import tackling from '/public/images/case-studies/case-crave/tackling.png';
import goalImg from '/public/images/case-studies/case-crave/goal.png';
import animiImg1 from '/public/images/case-studies/case-crave/animi1.png';
import animiImg2 from '/public/images/case-studies/case-crave/animi2.png';
import animiImg3 from '/public/images/case-studies/case-crave/animi3.png';
import service1 from '/public/images/case-studies/case-crave/service1.png';
import service2 from '/public/images/case-studies/case-crave/service2.png';
import service3 from '/public/images/case-studies/case-crave/service3.png';
import service4 from '/public/images/case-studies/case-crave/service4.png';
import service5 from '/public/images/case-studies/case-crave/service5.png';
import chosImg1 from '/public/images/lp-images/icon1.png';
import chosImg2 from '/public/images/lp-images/icon2.png';
import chosImg3 from '/public/images/lp-images/icon3.png';
import chosImg4 from '/public/images/lp-images/icon4.png';
import chosImg5 from '/public/images/lp-images/icon5.png';
import chosImg6 from '/public/images/lp-images/icon6.png';
import chosImg7 from '/public/images/lp-images/icon7.png';
import chosImg8 from '/public/images/lp-images/icon8.png';
import chosImg9 from '/public/images/lp-images/icon9.png';


export default function FoodDelivery() {

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
        banLogo={banLogo}
        title={<> Explore Flavors and Savory at Your Fingertips! </>}
        banImg={banImg}
        bannerClass='cravecourier'
      />
      <CaseGlamic
        textArray1={[
          {
            title: <>Food Delivery <span>Solution</span></>,
            text: [
              <>
                <i>Crave Courier</i>, a BitsWits creation, is a food delivery app. It streamlines the process: select from local eateries, place your order, and savor restaurant-quality dishes brought straight to you. A convenient, fuss-free solution for your dining desires.
              </>,
              <>
                With a user-friendly interface and the ability to save preferred meal choices, we've created an efficient platform for a superior eating experience.
              </>
            ]
          },
        ]}
        textArray2={[
          {
            title: <>Looking For Something Similar?</>,
            text: <>Our consultants are ready to hear your idea. Request a free consultation with our app experts and transform it into a digital reality.</>,
          },
        ]}
        slide1={slide1}
        slide2={slide2}
        slide3={slide3}
        slide4={slide4}
        textArray3={[
          {
            title: <>The <span>Starting</span> Point</>,
            text: [
              <>Crave Courier began when a group of food lovers saw how busy life can be in a big city. They wanted to make it easy for people to enjoy delicious food from local restaurants without the hassle. So, they came up with the idea of an app that lets you pick what you want to eat, place your order, and have it delivered right to your door.</>,
              <>To create a user-friendly and highly convenient app for an average person, the founders of Crave Courier recognized the need for professional expertise and they wisely brought BitsWits into the fold, for design, development, and the integration of AI technology.</>,
            ],
          },
        ]}
      />
      <CaseWants
        sections1={[
          {
            title: <> App-Etizers & Main <br /> <span>Features</span> </>,
            textArray: [
              'Restaurant listings',
              'Personalized user profiles',
              'Live order tracking',
              'Voice-activated order placement',
              'Highly functional native app',
              'Instant chat support',
              'Secure and diverse payment methods',
              'AI-powered route optimization',
              'AI-driven smart search and recommendations',
            ],
          }
        ]}
        wantImg1={features}
        sections2={[
          {
            title: <> A Closer Look at Project <br /> Challenges <span>We Faced</span> </>,
            textArray: [
              'Feedback Loop Implementation.',
              'Ensuring high voice recognition accuracy.',
              'Responsiveness of real-time chat support.',
              'Computational complexities in AI algorithms.',
              'Database management while maintaining efficient performance.',
            ],
          }
        ]}
        wantImg2={faced}
        sections3={[
          {
            title: <> Trouble <span>Tackling</span> </>,
            textArray: [
              'Established a dedicated feedback mechanism for users to report issues.',
              'Implemented load balancing to distribute server load effectively.',
              'Utilized parallel processing to enhance AI algorithm efficiency.',
              'Implemented data caching strategies to reduce database load.',
              'Invested in advanced voice recognition technology and speech-to-text conversion.',
            ],
          },
        ]}
        wantImg3={tackling}
        lastPara={<> BitsWits' proactive approach to problem solving and constant commitment to technology refinement played an important role in ensuring the efficiency and user satisfaction. Through our vigilant problem-solving mindset, we promptly sought solutions and made sure Crave Courier stands as a leading app in the food delivery industry. </>}
      />
      <CaseGoal
        golImg={goalImg}
        title={<> Start Your App Development Journey <br /> Effortlessly; Let <span>Bitswits Be Your <br /> Savior</span> With A Quick Tap! </>}
        goalClass='cravecourier'
      />
      <CaseOvercoming
        appData={[
          {
            title: (<> Overcoming <br /> Development Challenges </>),
            description: 'We bring together a team of highly skilled app developers, each with their unique expertise and experiences, to tackle complex development problems efficiently. Our team breaks down challenges into manageable components and implements innovative solutions to ensure successful project outcomes.',
          },
          {
            title: (<> Hybrid <br /> Development Excellence </>),
            description: (<> Our approach to app development is anything but one-size-fits-all. With a hybrid approach, we strike a balance between predictability and adaptability. For projects with clearly defined timeframes, we employ a waterfall approach to meet the deadlines. This helps us meet the compliance requirements and regulatory standards. </>),
          },
          {
            title: (<> On-Time Delivery - <br /> Every Time </>),
            description: 'Completing tasks within a timeframe is a reflection of our professionalism, reliability, and dedication to client satisfaction. Upon onboarding, we set realistic and achievable deadlines, define clear milestones, and allocate resources accordingly. Project managers at BitsWits use tools to track progress and ensure the project remains on schedule.',
          },
          {
            title: (<> Erasing <br /> Time-zone Barriers </>),
            description: (<> Our project managers are trained to remain considerate about time-zone differences, they take into account clients' availability and preferences. We prioritize cultural sensitivity, our developers made a system that shows clients' active hours along with their current location in google maps, and holidays around the globe. </>),
          },
          {
            title: (<> Efficient <br /> Communication </>),
            description: 'BitsWits offers round-the-clock, efficient communication to clients through instant chat, messages, and calls. Our commitment to 24/7 availability ensures that clients can reach out at their convenience. Our instant chat is equipped with end-to-end encryption, ensuring privacy and safeguarding sensitive information in every interaction.',
          },
          {
            title: (<> Addressing <br /> Payment Disputes </>),
            description: (<> At BitsWits, we rely on the Stripe payment method for all transactions. We've developed an automated dispute resolution portal to efficiently manage payment issues. Our portal also provides clear visibility into the different stages of reported payment disputes and their current statuses. </>),
          },
        ]}
      />
      <CaseAnimate
        animiImg1={animiImg1}
        animiImg2={animiImg2}
        animiImg3={animiImg3}
      />
      <CaseServices
        title={<> <span>Services:</span> For </>}
        point1={<> Native Mobile App Development </>}
        point2={<> Stunning UI/UX Design </>}
        point3={<> Consumer/ Service Provider Interface </>}
        service1={service1}
        service2={service2}
        service3={service3}
        service4={service4}
        service5={service5}
      />
      <CaseChoose
        title={<> <span>Why Trust <br /> BitsWits</span> with App <br /> Development? </>}
        text1={<> We stand as the primary choice for mobile app development, exemplifying excellence in a dynamic field. Our team combines creativity and the most suitable tech stack to develop customized app solutions. </>}
        text2={<> Our track record of delivering on time and within budget, coupled with a commitment to staying ahead of industry trends, sets us apart as the best partner for mobile app development. </>}
        items={[
          {
            image: chosImg1,
            text: (<> Experienced  <br /> Professionals </>)
          },
          {
            image: chosImg2,
            text: (<> On-Time <br /> Delivery </>)
          },
          {
            image: chosImg3,
            text: (<> Cost-Effective <br /> Solutions </>)
          },
          {
            image: chosImg4,
            text: (<> Scalable and <br /> Secure Apps </>)
          },
          {
            image: chosImg5,
            text: (<> User-Centric <br /> Design </>)
          },
          {
            image: chosImg6,
            text: (<> Customized <br /> Development </>)
          },
          {
            image: chosImg7,
            text: (<> Error-Free <br /> Delivery </>)
          },
          {
            image: chosImg8,
            text: (<> Transparent <br /> Communication </>)
          },
          {
            image: chosImg9,
            text: (<> Support and <br /> Maintenance </>)
          }
        ]}
      />
      <CaseGlobal />
      <CaseCapabilities />
      <Nothing Nothing="nothingCase" />
      <Technologieswe />
      <HomeLocation />

    </>
  )
}
