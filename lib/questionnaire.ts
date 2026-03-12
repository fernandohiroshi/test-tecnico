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
    summary:
      "Observação: a versão original tinha strings sem template literal. Abaixo está a forma equivalente em TypeScript.",
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
    summary:
      "[X] Será retornado o código, o nome e o CEP dos clientes que moram no bairro PACARAIMA e, são da cidade PORTO DE MOZ do estado do Espírito Santos ou são da cidade URUARA do Distrito Federal. [X] Será retornado o código, o nome e o CEP dos clientes que moram no bairro PACARAIMA e, são da cidade URUARA do Distrito Federal ou são da cidade PORTO DE MOZ do estado do Espírito Santos. (As duas descrevem a mesma query — o OR é comutativo)",
  },
  {
    id: "q10",
    title: "Questão 10",
    summary:
      "A) 0:N (Zero a muitos) — Um cliente pode existir sem ter nenhum atendimento registrado. B) Restrições: nenhum atendimento pode possuir a mesma data e hora; um cliente pode ser atendido por vários funcionários (um funcionário por vez); todo atendimento requer que exista um cliente e um funcionário cadastrado previamente.",
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
    summary:
      "Observação: a versão original tinha interpolação sem template literal. Abaixo está a forma equivalente.",
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
    summary: "Não há algoritmo; apenas ações organizacionais listadas.",
  },
  {
    id: "q14",
    title: "Questão 14 – Problema com rotina de cadastro",
    summary: "Não há algoritmo; apenas análise, diagnóstico e ações listadas.",
  },
];
