
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Headerlphome.module.css'
// images
import logo from '/public/images/lpheader/logo.png'
import logo1 from '/public/images/lpheader/1.png'
import logo2 from '/public/images/lpheader/2.png'
import logo3 from '/public/images/lpheader/3.png'
import logo4 from '/public/images/lpheader/4.png'
import logo5 from '/public/images/lpheader/5.png'
import star from '/public/images/lpheader/star.png'
import logo22 from '/public/images/icons/footerlogo.png'
import new1 from '/public/images/lpheader/new1.png'
import new2 from '/public/images/lpheader/new2.png'
import new3 from '/public/images/lpheader/new3.png'
import new4 from '/public/images/lpheader/new4.png'
import new5 from '/public/images/lpheader/new5.png'
import { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"


const Headerlphome = () => {
    const [show, setShow] = useState('tab1');
    function fun1(tab){
        setShow(tab);
    }
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

            <header className={styles.bannerhome} id='home'>
                <section>
                    <div className="container pt-4">
                        <div className={styles.positionrelative}>
                           
                            <div className="toasNotificationGoogle" data-scroll data-scroll-speed="0.1">
                                <div className="innerborder">
                                <Link href='/'><Image src={logo22} alt='BitsWits' className={`${styles.foldp} img-fluid mt-2 w-25`} /></Link>
                                </div>
                            </div>
                            <div className={styles.toasNotification} data-scroll data-scroll-speed="0.1">
                                <div className={styles.innerborder} >
                                    <div className="text-uppercase font-12 me-3" id="toasNotification1">
                                        <Link href="jjavascript:;" className="text-white font-18" id="closeBtn"> x
                                        </Link>
                                        <span className={styles.package}> 25% OFF any package! USE:
                                            <span className={styles.textth}> today25 </span> today!</span>
                                    </div>
                                    <div className="mouse" data-bs-toggle="modal" data-bs-target="#ourWebModal">
                                        <Link href="javascript:;" className={styles.ToastOpen}>CLAIM</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <ul className={styles.newpond}>
                           <a href='#home' > <li className={show == 'tab1' ? styles.new : ''} onClick={() => fun1('tab1')}><Image alt='BitsWits' src={new1} /></li> </a>
                           <a href='#technofair' > <li className={show == 'tab2' ? styles.new : ''} onClick={() => fun1('tab2')}><Image alt='BitsWits' src={new2} /></li> </a>
                           <a href='#third' > <li className={show == 'tab3' ? styles.new : ''} onClick={() => fun1('tab3')}><Image alt='BitsWits' src={new3} /></li> </a>
                           <a href='#testihook' > <li className={show == 'tab4' ? styles.new : ''} onClick={() => fun1('tab4')}><Image alt='BitsWits' src={new4} /></li> </a>
                           <a href='#lastform' ><li className={show == 'tab5' ? styles.new : ''} onClick={() => fun1('tab5')}><Image alt='BitsWits' src={new5} /></li> </a>
                        </ul>
                    </div>

                    <div className="container" >
                        <div className={styles.backImgmain}>

                            <div className={` ${styles.xolpost} row justify-content-center align-content-center align-items-center`}>
                                <div className="col-lg-12 col-xl-12">
                                    <div className="header-content position-relative">
                                        <div className="text-center">

                                            <h4 className="font-bold color-p" data-scroll data-scroll-speed="0.3">Elevate Your Mobile App
                                                Experience With
                                            </h4>
                                            <h1 className="font-bold text-gradient gradient1" data-scroll data-scroll-speed="0.3">Top Mobile App Developers
                                            </h1>
                                            <p className=""> Let us help you bring your vision to life and take your
                                                business to
                                                the
                                                next level with our industry-leading <br></br>  <b> mobile app development </b>
                                                solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center align-content-center align-items-center">
                                <div className="col-lg-11 col-xl-11">
                                    <div className="header-form">
                                        <form className={` ${styles.piza} px-lg-5`} role="form" onSubmit={handleSubmit}>
                                            <div className="row pl-0">
                                                <div className="form-group  col-xl-4 col-lg-4  mb-3">
                                                    <input type="text" minLength="4" id="fname" name="name" placeholder="First Name" className="form-control" required />
                                                </div>
                                                <div className="form-group  col-xl-4 col-lg-4  mb-3">
                                                    <input type="text" id="fname" name="last" placeholder="Last Name" className="form-control" required />
                                                </div>
                                                <div className="form-group col-xl-4 col-lg-4  mb-3">
                                                    <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" id="phone" name="phone" placeholder="Phone Number" className="form-control" required />
                                                </div>
                                                <div className="form-group  col-xl-4 col-lg-4  mb-3">
                                                    <input type="email" id="email" name="email" placeholder="Email Address" className="form-control" required />
                                                </div>

                                                <div className="form-group col-xl-4 col-lg-4 mb-3">
                                                    <textarea type="text" id="message" name="comment" placeholder="Comment" className="form-control" required></textarea>
                                                </div>
                                                <div className="form-group  col-xl-4 col-lg-4  ">
                                                    <button value={score} type="submit" name="saves1" id="butact2" className="bitsForm">{score}</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="award-section">
                                <div className="row justify-content-center align-content-center align-items-center">
                                    <div className="col-lg-11 col-xl-11">
                                        <div className="awarded mt-2">
                                            <div className="row justify-content-center align-content-center align-items-center">
                                                <div className=" col-xl-4 col-lg-4  col-sm-10 ">
                                                    <div className={styles.newtown}>
                                                        <h2 className="font-34  font-bold text-gradient gradient1 ">Awards &
                                                            Recogniation
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className="col-lg-1"></div>
                                                <div className="col-lg-6 col-xl-6  mt-2">
                                                    <Image src={logo} className="img-fluid" alt="Awards" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.textcenter}>
                                    <div className="">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={styles.trustedsocial}>
                                                    <div className={styles.trust}>
                                                        <h3 className='mb-0'>Trusted by</h3>
                                                    </div>
                                                    <div className={styles.icons}>
                                                        <Image src={logo1} alt='BitsWits' className='img-fluid' />
                                                        <Image src={logo2} alt='BitsWits' className='img-fluid' />
                                                        <Image src={logo3} alt='BitsWits' className='img-fluid' />
                                                        <Image src={logo4} alt='BitsWits' className='img-fluid' />
                                                        <Image src={logo5} alt='BitsWits' className='img-fluid' />
                                                    </div>
                                                    <div className={styles.star}>
                                                        <Image src={star} alt='BitsWits' className='img-fluid' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>



        </>
    )
}

export default Headerlphome