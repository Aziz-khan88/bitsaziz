"use client"
import Script from "next/script";
import React, { useEffect, useState } from "react";
import Image from "next/image";
//Components
import Banner from "../../components/new-blockchain-page-fy/BlockchainBanner";
import Provideservices from "../../components/customwebdevelopment/Provideservices";
import SmartContract from "../../components/customwebdevelopment/SmartContract";
import SmartTech from "../../components/customwebdevelopment/SmartTech";
import Technology from "../../components/customwebdevelopment/Technology";
import Justbuildit from "../../components/Justbuildit";
import Globallplp6 from "../../components/Globallplp6";
import Formnewlp from "../../components/Formnewlp";
import HomeBannerSliderlp from "../../components/HomeBannerSliderlp";
import LpForm from "../../components/LpFormprops";
import Nothing from "../../components/Nothing";
import People from "../../components/People";
import Partnerships from "../../components/Partnerships";
import ServicesFaqs from "../../components/ServicesFaqs";
import HomeLocation from "../../components/HomeLocation";
import ProjectProcess from "../../components/ProjectProcessLp6props";
// Images
import BannerImage from "@/public/customwebapp/mobile.png";
import bestgloba11 from "/public/servnew/custom/1.png";
import bestgloba12 from "/public/servnew/custom/2.png";
import bestgloba13 from "/public/servnew/custom/3.png";
import bestgloba14 from "/public/servnew/custom/4.png";
import bestgloba15 from "/public/servnew/custom/5.png";
import peo from "/public/servnew/peo.png";
import chatbots1 from "/public/servnew/customweb/1.png";
import chatbots2 from "/public/servnew/customweb/2.png";
import web from "/public/servnew/customweb/web.png";
import banImg1 from "/public/servnew/customweb/imgfold.png";
import js1 from "/public/js/1.png";
import js2 from "/public/js/2.png";
import js3 from "/public/js/3.png";
import js4 from "/public/js/4.png";
import js5 from "/public/js/5.png";
import js6 from "/public/js/6.png";
import php1 from "/public/js/php/1.png";
import php2 from "/public/js/php/2.png";
import php3 from "/public/js/php/3.png";
import php4 from "/public/js/php/4.png";
import php5 from "/public/js/php/5.png";
import php6 from "/public/js/php/6.png";
import user1 from "/public/js/user/1.png";
import user2 from "/public/js/user/2.png";
import user3 from "/public/js/user/3.png";
import user4 from "/public/js/user/4.png";
import msbestgloba11 from "/public/moniter1/1.png";
import msbestgloba12 from "/public/moniter1/2.png";
import msbestgloba13 from "/public/moniter1/3.png";
import msbestgloba14 from "/public/moniter1/4.png";
import msbestgloba15 from "/public/moniter1/5.png";
import msbestgloba16 from "/public/moniter1/6.png";
import msbestgloba17 from "/public/moniter1/7.png";
import msbestgloba18 from "/public/moniter1/8.png";
import msbestgloba19 from "/public/moniter1/9.png";

export default function customwebdevelopmentservices() {
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
        assignClass="customweb"
        subtitle="Our Award-Winning"
        title={<> Custom Web Development Services </>}
        text={<>We’ve Got Experienced Website Developers</>}
        BannerImage={BannerImage}
      />
      <People People="people" />
      <HomeBannerSliderlp />
      <LpForm
        addresClass="iosclass"
        heading={`Bitswits pioneers web development innovation, crafting cutting-edge solutions that redefine the digital landscape. Our dedicated team turns your vision into a global powerhouse, prioritizing your success in the online realm. Join us for a transformative journey where technology meets excellence, and your digital presence reaches new heights. `}
        data={[
          {
            img2: user1,
            title: "Refreshingly Unique Model",
            text: "Transparent & Local Interaction Real-time Collaboration & Accountability Full-time, Dedicated Developers",
          },
          {
            img2: user2,
            title: "One-Stop Development Shop",
            text: "2800 In-house Developers Bridge Any Skillset Gap Industry-Specific Technical Teams",
          },
          {
            img2: user3,
            title: "Affordable, Productive Services",
            text: "No Overtime or Hidden FeesFree QA and Free Management Save 50 - 75% on Development Costs!",
          },
          {
            img2: user4,
            title: "Work For Hire Services",
            text: "Start Your Project Within 48 HoursWe Foster Long-Term Relationships Over 22+ Years in Service to Our Customers",
          },
        ]}
      />
      <Nothing Nothing="nothingLp6" />
      <Provideservices
        assignClass="providecustom"
        rowclas="newrowcustom"
        title={
          <h2 className="font_30 fontsfheavy newfycolr">
            Blockchain Development Services
          </h2>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white">
            Our Web Development Company <br />
            Can Build Your Dream Website
          </h2>
        }
        para={
          <p className="font_17 white fontsfregular pt-2 pb-2">
            Our website development services at Chetu can create your dream
            website. We design engaging and user-friendly websites that <br />
            improve the customer experience, we work with you to understand your
            business goals and preferences. From simple blogs to <br /> complex
            e-commerce platforms, we are dedicated to delivering high-quality
            solutions that exceed your expectations. Let us bring <br /> your
            vision to life and enhance your online presence.
          </p>
        }
        sec={[
          {
            img1: bestgloba11,
            titl3: "Custom Website Application Development",
            para4:
              "Our team has experience developing a wide range of web applications, from simple web apps to complex enterprise solutions. We use the latest development tools and frameworks to design fast, reliable, and secure web applications that meet your business needs. We can customize your existing applications for Enterprise Resource Planning (ERP), E-Commerce, Interactive Gaming, Online Training & Courses, Customer Relationship Management (CRM), and so much more.",
          },
          {
            img1: bestgloba12,
            titl3: "Content Management Systems",
            para4:
              "We can help you integrate CMS capabilities into your existing website or application or develop a custom content management system (CMS) that makes it easy to manage your website content. Our CMS solutions are user-friendly, reliable, and flexible, allowing you to add and edit web content without needing to rewrite or update any code.",
          },
          {
            img1: bestgloba13,
            titl3: "No Cookie-Cutter Solutions",
            para4:
              "Our expert website development teams build, utilize, integrate, and customize the right tools, technologies, and frameworks to accomplish the goals that you’ve set forth. Whether you require Data Integration Services, Enterprise Application Integrations, Data Migrations & Upgrades, Implementation & Deployment, API Development & Integration, Quality Assurance, or more, we’ve got you covered.",
          },
          {
            img1: bestgloba14,
            titl3: "Diverse Coding Experience",
            para4:
              "From database design and web app development to system integrations and cloud consulting, our diverse team of Full-Stack Developers has the expertise to build your next software application. Our software engineers have many years of combined experience working with Java, JavaScript, PHP, Python, Objective-C, Ruby on Rails, jQuery, AngularJS, Node.js.NET Framework, and so much more.",
          },
          {
            img1: bestgloba15,
            titl3: "Maintenance, Monitoring, & Support",
            para4:
              "Our expert web design and development team provides ongoing maintenance, monitoring, and support to ensure that your custom websites and apps are working at optimal performances. Our Web Development Support and Maintenance Services include testing and debugging, updates and maintenance on security protocols, database maintenance, and so much more.",
          },
        ]}
        video={<Image src={peo} className="img-fluid" alt="bitswits" />}
      />
      <SmartContract
        assignClass="providecustom"
        title={
          <h2 className="font_30 fontsfheavy newfycolr center">
            Web Design and Development Company
          </h2>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white center">
            Professional Web Design and <br />
            Development Company
          </h2>
        }
        para={
          <p className="linehight_2 font_17 white fontsfregular font-regular pt-1  center">
            Our Full-Stack Web Developers have the programming expertise and
            industry-specific experience to build, integrate, and customize
            <br /> your website or application to align perfectly with your
            vision.
          </p>
        }
        sec={[
          {
            img1: msbestgloba11,
            title3: "Web App Integration Services",
            para4:
              "We always stay on top of the latest developments in deployment, customization, and integration to design the perfect, seamless approach to how you utilize your software. Our back-end developers are experts in Java, PHP, Ruby, Python, SQL, and more while our front-end designers are well-versed in using JavaScript, CSS3, HTML5, and more.",
          },
          {
            img1: msbestgloba12,
            title3: "Mobile App Development Services",
            para4:
              "With years of expertise under our belt, our team specializing in custom mobile app development can assist you in creating seamless and fluid experiences across various mobile devices.",
          },
          {
            img1: msbestgloba13,
            title3: "Enterprise Web Design and Development ",
            para4:
              "We use custom APIs and our vast knowledge of web services to build Enterprise Web Applications for digital marketing, CRM, inventory control, expedited workflows, and so much more.",
          },
          {
            img1: msbestgloba14,
            title3: "Full-Stack Web Development Solutions",
            para4: `Our expert Full-Stack website developers are highly skilled in Java and SQL programming languages with experience in leading 12-factor applications and cloud platform implementation.
            `,
          },
          {
            img1: msbestgloba15,
            title3: "Web Portal Development",
            para4:
              "We leverage AI techniques like federated learning, which can be applied to protect the privacy of data stored on the blockchain. AI algorithms enable computations on encrypted data, allowing privacy-preserving analysis while maintaining data confidentiality.",
          },
          {
            img1: msbestgloba16,
            title3: "Animation & Graphics Web Design",
            para4: `
            Our award-winning animators and graphic designers create beautiful logos, branding materials, illustrations, infographics, motion graphics, and more to fulfill your branding vision.`,
          },

          {
            img1: msbestgloba17,
            title3: "Ecommerce Development Solutions",
            para4: `
            Our Ecommerce development services can help you build an online store that drives sales and revenue. We have experience with various e-commerce platforms, including Magento, Shopify, and BigCommerce and we can help you choose the best for your business. `,
          },
          {
            img1: msbestgloba18,
            title3: "Web Integration Services",
            para4: `
            Our team of experienced web developers provides comprehensive web integration services, ensuring your software operates seamlessly across all platforms and devices for optimal performance and user experience.`,
          },
          {
            img1: msbestgloba19,
            title3: "CMS Integration",
            para4: `
            We integrate CMS capabilities into your existing website or application, enabling you to add and edit web content without needing to rewrite or update any code.`,
          },
        ]}
      />
      <Provideservices
        assignClass="providecustomweb"
        title={
          <h2 className="font_30 fontsfheavy newfycolr">
            Web Development Services
          </h2>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white">
            AI Web Development Services
          </h2>
        }
        para={
          <p className="font_17 white fontsfregular pt-2 pb-2 maxwidthweb">
            By leveraging artificial intelligence and machine learning, our AI
            web development services enable the creation of smarter, more
            personalized websites. Chetu offers a variety of efficient and
            cost-effective AI- powered web development services tailored to
            businesses' unique needs. From chatbots and virtual assistants to
            predictive analytics and content optimization, our AI software
            developers helps businesses stay ahead of the curve and deliver
            exceptional user experiences.
          </p>
        }
        sec={[
          {
            img1: chatbots1,
            titl3: "Chatbots And Virtual Assistants",
            para4:
              "Our experts customize AI-powered programs to provide automated customer support and assistance to website visitors. We build custom chatbots using programming languages like Python, Java, or JavaScript. Our website engineers use artificial intelligence and natural language processing technologies to build custom virtual assistants that improve the customer experience. ",
          },
          {
            img1: chatbots2,
            titl3: "Personalization And Recommendation Engines",
            para4:
              "Our website engineers integrate machine learning algorithms to provide users with personalized content and product recommendations based on browsing behavior and preferences. Predictive analytics involves using machine learning algorithms to analyze data and make predictions about user behavior, website performance, and other relevant metrics. ",
          },
        ]}
        video={<Image src={web} className="img-fluid" alt="bitswits" />}
      />
      <ProjectProcess
        processclass="processLp6"
        subtitle="Web Development Process"
        title="Our Strategic Web Development Process"
        desc={`We meet the demands of your business by executing our strategically planned processes for delivering top-of-the-line Custom <br/> Websites & Applications.`}
        img5={
          <>
            <Image
              src={banImg1}
              alt="BitsWits"
              className="img-fluid mt-4 mt-lg-5"
            />
          </>
        }
      />
      <SmartTech
        assignClass="providecustom"
        title={
          <h3 className="font_30 fontsfheavy newfycolr center">Technology </h3>
        }
        bigtitle={
          <h2 className="newchoose letterspace_1 font-bold white center">
            Full-Stack Technology
          </h2>
        }
        para={
          <p className="linehight_2 font_17 white fontsfregular font-regular pt-1  center">
            Our Website Developers utilize multiple software platforms,
            providing greater computing power, enhanced graphics, robust
            security <br /> standards, and improved performance levels.
          </p>
        }
        sec1title="Client Software (Front-End)"
        sec={[
          {
            img1: js1,
            title3: "Java Script",
            para4:
              "Our software engineers use JavaScript to calculate, manipulate, and validate different data to create dynamic and interactive user experiences.",
          },
          {
            img1: js2,
            title3: "Html",
            para4:
              "Our Software Development Team has many years of collective experience working with HTML programming language for developing best-in-class custom websites and applications.",
          },
          {
            img1: js3,
            title3: "Json",
            para4:
              "We use JSON for transmitting web application data in a much quicker and more efficient fashion to optimize the process of building your web application.",
          },
          {
            img1: js4,
            title3: "Elm",
            para4: `Our Software Development Team utilizes ELM’s functionality, user-friendliness, fast compilation, and safe refactoring benefits to build, integrate, and customize your website or application..
          `,
          },
          {
            img1: js5,
            title3: "Angular Js",
            para4:
              "We use AngularJS when creating dynamic web applications, appropriating its data binding, and dependency injection to eliminate the need to write an extensive amount of code.",
          },
          {
            img1: js6,
            title3: "J Query",
            para4: `
            We utilize jQuery to easily navigate a document, create animations, develop AJAX applications, select DOM elements, handle events, and create plug-ins on top of the JavaScript library.`,
          },
        ]}
        sec2title="Server Software (Back-End)"
        sec2={[
          {
            img1: php1,
            title3: "Php",
            para4:
              "Our Software Development Team uses PHP frameworks to provide a basic structure for streamlining and speeding up the development process of building personalized web websites and apps.",
          },
          {
            img1: php2,
            title3: "Express.Js",
            para4:
              "Our experts utilize Express.js to simplify the web application development process, making it easier to write fast, secure, and modular applications.",
          },
          {
            img1: php3,
            title3: "Node.Js",
            para4:
              "We use Node.js to create traditional websites, back-end API services, and data-intensive real-time applications that run across distributed devices.",
          },
          {
            img1: php4,
            title3: "Java",
            para4: `We use Java as a general-purpose programming language to develop custom mobile and web applications, embedded systems, and big data processing. 
          `,
          },
          {
            img1: php5,
            title3: "Python",
            para4:
              "We use Python as one of our primary programming languages for mobile and custom web development, video games, operating systems, machine learning, AI, and more",
          },
          {
            img1: php6,
            title3: "Mongo Db",
            para4: `
            Our Website Developers use MongoDB for optimizing the performance of transactional stores and for high volume data storage purposes.`,
          },
        ]}
      />
      <Technology addresClass="tech" />
      <Justbuildit assignClass="justforpop" />
      <Globallplp6 bannerClass="newclassglobe" />
      <Partnerships />
      <Formnewlp />
      <ServicesFaqs
        faqsData={[
          {
            question: "What is Mobile Application Development?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question:
              "Does Bitswits Offers Hybrid and Native Application Development?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question:
              "Why Choose Bitswits as a Mobile Application Development Company?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question: "Is there any customer support available?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question: "How to choose a mobile application development company?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
          {
            question: "What industries does BitsWits cater do?",
            answer: (
              <>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </>
            ),
          },
        ]}
      />
      <HomeLocation />

      <Script id="websiteSchema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Custom Web Development Services",
            "url": "https://www.bitswits.co/custom-web-development-services",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "{search_term_string}",
              "query-input": "required name=search_term_string"
            } 
          }                                                                             
        `}
      </Script>
      <Script id="organizationSchema" type="application/ld+json">
        {`
           {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BitsWits",
            "url": "https://www.bitswits.co/custom-web-development-services",
            "logo": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "sameAs": [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_/",
              "https://www.youtube.com/@officialBitsWits",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.linkedin.com/company/officialBitsWits"
            ] 
           }                                                                       
        `}
      </Script>
      <Script id="localBusinessSchema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Custom Web Development Services",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmobile.bee2e981.png&w=750&q=75",
            "url": "https://www.bitswits.co/custom-web-development-services",
            "telephone": "+1 713 565 7656",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Williams Tower, 41st Floor 2800 Post Oak Blvd, Suite 4100",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": "77056",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 29.7370769,
              "longitude": -95.46221829999999
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "06:00"
            },
            "sameAs": [
              "https://www.facebook.com/officialBitsWits",
              "https://www.instagram.com/officialBitsWits/",
              "https://twitter.com/BitsWits_/",
              "https://www.linkedin.com/company/officialBitsWits",
              "https://www.youtube.com/@officialBitsWits"
            ] 
          }                                                       
        `}
      </Script>
      <Script id="productSchema" type="application/ld+json">
        {`
           {
            "@context": "https://schema.org/", 
            "@type": "Product", 
            "name": "Custom Web Development Services",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmobile.bee2e981.png&w=750&q=75",
            "description": "Bitswits pioneers web development innovation, crafting cutting-edge solutions that redefine the digital landscape. Our dedicated team turns your vision into a global powerhouse, prioritizing your success in the online realm. Join us for a transformative journey where technology meets excellence, and your digital presence reaches new heights.",
            "brand": {
              "@type": "Brand",
              "name": "BitsWits"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1174"
            } 
           }                                                                     
        `}
      </Script>
    </>
  );
}
