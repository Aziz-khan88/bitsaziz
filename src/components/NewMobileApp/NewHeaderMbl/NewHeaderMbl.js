import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from "next/navigation" 
import styles from '@/styles/Header.module.css' 
import { BsFillTelephoneFill } from 'react-icons/bs'
// images
import logo from '/public/images/icons/footerlogo.webp'
import mbllogo from '/public/images/icons/footerlogo.png' 

const HeaderMbl = () => {

    const [isActive, setIsActive] = useState(false);
    const [megamenu3, setMegaMenu3] = useState(false);
    const [megamenu4, setMegaMenu4] = useState(false);

    const handleMenu = () => {
        setIsActive((prev) => !prev);
    }

    const handleMegaMenu3 = () => {
        setMegaMenu3((prev) => !prev);
    }

    const handleMegaMenu4 = () => {
        setMegaMenu4((prev) => !prev);
    }

    const router = usePathname();
    const currentRoute = router.pathname;
    const path = currentRoute

    return (
        <>
            <header className={path ? `${styles.header}` : `${styles.header} header`}>
                <div className={styles.navLogo}>
                    <Link href="javascript:;">
                        <Image
                            alt="bitswits"
                            className='img-fluid'
                            src={logo}
                        />
                    </Link>
                </div>
                <nav className={styles.navBar}>
                    <ul className={isActive ? `${styles.menu} ${styles.active}` : `${styles.menu}`}>
                        <div className={`${styles.navLogo} ${styles.mblLogo}`}>
                            <Link href="javascript:;">
                                <Image alt="bitswits" className='img-fluid'
                                    src={mbllogo}
                                />
                            </Link>
                        </div>
                        <li className={`${styles.megaList3} ${styles.navList}`} onClick={handleMegaMenu3}>
                            <Link href='#services' className={`${styles.megaLink} ${styles.befLink}`}>
                                Services 
                            </Link>
                        </li>
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMegaMenu4}>
                            <Link href='#casestudies' className={`${styles.megaLink} ${styles.befLink}`}>
                                Case Studies 
                            </Link>
                        </li>
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMenu}>
                            <Link href='#process' className={`${styles.megaLink} ${styles.befLink}`}>
                                Process
                            </Link>
                        </li>
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMenu}>
                            <Link href="#testimonials" className={styles.post}>
                                Testimonials
                            </Link>
                        </li>
                        <li className={`${styles.megaList4} ${styles.navList}`} onClick={handleMenu}>
                            <Link href="#industries" className={styles.post}>
                                Industries
                            </Link>
                        </li>
                        <li>
                            <div className={styles.mbInq}>
                                <div className={`${styles.ourWork} ${styles.cntct}`}>
                                    <div className={styles.fill}>
                                        <div>
                                            <BsFillTelephoneFill size={25} className={styles.email} />
                                        </div>
                                        <div>
                                            <a className='font15 font-medium white fontf' href="tel:18335006007" onClick={handleMenu}>
                                                +1 833 500 6007
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className={styles.navTogle} onClick={handleMenu}>
                        <span className={isActive ? `${styles.line} ${styles.line1}` : `${styles.line}`}></span>
                        <span className={isActive ? `${styles.line} ${styles.line2}` : `${styles.line}`}></span>
                        <span className={isActive ? `${styles.line} ${styles.line3}` : `${styles.line}`}></span>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderMbl