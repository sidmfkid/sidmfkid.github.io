import { Animator, Fade, MoveIn, MoveOut, batch } from "react-scroll-motion";
import Card from "../Card";

export function Skills(props) {
  return (
    <div className="main skills">
      <section className="section">
        <div className="section__container">
          <Animator animation={batch(Fade(), MoveIn(0, -300), MoveOut(0, 300))}>
            <div className="section__title">Skills/Experience</div>
          </Animator>
          <Animator animation={batch(MoveIn(-500, 0), Fade(), MoveOut(800, 0))}>
            <div className="section__divider"></div>
          </Animator>
          <div className="section__body skills">
            <Card title="Languages/Frameworks/Libraries" section={"libs"} />
          </div>
        </div>
      </section>
    </div>
  );
}
