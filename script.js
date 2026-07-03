const quiz = [

{
    q:"Qual è la serie che ci ha fatto innamorare della Scozia?",
    a:[
        "Outlander",
        "Harry Potter",
        "The Crown",
        "Lost"
    ],
    c:0
},
{
    q:"Come si chiamava il luogo dove ci siamo baciati oggi 10 anni fa?",
    a:[
        "Lido Aurora",
        "Lido Nettuno",
        "Lido Miramare",
        "Lido Azzurro"
    ],
    c:0
},

{
    q:"Cosa ci piace fare insieme?",
    a:[
        "Viaggiare",
        "Dormire tutto il giorno",
        "Collezionare francobolli",
        "Golf"
    ],
    c:0
},

{
    q:"Secondo te il viaggio in Outlander finirà dopo questa vacanza?",
    a:[
        "Sì",
        "No"
    ],
    c:1
}

];

let currentQuestion = 0;

const intro = document.getElementById("intro");
const quizScreen = document.getElementById("quiz");
const failureScreen = document.getElementById("failure");
const revealScreen = document.getElementById("reveal");

const question = document.getElementById("q");
const answers = document.getElementById("answers");
const progress = document.getElementById("progress");

document.getElementById("start").addEventListener("click", ()=>{

    intro.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    showQuestion();

});

function showQuestion(){

    const current = quiz[currentQuestion];

    progress.innerHTML =
    `Domanda ${currentQuestion+1} di ${quiz.length}`;

    question.innerHTML = current.q;

    answers.innerHTML = "";

    current.a.forEach((text,index)=>{

        const button = document.createElement("button");

        button.className = "ans";

        button.innerHTML = text;

        button.addEventListener("click",()=>{

            document
            .querySelectorAll(".ans")
            .forEach(btn=>btn.disabled=true);

            if(index===current.c){

                button.style.background="#2e8b57";

                button.style.borderColor="#69d28d";

                button.style.transform="scale(1.03)";

                setTimeout(()=>{

                    currentQuestion++;

                    if(currentQuestion>=quiz.length){

                        quizScreen.classList.add("hidden");

                        revealScreen.classList.remove("hidden");

                    }

                    else{

                        showQuestion();

                    }

                },900);

            }

            else{

                button.style.background="#a71d2a";

                button.style.borderColor="#ff6b6b";

                button.animate([
                    {transform:"translateX(0px)"},
                    {transform:"translateX(-8px)"},
                    {transform:"translateX(8px)"},
                    {transform:"translateX(-8px)"},
                    {transform:"translateX(8px)"},
                    {transform:"translateX(0px)"}
                ],{
                    duration:450
                });

                setTimeout(()=>{

                    quizScreen.classList.add("hidden");

                    failureScreen.classList.remove("hidden");

                },900);

                setTimeout(()=>{

                    failureScreen.classList.add("hidden");

                    quizScreen.classList.remove("hidden");

                    currentQuestion=0;

                    showQuestion();

                },3200);

            }

        });

        answers.appendChild(button);

    });

}

document.getElementById("giftButton").addEventListener("click",()=>{

    window.location.href="regalo.pdf";

});
