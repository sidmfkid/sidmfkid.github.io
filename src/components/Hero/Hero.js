import {
  ScrollPage,
  Animator,
  Fade,
  MoveIn,
  MoveOut,
  batch,
} from "react-scroll-motion";

export function Hero(props) {
  return (
    <ScrollPage page={0}>
      <Animator animation={batch(Fade(), MoveOut(0, -500))}>
        <div className="main">
          <section className="section">
            <div className="section__container">
              <Animator
                animation={batch(Fade(), MoveIn(0, -300), MoveOut(0, 500))}
              >
                <div className="section__title">Sidney Moore</div>
              </Animator>
              <Animator animation={batch(MoveOut(-500, 0), Fade())}>
                <div className="section__divider"></div>
              </Animator>
              <Animator animation={batch(MoveOut(500, 0), Fade())}>
                <div className="section__subTitle">
                  Full Stack Web Developer
                </div>
              </Animator>
              {/* <div className="section__accent">Accent</div> */}
            </div>
          </section>
        </div>
      </Animator>
    </ScrollPage>
  );
}
