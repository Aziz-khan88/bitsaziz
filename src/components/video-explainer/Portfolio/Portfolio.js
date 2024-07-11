import React, { useEffect, useRef, useState } from 'react'
import PlayIcon from "media/icons/play.png"
import Image from 'next/image'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
// fancy Box
import { Fancybox, Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "@/styles/video-explainer/Portfolio.module.css"
// Import Images
import Thumbnail1 from "media/thumbnails/2d-animation/1.jpg"
import Thumbnail2 from "media/thumbnails/2d-animation/2.jpg"
import Thumbnail3 from "media/thumbnails/2d-animation/3.jpg"
import Thumbnail4 from "media/thumbnails/2d-animation/4.jpg"
import Thumbnail5 from "media/thumbnails/2d-animation/5.jpg"
import Thumbnail6 from "media/thumbnails/2d-animation/6.jpg"
import Thumbnail7 from "media/thumbnails/3d-animation/1.jpg"
import Thumbnail8 from "media/thumbnails/3d-animation/2.jpg"
import Thumbnail9 from "media/thumbnails/3d-animation/3.jpg"
import Thumbnail10 from "media/thumbnails/3d-animation/4.jpg"
import Thumbnail11 from "media/thumbnails/3d-animation/5.jpg"
import Thumbnail12 from "media/thumbnails/3d-animation/6.jpg"
import Thumbnail13 from "media/thumbnails/whiteboard/1.jpg"
import Thumbnail14 from "media/thumbnails/whiteboard/2.jpg"
import Thumbnail15 from "media/thumbnails/whiteboard/3.jpg"
import Thumbnail16 from "media/thumbnails/whiteboard/4.jpg"
import Thumbnail17 from "media/thumbnails/whiteboard/5.jpg"
import Thumbnail18 from "media/thumbnails/whiteboard/6.jpg"
import Thumbnail19 from "media/thumbnails/motion-graphics/1.jpg"
import Thumbnail20 from "media/thumbnails/motion-graphics/2.jpg"
import Thumbnail21 from "media/thumbnails/motion-graphics/3.jpg"
import Thumbnail22 from "media/thumbnails/motion-graphics/4.jpg"
import Thumbnail23 from "media/thumbnails/motion-graphics/5.jpg"
import Thumbnail24 from "media/thumbnails/motion-graphics/6.jpg"
import Thumbnail25 from "media/thumbnails/hybrid/1.jpg"
import Thumbnail26 from "media/thumbnails/hybrid/2.jpg"
import Thumbnail27 from "media/thumbnails/hybrid/3.jpg"
import Thumbnail28 from "media/thumbnails/hybrid/4.jpg"
import Thumbnail29 from "media/thumbnails/hybrid/5.jpg"
import Thumbnail30 from "media/thumbnails/hybrid/6.jpg"

const tabInfo = [
    { label: "2D Animations", index: 0 },
    { label: "3D Animation", index: 1 },
    { label: "Whiteboard", index: 2 },
    { label: "Motion Graphics", index: 3 },
    { label: "Hybrid Animation", index: 4 },
];
const tabContents = [
    [
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9",
            thumbnail: Thumbnail1
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee",
            thumbnail: Thumbnail2
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1",
            thumbnail: Thumbnail3
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380",
            thumbnail: Thumbnail4
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907829180/rendition/1080p/file.mp4?loc=external&signature=e2c22685eafa8501d4efe1007026a663eee3d5cac85dc8007e6c9afcfc4a9e59",
            thumbnail: Thumbnail5
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907829397/rendition/1080p/file.mp4?loc=external&signature=90d3e6d4b05f56ed61129b5031be09b724259666750b41882f54bf99b3e2314e",
            thumbnail: Thumbnail6
        },
    ],
    [
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e",
            thumbnail: Thumbnail7
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12",
            thumbnail: Thumbnail8
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5",
            thumbnail: Thumbnail9
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969",
            thumbnail: Thumbnail10
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907826670/rendition/1080p/file.mp4?loc=external&signature=f74dcc4a39df10abe19a05be96cc65177c5db653bc09f47a37e1d33ebbd4cc67",
            thumbnail: Thumbnail11
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907827073/rendition/1080p/file.mp4?loc=external&signature=ea8148af25f94ab0324027eb511fcac7a08d64da2fde9e2f4a27689b175a885c",
            thumbnail: Thumbnail12
        },
    ],
    [
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e",
            thumbnail: Thumbnail13
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256",
            thumbnail: Thumbnail14
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14",
            thumbnail: Thumbnail15
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3",
            thumbnail: Thumbnail16
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907665670/rendition/1080p/file.mp4?loc=external&signature=5728c74e8fb3073310fcf805a1a60b32b571c441ae437e4424e8fd9c504f6f02",
            thumbnail: Thumbnail17
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907665545/rendition/1080p/file.mp4?loc=external&signature=f81498bfcf59e3783476c220552b5729fb7771036ea9666550fd770ac3f2dbbc",
            thumbnail: Thumbnail18
        },
    ],
    [
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4",
            thumbnail: Thumbnail19
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51",
            thumbnail: Thumbnail20
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb",
            thumbnail: Thumbnail21
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/911724985/rendition/1080p/file.mp4?loc=external&signature=df10cc62ec59a62f54069b460626dcb1c6bdfa84519f840c75a06dba68ed5ba6",
            thumbnail: Thumbnail22
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907667998/rendition/1080p/file.mp4?loc=external&signature=9547d186557ae1c6f51a43880464ed876c4bab48fca0ef0950f36b5c77079872",
            thumbnail: Thumbnail23
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/907668204/rendition/1080p/file.mp4?loc=external&signature=a51872dd125be907894841af68d8262c46f584ab3dbcfad7c0f068e9556b98c8",
            thumbnail: Thumbnail24
        },
    ],
    [
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86",
            thumbnail: Thumbnail25
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987",
            thumbnail: Thumbnail26
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466",
            thumbnail: Thumbnail27
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/911724677/rendition/1080p/file.mp4?loc=external&signature=32ea21fdd1dded95912051ee5fefdc0deefb2e26b2598ae835cf57397b1a87e6",
            thumbnail: Thumbnail28
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/911728642/rendition/1080p/file.mp4?loc=external&signature=44469d3d3ef50562def357cdf05ef68b8d9eb1f6c874c98d4b7a6772c4b7f173",
            thumbnail: Thumbnail29
        },
        {
            video: "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3",
            thumbnail: Thumbnail30
        },
    ]
];
const Portfolio = () => {
    //Tabs
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    // Fancy box
    function Fancybox(props) {
        const containerRef = useRef(null);
        useEffect(() => {
            const container = containerRef.current;
            const delegate = props.delegate || "[datafancybox]";
            const options = props.options || {};
            NativeFancybox.bind(container, delegate, options);
            return () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        });
        return <div ref={containerRef}>{props.children}</div>;
    }
    // ====== Responsive Slider 
    const portfolioSlider = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <>
            <section className={styles.portfolioSec}>
                <div className='container'>
                    <Row>
                        <Col lg={12}>
                            <h2>Our Impactful Offerings</h2>
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <ul className={`mt-md-4 ${styles.tabItems}`}>
                                        {tabInfo.map((tab, index) => (
                                            <li key={index}
                                                className={`${styles.tabLink} ${activeTab === index ? styles.isActive : "text-black"}`}
                                                onClick={() => handleTabClick(index)}>
                                                {tab.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='d-md-block d-none'>
                                    <div className={styles.flexWrap}>
                                        {tabContents[activeTab] && (
                                            <Fancybox options={{
                                                Carousel: {
                                                    infinite: false,
                                                },
                                            }}>
                                                <div className={styles.flexWrap}>
                                                    {tabContents[activeTab].map((item, index) => (
                                                        <Link key={index} href={item.video} datafancybox="gallery" className='overflow-hidden'>
                                                            <div className={styles.overlayMain}>
                                                                <Image src={item.thumbnail} alt="Bitswits" width={468} height={263} className={styles.thumbnailImage} />
                                                                <div className={styles.overlay}>
                                                                    <Image src={PlayIcon} alt='Play-icon' />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </Fancybox>
                                        )}
                                    </div>
                                </div>
                                <div className='d-md-none d-block'>
                                    {tabContents[activeTab] && (
                                        <Fancybox options={{
                                            Carousel: {
                                                infinite: false,
                                            },
                                        }}>
                                            <Slider {...portfolioSlider} className="streamedSlider">
                                                {tabContents[activeTab].map((item, index) => (
                                                    <Link key={index} href={item.video} datafancybox="gallery" className='overflow-hidden'>
                                                        <div className={styles.overlayMain}>
                                                            <Image src={item.thumbnail} alt="Bitswits" width={468} height={263} className={styles.thumbnailImage} />
                                                            <div className={styles.overlay}>
                                                                <Image src={PlayIcon} alt='Play-icon' />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </Slider>
                                        </Fancybox>
                                    )}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Portfolio
