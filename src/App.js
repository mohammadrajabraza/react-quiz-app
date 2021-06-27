import './App.css'
import Question from './components/Question'
import Result from './components/Result'
import { useEffect, useState} from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import swal from 'sweetalert'
import Loader from 'react-loader-spinner'

function App() {

  const [question_bank, setQuestionBank] = useState([])

  // keeps track of current question to be served
  const [current_index, setCurrentIndex] = useState(0)
  
  // stores result of each question
  const [results, setResult] = useState([])
  
  // stores the total score
  const [score, setScore] = useState(0);

  const [quizFinished, setQuizFinished] = useState(false)

  const [isQuestionsLoaded, setIsQuestionLoaded] = useState(false)

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
      .then((res) => res.json())
      .then((data) => {
        setQuestionBank(data.results)
        setIsQuestionLoaded(true)
      })
  }, [])

  const verifyAnswer = (answer) => question_bank[current_index].correct_answer === answer

  // mark the current answer and store the result
  const markAnswer = (ans) => {
    
    let newResult = {
      givenAnswer : ans,
      isRight: verifyAnswer(ans)
    }

    let tempResults = [...results]   
    tempResults[current_index] === undefined ?
      tempResults.push(newResult) :
      tempResults[current_index] = newResult

    setResult(tempResults)
  }

  const nextQuestion = () => {
    // 
    if(results[current_index] === undefined)
      swal({text: 'Answer is required to proceed!', icon:'error'})
    else {
      //?setState function doesn't take effect immediately
      if(current_index === question_bank.length -1){
        setScore(getScore())
      }
      current_index < question_bank.length - 1 ? 
        setCurrentIndex(current_index + 1) :
        setQuizFinished(true)
    }
  }

  const previousQuestion = () => {
    quizFinished ? 
      setQuizFinished(false) : 
      setCurrentIndex(current_index - 1)
  }

  const restartQuiz = () => {
    setCurrentIndex(0);
    setResult([])
    setScore(0)
    setQuizFinished(false)
  }

  const getScore = () => {
    return results.reduce((acc, item) => item.isRight ? acc + 1 : acc , 0)
  }

  return (
    <div className="App">
      <section className="container">
        <div className="questionBox" id="app">
          <div className="questionContainer">
            <header>
              <h1 className="title">React Quiz App</h1>
              <div className="progressContainer">
                <progress className="progress" value={(current_index+1) * question_bank.length} max="100"></progress>
                <p>{`${current_index === question_bank.length ? current_index :  current_index + 1}/${question_bank.length }`}</p>
              </div>
            </header>
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={current_index}
                timeout={500}
                classNames="fade">
                {
                  // Condition checks for the questions count and once questions finished
                  // will display result
                  quizFinished ?
                  <Result restartQuiz={restartQuiz} quizScore={score}/> :
                  (isQuestionsLoaded ? 
                  <Question 
                    // passing current question
                    question={question_bank[current_index]}
                    markAnswer={markAnswer} 
                    results={results[current_index]}
                    current_index={current_index}/>:
                    <Loader className="loader" type="Grid" color="#BBDEFB"  height={100} width={100}/>) 
                }
                
              </CSSTransition>
            </SwitchTransition>
            <footer className="questionFooter">
              <div className="actions">
                <button className="button" onClick={previousQuestion} disabled={current_index === 0}>Prev</button>
                <button className="button" onClick={nextQuestion} disabled={current_index === 10}>Next</button>
              </div>
            </footer>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default App;