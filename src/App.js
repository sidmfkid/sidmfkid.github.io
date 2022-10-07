import bgImage from "./BG-noblur.jpg";
import "./App.css";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky,
  Fade,
  FadeIn,
  MoveIn,
  MoveOut,
  batch,
  ZoomIn,
  Zoom,
  StickyIn,
} from "react-scroll-motion";
import Card from "./components/Card";
import projects from "./projects.json";

const ZoomInScrollOut = batch(FadeIn(), MoveIn(500, 0), MoveOut(-500, 0));

function App() {
  const cards = projects.map((v) => {
    return (
      <Card
        key={v.title}
        title={v.title}
        year={v.year}
        type={v.type}
        langs={v?.languages}
        tools={v?.tools}
        stack={v?.stack}
        link={v?.link}
        github={v?.github}
        figma={v?.figma}
      />
    );
  });

  return (
    <ScrollContainer snap="mandatory">
      {/* <img className="bg-image" src={bgImage} alt=""></img> */}
      {/* <div className="bg"> */}
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
              </div>
            </section>

            {/* <section className="section">
        <div className="section__container">
          <div className="section__title">Sidney Moore</div>
          <div className="section__divider"></div>
          <div className="section__subTitle">Full Stack Web Developer</div>
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <div className="section__title">Sidney Moore</div>
          <div className="section__divider"></div>
          <div className="section__subTitle">Full Stack Web Developer</div>
        </div>
      </section> */}
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <div className="main">
          <section className="section">
            <div className="section__container">
              <Animator
                animation={batch(Fade(), MoveIn(0, -300), MoveOut(0, 500))}
              >
                <div className="section__title">About Me</div>
              </Animator>
              <Animator
                animation={batch(MoveIn(-500, 0), Fade(), MoveOut(800, 0))}
              >
                <div className="section__divider"></div>
              </Animator>
              <div className="section__subTitle">
                <Animator animation={ZoomInScrollOut}>
                  <span>Location: Indianapolis, Indiana</span>
                  <span>
                    Hobbies: Music Production, Go Karting, Rocket League
                  </span>
                  <span>
                    Favorite Software: FL Studio, Pro Tools, Adobe Suite
                  </span>
                </Animator>
              </div>
            </div>
          </section>

          {/* <section className="section">
        <div className="section__container">
          <div className="section__title">Sidney Moore</div>
          <div className="section__divider"></div>
          <div className="section__subTitle">Full Stack Web Developer</div>
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <div className="section__title">Sidney Moore</div>
          <div className="section__divider"></div>
          <div className="section__subTitle">Full Stack Web Developer</div>
        </div>
      </section> */}
        </div>
      </ScrollPage>

      <ScrollPage page={2}>
        <div className="main">
          <section className="section">
            <div className="section__container">
              <Animator
                animation={batch(FadeIn(), MoveIn(500, 0), MoveOut(-500, 0))}
              >
                <div className="section__title">Projects</div>
              </Animator>
              <Animator
                animation={batch(MoveIn(-500, 0), Fade(), MoveOut(800, 0))}
              >
                <div className="section__divider"></div>
              </Animator>
              <div className="section__body">
                <div className="cards">{cards}</div>
              </div>
              <div className="section__footer hide">
                <button className="back">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button className="next">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* <section className="section">
        <div className="section__container">
          <div className="section__title">Sidney Moore</div>
          <div className="section__divider"></div>
          <div className="section__subTitle">Full Stack Web Developer</div>
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <div className="section__title">Sidney Moore</div>
          <div className="section__divider"></div>
          <div className="section__subTitle">Full Stack Web Developer</div>
        </div>
      </section> */}
        </div>
      </ScrollPage>
      <ScrollPage page={3}>
        <div className="main skills">
          <section className="section">
            <div className="section__container">
              <Animator
                animation={batch(Fade(), MoveIn(0, -300), MoveOut(0, 300))}
              >
                <div className="section__title">Skills/Experience</div>
              </Animator>
              <Animator
                animation={batch(MoveIn(-500, 0), Fade(), MoveOut(800, 0))}
              >
                <div className="section__divider"></div>
              </Animator>
              <div className="section__body skills">
                <Card title="Languages/Frameworks/Libraries" section={"libs"} />

                {/* <Card title="Tools" section={"tools"} /> */}
              </div>
              {/* <div className="section__footer">
                <button className="back">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button className="next">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div> */}
            </div>
          </section>
        </div>
      </ScrollPage>
      <ScrollPage page={4}>
        <div className="main skills">
          <section className="section">
            <div className="section__container">
              <Animator
                animation={batch(Fade(), MoveIn(0, -300), MoveOut(0, 300))}
              >
                <div className="section__title">Skills/Experience</div>
              </Animator>
              <Animator
                animation={batch(MoveIn(-500, 0), Fade(), MoveOut(800, 0))}
              >
                <div className="section__divider"></div>
              </Animator>
              <div className="section__body skills">
                {/* <Card title="Languages/Frameworks/Libraries" section={"libs"} /> */}

                <Card title="Tools" section={"tools"} />
              </div>
            </div>
          </section>
        </div>
      </ScrollPage>
      <ScrollPage page={5}>
        <Animator animation={batch(Fade(), MoveOut(0, -500))}>
          <div className="main">
            <section className="section">
              <div className="section__container">
                <Animator
                  animation={batch(Fade(), MoveIn(0, -300), MoveOut(0, 500))}
                >
                  <div className="section__title">
                    Open For Freelance Work & Full-Time Job Opportunities
                  </div>
                </Animator>
                <Animator animation={batch(MoveOut(-500, 0), Fade())}>
                  <div className="section__divider"></div>
                </Animator>
                <Animator animation={batch(MoveOut(500, 0), Fade())}>
                  <div className="section__subTitle">
                    Email me at sidneyamoore96@gmail.com
                  </div>
                </Animator>
              </div>
            </section>

            {/* <section className="section">
        <div className="section__container">
          <div className="section__title">Sidney Moore</div>
          <div className="section__divider"></div>
          <div className="section__subTitle">Full Stack Web Developer</div>
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <div className="section__title">Sidney Moore</div>
          <div className="section__divider"></div>
          <div className="section__subTitle">Full Stack Web Developer</div>
        </div>
      </section> */}
          </div>
        </Animator>
      </ScrollPage>
      {/* </div> */}
    </ScrollContainer>
  );
}

export default App;
