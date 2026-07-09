const quiz = [

{
    question:"Qual è la serie che ci ha fatto innamorare della Scozia?",

    answers:[

        {
            text:"Outlander",
            image:"img/outlander.jpg",
            correct:true
        },

        {
            text:"Harry Potter",
            image:"img/hp.jpg",
            correct:false
        },

        {
            text:"The Crown",
            image:"img/crown.jpg",
            correct:false
        },

        {
            text:"Lost",
            image:"img/lost.jpg",
            correct:false
        }

    ]

},

{

    question:"Come si chiamava il luogo dove ci siamo baciati oggi 10 anni fa?",

    answers:[

        {
            text:"Lido Aurora",
            image:"img/aurora.jpg",
            correct:true
        },

        {
            text:"Lido Nettuno",
            image:"img/nettuno.jpg",
            correct:false
        },

        {
            text:"Lido Miramare",
            image:"img/miramare.jpg",
            correct:false
        },

        {
            text:"Lido Azzurro",
            image:"img/azzurro.jpg",
            correct:false
        }

    ]

},

{

    question:"Cosa ci piace fare insieme?",

    answers:[

        {
            text:"Viaggiare",
            image:"img/viaggio.jpg",
            correct:true
        },

        {
            text:"Dormire tutto il giorno",
            image:"img/dormire.jpg",
            correct:false
        },

        {
            text:"Collezionare francobolli",
            image:"img/francobolli.jpg",
            correct:false
        },

        {
            text:"Golf",
            image:"img/golf.jpg",
            correct:false
        }

    ]

},

{

    question:"Secondo te il viaggio in Outlander finirà dopo questa vacanza?",

    answers:[

        {
            text:"Sì",
            image:"img/si.jpg",
            correct:false
        },

        {
            text:"No",
            image:"img/no.jpg",
            correct:true
        }

    ]

}

];

let currentQuestion = 0;

const intro = document.getElementById("intro");
const quizScreen = document.getElementById("quiz");
const failureScreen = document.getElementById("failure");
const revealScreen = document.getElementById("reveal");

const question = document.getElementById("question");
const progress = document.getElementById("progress");
const answers = document.getElementById("answers");

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

}

document.getElementById("start").onclick=()=>{

    intro.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    showQuestion();

};

function showQuestion(){

    progress.innerHTML=`Domanda ${currentQuestion+1} di ${quiz.length}`;

    question.innerHTML=quiz[currentQuestion].question;

    answers.innerHTML="";

    const currentAnswers=[...quiz[currentQuestion].answers];

    shuffle(currentAnswers);

    currentAnswers.forEach(answer=>{

        const card=document.createElement("div");

        card.className="answerCard";

        card.innerHTML=`

            <img src="${answer.image}">

            <div class="answerTitle">

                ${answer.text}

            </div>

        `;

        card.onclick=()=>{

            document.querySelectorAll(".answerCard")
            .forEach(c=>c.style.pointerEvents="none");

            if(answer.correct){

                card.classList.add("correct");

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

                card.classList.add("wrong");

                card.classList.add("shake");

                setTimeout(()=>{

                    quizScreen.classList.add("hidden");

                    failureScreen.classList.remove("hidden");

                },900);

                setTimeout(()=>{

                    currentQuestion=0;

                    failureScreen.classList.add("hidden");

                    quizScreen.classList.remove("hidden");

                    showQuestion();

                },3200);

            }

        };

        answers.appendChild(card);

    });

}

document.getElementById("giftButton").onclick=()=>{

    window.location.href="regalo.pdf";

};
