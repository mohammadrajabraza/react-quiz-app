import './App.css';
import Question from './components/Question'
import {useState} from 'react'

function App() {


    const question_bank = [ 
                       {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Who created the digital distribution platform Steam?","correct_answer":"Valve","incorrect_answers":["Pixeltail Games","Ubisoft","Electronic Arts"]},
                       {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Who is the main character in &quot;The Stanley Parable&quot;?","correct_answer":"Stanley","incorrect_answers":["The Adventure Line","The Narrator","The Boss"]},
                       {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In the 2002 video game &quot;Kingdom Hearts&quot;, how many Keyblades are usable?","correct_answer":"18","incorrect_answers":["13","16","15"]},
                       {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Which of these is NOT the name of a rival gang in the video game Saint&#039;s Row 2?","correct_answer":"The Zin Empire","incorrect_answers":["The Brotherhood","The Ronin","The Sons of Samedi"]},
                       {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Who is the creator of the Super Smash Bros. Series?","correct_answer":"Masahiro Sakurai","incorrect_answers":["Reggie Fils-Aim&eacute;","Bill Trinen","Hideo Kojima"]},
                       {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"TF2: What code does Soldier put into the door keypad in &quot;Meet the Spy&quot;?","correct_answer":"1111","incorrect_answers":["1432","1337","No code"]},
                       {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In the Half-Life series, Gordon Freeman&#039;s signature weapon is a:","correct_answer":"Crowbar","incorrect_answers":["Sledgehammer","Fiber Wire","Katana"]},
                       {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In Minecraft, which two items must be combined to craft a torch?","correct_answer":"Stick and Coal","incorrect_answers":["Stick and Fire","Wood and Coal","Wood and Fire"]},
                       {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Lanky, Funky, and Chunky are all characters featured in which series owned by Nintendo?","correct_answer":"Donkey Kong","incorrect_answers":["Mario","Kirby","Zelda"]},
                       {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In the &quot;Metal Gear Solid&quot; series, what&#039;s the name of Solid Snake&#039;s brother?","correct_answer":"Liquid Snake","incorrect_answers":["Kulus Snake","Billy Snake","Gilur Snake"]}
                      ]
    const [result, setResult] = useState({current_index: 0, right_answers: 0})
  return (
    <div className="App">
      <section className="container">
        <div className="questionBox" id="app">
          <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" mode="out-in">
            <div className="questionContainer">
              <header>
                <h1 className="title is-6">Quiz App</h1>
                <div className="progressContainer">
                  <progress className="progress is-info is-small"></progress>
                  <p></p>
                </div>
              </header>
              <Question question={question_bank[result.current_index]}/>
              <footer className="questionFooter">
                <nav className="pagination">
                  <button className="button">Back</button>
                  <button className="button">Next</button>
                </nav>
              </footer>
            </div>
            {/* <div className="quizCompleted has-text-centered">
              <h2 className="title">You did an amaizing Job!</h2>
              <p className="subtitle">Total Score: 8/10</p>
              <br/>
              <button className="button">Restart</button>
            </div> */}
          </transition>
        </div>
      </section>
    </div>
  );
}

export default App;
