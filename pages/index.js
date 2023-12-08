import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from "components/hero"

export default function Blog({ posts }) {
    return (
        <Container>
            <Meta />
        <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
    );
}

export async function getStaticProps() {
    const posts = await getAllPosts()

    return {
        props: {
            posts: posts,
        },
    }
}