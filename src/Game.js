import React from 'react';
import Actionbar from "./Actionbar";
import Content from "./Content";
import Button from "./Button";
export default class Game extends React.Component {
    render() {
    if (this.props.ﬁnished===false){
        return (// tienes que ir metiendo las clases creadas en el apartado game de la interfaz
            //para ello tienes que ir metiendole los props(datos) de las clases inferiores ( content/actionbar)
            //en las clases superiores que es Game !
            <div>
                <Content question={this.props.question}
                         currentQuestion={this.props.currentQuestion}
                         onQuestionAnswer={this.props.onQuestionAnswer} />
                <Actionbar currentQuestion={this.props.currentQuestion}
                           onChangeQuestion={this.props.onChangeQuestion}
                           onSubmit={this.props.onSubmit}
                           onReset={this.props.onReset}
                           questions={this.props.questions}
                           lengthQuestions={this.props.lengthQuestions} />
            </div>
        );
    } else {
        return( //
            <center>
                <div>
                    <p class="congrats">ENHORABUENA!!!, HAS CONSEGUIDO ACABAR EL QUIZ!!</p>
                    <p class="score"><strong class="resultado"><u>SCORE</u>:</strong> {this.props.score}</p>
                    <button class="bReset" type="submit" onClick={()=>this.props.onReset()} value="Submit">{this.props.name}
                        Reset
                    </button>
                </div>
            </center>
        );}}}