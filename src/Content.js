import React from 'react';
import Tip from './Tip.js';


export default class Content extends React.Component {     render() {
    if(this.props.question ===undefined){
        return(
            <p>"No hay preguntas"</p>
        );
    } else {
        return (
            //linea16:es un parrafo : 1sin llaves --> te lo coloca tal cual
            //si es con llaves --> es para poner el dato/accion en este caso seria el nº de la pregunta y la pregunta


            <div className={"cuerpo"}>
                <input type="image" src={this.props.question.attachment.url} width="400" heigth="400"/>
                <p> Question {this.props.currentQuestion+1}: {this.props.question.question}</p>
                <input type="text" value={this.props.question.userAnswer || ""} onChange={(e) => {
                    this.props.onQuestionAnswer(e.target.value);
                }}/>

            <div>
            <Tip tip ={this.props.tip}/>
            </div>
                /*SERIA ALGO ASIIII !!!!!!!!!

//En tips : preguntas si la longitud de las pista en una cuestion es cero, el primer parametro antes de cero te dice que no hay tips
//pero el segundo parametro despues de : te dice que si no es igual a cero te haga un MAP
            //la funcion map recorre un array
        );

