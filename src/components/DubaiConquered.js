import React from 'react'
import Image from 'next/image';
import Slider from 'react-slick'
import styles from "@/styles/DubaiConquered.module.css"
// Images
import Slide1 from "/public/newdubai/conquered1.png"
import Slide2 from "/public/newdubai/conquered2.png"
import Slide5 from "/public/newdubai/conquered5.png"
import Slide6 from "/public/newdubai/conquered6.png"
import Slide7 from "/public/newdubai/conquered7.png"
import Slide8 from "/public/newdubai/conquered8.png"
import Slide9 from "/public/newdubai/conquered9.png"
import Slide10 from "/public/newdubai/conquered10.png"
import Slide11 from "/public/newdubai/conquered11.png"
import Slide12 from "/public/newdubai/conquered12.webp"
import Slide13 from "/public/newdubai/conquered13.webp"

const DubaiConquered = ({ content }) => {
    const { title, desc } = content
    var DubaiConquered = {
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    };
    return (
        <>
            <section className={styles.conqueredSec}>
                <div className='container'>
                    <h2>{title}</h2>
                    <p className='fontsfregular'>
                        {desc}
                    </p>
                    <Slider {...DubaiConquered} className='dubaiClientSlider mt-5'>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide1} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Ecommerce</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Ecommerce</h5>
                                    <p className='fontsfregular'>
                                        We, as professionals at BitsWits, know the specific problems and possibilities within e-commerce. Our solutions are aimed at improving user experience, simplifying operational workflow, and maximizing revenues for e-commerce companies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide12} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Automotive</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Automotive</h5>
                                    <p className='fontsfregular'>
                                        Through our extensive experience in automotive app development, we are able to develop innovative solutions that enrich user experience, increase efficiency, and boost the automotive businesses' growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide9} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Food & Beverage</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Food & Beverage</h5>
                                    <p className='fontsfregular'>
                                        We design and build custom mobile apps to meet the needs of the food and beverage industry. From the food delivery apps in this sector to restaurant management solutions, we help businesses get ahead of their competitors.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide7} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Healthcare & Medical</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Healthcare & Medical</h5>
                                    <p className='fontsfregular'>
                                        It cannot be overstressed, though, that the healthcare industry leans on a culture of precision and accuracy. Our healthcare app solutions are developed to elevate patient care, speed up procedural work, and conform to regulatory standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide8} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Real Estate</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Real Estate</h5>
                                    <p className='fontsfregular'>
                                        For real estate businesses, we provide tailor-made app development services that enhance interaction between buyers and sellers. Our app development services ensure property listings, virtual tours, and all other essential features and functions that help any business stand out.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide6} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Enterprise Mobility Solutions</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Enterprise Mobility Solutions</h5>
                                    <p className='fontsfregular'>
                                        Our enterprise mobility solutions have been developed to help businesses succeed in these areas by providing them with the right tools for better productivity, process optimization and more efficient workflows.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide2} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Manufacture</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Manufacture</h5>
                                    <p className='fontsfregular'>
                                        At BitsWits, we create digital-based solutions that reshape the manufacturing industry. From process automation to inventory management, we offer adaptive solutions which are aimed at raising productivity and efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide13} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Logistics</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Logistics</h5>
                                    <p className='fontsfregular'>
                                        Our logistics solutions are specifically designed to perfectly match your needs, while also managing the supply chain with real-time tracking, route optimization, and efficient resource utilization. We empower logistics companies to be more efficient and offer impeccable services to their customers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide5} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Agriculture</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Agriculture</h5>
                                    <p className='fontsfregular'>
                                        In the agriculture sector , we provide the latest technologies which are used enhance effectiveness of farm operations , crop monitoring , and yield optimization. We aim to empower farmers with technologies which make agriculture process better and more sustainable.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide10} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>E-learning</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>E-learning</h5>
                                    <p className='fontsfregular'>
                                        Our e-learning solutions are the best alternative to the traditional process of education when transforming it into exciting and interactive online sessions. Our sites have engaging content, adaptive learning paths, and collaboration tools designed for both educators and students.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide11} alt='Bitswits' width={287} height={384} className={`${styles.lastImg} mx-auto img-fluid`} />
                                    <h3>Sports</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Sports</h5>
                                    <p className='fontsfregular'>
                                        Our sports solution suite is designed to meet the industry's changing needs through fan engagement platforms, athlete performance tracking, and sports management system. We seek to provide better sports experience for athletes, fans and stakeholders.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default DubaiConquered
