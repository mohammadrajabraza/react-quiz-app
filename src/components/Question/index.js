import './index.css';
function Question(props) {
    return  <div className="mainContainer">
                <h2 className="titleContainer">{props.question.question}</h2>
                <div className="optionContainer">
                    {/* <input type="radio" id="option1"/><label for="option1">a. Option 1</label> */}
                    {props.question.answers.map((ans, index) => <div 
                        onClick={() => props.markAnswer(index)}
                        className={props.results !== undefined ? (props.results.givenAnswer === index ? 'is-selected option' : 'option') : 'option'} >{ans}</div>)}
                </div>
            </div>
}

export default Question