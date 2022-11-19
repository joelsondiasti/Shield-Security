import Container from "./style";

export default function TopWeb() {
    return (
        <>
            <Container>
                <header>
                    <div>
                        <img src="/assets/marca.png" alt="" />
                        <h1>Shield Security</h1>
                    </div>

                    <nav>
                        <ul>
                            <a href="/">
                                <li>Home</li>
                            </a>
                            <a href="/Antivirus">
                                <li>Antivirus </li>
                            </a>
                            <a href="/About">
                                <li>Sobre </li>
                            </a>
                        </ul>
                    </nav>
                </header>
            </Container>
        </>
    )
}