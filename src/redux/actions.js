export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';

//ACCIONES QUE PERMITEN MODIFICAR EL ESTADO

export function questionAnswer(index, answer){
    return { type: QUESTION_ANSWER, payload: { index, answer}};
}
export function changeQuestion(change){
    return{type: CHANGE_QUESTION, payload: {change}};
}
export function submit(questions){
    return{type: SUBMIT, payload: {questions}};
}
export function initQuestions(questions) {
    return {type: INIT_QUESTIONS, payload: {questions}};
}


//En el fichero redux/actions creamos dicha acción QUESTION-ANSWER DEL TIPO QUESTION_ANSWER incluyendo como argumentos el índice de
// la pregunta en la que se encuentra el usuario (index) y la respuesta introducida (answer)-->  QUESTION ANSWER!

// CHANGE_QUESTION : changeQuestion(index). Cambia la pregunta que se muestra
// ● SUBMIT: submit(questions). Finaliza el juego y evalúa las respuestas comparando
// userAnswer con answer y mostrando la puntuación obtenida. También este cambia
// finished a true.
// ● INIT_QUESTIONS: initQuestions(questions). Sobreescribe las preguntas del estado por
// las que se indica en el argumento questions. Esta acción se utilizará al pedir las
// preguntas del servidor



//las acciones son objetos javaScript que indica una intencion de realizar algo y que lleva datosy tipos (type y payload ) si es necesario
// el payload es todoloque te bajas y que necesitas en la entrada