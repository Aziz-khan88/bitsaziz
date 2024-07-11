import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Iosbanner.module.css";
//
import icon11 from '/public/newMobilePageImages/city1.png'
import icon12 from '/public/newMobilePageImages/city2.png'
import icon14 from '/public/newMobilePageImages/city3.png'
//
import arrow from '/public/newlppage/arrow.png'
import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"


const NewAddress = (props) => {
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
            name: e.target.name.value,
            last: 'null',
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: e.target.comment.value,
            comment1: e.target.comment1.value,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        };
        const JSONdata = JSON.stringify(data);
        setScore('Sending Data');

        // First API call to your server
        fetch('/api/sideform', {
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
            <section className={`${styles.newAddress} ${styles[props.addresClass]}`}>
                <Container className={styles.appios}>
                    <Row className='align-items-start'>
                        <Col lg={7}>
                            <div className={styles.make}>
                                <form className={styles.formsbanner} onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={6}>
                                            <div>
                                                <input type='text' name='name' minLength="4" className={styles.forminput} required placeholder='Your Name' />
                                                <input type='email' name='email' className={styles.forminput} required placeholder='Email Address' />
                                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className={styles.forminput} placeholder='Phone Number' />
                                                <textarea name='comment' className={`${styles.formarea} d-block d-lg-none`} placeholder='How can we help you?' ></textarea>
                                                <div className={`${styles.take} d-flex`}>
                                                    <p className='font12 font-semibold fontf m-0'>We take your privacy seriously. Read our <span>Privacy</span></p>
                                                </div>
                                                <input type='Submit' value={score} className={`${styles.notice} d-block d-lg-none my-3`} />
                                            </div>
                                        </Col>
                                        <Col lg={6} className='d-none d-lg-block'>
                                            <div>
                                                <textarea name='comment1' required className={styles.formarea} placeholder='How can we help you?' ></textarea>
                                                <input type='Submit' value={score} className={`bitsForm ${styles.notice}`} />
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>

                        <Col lg={5}>
                            <Row>
                                <Col lg={7}>
                                    <div className={`mb-lg-4`}>
                                        <h4 className='font28 grdiant2 font-bold'>Ready For Success?</h4>
                                        <h5 className='font20 font-bold text-white'>Schedule a complimentary strategy session now with our experienced product strategists.</h5>
                                        <div className={styles.menu}>
                                            <a className={`${styles.book} ${styles.book2}`} href="javascript:$zopim.livechat.window.show();">
                                                Avail My Free Session.
                                                <Image alt="BitsWits" src={arrow} className='img-fluid ms-2' />
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5}>
                                    <div className={`${styles.read} mb-lg-4`}>
                                        <div className={`${styles.free}`}>
                                            <p className='font20 texttran text-white font-bold fontf'>
                                                Our Presence
                                            </p>
                                        </div>
                                        <Row className={styles.locations}>
                                            <Col lg={12} className={`${styles.locInner} col-6`}>
                                                <div className={styles.locImg}>
                                                    <Image alt="BitsWits" src={icon11} className='img-fluid' />
                                                </div>
                                                <div className={styles.subInner}>
                                                    <p className='font12 font-bold fontf mb-0'>USA</p>
                                                    <a href="tel:8335006007" className='font12 font-regular fontf white texdocration'>
                                                        +1 833 500 6007
                                                    </a>
                                                </div>
                                            </Col>
                                            <Col lg={12} sm={6} className={`${styles.locInner} col-6`}>
                                                <div className={styles.locImg}>
                                                    <Image alt="BitsWits" src={icon12} className='img-fluid' />
                                                </div>
                                                <div className={styles.subInner}>
                                                    <p className='font12 font-bold fontf mb-0'>Middle East</p>
                                                    <a href="tel:+97 155 503 1266" className='font12 font-regular fontf white texdocration'>
                                                        +97 155 503 1266
                                                    </a>
                                                </div>
                                            </Col>
                                            <Col lg={12} className={`${styles.locInner} col-6`}>
                                                <div className={styles.locImg}>
                                                    <Image alt="BitsWits" src={icon14} className='img-fluid' />
                                                </div>
                                                <div className={styles.subInner}>
                                                    <p className='font12 font-bold fontf mb-0'>Asia</p>
                                                    <a href="tel:+923468280101" className='font12 font-regular fontf white texdocration'>
                                                        +92 346 828 0101
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NewAddress