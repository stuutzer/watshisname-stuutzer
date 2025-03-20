import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Works() {
  const works = [
    {
      key: 1,
      name: "MTGlossary",
      time: "November 2024",
      category: "Personal",
      imgSrc: "mtglossary.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
      roles: ["Interface Design", "Product Design", "Full-Stack Development",],
      url: "https://www.mtglossary.com/",
    },
    {
      key: 2,
      name: "Tawhiti Forestry",
      time: "March 2025",
      category: "Corporate",
      imgSrc: "tawhiti.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
      roles: ["Graphic Design", "Interface Design", "Project Management", "Front-End Development",],
      url: "https://www.tawhiti.co.nz/",
    },
  ];
  
  
  return (
    <>
    <Navigation currentPage="Works"/>
    <main>
      {
        works.map(work =>
          <section key={work.key}>
            <p>{work.key}/{works.length}</p>
            <h2>{work.name}</h2>
            <h3>{work.time} / {work.category}</h3>
            <img src={work.imgSrc} alt={"Screenshot of " + work.name + " website."} />
            <p>{work.desc}</p>
            <aside>
                <p>
                    <span>Project Responsibilities:</span>
                    <br />
                    {work.roles.join(', ')}
                </p>
                <a href={work.url}>Visit Site</a>
            </aside>
          </section>
        )
      }
    </main>
    <Footer />
    </>
  );
}
