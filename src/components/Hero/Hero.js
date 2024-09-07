import {
  ScrollPage,
  Animator,
  Fade,
  MoveIn,
  MoveOut,
  batch,
  FadeOut,
  FadeIn,
  ZoomIn,
  StickyIn,
} from "react-scroll-motion";
import curvedLines from "../../imgs/curvedLines.png";
import maskedDots from "../../imgs/maskedDots.png";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(0, 1), ZoomIn());

export function Hero(props) {
  return (
    <Animator animation={batch(Fade(), MoveOut(0, -500))}>
      <div className="dotContainer">
        <img className="dots" src={maskedDots} alt=""></img>
      </div>
      <div className="main">
        <section className="section">
          <div className="section__container">
            <Animator
              style={{ position: "relative", zIndex: 10 }}
              animation={batch(Fade(), MoveIn(0, -300), MoveOut(0, 500))}
            >
              <div className="section__title">Sidney Moore</div>
            </Animator>
            <Animator
              animation={batch(MoveOut(-500, 0), Fade())}
              style={{ position: "relative", zIndex: 10 }}
            >
              <div className="section__divider"></div>
            </Animator>
            <Animator
              animation={batch(MoveOut(500, 0), Fade())}
              style={{ position: "relative", zIndex: 10 }}
            >
              <div className="section__subTitle">Full Stack Web Developer</div>
            </Animator>
            <Animator
              animation={batch(MoveOut(500, 0), Fade())}
              style={{ position: "relative", zIndex: 10 }}
            >
              <div className="section__subTitle small">
                Javascript | Typescript | React | Node.js
              </div>
            </Animator>
            {/*               <Animator animation={batch(MoveOut(0, 550), FadeOut(1, 0))}>
                <div className="section__accent">
                  <img className="shimmer" src={curvedLines} alt=""></img>
                </div>
              </Animator> */}
          </div>
        </section>
      </div>
    </Animator>
  );
}
