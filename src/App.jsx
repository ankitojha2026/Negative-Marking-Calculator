import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './pages/Home'
import { useState } from 'react'
import ResultChart from './components/Layout/ResultChart';
import Footer from './components/UI/Footer';

function App() {
  
  const [chartDatas,setChartData]=useState("");


  const x = (chartData) =>
  {
    console.log(chartData);
    setChartData(chartData);
    console.log(chartDatas.totalQuestions)
  }

  return <>
  < Home x={(chartData)=> x(chartData)}/>

  {chartDatas && (
        <ResultChart
          totalQuestions={chartDatas.totalQuestions}
          attemptedQuestions={chartDatas.attemptedQuestions}
          correctAnswers={chartDatas.correctAnswers}
          wrongQuestions={chartDatas.wrongQuestions}
          negativeMarks={chartDatas.negativeMarks}
        />
      )} 


    <Footer/> 

  </>

}

export default App;
