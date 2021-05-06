let botao=document.querySelector("#criar-tarefa")
let lista=document.querySelector("#lista-tarefas")
let entrada=document.querySelector("#texto-tarefa")
let ntarefas=document.querySelectorAll("ol")
let i=0;
botao.addEventListener("click", function(){
    let tarefa=document.createElement("li");
    tarefa.className="tarefas"
    tarefa.textContent=entrada.value;
    lista.appendChild(tarefa);
    entrada.value="";
})
let corTarefa=document.querySelector("#lista-tarefas");
corTarefa.addEventListener("click", function(evento){
    if(evento.target.className=="tarefas"){
        if(document.querySelector("#target")!==null){
            document.querySelector("#target").removeAttribute("id")
        }
    evento.target.id="target"
}     
})