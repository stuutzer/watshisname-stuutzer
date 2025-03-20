import Link from "next/link";

export default function Navigation() {
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/works">Works</Link></li>
                    <li><a href="mailto:justintengtu@gmail.com">Contact</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}