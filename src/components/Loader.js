import React from 'react'
import styles from "../../styles/Loader.module.css";

const Loader = () => {
    return (
        <>
            <section className={styles.loader}>
                <video autoPlay loop muted src='https://player.vimeo.com/progressive_redirect/playback/898148403/rendition/1080p/file.mp4?loc=external&log_user=0&signature=659acc51d9cd725d6ccec0e7372a8867e5b92329b955b621995411325692ed43' className='w-50 h-50'></video>
            </section>
        </>
    )
}

export default Loader
