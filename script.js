const quiz=[
{q:"Qual è la serie che ci ha fatto innamorare della Scozia?",a:["Outlander","Harry Potter","The Crown","Lost"],c:0},
{q:"In quale Paese abbiamo festeggiato i nostri 10 anni?",a:["Irlanda","Scozia","Norvegia","Francia"],c:1},
{q:"Cosa ci piace fare insieme?",a:["Viaggiare","Dormire tutto il giorno","Collezionare francobolli","Golf"],c:0},
{q:"Secondo te il viaggio è davvero finito?",a:["Sì","No"],c:1}
];
let i=0;
const q=document.getElementById("q"),a=document.getElementById("answers"),p=document.getElementById("progress");
document.getElementById("start").onclick=()=>{document.getElementById("start").style.display="none";document.getElementById("quiz").classList.remove("hidden");show();}
function show(){
if(i>=quiz.length){document.getElementById("quiz").classList.add("hidden");document.getElementById("reveal").classList.remove("hidden");return;}
q.textContent=quiz[i].q;
p.textContent=`Domanda ${i+1} di ${quiz.length}`;
a.innerHTML="";
quiz[i].a.forEach((t,idx)=>{
let b=document.createElement("button");
b.className="ans";
b.textContent=t;
b.onclick = () => {

    // Disabilita tutti i pulsanti mentre mostra il risultato
    document.querySelectorAll(".ans").forEach(btn => btn.disabled = true);

    if (idx === quiz[i].c) {

        // Risposta corretta
        b.style.background = "#2e8b57";
        b.style.color = "white";

        setTimeout(() => {
            i++;
            show();
        }, 900);

    } else {

        // Risposta sbagliata
        b.style.background = "#c62828";
        b.style.color = "white";

        setTimeout(() => {
            alert("Peccato! Dovrai ricominciare dall'inizio...");
            i = 0;
            show();
        }, 900);

    }
};
a.appendChild(b);
});
}
