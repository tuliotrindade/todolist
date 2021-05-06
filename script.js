let botao = document.querySelector('#criar-tarefa');
let lista = document.querySelector('#lista-tarefas');
let entrada = document.querySelector('#texto-tarefa');
botao.addEventListener('click', function () {
  let tarefa = document.createElement('li');
  tarefa.id = 'tarefas';
  tarefa.textContent = entrada.value;
  lista.appendChild(tarefa);
  entrada.value = '';
});
let corTarefa = document.querySelector('#lista-tarefas');
corTarefa.addEventListener('click', function (evento) {
  evento.target.style.backgroundColor = 'rgb(128, 128, 128)';
});
