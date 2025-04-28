import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ResultChart = ({ totalQuestions, correctAnswers, wrongQuestions, attemptedQuestions, negativeMarks }) => {
  
  const unattemptedQuestions = totalQuestions - attemptedQuestions;

  console.log(wrongQuestions);

  const data = {
    labels: ["Correct Answers", "Wrong Answers", "Unattempted Questions"],
    datasets: [
      {
        data: [correctAnswers, wrongQuestions, unattemptedQuestions],
        backgroundColor: ["#4CAF50", "#FF5722", "#9E9E9E"], // green, orange, grey
        borderColor: ["#ffffff", "#ffffff", "#ffffff"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-2">
      <div className="card shadow-lg p-4" style={{ maxWidth: "30rem", width: "100%", borderRadius: "1rem", height: "100%" }}>
        <div style={{ width: "300px", margin: "auto" }}>
          <Pie data={data} />
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h4>Summary</h4>
            <p><strong>Total Questions:</strong> {totalQuestions}</p>
            <p><strong>Attempted Questions:</strong> {attemptedQuestions}</p>
            <p><strong>Correct Answers:</strong> {correctAnswers}</p>
            <p><strong>Wrong Answers:</strong> {wrongQuestions}</p>
            <p><strong>Unattempted Questions:</strong> {unattemptedQuestions}</p>
            <p style={{ color: "red" }}><strong>Negative Marks:</strong> {negativeMarks}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultChart;
