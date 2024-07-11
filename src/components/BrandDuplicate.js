import React, { useState, useEffect } from 'react';
import { usePathname } from "next/navigation"
import Image from "next/image";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/BrandDuplicate.module.css";
//images
import free from "@/public/newdubai/free.png";

const BrandDuplicate = (props) => {
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

    const [checkboxes, setCheckboxes] = useState([]);
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
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        }
        const JSONdata = JSON.stringify(data);
        setScore('Sending Data');

        // First API call to your server
        fetch('/api/formapi/', {
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
            <section className={styles.trandubai}>
                <Container >
                    <Row className={`${styles.newtsl} gy-3 gx-0`}>
                        <Col lg={4}>
                            <div className={styles.imgtoken}>
                                <Image src={free} width={436} height={618} className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className={styles.level}>
                                <h3> <span>Let’s Level Up</span> Your <br></br>
                                    Brand, Together</h3>
                                <form className={styles.your} onSubmit={handleSubmit}>
                                    <div>
                                        <div className={styles.chill}>
                                            <input type="text" placeholder="First Name" name='first' required />
                                            <input type="text" placeholder="Last Name" name='last' minLength="4" required />
                                        </div>
                                        <div className={styles.chill}>
                                            <input type="tel" placeholder="Phone" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required />
                                            <input type="email" placeholder="Email" name='email' required />
                                        </div>
                                        <div className={styles.chill}>
                                            <textarea placeholder="Write message here..." className={styles.message} name='comment' rows="4" cols="50" />
                                        </div>
                                        <div className={styles.chill}>
                                            <input className='bitsForm' type="submit" placeholder="Submit" value={score} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default BrandDuplicate;
