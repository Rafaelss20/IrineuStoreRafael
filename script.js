var header = document.querySelector("header");
var section = document.querySelector("section");

var requestURL="https://miqueiassousa.github.io/json/irineustore.json"

var request = new XMLHttpRequest();
request.open('Get', requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
    var MeuJson = request.response;
    infoLoja(MeuJson);
    notebook(MeuJson);

}

function infoLoja(jsonObj){
    var myPara = document.createElement("p");
    myPara.textContent = `Seja bem-vindo a ${jsonObj.Loja}`;
    header.appendChild(myPara);
}

function notebook(jsonObj){
    var Notebook = jsonObj["Notebook"];

    for(var i = 0;i< Notebook.length; i++){
        var myArticle = document.createElement("Article");
        var myH2 = document.createElement("h2");
        var myPara1 = document.createElement("p");
        var myPara2 = document.createElement("p");
        var myPara3 = document.createElement("p");
        var myPara4 = document.createElement("p");
        var myList = document.createElement("ul");

        myH2.textContent = Notebook[i].Tipo;
        myPara1.textContent = `Marca: ${Notebook[i].Marca}`;
        myPara2.textContent = `Preço ${Notebook[i].Preço}`;
        myPara3.textContent = `Disponível: ${Notebook[i].Disponível ? 'Disponível' : 'Indisponível'}`
        Notebook[i].Disponível ? false : myPara3.style.color = "red";
        myPara4.textContent = "Cores: ";
        
        for(var j=0; j< Notebook[i].Cores.length; j++){
            //myList.textContent = `<li> ${notebook[i].cores[j]} </li>`;
            let cores = document.createElement("li");
            cores.innerHTML = Notebook[i].Cores[j];
            myList.appendChild(cores);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);

    }

}