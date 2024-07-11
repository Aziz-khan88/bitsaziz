import React from 'react';
import style from '@/styles/blockchain/Form.module.css'

const Form = (props) => {
    return (
        <>
            <form className={style[props.formshome]}>
                <input className={style.formControl} type="text" placeholder="Name" required />
                <input className={style.formControl} type="text" placeholder="Phone Number" required />
                <input className={style.formControl} type="email" placeholder="Email" required />
                <textarea type="textarea" className={style.formControl} placeholder="Message"  ></textarea>
                <button className={`bitsForm ${style.btnprimary}`}>Submit</button>
            </form>
        </>
    )
}

export default Form