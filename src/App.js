import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from "./Game";
import { questionAnswer } from './redux/actions';
import { changeQuestion } from './redux/actions';
import { submit } from './redux/actions';
import { initQuestions } from './redux/actions';
import Navbar from "./Navbar";

//AQUI HAY QUE METER LA FUNCION !!




//class App extends Component {
 //   constructor(props){
 //       super(props);
 //    this.downloadQuestions = this.downloadQuestions.bind(this)
 //  }
 //downloadQuestions(){ // despues de pintar la interfaz con el render, utilizamos el fecth(mejor con el componentdidmount)
 //    //para preguntar al servidor y que te mande datos sore un json( donde le metes un url en este caso de preguntas para que que te
 //    //aparezca en la aplicacion ) y tiene dos promesas .RESUMEN:estamos recuperando un archivo JSON a través de red e impriminedola en la consola.
 //    fetch("https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=dbd0468cf07f1db28792")
 //        .then(function(response){
 //            return response.json();
 //        })
 //        .then(questionsDownloaded => {
 //            this.props.dispatch(initQuestions(questionsDownloaded));
 //            console.log("Ver si cambian preguntas");
 //            console.log(questionsDownloaded);
 //        });
 //}
 //componentDidMount(){ //Lo llamo desde aqui para que solo se ejecute una vez
 //    this.downloadQuestions();
 //    setTimeout(()=> this.props.dispatch(submit(this.props.questions)),600000);
 //    setTimeout(()=> alert("Queda un minuto"),540000);}     render() {
 //    console.log(this.props.ﬁnished)
        
            //Los props son la manera que un componente superior manda información a componentes inferiores.
  //(fíjate que es sólo props y no this.props, puesto que App ha sido
  //definido como componente funcional y no como clase)    function App(props) {

//metemos a la funcion de app props para poder renderizar game
//y tb importamos a App todas las clases creadas porque es el
//elemento padre del quiz


//El componente Game debe renderizar la pregunta que está seleccionada. En nuestro estado,
//por defecto es la primera pregunta. Para poder tener acceso a ella desde Game, es necesario
//pasársela como prop.

       function App(props){
            return (
                <div className="App">

                
                <Game currentQuestion={props.currentQuestion}
                      lengthQuestions={props.questions.length}
                      ﬁnished={props.ﬁnished}
                      score={props.score}
                      questions={props.questions}
                      question={props.questions[props.currentQuestion]}
                     //set={()=>{
                     //this.componentDidMount()
                     //
                      //Despacha una acción. Esta es la única forma de realizar un cambio de estado
                      onChangeQuestion={(change)=>{
                          props.dispatch(changeQuestion(change))
                      }}
                      onSubmit={()=>{
                          props.dispatch(submit(props.questions))
                      }}
                      onQuestionAnswer={(answer)=>{
                          props.dispatch(questionAnswer(props.currentQuestion, answer))
                      }}
                />


            </div>
            );
        }

// método dispatch que provee Redux conseguimos lanzar la acción,
// sin olvidar pasarle como parámetros el índice de la pregunta y la respuesta
// que obtendremos de Game.



function mapStateToProps(state){
    return{
        ...state
    };}

export default connect(mapStateToProps)(App);
//mapStateToProps se usa para seleccionar la parte de los
// datos del almacén  que necesita el componente conectado


