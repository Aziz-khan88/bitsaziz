import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/NewIndexBanner.module.css";
//
import next from "/public/homeslideimg/next.webp";
import prev from "/public/homeslideimg/prev.webp";
import slide1 from "media/homeslideimg/1.webp";
import slide2 from "media/homeslideimg/2.webp";
import slide3 from "media/homeslideimg/3.webp";
import slide4 from "media/homeslideimg/4.webp";
import slide5 from "media/homeslideimg/5.webp";

const itemData = [
    {
        linkHref: "tel:8335006007",
        linkText: "Connect Now",
    },
];

const NewIndex2Banner = () => {

    const sliderRef = React.useRef(null);
    const activate = (e) => {
        const items = sliderRef.current.querySelectorAll('.item');

        if (e.target.matches('.next')) {
            sliderRef.current.append(items[0].cloneNode(true));
            sliderRef.current.append(items[0]);
            items[0].remove();
        }

        if (e.target.matches('.prev')) {
            sliderRef.current.prepend(items[items.length - 1].cloneNode(true));
            sliderRef.current.prepend(items[items.length - 1]);
            items[items.length - 1].remove();
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextButton = document.querySelector('.next');
            nextButton.click();
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <section className={styles.newHomeBg}>
                <ul className={`${styles.slider}`} ref={sliderRef}>
                    <li className={`${styles.item} item relative overflow-hidden`}>
                        <Image src={slide2} className="absolute d-none d-lg-block" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw" style={{ objectFit: 'cover' }} />
                        {itemData.map((item, index) => (
                            <div key={index} className={styles.content}>
                                <h2 className={`${styles.just} font-heavy font30 mb-0`}>
                                    Blockchain App Development Experts
                                </h2>
                                <h2 className={`${styles.develop} font55home letterspacefy font-bold mt-sm-2 mt-0 `}>
                                    Secure, Smart Blockchain Solutions. Building The Future, Block
                                    By Block.
                                </h2>
                                <p className=" font-regular text-white font16 mt-sm-3 mt-1 mb-0 mb-sm-2">
                                    Lead the blockchain revolution with our expertly developed
                                    apps, offering unmatched security and innovation. Choose us
                                    for solutions that revolutionize transactions and trust.
                                </p>
                                <div className={styles.pont}>
                                    <Link className={styles.about} href={item.linkHref}>
                                        {item.linkText}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </li>
                    <li className={`${styles.item} item item relative overflow-hidden`}>
                        <Image src={slide1} className="absolute d-none d-lg-block" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw" style={{ objectFit: 'cover' }} />
                        {itemData.map((item, index) => (
                            <div key={index} className={styles.content}>
                                <h1 className={`${styles.just} font-heavy font30 mb-lg-0`}>
                                    Top Mobile App Development Company
                                </h1>
                                <h2 className={`${styles.develop} font55home letterspacefy font-bold mt-sm-2 mt-0`}>
                                    Turning Challenges Into Opportunities With Expert App
                                    Development
                                </h2>
                                <p className=" font-regular text-white font16 mt-3">
                                    We blend art and technology to create mobile apps that are as
                                    user-friendly as they are innovative. Elevate your presence in
                                    the mobile world with us.
                                </p>
                                <div className={styles.pont}>
                                    <Link className={styles.about} href={item.linkHref}>
                                        {item.linkText}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </li>
                    <li className={`${styles.item} item item relative overflow-hidden`}>
                        <Image src={slide3} className="absolute d-none d-lg-block" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw" style={{ objectFit: 'cover' }} />
                        {itemData.map((item, index) => (
                            <div key={index} className={styles.content}>
                                <h2 className={`${styles.just} font-heavy font30 mb-lg-0`}>
                                    Top-Rated Game Development Company
                                </h2>
                                <h2 className={`${styles.develop} font55home letterspacefy font-bold mt-sm-2 mt-0`}>
                                    Where Exceptional Apps Are Just The Beginning.
                                </h2>
                                <p className=" font-regular text-white font16 mt-3">
                                    As a top-rated mobile app development company, Bitswits excels
                                    in transforming ideas into engaging, high-performance apps.
                                    Trust us to deliver solutions that combine innovation with a
                                    seamless user experience, propelling your business to new
                                    heights
                                </p>
                                <div className={styles.pont}>
                                    <Link className={styles.about} href={item.linkHref}>
                                        {item.linkText}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </li>
                    <li className={`${styles.item} item item relative overflow-hidden`}>
                        <Image src={slide4} className="absolute d-none d-lg-block" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw" style={{ objectFit: 'cover' }} />
                        {itemData.map((item, index) => (
                            <div key={index} className={styles.content}>
                                <h2 className={`${styles.just} font-heavy font30 mb-lg-0`}>
                                    Top Artificial Intelligence Development Company
                                </h2>
                                <h2 className={`${styles.develop} font55home letterspacefy font-bold mt-sm-2 mt-0`}>
                                    Where Artificial Intelligence Meets Real-World Innovation
                                </h2>
                                <p className=" font-regular text-white font16 mt-3">
                                    We turn artificial intelligence into real business results,
                                    building AI apps that are as clever as they are effective.
                                </p>
                                <div className={styles.pont}>
                                    <Link className={styles.about} href={item.linkHref}>
                                        {item.linkText}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </li>
                    <li className={`${styles.item} item item relative overflow-hidden`}>
                        <Image src={slide5} className="absolute d-none d-lg-block" fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw" style={{ objectFit: 'cover' }} />
                        {itemData.map((item, index) => (
                            <div key={index} className={styles.content}>
                                <h2 className={`${styles.just} font-heavy font30 mb-lg-0`}>
                                    Custom Software Development Solutions
                                </h2>
                                <h2 className={`${styles.develop} font55home letterspacefy font-bold mt-sm-2 mt-0`}>
                                    Tailored Software Solutions For Unique Business Needs
                                </h2>
                                <p className=" font-regular text-white font16 mt-3">
                                    Your business is unique, and your software should be too. We
                                    create custom software solutions that fit perfectly with your
                                    business goals.
                                </p>
                                <div className={styles.pont}>
                                    <Link className={styles.about} href={item.linkHref}>
                                        {item.linkText}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </li>
                </ul>
                <div className={styles.nav}>
                    <div className={`${styles.btn} prev`} onClick={activate}>
                        <Image src={prev} alt="BitsWits" className="img-fluid prev" />
                    </div>
                    <div className={`${styles.btn} next`} onClick={activate}>
                        <Image src={next} alt="BitsWits" className="img-fluid next" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewIndex2Banner;
