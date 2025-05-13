# Entendendo o Método Array.reduce() em JavaScript

O método `reduce()` é uma ferramenta fundamental para iterar sobre os elementos de um array e acumular um único valor. Ele executa uma função de "reducer" (redutor) para cada elemento do array, resultando em um único valor de retorno.

## Sintaxe Básica

A sintaxe do método `reduce()` é a seguinte:

```javascript
array.reduce(callback(acumulador, valorAtual[, índice[, array]])[, valorInicial])

```

### Um bom exemplo disso é uma lista de preços.

```
const listaDePrecos = [20, 10, 30, 50]
total = listaDePrecos.reduce((acc, valorAtual)=> acc + valorAtual)

```

No exemplo acima ele irá pegar os valore e somar entre si resultando no total de 110.

### Outro exemplo:

```
const listaDePrecos = [20, 10, 30, 50]
total = listaDePrecos.reduce((acc, valorAtual)=> acc > valorAtual ? acc : valorAtual)
```

No exemplo acima ele irá listar o _maior valor_ (50).
