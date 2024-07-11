"use client"
import { useCallback, useEffect, useRef, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import Bitswitspopup from "../components/Bitswitspopup";
import { RxCross2 } from "react-icons/rx";
import styles from "@/styles/Houtondubai.module.css";

const Section = ({ section, refCallback }) => {
    const { num, title, content } = section;
    return (
        <section id={num} ref={refCallback} className={`${styles.understand}`}>
            <div>
                <h4 className={styles.number}>{num}</h4>
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </section>
    );
};
const NewHouston = ({ content }) => {
    const sectionsRef = useRef([]);
    const { menus, sections } = content;
    const [isMobile, setIsMobile] = useState(false);
    const [visibleSection, setVisibleSection] = useState(menus[0]);
    const [selectedSection, setSelectedSection] = useState(menus[0]);
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleSection(entry.target.getAttribute("id"));
                    console.log(entry.target.getAttribute("id"));
                }
            });
        });
        sectionsRef.current.forEach((section) => {
            observer.observe(section);
        });
    }, []);

    const refCallback = useCallback((element) => {
        if (element) {
            sectionsRef.current.push(element);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (selectedSection) {
            const section = sectionsRef.current.find(ref => ref.id === selectedSection);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [selectedSection]);

    const handleChange = (event) => {
        const index = event.target.value;
        setSelectedOption(index);
        setSelectedSection(index);
        document.getElementById(`0${index}`).scrollIntoView({ behavior: "smooth" });
    };

    // Modal 
    const [show, setShow] = useState(false);
    function modal(e) {
        e.preventDefault();
        setShow(true);
    }

    function closemodal() {
        setShow(false);
    }
    return (
        <>
            <section className={`${styles.houston}`}>
                <div className="container">
                    <Row className={styles.tone}>
                        <Col lg={5} className={`p-0 text-center ${styles.stickyTop}`}>
                            {isMobile ? (
                                <select
                                    value={selectedOption}
                                    onChange={handleChange}
                                >
                                    {menus.map((menu, index) => (
                                        <option
                                            key={index}
                                            value={index + 1}
                                            className={`d-flex ${visibleSection === `0${index + 1}` ? styles.active : ""}`}
                                        >
                                            {`${menu}`}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <>
                                    <div className={styles.headings}>
                                        <nav className={`${styles.applicationlong}`}>
                                            <ul>
                                                {menus.map((menu, index) => (
                                                    <li key={index} className={`d-flex ${visibleSection === `0${index + 1}` ? styles.active : ""}`}>
                                                        <a href={`#0${index + 1}`} onClick={() => setSelectedSection(index + 1)} className="d-flex align-items-center">
                                                            {/* <span className={`pe-4 d-none`}>0{index + 1}</span> */}
                                                            <span className={styles.menusHeading}>{menu}</span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                        <div className={styles.btn}>
                                            <button onClick={modal} className="pink">
                                                Book A Consultation Now!
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </Col>
                        <Col lg={7}>
                            <div className={`${styles.posto} newscoolr`}>
                                {sections.map((section, index) => (
                                    <Section {...{ section, refCallback }} key={index} />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            {/* Modal Start*/}
            <Modal show={show} onHide={closemodal} className={styles.modalnew}>
                <Modal.Body>
                    <Bitswitspopup formsaspire="popquote" />
                    <span onClick={closemodal} className={styles.cross}>
                        <RxCross2 />
                    </span>
                </Modal.Body>
            </Modal>
            {/* Modal Start*/}
        </>
    )
}
export default NewHouston