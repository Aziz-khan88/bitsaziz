
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Contact.module.css'
//
import img1 from "/public/images/agencylogos/agency-logo1.png"
import img2 from "/public/images/agencylogos/agency-logo2.png"
import img3 from "/public/images/agencylogos/agency-logo3.png"
import img4 from "/public/images/agencylogos/agency-logo4.png"
import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"

const Contact = (props) => {
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [score, setScore] = useState('Time to Book The Call');

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
            firstName: e.target.fname.value,
            lastName: e.target.lname.value,
            email: e.target.email.value,
            company: e.target.company.value,
            service: e.target.service.value,
            source: e.target.source.value,
            budget: e.target.budget.value,
            message: e.target.message.value,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        };
        const JSONdata = JSON.stringify(data);
        setScore('Sending Data');

        // First API call to your server
        fetch('/api/contactapp/', {
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
                    "name": "firstname",
                    "value": e.target.fname.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "lastName",
                    "value": e.target.lname.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "email",
                    "value": e.target.email.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "company",
                    "value": e.target.company.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "service",
                    "value": e.target.service.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "source",
                    "value": e.target.source.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "budget",
                    "value": e.target.budget.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "message",
                    "value": e.target.message.value
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
            <section className={` ${styles[props.newBg]} ${styles.contact}`}>
                <Container>
                    <Row className='justify-content-between'>
                        <Col lg={4}>
                            <div className={styles.cntcTxt}>
                                <h2 className='newchoose black fontf font-bold line60 mb-2 mb-sm-4'>
                                    LET’S <span className='grdiant'>TALK ABOUT YOUR</span> PROJECTS
                                </h2>
                                <p className='font18 fontf mb-2 mb-sm-4'>Have a project idea? Tell us more about the details and we'll get back to you within 24 hours</p>
                                <Row className='g-5 mt-0 mt-sm-3 d-none d-lg-flex'>
                                    <Col md={6} className='mt-2 mt-sm-4'>
                                        <Image quality={75} src={img1} className='img-fluid' alt='BitsWits' />
                                    </Col>
                                    <Col md={6} className='mt-2 mt-sm-4'>
                                        <Image quality={75} src={img2} className='img-fluid' alt='BitsWits' />
                                    </Col>
                                    <Col md={6} className='mt-2 mt-sm-4'>
                                        <Image quality={75} src={img3} className='img-fluid' alt='BitsWits' />
                                    </Col>
                                    <Col md={6} className='mt-2 mt-sm-4'>
                                        <Image quality={75} src={img4} className='img-fluid' alt='BitsWits' />
                                    </Col>
                                </Row>
                                {/* ========================= */}
                                <Row className='g-5 mt-0 mt-sm-3 d-flex d-lg-none w-100'>
                                    <Col md={6} className='mt-2 mt-sm-4 col-6'>
                                        <Image quality={75} src={img1} className='img-fluid w-75 m-auto d-block' alt='BitsWits' />
                                    </Col>
                                    <Col md={6} className='mt-2 mt-sm-4 col-6'>
                                        <Image quality={75} src={img2} className='img-fluid w-75 m-auto d-block' alt='BitsWits' />
                                    </Col>
                                    <Col md={6} className='mt-2 mt-sm-4 col-6'>
                                        <Image quality={75} src={img3} className='img-fluid w-75 m-auto d-block' alt='BitsWits' />
                                    </Col>
                                    <Col md={6} className='mt-2 mt-sm-4 col-6'>
                                        <Image quality={75} src={img4} className='img-fluid w-75 m-auto d-block' alt='BitsWits' />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className={`${styles.cntcForm} mt-5 mt-lg-0`}>
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label className='form-label'>
                                                    First Name
                                                    <span className={styles.imp}>*</span>
                                                </label>
                                                <input type="text" className='form-control' id="fname" name='fname' placeholder="What's your first name?" required />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label className='form-label'>
                                                    Last Name
                                                    <span className={styles.imp}>*</span>
                                                </label>
                                                <input type="text" className='form-control' id="lname" name='lname' placeholder="What's your last name?" required />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label className='form-label'>
                                                    Email Address
                                                    <span className={styles.imp}>*</span>
                                                </label>
                                                <input type="email" className='form-control' id="email" name='email' placeholder="yourname@email.com" required />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label className='form-label'>Company Size</label>
                                                <select id="company" name="company" data-name="Company" className={styles.wSelect} required >
                                                    <option value="">Company Size</option>
                                                    <option value="1">Only 1</option>
                                                    <option value="2-10">2-10</option>
                                                    <option value="10-20">10-20</option>
                                                    <option value="30-50">30-50</option>
                                                    <option value="50-100">50-100</option>
                                                    <option value="100+">100+</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label className='form-label'>Service</label>
                                                <select id="service" name="service" data-name="Service" className={styles.wSelect} required>
                                                    <option value="">Select service</option>
                                                    <option value="Webflow Development">Mobile/Web Design</option>
                                                    <option value="Web Development">Web Development</option>
                                                    <option value="Web3 Design">Web3 Design</option>
                                                    <option value="BlockChain">BlockChain</option>
                                                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                                                    <option value="Data Science">Data Science</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='mb-4'>
                                                <label className='form-label'>How did you find us?</label>
                                                <select id="source" name="source" data-name="Source" className={styles.wSelect} required>
                                                    <option value="">How did you find us?</option>
                                                    <option value="Google">Google</option>
                                                    <option value="Clutch">Clutch</option>
                                                    <option value="Referral">Referral</option>
                                                    <option value="Blog">Blog</option>
                                                    <option value="Review Site">Review Site</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='mb-4'>
                                                <label className='form-label'>
                                                    What have you budgeted for this project?
                                                    <span className={styles.imp}>*</span>
                                                </label>
                                                <select id="budget" name="budget" data-name="Budget" className={styles.wSelect} required>
                                                    <option value="">What is your budget for this project?</option>
                                                    <option value="Under $20,000">Under $20,000</option>
                                                    <option value="$20.000-$50,000">$20.000-$50,000</option>
                                                    <option value="$50,000-$100,000">$50,000-$100,000</option>
                                                    <option value="$100,000-$150,000">$100,000-$150,000</option>
                                                    <option value="$150,000-$200,000">$150,000-$200,000</option>
                                                    <option value="Above $200,000">Above $200,000</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='mb-4'>
                                                <label className='form-label'>About Your Project</label>
                                                <textarea id="message" name="message" maxLength="5000" required data-name="Message" placeholder="Tell us about your project goals &amp; timeline in a snapshot. Please include any necessary links about your project." className="form-field text-area w-input"></textarea>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='mb-5'>
                                                <button type="submit" id="submit" data-wait="Booking the Call " className={`bitsForm ${styles.btns}`}>{score}</button>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className={styles.formPara}>
                                                <p>
                                                    By submitting this form, you agree to our
                                                    <Link className={styles.link} href="/privacy-policy"> privacy policy </Link> <br />
                                                    and allow us to contact you via email
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact