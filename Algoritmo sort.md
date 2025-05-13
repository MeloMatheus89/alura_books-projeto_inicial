# Entendendo a Lógica do `array.sort()` em JavaScript

## A Lógica por Trás do `sort()` com Função de Comparação

O método `sort()` em JavaScript, por padrão, **converte os elementos do array em strings e os compara de acordo com a ordem dos pontos de código Unicode**. Isso significa que, sem uma função de comparação, a ordenação pode não ser a esperada para números. Por exemplo, `seria ordenado como` porque "1" vem antes de "10" e "2" na comparação de strings.

É aí que entra a função de comparação que você mencionou: **`(a, b) => a - b`**. Essa função instrui o `sort()` sobre como comparar dois elementos quaisquer do array (`a` e `b`).

- Se `a - b` retornar um **valor negativo**: Isso significa que `a` deve vir **antes** de `b` na ordem final.
- Se `a - b` retornar **zero**: Isso indica que `a` e `b` são considerados **iguais** em termos de ordenação, e sua posição relativa não será alterada.
- Se `a - b` retornar um **valor positivo**: Isso significa que `a` deve vir **depois** de `b` na ordem final.

Em resumo: A função de comparação define a lógica para determinar a ordem relativa de dois elementos. Ao retornar a diferença entre `a` e `b`, você está dizendo ao `sort()` para **ordenar os números de forma crescente**: se `a` é menor que `b`, a diferença é negativa, e `a` vem primeiro.

## Entendendo o Processo Passo a Passo

O método `sort()` itera pelo seu array (`lista`).

1.  Para cada par de elementos (`a` e `b`), ele chama a função de comparação que você forneceu (`(a, b) => a - b`).
2.  A função de comparação calcula a diferença entre `a` e `b`.
3.  Com base no valor retornado pela função de comparação (negativo, zero ou positivo), o `sort()` decide se precisa trocar as posições de `a` e `b` para garantir a ordem correta.

Esse processo se repete até que todos os elementos do array estejam na ordem desejada.
