import React from "react";
import quizCompleteImage from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswres = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswres.length / userAnswers.length) * 100
  );

  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteImage} alt="Quiz is finished" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span>{skippedAnswersShare}%</span>
          <span>Skipped</span>
        </p>

        <p>
          <span>{correctAnswersShare}%</span>
          <span>Answered correctly</span>
        </p>

        <p>
          <span>{wrongAnswersShare}%</span>
          <span>Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;
