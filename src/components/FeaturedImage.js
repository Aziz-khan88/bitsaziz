import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/BlogListBody.module.css'


export default function FeaturedImage({ post }) {

    let defaultFeaturedImage = "https://inhouse.cryscampus.com/wordpress/bitswits/wp-content/uploads/2023/08/moz-brand-authority-768x439-1.png";

    if (post.featuredImage) {
        defaultFeaturedImage = `https://inhouse.cryscampus.com/wordpress/bitswits/wp-content/uploads/${post.featuredImage.node.mediaDetails.file}`;
    }

    return (
        <Link href={`/${post.slug}`}>
            <Image quality={75} src={defaultFeaturedImage} width="350" height="300" alt={post.title} className={`${styles.banImg} img-fluid`} />
        </Link>
    )
}