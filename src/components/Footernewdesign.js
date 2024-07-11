import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Footernewdsign.module.css'
//
import icon1 from '/public/images/footerimage/1.png'
import icon2 from '/public/images/footerimage/2.png'
import icon3 from '/public/images/footerimage/3.png'
import icon4 from '/public/images/footerimage/4.png'
import icon5 from '/public/images/footerimage/5.png'
import mail from '/public/images/footerimage/email.png'
import call from '/public/images/footerimage/call.png'


const Footernewdesign = () => {

  return (
    <>

      <footer className={styles.footer}>
        <div className="container">
          <div className="footer-navigation">
            <div className="row">
              <div className="col-lg-4 col-xl-4 mb-lg-0 mb-4">
                <div className={` ${styles.foottitle} mb-3 pb-3 `}>
                  <h3 className="text-white font-bold font-22">Services</h3>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li> <Link href="javascript:;">iPhone App
                        Development
                      </Link></li>
                      <li><Link href="javascript:;">Cross
                        Platform App Development</Link></li>
                      <li><Link href="javascript:;">Android App
                        Development</Link></li>
                      <li><Link href="javascript:;">React Native
                        App Development</Link></li>
                      <li> <Link href="javascript:;">Flutter App
                        Development</Link></li>
                      <li><Link href="javascript:;">Wearable App
                        Development</Link></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li><Link href="javascript:;">UI / UX App Design</Link>
                      </li>

                      <li><Link href="javascript:;">Web App
                        Development</Link></li>
                      <li><Link href="javascript:;">Game Development</Link>
                      </li>
                      <li><Link href="javascript:;">2D Game
                        Development</Link></li>
                      <li><Link href="javascript:;">3D Game
                        Development</Link></li>
                      <li><Link href="javascript:;">Blockchain
                        Game Development</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4 mb-lg-0 mb-4">
                <div className={` ${styles.foottitle} mb-3 pb-3 `}>
                  <h3 className="text-white font-bold font-22">On Demand Solutions</h3>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li><Link href="javascript:;" className="modal-toggle">On Demand App Development</Link></li>
                      <li><Link href="javascript:;" className="modal-toggle">Taxi App Solution</Link></li>
                      <li><Link href="javascript:;" className="modal-toggle">Food Delivering App Solutions</Link>
                      </li>
                      <li><Link href="javascript:;" className="modal-toggle">Elearning App Solutions</Link></li>
                      <li><Link href="javascript:;" className="modal-toggle">Lifestyle App Development</Link></li>
                      <li><Link href="javascript:;" className="modal-toggle">Healthcare App Development</Link></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li><Link href="javascript:;" className="modal-toggle">On Demand eWallet App Solutions</Link>
                      </li>
                      <li><Link href="javascript:;" className="modal-toggle">Fantasy Sports App Development</Link>
                      </li>
                      <li><Link href="javascript:;" className="modal-toggle">Grocery Delivery App Development</Link>
                      </li>
                      <li><Link href="javascript:;" className="modal-toggle">Live Streaming App Development</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className={` ${styles.foottitle} mb-3 pb-3 `}>
                  <h3 className="text-white font-bold font-22">Useful Links</h3>
                </div>
                <ul>
                  <li><Link href="javascript:;">Contact Us</Link></li>
                  <li><Link href="javascript:;">About Us</Link></li>
                  <li><Link href="javascript:;">Works</Link></li>
                  <li><Link href="javascript:;">Testimonials</Link></li>
                  <li><Link href="javascript:;"> Privacy Policy</Link></li>
                  <li><Link href="javascript:;">Terms & Conditions</Link></li>

                </ul>

              </div>
              <div className="col-xl-2 col-lg-2">
                <div className={` ${styles.foottitle} mb-3 pb-3 `}>
                  <h3 className="text-white font-bold font-22">Contact</h3>
                </div>
                <p className={styles.more}>To learn more about our service offerings and industry expertise or to have a Consulting professional contact you directly, please fill out the form below or submit an email & contact number.</p>
                <ul className="contacts my-links">
                  <li className="mb-1 color-s">
                    <a href="mailto:info@BitsWits.co">
                      <Image alt="BitsWits" className='img-fluid'
                        src={mail}

                        loading="lazy"
                      />
                      <span className={styles.email}>Contact Email</span>
                    </a>
                  </li>
                  <li className="font-bold color-s">
                    <a href="tel:3123795987">
                      <Image alt="BitsWits" className='img-fluid'
                        src={call}

                        loading="lazy"
                      />
                      <span className={styles.number}>+1 312 379 5987</span>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className={` ${styles.footercopyright} container`}>
            <div className="row align-items-md-center pt-3">
              <div className="col-md-4  col-xl-4 col-lg-4  mt-md-0 mt-4">

                <ul className={styles.socials}>
                  <li className={styles.colorp}>Official Channels |</li>
                  <li>
                    <a href="https://www.facebook.com/officialBitsWits" target="_blank" rel="noopener noreferrer">
                      <Image width="22" height="22" alt="BitsWits" className="img-fluid" src={icon1} loading="lazy" />
                    </a>
                  </li>
                  <li>
                    <a href="ttps://www.linkedin.com/company/officialBitsWits" target="_blank" rel="noopener noreferrer">
                      <Image width="21" height="21" alt="BitsWits" className="img-fluid" src={icon2} loading="lazy" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@officialBitsWits" target="_blank" rel="noopener noreferrer">
                      <Image width="21" height="21" alt="BitsWits" className="img-fluid" src={icon3} loading="lazy" />
                    </a>
                  </li>
                  <li>
                    <a href="hhttps://twitter.com/BitsWits_/" target="_blank" rel="noopener noreferrer">
                      <Image width="21" height="21" alt="BitsWits" className="img-fluid" src={icon4} loading="lazy" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/officialBitsWits/" target="_blank" rel="noopener noreferrer">
                      <Image width="21" height="21" alt="BitsWits" className="img-fluid" src={icon5} loading="lazy" />
                    </a>
                  </li>
                </ul>

              </div>
              <div className="col-md-5 col-lg-5 col-xl-5">

              </div>
              <div className="col-md-3 col-xl-3 col-lg-3">
                <div className={styles.termsMain}>
                  <ul className={styles.termsCondition}>
                    <li><Link href="https://BitsWits.co/terms-and-conditions/" className="text-white font-bold">Terms of Use . </Link></li>

                    <li><Link href="https://BitsWits.co/privacy-policy/" className="text-white font-bold"> Privacy
                      Policy</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyrightBottom}>
          <div className="container">
            <div className="row justify-content-center align-items-center text-center">
              <div className="col-md-12 col-lg-12 col-xl-12">
                <p className="font-15 text-white mb-0">
                  Copyright © 2024 BitsWits. All Rights Reserved.
                </p>
              </div>

            </div>
          </div>
        </div>

      </footer>


    </>
  )
}

export default Footernewdesign