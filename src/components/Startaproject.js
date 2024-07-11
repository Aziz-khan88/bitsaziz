import React from 'react'
import Image from 'next/image'
import styles from "@/styles/Startaproject.module.css";
//
import badgelogo from '/public/images/startaproject/till.png'


const Startaproject = () => {
    return (
        <>
            <section className={styles.still}>
                <div className={` ${styles.gulop}  container `}>
                    <div className="border-r-30 bg-s1 p-5 marginmr">
                        <div className="row">
                            <div className="col-lg-6 col-xl-6 ">
                                <div className="card-body bg-s1">
                                    <h3 className=" font-regular">Start a Project?</h3>
                                    <h4 className="font-26 text-white font-bold">Looking For Expert Guidance On
                                        Your Mobile App Development 
                                        Project?</h4>

                                   <div className={styles.home}>
                                   <a href="tel:8335006007" className={styles.number}>Call Now: (833) 500-6007</a>
                                    <a href="javascript:$zopim.livechat.window.show();" className={styles.live}>Start Iive
                                        Chat</a>
                                   </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 ">
                                <div className={styles.start}>
                                    <Image src={badgelogo} width="554" height="358" className={styles.startproject} alt="BitsWits" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Startaproject