import './App.css';

function App() {
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
              <h2 className="titleContainer">The href</h2>
              <div className="optionContainer">
                <div className="option">a. Option 1</div>
                <div className="option">b. Option 2</div>
                <div className="option">c. Option 3</div>
                <div className="option">d. Option 4</div>
              </div>
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
