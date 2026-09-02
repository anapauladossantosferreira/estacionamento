<script>
  // Seleciona os elementos do formulário e dos painéis
  const btnRegistrar = document.querySelector('.card form button');
  const inputPlaca = document.querySelector('.card form input[type="text"]');
  const selectTipo = document.querySelectorAll('.card form select')[0];
  const selectVaga = document.querySelectorAll('.card form select')[1];
  const tabelaCorpo = document.querySelector('table tbody');

  // Adiciona o evento de clique no botão
  btnRegistrar.addEventListener('click', function() {
    const placa = inputPlaca.value.trim().toUpperCase();
    const tipo = selectTipo.value;
    const vagaTexto = selectVaga.value;

    // Validação simples de preenchimento
    if (placa === '') {
      alert('Por favor, digite a placa do veículo.');
      return;
    }

    // Pega a hora atual no formato HH:MM
    const agora = new Date();
    const horaEntrada = agora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Cria uma nova linha para a tabela de movimentações
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
      <td>${placa}</td>
      <td>${horaEntrada}</td>
      <td>${vagaTexto.split(' ')[0]}</td>
      <td>Avulso</td>
      <td><span class="badge badge-pendente">Em Aberto</span></td>
      <td><button style="padding: 3px 8px; cursor:pointer;" onclick="registrarSaida(this)">Saída</button></td>
    `;

    // Adiciona a linha no topo da tabela
    tabelaCorpo.prepend(novaLinha);

    // Limpa o campo de texto da placa
    inputPlaca.value = '';
    alert(`Entrada do veículo ${placa} registrada com sucesso!`);
  });

  // Função para simular a saída do veículo
  function registrarSaida(botao) {
    const linha = botao.closest('tr');
    const placa = linha.children[0].textContent;
    
    linha.children[4].innerHTML = '<span class="badge badge-pago">Pago (R$ 15,00)</span>';
    linha.children[5].textContent = '-';
    
    alert(`Saída do veículo ${placa} registrada.`);
  }
</script>
