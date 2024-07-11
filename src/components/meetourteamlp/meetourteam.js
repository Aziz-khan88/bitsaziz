import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Meeteam.module.css'
//
import logo from '/public/images/icons/footerlogo.webp'
import Neal from '/public/meetourteam/Neal.png'
import Gavin from '/public/meetourteam/Gevin.png'
import Austin from '/public/meetourteam/Austin.png'
import { AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link';

const meetourteamlp = () => {

  let meetteam = [
    {
      id: "Gavin",
      teamMember: Gavin,
      name: "Gavin <br/> Fernandes",
      position: "Vice President",
      email: "gavin@bitswits.co",
      href1: "mailto:gavin@bitswits.co",
      phone1: "+1-302-216-8231",
      href2: "tel:+1-302-216-8231",
      phone2: "+92-321-8920913",
      href3: "tel:+92-321-8920913",
    },
    {
      id: "Neal",
      teamMember: Neal,
      name: "Neal <br/> Kenneth",
      position: "Assistant Vice President",
      email: "neal.kenneth@bitswits.co",
      href1: "mailto:neal.kenneth@bitswits.co",
      phone1: "+1-302-216-8228",
      href2: "tel:+1-302-216-8228",
      phone2: "+92-320-8869696",
      href3: "tel:+92-320-8869696",
    },
   
    {
      id: "Austin",
      teamMember: Austin,
      name: "Austin <br/> Patrick",
      position: "Sr.Manager",
      email: "austin.patrick@bitwits.co",
      href1: "mailto:austin.patrick@bitwits.co",
      phone1: "+1-302-312-8230",
      href2: "tel:+1-302-312-8230",
      phone2: "+92-334-3932952",
      href3: "tel:+92-334-3932952",
      
    },
  ]

  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const updateScreenSize = () => {
    setIsLargeScreen(window.innerWidth >= 991); // Change the breakpoint to 992 pixels
  };

  useEffect(() => {
    updateScreenSize();

    const handleResize = () => {
      updateScreenSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up the event listener
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className={`${styles.meetteam} meetteam`}>
        <Container className={`text-center`}>
          <Row>
            <Col lg={12}>
              <Image src={logo} className={`${styles.logo} img-fluid`} alt="Bitwits Meet Our Team" />
            </Col>
            <Col lg={12} className='mb-0 mt-4'>
              <h1>Tap to connect</h1>
            </Col>
          </Row>
          <Row className='justify-content-center gap-5 mt-4'>
            {isLargeScreen && meetteam?.map((e, i) => (
              <Col lg={3} key={i}>
                <div id={e.id} className={`${styles.flipBox} ${styles.hoverEffect}`}>
                  <div className={styles.flipBoxInner}>
                    <div className={styles.flipBoxFront}>
                      <Image src={e.teamMember} quality={100} alt="Bitwits Meet Our Team" className='img-fluid' />
                      <h4 dangerouslySetInnerHTML={{ __html: e.name }} />
                      <p>{e.position}</p>
                    </div>
                    <div className={styles.flipBoxBack}>
                      <h4 dangerouslySetInnerHTML={{ __html: e.name }} />
                      <p><a className='text-white' href={e.href2}>{e.phone1}</a></p>
                      <p><a className='text-white' href={e.href3}>{e.phone2}</a></p>
                      <p><a className='text-white' href={e.href1}>{e.email}</a></p>
                      <p className={styles.position}>{e.position}</p>
                    
                  
                      
                    </div>
                  </div>
                </div>
              </Col>
            ))}

            {!isLargeScreen && meetteam?.map((e, i) => (
              <Col md={12} key={i} className='py-1'>
                <div id={e.id} className={`${styles.flipBox} ${styles.hoverEffect}`}>
                  <div className={styles.flipBoxInner}>
                    <div className={styles.flipBoxFront}>
                      <Image src={e.teamMember} quality={100} alt="Bitwits Meet Our Team" className='img-fluid d-inline' />
                      <h4 dangerouslySetInnerHTML={{ __html: e.name }} />
                      <p>{e.position}</p>
                    </div>
                    <div className={styles.flipBoxBack}>
                      <h4 dangerouslySetInnerHTML={{ __html: e.name }} />
                      <p><a className='text-white' href={e.href2}>{e.phone1}</a></p>
                      <p><a className='text-white' href={e.href3}>{e.phone2}</a></p>
                      <p><a className='text-white' href={e.href1}>{e.email}</a></p>
                      <p className={styles.position}>{e.position}</p>
                      
                  
                    </div>
                  </div>
                </div>

              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default meetourteamlp
