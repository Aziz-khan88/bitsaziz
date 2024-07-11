import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Axios from "axios";
import { usePathname } from "next/navigation"
import { Container, Row, Col, Modal } from 'react-bootstrap'
import styles from "@/styles/bannerdubainew.module.css";
import Bitswitspopup from "../components/Bitswitspopup";
import { RxCross2 } from "react-icons/rx";
// images 
import badgeClient from "media/newdubai/badgesClient.png"
import Star from "media/newDubaiPagev1/star.png"
import Clutch from "media/newDubaiPagev1/clutch.png"

const Bannerdubai = ({ content }) => {
    const { title, desc, bg = " " } = content;
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [checkboxes, setCheckboxes] = useState([]);

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

    // Modal 
    const [show, setShow] = useState(false);
    function modal(e) {
        e.preventDefault();
        setShow(true);
    }

    function closemodal() {
        setShow(false);
    }
    return (
        <>
            <section className={`${styles.DubaiBanner} bg-black`}>
                <Image src={bg} fill priority={true} sizes='100vw' className='d-md-block d-none' style={{ zIndex: -1 }} />
                <Container className={` ${styles.conform}`}>
                    <Row className={`g-5 ${styles.applost} align-items-center w-100 mx-auto`}>
                        <Col xl={7} className='px-0'>
                            <div className={styles.oppp}>
                                <h1 className='white fw500 mb-4'>
                                    {title}
                                </h1>
                                <p className='font16 white fw300 mt-3 mb-lg-4 fontsfregular'>
                                    {desc}
                                </p>
                                <button onClick={modal} className={`${styles.deliver} pink`}>
                                    Let’s Build Your Dream App!
                                </button>
                            </div>
                            <div className={styles.badge}>
                                <div className={`d-flex align-items-center ${styles.clientRviews}`}>
                                    <div>
                                        <Image priority={true} sizes='100vw' src={badgeClient} alt='Bitswits' width={183} height={80} />
                                    </div>
                                    <div>
                                        <div className={styles.reviews}>
                                            <Image priority={true} sizes='100vw' src={Star} alt='Bitswits' width={25} height={22} />
                                            <Image priority={true} sizes='100vw' src={Star} alt='Bitswits' width={25} height={22} />
                                            <Image priority={true} sizes='100vw' src={Star} alt='Bitswits' width={25} height={22} />
                                            <Image priority={true} sizes='100vw' src={Star} alt='Bitswits' width={25} height={22} />
                                            <Image priority={true} sizes='100vw' src={Star} alt='Bitswits' width={25} height={22} />
                                        </div>
                                        <p className='mb-0'>
                                            <strong>4.8 out of 5</strong> (review rating)
                                            Over 1,200+ reviews
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <Image priority={true} sizes='100vw' src={Clutch} alt='Bitswits' width={129} height={60} />
                                </div>
                            </div>
                        </Col>
                        <Col xl={5} className='px-0'>
                            <form className={styles.your} onSubmit={handleSubmit}>
                                <h3 className='mb-4 white fw500'>Book a Free Consultation</h3>
                                <input type='text' minLength="4" name='name' required className='form-control' placeholder="Full Name"></input>
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className='form-control mt-3' placeholder="Phone Number"></input>
                                <input type='email' name='email' required className='form-control mt-3' placeholder="Email Address"></input>
                                <textarea placeholder='Description' name='comment' className='form-control mt-3'></textarea>
                                <input className={styles.vehicle1} type='checkbox' name='vehicle1' checked={checkboxes.includes('Share Non Disclosure Agreement')} onChange={handleOptionChange3} value='Share Non Disclosure Agreement' />
                                <label className='form-check-label' htmlFor='flexCheckDefault'> Share Non Disclosure Agreement</label>
                                <button className={`pink ${styles.value} bitsForm`} type='submit'>
                                    Submit
                                </button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Modal Start*/}
            <Modal show={show} onHide={closemodal} className={styles.modalnew}>
                <Modal.Body>
                    <Bitswitspopup formsaspire="popquote" />
                    <span onClick={closemodal} className={styles.cross}>
                        <RxCross2 />
                    </span>
                </Modal.Body>
            </Modal>
            {/* Modal Start*/}
        </>
    )
}

export default Bannerdubai