import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/LpCarousel.module.css'
//
import scr1 from '/public/images/lp-carousel/1.png';
import scr2 from '/public/images/lp-carousel/2.png';
import scr3 from '/public/images/lp-carousel/3.png';
import scr4 from '/public/images/lp-carousel/4.png';
import scr5 from '/public/images/lp-carousel/5.png';
import scr6 from '/public/images/lp-carousel/6.png';
import scr7 from '/public/images/lp-carousel/7.png';
import scr8 from '/public/images/lp-carousel/8.png';
import scr9 from '/public/images/lp-carousel/9.png';
import scr10 from '/public/images/lp-carousel/10.png';
import scr11 from '/public/images/lp-carousel/11.png';
import scr12 from '/public/images/lp-carousel/12.png';
import scr13 from '/public/images/lp-carousel/13.png';


const Carousel = () => {

    const carouselRef = useRef(null);
    const carouselPivotRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        const carouselPivot = carouselPivotRef.current;

        var carouselRadius = 210;
        if (window.innerWidth <767) {
            carouselRadius = 100;
        }
        var carouselRotation = 0;
        var carouselTilt = 0;
        var carouselVelocity = 5;
        var carouselIsDragging = false;
        var carouselDragPosition = 0;

        function start() {
            var items = carouselPivot.children;
            var arc = 360 / items.length;
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                item.style.transform =
                    'translate3d(-50%, -50%, 0) rotateY(' +
                    i * arc +
                    'deg) translateZ(' +
                    carouselRadius * 2 +
                    'px)';
            }
        }

        function dragStart(position) {
            carouselIsDragging = true;
            carouselVelocity = 0;
            carouselDragPosition = position.x;
        }

        function dragMove(position) {
            carouselVelocity =
                (Math.atan2(position.x - carouselDragPosition, carouselRadius * 2) *
                    180) /
                Math.PI;
            carouselDragPosition = position.x;
        }

        function dragEnd() {
            carouselIsDragging = false;
        }

        function update() {
            carouselRotation += carouselVelocity;

            if (!carouselIsDragging) {
                carouselVelocity *= 0.95;
            }

            carouselTilt += (carouselVelocity * 0.1 - carouselTilt) / 10;

            carouselPivot.style.transform =
                'translateZ(-' +
                carouselRadius * 2 +
                'px) rotateX(' +
                -carouselTilt +
                'deg) rotateY(' +
                carouselRotation +
                'deg) ';
        }

        // Touch/mouse event handling
        const location = (evt) => {
            var t1 = evt.touches,
                t2 = evt.changedTouches;
            var s = (t1 && t1[0]) || (t2 && t2[0]) || evt;
            return { x: s.pageX, y: s.pageY };
        };

        const prevent = (evt) => {
            evt.preventDefault();
        };

        const handler = (evt) => {
            switch (evt.type) {
                case 'mousedown':
                    add(document, ['mousemove', 'mouseup']);
                case 'mousedown':
                case 'touchstart':
                    prevent(evt);
                    dragStart(location(evt));
                    break;
                case 'mousemove':
                case 'touchmove':
                    dragMove(location(evt));
                    break;
                case 'mouseup':
                    remove(document, ['mousemove', 'mouseup']);
                case 'mouseup':
                case 'touchend':
                case 'touchcancel':
                    dragEnd(location(evt));
                    break;
            }
        };

        const add = (target, events) => {
            for (var i = 0; i < events.length; i++) {
                target.addEventListener(events[i], handler);
            }
        };

        const remove = (target, events) => {
            for (var i = 0; i < events.length; i++) {
                target.removeEventListener(events[i], handler);
            }
        };

        add(carousel, ['mousedown', 'touchstart', 'touchmove', 'touchend', 'touchcancel']);
        carousel.ondragstart = () => false;

        // Animation loop
        const timestamp = window.performance
            ? () => window.performance.now() / 1000
            : () => new Date().getTime() / 1000;

        const requestFrame =
            window.requestAnimationFrame ||
            function (callback) {
                setTimeout(callback, 16);
            };

        start();
        var time = timestamp();
        const enterFrame = () => {
            var now = timestamp();
            var delta = now - time;
            time = now;
            update(delta);
            requestFrame(enterFrame);
        };
        requestFrame(enterFrame);

        return () => {
            // Cleanup code if needed
        };
    }, []);

    return (
        <>

            <div className={styles.carousel} ref={carouselRef}>
                <div className={styles.carouselPivot} ref={carouselPivotRef}>
                    <div className={styles.carouselItem}>
                        <Image src={scr1} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={scr2} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={scr3} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={scr4} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={scr5} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={scr6} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={scr7} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={scr8} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={scr9} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={scr10} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={scr11} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={scr12} alt="carousel-item" />
                    </div>
                    <div className={styles.carouselItem}>
                        <Image src={scr13} alt="carousel-item" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;
