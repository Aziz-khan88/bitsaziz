import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import Axios from "axios";
import { usePathname } from "next/navigation"
//
import { BsX } from "react-icons/bs";
//
import tel from "@/public/images/fixed/tel.webp"
import call from "@/public/images/fixed/call.webp"


const Skicky = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [showSticky, setShowSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const showStickyThreshold = 700;

            if (scrollPosition > showStickyThreshold) {
                setShowSticky(true);
            } else {
                setShowSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const loc = () => {
        setIsHovered((prev) => !prev);
    };

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
            {showSticky && (
                <div className="newtownfy">
                    <div className="chat">
                        <span className="icon">
                            <Image width="30" height="30" alt="bitswits" className="img-fluid" src={tel} loading="lazy" />
                            <div className="txtBody">
                                <a href="javascript:$zopim.livechat.window.show();">Chat Now</a>
                            </div>
                        </span>
                    </div>
                    <div className="call">
                        <span className="icon">
                            <Image width="30" height="30" alt="bitswits" className="img-fluid" src={call} loading="lazy" />
                            <div className="txtBody">
                                <a href="tel:8335006007">(833) 500-6007</a>
                            </div>
                        </span>
                    </div>
                </div>
            )}

            {showSticky && (
                <div className={isHovered ? 'openForm active' : 'openForm'}>
                    <div className="wrapper">
                        <span className="close" onClick={() => loc()}>
                            {isHovered ?
                                <BsX />
                                :
                                'Get In Touch'
                            }
                        </span>
                        <form id="leadPopupForm" onSubmit={handleSubmit} className="popup-form" data-hs-cf-bound="true">
                            <div className="inputGroup">
                                <h3 className="f-20 center fw800">Get A Free Quote Now!</h3>
                            </div>
                            <div className="inputGroup">
                                <input name="name" minLength="4" type="text" placeholder="Full Name*" required />
                            </div>
                            <div className="inputGroup">
                                <input name="email" type="email" placeholder="Email Address*" required />
                            </div>
                            <div className="inputGroup">
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" required name="phone" placeholder="Phone No*" />
                            </div>
                            <div className="inputGroup">
                                <textarea name='comment' required placeholder="Let Us know Time And Date To Call You."></textarea>
                            </div>
                            <button id="btntrack" value={score} type="submit" className='bitsForm'>{score}</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Skicky
