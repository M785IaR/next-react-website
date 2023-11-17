import Container from "components/container";
import Header from "components/header";
import Footer from "components/footer";

export default function layout({ children }) {
    return (
    <>
        <Header />

        <main>
        <Container>{children}</Container>
        </main>

        <Footer />
    </>
    );
}
