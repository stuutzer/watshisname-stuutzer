"use client"
 
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';

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

    const[isMenuOpen, setIsMenuOpen] = useState(false);
    let buttonText = "menu";
    if (isMenuOpen){
        buttonText = "back";
    };


    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const handleResize = () => {
        if (window.innerWidth > 1000) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    },[]);

    

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
        <header className='menu-header'>
            <div>
                <button
                    className='menu-button'
                    onClick={handleClick}
                >
                    {buttonText}
                </button>
                <p className='menu-page'> / {pageName}</p>
            </div>
        </header>
        <AnimatePresence>
        {isMenuOpen && (
                <motion.nav 
                    className='menu-overlay fade-in'
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ul>
                        {
                            pages.map((page) =>
                                <li key={page.name}>
                                    <Link
                                        href={page.link}
                                        className={pathname === page.link ? "nav-link nav-current" : "nav-link"}
                                        onClick={handleClick}
                                    >
                                        {page.name}
                                    </Link>
                                </li>
                            )
                        }
                        <li><a href="mailto:justintengtu@gmail.com" className="nav-link" >Contact</a></li>
                    </ul>
                </motion.nav>
            
        )}
        </AnimatePresence>
        </>
    );
}