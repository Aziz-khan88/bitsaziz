import React from 'react'
import Acheived from '@/src/components/servicePage/Acheived/Acheived'
import Banner from '@/src/components/servicePage/Banner/Banner'
import CaseStudies from '@/src/components/servicePage/casestudies/CaseStudies'
import CuttingEdge from '@/src/components/servicePage/CuttingEdge/CuttingEdge'
import SuccessfulApp from '@/src/components/servicePage/SuccessfulApp/SuccessfulApp'
import AppIdea from '@/src/components/servicePage/AppIdea/AppIdea'
import WhyChoose from '@/src/components/servicePage/WhyChoose/WhyChoose'
import DevelopmentProcess from '@/src/components/servicePage/DevelopmentProcess/DevelopmentProcess'
import MobileTechnologies from '@/src/components/servicePage/MobileTechnologies/MobileTechnologies'
import Testimonials from '@/src/components/servicePage/Testimonials/Testimonials'
import SmallBanner from '@/src/components/servicePage/SmallBanner/SmallBanner'
import ApplicationOffer from '@/src/components/servicePage/ApplicationOffer/ApplicationOffer'
import EstimatedCost from '@/src/components/servicePage/EstimatedCost/EstimatedCost'
import Fueling from '@/src/components/servicePage/Fueling/Fueling'
import YourTech from '@/src/components/servicePage/YourTech/YourTech'
import Industries from '@/src/components/servicePage/Industires/Industries'
import JournyForm from '@/src/components/servicePage/JourneyForm/JourneyForm'
import Faqs from '@/src/components/servicePage/Faqs/Faqs'
import BlogPosts from '@/src/components/servicePage/BlogPosts/BlogPosts'
import GlobalPresence from '@/src/components/servicePage/GlobalPresence/GlobalPresence'
import ImageOne from "media/services/smallBannerImg.svg"
const page = () => {
    const smallBannerContent = {
        title: "No Risks With An MVP! Launch Your IDEA To See How They Like It!",
        txt: "BitsWits believes in taking a creative, hands-on approach to mobile application development because we know it’s not just",
        img: ImageOne
    }
    // Sample content data
    const menus = [
        { label: "iOS App Development Consultation", index: 0 },
        { label: "iOS UI/UX Design", index: 1 },
        { label: "Custom iOS Application Development", index: 2 },
        { label: "iOS Software Testing", index: 3 },
        { label: "Multi-platform Deployment", index: 4 },
    ];
    const sections = [
        [
            {
                num: "",
                title: "Ios App Development Consultation",
                content: `<p class='font-medium manrope'>
                Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application.
                </p>`
            },
        ],
        [
            {
                num: "",
                title: "iOS UI/UX Design",
                content: `<p class='font-medium'>Throughout the development process, creating detailed documentation is crucial for finalizing the Scope of Work, SDLC, and BRD so that the user-experience and features are finalized for the application right from the start. </p>`
            },
        ],
        [
            {
                num: "03",
                title: "Design",
                content: `<p class='font-medium'>This involves designing the application's architecture, including defining hardware and system requirements, system layout, and necessary platforms for native or cross-platform app development services.</p>`
            },
        ],
        [
            {
                num: "",
                title: "iOS Software Testing",
                content: `<p class='font-medium'>Writing code according to the previous design. This stage often involves multiple teams, especially in mobile app development services, focusing on different aspects such as iPhone app development services and Android app development.
                </p>`
            },
        ],
        [
            {
                num: "",
                title: "Multi-platform Deployment",
                content: `<p class='font-medium'> We use automation testing tools to debug your applications before sharing the final version with you. We make sure that the final product is user-friendly across multiple operating systems.</p>`
            },
        ],
    ];
    const HoustonContent = {
        menus: menus,
        sections: sections,
    };
    return (
        <>
            <Banner />
            <CaseStudies />
            <Acheived />
            <CuttingEdge />
            <SuccessfulApp />
            <AppIdea />
            <WhyChoose />
            <DevelopmentProcess />
            <MobileTechnologies />
            <Testimonials />
            <SmallBanner content={smallBannerContent} />
            <ApplicationOffer content={HoustonContent} />
            <EstimatedCost />
            <Fueling />
            <YourTech />
            <Industries />
            <JournyForm />
            <Faqs
                faqsData={[
                    {
                        question: "01.   What services do you provide?",
                        answer: "Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application."
                    },
                    {
                        question: "02.   How much time is required to build a mobile application?",
                        answer: "The cost varies widely depending on the complexity and features of the app. Best app making services charge more due to their reputation and quality of work. Prices generally range from a few thousand dollars to hundreds of thousands depending on the time and effort."
                    },
                    {
                        question: "03.   How much does it cost to create an app in Dubai?",
                        answer: "Development time varies by app intricacy and features. A simple application can take around 6 months to launch while a complex app with two or multiple interfaces can take 9-12 months."
                    },
                    {
                        question: "04.   What is a mobile app support service, and does BitsWits offer it?",
                        answer: "Yes, our hybrid app development services have excelled in creating apps that function on iOS and Android platforms. They often employ frameworks like Flutter and React Native to ensure optimum functionality and visual appeal."
                    }
                ]}
            />
            <BlogPosts />
            <GlobalPresence />
        </>
    )
}

export default page
