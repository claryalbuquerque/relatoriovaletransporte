let funcionarios = [];

const bancoFuncionarios = [
    { nome: "Alan Gomes", cargo: "Pedreiro", valorDia: 22.90 },
    { nome: "Albemir Costa", cargo: "Op. Betoneira", valorDia: 11 },
    { nome: "Amarildo Silva", cargo: "Maquinista", valorDia: 11 },
    { nome: "Anderson Mota", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Anderson Raposo", cargo: "Ajudante", valorDia: 11 },
    { nome: "Andre Vitorino", cargo: "Pedreiro", valorDia: 22.90 },
    { nome: "Antonio dos Reis", cargo: "Maquinista", valorDia: 11 },
    { nome: "Antonio Francisco", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Antonio Nilson", cargo: "Ajudante", valorDia: 11 },
    { nome: "Arenaldo Nascimento", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Brendo Teixeira", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Carlos da Conceição", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Charles Leal", cargo: "Encarregado", valorDia: 11 },
    { nome: "Cicero Souza", cargo: "Ajudante", valorDia: 22.90 },
    { nome: "Cledis Maia", cargo: "Ajudante", valorDia: 22 },
    { nome: "Daniel Cantanhede", cargo: "Ajudante", valorDia: 21.40 },
    { nome: "Delmar Lopes", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Denilson Silva", cargo: "Pedreiro", valorDia: 8.60 },
    { nome: "Erick Marques", cargo: "Pedreiro", valorDia: 22.90 },
    { nome: "Eufrazio Moura", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Evando Pereira", cargo: "Pedreiro", valorDia: 8.60 },
    { nome: "Ezedequias", cargo: "Ajudante", valorDia: 11 },
    { nome: "Francisco Darlan", cargo: "Pedreiro", valorDia: 22 },
    { nome: "Francisco das Chagas", cargo: "Encarregado", valorDia: 11 },
    { nome: "Gerson de Oliveira", cargo: "Pedreiro", valorDia: 22.90 },
    { nome: "Geir Anastasio", cargo: "Ajudante", valorDia: 20.30 },
    { nome: "Gonzaga da Costa", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Guilberth", cargo: "Ajudante", valorDia: 21.40 },
    { nome: "Jadyelson", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Jhonatan Cezar", cargo: "Op. Betoneira", valorDia: 20.90 },
    { nome: "Jociran Alves", cargo: "Pedreiro", valorDia: 8.60 },
    { nome: "Jose ALmeida", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Jose Anderson", cargo: "Ajudante", valorDia: 11 },
    { nome: "Jose Carlos", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Jose dos Santos", cargo: "Op. Betoneira", valorDia: 22.90 },
    { nome: "Junior ALvez", cargo: "Ajudante ", valorDia: 22.70 },
    { nome: "Kleison Garreto", cargo: "Pedreiro", valorDia: 22.70 },
    { nome: "Lara Cristina", cargo: "Rh", valorDia: 11 },
    { nome: "Leandro da Silva", cargo: "Pedreiro", valorDia: 20.90 },
    { nome: "Leomando Silva", cargo: "Op. Betoneira", valorDia: 8.60 },
    { nome: "Luan Morais", cargo: "Ajudante", valorDia: 13.50 },
    { nome: "Lucas Batista", cargo: "Maquinista", valorDia: 11 },
    { nome: "Luis Carlos", cargo: "Encarregado", valorDia: 8.60 },
    { nome: "Luciano Costa", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Marxon Oliveira", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Mateus Rosa", cargo: "Ajudante", valorDia: 22.90 },
    { nome: "Nerival Bispo", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Paulo Henrique", cargo: "Ajudante", valorDia: 25.35 },
    { nome: "Pedro Moreira", cargo: "Encarregado", valorDia: 11 },
    { nome: "Rafael de Souza", cargo: "Ajudante", valorDia: 11 },
    { nome: "Rodrigo de Jesus", cargo: "Ajudante", valorDia: 11 },
    { nome: "Ronaldo Silva", cargo: "Pedreiro", valorDia: 8.60 },
    { nome: "Rubens Rayann", cargo: "Maquinista", valorDia: 11 },
    { nome: "Samuel Araújo", cargo: "Maquinista", valorDia: 11 },
    { nome: "Sebastião Rodrigues", cargo: "Pedreiro", valorDia: 13.70 },
    { nome: "Silvani Pereira", cargo: "Pedreiro", valorDia: 23.30 },
    { nome: "Valdemar Paz", cargo: "Ajudante", valorDia: 11 },
    { nome: "Valderson Pereira", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Valmir Correa", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Vanderlan Pires", cargo: "Pedreiro", valorDia: 22.40 },
    { nome: "Vinicius da Conceição", cargo: "Ajudante", valorDia: 11 },
    { nome: "Victor Rafael", cargo: "Pedreiro", valorDia: 11 },
    { nome: "Wenderson da Silva", cargo: "Pedreiro", valorDia: 8.60 },
    { nome: "Weslley Soares", cargo: "Pedreiro", valorDia: 20.50 },
    { nome: "Wilky Soares", cargo: "Op. Betoneira", valorDia: 22.90 },
    { nome: "Jorge Mota", cargo: "Pedreiro", valorDia: 11 },
];

function carregarLista() {
    let datalist = document.getElementById("listaFuncionarios");

    bancoFuncionarios.forEach(f => {
        let option = document.createElement("option");
        option.value = f.nome;
        datalist.appendChild(option);
    });
}

// chama quando abrir a página
carregarLista();

function adicionar() {
    let nome = document.getElementById("nome").value;
    let dias = parseInt(document.getElementById("dias").value);

    if (!nome || isNaN(dias)) {
        alert("Preencha corretamente!");
        return;
    }

    // Buscar no banco
    let funcionarioBanco = bancoFuncionarios.find(f =>
        f.nome.toLowerCase() === nome.toLowerCase()
    );

    if (!funcionarioBanco) {
        alert("Funcionário não encontrado!");
        return;
    }

    let total = dias * funcionarioBanco.valorDia;

    funcionarios.push({
        nome: funcionarioBanco.nome,
        cargo: funcionarioBanco.cargo,
        dias,
        valorDia: funcionarioBanco.valorDia,
        total
    });

    atualizarTabela();
}

function atualizarTabela() {
    let tbody = document.querySelector("#tabela tbody");
    tbody.innerHTML = "";

    funcionarios.forEach(f => {
        let linha = `
<tr>
  <td data-label="Nome">${f.nome}</td>
  <td data-label="Cargo">${f.cargo}</td>
  <td data-label="Dias">${f.dias}</td>
  <td data-label="Total">R$ ${f.total.toFixed(2)}</td>
</tr>
`;
        tbody.innerHTML += linha;
    });
}
function gerarPDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    let hoje = new Date();
    let data = hoje.toLocaleDateString('pt-BR');

    // 🔷 CABEÇALHO
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("EMPRESA L.A CONSTRUTORA", 14, 12);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Relatório de Vale Transporte Pagos.", 14, 18);

    // Data no canto direito
    doc.text(`Data: ${data}`, 150, 12);

    // Linha separadora
    doc.setDrawColor(0);
    doc.line(14, 22, 196, 22);

    // 🔷 TABELA
    let colunas = ["Nome", "Cargo", "Dias", "Valor Dia", "Total"];
    let linhas = [];

    let totalGeral = 0;

    funcionarios.forEach(f => {
        linhas.push([
            f.nome,
            f.cargo,
            f.dias,
            f.valorDia.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            f.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        ]);

        totalGeral += f.total;
    });

    doc.autoTable({
        startY: 28,
        head: [colunas],
        body: linhas,
        theme: 'grid',

        styles: {
            fontSize: 10,
            cellPadding: 3,
            halign: 'center'
        },

        headStyles: {
            fillColor: [40, 40, 40],
            textColor: 255,
            fontStyle: 'bold'
        },

        alternateRowStyles: {
            fillColor: [240, 240, 240]
        }
    });

    let y = doc.lastAutoTable.finalY + 10;

    // 🔷 RESUMO
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Resumo", 14, y);

    y += 8;

    doc.setFont("helvetica", "normal");

    let media = funcionarios.length > 0
        ? totalGeral / funcionarios.length
        : 0;

    doc.text(
        `Total Geral: ${totalGeral.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`,
        14,
        y
    );
    y += 6;


    // 🔷 RODAPÉ
    let alturaPagina = doc.internal.pageSize.height;

    doc.setFontSize(9);
    doc.setTextColor(100);

    doc.text(
        "Documento gerado automaticamente pelo sistema",
        14,
        alturaPagina - 10
    );

    doc.text(
        `Página 1`,
        180,
        alturaPagina - 10
    );

    // 🔷 DOWNLOAD
    doc.save("relatorio_vale_transporte.pdf");
}