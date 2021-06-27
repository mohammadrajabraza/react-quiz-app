import './App.css';
import Question from './components/Question'
import Result from './components/Result';
import { useState} from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import swal from 'sweetalert'

const question_bank = [
                    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Who created the digital distribution platform Steam?","correct_answer":"Valve","incorrect_answers":["Pixeltail Games","Ubisoft","Electronic Arts"]},
                    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":`Who is the main character in "The Stanley Parable"?`,"correct_answer":"Stanley","incorrect_answers":["The Adventure Line","The Narrator","The Boss"]},
                    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":`In the 2002 video game "Kingdom Hearts", how many Keyblades are usable?`,"correct_answer":"18","incorrect_answers":["13","16","15"]},
                    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":`Which of these is NOT the name of a rival gang in the video game Saint's Row 2?`,"correct_answer":"The Zin Empire","incorrect_answers":["The Brotherhood","The Ronin","The Sons of Samedi"]},
                    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Who is the creator of the Super Smash Bros. Series?","correct_answer":"Masahiro Sakurai","incorrect_answers":["Reggie Fils-Aim&eacute;","Bill Trinen","Hideo Kojima"]},
                    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":`TF2: What code does Soldier put into the door keypad in "Meet the Spy"?`,"correct_answer":"1111","incorrect_answers":["1432","1337","No code"]},
                    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":`In the Half-Life series, Gordon Freeman's signature weapon is a:`,"correct_answer":"Crowbar","incorrect_answers":["Sledgehammer","Fiber Wire","Katana"]},
                    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In Minecraft, which two items must be combined to craft a torch?","correct_answer":"Stick and Coal","incorrect_answers":["Stick and Fire","Wood and Coal","Wood and Fire"]},
                    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Lanky, Funky, and Chunky are all characters featured in which series owned by Nintendo?","correct_answer":"Donkey Kong","incorrect_answers":["Mario","Kirby","Zelda"]},
                    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":`In the "Metal Gear Solid" series, what's the name of Solid Snake's brother?`,"correct_answer":"Liquid Snake","incorrect_answers":["Kulus Snake","Billy Snake","Gilur Snake"]}
]

function App() {

  // keeps track of current question to be served
  const [current_index, setCurrentIndex] = useState(0)
  
  // stores result of each question
  const [results, setResult] = useState([])
  
  // stores the total score
  const [score, setScore] = useState(0);

  const [quizFinished, setQuizFinished] = useState(false)


  const verifyAnswer = (answer) => {
    
    return question_bank[current_index].correct_answer === answer
              
  }

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

    if(quizFinished)  
    {
      setQuizFinished(false)
    } 
    else 
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
                  <Question 
                    // passing current question
                    question={question_bank[current_index]}
                    // 
                    markAnswer={markAnswer} 
                    results={results[current_index]}
                    current_index={current_index}/> 
                }
                
              </CSSTransition>
            </SwitchTransition>
            <footer className="questionFooter">
              <div className="actions">
                <button className="button" onClick={previousQuestion} disabled={current_index === 0}>Previous</button>
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