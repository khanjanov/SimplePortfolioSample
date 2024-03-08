import s from "./assets/style.module.css";
import riyad from "./assets/pics/riyad.svg";
import github from "./assets/pics/github.svg";
import twitter from "./assets/pics/twitter.svg";
import dribble from "./assets/pics/dribble.svg";

function App() {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.infoDiv}>
          <div className={s.falan}>
            <h1>Hello , I’m Riyad</h1>
            <p>
              Graphic Designer, UI/UX <br /> Designer , Web Designer
            </p>
            <button>Get In Touch !</button>
          </div>
          <div className={s.socials}>
            <img src={github} alt="github" />
            <img src={twitter} alt="twitter" />
            <img src={dribble} alt="dribble" />
          </div>
        </div>

        <img src={riyad} alt="Riyad" />
      </div>
    </>
  );
}

export default App;
