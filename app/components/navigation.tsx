"use client"
 
import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function Navigation() {
    const pathname = usePathname()
    
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

    let margin = 7.5;
    if (pathname === "/works"){
        margin = 0;
    };

    let pageName = "Home"
    if (pathname === "/works"){
        pageName = "Works"
    };

    return(
        <>
        <header className="nav-main">
            <nav>
                <ul>
                    {
                        pages.map((page, idx) => 
                            <li key={page.name}>
                                <Link 
                                    href={page.link} 
                                    className={pathname === page.link ? "nav-link nav-current" : "nav-link"} 
                                    style={{marginLeft: (idx * margin) + "rem",}}
                                >
                                    {page.name}
                                </Link>
                            </li>
                        )
                    }
                    <li><a href="mailto:justintengtu@gmail.com" className="nav-link" style={{marginLeft: (pages.length * margin) + "rem",}}>Contact</a></li>
                </ul>
            </nav>
        </header>
        <header className='menu-header'><button className='menu-button'>menu</button><p className='menu-page'> / {pageName}</p></header>
        </>
    );
}