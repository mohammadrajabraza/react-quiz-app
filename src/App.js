import './App.css';
import Question from './components/Question'
import { useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

const question_bank = [
  {  "question": "Who created the digital distribution platform Steam?", "correct_answer": "Valve", "answers": ["Valve", "Pixeltail Games", "Ubisoft", "Electronic Arts"] },
  {  "question": `Who is the main character in "The Stanley Parable"?`, "correct_answer": "Stanley", "answers": ["The Adventure Line","Stanley", "The Narrator", "The Boss"] },
  {  "question": `In the 2002 video game "Kingdom Hearts", how many Keyblades are usable?`, "correct_answer": "18", "answers": ["13", "16", "18", "15"] },
  {  "question": `Which of these is NOT the name of a rival gang in the video game Saint's Row 2?`, "correct_answer": "The Zin Empire", "answers": ["The Zin Empire", "The Brotherhood", "The Ronin", "The Sons of Samedi"] },
  {  "question": "Who is the creator of the Super Smash Bros. Series?", "correct_answer": "Masahiro Sakurai", "answers": ["Reggie Fils-Aim", "Bill Trinen", "Hideo Kojima", "Masahiro Sakurai"] },
  {  "question": `TF2: What code does Soldier put into the door keypad in "Meet the Spy"?`, "correct_answer": "1111", "answers": ["1432", "1111", "1337", "No code"] },
  {  "question": `In the Half-Life series, Gordon Freeman's signature weapon is a:`, "correct_answer": "Crowbar", "answers": ["Crowbar", "Sledgehammer", "Fiber Wire", "Katana"] },
  {  "question": "In Minecraft, which two items must be combined to craft a torch?", "correct_answer": "Stick and Coal", "answers": ["Stick and Fire", "Stick and Coal", "Wood and Coal", "Wood and Fire"] },
  {  "question": "Lanky, Funky, and Chunky are all characters featured in which series owned by Nintendo?", "correct_answer": "Donkey Kong", "answers": ["Mario", "Kirby", "Donkey Kong", "Zelda"] },
  {  "question": `In the "Metal Gear Solid" series, what's the name of Solid Snake's brother?`, "correct_answer": "Liquid Snake", "answers": ["Kulus Snake", "Liquid Snake", "Billy Snake", "Gilur Snake"] }
]

function App() {

  const [current_index, setCurrentIndex] = useState(0)
  const [results, setResult] = useState([])

  const verifyAnswer = (answer) => question_bank[current_index].answers[answer] === 
                                                    question_bank[current_index].correct_answer

  const markAnswer = (index) => {
    
    let newResult = {
      givenAnswer : index,
      isRight: verifyAnswer(index)
    }

    let tempResults = [...results]
    
    tempResults[current_index] === undefined ?
      tempResults.push(newResult) :
      tempResults[current_index] = newResult

    setResult(tempResults)
  }
  
  const next = () => {
    current_index < 10 ?
      setCurrentIndex(current_index + 1) :
      alert('Bhaag lo')
  }

  const back = () => {
    current_index <= 0 ?
      alert('Nikal lo') :
      setCurrentIndex(current_index - 1)
  }

  return (
    <div className="App">
      <section className="container">
        <div className="questionBox" id="app">
          <div className="questionContainer">
            <header>
              <h1 className="title is-6">Quiz App</h1>
              <div className="progressContainer">
                <progress className="progress is-info is-small"></progress>
                <p></p>
              </div>
            </header>
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={current_index}
                timeout={500}
                classNames="fade">
                {
                  current_index <= 9 ?
                  <Question question={question_bank[current_index]} markAnswer={markAnswer} results={results[current_index]}/> :
                  <div className="quizCompleted has-text-centered">
                    <h2 className="title">You did an amaizing Job!</h2>
                    <p className="subtitle">Total Score: 8/10</p>
                    <br/>
                    <button className="button">Restart</button>
                  </div>
                }
                
                
                

              </CSSTransition>
            </SwitchTransition>
            <footer className="questionFooter">
              <div className="actions">
                <button className="button" onClick={back}>Back</button>
                <button className="button" onClick={next}>Next</button>
              </div>
            </footer>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default App;
