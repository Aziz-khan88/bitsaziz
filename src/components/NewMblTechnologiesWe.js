import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/NewMblTechnologieswe.module.css'
//
import icon1 from '/public/newHomePageImages/tech/1.png'
import icon2 from '/public/newHomePageImages/tech/2.png'
import icon3 from '/public/newHomePageImages/tech/3.png'
import icon4 from '/public/newHomePageImages/tech/4.png'
import icon5 from '/public/newHomePageImages/tech/5.png'
import icon6 from '/public/newHomePageImages/tech/6.png'
import icon7 from '/public/newHomePageImages/tech/7.png'
import icon8 from '/public/newHomePageImages/tech/8.png'
//
import frontend1 from '/public/newHomePageImages/tech/frontend/1.png'
import frontend2 from '/public/newHomePageImages/tech/frontend/2.png'
import frontend3 from '/public/newHomePageImages/tech/frontend/3.png'
import frontend4 from '/public/newHomePageImages/tech/frontend/4.png'
import frontend5 from '/public/newHomePageImages/tech/frontend/5.png'
import frontend6 from '/public/newHomePageImages/tech/frontend/6.png'
//
import database1 from '/public/newHomePageImages/tech/database/1.png'
import database2 from '/public/newHomePageImages/tech/database/2.png'
import database3 from '/public/newHomePageImages/tech/database/3.png'
import database4 from '/public/newHomePageImages/tech/database/4.png'
import database5 from '/public/newHomePageImages/tech/database/5.png'
import database6 from '/public/newHomePageImages/tech/database/6.png'
//
import php1 from '/public/newHomePageImages/tech/php/1.png'
import php2 from '/public/newHomePageImages/tech/php/2.png'
import php3 from '/public/newHomePageImages/tech/php/3.png'
//
import cms1 from '/public/newHomePageImages/tech/cms/1.png'
import cms2 from '/public/newHomePageImages/tech/cms/2.png'
import cms3 from '/public/newHomePageImages/tech/cms/3.png'
//
import dev1 from '/public/newHomePageImages/tech/dev/1.png'
import dev2 from '/public/newHomePageImages/tech/dev/2.png'
import dev3 from '/public/newHomePageImages/tech/dev/3.png'
import dev4 from '/public/newHomePageImages/tech/dev/4.png'
import dev5 from '/public/newHomePageImages/tech/dev/5.png'
import dev6 from '/public/newHomePageImages/tech/dev/6.png'
import dev7 from '/public/newHomePageImages/tech/dev/7.png'
import dev8 from '/public/newHomePageImages/tech/dev/8.png'
import dev9 from '/public/newHomePageImages/tech/dev/9.png'


const Technologieswe = () => {

    const [activeTab1, setActiveTab1] = useState('tab1');
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }


    return (
        <>
            <section className={styles.tech}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h2 className={styles.work}><span className=''>Technologies</span> we work with</h2>
                        </Col>
                        <Col xl={12} className='mb-5'>
                            <div className={styles.analpost}>
                                <div className={activeTab1 == 'tab1' ? styles.active : ''} onClick={() => fun1('tab1')} href="#">Mobile</div>
                                <div className={activeTab1 == 'tab2' ? styles.active : ''} onClick={() => fun1('tab2')} href="#">Front end</div>
                                <div className={activeTab1 == 'tab3' ? styles.active : ''} onClick={() => fun1('tab3')} href="#">Database</div>
                                <div className={activeTab1 == 'tab4' ? styles.active : ''} onClick={() => fun1('tab4')} href="#">Backend</div>
                                <div className={activeTab1 == 'tab5' ? styles.active : ''} onClick={() => fun1('tab5')} href="#">CMS</div>
                                <div className={activeTab1 == 'tab6' ? styles.active : ''} onClick={() => fun1('tab6')} href="#">Infra and devops</div>
                            </div>

                        </Col>


                        <Col xl={12}>

                            {activeTab1 == 'tab1' &&


                                <div className={styles.newyork}>

                                    <div>
                                        <Image quality={75} alt='BitsWits' src={icon1} className='img-fluid' />
                                        <p>Ios</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={icon2} className='img-fluid' />
                                        <p>Android</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={icon3} className='img-fluid' />
                                        <p>React native</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={icon4} className='img-fluid' />
                                        <p>Flutter</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={icon5} className='img-fluid' />
                                        <p>Ionic</p>
                                    </div>

                                    <div>
                                        <Image quality={75} alt='BitsWits' src={icon6} className='img-fluid' />
                                        <p>Swift</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={icon7} className='img-fluid' />
                                        <p>Kotlin</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={icon8} className='img-fluid' />
                                        <p>Objectivec</p>
                                    </div>


                                </div>


                            }



                            {activeTab1 == 'tab2' &&


                                <div className={styles.newyork}>

                                    <div>
                                        <Image quality={75} alt='BitsWits' src={frontend1} className='img-fluid' />
                                        <p>Angular js</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={frontend2} className='img-fluid' />
                                        <p>React js</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={frontend3} className='img-fluid' />
                                        <p>Typescript</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={frontend4} className='img-fluid' />
                                        <p>Vue</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={frontend5} className='img-fluid' />
                                        <p>Wpf</p>
                                    </div>

                                    <div>
                                        <Image quality={75} alt='BitsWits' src={frontend6} className='img-fluid' />
                                        <p>Html5</p>
                                    </div>



                                </div>

                            }

                            {activeTab1 == 'tab3' &&

                                <div className={styles.newyork}>

                                    <div>
                                        <Image quality={75} alt='BitsWits' src={database1} className='img-fluid' />
                                        <p>Mongo db</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={database2} className='img-fluid' />
                                        <p>Mysql</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={database3} className='img-fluid' />
                                        <p>Mssql</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={database4} className='img-fluid' />
                                        <p>Firebase</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={database5} className='img-fluid' />
                                        <p>Dynamodb</p>
                                    </div>

                                    <div>
                                        <Image quality={75} alt='BitsWits' src={database6} className='img-fluid' />
                                        <p>Redis</p>
                                    </div>



                                </div>

                            }


                            {activeTab1 == 'tab4' &&


                                <div className={styles.newyork}>

                                    <div>
                                        <Image quality={75} alt='BitsWits' src={php1} className='img-fluid' />
                                        <p>Php</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={php2} className='img-fluid' />
                                        <p>Java</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={php3} className='img-fluid' />
                                        <p>Node .js</p>
                                    </div>



                                </div>

                            }

                            {activeTab1 == 'tab5' &&

                                <div className={styles.newyork}>

                                    <div>
                                        <Image quality={75} alt='BitsWits' src={cms1} className='img-fluid' />
                                        <p>Wordpress</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={cms2} className='img-fluid' />
                                        <p>Magento</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={cms3} className='img-fluid' />
                                        <p>Shopify</p>
                                    </div>



                                </div>

                            }

                            {activeTab1 == 'tab6' &&

                                <div className={styles.newyork}>

                                    <div>
                                        <Image quality={75} alt='BitsWits' src={dev1} className='img-fluid' />
                                        <p>Aws</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={dev2} className='img-fluid' />
                                        <p>Gradle</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={dev3} className='img-fluid' />
                                        <p>Jenkins</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={dev4} className='img-fluid' />
                                        <p>Appium</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={dev5} className='img-fluid' />
                                        <p>Selenium</p>
                                    </div>

                                    <div>
                                        <Image quality={75} alt='BitsWits' src={dev6} className='img-fluid' />
                                        <p>Azure</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={dev7} className='img-fluid' />
                                        <p>Digital ocean</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={dev8} className='img-fluid' />
                                        <p>Rackspace</p>
                                    </div>
                                    <div>
                                        <Image quality={75} alt='BitsWits' src={dev9} className='img-fluid' />
                                        <p>Linode</p>
                                    </div>


                                </div>

                            }


                        </Col>
                    </Row>


                </Container>




            </section>


        </>
    )
}

export default Technologieswe