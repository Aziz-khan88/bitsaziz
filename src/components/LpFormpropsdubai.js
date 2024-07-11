import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Image from 'next/image';
import { usePathname } from "next/navigation"
import { Container, Row, Col } from 'react-bootstrap'
//
import styles from "@/styles/LpFormdubai.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const LpFormpropsdubai = (props) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };
        handleResize();
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    var awardslogo = {
        dots: false,
        arrows: false,
        loop: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    // =====================================
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
            comment: 'null',
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
            {props.data ?
                <section className={styles.datapost}>
                    <Container className={styles.appios}>
                        {isMobile ? (
                            <Slider {...awardslogo} className={` ${styles.nextalign1}`}>
                                {props.data.map((item, index) => (
                                    <div className='mt-5 mt-md-0'>
                                        <div className={styles.deve} key={index}>
                                            <Image src={item.img2} className="img-fluid" alt="bitswits" />
                                            <div>
                                                <h4 className="fontgilroybold white font_15">{item.title}</h4>
                                                <p className="font_13 white fontsfregular linehight_2 mb-0">{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <Row className='gx-3 gy-3'>
                                {props.data.map((item, index) => (
                                    <Col lg={3}>
                                        <div className={styles.deve} key={index}>
                                            <Image src={item.img2} className="img-fluid" alt="bitswits" />
                                            <div>
                                                <h4 className="fontgilroybold white font_15">{item.title}</h4>
                                                <p className="font_13 white fontsfregular linehight_2 mb-0">{item.text}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        )}
                    </Container>
                </section>
                :
                ''
            }
            <section className={styles.keyFrame}>
                <Container>
                    <div className={styles.para}>
                        <p className='mb-0'>
                            {props.heading}
                        </p>
                    </div>
                    <div className={styles.cirMain}>
                        <div className={styles.cir1}></div>
                        <div className={styles.cir2}></div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default LpFormpropsdubai
