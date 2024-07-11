import { useState } from "react";
import { getPostList } from "../../lib/posts";
import styles from '../../styles/BlogListBody.module.css'


export default function LoadMore({ posts, setPosts, taxonomy = null }) {
    const bT = posts.pageInfo?.hasNextPage ? 'Load more posts' : 'No more posts to load';
    const bD = posts.pageInfo?.hasNextPage ? false : true;

    const [buttonText, setButtonText] = useState(bT);
    const [buttonDisabled, setButtonDisabled] = useState(bD);

    const handleOnclick = async (event) => {
        setButtonText('Loading...');
        setButtonDisabled(true);

        const morePosts = await getPostList(posts.pageInfo?.endCursor, taxonomy);

        let updatedPosts = {
            pageInfo: {

            },
            nodes: []
        }

        updatedPosts.pageInfo = morePosts.pageInfo;

        posts.nodes.map((node) => {
            updatedPosts.nodes.push(node);
        });

        morePosts.nodes.map((node) => {
            updatedPosts.nodes.push(node);
        });

        setPosts(updatedPosts);

        if (morePosts.pageInfo?.hasNextPage) {
            setButtonText('Load more posts');
            setButtonDisabled(false);
        }
        else {
            setButtonText('No more posts to load');
            setButtonDisabled(true);
        }
    }

    return (
        <button
            className={styles.loadMore}
            onClick={handleOnclick}
            disabled={buttonDisabled}>
            {buttonText}
        </button>
    );
}