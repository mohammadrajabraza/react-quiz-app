import './index.css';
import {SentimentVerySatisfied, 
        SentimentSatisfiedAlt, 
        SentimentVeryDissatisfied} from '@material-ui/icons'

function Result(props) {
    return <div className="quizCompleted">
                    {/* Conditionally rendering Result's icons, message and 
                        total score on the basis on score */}
                    {props.quizScore > 7 ? <SentimentVerySatisfied className="icon amaizing"/> : 
                      (props.quizScore > 4 ? <SentimentSatisfiedAlt className="icon good"/> : 
                        <SentimentVeryDissatisfied className="icon poor"/>)}
                    
                    <h2 className="title">{`You did ${props.quizScore > 7 ? 'an Amaizing' 
                        : (props.quizScore > 4 ? 'a Good': 'a Poor')} Job!`}</h2>
                    <p className="subtitle">Total Score: {props.quizScore}/10</p>
                    <br/>
                    <button className="button" onClick={props.restartQuiz}>Restart</button>
                  </div>
}

export default Result