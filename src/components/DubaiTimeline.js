import React from 'react'
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import styles from "@/styles/Dubaitimeline.module.css"
// Images 
import TimelineOne from "/public/newDubaiPagev1/timeline1.png"
import TimelineTwo from "/public/newDubaiPagev1/timeline2.png"
import TimelineThree from "/public/newDubaiPagev1/timeline3.png"
import TimelineFour from "/public/newDubaiPagev1/timeline4.png"
import TimelineFive from "/public/newDubaiPagev1/timeline5.png"

const DubaiTimeline = ({ content }) => {
    const { subtitle, title, desc, isSubtitle, heading1, heading2, heading3, heading4, heading5, para1, para2, para3, para4, para5, classSec, isMobile } = content

    return (
        <>
            <section className={`${styles.timelineSec} ${styles[classSec]}`}>
                <div className='container'>
                    <Row> 
                        <Col lg={12}>
                            <div className=''>
                                <div className={styles.timelineMain}>
                                    <div className={`${styles.timeline} ${styles.timeOne} ${styles.timeLeft} d-flex align-items-center justify-content-between`}>
                                        <div className={`${styles.timelineContent} ${styles.paddingTwo}`}>
                                            {isSubtitle ?
                                                <h4 className={`${styles.redPara} fontsfregular`}>
                                                    {subtitle}
                                                </h4> :
                                                <h4 className={`${styles.redPara} fontsfregular`}>
                                                    Our Process
                                                </h4>}
                                            <h2>{title}</h2>
                                            <p className='fontsfregular'>
                                                {desc}
                                            </p>
                                        </div>
                                        <div className={styles.marker}>
                                            <span className={styles.dotted}></span>
                                        </div>
                                        <div className={`${styles.timelineContent} ${styles.paddingOne} ${styles.spacing}`}>
                                            <Image src={TimelineOne} loading="lazy" sizes="100vw" width={165} height={87} alt='Bitswits' />
                                            <h3 className=''>{heading1}</h3>
                                            <p className={`${styles.timePara} fontsfregular`}>{para1}</p>
                                        </div>
                                    </div>
                                    <div className={`${styles.timeline} ${styles.timeTwo} ${styles.timelineRight} d-flex align-items-center justify-content-between`}>
                                        <div className={`${styles.timelineContent} ${styles.spacingOne} ${styles.paddingThree}`}>
                                            <Image src={TimelineThree} loading="lazy" sizes="100vw" width={203} height={202} alt='Bitswits' />
                                            <h3 className=''>{heading2}</h3>
                                            <p className={`${styles.timePara} fontsfregular`}>
                                                {para2}
                                            </p>
                                        </div>
                                        <div className={`d-lg-block d-none ${styles.numberTwo}`}></div>
                                        <div className={` ${styles.numberTwoMobile}`}></div>
                                        <div className={styles.numberOne}></div>
                                        <div className={`${styles.timelineContent} ${styles.paddingFour} ${styles.spacingTwo}`}>
                                            <Image src={TimelineTwo} alt='Bitswits' loading="lazy" sizes="100vw" width={184} height={100} />
                                            <h3 className=''>{heading3}</h3>
                                            <p className={`${styles.timePara} fontsfregular`}>
                                                {para3}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.timeline} ${styles.timeThree} ${styles.timeLeft} d-flex align-items-center justify-content-between`}>
                                        <div className={`${styles.timelineContent} ${styles.paddingSix} ${styles.spacingFour}`}>
                                            <Image src={TimelineFour} loading="lazy" sizes="100vw" width={207} height={202} alt='Bitswits' />
                                            <h3 className=''>{heading4}</h3>
                                            <p className={`${styles.timePara} fontsfregular`}>
                                                {para4}
                                            </p>
                                        </div>
                                        <div className={styles.numberThree}></div>
                                        <div className={`d-lg-block d-none ${styles.numberFour}`}></div>
                                        <div className={` ${styles.numberFourMobile}`}></div>
                                        <div className={`${styles.timelineContent} ${styles.paddingFive} ${styles.spacingThree}`}>
                                            <Image src={TimelineFive} loading="lazy" sizes="100vw" width={207} height={202} alt='Bitswits' />
                                            <h3 className=''>{heading5}</h3>
                                            <p className={`${styles.timePara} fontsfregular`}>
                                                {para5}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default DubaiTimeline
