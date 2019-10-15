import {combineReducers} from 'redux';
import { QUESTION_ANSWER } from './actions'
import { CHANGE_QUESTION} from './actions'
import { SUBMIT } from './actions'
import { INIT_QUESTIONS} from './actions'



//El estado esta almacenado en una única store,
//para especificar como realizar los cambios en el arbol
//de los estados utilizamos funciones llamadas REDUCERSS!



function score(state = 0, action = {}){
    switch(action.type) {
        case SUBMIT: //tengo que evaluar las preguntas
            var newstate = 0;
            action.payload.questions.map((question) => {
                var correcto = question.answer.toLowerCase();
                if(question.userAnswer!==undefined){
                    var respuesta = question.userAnswer.toLowerCase();
                } else {
                    var respuesta = ""}
                if(correcto === respuesta){
                    return newstate++;
                } else {
                    return;}});
            return newstate;
        default:
            return state;}}
//recorro el array questions y aplico a cada elemento question el sig meétodo
//si userAnswer tiene respuesta se queda con ella si no pone espacio vacio
// compara userAnswer con la respuesta correcta de cada question


function ﬁnished(state = false, action = {}) {
    switch(action.type) {
        case INIT_QUESTIONS:
            var newstate = false;
            return newstate;
        case SUBMIT:
            var newstate = true;
            return newstate;
        default:
            return state;}}

// cambiar el estado de finished :
//cuando hay preguntas el estado de finished es false
//pero cuando se teclea SUBMIT el estado pasaa a ser finished

function currentQuestion(state = 0, action = {}) {
    switch(action.type) {
        case CHANGE_QUESTION:
            var newstate=action.payload.change;
            return newstate;
        default:
            return state;}}


function questions(state = [], action = {}) {
    switch(action.type) {
        case INIT_QUESTIONS:
            var newstate = action.payload.questions;
            return newstate;
        case QUESTION_ANSWER:
            return state.map((question,i) => {
                return { ...question,
                    userAnswer: action.payload.index === i ?
                        action.payload.answer : question.userAnswer}
            });
        default:
            return state; }}

 //en case INIT_QUESTION se actualiza el estado de la pregunta en su posicion indicada

//Con este código lo que conseguimos es que si la acción es del tipo QUESTION_ANSWER, la parte
// del estado donde se almacena el array de preguntas actualizará la pregunta en la posición
// indicada (action.payload.index) para que contenga la respuesta introducida por el usuario
// (action.payload.answer). El resto de preguntas (action.payload.index !== i) se mantienen
// igual.Si no es index i deja la respuesta que estaba del user (question.userANswer)
// si es index i le asigna el valor introducido (action.payload.answer)

const GlobalState = (combineReducers({
    score,
    ﬁnished,
    currentQuestion,
    questions }));
export default GlobalState;



