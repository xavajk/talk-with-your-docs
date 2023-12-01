import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <h1 className="head_text pt-20">
        Q&A Your Documents with <br className="max-md:hidden" />
        <span className="purple_gradient">OpenAI RAG</span>
      </h1>
      <h2 className="desc">
        Simplify your understanding with <b>Talk With Your Docs!</b> <br />
        An open-source document Q&A service that enables easy communication with
        your documents.
      </h2>
    </header>
  );
};

export default Hero;

{
  /* <nav className="flex justify-between items-center w-full mb-10 pt-5">
  <img src={logo} alt="logo" className="w-60 object-contain" />
  <button
    type="button"
    onClick={() => window.open("https://github.com/xavajk/talk-with-your-docs")}
    className="black_btn"
  >
    Github
  </button>
</nav>; */
}
