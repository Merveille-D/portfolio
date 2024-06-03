/*var div1=document.getElementById('div1');
var ul1=document.createElement('ul'),li1;
var tab=['un','deux','trois'];
for (var i = 0; i < tab.length; i++) {
     li1=document.createElement('li');
    li1.innerText=tab[i];
    ul1.appendChild(li1);
}*/
//document.body.appendChild(ul1);

/*var bouton=document.getElementById('but');
function  showPopupinfo (){
    alert('je suis un info')
};


  bouton.addEventListener('click',function() {
    var checker=document.getElementsByTagName("input");
var long=checker.length,i=0;
while (i<long) {
    if (checker[i].type=='radio' && checker[i].checked) {
        alert("vous avez chaked"+ checker[i].nextSibling.data);
    }
    i++;
}
  });*/

  
  var form=document.querySelector('form');
  form.addEventListener('submit',function(event) {
    event.preventDefault();
    var nome=document.getElementById('nom');
    var nomvaleur=nome.value;
  if (nomvaleur.trim() === "") {
    console.log("texte vide");
} else {
    console.log("text non vide");
}
  })
  try {
    let maVariable = document.getElementById("idInexistant")
    maVariable.createElement("div")
    // suite du traitement
} catch {
    console.log("Il y a eu une erreur dans le bloc try");
}
