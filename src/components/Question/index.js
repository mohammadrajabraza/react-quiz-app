import './index.css';
function Question(props) {
    // merging correct and incorrect answers into one array and soritng them randomly
    let answers = [props.question.correct_answer ,...props.question.incorrect_answers]
    answers = answers.sort(() => Math.random() - 0.5);
    return  <div className="mainContainer">
                <h2 className="titleContainer">{props.question.question}</h2>
                <div className="optionContainer">
                    {/* <input type="radio" id="option1"/><label for="option1">a. Option 1</label> */}
                    {answers.map(ans => <div className="option">{ans}</div>)}
                </div>
            </div>
}

export default Question