"use client"
import React, { useState, useEffect } from 'react';
import { usePathname } from "next/navigation"
import Axios from "axios";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/CalculatorScreen.module.css";
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
import screen34 from "/public/cal-screens/screen34.png"
import screen35 from "/public/cal-screens/screen35.png"
import screen36 from "/public/cal-screens/screen36.png"
import screen37 from "/public/cal-screens/screen37.png"
import screen38 from "/public/cal-screens/screen38.png"
import screen39 from "/public/cal-screens/screen39.png"
import screen40 from "/public/cal-screens/screen40.png"
import screen41 from "/public/cal-screens/screen41.png"
import screen42 from "/public/cal-screens/screen42.png"
import screen43 from "/public/cal-screens/screen43.png"
import screen44 from "/public/cal-screens/screen44.png"
import screen45 from "/public/cal-screens/screen45.png"
import screen46 from "/public/cal-screens/screen46.png"
import screen47 from "/public/cal-screens/screen47.png"
import screen48 from "/public/cal-screens/screen48.png"
import screen49 from "/public/cal-screens/screen49.png"
import screen50 from "/public/cal-screens/screen50.png"
import screen51 from "/public/cal-screens/screen51.png"
import screen52 from "/public/cal-screens/screen52.png"
import screen53 from "/public/cal-screens/screen53.png"
import screen54 from "/public/cal-screens/screen54.png"
import screen55 from "/public/cal-screens/screen55.png"
import screen56 from "/public/cal-screens/screen56.png"
import screen57 from "/public/cal-screens/screen57.png"
import screen58 from "/public/cal-screens/screen58.png"
import screen59 from "/public/cal-screens/screen59.png"
// ================================
const imageMap = {
    android: screen1,
    ios: screen2,
    webApp: screen3,
    event: screen4,
    map: screen5,
    weather: screen6,
    host: screen7,
    task: screen8,
    content: screen9,
    flash: screen10,
    board: screen11,
    media: screen12,
    weight: screen13,
    video: screen14,
    audio: screen15,
    image: screen16,
    forms: screen17,
    surveys: screen18,
    book: screen19,
    ecommerce: screen20,
    scanning: screen21,
    coupon: screen22,
    points: screen23,
    feedback: screen24,
    small: screen25,
    bigger: screen26,
    backend: screen27,
    system: screen28,
    email: screen29,
    social: screen30,
    single: screen31,
    camera: screen32,
    fences: screen33,
    bluetooth: screen34,
    cost: screen35,
    purchases: screen36,
    free: screen37,
    enterprise: screen38,
    business: screen39,
    growth: screen40,
    premium: screen41,
    signature: screen42,
};
// ================================
const labels = {
    android: 'Google Android',
    ios: 'Apple iOS',
    webApp: 'Progressive Web App (PWA)',
    event: 'See or Book Calendar Events',
    map: 'Map & Location',
    weather: 'Weather',
    host: 'Host Documents',
    task: 'Manage Tasks and Checklists',
    content: 'Scheduled Content',
    flash: 'Flash Cards',
    board: 'Chat and Message Boards',
    media: 'Social Media',
    weight: 'Weight Tracker',
    video: 'Stream Video',
    audio: 'Stream Audio',
    image: 'Image Gallery',
    forms: 'Forms',
    surveys: 'Quizzez and Surveys',
    book: 'Book Appointments and Reservations',
    ecommerce: 'Ecommerce',
    scanning: 'QR Code Scanning and Online Purchases',
    coupon: 'Create Coupons',
    points: 'Loyalty Points',
    feedback: 'Customer Feedback',
    small: 'Small Feature',
    bigger: 'Bigger Feature',
    backend: 'Feature With a Backend',
    system: 'Building a System',
    email: 'Email',
    social: 'Social (Facebook, Twitter, ...etc)',
    single: 'Single Sign On (SSO)',
    info: 'User Profile Info',
    segment: 'Segment Users',
    activity: 'User Activity',
    push: 'Send Push Notifications',
    newsletters: 'Subscription to Newsletters',
    allow: 'Allow Users to Chat',
    camera: 'Camera',
    fences: 'Geo-Fences',
    bluetooth: 'Bluetooth',
    gyroscope: 'Gyroscope',
    accelerometer: 'Accelerometer',
    public: 'Public API’s',
    systems: 'Backend Systems',
    cost: 'Up-front Cost',
    purchases: 'In-App Purchases',
    free: 'Free',
    enterprise: 'Enterprise',
    business: 'Business',
    growth: 'Growth',
    minimal: 'Minimal Infrastructure',
    medium: 'Medium Infrastructure',
    large: 'Large Infrastructure',
    aMaintenance: 'Andriod Maintenance',
    iMaintenance: 'iOS Maintenance',
    sMaintenance: 'Server Maintenance',
    eSupport: 'Direct Email',
    cSupport: 'Direct Call',
    premium: 'Premium Setup',
    signature: 'Signature Setup'
};
// ================================
const questions = {
    android: 'What type of app are you building?',
    ios: 'What type of app are you building?',
    webApp: 'What type of app are you building?',
    event: 'What features would you like your app to have?',
    map: 'What features would you like your app to have?',
    weather: 'What features would you like your app to have?',
    host: 'What features would you like your app to have?',
    task: 'What features would you like your app to have?',
    content: 'What features would you like your app to have?',
    flash: 'What features would you like your app to have?',
    board: 'What features would you like your app to have?',
    media: 'What features would you like your app to have?',
    weight: 'What features would you like your app to have?',
    video: 'What features would you like your app to have?',
    audio: 'What features would you like your app to have?',
    image: 'What features would you like your app to have?',
    forms: 'What features would you like your app to have?',
    surveys: 'What features would you like your app to have?',
    book: 'What features would you like your app to have?',
    ecommerce: 'What features would you like your app to have?',
    scanning: 'What features would you like your app to have?',
    coupon: 'What features would you like your app to have?',
    points: 'What features would you like your app to have?',
    feedback: 'What features would you like your app to have?',
    small: 'What features would you like your app to have?',
    bigger: 'What features would you like your app to have?',
    backend: 'What features would you like your app to have?',
    system: 'What features would you like your app to have?',
    email: 'How do people login?',
    social: 'How do people login?',
    single: 'How do people login?',
    info: 'What information would you like to know about your users?',
    segment: 'What information would you like to know about your users?',
    activity: 'What information would you like to know about your users?',
    push: 'How would you like to engage your users?',
    newsletters: 'How would you like to engage your users?',
    allow: 'How would you like to engage your users?',
    camera: 'What device features will your app need to integrate with?',
    fences: 'What device features will your app need to integrate with?',
    bluetooth: 'What device features will your app need to integrate with?',
    gyroscope: 'What device features will your app need to integrate with?',
    accelerometer: 'What device features will your app need to integrate with?',
    public: 'Will your app need to Integrate with other systems?',
    systems: 'Will your app need to Integrate with other systems?',
    cost: 'Will your app generate revenue?',
    purchases: 'Will your app generate revenue?',
    free: 'Will your app generate revenue?',
    enterprise: 'Option 1: Host and develop your app with BuildFire',
    business: 'Option 1: Host and develop your app with BuildFire',
    growth: 'Option 1: Host and develop your app with BuildFire',
    minimal: 'Option 2: Host and maintain all your own infrastructure',
    medium: 'Option 2: Host and maintain all your own infrastructure',
    large: 'Option 2: Host and maintain all your own infrastructure',
    aMaintenance: 'What kind of maintenance do you need on an ongoing basis?',
    iMaintenance: 'What kind of maintenance do you need on an ongoing basis?',
    sMaintenance: 'What kind of maintenance do you need on an ongoing basis?',
    eSupport: 'What support will you need on an ongoing basis?',
    cSupport: 'What support will you need on an ongoing basis?',
    premium: 'Setup & Design Packages',
    signature: 'Setup & Design Packages'
};

const CalculatorScreen = () => {
    // =========== Tabs ===============
    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = 8;
    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };
    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };
    // =========== CheckBox and Label ===============
    const [checkedItems, setCheckedItems] = useState([]);
    const [checkedAnswers, setCheckedAnswers] = useState({});

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        if (checked) {
            setCheckedItems([...checkedItems, id]);
        } else {
            setCheckedItems(checkedItems.filter(item => item !== id));
        }
        // ====================
        const label = document.querySelector(`label[for=${id}]`);
        if (checked) {
            setCheckedAnswers(prevState => ({
                ...prevState,
                [id]: {
                    question: questions[id],
                    answer: label.querySelector('h4').innerText
                }
            }));
        } else {
            const updatedAnswers = { ...checkedAnswers };
            delete updatedAnswers[id];
            setCheckedAnswers(updatedAnswers);
        }
    };
    // =========== Form ===============


    return (
        <>
            <section className={styles.screen}>
                <Container fluid className={styles.height}>
                    <Row className='justify-content-between'>
                        <Col lg={7}>
                            <form id="contactusform1">
                                <div className={`${styles.checkCol} screen`}>
                                    <div className={styles.progressBar}>
                                        <div className={`${styles.bar} ${currentStep > 0 ? styles.done : currentStep === 0 ? styles.active : ''}`}>
                                            <span>
                                                <Image quality={90} loading='lazy' src={check} alt='BitsWits' className={`${styles.check} img-fluid`} />
                                            </span>
                                            <p>START</p>
                                        </div>
                                        <div className={`${styles.bar} ${currentStep > 1 ? styles.done : currentStep === 1 ? styles.active : ''}`}>
                                            <span>
                                                <Image quality={90} loading='lazy' src={check} alt='BitsWits' className={`${styles.check} img-fluid`} />
                                            </span>
                                            <p>FEATURES</p>
                                        </div>
                                        <div className={`${styles.bar} ${currentStep > 2 ? styles.done : currentStep === 2 ? styles.active : ''}`}>
                                            <span>
                                                <Image quality={90} loading='lazy' src={check} alt='BitsWits' className={`${styles.check} img-fluid`} />
                                            </span>
                                            <p>USERS</p>
                                        </div>
                                        <div className={`${styles.bar} ${currentStep > 3 ? styles.done : currentStep === 3 ? styles.active : ''}`}>
                                            <span>
                                                <Image quality={90} loading='lazy' src={check} alt='BitsWits' className={`${styles.check} img-fluid`} />
                                            </span>
                                            <p>INTEGRATIONS</p>
                                        </div>
                                        <div className={`${styles.bar} ${currentStep > 4 ? styles.done : currentStep === 4 ? styles.active : ''}`}>
                                            <span>
                                                <Image quality={90} loading='lazy' src={check} alt='BitsWits' className={`${styles.check} img-fluid`} />
                                            </span>
                                            <p>MONETIZATION</p>
                                        </div>
                                        <div className={`${styles.bar} ${currentStep > 5 ? styles.done : currentStep === 5 ? styles.active : ''}`}>
                                            <span>
                                                <Image quality={90} loading='lazy' src={check} alt='BitsWits' className={`${styles.check} img-fluid`} />
                                            </span>
                                            <p>MAINTENANCE <br /> & HOSTING</p>
                                        </div>
                                        <div className={`${styles.bar} ${currentStep > 6 ? styles.done : currentStep === 6 ? styles.active : ''}`}>
                                            <span>
                                                <Image quality={90} loading='lazy' src={check} alt='BitsWits' className={`${styles.check} img-fluid`} />
                                            </span>
                                            <p>BUILDFIRE <br /> SERVICES</p>
                                        </div>
                                        <div className={`${styles.bar} ${styles.barLast} ${currentStep > 7 ? styles.done : currentStep === 7 ? styles.active : ''}`}>
                                            <span>
                                                <Image quality={90} loading='lazy' src={check} alt='BitsWits' className={`${styles.check} img-fluid`} />
                                            </span>
                                            <p>ESTIMATION</p>
                                        </div>
                                    </div>
                                    <div className={styles.progressContrnt}>
                                        {/* ========== Step 1 ========== */}
                                        <div className={currentStep === 0 ? 'd-block ps-3' : 'd-none'}>
                                            <div className={`${styles.checkBoxs}`}>
                                                <h3>What type of app are you building?</h3>
                                                <p>Apple iOS is a better choice to reach to a more engaged user base. Android has a broader reach, however, <br /> particularly in emerging markets, like Asia and Africa.</p>
                                                <div className={styles.forCheckBox}>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="android"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="android" className={styles.checkboxLabel}>
                                                            <h4>Google Android</h4>
                                                            <p>Development</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="ios"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="ios" className={styles.checkboxLabel}>
                                                            <h4>Apple iOS</h4>
                                                            <p>Operating system used by Apple products (e.g. iPhone, iPad)</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="webApp"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="webApp" className={styles.checkboxLabel}>
                                                            <h4>Progressive Web App (PWA)</h4>
                                                            <p>Web apps that are fast and reliable with very rich user experiences.</p>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* ========== Step 2 ========== */}
                                        <div className={currentStep === 1 ? 'd-block ps-3' : 'd-none'}>
                                            <div className={`${styles.checkBoxs} screen`}>
                                                <h3>What features would you like your app to have?</h3>
                                                <p>Filter by functionality type.</p>
                                                <div className={styles.forCheckBox}>
                                                    <h5>Content</h5>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="event"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="event" className={styles.checkboxLabel}>
                                                            <h4>See or Book Calendar Events</h4>
                                                            <p>Development</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="map"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="map" className={styles.checkboxLabel}>
                                                            <h4>Map & Location</h4>
                                                            <p>Simple maps that display a place, allows for pins and short descriptions and basic calculation of distance.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="weather"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="weather" className={styles.checkboxLabel}>
                                                            <h4>Weather</h4>
                                                            <p>Get real time weather forecasts for the users current location.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="host"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="host" className={styles.checkboxLabel}>
                                                            <h4>Host Documents</h4>
                                                            <p>Manage, organize, and share files, images and videos with your users.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="task"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="task" className={styles.checkboxLabel}>
                                                            <h4>Manage Tasks and Checklists</h4>
                                                            <p>Track and manage tasks and to-do lists for the individual or for the team.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="content"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="content" className={styles.checkboxLabel}>
                                                            <h4>Scheduled Content</h4>
                                                            <p>Release new content by scheduling the post by time and day.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="flash"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="flash" className={styles.checkboxLabel}>
                                                            <h4>Flash Cards</h4>
                                                            <p>Release new content by scheduling the post by time and day.</p>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className={styles.forCheckBox}>
                                                    <h5>Social</h5>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="board"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="board" className={styles.checkboxLabel}>
                                                            <h4>Chat and Message Boards</h4>
                                                            <p>Create message boards and chatrooms where users can like and comment.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="media"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="media" className={styles.checkboxLabel}>
                                                            <h4>Social Media</h4>
                                                            <p>Link your Facebook and Twitter pages to your app.</p>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className={styles.forCheckBox}>
                                                    <h5>Fitness</h5>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="weight"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="weight" className={styles.checkboxLabel}>
                                                            <h4>Weight Tracker</h4>
                                                            <p>Users can set fitness goals, track their progress and even monitor their hydration, exercise and diet, as well as send customized encouragement messages. Screen reader support enabled.</p>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className={styles.forCheckBox}>
                                                    <h5>Media</h5>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="video"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="video" className={styles.checkboxLabel}>
                                                            <h4>Stream Video</h4>
                                                            <p>Video streaming with simple controls, pause, play, volume control. Normal and full screen play (e.g. YouTube, Vimeo… etc).</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="audio"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="audio" className={styles.checkboxLabel}>
                                                            <h4>Stream Audio</h4>
                                                            <p>Audio streaming with simple controls, pause, play, volume control (e.g. Soundcloud).</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="image"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="image" className={styles.checkboxLabel}>
                                                            <h4>Image Gallery</h4>
                                                            <p>Organize images in a gallery for your users to browse and view.</p>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className={styles.forCheckBox}>
                                                    <h5>Forms</h5>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="forms"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="forms" className={styles.checkboxLabel}>
                                                            <h4>Forms</h4>
                                                            <p>Capture information by allowing users to submit forms.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="surveys"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="surveys" className={styles.checkboxLabel}>
                                                            <h4>Quizzez and Surveys</h4>
                                                            <p>Increase and improve user engagement by creating quizzes, Q&A systems, and customer support surveys.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="book"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="book" className={styles.checkboxLabel}>
                                                            <h4>Book Appointments and Reservations</h4>
                                                            <p>Scheduling meetings and appointments made easy.</p>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className={styles.forCheckBox}>
                                                    <h5>Ecommerce</h5>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="ecommerce"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="ecommerce" className={styles.checkboxLabel}>
                                                            <h4>Ecommerce</h4>
                                                            <p>Ability to list items (image, description, price, etc), shopping cart feature, checkout, email confirmation, purchase history, etc)with payments included.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="scanning"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="scanning" className={styles.checkboxLabel}>
                                                            <h4>QR Code Scanning and Online Purchases</h4>
                                                            <p>Scan and save QR Codes to your phone.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="coupon"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="coupon" className={styles.checkboxLabel}>
                                                            <h4>Create Coupons</h4>
                                                            <p>Provide coupons to users that are filterable, searchable and mappable.</p>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className={styles.forCheckBox}>
                                                    <h5>Loyalty</h5>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="points"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="points" className={styles.checkboxLabel}>
                                                            <h4>Loyalty Points</h4>
                                                            <p>Reward users with points that can be used to access deals or benefits inside the app.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="feedback"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="feedback" className={styles.checkboxLabel}>
                                                            <h4>Customer Feedback</h4>
                                                            <p>Listen to your customers honest feedback through a star rating system and custom commenting.</p>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className={styles.forCheckBox}>
                                                    <h5>Custom</h5>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="small"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="small" className={styles.checkboxLabel}>
                                                            <h4>Small Feature</h4>
                                                            <p>You want to develop a feature in the app that is straightforward and around 1-2 screens deep.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="bigger"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="bigger" className={styles.checkboxLabel}>
                                                            <h4>Bigger Feature</h4>
                                                            <p>You want to develop a feature that is straightforward but is larger in size and may have some business logic that accompanies it.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="backend"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="backend" className={styles.checkboxLabel}>
                                                            <h4>Feature With a Backend</h4>
                                                            <p>You want to develop a whole section of the app that will leverage a custom backend or possibly integrate with our own existing backend.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="system"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="system" className={styles.checkboxLabel}>
                                                            <h4>Building a System</h4>
                                                            <p>You want to shoot for the moon you have big ideas that aren’t limited to just an app. You are looking for a team of consultants and not just robotic developers to help you achieve your goals.</p>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* ========== Step 3 ========== */}
                                        <div className={currentStep === 2 ? 'd-block ps-3' : 'd-none'}>
                                            <div className={`${styles.checkBoxs} screen`}>
                                                <h3>How do people login?</h3>
                                                <p>An email login is generally best to start with unless your app will have tight integration with services like Facebook or Twitter, in which case social login is better.</p>
                                                <div className={styles.forCheckBox}>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="email"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="email" className={styles.checkboxLabel}>
                                                            <h4>Email</h4>
                                                            <p>Login will be through an email and password combination. There will also be a reset password option to help with forgotten passwords.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="social"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="social" className={styles.checkboxLabel}>
                                                            <h4>Social (Facebook, Twitter, ...etc)</h4>
                                                            <p>Users will be able to login using an existing social media account (e.g. Facebook, Twitter).</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="single"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="single" className={styles.checkboxLabel}>
                                                            <h4>Single Sign On (SSO)</h4>
                                                            <p>Users will be able to login using one set of login credentials that are used across multiple applications.</p>
                                                        </label>
                                                    </div>
                                                </div>

                                                <h3>What information would you like to know about your users?</h3>
                                                <p>These are the data points you want to keep track of you users to better engage them.</p>
                                                <div className={styles.forCheckBox}>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="info"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="info" className={styles.checkboxLabel}>
                                                            <h4>User Profile Info</h4>
                                                            <p>Find out details about the users in your applications (e.g. image, name, email, bio...etc)</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="segment"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="segment" className={styles.checkboxLabel}>
                                                            <h4>Segment Users</h4>
                                                            <p>Segment users into categories in order to have a better picture of your user base (e.g. Admins, VIP's, Employees).</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="activity"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="activity" className={styles.checkboxLabel}>
                                                            <h4>User Activity</h4>
                                                            <p>See what each user is doing and how they are using the app (Downloaded, Opened the app, Viewed Content, ...etc).</p>
                                                        </label>
                                                    </div>
                                                </div>

                                                <h3>How would you like to engage your users?</h3>
                                                <p>These features allow you to communicate with your users or to facilitate user to user communication.</p>
                                                <div className={styles.forCheckBox}>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="push"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="push" className={styles.checkboxLabel}>
                                                            <h4>Send Push Notifications</h4>
                                                            <p>Alert users with push notifications to let them know about new updates.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="newsletters"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="newsletters" className={styles.checkboxLabel}>
                                                            <h4>Subscription to Newsletters</h4>
                                                            <p>Allow users to subscribe to newsletters that will keep them up to date with everything new that’s going on in the app (e.g Deals, Articles, News, Updates...etc).</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="allow"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="allow" className={styles.checkboxLabel}>
                                                            <h4>Allow Users to Chat</h4>
                                                            <p>Chat would allow users to send real-time messages to each other.</p>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* ========== Step 4 ========== */}
                                        <div className={currentStep === 3 ? 'd-block ps-3' : 'd-none'}>
                                            <div className={`${styles.checkBoxs} screen`}>
                                                <h3>What device features will your app need to integrate with?</h3>
                                                <p>These are sensors on the device you can integrate with.</p>
                                                <div className={styles.forCheckBox}>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="camera"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="camera" className={styles.checkboxLabel}>
                                                            <h4>Camera</h4>
                                                            <p>Take photos or upload images from the camera roll.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="fences"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="fences" className={styles.checkboxLabel}>
                                                            <h4>Geo-Fences</h4>
                                                            <p>Geo-Fences allow you to create a virtual fence around an area to trigger specific actions.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="bluetooth"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="bluetooth" className={styles.checkboxLabel}>
                                                            <h4>Bluetooth</h4>
                                                            <p>You can use Bluetooth to communicate and transfer data between devices.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="gyroscope"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="gyroscope" className={styles.checkboxLabel}>
                                                            <h4>Gyroscope</h4>
                                                            <p>A gyroscope is a device that uses Earth’s gravity to help determine orientation.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="accelerometer"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="accelerometer" className={styles.checkboxLabel}>
                                                            <h4>Accelerometer</h4>
                                                            <p>An accelerometer is a compact device designed to measure non-gravitational acceleration.</p>
                                                        </label>
                                                    </div>
                                                </div>

                                                <h3>Will your app need to Integrate with other systems?</h3>
                                                <p>Connecting your app to your backend system or other third party systems.</p>
                                                <div className={styles.forCheckBox}>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="public"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="public" className={styles.checkboxLabel}>
                                                            <h4>Public API's</h4>
                                                            <p>Integrate with third party API’s to send or retrieve data.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="systems"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="systems" className={styles.checkboxLabel}>
                                                            <h4>Backend Systems</h4>
                                                            <p>Have your app communicate with your backend systems (e.g servers, databases)</p>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* ========== Step 5 ========== */}
                                        <div className={currentStep === 4 ? 'd-block ps-3' : 'd-none'}>
                                            <div className={`${styles.checkBoxs} screen`}>
                                                <h3>Will your app generate revenue?</h3>
                                                <p>Charging users for your app upfront is cheaper than building in-app purchases, but in-app purchase can produce higher returns if/when you have an engaged user base.</p>
                                                <div className={styles.forCheckBox}>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="cost"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="cost" className={styles.checkboxLabel}>
                                                            <h4>Up-front Cost</h4>
                                                            <p>Users will be charged once or pay a monthly subscription fee.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="purchases"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="purchases" className={styles.checkboxLabel}>
                                                            <h4>In-App Purchases</h4>
                                                            <p>Users will be able to purchase premium features in the app that will improve the experience.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="free"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="free" className={styles.checkboxLabel}>
                                                            <h4>Free</h4>
                                                            <p>The app will be free for everyone to enjoy.</p>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* ========== Step 6 ========== */}
                                        <div className={currentStep === 5 ? 'd-block ps-3' : 'd-none'}>
                                            <div className={`${styles.checkBoxs} ${styles.checkBoxs2} screen`}>
                                                <h3>Option 1: Host and develop your app with BuildFire</h3>
                                                <p>When you build your app with BuildFire, all of the infrastructure is taken care of for you and your app can easily scale to millions of users. You also don’t need to worry about any ongoing maintenance or support costs because it’s all included in your subscription!</p>
                                                <div className={styles.forCheckBox}>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="enterprise"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="enterprise" className={styles.checkboxLabel}>
                                                            <div className={styles.imgBox}>
                                                                <Image src={box1} alt='BitsWits' className={`img-fluid`} />
                                                            </div>
                                                            <h4>Enterprise</h4>
                                                            <p>Premium support and functionality to maximize the business value of your app.</p>
                                                            <div className={styles.costBox1}>
                                                                <p className={styles.cost}>
                                                                    <sup>$</sup>
                                                                    499
                                                                    <span> /mo</span>
                                                                </p>
                                                                <p>Per month billed quarterly.</p>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="business"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="business" className={styles.checkboxLabel}>
                                                            <div className={styles.imgBox}>
                                                                <Image src={box2} alt='BitsWits' className={`img-fluid`} />
                                                            </div>
                                                            <h4>Business</h4>
                                                            <p>Additional capabilities to get more out of your app.</p>
                                                            <div className={styles.costBox1}>
                                                                <p className={styles.cost}>
                                                                    <sup>$</sup>
                                                                    349
                                                                    <span> /mo</span>
                                                                </p>
                                                                <p>Per month billed quarterly.</p>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="growth"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="growth" className={styles.checkboxLabel}>
                                                            <div className={`${styles.imgBox} ${styles.imgBox3}`}>
                                                                <Image src={box3} alt='BitsWits' className={`img-fluid`} />
                                                            </div>
                                                            <h4>Growth</h4>
                                                            <p>The basics needed to get you started with a business app.</p>
                                                            <div className={styles.costBox1}>
                                                                <p className={styles.cost}>
                                                                    <sup>$</sup>
                                                                    189
                                                                    <span> /mo</span>
                                                                </p>
                                                                <p>Per month billed quarterly.</p>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>

                                                <h3>Option 2: Host and maintain all your own infrastructure</h3>
                                                <p>When you build your app without an app development platform like BuildFire, you are required to host and maintain all of your own infrastructure to keep your app running. Unless your app is completely static, you will need a backend. We’ve broken down the most common components every app will need for their backend.</p>
                                                <div className={`${styles.forCheckBox} ${styles.forCheckBox2}`}>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="minimal"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="minimal" className={styles.checkboxLabel}>
                                                            <h4>Minimal Infrastructure | 0 - 10.000 users $500/mo</h4>
                                                            <ul className={styles.listBox2}>
                                                                <li>Database - <span>$100/mo</span></li>
                                                                <li>Servers - <span>$100/mo</span></li>
                                                                <li>File Server - <span>$50/mo</span></li>
                                                                <li>Push Notification Server - <span>$20/mo</span></li>
                                                                <li>Image Server - <span>$50/mo</span></li>
                                                                <li>Analytics Server - <span>$20/mo</span></li>
                                                                <li>Firewalls - <span>$50/mo</span></li>
                                                                <li>Content Delivery Network - <span>$50/mo</span></li>
                                                                <li>Load Balancer - <span>$50/mo</span></li>
                                                            </ul>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="medium"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="medium" className={styles.checkboxLabel}>
                                                            <h4>Medium Infrastructure | 10.000 - 100.000 users $1000/mo</h4>
                                                            <ul className={styles.listBox2}>
                                                                <li>Database - <span>$2000/mo</span></li>
                                                                <li>Servers - <span>$1000/mo</span></li>
                                                                <li>File Server - <span>$300/mo</span></li>
                                                                <li>Push Notification Server - <span>$300/mo</span></li>
                                                                <li>Image Server - <span>$300/mo</span></li>
                                                                <li>Analytics Server - <span>$300/mo</span></li>
                                                                <li>Firewalls - <span>$300/mo</span></li>
                                                                <li>Content Delivery Network - <span>$300/mo</span></li>
                                                                <li>Load Balancer - <span>$300/mo</span></li>
                                                            </ul>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="large"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="large" className={styles.checkboxLabel}>
                                                            <h4>Large Infrastructure | 100.000 - 1.000.000 users $2000/mo</h4>
                                                            <ul className={styles.listBox2}>
                                                                <li>Database - <span>$5000/mo</span></li>
                                                                <li>Servers - <span>$3000/mo</span></li>
                                                                <li>File Server - <span>$1000/mo</span></li>
                                                                <li>Push Notification Server - <span>$2000/mo</span></li>
                                                                <li>Image Server - <span>$1000/mo</span></li>
                                                                <li>Analytics Server - <span>$2000/mo</span></li>
                                                                <li>Firewalls - <span>$1000/mo</span></li>
                                                                <li>Content Delivery Network - <span>$1000/mo</span></li>
                                                                <li>Load Balancer - <span>$1000/mo</span></li>
                                                            </ul>
                                                        </label>
                                                    </div>
                                                </div>

                                                <h3>What kind of maintenance do you need on an ongoing basis?</h3>
                                                <p>With constant changes to iOS and Android you will need to make sure your app stays up to date and compatible. Industry averages to maintain an application are around 20-40% of the upfront cost each year.</p>
                                                <div className={`${styles.forCheckBox} ${styles.forCheckBox3}`}>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="aMaintenance"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="aMaintenance" className={styles.checkboxLabel}>
                                                            <h4>Andriod Maintenance</h4>
                                                            <p>Keep your Android App up to date with the latest updates and make enhancements to your app.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="iMaintenance"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="iMaintenance" className={styles.checkboxLabel}>
                                                            <h4>iOS Maintenance</h4>
                                                            <p>Keep your iOS App up to date with the latest updates and make enhancements to your app.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="sMaintenance"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="sMaintenance" className={styles.checkboxLabel}>
                                                            <h4>Server Maintenance</h4>
                                                            <p>If your app requires a server, you will need to monitor uptime and maintain redundancy.</p>
                                                        </label>
                                                    </div>
                                                </div>

                                                <h3>What support will you need on an ongoing basis?</h3>
                                                <p>Chances are you’re not the one building and maintaining your app. You’re going to have an engineering team or freelancer maintaining your app. These are typically the support options available.</p>
                                                <div className={`${styles.forCheckBox} ${styles.forCheckBox3}`}>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="eSupport"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="eSupport" className={styles.checkboxLabel}>
                                                            <h4>Direct Email</h4>
                                                            <p>Email support 24/7.</p>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="cSupport"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="cSupport" className={styles.checkboxLabel}>
                                                            <h4>Direct Call</h4>
                                                            <p>Call support 24/7.</p>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* ========== Step 7 ========== */}
                                        <div className={currentStep === 6 ? 'd-block ps-3' : 'd-none'}>
                                            <div className={`${styles.checkBoxs} ${styles.checkBoxs3} screen`}>
                                                <h3>Setup & Design Packages</h3>
                                                <p>Hire a top-notch team of designers and app strategists to build your app for you on top of the BuildFire platform.</p>
                                                <div className={styles.forCheckBox}>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="premium"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="premium" className={styles.checkboxLabel}>
                                                            <div className={styles.imgBox}>
                                                                <Image src={setup1} alt='BitsWits' className={`img-fluid`} />
                                                            </div>
                                                            <div className={styles.costBox2}>
                                                                <p className={styles.cost}>
                                                                    <sup>$</sup>
                                                                    4,500
                                                                </p>
                                                                <p>starting at</p>
                                                            </div>
                                                            <h4>Premium Setup</h4>
                                                            <p>BitsWits’s signature package covers every small detail you need to get a high-quality app published to the world.</p>
                                                            <div className={styles.costBox3}>
                                                                <div className={styles.costBox4}>
                                                                    <div className={styles.listBox}>
                                                                        <div className={styles.headBox}>
                                                                            <Image src={mockImg1} alt='BitsWits' className={`img-fluid`} />
                                                                            <h5>App Design Mockups</h5>
                                                                        </div>
                                                                        <ul>
                                                                            <li>2 app design options</li>
                                                                            <li>2 revisions</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className={styles.costBox4}>
                                                                    <div className={styles.listBox}>
                                                                        <div className={styles.headBox}>
                                                                            <Image src={mockImg2} alt='BitsWits' className={`img-fluid`} />
                                                                            <h5>App Size / Setup</h5>
                                                                        </div>
                                                                        <ul>
                                                                            <li>Small app</li>
                                                                            <li>10-15 screens</li>
                                                                            <li>3 hours of content entry</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className={styles.costBox4}>
                                                                    <div className={styles.listBox}>
                                                                        <div className={styles.headBox}>
                                                                            <Image src={mockImg3} alt='BitsWits' className={`img-fluid`} />
                                                                            <h5>Expert Assistance</h5>
                                                                        </div>
                                                                        <ul>
                                                                            <li>2 - 60 minute Expert Assistance Sessions</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className={styles.costBox4}>
                                                                    <div className={styles.listBox}>
                                                                        <div className={styles.headBox}>
                                                                            <Image src={mockImg4} alt='BitsWits' className={`img-fluid`} />
                                                                            <h5>Marketing Materials</h5>
                                                                        </div>
                                                                        <ul>
                                                                            <li>Promo Video</li>
                                                                            <li>App Phone Mockups</li>
                                                                            <li>Social media ads +copy</li>
                                                                            <li>Premium App Store Screenshots</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className={styles.costBox4}>
                                                                    <div className={styles.listBox}>
                                                                        <div className={styles.headBox}>
                                                                            <Image src={mockImg5} alt='BitsWits' className={`${styles.imgMock} img-fluid`} />
                                                                            <h5>Integrations</h5>
                                                                        </div>
                                                                        <ul>
                                                                            <li>Zapier</li>
                                                                            <li>Server to server API</li>
                                                                            <li>Segment Analytics</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className={styles.costBox4}>
                                                                    <div className={styles.listBox}>
                                                                        <div className={styles.headBox}>
                                                                            <Image src={mockImg6} alt='BitsWits' className={`img-fluid`} />
                                                                            <h5>Advanced Functionality</h5>
                                                                        </div>
                                                                        <ul>
                                                                            <li>Customizations to existing features</li>
                                                                            <li>Access to premium plugins worth $5,000</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className={`${styles.checkBox}`}>
                                                        <input
                                                            type="checkbox"
                                                            id="signature"
                                                            className={styles.checkboxInput}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <label htmlFor="signature" className={styles.checkboxLabel}>
                                                            <div className={styles.imgBox}>
                                                                <Image src={setup2} alt='BitsWits' className={`img-fluid`} />
                                                            </div>
                                                            <div className={styles.costBox2}>
                                                                <p className={styles.cost}>
                                                                    <sup>$</sup>
                                                                    7,500
                                                                </p>
                                                                <p>starting at</p>
                                                            </div>
                                                            <h4>Signature Setup</h4>
                                                            <p>BitsWits’s signature package covers every small detail you need to get a high-quality app published to the world.</p>
                                                            <div className={styles.costBox3}>
                                                                <div className={styles.costBox4}>
                                                                    <div className={styles.listBox}>
                                                                        <div className={styles.headBox}>
                                                                            <Image src={mockImg1} alt='BitsWits' className={`img-fluid`} />
                                                                            <h5>App Design Mockups</h5>
                                                                        </div>
                                                                        <ul>
                                                                            <li>2 app design options</li>
                                                                            <li>2 revisions</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className={styles.costBox4}>
                                                                    <div className={styles.listBox}>
                                                                        <div className={styles.headBox}>
                                                                            <Image src={mockImg2} alt='BitsWits' className={`img-fluid`} />
                                                                            <h5>App Size / Setup</h5>
                                                                        </div>
                                                                        <ul>
                                                                            <li>Small app</li>
                                                                            <li>10-15 screens</li>
                                                                            <li>3 hours of content entry</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className={styles.costBox4}>
                                                                    <div className={styles.listBox}>
                                                                        <div className={styles.headBox}>
                                                                            <Image src={mockImg3} alt='BitsWits' className={`img-fluid`} />
                                                                            <h5>Expert Assistance</h5>
                                                                        </div>
                                                                        <ul>
                                                                            <li>2 - 60 minute Expert Assistance Sessions</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className={styles.costBox4}>
                                                                    <div className={styles.listBox}>
                                                                        <div className={styles.headBox}>
                                                                            <Image src={mockImg4} alt='BitsWits' className={`img-fluid`} />
                                                                            <h5>Marketing Materials</h5>
                                                                        </div>
                                                                        <ul>
                                                                            <li>Promo Video</li>
                                                                            <li>App Phone Mockups</li>
                                                                            <li>Social media ads +copy</li>
                                                                            <li>Premium App Store Screenshots</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className={styles.costBox4}>
                                                                    <div className={styles.listBox}>
                                                                        <div className={styles.headBox}>
                                                                            <Image src={mockImg5} alt='BitsWits' className={`${styles.imgMock} img-fluid`} />
                                                                            <h5>Integrations</h5>
                                                                        </div>
                                                                        <ul>
                                                                            <li>Zapier</li>
                                                                            <li>Server to server API</li>
                                                                            <li>Segment Analytics</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className={styles.costBox4}>
                                                                    <div className={styles.listBox}>
                                                                        <div className={styles.headBox}>
                                                                            <Image src={mockImg6} alt='BitsWits' className={`img-fluid`} />
                                                                            <h5>Advanced Functionality</h5>
                                                                        </div>
                                                                        <ul>
                                                                            <li>Customizations to existing features</li>
                                                                            <li>Access to premium plugins worth $5,000</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* ========== Step 8 ========== */}
                                        <div className={currentStep === 7 ? 'd-block ps-3' : 'd-none'}>
                                            <div className={styles.fromBox}>
                                                <h2>Enter Data <span className='text-white'>To Get A Detailed Breakdown Of <br /> Your</span> App Cost</h2>
                                                <div className={styles.estimateForm}>
                                                    <Row className='justify-content-between gy-4'>
                                                        <Col lg={4}>
                                                            <input type="text" name="name" id="name" placeholder="Full Name" required />
                                                        </Col>
                                                        <Col lg={4}>
                                                            <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" id="phone" placeholder="Phone" required />
                                                        </Col>
                                                        <Col lg={4}>
                                                            <input type="email" name="email" placeholder="Email Address" required />
                                                        </Col>
                                                        <Col lg={12}>
                                                            <textarea type="textarea" name="comment" id="comments" placeholder="Comments" required />
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className={styles.selected}>
                                                    <h4>Selected Features:</h4>
                                                    <div className={`${styles.features} features`}>
                                                        <ol className='ps-2 m-0'>
                                                            {checkedItems.map((item, index) => (
                                                                <li key={index}>{index + 1}. {labels[item]}</li>
                                                            ))}
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    {currentStep > 6 && (
                                        <button id="savebtns" type="submit" className={`bitsForm ${styles.bttns1}`}>Submit</button>
                                    )}
                                </div>

                                {/* <div>
                                    <h3>Selected Answers:</h3>
                                    <ul>
                                        {Object.values(checkedAnswers).map((item, index) => {
                                            return (
                                                <li key={index} className='mb-3'>
                                                    <strong>{item.question}</strong>
                                                    <br />
                                                    <span>{item.answer}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div> */}
                            </form>
                        </Col>
                        <Col lg={5}>
                            <div className={styles.imgCol}>
                                <div className={`${styles.imgBg} mx-auto`}>
                                    {/* {renderImage()} */}
                                    <Image src={screen12} alt="BitsWits" className='img-fluid' />
                                </div>
                                <div className={styles.para}>
                                    <p>Disclaimer: This is a tool to estimate app cost if you were to develop your app with an outside agency. Typically BuildFire prices are a fraction of the cost of an outside agency because our app development platform significantly reduces the amount of time and effort to build an app.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CalculatorScreen
