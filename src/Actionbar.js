
import React from 'react';
import Button from "./Button";
export default class Actionbar extends React.Component {     render() {
    return (
        //yo tengo que pasarle al boton donde estoy y la longitud de mis preguntas
        <div>
            <center>
                <Button lengthQuestions={this.props.lengthQuestions}
                        currentQuestion={this.props.currentQuestion}
                        onChangeQuestion={this.props.onChangeQuestion}
                        onSubmit={this.props.onSubmit}
                        questions={this.props.questions}
                        name="Submit"/>
                <Button lengthQuestions={this.props.lengthQuestions}
                        currentQuestion={this.props.currentQuestion}
                        onChangeQuestion={this.props.onChangeQuestion}
                        onSubmit={this.props.onSubmit}
                        questions={this.props.questions}
                        name="Previous"/>
                <Button lengthQuestions={this.props.lengthQuestions}
                        currentQuestion={this.props.currentQuestion}
                        onChangeQuestion={this.props.onChangeQuestion}
                        onSubmit={this.props.onSubmit}
                        questions={this.props.questions}
                        name="Next"/>
            </center>
            <Button name="Reset" onReset={this.props.onReset}/>
        </div>
    );}}