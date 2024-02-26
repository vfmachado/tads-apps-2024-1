# Introdução ao React JS

## Material Sugerido

* https://react.dev/learn
* https://react.dev/learn/tutorial-tic-tac-toe
* https://www.youtube.com/watch?v=w7ejDZ8SWv8&ab_channel=TraversyMedia


## O que é React JS?

React JS é uma biblioteca JavaScript de código aberto para construir interfaces de usuário. Foi desenvolvida pelo Facebook e é amplamente utilizada para criar aplicativos web de página única. A chave para entender o React é o conceito de componentes, que são unidades independentes e reutilizáveis de código. Estes componentes podem ser pensados como blocos de construção para interfaces de usuário.

## Por que Usar React?

- **Desempenho Eficiente**: O React utiliza um virtual DOM para minimizar as manipulações diretas do DOM, o que aumenta a performance.
- **Componentes Reutilizáveis**: Permite a criação de componentes que podem ser reutilizados em diferentes partes do aplicativo, tornando o código mais limpo e fácil de manter.
- **Comunidade Forte**: Com o apoio do Facebook e uma comunidade ativa, o React é constantemente atualizado e tem uma vasta gama de bibliotecas e ferramentas disponíveis.

## Primeiros Passos com React

Antes de começarmos, é necessário ter o Node.js instalado em sua máquina. Depois, podemos criar um novo projeto React usando o Create React App, que é um ambiente pronto para iniciar projetos React.

```bash
npx create-react-app meu-app-react
cd meu-app-react
npm start
```

## Exemplo Básico

### Componente Simples

Vamos começar com um componente simples. Em React, os componentes são definidos em JavaScript usando classes ou funções.

```javascript
import React from 'react';

function BemVindo(props) {
  return <h1>Olá, {props.nome}!</h1>;
}
```

Este componente `BemVindo` pode ser usado em outros lugares do nosso aplicativo React.

### Renderização do Componente

Para renderizar o componente `BemVindo` na página, usamos o método `ReactDOM.render()`. 

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BemVindo from './BemVindo';

ReactDOM.render(
  <BemVindo nome="Visitante" />,
  document.getElementById('root')
);
```

Este código renderiza "Olá, Visitante!" na página.

## Estados e Ciclo de Vida (Old SChools Class components)

Os componentes em React podem ter estado, permitindo que eles reajam a entradas do usuário e outros eventos. Aqui está um exemplo de um componente de classe com estado:

```javascript
import React, { Component } from 'react';

class Relogio extends Component {
  constructor(props) {
    super(props);
    this.state = { data: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      data: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>São {this.state.data.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Relogio;
```

Este componente `Relogio` atualiza a interface do usuário a cada segundo, mostrando o horário atual.


Certamente! Vou refazer a seção "Estados e Ciclo de Vida" utilizando componentes funcionais em React. Essa abordagem usa os Hooks do React, uma adição mais recente ao React que permite o uso de estado e outras funcionalidades do React em componentes funcionais.

---

## Estados e Ciclo de Vida (Componentes Funcionais)

Diferentemente dos componentes de classe, os componentes funcionais em React utilizam Hooks para gerenciar estados e efeitos colaterais, como as operações no ciclo de vida do componente. Vamos recriar o exemplo do relógio usando um componente funcional.

### Componente Funcional com Estado

No React, o Hook `useState` é usado para adicionar um estado local a um componente funcional. O `useState` retorna um par de valores: o estado atual e uma função que atualiza esse estado.

Vamos recriar o componente `Relogio` como um componente funcional usando `useState`.

```javascript
import React, { useState, useEffect } from 'react';

function Relogio() {
  const [data, setData] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  function tick() {
    setData(new Date());
  }

  return (
    <div>
      <h2>São {data.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Relogio;
```

### Uso do Hook `useEffect`

No exemplo acima, o Hook `useEffect` é usado para substituir os métodos `componentDidMount` e `componentWillUnmount` de um componente de classe. O `useEffect` executa a função fornecida após a renderização do componente. Passamos uma função de limpeza que é executada quando o componente é desmontado, que, neste caso, é usada para limpar o intervalo do relógio.

### Conclusão

A conversão para um componente funcional com Hooks oferece uma maneira mais simples e direta de gerenciar estados e efeitos colaterais em componentes React. A utilização de `useState` e `useEffect` em componentes funcionais tornou-se um padrão popular na comunidade React, especialmente pela clareza e facilidade de uso.

