import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Axios from "axios";
import { usePathname } from "next/navigation"
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/bannerlpfianl.module.css";
//
import asia from "@/public/images/mobilelpfinal/asia.png"
import banImg1 from '/public/images/people/people.png'
import star from '/public/images/mobilelpfinal/star.png'
import clutch from '/public/images/mobilelpfinal/clutch.png'
import star1 from '/public/images/people/1.png'
import star2 from '/public/images/people/2.png'
import usa from "@/public/images/mobilelpfinal/usa.png"
import dubai from "@/public/images/mobilelpfinal/dubai.png"


const Bannerlpfinal = (props) => {
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [score, setScore] = useState('ENQUIRE NOW');

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
            last: '',
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: e.target.comment.value,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        };
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

            <section className={styles[props.newHomeBgprops]}>
                <Container className={` ${styles.conform1} overflow-hidden`}>
                    <Row className={`${styles.alignpost} gx-5`}>
                        <Col xl={7}>
                            <div className={` ${styles.conform} ${styles.oppp}`}>
                                <h1 className='font-bold white f-25'>Mobile App Development Services</h1>
                                <h2 className='white font50 f-700'>We Don't Just <span className={styles.corpost}>Create Apps</span>, <br /> We <span className={styles.corpost}>Create Experiences</span> </h2>
                                <p className='font16 white fw400 mt-4 mb-lg-5'>Transform your idea into a remarkable app with Bitswits Mobile app development services. <br /> Our creative and efficient development process caters to both native and cross-platform needs, <br /> ensuring your app makes a lasting impact.</p>
                                <div className={styles.careatapp}>
                                    <a href='tel:8335006007' className={styles.delivernow}>CALL NOW</a>
                                    <a href='javascript:$zopim.livechat.window.show();' className={styles.deliver}>LIVE CHAT</a>
                                </div>
                            </div>
                            <div className={`${styles.comple} d-none d-lg-flex`}>
                                <Image loading='lazy' quality={95} alt='BitsWits' src={banImg1} className={`${styles.newone} img-fluid d-none d-lg-block w-25`} />

                                <div className={styles.comple1}>
                                    <Image loading='lazy' quality={95} alt='BitsWits' src={star} className='img-fluid d-none d-lg-block' />
                                    <p className='mb-0'> <span className='fw700'>4.9 out of 5</span> <span className={styles.rating}>(review rating) <br></br>
                                        Over 1,200+ reviews
                                        Over 1,200+ reviews</span> </p>
                                </div>
                                <Image loading='lazy' quality={95} alt='BitsWits' src={clutch} className='img-fluid d-none d-lg-block' />
                            </div>
                            <div className={`${styles.posty} d-none d-lg-flex`}>
                                <div className={styles.comple3}>
                                    <Image loading='lazy' quality={95} alt='BitsWits' src={star2} className='img-fluid d-none d-lg-block' />
                                    <div className={styles.comple5}>
                                        <p className='mb-0'>US TOP 3 BEST RATED</p>
                                        <p className='mb-0 fw700'>App & Software Development Company</p>
                                    </div>
                                </div>
                                <div className={styles.comple3}>
                                    <Image loading='lazy' quality={95} alt='BitsWits' src={star1} className='img-fluid d-none d-lg-block' />
                                    <div className={styles.comple5}>
                                        <p className='mb-0'>HIGH PERFORMER</p>
                                        <p className='mb-0 fw700'>Top App Development Company</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={5}>
                            <form className={styles.your} onSubmit={handleSubmit}>
                                <h3 className='white fw500'>Transform Your App Idea Into A Success Story</h3>
                                <h2 className='mb-3 fw500 white'>Today Is The Day To Start!</h2>
                                <input type='text' minLength="4" name='first' required className={styles.newform} placeholder="Your Name*"></input>
                                <input type='email' name='email' required className={styles.newform} placeholder="Your Email*"></input>
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className={styles.newform} placeholder="Your Phone Number*"></input>
                                <textarea placeholder='Message*' required name='message' className={styles.newformtext}></textarea>
                                <div className={styles.takesread}>
                                    <p>
                                        We takes yout privacy seriously. Read our
                                        Privacy Notice.
                                    </p>
                                    <input type='submit' name='submit' className={`bitsForm ${styles.value}`} placeholder="Submit" value={score}></input>
                                </div>
                                <div className="d-none d-lg-block">
                                    <h4 className='font20 white fw800 center mt-2'>OUR OFFICES</h4>
                                </div>
                                <div className={`${styles.ouroff} d-none d-lg-flex`}>
                                    <span>
                                        <Image loading='lazy' quality={95} alt='BitsWits' src={usa} className='img-fluid d-none d-lg-block' />
                                        <p>USA</p>
                                    </span>
                                    <span>
                                        <Image loading='lazy' quality={95} alt='BitsWits' src={dubai} className='img-fluid d-none d-lg-block' />
                                        <p>MIDDLE EAST</p>
                                    </span>
                                    <span>
                                        <Image loading='lazy' quality={95} alt='BitsWits' src={asia} className='img-fluid d-none d-lg-block' />
                                        <p>ASIA</p>
                                    </span>
                                </div>

                            </form>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Bannerlpfinal