import './App.css';
import Question from './components/Question'
import { useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

function App() {


  const question_bank = [
    { "category": "Entertainment: Video Games", "type": "multiple", "difficulty": "easy", "question": "Who created the digital distribution platform Steam?", "correct_answer": "Valve", "incorrect_answers": ["Pixeltail Games", "Ubisoft", "Electronic Arts"] },
    { "category": "Entertainment: Video Games", "type": "multiple", "difficulty": "easy", "question": `Who is the main character in "The Stanley Parable"?`, "correct_answer": "Stanley", "incorrect_answers": ["The Adventure Line", "The Narrator", "The Boss"] },
    { "category": "Entertainment: Video Games", "type": "multiple", "difficulty": "easy", "question": `In the 2002 video game "Kingdom Hearts", how many Keyblades are usable?`, "correct_answer": "18", "incorrect_answers": ["13", "16", "15"] },
    { "category": "Entertainment: Video Games", "type": "multiple", "difficulty": "easy", "question": `Which of these is NOT the name of a rival gang in the video game Saint's Row 2?`, "correct_answer": "The Zin Empire", "incorrect_answers": ["The Brotherhood", "The Ronin", "The Sons of Samedi"] },
    { "category": "Entertainment: Video Games", "type": "multiple", "difficulty": "easy", "question": "Who is the creator of the Super Smash Bros. Series?", "correct_answer": "Masahiro Sakurai", "incorrect_answers": ["Reggie Fils-Aim&eacute;", "Bill Trinen", "Hideo Kojima"] },
    { "category": "Entertainment: Video Games", "type": "multiple", "difficulty": "easy", "question": `TF2: What code does Soldier put into the door keypad in "Meet the Spy"?`, "correct_answer": "1111", "incorrect_answers": ["1432", "1337", "No code"] },
    { "category": "Entertainment: Video Games", "type": "multiple", "difficulty": "easy", "question": `In the Half-Life series, Gordon Freeman's signature weapon is a:`, "correct_answer": "Crowbar", "incorrect_answers": ["Sledgehammer", "Fiber Wire", "Katana"] },
    { "category": "Entertainment: Video Games", "type": "multiple", "difficulty": "easy", "question": "In Minecraft, which two items must be combined to craft a torch?", "correct_answer": "Stick and Coal", "incorrect_answers": ["Stick and Fire", "Wood and Coal", "Wood and Fire"] },
    { "category": "Entertainment: Video Games", "type": "multiple", "difficulty": "easy", "question": "Lanky, Funky, and Chunky are all characters featured in which series owned by Nintendo?", "correct_answer": "Donkey Kong", "incorrect_answers": ["Mario", "Kirby", "Zelda"] },
    { "category": "Entertainment: Video Games", "type": "multiple", "difficulty": "easy", "question": `In the "Metal Gear Solid" series, what's the name of Solid Snake's brother?`, "correct_answer": "Liquid Snake", "incorrect_answers": ["Kulus Snake", "Billy Snake", "Gilur Snake"] }
  ].sort(() => Math.random() - 0.5)
  
  const [current_index, setCurrentIndex] = useState(0)
  const [result, setResult] = useState(0)

  const next = () => {
    (current_index + 1) < question_bank.length ?
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
                // addEndListener={(node, done) => {
                //   node.addEventListener("transitionend", done, false);
                // }}
                classNames="fade">
                <Question question={question_bank[current_index]} />

              </CSSTransition>
            </SwitchTransition>
            <footer className="questionFooter">
              <div className="actions">
                <button className="button" onClick={back}>Back</button>
                <button className="button" onClick={next}>Next</button>
              </div>
            </footer>
          </div>
          {/* <div className="quizCompleted has-text-centered">
                <h2 className="title">You did an amaizing Job!</h2>
                <p className="subtitle">Total Score: 8/10</p>
                <br/>
                <button className="button">Restart</button>
              </div> */}
        </div>
      </section>
    </div>
  );
}

export default App;
