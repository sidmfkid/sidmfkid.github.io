import { useState } from "react";
import {
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

const reqLibs = require.context("../svgs/libs", true, /\.svg$/);
const svgsLibs = reqLibs.keys().map((key) => reqLibs(key));

const reqTools = require.context("../svgs/tools", true, /\.svg$/);
const svgsTools = reqTools.keys().map((key) => reqTools(key));

const libInfo = [
  {
    name: "Liquid",
    ex: "2yrs",
  },
  {
    name: "CSS",
    ex: "3yrs",
  },
  {
    name: "EJS",
    ex: "2yrs",
  },
  {
    name: "HTML",
    ex: "3yrs",
  },
  {
    name: "Javascript",
    ex: "3yrs",
  },
  {
    name: "MongoDB",
    ex: "3yrs",
  },
  {
    name: "Node.js",
    ex: "3yrs",
  },
  {
    name: "React.js",
    ex: "3yrs",
  },
  {
    name: "Sass/Scss",
    ex: "3yrs",
  },
];

const toolInfo = [
  {
    name: "Illustrator",
    ex: "5yrs",
  },
  {
    name: "Photoshop",
    ex: "7yrs",
  },
  {
    name: "Figma",
    ex: "2yrs",
  },
  {
    name: "Trello",
    ex: "1yr",
  },
  {
    name: "NPM",
    ex: "2yrs",
  },
  {
    name: "Github",
    ex: "2yrs",
  },
  {
    name: "Heroku",
    ex: "2yrs",
  },
  {
    name: "VS Code",
    ex: "3yrs",
  },
];

function Card({
  title,
  year,
  type,
  langs,
  tools,
  stack,
  info,
  section,
  github,
  link,
  figma,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const languages = langs?.map((l) => {
    return <li key={l}>{l}</li>;
  });
  const cardListLang = langs && (
    <div className="card__list">
      <span>Languages:</span>
      <ul>{languages}</ul>
    </div>
  );

  const toolsLi = tools?.map((l) => {
    return <li key={l}>{l}</li>;
  });
  const cardListTools = tools && (
    <div className="card__list">
      <span>Tools:</span>
      <ul>{toolsLi}</ul>
    </div>
  );

  const stackLi = stack?.map((l) => {
    return <li key={l}>{l}</li>;
  });
  const cardListStack = stack && (
    <div className="card__list">
      <span>Stack:</span>
      <ul>{stackLi}</ul>
    </div>
  );

  const libs = svgsLibs.map((svg, i) => {
    return {
      svg: svg,
      name: libInfo[i].name,
      ex: libInfo[i].ex,
    };
  });

  const toolz = svgsTools.map((svg, i) => {
    return {
      svg: svg,
      name: toolInfo[i].name,
      ex: toolInfo[i].ex,
    };
  });

  const iconsLibs = libs.map((lib, i) => {
    return (
      <div className="item">
        <Animator
          animation={batch(
            FadeIn(),
            MoveIn(i * 100 + 50, -i * 100 + 50),
            MoveOut(-i * 100 + 50, i * 100 + 50)
          )}
        >
          <div className="item__icon">
            <img src={lib.svg} alt=""></img>
          </div>
          <div className="item__info">
            <div className="item__name">{lib.name}</div>
            <div className="item__ex">{lib.ex}</div>
          </div>
        </Animator>
      </div>
    );
  });

  const iconsTools = toolz.map((tool, i) => {
    return (
      <div className="item">
        <Animator
          animation={batch(
            FadeIn(),
            MoveIn(i * 100 - 50, i * 100 - 50),
            MoveOut(-i * 100 + 50, -i * 100 + 50)
          )}
        >
          <div className="item__icon">
            <img src={tool.svg} alt=""></img>
          </div>
          <div className="item__info">
            <div className="item__name">{tool.name}</div>
            <div className="item__ex">{tool.ex}</div>
          </div>
        </Animator>
      </div>
    );
  });

  if (section === "libs") {
    return (
      <div className="card skills">
        <div className="card__heading skills">
          <div className="card__wrapper skills">
            <h3 className="card__title skills">{title}</h3>
          </div>
          {/* <div className="card__divider skills"></div> */}
        </div>
        <div className="card__body skills">{iconsLibs}</div>
      </div>
    );
  }
  if (section === "tools") {
    return (
      <div className="card skills">
        <div className="card__heading skills">
          <div className="card__wrapper skills">
            <h3 className="card__title skills">{title}</h3>
          </div>
          {/* <div className="card__divider skills"></div> */}
        </div>
        <div className="card__body skills">{iconsTools}</div>
      </div>
    );
  } else {
    const cardClass = isFlipped ? "card flip" : "card";
    const linkEl = link.length ? (
      <div className="link">
        <a href={link}>View Live</a>
        {/* <span className="material-symbols-outlined icon">arrow_forward</span> */}
      </div>
    ) : (
      ""
    );

    const githubEl = github.length && (
      <div className="link">
        <a href={github}>View Github Repo</a>
        {/* <span className="material-symbols-outlined icon">arrow_forward</span> */}
      </div>
    );

    const figmaEl = figma?.length ? (
      <div className="link">
        <a href={figma}>View Figma File</a>
        {/* <span className="material-symbols-outlined icon">arrow_forward</span> */}
      </div>
    ) : (
      ""
    );

    return (
      <div className={cardClass}>
        <div className="card__front">
          <div className="card__heading">
            <div className="card__wrapper">
              <h3 className="card__title">{title}</h3>
              <div className="card__year">{year}</div>
            </div>
            <div className="card__type">{type}</div>
            <div className="card__divider"></div>
          </div>
          <div className="card__body">
            {cardListLang}
            {cardListTools}
            {cardListStack}
          </div>
          <div className="card__footer">
            <button onClick={() => setIsFlipped(true)}>
              <span>More Info</span>
              <span className="material-symbols-outlined icon">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
        <div className="card__back">
          <div className="card__heading">
            <div className="card__wrapper">
              <h3 className="card__title">{title}</h3>
              <div className="card__year">{year}</div>
            </div>
            <div className="card__type">{type}</div>
            <div className="card__divider"></div>
          </div>
          <div className="card__body">
            {linkEl}
            {githubEl}
            {figmaEl}
          </div>
          <div className="card__footer">
            <button onClick={() => setIsFlipped(false)}>
              <span>Go Back</span>
              <span className="material-symbols-outlined icon">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
