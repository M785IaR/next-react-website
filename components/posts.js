import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { eyecatch } from 'images/about.jpg';

export default function Posts({ posts }) {
    return (
        <div className={styles.gridContainer}>
            {posts.map(({ title, slug, eyecatch }) => {
                return (
                    <article className={styles.post} key={slug}>
                        <Link href={`/blog/${slug}`}>
                            <a>
                                <figure>
                                    <Image
                                        src={eyecatch.url}
                                        alt=""
                                        layout="responsive"
                                        width={eyecatch.width}
                                        height={eyecatch.height}
                                        sizes="(min-width: 1152px) 576px, 50vw"
                                        placeholder="blur"
                                        blurDataURL={eyecatch.blurDataURL}
                                    />
                                </figure>
                                <h2>{title}</h2>
                            </a>
                        </Link>
                    </article>
                );
            })}
        </div>
    )
}