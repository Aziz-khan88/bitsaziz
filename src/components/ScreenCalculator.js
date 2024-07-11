"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/CalculatoScreens.module.css";
// ================================
import CalcuForm from './calcuForm';
// ================================
import check from "/public/cal-screens/check.png"
import box1 from "/public/cal-screens/box1.png"
import box2 from "/public/cal-screens/box2.png"
import box3 from "/public/cal-screens/box3.png"
import setup1 from "/public/cal-screens/setup1.png"
import setup2 from "/public/cal-screens/setup2.png"
import mockImg1 from "/public/cal-screens/mockImg1.png"
import mockImg2 from "/public/cal-screens/mockImg2.png"
import mockImg3 from "/public/cal-screens/mockImg3.png"
import mockImg4 from "/public/cal-screens/mockImg4.png"
import mockImg5 from "/public/cal-screens/mockImg5.png"
import mockImg6 from "/public/cal-screens/mockImg6.png"
// =============
import screen1 from "/public/cal-screens/screen1.png"
import screen2 from "/public/cal-screens/screen2.png"
import screen3 from "/public/cal-screens/screen3.png"
import screen4 from "/public/cal-screens/screen4.png"
import screen5 from "/public/cal-screens/screen5.png"
import screen6 from "/public/cal-screens/screen6.png"
import screen7 from "/public/cal-screens/screen7.png"
import screen8 from "/public/cal-screens/screen8.png"
import screen9 from "/public/cal-screens/screen9.png"
import screen10 from "/public/cal-screens/screen10.png"
import screen11 from "/public/cal-screens/screen11.png"
import screen12 from "/public/cal-screens/screen12.png"
import screen13 from "/public/cal-screens/screen13.png"
import screen14 from "/public/cal-screens/screen14.png"
import screen15 from "/public/cal-screens/screen15.png"
import screen16 from "/public/cal-screens/screen16.png"
import screen17 from "/public/cal-screens/screen17.png"
import screen18 from "/public/cal-screens/screen18.png"
import screen19 from "/public/cal-screens/screen19.png"
import screen20 from "/public/cal-screens/screen20.png"
import screen21 from "/public/cal-screens/screen21.png"
import screen22 from "/public/cal-screens/screen22.png"
import screen23 from "/public/cal-screens/screen23.png"
import screen24 from "/public/cal-screens/screen24.png"
import screen25 from "/public/cal-screens/screen25.png"
import screen26 from "/public/cal-screens/screen26.png"
import screen27 from "/public/cal-screens/screen27.png"
import screen28 from "/public/cal-screens/screen28.png"
import screen29 from "/public/cal-screens/screen29.png"
import screen30 from "/public/cal-screens/screen30.png"
import screen31 from "/public/cal-screens/screen31.png"
import screen32 from "/public/cal-screens/screen32.png"
import screen33 from "/public/cal-screens/screen33.png"
import { title } from 'process';

const ScreenCalculator = () => {
    // ================================
    const content = [
        {
            id: 'start',
            title: 'What type of app are you building?',
            description: 'Apple iOS is a better choice to reach to a more engaged user base. Android has a broader reach, however, particularly in emerging markets, like Asia and Africa.',
            section: [
                {
                    checkboxes: [
                        {
                            id: "android",
                            label: 'Google Android',
                            description: 'Development',
                            checked: false
                        },
                        {
                            id: "ios",
                            label: 'Apple iOS',
                            description: 'Operating system used by Apple products (e.g. iPhone, iPad)',
                            checked: false
                        },
                        {
                            id: "webApp",
                            label: 'Progressive Web App (PWA)',
                            description: 'Web apps that are fast and reliable with very rich user experiences.',
                            checked: false
                        }
                    ]
                }
            ]
        },
        {
            id: 'features',
            title: 'What features would you like your app to have?',
            description: 'Filter by functionality type.',
            section: [
                {
                    subTitle: 'Content',
                    checkboxes: [
                        {
                            id: "event",
                            label: 'See or Book Calendar Events',
                            description: 'Development',
                            checked: false
                        },
                        {
                            id: "map",
                            label: 'Map & Location',
                            description: 'Simple maps that display a place, allows for pins and short descriptions and basic calculation of distance.',
                            checked: false
                        },
                        {
                            id: "weather",
                            label: 'Weather',
                            description: 'Get real time weather forecasts for the users current location.',
                            checked: false
                        },
                        {
                            id: "host",
                            label: 'Host Documents',
                            description: 'Manage, organize, and share files, images and videos with your users.',
                            checked: false
                        },
                        {
                            id: "task",
                            label: 'Manage Tasks and Checklists',
                            description: 'Track and manage tasks and to-do lists for the individual or for the team.',
                            checked: false
                        },
                        {
                            id: "content",
                            label: 'Scheduled Content',
                            description: 'Release new content by scheduling the post by time and day.',
                            checked: false
                        },
                        {
                            id: "flash",
                            label: 'Flash Cards',
                            description: 'Release new content by scheduling the post by time and day.',
                            checked: false
                        },
                    ],
                },
                {
                    subTitle: 'Social',
                    checkboxes: [
                        {
                            id: "board",
                            label: 'Chat and Message Boards',
                            description: 'Create message boards and chatrooms where users can like and comment.',
                            checked: false
                        },
                        {
                            id: "media",
                            label: 'Social Media',
                            description: 'Link your Facebook and Twitter pages to your app.',
                            checked: false
                        }
                    ],
                },
                {
                    subTitle: 'Fitness',
                    checkboxes: [
                        {
                            id: "weight",
                            label: 'Weight Tracker',
                            description: 'Users can set fitness goals, track their progress and even monitor their hydration, exercise and diet, as well as send customized encouragement messages. Screen reader support enabled.',
                            checked: false
                        },
                    ],
                },
                {
                    subTitle: 'Media',
                    checkboxes: [
                        {
                            id: "video",
                            label: 'Stream Video',
                            description: 'Video streaming with simple controls, pause, play, volume control. Normal and full screen play (e.g. YouTube, Vimeo… etc).',
                            checked: false
                        },
                        {
                            id: "audio",
                            label: 'Stream Audio',
                            description: 'Audio streaming with simple controls, pause, play, volume control (e.g. Soundcloud).',
                            checked: false
                        },
                        {
                            id: "image",
                            label: 'Image Gallery',
                            description: 'Organize images in a gallery for your users to browse and view.',
                            checked: false
                        },
                    ],
                },
                {
                    subTitle: 'Forms',
                    checkboxes: [
                        {
                            id: "forms",
                            label: 'Forms',
                            description: 'Capture information by allowing users to submit forms.',
                            checked: false
                        },
                        {
                            id: "surveys",
                            label: 'Quizzez and Surveys',
                            description: 'Increase and improve user engagement by creating quizzes, Q&A systems, and customer support surveys.',
                            checked: false
                        },
                        {
                            id: "book",
                            label: 'Book Appointments and Reservations',
                            description: 'Scheduling meetings and appointments made easy.',
                            checked: false
                        },
                    ],
                },
                {
                    subTitle: 'Ecommerce',
                    checkboxes: [
                        {
                            id: "ecommerce",
                            label: 'Ecommerce',
                            description: 'Ability to list items (image, description, price, etc), shopping cart feature, checkout, email confirmation, purchase history, etc)with payments included.',
                            checked: false
                        },
                        {
                            id: "scanning",
                            label: 'QR Code Scanning and Online Purchases',
                            description: 'Scan and save QR Codes to your phone.',
                            checked: false
                        },
                        {
                            id: "coupon",
                            label: 'Create Coupons',
                            description: 'Provide coupons to users that are filterable, searchable and mappable.',
                            checked: false
                        },
                    ],
                },
                {
                    subTitle: 'Loyalty',
                    checkboxes: [
                        {
                            id: "points",
                            label: 'Loyalty Points',
                            description: 'Reward users with points that can be used to access deals or benefits inside the app.',
                            checked: false
                        },
                        {
                            id: "feedback",
                            label: 'Customer Feedback',
                            description: 'Listen to your customers honest feedback through a star rating system and custom commenting.',
                            checked: false
                        },
                    ],
                },
                {
                    subTitle: 'Custom',
                    checkboxes: [
                        {
                            id: "small",
                            label: 'Small Feature',
                            description: 'You want to develop a feature in the app that is straightforward and around 1-2 screens deep.',
                            checked: false
                        },
                        {
                            id: "bigger",
                            label: 'Bigger Feature',
                            description: 'You want to develop a feature that is straightforward but is larger in size and may have some business logic that accompanies it.',
                            checked: false
                        },
                        {
                            id: "backend",
                            label: 'Feature With a Backend',
                            description: 'You want to develop a whole section of the app that will leverage a custom backend or possibly integrate with our own existing backend.',
                            checked: false
                        },
                        {
                            id: "system",
                            label: 'Building a System',
                            description: 'You want to shoot for the moon you have big ideas that aren’t limited to just an app. You are looking for a team of consultants and not just robotic developers to help you achieve your goals.',
                            checked: false
                        },
                    ],
                }
            ]
        },
        {
            id: 'users',
            title: 'How do people login?',
            description: 'An email login is generally best to start with unless your app will have tight integration with services like Facebook or Twitter, in which case social login is better.',
            section: [
                {
                    checkboxes: [
                        {
                            id: "email",
                            label: 'Email',
                            description: 'Login will be through an email and password combination. There will be also be a reset password option to help with forgotten passwords.',
                            checked: false
                        },
                        {
                            id: "social",
                            label: 'Social (Facebook, Twitter, ...etc)',
                            description: 'Users will be able to login using an existing social media account (e.g. Facebook, Twitter).',
                            checked: false
                        },
                        {
                            id: "single",
                            label: 'Single Sign On (SSO)',
                            description: 'Users will be able to login using one set of login credentials that are used across multiple applications.',
                            checked: false
                        }
                    ]
                }
            ]
        },
        {
            id: 'integrations',
            title: 'What device features will your app need to integrate with?',
            description: 'These are sensors on the device you can integrate with.',
            section: [
                {
                    checkboxes: [
                        {
                            id: "camera",
                            label: 'Camera',
                            description: 'Take photos or upload images from the camera roll.',
                            checked: false
                        },
                        {
                            id: "fences",
                            label: 'Geo-Fences',
                            description: 'Geo-Fences allow you to create a virtual fence around an area to trigger specific actions.',
                            checked: false
                        },
                        {
                            id: "bluetooth",
                            label: 'Bluetooth',
                            description: 'You can use Bluetooth to communicate and transfer data between devices.',
                            checked: false
                        }
                    ]
                }
            ]
        },
        {
            id: 'monetization',
            title: 'Will your app generate revenue?',
            description: 'Charging users for your app upfront is cheaper than building in-app purchases, but in-app purchase can produce higher returns if/when you have an engaged user base.',
            section: [
                {
                    checkboxes: [
                        {
                            id: "cost",
                            label: 'Up-front Cost',
                            description: 'Users will be charged once or pay a monthly subscription fee.',
                            checked: false
                        },
                        {
                            id: "purchases",
                            label: 'In-App Purchases',
                            description: 'Users will be able to purchase premium features in the app that will improve the experience.',
                            checked: false
                        },
                        {
                            id: "free",
                            label: 'Free',
                            description: 'The app will be free for everyone to enjoy.',
                            checked: false
                        }
                    ]
                }
            ]
        },
        {
            id: 'hosting',
            title: 'Host and develop your app with BuildFire',
            description: 'When you build your app with BuildFire, all of the infrastructure is taken care of for you and your app can easily scale to millions of users. You also don’t need to worry about any ongoing maintenance or support costs because it’s all included in your subscription!',
            section: [
                {
                    checkboxes: [
                        {
                            id: "enterprise",
                            img: box1,
                            label: 'Enterprise',
                            description: 'Premium support and functionality to maximize the business value of your app.',
                            cost: '000',
                            tag: 'Per month billed quarterly.',
                            checked: false
                        },
                        {
                            id: "business",
                            img: box2,
                            label: 'Business',
                            description: 'Additional capabilities to get more out of your app.',
                            cost: '000',
                            tag: 'Per month billed quarterly.',
                            checked: false
                        },
                        {
                            id: "growth",
                            img: box3,
                            label: 'Growth',
                            description: 'The basics needed to get you started with a business app.',
                            cost: '000',
                            tag: 'Per month billed quarterly.',
                            checked: false
                        }
                    ]
                }
            ]
        },
        {
            id: 'buildfire',
            title: 'Setup & Design Packages',
            description: 'Hire a top-notch team of designers and app strategists to build your build your app for you on top of the BuildFire platform.',
            section: [
                {
                    checkboxes: [
                        {
                            id: "premium",
                            img: setup1,
                            label: 'Premium Setup',
                            description: 'BitsWits’s signature package covers every small detail you need to get a high quality app published to the world.',
                            cost: '000',
                            checked: false,
                            mockupsData: [
                                {
                                    mockImg: mockImg1,
                                    heading: 'App Design Mockups',
                                    items: [
                                        { text: '2 app design options' },
                                        { text: '2 revisions' },
                                    ],
                                },
                                {
                                    mockImg: mockImg2,
                                    heading: 'App Size / Setup',
                                    items: [
                                        { text: 'Small app' },
                                        { text: '10-15 screens' },
                                        { text: '3 hours of content entry' },
                                    ],
                                },
                                {
                                    mockImg: mockImg3,
                                    heading: 'Expert Assistance',
                                    items: [
                                        { text: '2 - 60 minute Expert Assistance Sessions' },
                                    ],
                                },
                                {
                                    mockImg: mockImg4,
                                    heading: 'Marketing Materials',
                                    items: [
                                        { text: 'Promo Video' },
                                        { text: 'App Phone Mockups' },
                                        { text: 'Social media ads +copy' },
                                        { text: 'Premium App Store Screenshots' },
                                    ],
                                },
                                {
                                    mockImg: mockImg5,
                                    heading: 'Integrations',
                                    items: [
                                        { text: 'Zapier' },
                                        { text: 'Server to server API' },
                                        { text: 'Segment Analytics' },
                                    ],
                                },
                                {
                                    mockImg: mockImg6,
                                    heading: 'Advanced Functionality',
                                    items: [
                                        { text: 'Customizations to existing features' },
                                        { text: 'Access to premium plugins worth $000' },
                                    ],
                                },
                            ]
                        },
                        {
                            id: "signature",
                            img: setup2,
                            label: 'Signature Setup',
                            description: 'BitsWits’s signature package covers every small detail you need to get a high quality app published to the world.',
                            cost: '000',
                            checked: false,
                            mockupsData: [
                                {
                                    mockImg: mockImg1,
                                    heading: 'App Design Mockups',
                                    items: [
                                        { text: '2 app design options' },
                                        { text: '2 revisions' },
                                    ],
                                },
                                {
                                    mockImg: mockImg2,
                                    heading: 'App Size / Setup',
                                    items: [
                                        { text: 'Small app' },
                                        { text: '10-15 screens' },
                                        { text: '3 hours of content entry' },
                                    ],
                                },
                                {
                                    mockImg: mockImg3,
                                    heading: 'Expert Assistance',
                                    items: [
                                        { text: '2 - 60 minute Expert Assistance Sessions' },
                                    ],
                                },
                                {
                                    mockImg: mockImg4,
                                    heading: 'Marketing Materials',
                                    items: [
                                        { text: 'Promo Video' },
                                        { text: 'App Phone Mockups' },
                                        { text: 'Social media ads +copy' },
                                        { text: 'Premium App Store Screenshots' },
                                    ],
                                },
                                {
                                    mockImg: mockImg5,
                                    heading: 'Integrations',
                                    items: [
                                        { text: 'Zapier' },
                                        { text: 'Server to server API' },
                                        { text: 'Segment Analytics' },
                                    ],
                                },
                                {
                                    mockImg: mockImg6,
                                    heading: 'Advanced Functionality',
                                    items: [
                                        { text: 'Customizations to existing features' },
                                        { text: 'Access to premium plugins worth $000' },
                                    ],
                                },
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: 'estimation',
            title2: <>Enter Data <span className='text-white'>To Get A Detailed Breakdown Of <br /> Your</span> App Cost</>
        }
    ];
    // ================================
    const [currentStep, setCurrentStep] = useState(0);
    const [checkboxes, setCheckboxes] = useState(content[currentStep].checkboxes);
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    // =========== Tabs ===============
    const totalSteps = content.length;
    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };
    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };
    // =========== CheckBox ===============
    const handleCheckboxChange = (id) => {
        if (checkboxes) {
            setCheckboxes(prevCheckboxes =>
                prevCheckboxes.map(checkbox =>
                    checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
                )
            );
        }
    };
    // =========== CheckBox Content ===============
    // useEffect(() => {
    //     const selected = checkboxes.filter(checkbox => checkbox.checked);
    //     setSelectedFeatures(selected.map(checkbox => checkbox.label));
    // }, [checkboxes]);
    // =========== CheckBox Image ===============
    const renderImage = () => {
        switch (true) {
            case selectedFeatures.includes('Google Android'):
                return <Image quality={90} loading='lazy' src={screen1} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Apple iOS'):
                return <Image quality={90} loading='lazy' src={screen2} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Progressive Web App (PWA)'):
                return <Image quality={90} loading='lazy' src={screen3} alt='BitsWits' className='img-fluid' />;
            // ======================= //
            case selectedFeatures.includes('See or Book Calendar Events'):
                return <Image quality={90} loading='lazy' src={screen4} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Map & Location'):
                return <Image quality={90} loading='lazy' src={screen5} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Weather'):
                return <Image quality={90} loading='lazy' src={screen6} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Host Documents'):
                return <Image quality={90} loading='lazy' src={screen7} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Manage Tasks and Checklists'):
                return <Image quality={90} loading='lazy' src={screen8} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Scheduled Content'):
                return <Image quality={90} loading='lazy' src={screen9} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Flash Cards'):
                return <Image quality={90} loading='lazy' src={screen10} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Chat and Message Boards'):
                return <Image quality={90} loading='lazy' src={screen11} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Social Media'):
                return <Image quality={90} loading='lazy' src={screen12} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Weight Tracker'):
                return <Image quality={90} loading='lazy' src={screen13} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Stream Video'):
                return <Image quality={90} loading='lazy' src={screen14} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Stream Audio'):
                return <Image quality={90} loading='lazy' src={screen15} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Image Gallery'):
                return <Image quality={90} loading='lazy' src={screen16} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Forms'):
                return <Image quality={90} loading='lazy' src={screen17} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Quizzez and Surveys'):
                return <Image quality={90} loading='lazy' src={screen18} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Book Appointments and Reservations'):
                return <Image quality={90} loading='lazy' src={screen19} alt='BitsWits' className='img-fluid' />;
            // ======================= //
            case selectedFeatures.includes('Email'):
                return <Image quality={90} loading='lazy' src={screen20} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Social (Facebook, Twitter, ...etc)'):
                return <Image quality={90} loading='lazy' src={screen21} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Single Sign On (SSO)'):
                return <Image quality={90} loading='lazy' src={screen22} alt='BitsWits' className='img-fluid' />;
            // ======================= //
            case selectedFeatures.includes('Camera'):
                return <Image quality={90} loading='lazy' src={screen23} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Geo-Fences'):
                return <Image quality={90} loading='lazy' src={screen24} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Bluetooth'):
                return <Image quality={90} loading='lazy' src={screen25} alt='BitsWits' className='img-fluid' />;
            // ======================= //
            case selectedFeatures.includes('Up-front Cost'):
                return <Image quality={90} loading='lazy' src={screen26} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('In-App Purchases'):
                return <Image quality={90} loading='lazy' src={screen27} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Free'):
                return <Image quality={90} loading='lazy' src={screen28} alt='BitsWits' className='img-fluid' />;
            // ======================= //
            case selectedFeatures.includes('Enterprise'):
                return <Image quality={90} loading='lazy' src={screen29} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Business'):
                return <Image quality={90} loading='lazy' src={screen30} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Growth'):
                return <Image quality={90} loading='lazy' src={screen31} alt='BitsWits' className='img-fluid' />;
            // ======================= //
            case selectedFeatures.includes('Premium Setup'):
                return <Image quality={90} loading='lazy' src={screen32} alt='BitsWits' className='img-fluid' />;
            case selectedFeatures.includes('Signature Setup'):
                return <Image quality={90} loading='lazy' src={screen33} alt='BitsWits' className='img-fluid' />;
            default:
                return null;
        }
    };
    // ================================
    useEffect(() => {
        setCheckboxes(content[currentStep].checkboxes);
    }, [currentStep]);

    return (
        <>
            <section className={styles.screen}>
                <Container fluid className={styles.height}>
                    <Row>
                        <Col lg={7}>
                            <div className={styles.checkCol}>
                                <div className={styles.progressBar}>
                                    <div className={`${styles.bar} ${currentStep >= 0 ? styles.active : ''}`}>
                                        <span>
                                            <Image quality={90} loading='lazy' src={check} alt='BitsWits' className={`${styles.check} img-fluid`} />
                                        </span>
                                        <p>START</p>
                                    </div>
                                    <div className={`${styles.bar} ${currentStep >= 1 ? styles.active : ''}`}>
                                        <span>
                                            <Image quality={90} loading='lazy' src={check} alt='BitsWits' className={`${styles.check} img-fluid`} />
                                        </span>
                                        <p>FEATURES</p>
                                    </div>
                                    <div className={`${styles.bar} ${currentStep >= 2 ? styles.active : ''}`}>
                                        <span>
                                            <Image quality={90} loading='lazy' src={check} alt='BitsWits' className={`${styles.check} img-fluid`} />
                                        </span>
                                        <p>USERS</p>
                                    </div>
                                    <div className={`${styles.bar} ${currentStep >= 3 ? styles.active : ''}`}>
                                        <span>
                                            <Image quality={90} loading='lazy' src={check} alt='BitsWits' className={`${styles.check} img-fluid`} />
                                        </span>
                                        <p>INTEGRATIONS</p>
                                    </div>
                                    <div className={`${styles.bar} ${currentStep >= 4 ? styles.active : ''}`}>
                                        <span>
                                            <Image quality={90} loading='lazy' src={check} alt='BitsWits' className={`${styles.check} img-fluid`} />
                                        </span>
                                        <p>MONETIZATION</p>
                                    </div>
                                    <div className={`${styles.bar} ${currentStep >= 5 ? styles.active : ''}`}>
                                        <span>
                                            <Image quality={90} loading='lazy' src={check} alt='BitsWits' className={`${styles.check} img-fluid`} />
                                        </span>
                                        <p>MAINTENANCE <br /> & HOSTING</p>
                                    </div>
                                    <div className={`${styles.bar} ${currentStep >= 6 ? styles.active : ''}`}>
                                        <span>
                                            <Image quality={90} loading='lazy' src={check} alt='BitsWits' className={`${styles.check} img-fluid`} />
                                        </span>
                                        <p>BUILDFIRE <br /> SERVICES</p>
                                    </div>
                                    <div className={`${styles.bar} ${styles.barLast} ${currentStep >= 7 ? styles.active : ''}`}>
                                        <span>
                                            <Image quality={90} loading='lazy' src={check} alt='BitsWits' className={`${styles.check} img-fluid`} />
                                        </span>
                                        <p>ESTIMATION</p>
                                    </div>
                                </div>
                                <form className={styles.progressContrnt}>
                                    {content.map(({ title2, title, description, section }, index) => (
                                        <div key={index} className={currentStep === index ? 'd-block' : 'd-none'}>
                                            {title && <h3>{title}</h3>}
                                            {title2 && <h2>{title2}</h2>}
                                            {description && <p>{description}</p>}
                                            <div className={`${styles.checkBoxs} ${currentStep === 5 ? styles.checkBoxs2 : currentStep === 6 ? styles.checkBoxs3 : currentStep === 7 ? styles.checkBoxs4 : ''} screen`}>
                                                {section &&
                                                    <>
                                                        {section.map(({ checkboxes, subTitle }, index) => (
                                                            <div key={index} className={styles.forCheckBox}>
                                                                {subTitle && <h5>{subTitle}</h5>}
                                                                {checkboxes.map(({ id, label, description, checked, tag, cost, img, mockupsData }, index) => (
                                                                    <div key={index} className={`${styles.checkBox} ${checked ? styles.checked : ''}`}>
                                                                        <input
                                                                            type="checkbox"
                                                                            id={`checkbox-${id}`}
                                                                            className={styles.checkboxInput}
                                                                            onChange={() => handleCheckboxChange(id)}
                                                                            checked={checked}
                                                                        />
                                                                        <label htmlFor={`checkbox-${id}`} className={styles.checkboxLabel}>
                                                                            <div className={styles.imgBox}>
                                                                                <Image src={img} alt='BitsWits' className={`img-fluid`} />
                                                                            </div>
                                                                            <div className={styles.costBox2}>
                                                                                <p className={styles.cost}>
                                                                                    <sup>$</sup>
                                                                                    {cost}
                                                                                </p>
                                                                                <p>starting at</p>
                                                                            </div>
                                                                            <div className={styles.checkboxContent}>
                                                                                <h4>{label}</h4>
                                                                                <p>{description}</p>
                                                                            </div>
                                                                            <div className={styles.costBox1}>
                                                                                <p className={styles.cost}>
                                                                                    <sup>$</sup>
                                                                                    {cost}
                                                                                    <sub> /mo</sub>
                                                                                </p>
                                                                                <p>{tag}</p>
                                                                            </div>
                                                                            <div className={styles.costBox3}>
                                                                                {mockupsData && mockupsData.map(({ mockImg, heading, items }, index) => (
                                                                                    <div key={index} className={styles.costBox4}>
                                                                                        <div className={styles.listBox}>
                                                                                            <div className={styles.headBox}>
                                                                                                <Image src={mockImg} alt='BitsWits' className={`img-fluid`} />
                                                                                                <h5>{heading}</h5>
                                                                                            </div>
                                                                                            <ul>
                                                                                                {items.map(({ text }, index) => (
                                                                                                    <li key={index}>{text}</li>
                                                                                                ))}
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                            <div className={`${styles.checkboxCustom} ${checked ? styles.checked : ''}`}></div>
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ))}
                                                    </>
                                                }
                                                <div className={styles.fromBox}>
                                                    <CalcuForm />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </form>
                            </div>
                            <div className={`${styles.btns} ${currentStep === 0 ? styles.margin : currentStep > 1 ? styles.margin : ''}`}>
                                {currentStep > 0 && (
                                    <button className={styles.btnPrev} onClick={handlePrev}>
                                        Previous
                                    </button>
                                )}
                                {currentStep < totalSteps - 1 && (
                                    <button className={styles.btnNext} onClick={handleNext}>
                                        Next
                                    </button>
                                )}
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.imgCol}>
                                <div className={`${styles.imgBg} mx-auto`}>
                                    {renderImage()}
                                </div>
                                <div className={styles.para}>
                                    <p>Disclaimer: This is a tool to estimate app cost if you were to develop your app with an outside agency. Typically BuildFire prices are a fraction of the cost of an outside agency because our app development platform significantly reduces the amount of time and effort to build an app.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={1} className='p-0'>
                            <div className={styles.selected}>
                                <h4>Selected Features:</h4>
                                <div className={styles.features}>
                                    {selectedFeatures.map((feature, index) => (
                                        <React.Fragment key={index}>
                                            <p>{feature},</p>
                                            {index !== selectedFeatures.length - 1}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ScreenCalculator
