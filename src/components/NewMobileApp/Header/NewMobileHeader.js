import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';
import styles from "@/styles/NewMobileApp/Header.module.css"
// images
import logo from "/public/images/icons/logo.png";
import mbllogo from "/public/images/icons/footerlogo.png";

const NewMobileHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 1);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <header className={`${styles.headernew} ${isScrolled ? styles.bgColor : styles.transparent}`}>
                <div className={styles.logo}>
                    <Link href="javascript:;">
                        <Image alt="bitswits" loading="lazy" src={logo} width={176} height={36} className="img-fluid" />
                    </Link>
                </div>
                <nav>
                    <ul className='d-flex align-items-center gap-3 me-2 mb-0'>
                        <div className={`${styles.navLogo} ${styles.mblLogo}`}>
                            <Link href="javascript:;">
                                <Image alt="bitswits" className="img-fluid" src={mbllogo} />
                            </Link>
                        </div>
                        <li
                            className={styles.product}
                        >
                            <Link className={styles.post} href="#services">
                                Services
                            </Link>
                        </li>
                        <li
                            className={styles.product}
                        >
                            <Link href="#casestudies" className={styles.post}>
                                Case Studies
                            </Link>
                        </li>
                        <li>
                            <Link href="#process" className={styles.post}>
                                Process
                            </Link>
                        </li>
                        <li>
                            <Link href="#testimonials" className={styles.post}>
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link href="#industries" className={styles.post}>
                                Industries
                            </Link>
                        </li>
                        <li className='d-flex align-items-center justify-content-center me-2'>
                            <a className={`${styles.post} ${styles.quote} blackPulse`} href="tel:1 833 500 6007">
                                <FaPhoneAlt className='me-2' />
                                +1 833 500 6007
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NewMobileHeader
