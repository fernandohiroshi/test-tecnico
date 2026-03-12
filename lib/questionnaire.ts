export type QuestionnaireEntry = {
  id: string;
  title: string;
  summary?: string;
  language?: string;
  code?: string;
};

export const candidate = {
  name: "Fernando Hiroshi Takeda",
  startTime: "14h",
  date: "12/03/2026",
  interest: ["Estágio", "Júnior", "Pleno"],
  experiences: [
    {
      id: "A",
      title: "Desenvolvimento Web",
      details:
        "Tenho experiência com React.js, Next.js e TypeScript, desenvolvendo aplicações web modernas, responsivas, landing pages e integrações com APIs REST. Atuo também em deploy e otimização de performance e SEO.",
    },
    {
      id: "B",
      title: "Desenvolvimento Desktop",
      details:
        "Não possuo experiência prática em desktop, mas tenho conhecimentos de lógica de programação e estruturas de controle, que podem ser aplicados a qualquer linguagem.",
    },
    {
      id: "C",
      title: "Desenvolvimento Mobile",
      details:
        "Possuo conhecimentos em React Native, com compreensão de conceitos e práticas semelhantes ao React web.",
    },
    {
      id: "D",
      title: "Banco de Dados",
      details:
        "Experiência com PostgreSQL, Prisma ORM, Sanity CMS e integração com Node.js e Next.js. Também utilizei ferramentas como Postman, Supabase e testes com Jest.",
    },
  ],
};

export const questionnaire: QuestionnaireEntry[] = [
  {
    id: "q1",
    title: "Questão 1 – Salário líquido",
    language: "ts",
    code: `function calcularSalarioLiquido(
  horasPorDia: number,
  valorHora: number,
  diasTrabalhados: number
): number {
  const salarioBruto = horasPorDia * valorHora * diasTrabalhados;
  const desconto = salarioBruto * 0.03;
  const salarioLiquido = salarioBruto - desconto;
  return salarioLiquido;
}

console.log("Salário líquido:", calcularSalarioLiquido(8, 25, 22));`,
  },
  {
    id: "q2",
    title: "Questão 2 – Condições de valores",
    language: "ts",
    code: `function verificarValores(
  A: number,
  B: number,
  C: number,
  D: number
): string {
  if (
    B > C &&
    D > A &&
    C + D > A + B &&
    C > 0 &&
    D > 0 &&
    A % 2 === 0
  ) {
    return "Valores aceitos";
  }

  return "Valores não aceitos";
}

console.log(verificarValores(2, 5, 3, 6));`,
  },
  {
    id: "q3",
    title: "Questão 3 – Decomposição em notas",
    language: "ts",
    code: `function decomporNotas(valor: number) {
  const notas = [200, 100, 50, 20, 10, 5, 2, 1];
  console.log(\`Valor: R$ \${valor}\`);

  for (const nota of notas) {
    const quantidade = Math.floor(valor / nota);
    console.log(\`\${quantidade} nota(s) de R$ \${nota},00\`);
    valor %= nota;
  }
}

decomporNotas(777);`,
  },
  {
    id: "q4",
    title: "Questão 4 – Equação AX + BX + C = 1",
    language: "ts",
    code: `function calcularX(A: number, B: number, C: number): string | number {
  if (A === 0 && B === 0 && C !== 1) {
    return "Solução impossível";
  }

  return (1 - C) / (A + B);
}

console.log(calcularX(2, 3, 4));`,
  },
  {
    id: "q5",
    title: "Questão 5 – Verificar tipo de placa",
    language: "ts",
    code: `function verificarPlaca(placa: string): string | object {
  const regexBrasil = /^[A-Z]{3}\d{4}$/;
  const regexMercosul = /^[A-Z]{3}\d[A-Z]\d{2}$/;

  const digitoParaLetra = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const letraParaDigito: Record<string, string> = {
    A: "0",
    B: "1",
    C: "2",
    D: "3",
    E: "4",
    F: "5",
    G: "6",
    H: "7",
    I: "8",
    J: "9",
  };

  if (regexBrasil.test(placa)) {
    const letraCorrespondente = digitoParaLetra[parseInt(placa[4])];
    const correspondente = placa.slice(0, 4) + letraCorrespondente + placa.slice(5);
    return { padrao: "Brasil", correspondente };
  } else if (regexMercosul.test(placa)) {
    const digitoCorrespondente = letraParaDigito[placa[4]];
    const correspondente = placa.slice(0, 4) + digitoCorrespondente + placa.slice(5);
    return { padrao: "Mercosul", correspondente };
  } else {
    return "Formato inválido";
  }
}

console.log(verificarPlaca("ABC1234"));
console.log(verificarPlaca("ABC1C34"));`,
  },
  {
    id: "q6",
    title: "Questão 6 – Sequência de números e condições",
    language: "ts",
    code: `function analisarSequencia(N: number) {
  for (let i = 1; i <= N; i++) {
    let mensagem = "";

    const somaDivisores = Array.from({ length: i }, (_, j) => j + 1)
      .filter((n) => i % n === 0 && n !== i)
      .reduce((acc, val) => acc + val, 0);

    if (somaDivisores === i) mensagem += "numero perfeito ";
    if (i % 3 === 0) mensagem += "multiplo de 3 ";
    if (i % 5 === 0) mensagem += "multiplo de 5 ";
    if (Number.isInteger(Math.sqrt(i))) mensagem += "raiz inteira";

    console.log(i, mensagem.trim());
  }
}

analisarSequencia(20);`,
  },
  {
    id: "q7",
    title: "Questão 7 – Título centralizado",
    language: "ts",
    code: `function imprimirTitulo(superior: string, inferior: string, largura = 50) {
  const bordaHorizontal = "=".repeat(largura);
  const linhaVazia = "||" + " ".repeat(largura - 4) + "||";

  const centralizar = (texto: string): string => {
    const espacosInterno = largura - 4;
    const espacosEsq = Math.floor((espacosInterno - texto.length) / 2);
    const espacosDir = espacosInterno - texto.length - espacosEsq;
    return "||" + " ".repeat(espacosEsq) + texto + " ".repeat(espacosDir) + "||";
  };

  console.log(bordaHorizontal);
  console.log(linhaVazia);
  console.log(centralizar(superior));
  console.log(centralizar(inferior));
  console.log(linhaVazia);
  console.log(bordaHorizontal);
}

imprimirTitulo("DSIN", "TECNOLOGIA DA INFORMAÇÃO");`,
  },
  {
    id: "q8",
    title: "Questão 8 – Matriz caracol",
    language: "ts",
    code: `function matrizCaracol(N: number): void {
  const matriz: number[][] = Array.from({ length: N }, () => Array(N).fill(0));

  let valor = 5;
  const passo = 5;
  let topo = 0,
    base = N - 1,
    esq = 0,
    dir = N - 1;

  while (topo <= base && esq <= dir) {
    for (let j = esq; j <= dir; j++) {
      matriz[topo][j] = valor;
      valor += passo;
    }
    topo++;

    for (let i = topo; i <= base; i++) {
      matriz[i][dir] = valor;
      valor += passo;
    }
    dir--;

    if (topo <= base) {
      for (let j = dir; j >= esq; j--) {
        matriz[base][j] = valor;
        valor += passo;
      }
      base--;
    }

    if (esq <= dir) {
      for (let i = base; i >= topo; i--) {
        matriz[i][esq] = valor;
        valor += passo;
      }
      esq++;
    }
  }

  console.log("\nMatriz Caracol " + N + "x" + N + ":");
  for (const linha of matriz) {
    console.log(linha.map((n) => String(n).padStart(4)).join(" "));
  }
}

matrizCaracol(5);`,
  },
  {
    id: "q9",
    title: "Questão 9 – SQL",
    summary: `[X] Será retornado o código, o nome e o CEP dos clientes que moram no bairro PACARAIMA e, são da cidade PORTO DE MOZ do estado do Espírito Santos ou são da cidade URUARA do Distrito Federal.

[ ] Será retornado o código, o nome e o CEP dos clientes que moram no bairro PACARAIMA e são da cidade PORTO DE MOZ do estado do Espírito Santos e são da cidade URUARA do Distrito Federal.

[X] Será retornado o código, o nome e o CEP dos clientes que moram no bairro PACARAIMA e, são da cidade URUARA do Distrito Federal ou são da cidade PORTO DE MOZ do estado do Espírito Santos.

[ ] Será retornado o código, o nome, o CEP e a data de nascimento dos clientes que moram no bairro PACARAIMA e, são da cidade PORTO DE MOZ do estado do Espírito Santos ou são da cidade URUARA do Distrito Federal.`,
  },
  {
    id: "q10",
    title: "Questão 10",
    summary: `A)

[ ] 1:0 (Um para nenhum)

[ ] 1:N (Um para muitos)

[ ] N:1 (Muitos para um)

[ ] M:N (Muitos para Muitos)

[X] 0:N (Zero a muitos)

----------------------------------------

B)

[ ] Um cliente pode ser atendido por um funcionário que não possua um nome cadastrado.

[X] Nenhum atendimento pode possuir a mesma data e hora.

[ ] Um cliente pode ser atendido sem um funcionário.

[X] Um cliente pode ser atendido por vários funcionários, sendo um funcionário por vez.

[X] Todo atendimento requer que exista um cliente e um funcionário cadastrado previamente.`,
  },
  {
    id: "q11",
    title: "Questão 11 – SQL",
    language: "sql",
    code: `-- A) Clientes que não foram atendidos

SELECT c.CDCLINOME
FROM CDCLIENTE c
LEFT JOIN LCATENDIMENTO l ON c.CDCLICODIGO = l.LCACLIENTE
WHERE l.LCACLIENTE IS NULL;

-- B) Nome do funcionário e quantidade de atendimentos

SELECT f.CDFNOME, COUNT(l.LCACODIGO) AS qtd_atendimentos
FROM CDFUNCIONARIO f
LEFT JOIN LCATENDIMENTO l ON f.CDFCODIGO = l.LCAFUNCIONARIO
GROUP BY f.CDFNOME;

-- C) Atendimentos no primeiro bimestre ou segundo semestre de 2011

SELECT c.CDCLINOME, l.LCADATAHORAATEND
FROM LCATENDIMENTO l
JOIN CDCLIENTE c ON c.CDCLICODIGO = l.LCACLIENTE
WHERE (l.LCADATAHORAATEND BETWEEN '2011-01-01' AND '2011-02-28')
   OR (l.LCADATAHORAATEND BETWEEN '2011-07-01' AND '2011-12-31');`,
  },
  {
    id: "q12",
    title: "Questão 12 – Programar um pato",
    language: "ts",
    code: `class Pato {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  grasnar() {
    console.log(\`\${this.nome} diz: Quack!\`);
  }

  nadar() {
    console.log(\`\${this.nome} está nadando.\`);
  }
}

const pato = new Pato("Donald");
pato.grasnar();
pato.nadar();`,
  },
  {
    id: "q13",
    title: "Questão 13 – Planejamento de entrega",
    summary:
      "Dada a situação, onde o prazo para a entrega dos relatórios é de 15 dias (10 dias para desenvolvimento e 3 dias para testes), minha primeira ação seria planejar o uso eficaz do tempo para garantir a entrega dentro do prazo. As ações que tomaria seriam: Finalização do Relatório 1: O primeiro relatório já foi finalizado em 6 dias, o que me dá um bom tempo extra para os outros relatórios. Desenvolvimento dos Relatórios 2 e 3: Como a complexidade é semelhante, começaria o desenvolvimento do segundo relatório imediatamente após a finalização do primeiro, utilizando os 4 dias restantes para o desenvolvimento. Testes das rotinas: O setor de testes precisa de 3 dias para validar as rotinas. Assim, iniciaria o processo de teste logo após a finalização do segundo relatório. Possível paralelo no desenvolvimento: Caso o time de testes não precise de tempo exclusivo para o segundo relatório, poderia tentar desenvolver o terceiro relatório em paralelo, durante o processo de teste dos outros dois. Comunicação constante: Manteria uma comunicação contínua com a equipe de produto e com o cliente, reportando qualquer risco de atraso, se necessário. Com esse planejamento, a entrega dos 3 relatórios seria viável dentro do prazo de 15 dias, sem comprometer a qualidade do trabalho.",
  },
  {
    id: "q14",
    title: "Questão 14 – Problema com rotina de cadastro",
    summary: `A) Análise para auxiliar o setor de suporte no atendimento do cliente

Para auxiliar o setor de suporte, a primeira ação seria revisar os logs e registros de alterações no sistema, a fim de entender o impacto da mudança solicitada (campos obrigatórios se tornando opcionais) sobre os relatórios de produtos.

Ações específicas:

- Revisar a alteração no cadastro: verificar se, ao tornar os campos obrigatórios em opcionais, a lógica de preenchimento no banco de dados foi alterada (impactando o comportamento dos relatórios).

- Verificar a integridade dos dados: confirmar se os produtos cadastrados antes da alteração foram corretamente atualizados, ou se existem registros inconsistentes.

- Revisar os relatórios afetados: analisar os relatórios com divergências nas quantidades, verificando quais dados foram afetados pela mudança.

- Revisar mudanças no banco de dados: verificar se a alteração nos campos opcionais alterou o comportamento das consultas SQL/agrupamentos que geram os relatórios.

- Verificar a comunicação com os clientes: confirmar se os clientes foram informados corretamente sobre a nova versão e a mudança no cadastro, garantindo clareza do comportamento esperado.

B) Diagnóstico sobre o possível problema e ações para resolver

Diagnóstico:

O problema provavelmente está relacionado à alteração dos campos obrigatórios para opcionais, o que pode ter causado inconsistências no banco de dados ou afetado a forma como as informações são processadas nos relatórios. O sistema pode estar tratando de maneira inadequada registros de produtos sem preenchimento dos campos opcionais.

Ações para resolver:

- Auditoria de dados: verificar se a opcionalização está gerando nulos/registros incompletos e se isso afeta contagens/agrupamentos.

- Correção do banco de dados: caso haja inconsistências, corrigir os dados afetados (incluindo possível atualização em massa).

- Ajuste nas consultas de relatório: revisar e corrigir consultas SQL/agrupamentos para garantir que as quantidades sejam calculadas corretamente, mesmo com campos nulos.

- Testes pós-correção: validar que os relatórios voltaram a bater com o cadastro e que a mudança não afetou outras rotinas.

- Documentação e comunicação: informar os clientes sobre a correção, atualizar a documentação e orientar quanto ao novo comportamento da rotina de cadastro.`,
  },
];
