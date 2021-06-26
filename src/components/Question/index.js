import { useState, useEffect } from 'react';
import './index.css';
function Question(props) {

    const {
        question: {question, incorrect_answers, correct_answer}, 
        markAnswer, 
        results,
        current_index
    } = props
    

    // options for current question
    const [options, setOptions] = useState([])

    useEffect(() => {
        // to prevent multiple insertion of correct answer into incorrect_answer's array
        if(incorrect_answers.length < 4){
          incorrect_answers.push(correct_answer)
        }
        setOptions(shuffle(incorrect_answers))
      }, [current_index])
    return  <div className="mainContainer">
                <h2 className="titleContainer">{question}</h2>
                <div className="optionContainer">
                    {options.map((ans) => <div 
                        // mark the selected answer and store in result
                        onClick={() => markAnswer(ans)}
                        // if the question is answered already then highlight it
                        className={results !== undefined ? (results.givenAnswer === ans ? 'is-selected option' : 'option') : 'option'} >{ans}</div>)}
                </div>
            </div>
}

export default Question




function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}