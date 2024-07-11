import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewHomeAbout.module.css";
//
import AboutImage from "@/public/newHomePageImages/about_image.png"
import comma from "@/public/newHomePageImages/comma.png"


const NewHomeAbout = (props) => {

    const [isHovered, setIsHovered] = useState('');

    function fun1(vale) {

        setIsHovered(vale);

    }
    function fun2(vale1) {

        setIsHovered(vale1);

    }

    return (
        <>

            <section className={`${styles.newHomeBg} ${styles[props.addClass]} overflow-hidden`}>
                <Container>
                    <Row>
                        <Col lg={12} className={styles.hover1}>
                            <h3 className='text-white f-40 font-bold text-center'>{props.title}</h3>
                            <h2 className='grdiant f-60 font-bold text-center mb-4'>{props.subtitle}</h2>

                            <div className={` ${styles.client} sec_image text-center`}>
                                <Image quality={75} src={AboutImage} alt='Banner' className={styles.secImage} />


                                <div onMouseEnter={() => fun1('active')}
                                    onMouseLeave={() => fun2('secImage1')} className={isHovered == 'active' ? styles.active : styles.secImage1}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4> We're very satisfied with the results of our working relationship with BitsWits. We were able to create a high-quality mobile app that not only met our specifications but exceeded them in every way. The entire team was friendly and professional throughout the entire process, and we would definitely recommend their services to anyone looking for a reliable custom app development company. <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Chavi Miles</h5>
                                    <p>CO-FOUNDER BLISS TRAVEL</p>
                                </div>

                                <div onMouseEnter={() => fun1('active1')}
                                    onMouseLeave={() => fun2('secImage2')} className={isHovered == 'active1' ? styles.active1 : styles.secImage2}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>BitsWits was a lifesaver for our business. We needed to create an app that could be used on multiple platforms, but we didn’t have a lot of technical know-how or additional development resources. Their team made it easy for us and delivered exactly what we needed. They stayed on top of our project and kept us informed throughout the process. We wouldn't hesitate to recommend them for any of your app development needs! <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Bryce Carlos</h5>
                                    <p>CEO / FOUNDER SOUL SOUND</p>
                                </div>

                                <div onMouseEnter={() => fun1('active2')}
                                    onMouseLeave={() => fun2('secImage3')} className={isHovered == 'active2' ? styles.active2 : styles.secImage3}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>We hired mobile app developers to create a completely new mobile app for our company. The team at BitsWits was really professional, efficient, and knowledgeable in the latest technologies and trends. We couldn't be happier with the results and will definitely be recommending them to anyone looking for top-notch mobile app development company. <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Aden Ward</h5>
                                    <p>CO-FOUNDER PRO HEALTH</p>
                                </div>


                                <div onMouseEnter={() => fun1('active3')}
                                    onMouseLeave={() => fun2('secImage4')} className={isHovered == 'active3' ? styles.active3 : styles.secImage4}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>Hiring Flutter app developers from BitsWits was one of the best decisions I have ever made. They are highly skilled and knowledgeable professionals who understand customer needs and deliver well-crafted solutions to us. Overall, we are extremely satisfied with their service and highly recommend them to anyone looking for reliable and cost-effective Flutter solutions. <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Winnie Brooks</h5>
                                    <p>FOUNDER AND CEO GLOW SPA</p>
                                </div>


                                <div onMouseEnter={() => fun1('active4')}
                                    onMouseLeave={() => fun2('secImage5')} className={isHovered == 'active4' ? styles.active4 : styles.secImage5}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>BitsWits have done a great job making an attractive and eye-catching IOS application. I am grateful to the team for delivering this application perfectly on very short notice. Thanks a lot. <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Andrew Drake</h5>
                                    <p>FOUNDER / CEO MARK PLACE</p>
                                </div>

                                <div onMouseEnter={() => fun1('active5')}
                                    onMouseLeave={() => fun2('secImage6')} className={isHovered == 'active5' ? styles.active5 : styles.secImage6}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>The rider app developed by BitsWits transformed our ride-hailing service. The UI/UX is unmatched and our users love it! <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Rajesh K</h5>

                                </div>

                                <div onMouseEnter={() => fun1('active6')}
                                    onMouseLeave={() => fun2('secImage7')} className={isHovered == 'active6' ? styles.active6 : styles.secImage7}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>Our company's data visualization took a leap forward with the BI app from BitsWits. Accurate analytics and sleek presentation! <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Sophia T</h5>
                                </div>


                                <div onMouseEnter={() => fun1('active7')}
                                    onMouseLeave={() => fun2('secImage8')} className={isHovered == 'active7' ? styles.active7 : styles.secImage8}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>Making informed business decisions is easier than ever with the BI app from BitsWits. Data visualization at its best! <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Samuel R</h5>
                                </div>


                                <div onMouseEnter={() => fun1('active8')}
                                    onMouseLeave={() => fun2('secImage9')} className={isHovered == 'active8' ? styles.active8 : styles.secImage9}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>he social media app developed by BitsWits stands out in a crowded market. Fresh features and a user-centric approach! <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Natasha Z.</h5>
                                </div>

                                <div onMouseEnter={() => fun1('active9')}
                                    onMouseLeave={() => fun2('secImage10')} className={isHovered == 'active9' ? styles.active9 : styles.secImage10}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>"BitsWits's blockchain development app has revolutionized our financial transactions. Secure, fast, and reliable!" <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Chen W.</h5>
                                </div>

                                <div onMouseEnter={() => fun1('active10')}
                                    onMouseLeave={() => fun2('secImage11')} className={isHovered == 'active10' ? styles.active10 : styles.secImage11}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>"Kudos to BitsWits for creating a groundbreaking social media platform. The features are unique, and the design is sleek." <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Emily P</h5>
                                </div>

                                <div onMouseEnter={() => fun1('active11')}
                                    onMouseLeave={() => fun2('secImage12')} className={isHovered == 'active11' ? styles.active11 : styles.secImage12}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>"As a fitness enthusiast, I've tried countless apps. The fitness app by BitsWits is by far the best – intuitive, comprehensive, and motivating." <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Ben S</h5>
                                </div>


                                <div onMouseEnter={() => fun1('active12')}
                                    onMouseLeave={() => fun2('secImage13')} className={isHovered == 'active12' ? styles.active12 : styles.secImage13}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>"As a personal trainer, the fitness app by BitsWits is my go-to for clients. Its features and user experience are unparalleled." <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Isabelle Q</h5>
                                </div>


                                <div onMouseEnter={() => fun1('active13')}
                                    onMouseLeave={() => fun2('secImage14')} className={isHovered == 'active13' ? styles.active13 : styles.secImage14}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>"The social media app developed by BitsWits stands out in a crowded market. Fresh features and a user-centric approach!" <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Natasha Z.</h5>
                                </div>

                                <div onMouseEnter={() => fun1('active14')}
                                    onMouseLeave={() => fun2('secImage15')} className={isHovered == 'active14' ? styles.active14 : styles.secImage15}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>"Our enterprise needed a robust BI solution, and BitsWits delivered! It's transformed the way we view our business metrics." <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Ivan F.</h5>
                                </div>

                                <div onMouseEnter={() => fun1('active15')}
                                    onMouseLeave={() => fun2('secImage16')} className={isHovered == 'active15' ? styles.active15 : styles.secImage16}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>I run a cab service, and the rider app from BitsWits has boosted our user engagement tremendously. It's a game-changer <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Fernando M</h5>
                                </div>

                                <div onMouseEnter={() => fun1('active16')}
                                    onMouseLeave={() => fun2('secImage17')} className={isHovered == 'active16' ? styles.active16 : styles.secImage17}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>I've been blown away by BitsWits's commitment to quality. The blockchain development app is top-notch and user-friendly <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Amir B</h5>
                                </div>

                                <div onMouseEnter={() => fun1('active17')}
                                    onMouseLeave={() => fun2('secImage18')} className={isHovered == 'active17' ? styles.active17 : styles.secImage18}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>"Ever since our company ventured into blockchain technology, BitsWits has been our trusted partner in mobile app development. The interface is seamless and the features robust!" <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Jamie L</h5>
                                </div>

                                <div onMouseEnter={() => fun1('active18')}
                                    onMouseLeave={() => fun2('secImage19')} className={isHovered == 'active18' ? styles.active18 : styles.secImage19}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>"I've been searching for a top-tier social media app and BitsWits delivered! User-friendly and innovative. Highly recommended." <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Maria G</h5>
                                </div>

                                <div onMouseEnter={() => fun1('active19')}
                                    onMouseLeave={() => fun2('secImage20')} className={isHovered == 'active19' ? styles.active19 : styles.secImage20}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>"The fitness app is a daily companion in my health journey. Kudos to BitsWits for such an impeccable design and features." <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Layla D</h5>
                                </div>

                                <div onMouseEnter={() => fun1('active20')}
                                    onMouseLeave={() => fun2('secImage21')} className={isHovered == 'active20' ? styles.active20 : styles.secImage21}>
                                    <Image src={comma} alt='BitsWits' className='img-fluid' />
                                    <h4>"The rider app has made my daily commute so much easier. Booking a ride has never been more efficient. Thank you, BitsWits!" <Image src={comma} alt='BitsWits' className='img-fluid' /></h4>
                                    <h5 className='mt-4'>Diego V</h5>
                                </div>
                            </div>



                            <div onMouseEnter={() => fun1('active')}
                                onMouseLeave={() => fun2('secImage1')}
                                className={styles.james}></div>

                            <div onMouseEnter={() => fun1('active1')}
                                onMouseLeave={() => fun2('secImage2')}
                                className={styles.james1}></div>


                            <div onMouseEnter={() => fun1('active2')}
                                onMouseLeave={() => fun2('secImage3')}
                                className={styles.james2}></div>


                            <div onMouseEnter={() => fun1('active3')}
                                onMouseLeave={() => fun2('secImage4')}
                                className={styles.james3}></div>


                            <div onMouseEnter={() => fun1('active4')}
                                onMouseLeave={() => fun2('secImage5')}
                                className={styles.james4}></div>


                            <div onMouseEnter={() => fun1('active5')}
                                onMouseLeave={() => fun2('secImage6')}
                                className={styles.james5}></div>


                            <div onMouseEnter={() => fun1('active6')}
                                onMouseLeave={() => fun2('secImage7')}
                                className={styles.james6}></div>


                            <div onMouseEnter={() => fun1('active7')}
                                onMouseLeave={() => fun2('secImage8')}
                                className={styles.james7}></div>


                            <div onMouseEnter={() => fun1('active8')}
                                onMouseLeave={() => fun2('secImage9')}
                                className={styles.james8}></div>

                            <div onMouseEnter={() => fun1('active9')}
                                onMouseLeave={() => fun2('secImage10')}
                                className={styles.james9}></div>


                            <div onMouseEnter={() => fun1('active10')}
                                onMouseLeave={() => fun2('secImage11')}
                                className={styles.james10}></div>


                            <div onMouseEnter={() => fun1('active11')}
                                onMouseLeave={() => fun2('secImage12')}
                                className={styles.james11}></div>

                            <div onMouseEnter={() => fun1('active12')}
                                onMouseLeave={() => fun2('secImage13')}
                                className={styles.james12}></div>

                            <div onMouseEnter={() => fun1('active13')}
                                onMouseLeave={() => fun2('secImage14')}
                                className={styles.james13}></div>


                            <div onMouseEnter={() => fun1('active14')}
                                onMouseLeave={() => fun2('secImage15')}
                                className={styles.james14}></div>

                            <div onMouseEnter={() => fun1('active15')}
                                onMouseLeave={() => fun2('secImage16')}
                                className={styles.james15}></div>

                            <div onMouseEnter={() => fun1('active16')}
                                onMouseLeave={() => fun2('secImage17')}
                                className={styles.james16}></div>

                            <div onMouseEnter={() => fun1('active17')}
                                onMouseLeave={() => fun2('secImage18')}
                                className={styles.james17}></div>

                            <div onMouseEnter={() => fun1('active18')}
                                onMouseLeave={() => fun2('secImage19')}
                                className={styles.james18}></div>

                            <div onMouseEnter={() => fun1('active19')}
                                onMouseLeave={() => fun2('secImage20')}
                                className={styles.james19}></div>

                            <div onMouseEnter={() => fun1('active20')}
                                onMouseLeave={() => fun2('secImage21')}
                                className={styles.james20}></div>

                        </Col>
                    </Row>

                </Container>
            </section>


        </>
    )
}

export default NewHomeAbout