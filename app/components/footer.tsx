import { Fragment } from "react";

export default function Footer(){
    const footerLinks = [
        {
            key: 1,
            name: "GitHub",
            url: "https://github.com/stuutzer",
        },
        {
            key: 2,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/justin-teng-tu/",
        },
        {
            key: 3,
            name: "Resume PDF",
            url: "JustinTuResumeApril2025.pdf",
        },
    ]

    return(
        <>
        <footer>
            {
                footerLinks.map(footerLink =>
                    <Fragment key={footerLink.key}>
                        <a href={footerLink.url} className="footer-link" target="_blank">{footerLink.name}</a>
                        {footerLink.key < footerLinks.length && " | "}
                    </Fragment>
                )
            }
        </footer>
        </>
    );
}