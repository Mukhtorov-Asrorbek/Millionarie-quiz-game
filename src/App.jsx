import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "which team won the Champions League in football 2014-2015?",
      answers: [
        {
          text: "Bavariya",
          correct: false,
        },
        {
          text: "Real Madrid",
          correct: false,
        },
        {
          text: "Juventus",
          correct: false,
        },
        {
          text: "Barcelona",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "who was the first to ascend to the moon",
      answers: [
        {
          text: "LeBron James",
          correct: false,
        },
        {
          text: "Robert Downey Jr.",
          correct: false,
        },
        {
          text: "Yuri Gagarin",
          correct: true,
        },
        {
          text: "Oprah Winfrey",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "When and where was Muhammad s.a.v born",
      answers: [
        {
          text: "573 years in Mecca",
          correct: false,
        },
        {
          text: "570 years in Mecca",
          correct: false,
        },
        {
          text: "573 years in Mecca",
          correct: false,
        },
        {
          text: "571 years in Mecca",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "who was the first American president",
      answers: [
        {
          text: "Franklin D. Roosevelt",
          correct: false,
        },
        {
          text: "Zachary Taylor",
          correct: false,
        },
        {
          text: "George Washington",
          correct: true,
        },
        {
          text: "Gerald Ford",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "how many years and on what date the Fergana canal was built",
      answers: [
        {
          text: "1939 years 45 days",
          correct: true,
        },
        {
          text: "1938 years 45 days",
          correct: false,
        },
        {
          text: "1940 years 44 days",
          correct: false,
        },
        {
          text: "1941 years 44 days",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "who was the first millionaire in the world",
      answers: [
        {
          text: "Warren Buffet",
          correct: false,
        },
        {
          text: "Sergey Brin",
          correct: false,
        },
        {
          text: "Michael Bloomberg",
          correct: false,
        },
        {
          text: "Jim Walton",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question:
        "when and how many countries participated in the First World War",
      answers: [
        {
          text: "1914 years Over 34 nations",
          correct: false,
        },
        {
          text: "1914 years Over 30 nations",
          correct: true,
        },
        {
          text: "1913 years Over 30 nations",
          correct: false,
        },
        {
          text: "1913 years Over 34 nations",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question:
        "Which Disney character famously leaves a glass slipper behind at a royal ball?",
      answers: [
        {
          text: "Pocahontas",
          correct: false,
        },
        {
          text: "Sleeping Beauty",
          correct: false,
        },
        {
          text: "Cinderella",
          correct: true,
        },
        {
          text: "Elsa",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?",
      answers: [
        {
          text: "Hangar",
          correct: false,
        },
        {
          text: "Terminal",
          correct: false,
        },
        {
          text: "Concourse",
          correct: false,
        },
        {
          text: "Carousel",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question:
        "The hammer and sickle is one of the most recognisable symbols of which political ideology?",
      answers: [
        {
          text: "Republicanism",
          correct: false,
        },
        {
          text: "Communism",
          correct: true,
        },
        {
          text: "Convertaism",
          correct: false,
        },
        {
          text: "Liberalism",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question:
        "Which toys have been marketed with the phrase “robots in disguise”?",
      answers: [
        {
          text: "Bratz Dools",
          correct: false,
        },
        {
          text: "Sylvanian Families",
          correct: false,
        },
        {
          text: "hatchimals",
          correct: false,
        },
        {
          text: "Transformers",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question:
        "Obstetrics is a branch of medicine particularly concerned with what?",
      answers: [
        {
          text: "Childbirth",
          correct: true,
        },
        {
          text: "Broken bones",
          correct: false,
        },
        {
          text: "Heart conditions",
          correct: false,
        },
        {
          text: "Old age",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
