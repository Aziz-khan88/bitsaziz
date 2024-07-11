import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Formnewlpnewhome.module.css";
//
import badgelogo from '/public/images/footerimage/badgelogo.svg'

import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"


const Formnewlpnewhome = () => {

    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [score, setScore] = useState('Submit');

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
            name: e.target.first.value,
            last: e.target.last.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: e.target.comment.value,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        }
        const JSONdata = JSON.stringify(data);
        setScore('Sending Data');

        // First API call to your server
        fetch('/api/emailapi/', {
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
            <section className={styles.team} id='lastform'>
                <Container>
                    <Row className='align-items-center gy-5'>
                        <Col xl={6}>
                            <div className={styles.star}>
                                <h3 className='font20 white fw800'>30 Minutes Strategy Session</h3>
                                <h2 className='font40 white fw600'> Get Your<span className='fw800 f45'> Free 30 Minute </span>  <br></br>  <span className='fw600'>Strategy Session With An <br></br>
                                    Experienced </span>  <span className='fw800 f45'> App Experts </span> <br></br> <span className='fw600'>Valued</span> At  <span className='fw800 f45'> $300 </span></h2>
                            </div>

                        </Col>
                        <Col xl={6}>
                            <form className={styles.your} onSubmit={handleSubmit}>
                                <h3 className='font25 white fw700'>Have a Project To Discuss?</h3>
                                <h2 className='f-60 mb-4 fw700'>We're Ready!</h2>
                                <input type='text' minLength="4" name='first' required className='form-control' placeholder="First Name"></input>
                                <input type='text' name='last' required className='form-control  mt-3' placeholder="Last Name"></input>
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className='form-control mt-3' placeholder="Enter your Phone No"></input>
                                <input type='email' name='email' required className='form-control mt-3' placeholder="Enter your Email"></input>
                                <textarea placeholder='Comment' name='comment' className='form-control mt-3'></textarea>
                                <input type='submit' value={score} name='submit' className={`bitsForm ${styles.value}`} placeholder="Submit"></input>
                                <p className='font12 white fw300 center mt-3'>We will handle your data in accordance with our <Link className='newfycolr' href="/privacy-policy">Privacy Policy</Link></p>
                            </form>

                        </Col>

                    </Row>
                    <div className={styles.ipsun}>
                        <Image src={badgelogo} alt='BitsWits' className='img-fluid' />
                    </div>
                    <div className={styles.appli}>
                        <p className="mb-0">No#1 Top Application Development Company</p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Formnewlpnewhome