import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todo from './Todo';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Todo/>
  </React.StrictMode>,
  document.getElementById('root')

);

//actu();


let ajout = document.getElementById('ajouter');
console.log(ajout);


ajout.addEventListener('click', function(e){
  
  var inputValue = document.getElementById('taskInput').value;
  var inputDate = document.getElementById('dateFin').value;

  if(inputValue === '' || inputDate === '')
  {
    alert("C'est bien trop vide...")
  }

  else{
    var li = document.createElement("li");
    li.id = 'tache';

    var t = document.createElement("label");
    t.id = 'intitule'

    var d = document.createElement("label");
    d.id = 'date'

    li.appendChild(t);
    t.innerText = inputValue;
    d.innerText = inputDate;
    li.appendChild(d);
    document.getElementById('list').appendChild(li);
    document.getElementById('taskInput').value = "";
    document.getElementById("dateFin").value = ""; 

    var span = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    //actu();
  }
  
});

/*function actu()
{
  var i;
  var myNodeList = document.getElementsByTagName("li");
  console.log(myNodeList)
  
  for (i = 0; i < myNodeList.length; i++)
  {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
  }

}*/

reportWebVitals();
