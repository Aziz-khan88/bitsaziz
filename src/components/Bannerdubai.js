import React from 'react'
import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/bannerdubai.module.css";


const Bannerdubai = (props) => {

    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [score, setScore] = useState('Submit');
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
            name: e.target.first.value,
            last: e.target.last.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: e.target.comment.value,
            checkboxesdata: checkboxes,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        }
        const JSONdata = JSON.stringify(data);
        setScore('Sending Data');

        // First API call to your server
        fetch('/api/emailapidubai2/', {
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

            <section className={`${styles[props.newHomeBgprops]} overflow-hidden`} >
                <Container className={` ${styles.conform}`}>
                    <Row className={`g-5 ${styles.applost} w-100 mx-auto`}>
                        <Col xl={6}>
                            <div className={styles.oppp}>
                                <h1 className='f-60 white fw700 mb-4'>Leading Mobile App Development Company in Dubai</h1>
                                <p className='font16 white fw400 mt-3 mb-lg-4 letterspace_1'>Are you looking for a Dubai-based app development company that truly understands the power of innovation and data-driven strategies? Look no further than <strong>BitsWits</strong>! Based in Dubai, we are a leading app development company that excels in designing growth-driven applications for both startups and established brands. We have a knack for transforming digital presences into strategic assets that pave the way for business success. Our dedicated team of developers is unwavering in their commitment to delivering top-notch, innovative apps. When achieving excellence in app development, <strong>BitsWits</strong> unquestionably stands out as the ultimate choice.</p>
                                <p className='font16 white fw400 mt-3 mb-lg-4 letterspace_1'>Hire us for mobile app development excellence in Dubai and ensure your success!</p>
                                <a href='javascript:$zopim.livechat.window.show();' className={styles.deliver}>Let’s Discuss Your Project</a>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <form className={styles.your} onSubmit={handleSubmit}>
                                <h3 className='f-60 mb-4 white fw700'>Book a Free <br></br>Consultation</h3>
                                <input type='text' minLength="4" name='first' required className='form-control' placeholder="First Name"></input>
                                <input type='text' name='last' minLength="4" required className='form-control  mt-2' placeholder="Last Name"></input>
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className='form-control mt-2' placeholder="Phone Number"></input>
                                <input type='email' name='email' required className='form-control mt-2' placeholder="Email Address"></input>
                                <textarea placeholder='Description' name='comment' className='form-control mt-2'></textarea>
                                <input className={styles.vehicle1} type='checkbox' name='vehicle1' checked={checkboxes.includes('Share Non Disclosure Agreement')} onChange={handleOptionChange3} value='Share Non Disclosure Agreement' />
                                <label className='form-check-label' htmlFor='flexCheckDefault'> Share Non Disclosure Agreement</label>
                                <input type='submit' value={score} name='submit' className={`bitsForm ${styles.value}`} placeholder="Submit"></input>
                            </form>
                        </Col>
                    </Row>
                </Container>


            </section>
        </>
    )
}

export default Bannerdubai