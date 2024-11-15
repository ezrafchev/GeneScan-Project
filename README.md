# ideogram
[![Testes](https://github.com/eweitz/ideogram/actions/workflows/ci.yml/badge.svg)](https://github.com/eweitz/ideogram/actions/workflows/ci.yml)
[![Status de cobertura](https://coveralls.io/repos/github/eweitz/ideogram/badge.svg?branch=master)](https://coveralls.io/github/eweitz/ideogram?branch=master)

[Ideogram.js](https://eweitz.github.io/ideogram/) é uma biblioteca JavaScript para [visualização de cromossomos](https://speakerdeck.com/eweitz/designing-genome-visualizations-with-ideogramjs).

O Ideogram suporta o desenho e animação de conjuntos de dados de todo o genoma para [humanos](https://eweitz.github.io/ideogram/human), [camundongos](https://eweitz.github.io/ideogram/mouse) e [muitos outros eucariotos](https://eweitz.github.io/ideogram/eukaryotes). A [API do Ideogram](https://github.com/eweitz/ideogram/blob/master/api.md) para anotações suporta [histogramas](https://eweitz.github.io/ideogram/annotations-histogram), [mapas de calor](https://eweitz.github.io/ideogram/annotations-heatmap), [sobreposições](https://eweitz.github.io/ideogram/annotations-overlaid) e pontos de forma e cor arbitrárias em camadas em [trilhas](https://eweitz.github.io/ideogram/annotations-tracks). O Ideogram pode representar genomas haploides, [diploides](https://eweitz.github.io/ideogram/ploidy-basic) ou de ploidia superior (por exemplo, plantas), bem como aneuploidia, [recombinação genética](https://eweitz.github.io/ideogram/ploidy-recombination) e [características homólogas](https://eweitz.github.io/ideogram/homology-basic) entre cromossomos.

O Ideogram pode ser incorporado como um [componente reutilizável](https://github.com/eweitz/ideogram#usage) em qualquer página da web ou aplicativo, e aproveita D3.js e SVG para alcançar renderização rápida e nítida do lado do cliente. Você também pode integrar o Ideogram com frameworks JavaScript como [Angular](https://github.com/eweitz/ideogram/tree/master/examples/angular), [React](https://github.com/eweitz/ideogram/tree/master/examples/react) e [Vue](https://github.com/eweitz/ideogram/tree/master/examples/vue), bem como plataformas de ciência de dados como [R](https://github.com/eweitz/ideogram/tree/master/examples/r) e [Jupyter Notebook](https://github.com/eweitz/ideogram/tree/master/examples/jupyter).

[![Todos os genes humanos](https://raw.githubusercontent.com/eweitz/ideogram/master/examples/vanilla/ideogram_histogram_all_human_genes.png)](https://eweitz.github.io/ideogram/annotations_histogram.html)

Confira [exemplos ao vivo](https://eweitz.github.io/ideogram/), [comece](#instalação) com sua própria implantação, veja o [uso básico](#uso) ou mergulhe na [API completa](api.md)!

Uma [visão geral mais ampla](https://speakerdeck.com/eweitz/ideogramjs-chromosome-visualization-with-javascript) também está disponível. Ela discute a biologia cromossômica do Ideogram, arquitetura técnica e mais.

# Instalação

Para vincular diretamente à versão mais recente, copie este snippet:
```
<script src="https://cdn.jsdelivr.net/npm/ideogram@1.47.0/dist/js/ideogram.min.js"></script>
```

Você também pode usar facilmente a biblioteca localmente:
```
$ cd <raiz do documento do seu servidor web local>
$ git clone https://github.com/eweitz/ideogram.git
```

Em seguida, vá para [http://localhost/ideogram/examples/](http://localhost/ideogram/examples/).

Ou, se você usa npm:
```
npm install ideogram
```

Você pode então [importar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) o Ideogram em um aplicativo assim:
```
import Ideogram from 'ideogram';
```

# Uso
```html
<head>
  <script src="https://cdn.jsdelivr.net/npm/ideogram@1.47.0/dist/js/ideogram.min.js"></script>
</head>
<body>
<script>
  var ideogram = new Ideogram({
    organism: 'human',
    annotations: [{
      name: 'BRCA1',
      chr: '17',
      start: 43044294,
      stop: 43125482
    }]
  });
</script>
</body>
```

Muitos mais exemplos de uso estão disponíveis em https://eweitz.github.io/ideogram/.

Você também pode encontrar exemplos de integração do Ideogram com frameworks JavaScript como [Angular](https://github.com/eweitz/ideogram/tree/master/examples/angular), [React](https://github.com/eweitz/ideogram/tree/master/examples/react) e [Vue](https://github.com/eweitz/ideogram/tree/master/examples/vue), bem como plataformas de ciência de dados como [R](https://github.com/eweitz/ideogram/tree/master/examples/r) e [Jupyter Notebook](https://github.com/eweitz/ideogram/tree/master/examples/jupyter).

# API

Consulte a [referência da API do Ideogram](api.md) para documentação detalhada sobre opções de configuração e métodos.

---

Créditos: Este projeto foi adaptado por Mariana Silva de Oliveira.

# Passo a Passo para Execução

Este guia fornecerá instruções detalhadas para executar o projeto GeneScan em seu computador, mesmo se você não tiver experiência prévia com programação.

## Pré-requisitos

1. **Instalar o Git:**
   - Windows: Baixe e instale o Git do site oficial: https://git-scm.com/download/win
   - macOS: Instale o Homebrew (https://brew.sh/) e depois execute `brew install git` no Terminal
   - Linux: Use o gerenciador de pacotes da sua distribuição (por exemplo, `sudo apt-get install git` no Ubuntu)

2. **Instalar o Node.js:**
   - Baixe e instale o Node.js do site oficial: https://nodejs.org/

3. **Instalar um editor de texto:**
   - Recomendamos o Visual Studio Code: https://code.visualstudio.com/

## Passos para Execução

1. **Clonar o repositório:**
   - Abra o terminal (Prompt de Comando no Windows, Terminal no macOS/Linux)
   - Execute o comando:
     ```
     git clone https://github.com/ezrafchev/GeneScan-Project.git
     ```

2. **Navegar até o diretório do projeto:**
   ```
   cd GeneScan-Project
   ```

3. **Instalar as dependências:**
   ```
   npm install
   ```

4. **Executar o projeto:**
   ```
   npm start
   ```

5. **Visualizar o projeto:**
   - Abra seu navegador web
   - Digite `http://localhost:8080` na barra de endereços

## Solução de Problemas

- Se encontrar algum erro durante a instalação das dependências, tente executar o comando como administrador/superusuário
- Certifique-se de que as portas 8080 não estão sendo usadas por outros programas
- Se o navegador não abrir automaticamente, tente acessar manualmente o endereço `http://localhost:8080`

Para mais informações ou se encontrar problemas, por favor, abra uma issue no GitHub do projeto.

