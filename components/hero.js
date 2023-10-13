export default function Hero({ title, subtitle, imageOn = false}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {imgeOn && <figure> [画像] </figure>}
        </div>
    )
}