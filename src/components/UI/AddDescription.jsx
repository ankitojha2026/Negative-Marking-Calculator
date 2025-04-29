import React from "react";
import { HiArrowNarrowUp } from "react-icons/hi";

const AppDescription = () => {
  return (
    <section
      className="container my-5 p-4 rounded shadow"
      style={{
        backgroundColor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
        color: "#212529",
      }}
    >
      <h1 className="text-center mb-4 fw-bold text-primary">
        💻 SmartCalc Pro – Your Smartest Calculation Partner!
      </h1>

      <p className="fs-5 text-center text-secondary">
        Whether you're a student, business owner, or professional—this tool
        helps you calculate accurately and instantly using real-world formulas.
      </p>

      <div className="row mt-5">
        <div className="col-md-12">
          <h2 className="text-success fw-semibold">
            🛠️ How This Web App Works
          </h2>
          <p className="fs-6">
            SmartCalc Pro is designed to take two or more inputs from the user,
            apply the appropriate mathematical formula, and return accurate
            results instantly. No manual calculations, no confusion!
          </p>
          <p>
            Example Formula Used:{" "}
            <code className="bg-light px-2 py-1 rounded">
              Result = (Input A × Input B) ÷ Constant
            </code>
          </p>

          <h2 className="mt-4 text-success fw-semibold">✨ Best Features</h2>
          <ul className="fs-6">
            <li>
              🔢 <strong>Multiple Calculation Modes</strong> – Choose from
              various real-world scenarios like profit/loss, speed-time,
              percentage, etc.
            </li>
            <li>
              📱 <strong>Fully Responsive</strong> – Works seamlessly on all
              screen sizes: mobile, tablet, or desktop.
            </li>
            <li>
              ⚡ <strong>Instant Results</strong> – No loading or delays; get
              accurate results in real-time.
            </li>
            <li>
              💡 <strong>Beginner Friendly</strong> – Simple UI that even a
              non-technical user can understand and use.
            </li>
            <li>
              📊 <strong>Real-World Utility</strong> – Useful for students,
              shopkeepers, engineers, and daily life applications.
            </li>
            <li>
              🔒 <strong>Data Privacy</strong> – No personal data is saved or
              shared.
            </li>
          </ul>

          <h2 className="mt-4 text-success fw-semibold">
            🎁 What Benefits Will You Get?
          </h2>
          <ul className="fs-6">
            <li>✅ Save Time – Skip manual calculation steps</li>
            <li>✅ Eliminate Errors – Get precise results every time</li>
            <li>
              ✅ Improve Productivity – Use this as a daily utility tool for
              your study or business
            </li>
            <li>✅ Absolutely Free – No subscription, no login required</li>
          </ul>

          <h2 className="mt-4 text-success fw-semibold">
            📝 How to Use:
          </h2>
          <ol className="fs-6">
            <li>Enter the required inputs (numbers only).</li>
            <li>Select the calculation type from the dropdown.</li>
            <li>Click the <strong>"Calculate"</strong> button to get your result.</li>
            <li>Use the <strong>"Reset"</strong> button to clear inputs.</li>
          </ol>

          <div className="text-center mt-5">
              🚀 Try It Now <HiArrowNarrowUp />
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDescription;
