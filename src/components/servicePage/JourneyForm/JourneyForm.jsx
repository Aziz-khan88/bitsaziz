"use client"
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import Axios from "axios";
//
import styles from '@/styles/servicepage/JourneyForm.module.css'
import formImg from 'media/newmobileapp/formImg.png'

const JournyForm = () => {
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
            <section className={styles.JournyForm}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.content}>
                                <h2 className='manrope'>
                                    <span>Start </span> Your <span>Mobile App </span> Development <br className='d-xl-block d-none'/>
                                    Journey with Us?</h2>
                                <div className={styles.experts}>
                                    <h5 className='manrope'>30 Minute Breakdown</h5>
                                    <h4 className='manrope'>Get Your Free 30 Minute Strategy Session With An
                                    Experienced App Experts Valued At $300</h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <form id='form' onSubmit={handleSubmit}>
                                <div className='mb-4'>
                                    <h4 className='manrope'>Have an Idea to Execute?</h4>
                                    <h3 className='grdiant manrope'>We’re Listening</h3>
                                </div>
                                <input type='text' minLength="4" name='name' required className='form-control manrope' placeholder="Full Name"></input>
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className='form-control mt-3 manrope' placeholder="Phone Number"></input>
                                <input type='email' name='email' required className='form-control mt-3 manrope' placeholder="Email Address"></input>
                                <textarea placeholder='Comment' name='comment' className='form-control mt-3 manrope'></textarea>
                                <div className={`d-flex justify-content-between mt-3 mt-md-5 ${styles.formBottom}`}>
                                    <div className='d-flex align-items-center gap-1'>
                                        <input className={`mb-0 ${styles.vehicle1} manrope`} type='checkbox' name='vehicle1' checked={checkboxes.includes('Share Non Disclosure Agreement')} onChange={handleOptionChange3} value='Share Non Disclosure Agreement' />
                                        <label className='form-check-label manrope font16 font-medium' htmlFor='flexCheckDefault'> Share Non Disclosure Agreement</label>
                                    </div>
                                    <button className={`${styles.value} manrope bitsForm`} type='submit'>
                                        <Image src={formImg} className='img-fluid' alt='BitsWits' />
                                        Submit
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

export default JournyForm
