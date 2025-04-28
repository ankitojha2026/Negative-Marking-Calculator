import { useState } from "react";

const Home = ({x}) => {
  const [result, setResult] = useState("");
  const [chartData, setChartData] = useState(null); 
   // New State for Chart

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formdetails = Object.fromEntries(formData.entries());

    const totalQuestions = parseInt(formdetails.totalQuestions);
    const maximumMarks = parseInt(formdetails.maximumMarks);
    const attemptedQuestions = parseInt(formdetails.attemptedQuestions);
    const wrongQuestions = parseInt(formdetails.wrongQuestions);
    const markingType = formdetails.markingType;

    let negativeMarksPerWrong = 0;
    if (markingType === "1/1") negativeMarksPerWrong = 1;
    if (markingType === "1/2") negativeMarksPerWrong = 0.5;
    if (markingType === "1/3") negativeMarksPerWrong = 0.33;
    if (markingType === "1/4") negativeMarksPerWrong = 0.25;

    const correctAnswers = attemptedQuestions - wrongQuestions;
    const negativeMarks = wrongQuestions * negativeMarksPerWrong;
    const finalScore = (correctAnswers * maximumMarks) / totalQuestions - negativeMarks;

    setResult(finalScore.toFixed(2));

    // Set the chart data
    const newChartData = {
      totalQuestions,
      attemptedQuestions,
      correctAnswers,
      wrongQuestions,
      negativeMarks,
    };
  
    setChartData(newChartData);

  // ✅ Call x here with updated data
  x(newChartData);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-2">
        <div className="card shadow-lg p-4" style={{ maxWidth: "30rem", width: "100%", borderRadius: "1rem", height:"100%" }}>
          <h4 className="text-center mb-2" style={{ fontWeight: "700", color: "#007BFF" }}>
            🎯 Negative Marking Calculator
          </h4>
          <p className="text-center text-muted" style={{ fontSize: "10px" }}>
            UPSC | NEET | JEE | UPPSC | BPSC
          </p>
          <form onSubmit={handleSubmit} className="mt-2">
            {/* Result Field */}
            <div className="mb-2">
              <input
                type="text"
                value={result}
                readOnly
                className="form-control form-control-lg text-center border-success"
                placeholder="Result will appear here"
                style={{ fontSize: "1.5rem", fontWeight: "bold", borderRadius: "0.75rem" }}
              />
            </div>

            {/* Input Fields */}
            <div className="mb-2">
              <label className="form-label fw-bold">Total Questions</label>
              <input
                type="number"
                className="form-control form-control-sl"
                name="totalQuestions"
                placeholder="Enter total number of questions"
                required
              />
            </div>

            <div className="mb-2">
              <label className="form-label fw-bold">Maximum Marks</label>
              <input
                type="number"
                className="form-control form-control-sl"
                name="maximumMarks"
                placeholder="Enter maximum marks"
                required
              />
            </div>

            <div className="mb-2">
              <label className="form-label fw-bold">Attempted Questions</label>
              <input
                type="number"
                className="form-control form-control-sl"
                name="attemptedQuestions"
                placeholder="Enter attempted questions"
                required
              />
            </div>

            <div className="mb-2">
              <label className="form-label fw-bold">Wrong Questions</label>
              <input
                type="number"
                className="form-control form-control-sl"
                name="wrongQuestions"
                placeholder="Enter number of wrong questions"
                required
              />
            </div>

            {/* Select Dropdown */}
            <div className="mb-3">
              <label className="form-label fw-bold">Negative Marking Pattern</label>
              <select className="form-select form-select-sl" name="markingType" required>
                <option value="">Select marking scheme</option>
                <option value="1/1">1 Mark Deducted for 1 Wrong</option>
                <option value="1/2">½ Mark Deducted for 1 Wrong</option>
                <option value="1/3">⅓ Mark Deducted for 1 Wrong</option>
                <option value="1/4">¼ Mark Deducted for 1 Wrong</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-3">
              <button type="submit"
              
            
              className="btn btn-primary btn-sl w-100" style={{ borderRadius: "0.75rem" }}>
                Calculate
              </button>
              <button
                type="reset"
                className="btn btn-outline-danger btn-sl w-100"
                onClick={() => {
                  setResult("");
                  setChartData(null);
                  x("")
                }}
                style={{ borderRadius: "0.75rem" }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      
      


    </>
  );
};

export default Home;
