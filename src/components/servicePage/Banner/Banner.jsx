"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/Banner.module.css"
// Images
import formImg from 'media/newmobileapp/formImg.png'
import correcticon from "media/services/correct-icon.svg"

const Banner = ({ content }) => {
    // const { title, desc } = content;
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
        <section className={`${styles.bannerSec} ${styles.bannerOne}`}>
            <Container>
                <Row>
                    <Col lg={7} xl={6} className='p-lg-0'>
                        <div className="txt">
                            <p className={`mb-2 ${styles.firstPara} manrope font-bold`}>Quickly – Efficiently – Effortlessly</p>
                            <h1 className='text-black mb-3 mb-lg-4 manrope font-bold'>Empower Your Business With Top-Class Software Development</h1>
                            <ul className='px-0 pb-2 mb-0'>
                                <li>
                                    <p className='font16 text-black font-medium mt-2 mt-xl-3 mb-3 mb-xl-4 mb-0 manrope'>
                                        <Image src={correcticon} alt='Bitswits' className='img-fluid me-2 me-md-3' />
                                        We’re a software development company that ensures its experts
                                    </p>
                                </li>
                                <li>
                                    <p className='font16 text-black font-medium mt-2 mt-xl-3 mb-3 mb-xl-4 mb-0 manrope'>
                                        <Image src={correcticon} alt='Bitswits' className='img-fluid me-2 me-md-3' />
                                        Cost-Effective Functional App Delivery In Just 45 Days
                                    </p>
                                </li>
                                <li>
                                    <p className='font16 text-black font-medium mt-2 mt-xl-3 mb-3 mb-xl-4 mb-0 manrope'>
                                        <Image src={correcticon} alt='Bitswits' className='img-fluid me-2 me-md-3' />
                                        We’re a software development company that ensures its experts
                                    </p>
                                </li>
                                <li>
                                    <p className='font16 text-black font-medium mt-2 mt-xl-3 mb-3 mb-xl-4 mb-0 manrope'>
                                        <Image src={correcticon} alt='Bitswits' className='img-fluid me-2 me-md-3' />
                                        Cost-Effective Functional App Delivery In Just 45 Days Almost
                                    </p>
                                </li>
                            </ul>
                            <div className="btn d-flex align-items-center gap-4 px-0">
                                <a href="javascript:;" className={`${styles.demoBtn} font-bold manrope`}>
                                    Get a Free Demo
                                </a>
                                <a href="javascript:;" className={`${styles.portfolioBtn} font-bold manrope`}>
                                    See Portfolio
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} xl={6}>
                        <form id='BannerForm' className={styles.your} onSubmit={handleSubmit}>
                            <h3 className='manrope'>Share Your Requirements</h3>
                            <p className='text-white text-center manrope font-regular mb-3'>To help our experts understand your business objectives and create your customized plan.!</p>
                            <input type='text' minLength="4" name='name' required className='form-control' placeholder="Full Name"></input>
                            <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className='form-control mt-2 mt-xxl-3' placeholder="Phone Number"></input>
                            <input type='email' name='email' required className='form-control mt-2 mt-xxl-3' placeholder="Email Address"></input>
                            <textarea placeholder='Description' name='comment' className='form-control mt-2 mt-xxl-3'></textarea>
                            <div className='d-sm-flex align-items-center mt-3 mt-xxl-4'>
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
    )
}

export default Banner
