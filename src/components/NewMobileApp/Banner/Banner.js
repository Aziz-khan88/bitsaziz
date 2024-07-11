import Image from 'next/image';
import Axios from "axios";
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Typing from 'react-typing-effect';
import styles from "@/styles/NewMobileApp/Banner.module.css"
// images 
import badgeClient from "media/newdubai/badgesClient.png"
import Star from "media/newDubaiPagev1/star.png"
import Clutch from "media/newmobileapp/clutch-black.png"
import Partner from "media/newmobileapp/partner.png"
import formImg from 'media/newmobileapp/formImg.png'

const Banner = ({ content }) => {
    const { title, desc } = content;
    const [checkboxes, setCheckboxes] = useState([]);
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');

    // Creating function to load IP address from the API
    const getIPData = async () => {
        try {
            const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
            setIP(res.data);
        } catch (error) {
            console.error('Error fetching IP data:', error);
        }
    };

    useEffect(() => {
        getIPData();
        setPagenewurl(window.location.href);
    }, []);

    const handleOptionChange3 = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCheckboxes([...checkboxes, value]);
        } else {
            setCheckboxes(checkboxes.filter((checkbox) => checkbox !== value));
        }
    };

    const router = usePathname();
    const currentRoute = router;

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if IP data is available before submitting the form
        if (!ip) {
            console.error('IP data is not available yet. Please try again later.');
            return;
        }

        const currentdate = new Date().toLocaleString();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: e.target.comment.value,
            checkboxesdata: checkboxes,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        };
        const JSONdata = JSON.stringify(data);

        // First API call to your server
        fetch('/api/emailapidubai/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`);
            if (res.status === 200) {
                console.log(`Response Successed ${res}`);
            }
        });

        // Second API call to SheetDB
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
            "Content-Type": "application/json"
        };
        let bodyContent = JSON.stringify({
            "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            "Brand": "Bitswits",
            "Page": `${currentRoute}`,
            "Date": currentdate,
            "Time": currentdate,
            "JSON": JSONdata,
        });
        await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        // Third API call to another endpoint
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "fields": [
                {
                    "objectTypeId": "0-1",
                    "name": "email",
                    "value": e.target.email.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "firstname",
                    "value": e.target.name.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "phone",
                    "value": e.target.phone.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "message",
                    "value": e.target.comment.value
                }
            ],
            "context": {
                "ipAddress": ip.IPv4,
                "pageUri": pagenewurl,
                "pageName": pagenewurl
            },
            "legalConsentOptions": {
                "consent": {
                    "consentToProcess": true,
                    "text": "I agree to allow Example Company to store and process my personal data.",
                    "communications": [
                        {
                            "value": true,
                            "subscriptionTypeId": 999,
                            "text": "I agree to receive marketing communications from Example Company."
                        }
                    ]
                }
            }
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        await fetch("https://api.hsforms.com/submissions/v3/integration/submit/46084502/ea92327e-cdf7-4b04-9538-8d0c0e92cd9e", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

        const { pathname } = router;
        if (pathname == pathname) {
            window.location.href = '/thank-you';
        }
    }

    return (
        <>
            <section className={`${styles.bannerSec}`} >
                <Container>
                    <Row className={`g-5 ${styles.applost} align-items-center`}>
                        <Col lg={7} xl={6} className='p-0 my-0'>
                            <div>
                                <Typing
                                    className={styles.quickly}
                                    text='Timely – Trusted – Trailblazing'
                                    speed={100}
                                    eraseDelay={200}
                                    typingDelay={100}
                                />
                            </div>
                            <div className={styles.oppp}>
                                <h1 className='text-black fw600 mb-3'>
                                    {title}
                                </h1>
                                <p className='font16 text-black fw300 mt-3 mb-lg-4 fontsfregular'>
                                    {desc}
                                </p>
                                <a href='tel:1 833 500 6007' className={`${styles.deliver} blackPulse`}>
                                    Let’s Discuss Your Project
                                </a>
                            </div>
                            <div className={styles.badge}>
                                <div className={`d-flex align-items-center ${styles.clientRviews}`}>
                                    <div className={styles.clients}>
                                        <Image src={badgeClient} alt='Bitswits' width={183} height={80} />
                                    </div>
                                    <div>
                                        <div className={styles.reviews}>
                                            <Image src={Star} alt='Bitswits' width={25} height={22} />
                                            <Image src={Star} alt='Bitswits' width={25} height={22} />
                                            <Image src={Star} alt='Bitswits' width={25} height={22} />
                                            <Image src={Star} alt='Bitswits' width={25} height={22} />
                                            <Image src={Star} alt='Bitswits' width={25} height={22} />
                                        </div>
                                        <p className='mb-0'>
                                            <strong>4.8 out of 5</strong> (review rating)
                                            Over 1,200+ reviews
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between gap-4 gap-xxl-5'>
                                    <div className={styles.partnersImage}>
                                        <Image src={Clutch} alt='Bitswits' width={127} height={60} />
                                    </div>
                                    <div className={styles.partnersImage}>
                                        <Image src={Partner} alt='Bitswits' width={127} height={56} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} xl={6} className='p-0'>
                            <form id='BannerForm' className={styles.your} onSubmit={handleSubmit}>
                                <h3>Let’s Discuss <br /> Your App Idea In Detail</h3>
                                <p className='text-white text-center'>Our experts help you in the best way possible. Get customized plans!</p>
                                <input type='text' minLength="4" name='name' required className='form-control' placeholder="Full Name"></input>
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className='form-control mt-3' placeholder="Phone Number"></input>
                                <input type='email' name='email' required className='form-control mt-3' placeholder="Email Address"></input>
                                <textarea placeholder='Description' name='comment' className='form-control mt-3'></textarea>
                                <div className='d-sm-flex align-items-center mt-4'>
                                    <input className={styles.vehicle1} type='checkbox' name='vehicle1' checked={checkboxes.includes('Share Non Disclosure Agreement')} onChange={handleOptionChange3} value='Share Non Disclosure Agreement' />
                                    <label className='form-check-label' htmlFor='flexCheckDefault'>Sign Non-Disclosure Agreement </label>
                                    <button className={`pink ${styles.value} mt-4 mt-sm-0 blackPulse bitsForm`} type='submit'>
                                        <Image src={formImg} className='img-fluid' alt='BitsWits' />
                                        Sign Me Up
                                    </button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner
