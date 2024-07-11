import Link from "next/link";

const Button = (props) => {
    let a = true;
    const { link, className, text } = props;
    return (
        a ? <Link href={link} className={`btn ${className}`}>{text}</Link> :
        <button></button>
    )
};

export default Button;