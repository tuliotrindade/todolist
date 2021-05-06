let botao=document.querySelector("#criar-tarefa")
let lista=document.querySelector("#lista-tarefas")
let entrada=document.querySelector("#texto-tarefa")
let i=0;
botao.addEventListener("click", function(){
    let tarefa=document.createElement("li");
    tarefa.id="tarefas"
    console.log(entrada);
    tarefa.textContent=entrada.value;
    lista.appendChild(tarefa);
    entrada.value="";

})