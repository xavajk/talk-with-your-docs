import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-5">
        <img src={logo} alt="logo" className="w-60 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/xavajk/talk-with-your-docs")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Q&A Your Documents with <br className="max-md:hidden" />
        <span className="purple_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your understanding with Talk With Your Docs! <br />
        An open-source document Q&A service that enables easy communication with
        your documents.
      </h2>
    </header>
  );
};

export default Hero;
