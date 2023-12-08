<<<<<<< HEAD
export default async function handler(req, res) {
    if (res.query.select !== process.env.SELECT_TOKEN) {
        return res.status(401).json({ message: 'Invalid token'})
    }
    try {
        await res.unstable_revalidate('/blog/shedule')
        await res.unstable_revalidate('/blog/music')
        return res.json({ revalidated: true})
    } catch (err) {
        return res.status(500).send('Error revalidating')
=======
export default async function handler(req, res){
    try{
        await res.unstable_revalidate('/blog/shedule')
        await res.unstable_revalidate('/blog/music')
        return res.json({ revalidated: true })
    }catch (err){
    return res.status(500).send('Error revalidating')
>>>>>>> 65c05ea29d5f0ab3b18dfc06f2534291c50ee91c
    }
}