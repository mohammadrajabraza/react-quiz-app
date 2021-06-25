import './index.css';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied'
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'

function Result(props) {
    return <div className="quizCompleted">
                    {props.quizScore > 7 ? <SentimentVerySatisfiedIcon className="icon amaizing"/> : 
                      (props.quizScore > 4 ? <SentimentSatisfiedAltIcon className="icon good"/> : 
                        <SentimentVeryDissatisfiedIcon className="icon poor"/>)}
                    <h2 className="title">{`You did ${props.quizScore > 7 ? 'an Amaizing' : (props.quizScore > 4 ? 'a Good': 'a Poor')} Job!`}</h2>
                    <p className="subtitle">Total Score: {props.quizScore}/10</p>
                    <br/>
                    <button className="button" onClick={props.restartQuiz}>Restart</button>
                  </div>
}

export default Result