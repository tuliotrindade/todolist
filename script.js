let botao = document.querySelector('#criar-tarefa');
let botao2 = document.querySelector('#apaga-tudo');
let botao3 = document.querySelector('#remover-finalizados');
let lista = document.querySelector('#lista-tarefas');
let entrada = document.querySelector('#texto-tarefa');
let ntarefas = document.querySelectorAll('li');
let completos = document.getElementsByClassName('completed');
let i = 0;
botao.addEventListener('click', function () {
  let tarefa = document.createElement('li');
  tarefa.className = 'tarefas';
  tarefa.textContent = entrada.value;
  lista.appendChild(tarefa);
  entrada.value = '';
});
let corTarefa = document.querySelector('#lista-tarefas');
corTarefa.addEventListener('click', function (evento) {
  if (evento.target.className == 'tarefas') {
    if (document.querySelector('#target') !== null) {
      document.querySelector('#target').removeAttribute('id');
    }
    evento.target.id = 'target';
  }
});
corTarefa.addEventListener('dblclick', function (evento) {
  if (
    evento.target.className == 'tarefas' &&
    evento.target.className !== 'completed'
  ) {
    evento.target.className = 'tarefas completed';
  } else {
    evento.target.removeAttribute('class');
    evento.target.className = 'tarefas';
  }
});

botao2.addEventListener('click', function () {
  lista.innerHTML = '';
});
botao3.addEventListener('click', function () {
  for (let i = completos.length - 1; i >= 0; --i) {
    completos[i].remove();
  }
});
