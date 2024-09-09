import bgImage from "./BG-noblur.jpg";
import "./App.css";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Fade,
  FadeIn,
  MoveIn,
  MoveOut,
  batch,
} from "react-scroll-motion";
import Card from "./components/Card";
import projects from "./projects.json";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import maskedCrossPattern from "./imgs/maskedCrossPattern.png";
import lines from "./imgs/lines.png";

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
    <div className="maskedDots">
      <ScrollContainer
        style={{
          position: "relative",
          zIndex: 10,
        }}
        snap="mandatory"
      >
        {/* <img className="bg-image" src={bgImage} alt=""></img> */}
        {/* <div className="bg"> */}
        <ScrollPage page={0}>
          <Hero />
        </ScrollPage>
        <ScrollPage page={1}>
          <About />
        </ScrollPage>

        <ScrollPage page={2}>
          <div className="crossContainer">
            <img className="lines" src={lines} alt=""></img>
          </div>
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
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                  </button>
                  <button className="next">
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </ScrollPage>
        <ScrollPage page={3}>
          <Skills />
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
        {/* <ScrollPage page={5}>
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
            </div>
          </Animator>
        </ScrollPage> */}
        {/* </div> */}
      </ScrollContainer>
    </div>
  );
}

export default App;
