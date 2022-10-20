// pour affichage
const questionnumber = document.querySelector(".question-number");
const questiontext = document.querySelector(".question-text");
const optioncontainer = document.querySelector(".option-container");
const answersindicatorcontainer = document.querySelector(".answers-indicator");
const home = document.querySelector(".home-box");
const Quiz = document.querySelector(".quiz-box");
const Quiz_result = document.querySelector(".result-box");
const questionlimit = 6; //combien de question on veut
///initialisation des variables
let cpt_question = 0; /// compteur pour les questions 
let question_actuel;
let questions_restant = []; // table de question qu'on a
let lesoptions = []; // table des options qu'on a
let correctanswers = 0; // nombre des réponses juste
let attempt = 0; // nombre de fois qu'on a repondu

// on mets les questions qu'on a dans ques dans questions_restant 
function question_available() {
    const totalquestion = ques.length;

    for (let i = 0; i < totalquestion; i++) {
        questions_restant.push(ques[i])

    }

}
// on mets le nombre de la question , on affiche la question et ces options aléatoirement
function nouv_questions() {
    // on mets le nombre de question auquel on est , n/questionlimit
    questionnumber.innerHTML = "Question " + (cpt_question + 1) + " of " + questionlimit;
    // on recoit une question random et on l'affiche
    const questionIndex = questions_restant[Math.floor(Math.random() * questions_restant.length)]
    question_actuel = questionIndex;
    //afficher la question
    questiontext.innerHTML = question_actuel.q;
    // on recoit la position de la question dans la liste questions_restant
    const index1 = questions_restant.indexOf(questionIndex);
    // on supprime l'index qu'on a reçu de la liste questions_restant pour que la question ne se repète pas 
    questions_restant.splice(index1, 1);

    const optionlen = question_actuel.options.length
        /// on remplit la liste lesoptions avec les options de la question choisis
    for (let i = 0; i < optionlen; i++) {
        lesoptions.push(i)
    }
    //optioncontainer.innerhtml =''; mets ce qu'on avait dans optioncontainer a vide (et donc on mets le quiz box qu'on a vide)
    optioncontainer.innerHTML = '';
    /// variable pour animation(transition).
    let animationdelay = 0.2;
    // on crée les options qu'on a et les afficher
    for (let i = 0; i < optionlen; i++) {
        // on recoit une option random de la liste lesoptions .
        const optionIndex = lesoptions[Math.floor(Math.random() * lesoptions.length)];
        // on affecte l'indice de cette question a index2 (la question qu'on a reçu) qu'on a obtenu de la liste lesoptions
        const index2 = lesoptions.indexOf(optionIndex)
            // aprés avoire sauvegardé l'indice , on la supprime de la liste lesoptions , pour que l'option ne se repète pas .
        lesoptions.splice(index2, 1);
        // on crée des divs pour les afficher
        const option = document.createElement("div");
        option.innerHTML = question_actuel.options[optionIndex];
        option.id = optionIndex;
        //transition des options 
        option.style.animationDelay = animationdelay + 's';

        option.className = "option";
        optioncontainer.appendChild(option)
            // quand on click sur une option nous appelons la fonction rep_result
        option.setAttribute("onclick", "rep_result(this)");
    }

    cpt_question++;
}
/// on vérifie si la réponse choisi est juste ou pas 
function rep_result(element) {
    const id = parseInt(element.id);
    if (id === question_actuel.answer) {
        /// on change la couleur a vert si la réponse est juste (couleur de réponse)
        element.classList.add("correct");
        /// on mets la couleur d'indicateur a rouge si la réponse est juste
        updateanswerindicator("correct");
        correctanswers++;

    } else {
        /// si la réponse n'est pas correcte on change la couleur a rouge
        element.classList.add("wrong");
        /// on mets la couleur d'indicateur a rouge si la réponse est fausse
        updateanswerindicator("wrong");
        const optionlen = optioncontainer.children.length;
        /// si la rép choisi est fausse , on affiche la réponse juste en vert
        for (let i = 0; i < optionlen; i++) {
            if (parseInt(optioncontainer.children[i].id) == question_actuel.answer) {
                optioncontainer.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    non_clickable();
}
// une fois qu'on select une réponse on peut pas reselectionner une autre .(css pointer-events : none;)
function non_clickable() {
    const optionlen = optioncontainer.children.length;
    for (let i = 0; i < optionlen; i++) {
        optioncontainer.children[i].classList.add("already-answered");
    }

}
// on crée les indicateur (pour chaque question on crée un)
function answerIndicator() {
    //answersindicatorcontainer.innerHTML = '';
    const totalquestion = questionlimit;
    for (let i = 0; i < totalquestion; i++) {
        const indicator = document.createElement("div");
        answersindicatorcontainer.appendChild(indicator);

    }

}
// on change la couleur a vert si la rép est vrai , sinon a rouge
function updateanswerindicator(marktype) {

    answersindicatorcontainer.children[cpt_question - 1].classList.add(marktype)

}

// button next , chaque fois qu'on veut une nouvelle question on virifié si on a atteindre le nombre maximum des questions(on arrete le quiz est fini,on affiche résultat) , sinon on charge les questions qui rest .
function next() {
    if (cpt_question === questionlimit) {
        console.log("quiz is over");
        quizover();
    } else {
        nouv_questions();
    }
}
// fin de quiz
function quizover() {
    // on cache Quiz
    Quiz.classList.add("hide");
    // on affiche result box
    Quiz_result.classList.remove("hide");
    quizresult();

}
/// résultats de quiz
function quizresult() {
    Quiz_result.querySelector(".total-question").innerHTML = questionlimit;
    Quiz_result.querySelector(".total-attempt").innerHTML = attempt;
    Quiz_result.querySelector(".total-correct").innerHTML = correctanswers;
    Quiz_result.querySelector(".total-wrong").innerHTML = attempt - correctanswers;
    const percent = (correctanswers / questionlimit) * 100
    Quiz_result.querySelector(".percentage").innerHTML = percent.toFixed(1) + "%";
    Quiz_result.querySelector(".total-score").innerHTML = correctanswers + "/" + questionlimit;
}

// is on veut refaire le quiz , on réintialise les valeurs a 0
function resetquiz() {
    cpt_question = 0;
    correctanswers = 0;
    attempt = 0;
    lesoptions = [];
    answersindicatorcontainer.innerHTML = '';

}

/// nous nous cachons les boxs Quiz_result et afficheon le box Quiz (on affiche le box des questions , options)
function tryagainQ() {
    // on cache result box
    Quiz_result.classList.add("hide");
    // on affiche quiz box
    Quiz.classList.remove("hide");
    resetquiz();
    startquiz();
}
// home 
function gohome() {
    // on cache result box
    Quiz_result.classList.add("hide");
    // on afiche home box
    home.classList.remove("hide");
    resetquiz();

}

// on commence le quiz
function startquiz() {
    /// on cache le home box
    home.classList.add("hide");
    /// on affiche le quiz box
    Quiz.classList.remove("hide");
    question_available();
    nouv_questions();
    answerIndicator();
}


window.onload = function() {
    home.querySelector(".total-question").innerHTML = questionlimit
}