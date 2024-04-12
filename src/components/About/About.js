import {
  Animator,
  Fade,
  FadeIn,
  MoveIn,
  MoveOut,
  batch,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(FadeIn(), MoveIn(500, 0), MoveOut(-500, 0));

export function About() {
  return (
    <div className="main">
      <section className="section">
        <div className="section__container">
          <Animator animation={batch(Fade(), MoveIn(0, -300), MoveOut(0, 500))}>
            <div className="section__title">About Me</div>
          </Animator>
          <Animator animation={batch(MoveIn(-500, 0), Fade(), MoveOut(800, 0))}>
            <div className="section__divider"></div>
          </Animator>
          <div className="section__subTitle">
            <Animator animation={ZoomInScrollOut}>
              <span>Location: Indianapolis, Indiana</span>
              <span>Hobbies: Music Production, Go Karting, Rocket League</span>
              <span>Favorite Software: FL Studio, Pro Tools, Adobe Suite</span>
            </Animator>
          </div>
        </div>
      </section>
    </div>
  );
}
