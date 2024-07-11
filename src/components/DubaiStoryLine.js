"use client"
import { useState } from "react";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from 'next/link';
// Import Images
import arrow from "/public/newDubaiPagev1/arrow.png";
// Import CSS
import styles from "@/styles/StoryLine.module.css"

const StoryLine = ({ content }) => {
    const { subtitle, title, para, subPara, accordionData } = content;
    // Accordions
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    // Set styling
    const router = usePathname();
    let main;
    let headings;
    let row;
    let text;
    let padding;
    let accImg;
    switch (router) {
        case "video-animation-process":
            main = 'pt-0'
            headings = 'hidden'
            row = 'items-start'
            text = 'text-[34px]'
            padding = 'py-8'
            accImg = 'border rounded-3xl'
            break;
        default:
            break;
    }
    return (
        <>
            <section className={`w-full d-flex align-items-center justify-content-start py-6 md:py-12 lg:py-16 ${styles.bussinessEmpower}`}>
                <div className="container">
                    <div>
                        <div className='mb-3 mb-xl-5 '>
                            <h4>
                                {subtitle}
                            </h4>
                            <h2>
                                {title}
                            </h2>
                            <p className="fontsfregular">
                                {para}
                            </p>
                            <p className="fontsfregular">
                                {subPara}
                            </p>
                        </div>
                    </div>
                    <div className={`d-sm-flex d-flex-col lg:d-flex-row align-items-center gap-y-8 justify-content-between mt-7 sm:mt-12 ${row}`}>
                        <div className={styles.tabsInfo}>
                            <div className="grid">
                                {accordionData.map((item, index) => (
                                    <div key={index} className={`pb-lg-4 pt-4 ${padding} w-100`}>
                                        <div className={`d-flex justify-content-between align-items-center cursor-pointer ${activeIndex === index ? styles.isActive : styles.nonActive}`}
                                            onClick={() => handleClick(index)}>
                                            <h5>{item.question}</h5>
                                            <span>
                                                {activeIndex === index ?
                                                    <div className={styles.nonActiveArrow}>
                                                        <Image src={arrow} loading="lazy" sizes="100vw" width={10} height={10} className="w-[40%]" alt="bitswits" />
                                                    </div>
                                                    :
                                                    <div className={styles.isActiveArrow}>
                                                        <Image src={arrow} loading="lazy" sizes="100vw" width={10} height={10} className="w-[40%] rotate-180 invert" alt="bitswits" />
                                                    </div>
                                                }
                                            </span>
                                        </div>
                                        {activeIndex === index && (
                                            <>
                                                <p className="fontsfregular">{item.answer}</p>
                                                <div className={` ${styles.btn}`}>
                                                    <Link href="javascript:$zopim.livechat.window.show();" className="pink">
                                                        {item.btn}
                                                    </Link>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            {activeIndex !== null && (
                                <figure className="relative d-md-block d-none">
                                    <Image loading="lazy" sizes="100vw" className={`img-fluid mt-sm-0 mt-5 ${styles.storyLineImages}`} src={accordionData[activeIndex].StoryLineImg} alt="bitswits" />
                                </figure>
                            )}
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default StoryLine