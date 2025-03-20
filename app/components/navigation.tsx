import Link from "next/link";

export default function Navigation({ currentPage }: { currentPage: string }) {
    const pages = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Works",
            link: "/works",
        },
    ]

    return(
        <>
        <header className="nav-outer">
            <nav>
                <ul>
                    {
                        pages.map((page, idx) => 
                            <li key={page.name}>
                                <Link 
                                    href={page.link} 
                                    className={currentPage === page.name ? "nav-link nav-current" : "nav-link"} 
                                    style={{marginLeft: (idx * 7.5) + "rem",}}
                                >
                                    {page.name}
                                </Link>
                            </li>
                        )
                    }
                    <li><a href="mailto:justintengtu@gmail.com" className="nav-link" style={{marginLeft: (pages.length * 7.5) + "rem",}}>Contact</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}