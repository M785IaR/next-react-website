import { createClient } from 'microcms-js-sdk'
import { getAllCategories } from 'lib/api';


export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
})

export async function getPostBySlug(slug) {
    try {
        const post = await client.get({
            endpoint: 'blogs',
            queries: { filters: `slug[equals]${slug}` },
        })
        return post.contents[0]
    } catch (err) {
        console.log('~~ getPostBySlug ~~')
        console.log(err)
    }
}

export async function getAllPosts(limit = 100) {
    try {
        const posts = await client.get({
            endpoint: 'blogs',
            queries: {
                fields: 'title,slug,eyecatch',
                orders: '-publishDate',
                limit: limit,
            },
        })
        console.log(posts)
        return posts.contents
    } catch (err) {
        console.log('~~ getAllPosts ~~')
        console.log(err)
    }
}

export async function getAllPostsByCategory(catID, limit = 100) {
    try {
        const posts = await client.get({
            endpoint: 'blogs',
            queries: {
                filters: `categories[contains]${catID}`,
                fields: `title,slug,eyecatch`,
                orders: '-publishDate',
                limit: limit,
            },
        })
        return posts.contents
    } catch (err) {
        console.log('~~ getAllPostsByCategory ~~')
        console.log(err)
    }
}