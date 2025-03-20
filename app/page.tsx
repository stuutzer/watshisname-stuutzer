import Navigation from "./components/navigation";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <Navigation currentPage="Home"/>
    <main className="hp-main">
      <div className="hp-title">
        <h1 className="hp-name">Justin Tu.</h1>
        <h3 className="hp-alias">(watshisname-stuutzer.)</h3>
      </div>
      <h2 className="hp-occupation">Front-End Developer. UX/UI Designer.</h2>
      <p className="hp-text">
        I was going to talk about how I’m an Auckland-based designer/developer,
        <br />
        but I already stated it in the h2 tag. What am I supposed to write here?
      </p>
    </main>
    <Footer/>
    </>
  );
}
