var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "minimal-2",
  "level": "1",
  "url": "minimal-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Márcio Rostirolla Adames  Universidade Technológica Federal do Paraná      Notas de aula de um curso de Álgebra Linear com python. Trabalho em progresso...  Todos os direitos reservados. All rights reserved.   "
},
{
  "id": "sistemas-lineares",
  "level": "1",
  "url": "sistemas-lineares.html",
  "type": "Section",
  "number": "1",
  "title": "Sistemas de Equações Lineares",
  "body": " Sistemas de Equações Lineares   Nessa seção introduzimos sistemas lineares e áplicações práticas. Sistemas lineares são, provavelmente, o tipo de problema matemático mais frequênte em aplicações práticas. Algumas razões para essa afirmação são:   Muitos problemas práticos são lineares por natureza.  A teoria de sistemas lineares permite compreender tais problemas e resolvê-los (equações diferencias, em contra-partida, podem não ser solúveis diretamente).  Métodos computacionais funcionam bem para a solução de problemas lineares.  Problemas mais complexos (como equações diferenciais) podem ser reduzidos a problemas lineares em vários casos de interesse.  Para problemas não lineares, muitas vezes utilizamos aproximações lineares ou métodos que envolvem problemas lineares em diversas etapas de suas soluções.      Sistemas Lineares     sistemas lineares   Uma equação linear em variáveis é uma equação da forma onde são constantes reais (ou complexas) chamadas de coeficientes do sistema . Um sistema de equações lineares é um conjunto de em variáveis. Encontrar uma solução do sistema (ou resolver o sistema) é determinar um conjunto de valores para as variáveis, de modo que todas as equações sejam satisfeitas simultaneamente.   O sistema  pode ser resolvido somando ou subtraindo múltiplos de uma equação nas outras linhas eliminando variáveis (denotando para a primeira equação e para a segunda) e substituindo valores encontrados.   Podemos tentar resolver o sistema  encontrando Chegando a uma contradição. De modo que o sistema não tem solução.  O sistema  pode ser resolvido somando ou subtraindo múltiplos de uma equação nas outras linhas eliminando variáveis e substituindo valores encontrados. de modo que para cada valor de uma solução distinta e, assim, infinitas soluções.  Um sistema linear é dito compatível se admite soluções. Sistemas compatíveis podem ter solução única ou infinitas soluções (Não é possível que um sistema linear tenha soluções soluções). Um sistema linear é dito incompatível se não admite soluções.  Exemplos geométicos são importantes, por exemplo, em computação gráfica. para determinar se algo movendo-se em linha reta (como um projétil em um jogo ou um raio de luz em uma animação *ray tracing) precisamos calcular o ponto de interseção de uma reta com um triângulo (pedaço de plano).  Considere as retas dadas pelas equações:  2y-3x =1,  y + 2x =2,  -2y-4x =a,  encontre os pontos de interseção dos pares de retas 1. e 2.; 2. e 3. para e 2. e 3. para .  Utilize o código abaixo para plotar as retas do exercício .   Utilize o código abaixo para verificar se as soluções encontradas no estão corretas.   Os pontos que estão em um plano no espaço pode ser determinado pelo vetor normal ao plano e por um ponto satisfazem a equação:   A equação cartesiana do plano com normal e que passa pelo ponto é    Podemos tentar o processo contrário: dada uma equação como determinar o plano que contém todas as soluções? Considerando uma equação da forma sabemos que o vetor normal é e podemos usar como ponto do plano qualquer valores que satisfaçam a equação acima. Se , por exemplo, podemos tomar .  As soluções de sistemas lineares de três variáveis correspondem a interseções de planos no espaço, podendo ser um plano todo, uma reta, um ponto ou vazio.  Resolva o sistema a seguir manualmente. Em seguida utilize os códigos acima verificar se sua solução está correta e plotar o plano que contém as soluções.  Resolva o sistema a seguir manualmente. Em seguida utilize os códigos acima verificar se sua solução está correta e plotar o plano que contém as soluções.  Dois sistemas lineares são ditos equivalentes se possuem as mesmas soluções. Dado um sistema linear, podemos realizar três tipos de operações em suas linhas para obter sistemas equivalentes:  Trocar duas equações de lugar.  Multiplicar uma equação por um número real não nulo.  Substituir uma equação pela soma dela com um múltiplo não nulo de outra equação.     Todos os sistemas a seguir são equivalentes.   O último sistema está na forma triangular . Quando um sistema está na forma triângular, podemos determinar determinar o valor de uma variável e substituir seu valor nas outras equações para reduzir o número de variáveis. Repetimos esse processo até resolver o sistema.   Ao resolver um sistema, utilizamos uma variável com coeficiente não nulo em uma equação para remover essa mesma variável das demais equações. Repetimos o processo até ter uma única variável restante em uma das equações. Assim precisamos de pelo menos equações para eliminar variáveis. Se tivermos mais do que equações, podemos chegar a sistemas sem solução. Em muitos problemas reais o foco está em sistemas .     Matrizes representando sistemas lineares   Considere um sistema de equações lineares:   Para resolver o sistema precisamos dos coeficientes de cada variável. As variáveis são apenas nomes. Podemos deixar esses nomes de lado e formar matrizes associadas ao sistema.   A matriz de coeficientes do sistema :  O vetor coluna de constantes :  A matriz ampliada do sistema :   Podemos agregar quaisquer duas matrizes com o mesmo número de linhas. Dadas A matriz agregada  é a matriz     No sistema   A matriz de coeficientes do sistema:   O vetor coluna de constantes:   A matriz ampliada do sistema:    Para resolver o sistema linear podemos operar nas linhas da matriz ampliada. Os coeficientes da -ésima coluna correspondem aos coeficientes de nas respectivas equações. Podemos realizar três tipos de operações ( operações elementares ) nas linhas da matriz ampliada:   Trocar duas linhas de lugar.  Multiplicar uma linha por um número real não nulo.  Substituir uma linha pela soma dela com um múltiplo não nulo de outra linha.   O objetivo dessas operações é colocar a matriz ampliada na forma escada.     forma escada    Uma matriz está na forma escada se:   o primeiro elemento não nulo de cada linha é 1;  se a linha não é nula, o número de zeros no início da linha é menor do que o número de zeros no início da linha , ;  as linhas nulas estão abaixo das demais.     O código a seguir pode ser utilizado para colocar a matriz do na forma escada utilizando as operações elementares.    A estratégia utilizada para colocar uma matriz na forma escada consiste trocar linhas para ter um elemento não nulo no canto superior esquerdo. Depois dividimoa a linha por esse elemento para que o elemento no canto superior esquerdo seja 1. Em seguida, utilizamos operações elementares do tipo 3. para zerar os elementos das outras linhas naquela coluna.  Em seguida tentamos repetir esse processo para a segunda coluna. Caso todos os elementos da segunda coluna tenham zerado na primeira etapa, partimos para a terceira coluna. Repetimos isso até chegar à última coluna. Esse processo é chamado de eliminação Gaussiana ou de colocar a matriz na forma escada .   Ao colocarmos uma matriz na forma escada, a posição do primeiro elemento não nulo obtido em uma linha é chamado de pivô daquela linha se todos os elementos na mesma coluna e abaixo dele são nulos.   Pivôs em diversas linhas:    Após realizarmos a eliminação Gaussiana, podemos fazer a substituição reversa para encontrar os valores das variáveis (podem depender de algumas variáveis livres), iniciando pela última equação e substituindo os valores encontrados nas demais equações. O código abaixo permite fazer isso para uma matriz que já tenha passado pela eliminação Gaussiana.    O sistema  tem matriz ampliada de modo que , e   Utilize a eliminação Gaussiana seguida da substituição reversa para resolver os sistemas a seguir. Mostre os passos das contas que realizar. Em seguida compare os resultados obtidos com os resultados apresentados pelo computador nos códigos acima.  Sistema 1   Sistema 2   Sistema 3   Sistema 4    Circuitos elétricos. Livro do Leon, pág. 18.  Encontre as correntes no circuito da imagem.  Circuito RC (fonte Leon)       Redução de Gauss Jordan  Na seção enterior vimos como utilizar a eliminação Gaussiana na matriz ampliada de um sistema para colocá-la na forma escada e, em seguida resolver o sistema utilizando substituição reversa. Alternativamente, poderíamos seguir fazendo operações elementares nas linhas da matriz ampliada para zerar coeficientes acima de um pivô.   O sistema  tem matriz ampliada assim o sistema tem solução única .     O sistema  tem matriz ampliada assim o sistema tem infinitas soluções .   O sistema  tem matriz ampliada assim o sistema não tem solução, pois a última equação implica em .     forma escada reduzida    A matriz está na forma escada reduzida por linhas se:   está na forma escada;  o único elemento não nulo de uma coluna com um pivô é o elemento na posição do pivô.     Chamamos de redução de Gauss-Jordan o processo de usar operações elementares nas linhas de uma matriz para encontrar uma matriz equivalente por linhas na forma escada reduzida por linhas.   As matrizes a seguir estão na forma escada reduzida por linhas:     As matrizes a seguir não estão na forma escada reduzida por linhas:    O diagrama abaixo representa o fluxo de veículos em algumas ruas de uma cidade. Os círculos azuis representam cruzamentos. Os números e variáveis ( ) representam a quantidade de carros entrando e saindo dos cruzamentos mostrados (em carros por hora). O número de carros que entra (por hora) em cada cruzamento é igual ao número de carros que sai.  Diagrama de tráfego.    Escreva um sistema que represente o diagrama.  Resolva o sistema encontrado utilizando a redução de Gauss-Jordan.  Determine o fluxo em cada rua para .  Se a entrade de carros no cruzamento inferior esquerdo mudar para 200 carros por hora e no ccanto superior direito para 500 carros por hora, qual o valor dos demais fluxos (mantendo ).  Refaça o item anterior para o caso de revertermos a direção de .   Encontre matrizes equivalentes por linha às matrizes seguintes, que estejam na forma escada reduzida por linhas.   "
},
{
  "id": "sis-lin-sub-2",
  "level": "2",
  "url": "sistemas-lineares.html#sis-lin-sub-2",
  "type": "Definition",
  "number": "1.1",
  "title": "",
  "body": "   sistemas lineares   Uma equação linear em variáveis é uma equação da forma onde são constantes reais (ou complexas) chamadas de coeficientes do sistema . Um sistema de equações lineares é um conjunto de em variáveis. Encontrar uma solução do sistema (ou resolver o sistema) é determinar um conjunto de valores para as variáveis, de modo que todas as equações sejam satisfeitas simultaneamente.  "
},
{
  "id": "sis-lin-sub-3",
  "level": "2",
  "url": "sistemas-lineares.html#sis-lin-sub-3",
  "type": "Example",
  "number": "1.2",
  "title": "",
  "body": "O sistema  pode ser resolvido somando ou subtraindo múltiplos de uma equação nas outras linhas eliminando variáveis (denotando para a primeira equação e para a segunda) e substituindo valores encontrados.  "
},
{
  "id": "sis-lin-sub-4",
  "level": "2",
  "url": "sistemas-lineares.html#sis-lin-sub-4",
  "type": "Example",
  "number": "1.3",
  "title": "",
  "body": "Podemos tentar resolver o sistema  encontrando Chegando a uma contradição. De modo que o sistema não tem solução. "
},
{
  "id": "sis-lin-sub-5",
  "level": "2",
  "url": "sistemas-lineares.html#sis-lin-sub-5",
  "type": "Example",
  "number": "1.4",
  "title": "",
  "body": "O sistema  pode ser resolvido somando ou subtraindo múltiplos de uma equação nas outras linhas eliminando variáveis e substituindo valores encontrados. de modo que para cada valor de uma solução distinta e, assim, infinitas soluções. "
},
{
  "id": "sis-lin-sub-6",
  "level": "2",
  "url": "sistemas-lineares.html#sis-lin-sub-6",
  "type": "Remark",
  "number": "1.5",
  "title": "",
  "body": "Um sistema linear é dito compatível se admite soluções. Sistemas compatíveis podem ter solução única ou infinitas soluções (Não é possível que um sistema linear tenha soluções soluções). Um sistema linear é dito incompatível se não admite soluções. "
},
{
  "id": "line_inters",
  "level": "2",
  "url": "sistemas-lineares.html#line_inters",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "",
  "body": "Considere as retas dadas pelas equações:  2y-3x =1,  y + 2x =2,  -2y-4x =a,  encontre os pontos de interseção dos pares de retas 1. e 2.; 2. e 3. para e 2. e 3. para . "
},
{
  "id": "sis-lin-sub-9",
  "level": "2",
  "url": "sistemas-lineares.html#sis-lin-sub-9",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "",
  "body": "Utilize o código abaixo para plotar as retas do exercício . "
},
{
  "id": "sis-lin-sub-11",
  "level": "2",
  "url": "sistemas-lineares.html#sis-lin-sub-11",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "",
  "body": "Utilize o código abaixo para verificar se as soluções encontradas no estão corretas. "
},
{
  "id": "sis-lin-sub-15",
  "level": "2",
  "url": "sistemas-lineares.html#sis-lin-sub-15",
  "type": "Example",
  "number": "1.9",
  "title": "",
  "body": "A equação cartesiana do plano com normal e que passa pelo ponto é  "
},
{
  "id": "sis-lin-sub-19",
  "level": "2",
  "url": "sistemas-lineares.html#sis-lin-sub-19",
  "type": "Checkpoint",
  "number": "1.10",
  "title": "",
  "body": "Resolva o sistema a seguir manualmente. Em seguida utilize os códigos acima verificar se sua solução está correta e plotar o plano que contém as soluções. "
},
{
  "id": "sis-lin-sub-20",
  "level": "2",
  "url": "sistemas-lineares.html#sis-lin-sub-20",
  "type": "Checkpoint",
  "number": "1.11",
  "title": "",
  "body": "Resolva o sistema a seguir manualmente. Em seguida utilize os códigos acima verificar se sua solução está correta e plotar o plano que contém as soluções. "
},
{
  "id": "sis-lin-sub-21",
  "level": "2",
  "url": "sistemas-lineares.html#sis-lin-sub-21",
  "type": "Remark",
  "number": "1.12",
  "title": "",
  "body": "Dois sistemas lineares são ditos equivalentes se possuem as mesmas soluções. Dado um sistema linear, podemos realizar três tipos de operações em suas linhas para obter sistemas equivalentes:  Trocar duas equações de lugar.  Multiplicar uma equação por um número real não nulo.  Substituir uma equação pela soma dela com um múltiplo não nulo de outra equação.   "
},
{
  "id": "sis-lin-sub-22",
  "level": "2",
  "url": "sistemas-lineares.html#sis-lin-sub-22",
  "type": "Example",
  "number": "1.13",
  "title": "",
  "body": " Todos os sistemas a seguir são equivalentes.   O último sistema está na forma triangular . Quando um sistema está na forma triângular, podemos determinar determinar o valor de uma variável e substituir seu valor nas outras equações para reduzir o número de variáveis. Repetimos esse processo até resolver o sistema.  "
},
{
  "id": "matrix-sis-lin-6",
  "level": "2",
  "url": "sistemas-lineares.html#matrix-sis-lin-6",
  "type": "Remark",
  "number": "1.14",
  "title": "",
  "body": "Podemos agregar quaisquer duas matrizes com o mesmo número de linhas. Dadas A matriz agregada  é a matriz   "
},
{
  "id": "gauss_example",
  "level": "2",
  "url": "sistemas-lineares.html#gauss_example",
  "type": "Example",
  "number": "1.15",
  "title": "",
  "body": " No sistema   A matriz de coeficientes do sistema:   O vetor coluna de constantes:   A matriz ampliada do sistema:   "
},
{
  "id": "matrix-sis-lin-8",
  "level": "2",
  "url": "sistemas-lineares.html#matrix-sis-lin-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "operações elementares "
},
{
  "id": "matrix-sis-lin-11",
  "level": "2",
  "url": "sistemas-lineares.html#matrix-sis-lin-11",
  "type": "Definition",
  "number": "1.16",
  "title": "",
  "body": "   forma escada    Uma matriz está na forma escada se:   o primeiro elemento não nulo de cada linha é 1;  se a linha não é nula, o número de zeros no início da linha é menor do que o número de zeros no início da linha , ;  as linhas nulas estão abaixo das demais.    "
},
{
  "id": "matrix-sis-lin-14",
  "level": "2",
  "url": "sistemas-lineares.html#matrix-sis-lin-14",
  "type": "Remark",
  "number": "1.17",
  "title": "",
  "body": " A estratégia utilizada para colocar uma matriz na forma escada consiste trocar linhas para ter um elemento não nulo no canto superior esquerdo. Depois dividimoa a linha por esse elemento para que o elemento no canto superior esquerdo seja 1. Em seguida, utilizamos operações elementares do tipo 3. para zerar os elementos das outras linhas naquela coluna.  Em seguida tentamos repetir esse processo para a segunda coluna. Caso todos os elementos da segunda coluna tenham zerado na primeira etapa, partimos para a terceira coluna. Repetimos isso até chegar à última coluna. Esse processo é chamado de eliminação Gaussiana ou de colocar a matriz na forma escada .  "
},
{
  "id": "matrix-sis-lin-15",
  "level": "2",
  "url": "sistemas-lineares.html#matrix-sis-lin-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pivô "
},
{
  "id": "matrix-sis-lin-16",
  "level": "2",
  "url": "sistemas-lineares.html#matrix-sis-lin-16",
  "type": "Example",
  "number": "1.18",
  "title": "",
  "body": " Pivôs em diversas linhas:   "
},
{
  "id": "matrix-sis-lin-17",
  "level": "2",
  "url": "sistemas-lineares.html#matrix-sis-lin-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "substituição reversa "
},
{
  "id": "matrix-sis-lin-19",
  "level": "2",
  "url": "sistemas-lineares.html#matrix-sis-lin-19",
  "type": "Example",
  "number": "1.19",
  "title": "",
  "body": " O sistema  tem matriz ampliada de modo que , e  "
},
{
  "id": "matrix-sis-lin-20",
  "level": "2",
  "url": "sistemas-lineares.html#matrix-sis-lin-20",
  "type": "Checkpoint",
  "number": "1.20",
  "title": "",
  "body": "Utilize a eliminação Gaussiana seguida da substituição reversa para resolver os sistemas a seguir. Mostre os passos das contas que realizar. Em seguida compare os resultados obtidos com os resultados apresentados pelo computador nos códigos acima.  Sistema 1   Sistema 2   Sistema 3   Sistema 4   "
},
{
  "id": "matrix-sis-lin-21",
  "level": "2",
  "url": "sistemas-lineares.html#matrix-sis-lin-21",
  "type": "Example",
  "number": "1.21",
  "title": "",
  "body": "Circuitos elétricos. Livro do Leon, pág. 18. "
},
{
  "id": "matrix-sis-lin-22",
  "level": "2",
  "url": "sistemas-lineares.html#matrix-sis-lin-22",
  "type": "Checkpoint",
  "number": "1.22",
  "title": "",
  "body": "Encontre as correntes no circuito da imagem.  Circuito RC (fonte Leon)   "
},
{
  "id": "Gauss-Jordan-red-3",
  "level": "2",
  "url": "sistemas-lineares.html#Gauss-Jordan-red-3",
  "type": "Example",
  "number": "1.24",
  "title": "",
  "body": " O sistema  tem matriz ampliada assim o sistema tem solução única . "
},
{
  "id": "Gauss-Jordan-red-6",
  "level": "2",
  "url": "sistemas-lineares.html#Gauss-Jordan-red-6",
  "type": "Example",
  "number": "1.25",
  "title": "",
  "body": " O sistema  tem matriz ampliada assim o sistema tem infinitas soluções . "
},
{
  "id": "Gauss-Jordan-red-7",
  "level": "2",
  "url": "sistemas-lineares.html#Gauss-Jordan-red-7",
  "type": "Example",
  "number": "1.26",
  "title": "",
  "body": " O sistema  tem matriz ampliada assim o sistema não tem solução, pois a última equação implica em . "
},
{
  "id": "Gauss-Jordan-red-8",
  "level": "2",
  "url": "sistemas-lineares.html#Gauss-Jordan-red-8",
  "type": "Definition",
  "number": "1.27",
  "title": "",
  "body": "   forma escada reduzida    A matriz está na forma escada reduzida por linhas se:   está na forma escada;  o único elemento não nulo de uma coluna com um pivô é o elemento na posição do pivô.    "
},
{
  "id": "Gauss-Jordan-red-9",
  "level": "2",
  "url": "sistemas-lineares.html#Gauss-Jordan-red-9",
  "type": "Remark",
  "number": "1.28",
  "title": "",
  "body": "Chamamos de redução de Gauss-Jordan o processo de usar operações elementares nas linhas de uma matriz para encontrar uma matriz equivalente por linhas na forma escada reduzida por linhas. "
},
{
  "id": "Gauss-Jordan-red-10",
  "level": "2",
  "url": "sistemas-lineares.html#Gauss-Jordan-red-10",
  "type": "Example",
  "number": "1.29",
  "title": "",
  "body": " As matrizes a seguir estão na forma escada reduzida por linhas:   "
},
{
  "id": "Gauss-Jordan-red-11",
  "level": "2",
  "url": "sistemas-lineares.html#Gauss-Jordan-red-11",
  "type": "Example",
  "number": "1.30",
  "title": "",
  "body": " As matrizes a seguir não estão na forma escada reduzida por linhas:   "
},
{
  "id": "Gauss-Jordan-red-12",
  "level": "2",
  "url": "sistemas-lineares.html#Gauss-Jordan-red-12",
  "type": "Checkpoint",
  "number": "1.31",
  "title": "",
  "body": "O diagrama abaixo representa o fluxo de veículos em algumas ruas de uma cidade. Os círculos azuis representam cruzamentos. Os números e variáveis ( ) representam a quantidade de carros entrando e saindo dos cruzamentos mostrados (em carros por hora). O número de carros que entra (por hora) em cada cruzamento é igual ao número de carros que sai.  Diagrama de tráfego.    Escreva um sistema que represente o diagrama.  Resolva o sistema encontrado utilizando a redução de Gauss-Jordan.  Determine o fluxo em cada rua para .  Se a entrade de carros no cruzamento inferior esquerdo mudar para 200 carros por hora e no ccanto superior direito para 500 carros por hora, qual o valor dos demais fluxos (mantendo ).  Refaça o item anterior para o caso de revertermos a direção de .  "
},
{
  "id": "Gauss-Jordan-red-13",
  "level": "2",
  "url": "sistemas-lineares.html#Gauss-Jordan-red-13",
  "type": "Checkpoint",
  "number": "1.33",
  "title": "",
  "body": "Encontre matrizes equivalentes por linha às matrizes seguintes, que estejam na forma escada reduzida por linhas. "
},
{
  "id": "Matrices",
  "level": "1",
  "url": "Matrices.html",
  "type": "Section",
  "number": "2",
  "title": "Matrizes",
  "body": " Matrizes   Utilizamos matrizes ampliadas para resolver sistemas lineares nas seções anteriores. Nessa seção começamos a explorar outras aplicações de matrizes para estudar e resolver sistemas lineares. Ao fazer isso estamos criando uma estrutura que nos permite estudar transformações lineares e susas diversas aplicações.    Matrizes e operações  Nessa seção formalizamos o conceito de matriz (que já temos utilizados) e como realizar operações aritméticas com elas.     matriz    Uma matriz   é um arranjo de números (reais ou complexos, usualmente) em linhas com números cada.   Denotamos de o número que está na -ésima linha e -ésima coluna e dizemos o elemento  da matriz .  As matrizes são chamadas de vetores (coluna) e denotadas :   Uma matriz é um vetor linha : .       operações elementares    Duas matrizes e , ambas , são iguais se para todo , . Por outro lado, se existem tais que ou se as matrizes têm dimensões diferentes.  A soma de duas matrizes e , ambas , é a matriz , , definida por . (somamos apenas matrizes com o mesmo número de linhas e colunas) Análogo para subtração.  O produto de um número real  e uma matriz  , , é a matriz  , definida por .  O produto de uma matriz , , e outra matriz , , é a matriz  , definida por . (o número de colunas de precisa ser igual ao número de linhas de ).  A -ésima potência de uma matriz quadrada , , é a matriz (o prudoto de cópias da matriz ).     Sejam    Determine se é possível realizar as seguintes operações. Caso seja, determine o resultado   ;  ;  ;  ;  ;  ;  ;     Os códigos a seguir podem ser utilizados para realizar operações básicas com matrizes.  Matrizes no Python.   Matrizes de zeros e uns.   Mostrar linhas ou elementos.   Soma e produto.   Sejam Determine se é possível realizar as seguintes operações. Caso seja, determine o resultado             Para as matrizes   temos    Para as matrizes calcule   No estudo de uma doença consideramos as pessoas de uma determinada população divididas em 3 grupos: saudáveis (S), doentes (D) e resistentes (R). Suponha que temos uma população inicial de 90.000 S e 10.000 D. Além disso suponha que, a cada ciclo da doença, das pessoas saudáveis ficam doentes, nenhuma adquire resistência antes de ficar doente, das doentes morrem, das doentes se recuperam e adquirem resistência, as outras doentes continuam doentes, das pessoas com resistência permanece com a resistência e das pessoas com resistência, perde a resistência (mas continua saudável).  Qual o total de pessoas em cada categoria (SDR) após 1 ciclo, após 2 ciclos, após 10 ciclos e após 50 ciclos?   No estudo de uma doença consideramos as pessoas de uma determinada população divididas em 3 grupos: saudáveis (S), doentes (D) e resistentes (R). Suponha que temos uma população inicial de 90.000 S e 10.000 D. Além disso suponha que, a cada ciclo da doença, das pessoas saudáveis ficam doentes, nenhuma adquire resistência antes de ficar doente, das doentes morrem, das doentes se recuperam, das doentes se recuperam adquirem resistência, as outras doentes continuam doentes, das pessoas com resistência permanece com a resistência e das pessoas com resistência, perde a resistência (mas continua saudável). Qual o total de pessoas em cada categoria (SDR) após 1 ciclo, após 2 ciclos, após 10 ciclos e após 50 ciclos?     Representação Matricial e Multiplicação de Matrizes  Observamos no exemplo que   desse modo, o sistema linear   é equivalente à equação matricial   onde é o nome que damos ao vetor . Assim um sistema linear pode ser escrito na forma . Chamamos essa forma de forma matricial do sistema . Isso é particularmente importante pois é análogo à equação linear , cuja solução é .   Propriedades das operações básicas    Dados e matrizes e . Então, se as operaçõesa seguir estiverem definidas (as dimensões das matrizes forem adequadas para permitir as operações), vale:                             A demonstração baseia-se em efetuar as operações nos coeficientes e fica a aorgo do leitor como exercício opcional.   Para cada uma das propriedades no , dê exemplos de constantes e matrizes para as quais as operações fazem sentido. Em seguida calcule o lado esquerdo e o lado direito de cada igualdade e verifique que o mesmo resultado é obtido. Verifique seua cálculos utilizando os códigos em python.  Os produtos matriciais e só fazem sentido se ambas e são matrizes quadradas de mesma dimensão . Todavia em geral.  Defina matrizes , , tais que e calcule e . Em seguida comprove seus cálculos utilizando o computador.     transposta    Seja uma matrix . A transposta de , denotada é a matriz , definida através de .      Para , a transposta é a matriz .  Para , a transposta é a matriz .  Para , a transposta é a matriz .       simétrica    Se , dizemos que é uma matriz simétrica .     Propriedades da transposta    Dados e matrizes . Então, se as operaçõesa seguir estiverem definidas (as dimensões das matrizes forem adequadas para permitir as operações), vale:                 A demonstração baseia-se em efetuar as operações nos coeficientes e fica a aorgo do leitor como exercício opcional.   Para cada uma das propriedades no , dê exemplos de constantes e matrizes para as quais as operações fazem sentido. Em seguida calcule o lado esquerdo e o lado direito de cada igualdade e verifique que o mesmo resultado é obtido. Verifique seua cálculos utilizando os códigos em python.     identidade    A matrix identidade, , , , onde , se , e , se .         Sejam a matriz identidade , uma matriz e uma matriz           A demonstração baseia-se em efetuar as operações nos coeficientes e fica a aorgo do leitor como exercício opcional.      inversa    Uma matrix , , é inversível (também chamada de não singular ) se existe uma matriz , , tal que . é dita a matriz inversa de e denotada .      Para a inversa é matriz pois .  Para a inversa é matriz pois .    Se , então a matriz é inversível e Como pode ser verificado diretamente calculando e .  Um sistema linear escrito na forma matricial , pode ser resolvido multiplicando à esquerda ambos os lados da equação por , se é inversível:    Escreva o sistema abaixo na forma matricial, , calcule , e resolva o sistema calculando . Compare suas soluções com os resultados obtidos pelo método de Gauss-Jordan.  Escreva o sistema abaixo na forma matricial, , calcule , e resolva o sistema calculando . Compare suas soluções com os resultados obtidos pelo método de Gauss-Jordan.    Matrizes elementares  Observe as seguintes multiplicações matriciais e tente descrever o efeito que as matrizes à esquerda têm sobre as matrizes à direita.       Observe as seguintes multiplicações matriciais e tente descrever o efeito que as matrizes à esquerda têm sobre as matrizes à direita.       Uma matriz elementar do tipo I é obtida trocando duas linhas da matriz identidade . Com frequência denotamos uma matriz elementar do tipo I por ou para indicar que trocamos a linha pela linha . Multiplicar uma matriz por à esquerda, ou seja, calcular , tem o efeito de trocar as duas linhas da matriz correspondentes às linhas trocadas na matriz .     Uma matriz elementar do tipo II é obtida multiplicando uma linha da matriz identidade por uma constante não nula. Com frequência denotamos uma matriz elementar do tipo II por ou para indicar que multiplicamos a linha por . Multiplicar uma matriz por à esquerda, ou seja, calcular , tem o efeito de multiplicar pela constatne a linha da matriz correspondente.     Uma matriz elementar do tipo III é obtida somando uma linha da matriz identidade a uma outra linha multiplicada por uma constante não nula. Com frequência denotamos uma matriz elementar do tipo III por ou para indicar que somamos a linha multiplicada por à linha . Multiplicar uma matriz por à esquerda, ou seja, calcular , tem o efeito de adicionar a linha da matriz outra linha multiplicada por uma constante.     Multiplicar por uma matriz elementar à esquerda corresponde a realizar uma das operações elementares nas linhas da matriz .      As matrizes elementares do tipo I, II e III são inversíveis. Além disso    Verificamos diretamente efetuando as multiplicações.   Encontre as inversas das matrizes a seguir e verifique que a resposta está correta calculando o produto da matriz original com a matriz inversa.      Se for possível realizar operações nas linhas de uma matriz até transformá-la na identidade, existem matrizes elementares (correspondentes às operações realizadas) tais que:   ou seja, ao multiplicar por à esquerda obtemos a identidade. Assim .  Por outro lado, observe que se calcularmos o produto de com a matriz ampliada temos:   Ou seja, ao aplicarmos eliminação de Gauss-Jordan à matriz ampliada , obteremos a inversa de no lado direito, quando tivermos a matriz identidade no lado esquerdo.  Utilize o método da Gauss-Jordan para encontrar as inversas das matrizes a seguir, se possível:                 Verifique, calculando o produto, que as matrizes obtidas no exercício anterios são, de fato, inversas.      Determinantes     determinante    Seja uma matriz . A submatriz  é a matriz obtida removendo a -ésima linha e a -ésima coluna de A. Definimos, recursivamente, o determinante de , ou , por:   Se é uma matriz , , .  Supondo que está definido o determinante de uma matriz , definimos o determinante de uma matriz , , como:    Para cada , chamamos o número de cofator do elemento . A soma acima é chamada de expansão em cofatores pela primeira linha de .     Seja     Seja     Seja     Seja        O determinante de uma matriz pode ser calculado através da expansão em cofatores por qualquer linha ou por qualquer coluna de :   para qualquer   A completar.    Seja    Calcule o determinante de cada uma das matrizes a seguir duas vezes, utilizando a expansão em cofatores da linha e da coluna . Após utilize o código abaixo para conferir seus resultados.    Propriedades do determinante    Seja uma matriz :   Se trocarmos duas linhas de de lugar, o determinante troca de sinal, ou seja: .  Se multiplicamos uma linha de por uma constante não nula, o determinante é multiplicado por , ou seja: .  Se somamos a uma linha de outra linha multiplicada por uma constante, o determinante não se altera, ou seja: .  .  Se tem duas linhas ou duas colunas iguais, .  Se tem uma linha nula ou uma coluna nula, .  Se é uma matriz , .    A completar.   Para cada uma das propriedades acima, construa exemplos de matrizes verificando que as propriedades se aplicam. Verifique seus cálculos utilizando os códigos em python disponibilizados.   Chamamos de adjunta de uma matriz , e denotamos , à matriz de cofatores de transposta. onde é o cofator associado ao elemento da matriz .      Uma matriz é inversível se, e somente se, . Além disso, se é inversível,    A completar.    Cálculo da matriz inversa utilizando a matriz de cofatores:    Calcule as inversas das matrizes a seguir pelo método dos cofatores e utilize o código abaixo para verificar se suas respostas estão corretas.      Aplicação: mensagens codificadas  Mandar mensagens em código é fundamental na sociedade moderna. Não queremos que nossas mensagens privadas sejam vistas por estranhos na internet, que eles tenham acesso a imagens privadas, dados pessoas ou informações detalhadas sobre nossa saúde. A privacidade de outras informações é relevante por questões de segurança, como dados financeiros (incluindo senhas), endereços e outras.  Existem diversas formas de codificar mensagens. A maneira mais simples seja, talvez, simplesmente trocar letras por números (na lista abaixo representa um espaço):   Assim a mensagem SEGUE O BARCO seria codificada por [19., 5., 7., 21., 5., 0., 15., 0., 2., 1., 18., 3., 15.]. O código abaixo pode ser utizado para codificar uma mensagem assim.   Podemos desfazer essa operação com o código a seguir:   Escreva uma mensagem curta (pode ser uma palavra apenas), converta a mensagem em números manualmente e verifique que os \"outputs\" dos códigos acima correspondem ao que você obteve para a sua mensagem.  Esse código seria fácil de ser quebrado, podemos melhorá-lo se embaralharmos as letras. Para isso precisamos criar um mapa que troca as posições dos números na lista . Uma maneira de fazer isso é multiplicar o vetor coluna por uma matriz de permutação , que é obtida trocando linhas das matriz identidade. Por exemplo, para trocar as posições das letras para multiplicamos à esquerda o vetor pela matriz de permutação a seguir, obtendo o vetor indicando a posição na lista dos símbolos respectivamente:   Desse modo a palavra \"ABA\", ficaria codificada como \"[2, 0, 2]\". Podemos fazer um código que codifique uma mensagem trocando letras do seguinte modo:    A inversa de uma matriz de permutações é igual a sua transposta (isso não vale para qualquer matriz).  Alguém que conheça a permutação que utilizamos pode desfazer a codificação multiplicando à esquerda o vetor pela inversa (= transposta, nesse caso) da matriz de permutação.   O código a seguir desfaz a permutação para decodificar a mensagem:   (Em dupla) Crie uma mensagem, codifique-a utilizando uma matriz de permutações e envie a matriz e a mensagem cifrada para um colega. Receba uma mensagem cifrada e a respectiva matriz de permutações de um colega e decodifique-a.  Outra maneira de tentar encriptar uma mensagem seria utilizar uma matriz para embaralhá-la. Começamos com uma mensagem, substituímos as letras por números, quebramos a lista de números em linhas (preenchendo com zeros no final, se necessário). Multiplicamos à esquerda o resultado por uma matriz inversível (conhecida pelo remetente (nós) e pelo destinatário). O destinatário multiplica à esquerda o dado enviado e pode desfazer o código.  Por exemplo, a palavra seria codificada como , que poderia ser quebrada em 3 linhas formando a matriz  Em seguida multiplicaríamos essa matriz por uma matriz inversível (combinada entre as partes), por exemplo: Então enviamos a mensagem criptografada, : O destinatário multiplica essa matriz à esquerda por para retornar a matriz original e conseguir desvendar o código.  Os códigos a seguir prepara a mensagem para enviar.    O código a seguir desfaz multiplicação matricial e decodifica a mensagem:   (Em dupla) Crie uma mensagem, codifique-a utilizando uma matriz secreta e envie a matriz e a mensagem cifrada para um colega. Receba uma mensagem cifrada e a respectiva secreta de um colega e decodifique-a.     Decomposição LU     matriz triângular    Uma matriz é dita triângular superior se para .  Uma matriz é dita triângular inferior se para .  Dizemos que é triângular se ela for triângular superior ou triângular inferior.  Uma matriz é dita diagonal se para .     Matrizes triangulares inferiores:     Matrizes triangulares superiores:     Matrizes diagonais:     Todas as matrizes dos três exemplos anteriores são triângulares.  Muitas matrizes podem ser decompostas como o produto de uma matriz triângular inferior e uma matriz triângular superior, Observe que, por exemplo, a matriz   é igual ao produto das matrizes:       O produto de duas matrizes triângulares superiores é uma matriz triângular superior.  O produto de duas matrizes triângulares inferiores é uma matriz triângular inferior.  O produto de duas matrizes diagonais é uma matriz diagonal.      Vamos realizar operações elementares do tipo III na matriz a seguir para \"transformá-la\" em uma matriz triângular superior.   Todavia as operações elementares realizadas têm o mesmo efeito que multiplicar pelas seguintes matrizes elementares.   Ou seja, encontramos que , o que é equivalente à . Todavia:   Assim, , com:   Escreva a matriz a seguir como o produto de uma matriz triângular inferior e uma matriz triângular superior.  Escreva a matriz a seguir como o produto de uma matriz triângular inferior e uma matriz triângular superior.  Se temos um sistema linear escrito na forma matricial e temos a decomposição  , podemos definir e resolver   onde a solução de cada um desses sistemas é encontrada, simplesmente, por substituição reversa.  Vamos resolver o exemplo.   Resolva o sistema linear utilizando decomposição LU:  Resolva o sistema linear utilizando decomposição LU:  Infelizmente nem toda a matriz pode ser decomposta em . Existe uma variante desse método, chamada de decomposição , onde é uma matriz de permutação. Nesse caso, para resolver , multiplicaríamos por P ambos os lados e teríamos . Que pode ser resolvido pelo método acima.   "
},
{
  "id": "matrizes_operacoes-3",
  "level": "2",
  "url": "Matrices.html#matrizes_operacoes-3",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": "   matriz    Uma matriz   é um arranjo de números (reais ou complexos, usualmente) em linhas com números cada.   Denotamos de o número que está na -ésima linha e -ésima coluna e dizemos o elemento  da matriz .  As matrizes são chamadas de vetores (coluna) e denotadas :   Uma matriz é um vetor linha : .   "
},
{
  "id": "matrizes_operacoes-4",
  "level": "2",
  "url": "Matrices.html#matrizes_operacoes-4",
  "type": "Definition",
  "number": "2.2",
  "title": "",
  "body": "   operações elementares    Duas matrizes e , ambas , são iguais se para todo , . Por outro lado, se existem tais que ou se as matrizes têm dimensões diferentes.  A soma de duas matrizes e , ambas , é a matriz , , definida por . (somamos apenas matrizes com o mesmo número de linhas e colunas) Análogo para subtração.  O produto de um número real  e uma matriz  , , é a matriz  , definida por .  O produto de uma matriz , , e outra matriz , , é a matriz  , definida por . (o número de colunas de precisa ser igual ao número de linhas de ).  A -ésima potência de uma matriz quadrada , , é a matriz (o prudoto de cópias da matriz ).   "
},
{
  "id": "matrizes_operacoes-5",
  "level": "2",
  "url": "Matrices.html#matrizes_operacoes-5",
  "type": "Example",
  "number": "2.3",
  "title": "",
  "body": " Sejam    Determine se é possível realizar as seguintes operações. Caso seja, determine o resultado   ;  ;  ;  ;  ;  ;  ;    "
},
{
  "id": "matrizes_operacoes-15",
  "level": "2",
  "url": "Matrices.html#matrizes_operacoes-15",
  "type": "Checkpoint",
  "number": "2.4",
  "title": "",
  "body": "Sejam Determine se é possível realizar as seguintes operações. Caso seja, determine o resultado           "
},
{
  "id": "rep_matrix",
  "level": "2",
  "url": "Matrices.html#rep_matrix",
  "type": "Example",
  "number": "2.5",
  "title": "",
  "body": " Para as matrizes   temos   "
},
{
  "id": "matrizes_operacoes-17",
  "level": "2",
  "url": "Matrices.html#matrizes_operacoes-17",
  "type": "Checkpoint",
  "number": "2.6",
  "title": "",
  "body": "Para as matrizes calcule "
},
{
  "id": "matrizes_operacoes-18",
  "level": "2",
  "url": "Matrices.html#matrizes_operacoes-18",
  "type": "Example",
  "number": "2.7",
  "title": "",
  "body": " No estudo de uma doença consideramos as pessoas de uma determinada população divididas em 3 grupos: saudáveis (S), doentes (D) e resistentes (R). Suponha que temos uma população inicial de 90.000 S e 10.000 D. Além disso suponha que, a cada ciclo da doença, das pessoas saudáveis ficam doentes, nenhuma adquire resistência antes de ficar doente, das doentes morrem, das doentes se recuperam e adquirem resistência, as outras doentes continuam doentes, das pessoas com resistência permanece com a resistência e das pessoas com resistência, perde a resistência (mas continua saudável).  Qual o total de pessoas em cada categoria (SDR) após 1 ciclo, após 2 ciclos, após 10 ciclos e após 50 ciclos?  "
},
{
  "id": "matrizes_operacoes-19",
  "level": "2",
  "url": "Matrices.html#matrizes_operacoes-19",
  "type": "Checkpoint",
  "number": "2.8",
  "title": "",
  "body": "No estudo de uma doença consideramos as pessoas de uma determinada população divididas em 3 grupos: saudáveis (S), doentes (D) e resistentes (R). Suponha que temos uma população inicial de 90.000 S e 10.000 D. Além disso suponha que, a cada ciclo da doença, das pessoas saudáveis ficam doentes, nenhuma adquire resistência antes de ficar doente, das doentes morrem, das doentes se recuperam, das doentes se recuperam adquirem resistência, as outras doentes continuam doentes, das pessoas com resistência permanece com a resistência e das pessoas com resistência, perde a resistência (mas continua saudável). Qual o total de pessoas em cada categoria (SDR) após 1 ciclo, após 2 ciclos, após 10 ciclos e após 50 ciclos? "
},
{
  "id": "Matrix_rep_mult-8",
  "level": "2",
  "url": "Matrices.html#Matrix_rep_mult-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "forma matricial do sistema "
},
{
  "id": "prop_op_matr",
  "level": "2",
  "url": "Matrices.html#prop_op_matr",
  "type": "Theorem",
  "number": "2.9",
  "title": "Propriedades das operações básicas.",
  "body": " Propriedades das operações básicas    Dados e matrizes e . Então, se as operaçõesa seguir estiverem definidas (as dimensões das matrizes forem adequadas para permitir as operações), vale:                             A demonstração baseia-se em efetuar as operações nos coeficientes e fica a aorgo do leitor como exercício opcional.  "
},
{
  "id": "Matrix_rep_mult-10",
  "level": "2",
  "url": "Matrices.html#Matrix_rep_mult-10",
  "type": "Checkpoint",
  "number": "2.10",
  "title": "",
  "body": "Para cada uma das propriedades no , dê exemplos de constantes e matrizes para as quais as operações fazem sentido. Em seguida calcule o lado esquerdo e o lado direito de cada igualdade e verifique que o mesmo resultado é obtido. Verifique seua cálculos utilizando os códigos em python. "
},
{
  "id": "Matrix_rep_mult-11",
  "level": "2",
  "url": "Matrices.html#Matrix_rep_mult-11",
  "type": "Remark",
  "number": "2.11",
  "title": "",
  "body": "Os produtos matriciais e só fazem sentido se ambas e são matrizes quadradas de mesma dimensão . Todavia em geral. "
},
{
  "id": "Matrix_rep_mult-12",
  "level": "2",
  "url": "Matrices.html#Matrix_rep_mult-12",
  "type": "Checkpoint",
  "number": "2.12",
  "title": "",
  "body": "Defina matrizes , , tais que e calcule e . Em seguida comprove seus cálculos utilizando o computador. "
},
{
  "id": "Matrix_rep_mult-13",
  "level": "2",
  "url": "Matrices.html#Matrix_rep_mult-13",
  "type": "Definition",
  "number": "2.13",
  "title": "",
  "body": "   transposta    Seja uma matrix . A transposta de , denotada é a matriz , definida através de .   "
},
{
  "id": "Matrix_rep_mult-14",
  "level": "2",
  "url": "Matrices.html#Matrix_rep_mult-14",
  "type": "Example",
  "number": "2.14",
  "title": "",
  "body": "  Para , a transposta é a matriz .  Para , a transposta é a matriz .  Para , a transposta é a matriz .   "
},
{
  "id": "Matrix_rep_mult-15",
  "level": "2",
  "url": "Matrices.html#Matrix_rep_mult-15",
  "type": "Definition",
  "number": "2.15",
  "title": "",
  "body": "   simétrica    Se , dizemos que é uma matriz simétrica .   "
},
{
  "id": "prop_transp",
  "level": "2",
  "url": "Matrices.html#prop_transp",
  "type": "Theorem",
  "number": "2.16",
  "title": "Propriedades da transposta.",
  "body": " Propriedades da transposta    Dados e matrizes . Então, se as operaçõesa seguir estiverem definidas (as dimensões das matrizes forem adequadas para permitir as operações), vale:                 A demonstração baseia-se em efetuar as operações nos coeficientes e fica a aorgo do leitor como exercício opcional.  "
},
{
  "id": "Matrix_rep_mult-17",
  "level": "2",
  "url": "Matrices.html#Matrix_rep_mult-17",
  "type": "Checkpoint",
  "number": "2.17",
  "title": "",
  "body": "Para cada uma das propriedades no , dê exemplos de constantes e matrizes para as quais as operações fazem sentido. Em seguida calcule o lado esquerdo e o lado direito de cada igualdade e verifique que o mesmo resultado é obtido. Verifique seua cálculos utilizando os códigos em python. "
},
{
  "id": "Matrix_rep_mult-18",
  "level": "2",
  "url": "Matrices.html#Matrix_rep_mult-18",
  "type": "Definition",
  "number": "2.18",
  "title": "",
  "body": "   identidade    A matrix identidade, , , , onde , se , e , se .    "
},
{
  "id": "Matrix_rep_mult-19",
  "level": "2",
  "url": "Matrices.html#Matrix_rep_mult-19",
  "type": "Theorem",
  "number": "2.19",
  "title": "",
  "body": "    Sejam a matriz identidade , uma matriz e uma matriz           A demonstração baseia-se em efetuar as operações nos coeficientes e fica a aorgo do leitor como exercício opcional.  "
},
{
  "id": "Matrix_rep_mult-20",
  "level": "2",
  "url": "Matrices.html#Matrix_rep_mult-20",
  "type": "Definition",
  "number": "2.20",
  "title": "",
  "body": "   inversa    Uma matrix , , é inversível (também chamada de não singular ) se existe uma matriz , , tal que . é dita a matriz inversa de e denotada .   "
},
{
  "id": "Matrix_rep_mult-21",
  "level": "2",
  "url": "Matrices.html#Matrix_rep_mult-21",
  "type": "Example",
  "number": "2.21",
  "title": "",
  "body": "  Para a inversa é matriz pois .  Para a inversa é matriz pois .   "
},
{
  "id": "Matrix_rep_mult-22",
  "level": "2",
  "url": "Matrices.html#Matrix_rep_mult-22",
  "type": "Remark",
  "number": "2.22",
  "title": "",
  "body": "Se , então a matriz é inversível e Como pode ser verificado diretamente calculando e . "
},
{
  "id": "Matrix_rep_mult-23",
  "level": "2",
  "url": "Matrices.html#Matrix_rep_mult-23",
  "type": "Remark",
  "number": "2.23",
  "title": "",
  "body": "Um sistema linear escrito na forma matricial , pode ser resolvido multiplicando à esquerda ambos os lados da equação por , se é inversível:  "
},
{
  "id": "Matrices-5",
  "level": "2",
  "url": "Matrices.html#Matrices-5",
  "type": "Checkpoint",
  "number": "2.24",
  "title": "",
  "body": "Escreva o sistema abaixo na forma matricial, , calcule , e resolva o sistema calculando . Compare suas soluções com os resultados obtidos pelo método de Gauss-Jordan. "
},
{
  "id": "Matrices-6",
  "level": "2",
  "url": "Matrices.html#Matrices-6",
  "type": "Checkpoint",
  "number": "2.25",
  "title": "",
  "body": "Escreva o sistema abaixo na forma matricial, , calcule , e resolva o sistema calculando . Compare suas soluções com os resultados obtidos pelo método de Gauss-Jordan. "
},
{
  "id": "matrix_mult_meaning-2",
  "level": "2",
  "url": "Matrices.html#matrix_mult_meaning-2",
  "type": "Checkpoint",
  "number": "2.26",
  "title": "",
  "body": "Observe as seguintes multiplicações matriciais e tente descrever o efeito que as matrizes à esquerda têm sobre as matrizes à direita.      "
},
{
  "id": "matrix_mult_meaning-3",
  "level": "2",
  "url": "Matrices.html#matrix_mult_meaning-3",
  "type": "Checkpoint",
  "number": "2.27",
  "title": "",
  "body": "Observe as seguintes multiplicações matriciais e tente descrever o efeito que as matrizes à esquerda têm sobre as matrizes à direita.      "
},
{
  "id": "matrix_mult_meaning-4",
  "level": "2",
  "url": "Matrices.html#matrix_mult_meaning-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matriz elementar do tipo I "
},
{
  "id": "matrix_mult_meaning-5",
  "level": "2",
  "url": "Matrices.html#matrix_mult_meaning-5",
  "type": "Example",
  "number": "2.28",
  "title": "",
  "body": "  "
},
{
  "id": "matrix_mult_meaning-6",
  "level": "2",
  "url": "Matrices.html#matrix_mult_meaning-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matriz elementar do tipo II "
},
{
  "id": "matrix_mult_meaning-7",
  "level": "2",
  "url": "Matrices.html#matrix_mult_meaning-7",
  "type": "Example",
  "number": "2.29",
  "title": "",
  "body": "  "
},
{
  "id": "matrix_mult_meaning-8",
  "level": "2",
  "url": "Matrices.html#matrix_mult_meaning-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matriz elementar do tipo III "
},
{
  "id": "matrix_mult_meaning-9",
  "level": "2",
  "url": "Matrices.html#matrix_mult_meaning-9",
  "type": "Example",
  "number": "2.30",
  "title": "",
  "body": "  "
},
{
  "id": "matrix_mult_meaning-10",
  "level": "2",
  "url": "Matrices.html#matrix_mult_meaning-10",
  "type": "Remark",
  "number": "2.31",
  "title": "",
  "body": "Multiplicar por uma matriz elementar à esquerda corresponde a realizar uma das operações elementares nas linhas da matriz . "
},
{
  "id": "matrix_mult_meaning-11",
  "level": "2",
  "url": "Matrices.html#matrix_mult_meaning-11",
  "type": "Theorem",
  "number": "2.32",
  "title": "",
  "body": "    As matrizes elementares do tipo I, II e III são inversíveis. Além disso    Verificamos diretamente efetuando as multiplicações.  "
},
{
  "id": "matrix_mult_meaning-12",
  "level": "2",
  "url": "Matrices.html#matrix_mult_meaning-12",
  "type": "Checkpoint",
  "number": "2.33",
  "title": "",
  "body": "Encontre as inversas das matrizes a seguir e verifique que a resposta está correta calculando o produto da matriz original com a matriz inversa.     "
},
{
  "id": "matrix_mult_meaning-19",
  "level": "2",
  "url": "Matrices.html#matrix_mult_meaning-19",
  "type": "Checkpoint",
  "number": "2.34",
  "title": "",
  "body": "Utilize o método da Gauss-Jordan para encontrar as inversas das matrizes a seguir, se possível:              "
},
{
  "id": "matrix_mult_meaning-22",
  "level": "2",
  "url": "Matrices.html#matrix_mult_meaning-22",
  "type": "Checkpoint",
  "number": "2.35",
  "title": "",
  "body": "Verifique, calculando o produto, que as matrizes obtidas no exercício anterios são, de fato, inversas. "
},
{
  "id": "determinants-2",
  "level": "2",
  "url": "Matrices.html#determinants-2",
  "type": "Definition",
  "number": "2.36",
  "title": "",
  "body": "   determinante    Seja uma matriz . A submatriz  é a matriz obtida removendo a -ésima linha e a -ésima coluna de A. Definimos, recursivamente, o determinante de , ou , por:   Se é uma matriz , , .  Supondo que está definido o determinante de uma matriz , definimos o determinante de uma matriz , , como:    Para cada , chamamos o número de cofator do elemento . A soma acima é chamada de expansão em cofatores pela primeira linha de .   "
},
{
  "id": "determinants-3",
  "level": "2",
  "url": "Matrices.html#determinants-3",
  "type": "Example",
  "number": "2.37",
  "title": "",
  "body": " Seja   "
},
{
  "id": "determinants-4",
  "level": "2",
  "url": "Matrices.html#determinants-4",
  "type": "Example",
  "number": "2.38",
  "title": "",
  "body": " Seja   "
},
{
  "id": "determinants-5",
  "level": "2",
  "url": "Matrices.html#determinants-5",
  "type": "Example",
  "number": "2.39",
  "title": "",
  "body": " Seja   "
},
{
  "id": "determinants-6",
  "level": "2",
  "url": "Matrices.html#determinants-6",
  "type": "Example",
  "number": "2.40",
  "title": "",
  "body": " Seja   "
},
{
  "id": "determinants-7",
  "level": "2",
  "url": "Matrices.html#determinants-7",
  "type": "Theorem",
  "number": "2.41",
  "title": "",
  "body": "    O determinante de uma matriz pode ser calculado através da expansão em cofatores por qualquer linha ou por qualquer coluna de :   para qualquer   A completar.  "
},
{
  "id": "determinants-8",
  "level": "2",
  "url": "Matrices.html#determinants-8",
  "type": "Example",
  "number": "2.42",
  "title": "",
  "body": " Seja   "
},
{
  "id": "determinants-9",
  "level": "2",
  "url": "Matrices.html#determinants-9",
  "type": "Checkpoint",
  "number": "2.43",
  "title": "",
  "body": "Calcule o determinante de cada uma das matrizes a seguir duas vezes, utilizando a expansão em cofatores da linha e da coluna . Após utilize o código abaixo para conferir seus resultados. "
},
{
  "id": "determinants-11",
  "level": "2",
  "url": "Matrices.html#determinants-11",
  "type": "Theorem",
  "number": "2.44",
  "title": "Propriedades do determinante.",
  "body": " Propriedades do determinante    Seja uma matriz :   Se trocarmos duas linhas de de lugar, o determinante troca de sinal, ou seja: .  Se multiplicamos uma linha de por uma constante não nula, o determinante é multiplicado por , ou seja: .  Se somamos a uma linha de outra linha multiplicada por uma constante, o determinante não se altera, ou seja: .  .  Se tem duas linhas ou duas colunas iguais, .  Se tem uma linha nula ou uma coluna nula, .  Se é uma matriz , .    A completar.  "
},
{
  "id": "determinants-12",
  "level": "2",
  "url": "Matrices.html#determinants-12",
  "type": "Checkpoint",
  "number": "2.45",
  "title": "",
  "body": "Para cada uma das propriedades acima, construa exemplos de matrizes verificando que as propriedades se aplicam. Verifique seus cálculos utilizando os códigos em python disponibilizados. "
},
{
  "id": "determinants-14",
  "level": "2",
  "url": "Matrices.html#determinants-14",
  "type": "Remark",
  "number": "2.46",
  "title": "",
  "body": "Chamamos de adjunta de uma matriz , e denotamos , à matriz de cofatores de transposta. onde é o cofator associado ao elemento da matriz . "
},
{
  "id": "determinants-15",
  "level": "2",
  "url": "Matrices.html#determinants-15",
  "type": "Theorem",
  "number": "2.47",
  "title": "",
  "body": "    Uma matriz é inversível se, e somente se, . Além disso, se é inversível,    A completar.  "
},
{
  "id": "determinants-16",
  "level": "2",
  "url": "Matrices.html#determinants-16",
  "type": "Example",
  "number": "2.48",
  "title": "",
  "body": " Cálculo da matriz inversa utilizando a matriz de cofatores:   "
},
{
  "id": "determinants-17",
  "level": "2",
  "url": "Matrices.html#determinants-17",
  "type": "Checkpoint",
  "number": "2.49",
  "title": "",
  "body": "Calcule as inversas das matrizes a seguir pelo método dos cofatores e utilize o código abaixo para verificar se suas respostas estão corretas. "
},
{
  "id": "Coding_message-9",
  "level": "2",
  "url": "Matrices.html#Coding_message-9",
  "type": "Checkpoint",
  "number": "2.50",
  "title": "",
  "body": "Escreva uma mensagem curta (pode ser uma palavra apenas), converta a mensagem em números manualmente e verifique que os \"outputs\" dos códigos acima correspondem ao que você obteve para a sua mensagem. "
},
{
  "id": "Coding_message-10",
  "level": "2",
  "url": "Matrices.html#Coding_message-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matriz de permutação "
},
{
  "id": "Coding_message-15",
  "level": "2",
  "url": "Matrices.html#Coding_message-15",
  "type": "Remark",
  "number": "2.51",
  "title": "",
  "body": "A inversa de uma matriz de permutações é igual a sua transposta (isso não vale para qualquer matriz). "
},
{
  "id": "Coding_message-20",
  "level": "2",
  "url": "Matrices.html#Coding_message-20",
  "type": "Checkpoint",
  "number": "2.52",
  "title": "",
  "body": "(Em dupla) Crie uma mensagem, codifique-a utilizando uma matriz de permutações e envie a matriz e a mensagem cifrada para um colega. Receba uma mensagem cifrada e a respectiva matriz de permutações de um colega e decodifique-a. "
},
{
  "id": "Coding_message-35",
  "level": "2",
  "url": "Matrices.html#Coding_message-35",
  "type": "Checkpoint",
  "number": "2.53",
  "title": "",
  "body": "(Em dupla) Crie uma mensagem, codifique-a utilizando uma matriz secreta e envie a matriz e a mensagem cifrada para um colega. Receba uma mensagem cifrada e a respectiva secreta de um colega e decodifique-a. "
},
{
  "id": "Matrices-10-2",
  "level": "2",
  "url": "Matrices.html#Matrices-10-2",
  "type": "Definition",
  "number": "2.54",
  "title": "",
  "body": "   matriz triângular    Uma matriz é dita triângular superior se para .  Uma matriz é dita triângular inferior se para .  Dizemos que é triângular se ela for triângular superior ou triângular inferior.  Uma matriz é dita diagonal se para .   "
},
{
  "id": "Matrices-10-3",
  "level": "2",
  "url": "Matrices.html#Matrices-10-3",
  "type": "Example",
  "number": "2.55",
  "title": "",
  "body": " Matrizes triangulares inferiores:   "
},
{
  "id": "Matrices-10-4",
  "level": "2",
  "url": "Matrices.html#Matrices-10-4",
  "type": "Example",
  "number": "2.56",
  "title": "",
  "body": " Matrizes triangulares superiores:   "
},
{
  "id": "Matrices-10-5",
  "level": "2",
  "url": "Matrices.html#Matrices-10-5",
  "type": "Example",
  "number": "2.57",
  "title": "",
  "body": " Matrizes diagonais:   "
},
{
  "id": "Matrices-10-6",
  "level": "2",
  "url": "Matrices.html#Matrices-10-6",
  "type": "Example",
  "number": "2.58",
  "title": "",
  "body": " Todas as matrizes dos três exemplos anteriores são triângulares. "
},
{
  "id": "Matrices-10-7",
  "level": "2",
  "url": "Matrices.html#Matrices-10-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "decompostas "
},
{
  "id": "Matrices-10-11",
  "level": "2",
  "url": "Matrices.html#Matrices-10-11",
  "type": "Lemma",
  "number": "2.59",
  "title": "",
  "body": "    O produto de duas matrizes triângulares superiores é uma matriz triângular superior.  O produto de duas matrizes triângulares inferiores é uma matriz triângular inferior.  O produto de duas matrizes diagonais é uma matriz diagonal.     "
},
{
  "id": "Matrices-10-20",
  "level": "2",
  "url": "Matrices.html#Matrices-10-20",
  "type": "Checkpoint",
  "number": "2.60",
  "title": "",
  "body": "Escreva a matriz a seguir como o produto de uma matriz triângular inferior e uma matriz triângular superior. "
},
{
  "id": "Matrices-10-21",
  "level": "2",
  "url": "Matrices.html#Matrices-10-21",
  "type": "Checkpoint",
  "number": "2.61",
  "title": "",
  "body": "Escreva a matriz a seguir como o produto de uma matriz triângular inferior e uma matriz triângular superior. "
},
{
  "id": "Matrices-10-22",
  "level": "2",
  "url": "Matrices.html#Matrices-10-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "decomposição "
},
{
  "id": "Matrices-10-27",
  "level": "2",
  "url": "Matrices.html#Matrices-10-27",
  "type": "Checkpoint",
  "number": "2.62",
  "title": "",
  "body": "Resolva o sistema linear utilizando decomposição LU: "
},
{
  "id": "Matrices-10-28",
  "level": "2",
  "url": "Matrices.html#Matrices-10-28",
  "type": "Checkpoint",
  "number": "2.63",
  "title": "",
  "body": "Resolva o sistema linear utilizando decomposição LU: "
},
{
  "id": "Projects",
  "level": "1",
  "url": "Projects.html",
  "type": "Section",
  "number": "3",
  "title": "Projetos",
  "body": " Projetos   Essa seção reúne projetos utilizando álgebra linear. ** Em construção**    Projeto 1 - Criando uma dieta  Imagine que você é um nutricionista, e precisa prescrever uma dieta para um paciente. Você pode optar por alimentos em uma lista fechada. Os valores nutricionais desses alimentos são conhecidos, e você deve determinar a quantidade de cada alimento a ser consumida diariamente, de modo que, ao fim do dia, o paciente consuma determinada quantidade de cada macronutriente ou substância química presente nos alimentos, como por exemplo gorduras, carboidratos, minerais, proteínas, dentre outros.  Encontre as quantides de fibra alimentar, carboidratos, sódio, proteínas e gorduras totais de 5 alimentos de sua escolha. Para isso, utilize o site https:\/\/tabnut.dis.epm.br\/alimento Exemplo de solução (seus alimentos serão, provavelmente, diferentes):  Arroz, branco, grao longo, normal, cozido  Feijao, preto, semente madura, cozido, sem sal  Frango, carne branca, so carne, pronto para consumo, assado  Alface, crespa, crua  Tomate, vermelho, maduro, cru   Obs: As quantidades informadas se referem a uma porção de 100 gramas do alimento mencionado.    Alimento  Fibra  Carboidratos  Sódio  Proteínas  Gorduras    1  0,4 g  28,17 g  1 mg  2,69 g  0,28 g    2  8,7 g  23,71 g  1 mg  8,86 g  0,54 g    3  0 g  0 g  51 mg  27,13 g  4,07 g    4  1,2 g  2,97 g  10 mg  0,9 g  0,14 g    5  1,2 g  3,89 g  5 mg  0,88 g  0,2 g      Determine uma quantidade-alvo para cada macronutriente citado e escreva um sistema linear que modele a dieta proposta. Um exemplo de solução, utilizando os alimentos citados anteriormente, é:  Fibra alimentar: 20.6 g  Carboidratos: 110.62 g  Sódio: 172 mg  Proteínas: 106.27 g  Gorduras: 14.19 g     Utilize o código na para resolver o sistema linear e descobrir as quantidades de cada alimento que o paciente deve consumir. Para o exemplo anterior, a solução devolvida pelo programa foi: Você deverá consumir diariamente:  200.0 g de Arroz  200.0 g de Feijão  300.0 g de Frango  100.0 g de Alface  100.0 g de Tomate     Código para a resolução de sistemas lineares utilizando o método de Gauss-Jordan.    A solução encontrada faz sentido? Há algo inconveniente ou inadequado na solução? Justifique sua resposta. Reflita se, dentro do contexto da dieta, sua solução faz sentido. Nesse contexto, fazem sentido soluções negativas? Mude o parâmetro \"negSol\" do código em para \"False\". O programa irá bloquear automaticamente qualquer solução negativa que aparecer!  Remova um dos alimentos de sua lista e tente determinar as quantidedes ideais de cada alimento para atingir seus objetivos nutricionais. Qual o resulta obtido? O que você acha que ocorreu? Existem mais equações que variáveis, logo, o sistema não possui soluções reais.  Faça uma lista com um total de 7 alimentos e tente determinar as quantidedes ideais de cada alimento para atingir seus objetivos nutricionais. Qual o resulta obtido? O que você faria para obter uma resposta? O sistema, que originalmente admitia apenas uma solução, admite, agora, infinitas soluções. Como lidar com esse resultado? Uma possibilidade é fixar os valores das variáveis livres a seu critério. Outra opção (mais utilizada em problemas práticos) é otimizar determinadas variáveis, ou seja, maximizar ou minimizar seu valor. Vejamos a seguir: como  Código para a resolução e otimização de sistemas lineares utilizando o método de Gauss-Jordan. A otimização foi realizada com apoio da biblioteca SciPy, do Python. O programa foi escrito para realizar otimizações com 5 equações e 7 variáveis. Caso deseje fazer com um número diferente, escreva\/altere as funções objetivo e as funções limitadoras, conforme explicação e modelo no código.   1   Projeto 2 - Análise de circuitos resistivos  Em análise de circuitos, utilizamos a Lei de Ohm e as Leis de Kirchhoff de corrente e tensão. Ao encontrar as equações referentes ao circuito utilizando as leis básicas, precisamos montar um sistema linear para encontrar as correntes e quedas de tensão em cada ramo. Analise os circuitos dados utilizando essas três leis, encontre as equações do circuito e forneça-as ao programa em Python disponibilizado ao final da seção para resolver o sistema e encontras as correntes.  Leis básicas:   Lei de Kirchhoff de Corrente: Em qualquer nó, a soma das correntes entrando é igual à soma das correntes saindo.  Lei de Kirchhoff de Tensão: Ao longo de qualquer malha fechada, a soma dos ganhos e das quedas de tensão é igual a zero.  Lei de Ohm: A queda de tensão em um elemento resistivo é dada por    Obtenha as equações referentes à aplicação das leis básicas no seguinte cicuito:  Circuito 1. Fonte: Leon, S. 2018     Aplicação da LKC:   Observamos que, no nó A, entram as correntes e , e sai a corrente . Por outro lado, no nó B, entra a corrente e saem as correntes e . Assim, obtemos as equações:    Aplicação da Lei de Ohm:   Aplicando a lei de Ohm, descobrimos que a queda de tensão em cada resistor é:   Resistor de 4 ohms:  Resistor de 3 ohms:  Resistor de 2 ohms (à esquerda do nó B):  Resistor de 2 ohms (abaixo do nó B):    Aplicação da LKT:   Aplicando a LKT, obtemos uma equação para cada malha do circuito. Vejamos:    Ao final temos:    Agora basta colocar as equações na forma matricial e fornecer ao programa.   Obtenha as equações referentes à aplicação das leis básicas no seguin1te cicuito:  Circuito 2. Fonte: Leon, S. 2018     Aplicação da LKC:   Observamos que, no nó A, entram as correntes e , e sai a corrente . Por outro lado, no nó B, entra a corrente e saem as correntes e . Assim, obtemos as equações:    Aplicação da Lei de Ohm:   Aplicando a lei de Ohm, descobrimos que a queda de tensão em cada resistor é:   Resistor de 3 ohms:  Resistor de 2 ohms (acima do nó B):  Resistor de 2 ohms (à esquerda do nó B):    Aplicação da LKT:   Aplicando a LKT, obtemos uma equação para cada malha do circuito. Vejamos:    Ao final temos:    Agora basta colocar as equações na forma matricial e fornecer ao programa.   Obtenha as equações referentes à aplicação das leis básicas no seguinte cicuito:  Circuito 3. Fonte: Leon, S. 2018     Aplicação da LKC:   Observamos que, no nó A, saem as correntes e , e entra a corrente . Por outro lado, no nó B, sai a corrente e entram as correntes e . Assim, obtemos as equações:    Aplicação da Lei de Ohm:   Aplicando a lei de Ohm, descobrimos que a queda de tensão em cada resistor é:   Resistor de 4 ohms:  Resistor de 2 ohms (superior):  Resistor de 2 ohms (inferior):    Aplicação da LKT:   Aplicando a LKT, obtemos uma equação para cada malha do circuito. Vejamos:    Ao final temos:    Agora basta colocar as equações na forma matricial e fornecer ao programa.   Utilize o código a seguir em Python para avaliar os sistemas lineares obtidos em cada um dos circuitos.    "
},
{
  "id": "Proj1-3",
  "level": "2",
  "url": "Projects.html#Proj1-3",
  "type": "Checkpoint",
  "number": "3.1",
  "title": "",
  "body": "Encontre as quantides de fibra alimentar, carboidratos, sódio, proteínas e gorduras totais de 5 alimentos de sua escolha. Para isso, utilize o site https:\/\/tabnut.dis.epm.br\/alimento Exemplo de solução (seus alimentos serão, provavelmente, diferentes):  Arroz, branco, grao longo, normal, cozido  Feijao, preto, semente madura, cozido, sem sal  Frango, carne branca, so carne, pronto para consumo, assado  Alface, crespa, crua  Tomate, vermelho, maduro, cru   Obs: As quantidades informadas se referem a uma porção de 100 gramas do alimento mencionado.    Alimento  Fibra  Carboidratos  Sódio  Proteínas  Gorduras    1  0,4 g  28,17 g  1 mg  2,69 g  0,28 g    2  8,7 g  23,71 g  1 mg  8,86 g  0,54 g    3  0 g  0 g  51 mg  27,13 g  4,07 g    4  1,2 g  2,97 g  10 mg  0,9 g  0,14 g    5  1,2 g  3,89 g  5 mg  0,88 g  0,2 g     "
},
{
  "id": "Proj1-4",
  "level": "2",
  "url": "Projects.html#Proj1-4",
  "type": "Checkpoint",
  "number": "3.3",
  "title": "",
  "body": "Determine uma quantidade-alvo para cada macronutriente citado e escreva um sistema linear que modele a dieta proposta. Um exemplo de solução, utilizando os alimentos citados anteriormente, é:  Fibra alimentar: 20.6 g  Carboidratos: 110.62 g  Sódio: 172 mg  Proteínas: 106.27 g  Gorduras: 14.19 g    "
},
{
  "id": "Proj1-5",
  "level": "2",
  "url": "Projects.html#Proj1-5",
  "type": "Checkpoint",
  "number": "3.4",
  "title": "",
  "body": "Utilize o código na para resolver o sistema linear e descobrir as quantidades de cada alimento que o paciente deve consumir. Para o exemplo anterior, a solução devolvida pelo programa foi: Você deverá consumir diariamente:  200.0 g de Arroz  200.0 g de Feijão  300.0 g de Frango  100.0 g de Alface  100.0 g de Tomate   "
},
{
  "id": "sol_lin_sys",
  "level": "2",
  "url": "Projects.html#sol_lin_sys",
  "type": "Remark",
  "number": "3.5",
  "title": "",
  "body": " Código para a resolução de sistemas lineares utilizando o método de Gauss-Jordan.   "
},
{
  "id": "Proj1-7",
  "level": "2",
  "url": "Projects.html#Proj1-7",
  "type": "Checkpoint",
  "number": "3.6",
  "title": "",
  "body": "A solução encontrada faz sentido? Há algo inconveniente ou inadequado na solução? Justifique sua resposta. Reflita se, dentro do contexto da dieta, sua solução faz sentido. Nesse contexto, fazem sentido soluções negativas? Mude o parâmetro \"negSol\" do código em para \"False\". O programa irá bloquear automaticamente qualquer solução negativa que aparecer! "
},
{
  "id": "Proj1-8",
  "level": "2",
  "url": "Projects.html#Proj1-8",
  "type": "Checkpoint",
  "number": "3.7",
  "title": "",
  "body": "Remova um dos alimentos de sua lista e tente determinar as quantidedes ideais de cada alimento para atingir seus objetivos nutricionais. Qual o resulta obtido? O que você acha que ocorreu? Existem mais equações que variáveis, logo, o sistema não possui soluções reais. "
},
{
  "id": "Proj1-9",
  "level": "2",
  "url": "Projects.html#Proj1-9",
  "type": "Checkpoint",
  "number": "3.8",
  "title": "",
  "body": "Faça uma lista com um total de 7 alimentos e tente determinar as quantidedes ideais de cada alimento para atingir seus objetivos nutricionais. Qual o resulta obtido? O que você faria para obter uma resposta? O sistema, que originalmente admitia apenas uma solução, admite, agora, infinitas soluções. Como lidar com esse resultado? Uma possibilidade é fixar os valores das variáveis livres a seu critério. Outra opção (mais utilizada em problemas práticos) é otimizar determinadas variáveis, ou seja, maximizar ou minimizar seu valor. Vejamos a seguir: "
},
{
  "id": "minmax_lin_sys",
  "level": "2",
  "url": "Projects.html#minmax_lin_sys",
  "type": "Remark",
  "number": "3.9",
  "title": "",
  "body": " Código para a resolução e otimização de sistemas lineares utilizando o método de Gauss-Jordan. A otimização foi realizada com apoio da biblioteca SciPy, do Python. O programa foi escrito para realizar otimizações com 5 equações e 7 variáveis. Caso deseje fazer com um número diferente, escreva\/altere as funções objetivo e as funções limitadoras, conforme explicação e modelo no código.   "
},
{
  "id": "Proj2-5",
  "level": "2",
  "url": "Projects.html#Proj2-5",
  "type": "Checkpoint",
  "number": "3.10",
  "title": "",
  "body": "Obtenha as equações referentes à aplicação das leis básicas no seguinte cicuito:  Circuito 1. Fonte: Leon, S. 2018     Aplicação da LKC:   Observamos que, no nó A, entram as correntes e , e sai a corrente . Por outro lado, no nó B, entra a corrente e saem as correntes e . Assim, obtemos as equações:    Aplicação da Lei de Ohm:   Aplicando a lei de Ohm, descobrimos que a queda de tensão em cada resistor é:   Resistor de 4 ohms:  Resistor de 3 ohms:  Resistor de 2 ohms (à esquerda do nó B):  Resistor de 2 ohms (abaixo do nó B):    Aplicação da LKT:   Aplicando a LKT, obtemos uma equação para cada malha do circuito. Vejamos:    Ao final temos:    Agora basta colocar as equações na forma matricial e fornecer ao programa.  "
},
{
  "id": "Proj2-6",
  "level": "2",
  "url": "Projects.html#Proj2-6",
  "type": "Checkpoint",
  "number": "3.12",
  "title": "",
  "body": "Obtenha as equações referentes à aplicação das leis básicas no seguin1te cicuito:  Circuito 2. Fonte: Leon, S. 2018     Aplicação da LKC:   Observamos que, no nó A, entram as correntes e , e sai a corrente . Por outro lado, no nó B, entra a corrente e saem as correntes e . Assim, obtemos as equações:    Aplicação da Lei de Ohm:   Aplicando a lei de Ohm, descobrimos que a queda de tensão em cada resistor é:   Resistor de 3 ohms:  Resistor de 2 ohms (acima do nó B):  Resistor de 2 ohms (à esquerda do nó B):    Aplicação da LKT:   Aplicando a LKT, obtemos uma equação para cada malha do circuito. Vejamos:    Ao final temos:    Agora basta colocar as equações na forma matricial e fornecer ao programa.  "
},
{
  "id": "Proj2-7",
  "level": "2",
  "url": "Projects.html#Proj2-7",
  "type": "Checkpoint",
  "number": "3.14",
  "title": "",
  "body": "Obtenha as equações referentes à aplicação das leis básicas no seguinte cicuito:  Circuito 3. Fonte: Leon, S. 2018     Aplicação da LKC:   Observamos que, no nó A, saem as correntes e , e entra a corrente . Por outro lado, no nó B, sai a corrente e entram as correntes e . Assim, obtemos as equações:    Aplicação da Lei de Ohm:   Aplicando a lei de Ohm, descobrimos que a queda de tensão em cada resistor é:   Resistor de 4 ohms:  Resistor de 2 ohms (superior):  Resistor de 2 ohms (inferior):    Aplicação da LKT:   Aplicando a LKT, obtemos uma equação para cada malha do circuito. Vejamos:    Ao final temos:    Agora basta colocar as equações na forma matricial e fornecer ao programa.  "
},
{
  "id": "Proj2-8",
  "level": "2",
  "url": "Projects.html#Proj2-8",
  "type": "Remark",
  "number": "3.16",
  "title": "",
  "body": "Utilize o código a seguir em Python para avaliar os sistemas lineares obtidos em cada um dos circuitos.  "
},
{
  "id": "section-computation",
  "level": "1",
  "url": "section-computation.html",
  "type": "Section",
  "number": "4",
  "title": "Solve symbolic system and elementary operations",
  "body": " Solve symbolic system and elementary operations  Solve a linear system.   Write a matrix using numpy.   Define elementary operations on the rows of a matrix.    "
},
{
  "id": "section-Gaussian",
  "level": "1",
  "url": "section-Gaussian.html",
  "type": "Section",
  "number": "5",
  "title": "Gaussian Elimination",
  "body": " Gaussian Elimination  A method of Gaussian elimination.   Reverse substitution in a row echelon form matrix (does not work always - use with caution).   .     A simple table    Variable  Variable  Conjunction  Disjunction    T  T  T  T    T  F  F  T    F  T  F  T    F  F  F  F     "
},
{
  "id": "section-Gaussian-9",
  "level": "2",
  "url": "section-Gaussian.html#section-Gaussian-9",
  "type": "Table",
  "number": "5.1",
  "title": "A simple table",
  "body": " A simple table    Variable  Variable  Conjunction  Disjunction    T  T  T  T    T  F  F  T    F  T  F  T    F  F  F  F    "
},
{
  "id": "section-Gauss-Jordan",
  "level": "1",
  "url": "section-Gauss-Jordan.html",
  "type": "Section",
  "number": "6",
  "title": "Gauss-Jordan reduction",
  "body": " Gauss-Jordan reduction  A method of Gaussian elimination.   Follows from Gaussian elimination to complete the Gauss-Jordan reduction.   "
},
{
  "id": "section-Matrices",
  "level": "1",
  "url": "section-Matrices.html",
  "type": "Section",
  "number": "7",
  "title": "Basic commands for matrices.",
  "body": " Basic commands for matrices.  Matrices of different kinds.   Matrices of zeros and ones.   Print rows columns and elements.   Basic operations.   Transpose of a matrix.   Inverse of a matrix.   "
},
{
  "id": "ElDecomp",
  "level": "1",
  "url": "ElDecomp.html",
  "type": "Section",
  "number": "8",
  "title": "Decompositions; Inverse finding",
  "body": " Decompositions; Inverse finding   Decomposition PA = LU  Calculates the decomposition PA=LU. The matrix P only trades lines in A, if need be, then decomposes as LU.      Finding the inverse through Gauss - Jordan reduction  If we apply Gauss-Jordan reduction in the matrix (A|I), A concatenated with I, we obtain the Identity, if possible, concatenated with the inverse of A. For that we need the method of Gaussian elimination.   Follows from Gaussian elimination to complete the Gauss-Jordan reduction and obtains (I|A^-1)) .   We can test the matrix B, found by computing the Gauss-Jordan reduction, by calculating A * B. The result should be (A|I).    "
},
{
  "id": "espacos-vetoriais",
  "level": "1",
  "url": "espacos-vetoriais.html",
  "type": "Section",
  "number": "9",
  "title": "Espaços Vetoriais",
  "body": " Espaços Vetoriais   O conceito de Espaço Vetorial trata de espaços que têm uma operação de multiplicação por escalar e uma operação de adição de vetores , assim como com as operações usuais, e identifica as principais propriedades operacionais esperadas para seu uso, permitindo a aplicação em espaços muito diferentes de e nos mais diversos contextos. Essa seção inicia relembrando o que são vetores em e segue apresentando o conceito de espaço vetorial e alguns dos exemplos não triviais importantes. Em seguida introduz-se o conceito de subespaço vetorial e como aplicá-lo, junto com uma aplicação para a ilustração de subespaços de dimensão 1 ou 2 em .    Vetores em  Um vetor  representa o conjunto de todos os segmentos orientados em com o mesmo comprimento, direção e sentido.   Usualmente representamos um vetor pelas coordenadas do ponto final do segmento orientado que inicia na origem. Assim, no plot, temos o vetor e outros segmentos orientados gerados aleatoriamente, todos pertencentes ao mesmo vetor.  O comprimento ou a norma de um vetor em pode ser calculado por . No exemplo acima . Qualquer segmento orientado em poderia ter sido utilizado para calcular o comprimento.   Calcule o comprimento de três representantes de um vetor gerados pelo códico acima.  Para vetores , e ,e um escalar , definimos as operações fundamentais de multiplicação por escalar e adição de vetores por: A subtração de vetores é definida a partir da multiplicação por escalar e da adição como .      Espaços Vetoriais  Definimos agora um espaço vetorial, construindo conjuntos de \"vetores\" para os quais eximtem operações de \"adição\" e \"multiplicação\" por \"escalar\" com as mesmas propriedades das operações em vetores do , de modo operarmos com eles de modo semelhante ao , todavia podemos ter objetos muito distintos dos usuais para cada um dos termos entre parênteses.     espaço vetorial    Seja um conjunto de escalares (usualmente ou , mas qualquer corpo serviria). Um espaço vetorial  é um conjunto sobre o qual estão definidas duas operações: e as operações satisfazem as seguintes propriedades para quaisquer e :  (A1)  (A2)  (A3)   (A4)  (A5)  (A6)  (A7)  (A8)  V é dito o conjunto universal , os elementos de V são ditos vetores e os elementos de E são ditos escalares . Muitas vezes, quando está claro quais as operações de adição e multiplicação por escalar e qual o conjunto E de escalares, Chamamos V de um espaço vetorial omitindo o corpo de escalares e as operações de adição e multiplicação por escalar.    O conjunto não é um espaço vetorial com escalares reais e as operações de adição e multiplicação por escalar herdadas de pois, dados , e temos que Deste modo C1 não é válida e não é um espaço vetorial.  Para mostrar que um conjunto não é um espaço vetorial, basta mostrar que uma das propriedades não é válida. Todavia mais propriedades podem não ser válidas. Encontre mais duas das propriedades (entre C2 e) que não são válidas para e justifique sua escolha.   com escalares reais ou complexos e as operações de adição e multiplicação por escalar usuais é um espaço vetorial para qualquer . Para verificar isso é necessário verificar a validade de .  O conjunto , com escalares reais e as operações de adição e multiplicação por escalar herdadas de é um espaço vetorial pois, dados , , e e , verificamos a validade de cada uma das propriedades (alguns detalhes são omitidos por já conhecermos as propriedades da adição de vetores em ):  de modo que a soma de dois elementos de V é um elemento de  .  de modo que a multiplicação de um elemento de V por um escalar é um elemento de .          Portanto é um espaço vetorial.   O código abaixo plota o plano gerado pelos vetores do exemplo anterior.       Se é um espaço vetorial e , então:                            O conjunto de todas as funções reais definidas no intervalo , que têm derivada de ordem contínua (com escalares reais e as operações usuais de adição e multiplicação por escalar) é um espaço vetorial, denominado . Deixamos a verificação das propriedades C1 e C2, A1 - A8 a cargo do leitor.  O conjunto de todas as matrizes reais (com escalares reais e as operações usuais de adição e multiplicação por escalar) é um espaço vetorial. Deixamos a verificação das propriedades C1 e C2, A1 - A8 a cargo do leitor.   "
},
{
  "id": "espacos-vetoriais-2-1",
  "level": "2",
  "url": "espacos-vetoriais.html#espacos-vetoriais-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Espaço Vetorial vetores "
},
{
  "id": "Rn_vecs-2",
  "level": "2",
  "url": "espacos-vetoriais.html#Rn_vecs-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vetor "
},
{
  "id": "Rn_vecs-5",
  "level": "2",
  "url": "espacos-vetoriais.html#Rn_vecs-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "comprimento norma "
},
{
  "id": "Rn_vecs-7",
  "level": "2",
  "url": "espacos-vetoriais.html#Rn_vecs-7",
  "type": "Checkpoint",
  "number": "9.1",
  "title": "",
  "body": "Calcule o comprimento de três representantes de um vetor gerados pelo códico acima. "
},
{
  "id": "Rn_vecs-8",
  "level": "2",
  "url": "espacos-vetoriais.html#Rn_vecs-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multiplicação por escalar adição subtração "
},
{
  "id": "Esp_vet-3",
  "level": "2",
  "url": "espacos-vetoriais.html#Esp_vet-3",
  "type": "Definition",
  "number": "9.2",
  "title": "",
  "body": "   espaço vetorial    Seja um conjunto de escalares (usualmente ou , mas qualquer corpo serviria). Um espaço vetorial  é um conjunto sobre o qual estão definidas duas operações: e as operações satisfazem as seguintes propriedades para quaisquer e :  (A1)  (A2)  (A3)   (A4)  (A5)  (A6)  (A7)  (A8)  V é dito o conjunto universal , os elementos de V são ditos vetores e os elementos de E são ditos escalares . Muitas vezes, quando está claro quais as operações de adição e multiplicação por escalar e qual o conjunto E de escalares, Chamamos V de um espaço vetorial omitindo o corpo de escalares e as operações de adição e multiplicação por escalar.   "
},
{
  "id": "Esp_vet-4",
  "level": "2",
  "url": "espacos-vetoriais.html#Esp_vet-4",
  "type": "Example",
  "number": "9.3",
  "title": "",
  "body": "O conjunto não é um espaço vetorial com escalares reais e as operações de adição e multiplicação por escalar herdadas de pois, dados , e temos que Deste modo C1 não é válida e não é um espaço vetorial. "
},
{
  "id": "Esp_vet-5",
  "level": "2",
  "url": "espacos-vetoriais.html#Esp_vet-5",
  "type": "Checkpoint",
  "number": "9.4",
  "title": "",
  "body": "Para mostrar que um conjunto não é um espaço vetorial, basta mostrar que uma das propriedades não é válida. Todavia mais propriedades podem não ser válidas. Encontre mais duas das propriedades (entre C2 e) que não são válidas para e justifique sua escolha. "
},
{
  "id": "Esp_vet-6",
  "level": "2",
  "url": "espacos-vetoriais.html#Esp_vet-6",
  "type": "Example",
  "number": "9.5",
  "title": "",
  "body": " com escalares reais ou complexos e as operações de adição e multiplicação por escalar usuais é um espaço vetorial para qualquer . Para verificar isso é necessário verificar a validade de . "
},
{
  "id": "Esp_vet-7",
  "level": "2",
  "url": "espacos-vetoriais.html#Esp_vet-7",
  "type": "Example",
  "number": "9.6",
  "title": "",
  "body": "O conjunto , com escalares reais e as operações de adição e multiplicação por escalar herdadas de é um espaço vetorial pois, dados , , e e , verificamos a validade de cada uma das propriedades (alguns detalhes são omitidos por já conhecermos as propriedades da adição de vetores em ):  de modo que a soma de dois elementos de V é um elemento de  .  de modo que a multiplicação de um elemento de V por um escalar é um elemento de .          Portanto é um espaço vetorial.  "
},
{
  "id": "Esp_vet-10",
  "level": "2",
  "url": "espacos-vetoriais.html#Esp_vet-10",
  "type": "Theorem",
  "number": "9.7",
  "title": "",
  "body": "    Se é um espaço vetorial e , então:                           "
},
{
  "id": "Esp_vet-11",
  "level": "2",
  "url": "espacos-vetoriais.html#Esp_vet-11",
  "type": "Example",
  "number": "9.8",
  "title": "",
  "body": "O conjunto de todas as funções reais definidas no intervalo , que têm derivada de ordem contínua (com escalares reais e as operações usuais de adição e multiplicação por escalar) é um espaço vetorial, denominado . Deixamos a verificação das propriedades C1 e C2, A1 - A8 a cargo do leitor. "
},
{
  "id": "Esp_vet-12",
  "level": "2",
  "url": "espacos-vetoriais.html#Esp_vet-12",
  "type": "Example",
  "number": "9.9",
  "title": "",
  "body": "O conjunto de todas as matrizes reais (com escalares reais e as operações usuais de adição e multiplicação por escalar) é um espaço vetorial. Deixamos a verificação das propriedades C1 e C2, A1 - A8 a cargo do leitor. "
},
{
  "id": "subescos",
  "level": "1",
  "url": "subescos.html",
  "type": "Section",
  "number": "10",
  "title": "Subespaços Vetoriais",
  "body": " Subespaços Vetoriais   Mostrar que um conjunto é um espaço vetorial é uma tarefa que pode ser longa e repetitiva, uma vez tenhamos compreendido bem o conceito. Essa tarefa fica muito mais fácil quando consideramos subconjuntos de um espaço vetorial    Subespaço     subespaço vetorial    Sejam um espaço vetorial e um subconjunto de . é dito um subespaço (vetorial) de se, e somente se:          A primeira condição diz que o subconjunto não é vazio, a segunda dis que a mutiplicação de um elemento de S por um escalar resulta em um elemento de S e a terceira diz que o resultado da soma de dois elementos de S é um elemento de S.      Sejam um espaço vetorial e um subespaço vetorial. Então é um espaço vetorial.   Como e tem o mesmo conjunto de escalares e operações, valem as propriedades desde que e sejam elementos de , o que é requerido pela definição de subespaço vetorial.   O conjunto , com escalares reais e as operações de adição e multiplicação por escalar herdadas de é um subespaço vetorial de pois, dados e , :      Assim é um subespaço de e automaticamente um espaço vetorial (não precisávamos verificar todas as propriedades, como feito no exemplo anterior).   Verifique que é um subespaço de .  Verifique que é um subespaço de .  Utilize o código abaixo para esboçar o subespaço de       Espaço Nulo de uma matriz     espaço nulo    Seja . O conjunto de todas as soluções de é chamado de espaço nulo de e denotado :      O espaço nulo da matriz consiste das soluções de , ou seja, soluções do sistema  denotando e , temos:         Para qualquer matriz , é um subespaço de .   Dados e :         Matriz de uma projeção  Uma matriz representa uma projeção em um plano que passa pela origem se (esse fato será justificado quando estudarmos transformações lineares). Note (calcule) que a matriz tem essa propriedade: O núcleo de dá a direção normal ao plano de projeção. Para encontrar precisamos resolver o que pode ser feito por eliminação Gaussiana:  de modo que e e e um vetor normal ao plano é .    O código plota um o plano que passa pela origem se dermos como imput o vetor normal a esse plano.   Verifique se a matriz representa uma projeção, em caso positivo encontre o seu núcleo e utilize o código acima para plotar o plano de projeção.  Note que não pode ser vazio, pois uma vez que para qualquer matriz.      Considere o sistema , então a diferença entre duas soluções do sistema está em . Além disso, a soma de uma solução do sistema com um elemento do núcleo é também solução do sistema.   Dados soluções de , temos: Se é solução de e , temos:     "
},
{
  "id": "subespacos-subsection-2",
  "level": "2",
  "url": "subescos.html#subespacos-subsection-2",
  "type": "Definition",
  "number": "10.1",
  "title": "",
  "body": "   subespaço vetorial    Sejam um espaço vetorial e um subconjunto de . é dito um subespaço (vetorial) de se, e somente se:         "
},
{
  "id": "subespacos-subsection-4",
  "level": "2",
  "url": "subescos.html#subespacos-subsection-4",
  "type": "Lemma",
  "number": "10.2",
  "title": "",
  "body": "    Sejam um espaço vetorial e um subespaço vetorial. Então é um espaço vetorial.   Como e tem o mesmo conjunto de escalares e operações, valem as propriedades desde que e sejam elementos de , o que é requerido pela definição de subespaço vetorial.  "
},
{
  "id": "subespacos-subsection-5",
  "level": "2",
  "url": "subescos.html#subespacos-subsection-5",
  "type": "Example",
  "number": "10.3",
  "title": "",
  "body": "O conjunto , com escalares reais e as operações de adição e multiplicação por escalar herdadas de é um subespaço vetorial de pois, dados e , :      Assim é um subespaço de e automaticamente um espaço vetorial (não precisávamos verificar todas as propriedades, como feito no exemplo anterior).  "
},
{
  "id": "subespacos-subsection-6",
  "level": "2",
  "url": "subescos.html#subespacos-subsection-6",
  "type": "Checkpoint",
  "number": "10.4",
  "title": "",
  "body": "Verifique que é um subespaço de . "
},
{
  "id": "subespacos-subsection-7",
  "level": "2",
  "url": "subescos.html#subespacos-subsection-7",
  "type": "Checkpoint",
  "number": "10.5",
  "title": "",
  "body": "Verifique que é um subespaço de . "
},
{
  "id": "subespacos-subsection-8",
  "level": "2",
  "url": "subescos.html#subespacos-subsection-8",
  "type": "Checkpoint",
  "number": "10.6",
  "title": "",
  "body": "Utilize o código abaixo para esboçar o subespaço de  "
},
{
  "id": "Esp_nulo-2",
  "level": "2",
  "url": "subescos.html#Esp_nulo-2",
  "type": "Definition",
  "number": "10.7",
  "title": "",
  "body": "   espaço nulo    Seja . O conjunto de todas as soluções de é chamado de espaço nulo de e denotado :    "
},
{
  "id": "ex_esp_nulo",
  "level": "2",
  "url": "subescos.html#ex_esp_nulo",
  "type": "Example",
  "number": "10.8",
  "title": "",
  "body": " O espaço nulo da matriz consiste das soluções de , ou seja, soluções do sistema  denotando e , temos:    "
},
{
  "id": "Esp_nulo-4",
  "level": "2",
  "url": "subescos.html#Esp_nulo-4",
  "type": "Lemma",
  "number": "10.9",
  "title": "",
  "body": "    Para qualquer matriz , é um subespaço de .   Dados e :       "
},
{
  "id": "Esp_nulo-5",
  "level": "2",
  "url": "subescos.html#Esp_nulo-5",
  "type": "Example",
  "number": "10.10",
  "title": "Matriz de uma projeção.",
  "body": " Matriz de uma projeção  Uma matriz representa uma projeção em um plano que passa pela origem se (esse fato será justificado quando estudarmos transformações lineares). Note (calcule) que a matriz tem essa propriedade: O núcleo de dá a direção normal ao plano de projeção. Para encontrar precisamos resolver o que pode ser feito por eliminação Gaussiana:  de modo que e e e um vetor normal ao plano é .   "
},
{
  "id": "Esp_nulo-8",
  "level": "2",
  "url": "subescos.html#Esp_nulo-8",
  "type": "Checkpoint",
  "number": "10.11",
  "title": "",
  "body": "Verifique se a matriz representa uma projeção, em caso positivo encontre o seu núcleo e utilize o código acima para plotar o plano de projeção. "
},
{
  "id": "Esp_nulo-9",
  "level": "2",
  "url": "subescos.html#Esp_nulo-9",
  "type": "Remark",
  "number": "10.12",
  "title": "",
  "body": "Note que não pode ser vazio, pois uma vez que para qualquer matriz. "
},
{
  "id": "Esp_nulo-10",
  "level": "2",
  "url": "subescos.html#Esp_nulo-10",
  "type": "Lemma",
  "number": "10.13",
  "title": "",
  "body": "    Considere o sistema , então a diferença entre duas soluções do sistema está em . Além disso, a soma de uma solução do sistema com um elemento do núcleo é também solução do sistema.   Dados soluções de , temos: Se é solução de e , temos:   "
},
{
  "id": "bases",
  "level": "1",
  "url": "bases.html",
  "type": "Section",
  "number": "11",
  "title": "Base de um Espaço Vetorial",
  "body": " Base de um Espaço Vetorial   Muitas vezes representamos vetores de como . Os vetores formam o que chamamos de uma base para . Nessa seção definimos bases para espaços vetoriais quaisquer. Para isso precisamos de um conjunto de vetores com os quais possamos escrever quaisquer vetores do espaço através de uma soma (para isso estudamos spans na primeira subseção) e queremos que não haja redundância no conjunto de vetores escolhidos (para isso estudamos independância linear na segunda subseção).    Spans (Coberturas)     cobertura    Sejam um espaço vetorial e . Uma soma da forma é dita uma combinação linear de . O conjunto de todas as combinações lineares de é chamado de Span de  (as nomenclaturas cobertura de ou espaço vetorial gerado por também são utilizadas na literatura):      No  , o espaço nulo da matriz é igual ao :     Denotamos por o vetor cuja -ésima entrada é igual a 1 e todas as demais são nulas para , é formado por todos os vetores da forma de modo que .       Se , então é um subespaço vetorial de V.   Se e e é um escalar, então   e            Dados vetores não colineares, o é um plano que passa pela origem e qualquer desses é um subespaço de . Os planos que não passam pela origem são subespaços de ? Qual a justificativa?     conjunto de geradores    Sejam um espaço vetorial e O conjunto é um conjunto de geradores (ou gera ) se, e somente se, qualquer vetor de pode ser escrito como uma combinação linear de , ou seja,     Para determinar se um conjunto gera , devemos, para qualquer vetor , mostrar que existem escalares tais que . Se escrevemos as coordenadas para cada um dos vetores do conjunto, , obtemos o sistema linear (nas variáveis ): onde a última das equivalências está na forma . Assim perguntar se um conjunto de vetores gera , é determinar se o sistema acima tem solução para qualquer .  Quais dos seguintes conjuntos são coberturas de e justifique sua resposta analisando se o sistema associado tem solução única, infinitas soluções ou não tem solução?                   Dependência Linear  No item 1. do cada pode ser escrito de infinitas maneiras. Isso não é coincidência e ocorre devido ao fato que , como esclarece o lema a seguir.      Sejam um espaço vetorial e um vetor. Suponha que possa ser escrito como uma combinação linear de . Existem infinitas formas de escrever como combinação linear de exatamente quando um desses vetores pode ser escrito como combinação linear dos demais.    Se for possível escrever um vetor como combinação linear de de duas maneiras distintas, então existem escalares e , nem todos iguais ( para pelo menos algum ), tais que   de modo que é L.D. ( para algum ).  Sem perda de generalidade se o vetor que pode ser escrico como combinação linear dos demais não for o último da lista, podemos fazer uma reordenação dos vetores e colocá-lo por último , se for possível escrever o vetor como combinação linear de , então existem escalares , tais que   para qualquer escalar , de modo que   para qualquer escalar .    O Lema acima diz que teremos infinitas formas de escrever um vetor como combinação linear de . exatamete quando existirem soluções não nulas de . Assim essa condição é bastante relevante para bases de um espaço vetorial e precisamos referir-nos a ela precisamente, como a seguir.     (in)dependência linear    Seja um espaço vetorial. Os vetores são ditos linearmente independentes (L.I.) se a única solução Note que sempre é uma solução da equação. de é . Caso exista alguma solução não nula dessa equação, o conjunto é dito linearmente dependente (L.D.) .     Quais dos seguintes conjuntos de vetores são L.I.? Justifique sua resposta analisando se o sistema associado tem solução única, infinitas soluções ou não tem solução?   Para verificarmos se é L.I., precisamos verificar se existe alguma solução não trivial para o sistema   é solução para qualquer e o istema é L.D.    é L.I. pois     é L.I.   é L.D.      Para verificar se os vetores são L.I. verificamos se o sistema   tem solução única. Isso pode ser feito de diversas maneiras! Denotando  e  o sistema pode ser consderado nas seguintes formas, que são equivalentes à equação acima:   Analisando o sistema acima para entender se a solução é única, percebemos:    Se , então são L.D. pois o sistema associado tem mais incógnitas do que equações.   Se , então podemos colocar o sistema associado na forma escalonada e verificar se temos linhas não nulas. Em caso afirmativo a solução do sistema é única e o sistema é L.I. Caso tenhamos menos do que linhas não nulas, o sistema é L.D.   Se , então a matriz é quadrada e o sistema tem solução única se, e somente se, a matriz é inversível, de modo que basta verificar que .    O código a seguir pode ser utilizado para encontrar um subconjunto L.I. dentro de um conjunto de vetores.   Quais dos seguintes conjuntos de vetores são L.I.? Justifique sua resposta analisando se o sistema associado tem solução única, infinitas soluções ou não tem solução?                 Um conjunto de vetores é L.D. se, e somente se, um dos vetores pode ser escrito como combinação linear dos demais.  A completar.      Bases     base    Sejam um espaço vetorial e vetores. O conjunto é uma base para se, e somente se,  são linearmente independentes,  cobrem .  Alternativamente, dizemos que  formam uma base para .     Para verificarmos que formam uma base para , precisamos verificar que:  esses vetores são L.I. Para isso precisamos mostrar que a única solução de é o que ocorre de fato pois   esses vetores geram . Para isso precisamos mostrar que qualquer vetor pode ser escrito como uma combinação linear de , o que ocorre de fato pois   De modo que é uma base para .   Se formam uma base para um espaço vetorial, podemos escrever cada vetor desse espaço como combinação linear dos vetores da base de uma única forma. O código a seguir plota uma base {u1, u2}, um vetor v, faz um print das coordenadas de v nessa base e ilustra o produto das coordenadas com os respectivos vetores da base (cuja soma resulta em v).    Para verificarmos que formam uma base para , precisamos verificar que:  esses vetores são L.I. Para isso precisamos mostrar que a única solução de é para verificarmos isso, escrevemos o sistema acima na forma matricial e verificamos que esse sistema admite solução única pois a matriz tem determinante e é, portanto inversível.  esses vetores geram . Para isso precisamos mostrar que qualquer vetor pode ser escrito como uma combinação linear de , o que ocorre de fato pois, escrevendo o sistema acima na forma matricial verificamos que esse sistema admite solução ( ) para qualquer , pois a matriz é tem determinante e é, portanto inversível.  De modo que é uma base para .    Para verificarmos que formam uma base para , observamos que a matriz tem determinante e portanto é inversível, de modo que o sistema tem solução para qualquer e geram , além disso, a solução é única para qualquer , em particular para , de modo que os vetores são L.I. Dessa forma, formam uma base para .   Verifique que a base do sistema anterior é formada por vetores unitários e ortogonais entre si.  Utilize o código acima para explorar o que ocorre quando os vetores formam um ângulo pequeno entre si.  Temos então que é possível encontrar muitas (na verdade infinitas) bases para um espaço vetorial . Os dois teoremas a seguir garantem que duas bases para um espaço vetorial têm sempre o mesmo número de vetores.      Se geram um espaço vtorial , então qualquer coleção de vetores de é L.D.   Sejam vetores. Cada um desses vetores pode ser escrito como combinação linear de , pois estes geram . Assim, para cada , existem escalares tais que Assim, encontrar constantes tais que é o mesmo que resolver o sistema e uma solução dessa equação é tomar cada coeficiente dos vetores iguais a zero, de modo que para mostrarmos que é L.D., basta mostrar que o sistema admite múltiplas soluções, o que ocorre pois o sistema é homogêneo (portanto sempre tem solução) e tem mais variáveis do que equações (portanto admite infinitas soluções).       Se é uma base para um espaço vetorial , então qualquer coleção de vetores de não gera .   A completar.   Os teoremas acima garantem que se uma base para um espaço vetorial tem vetores, então qualquer outra base para também tem vetores. Assim, existe um número \"certo\" de vetores para cada base, o que nos motiva a definir a dimensão de um espaço vetorial.     dimensão    Seja um espaço vetorial. Se tem uma base de vetores, dizemos que tem dimensão  . O (sub)espaço é dito ter dimensão nula ou . Em ambos os casos dizemos que tem dimensão finita . Caso não exista um conjunto de vetores que cobre com um número finito de elementos, dizemos que tem dimensão infinita .    Determine uma base para os seguintes conjuntos e determine suas dimensões  O conjunto das matrizes reais triangulares inferiores.  O conjunto dos polinômios de grau 4 (ou seja, polinômios da forma ).  O espaço nulo da matriz     Encontre outras diferentes das apresentadas na solução do exercício anterior bases para os espaços do exercício anterior.  Se sabemos que um espaço vetorial tem dimensão e quisermos verificar se um conjunto de vetores é uma base, basta verificarmos uma das condições (que eles são L.I. ou que geram ), como garante o teorema a seguir.      Se é um espaço vetorial de dimensão , então:   qualquer conjunto de vetores linearmente independentes gera ,   quaisquer vetores que cobrem são linearmente independentes        Se tem dimensão , então admite uma base com vetores (não necessariamente ). Então o diz que, para qualquer vetor , o conjunto é L.D. Portanto a equação admite solução não nula. Nessa solução , pois, caso contrário, o conjunto seria L.D. Portanto e gera .   Seja um conjunto de vetores que gera . Se este conjunto é L.D., então um dos vetores pode ser escrito como combinação dos demais. Sem perda de generalidade, digamos que seja : então também gera , pois qualquer vetor pode ser escrito como Assim é um conjunto de geradores para e o implica que qualquer conjunto com vetores é L.D. e não tem base com vetores, o que contradiz ter dimensão .         Mudança de base  Temos a situação que existem muitas (infinitas) bases para cada espaço vetorial. Precisamos então ter uma maneira de passar vetores de uma base para outra.     coordenadas na base    Seja um espaço vetorial e uma base para . A -upla de escalares tal que é chamada de (conjunto de) coordenadas de  na base e escrevemos Normalmente omitimos a referência à base sobrescrita quando nos referimos à base canônica.    As coordenadas de um vetor em uma base são únicas, pois, caso existissem mais de um conjunto de coordenadas correspondente a um único vetor, obteríamos uma contradição com a independencia linear dos vetores da base. Deixamos a verificação disso ao leitor.   Considere a base para (note que as coordenadas mostradas para os vetores da base são as representações dos vetores na base canônica). O vetor é, na base canônica, note que o cálculo realizado acima pode ser escrito como um produto matricial  A matrix é a matriz de mudança de base da base para a base canônica.    Considere a base para e o vetor (na base canônica). As coordenadas de na base são encontradas resolvendo o sistema Dessa forma A matrix é a matriz de mudança de base da base canônica para a base .   O exemplo a seguir complementa os anteriores.   Considere a base para e os vetores da base canônica. As coordenadas de são Note que as colunas da matriz são as coordenadas dos vetores na base .      matriz de mudança de base    Sejam um espaço vetorial e e bases para . Cada vetor da base tem coordenadas na base , . A matriz de mudança de base da base para a base é a matriz     Sejam um espaço vetorial e uma base para . Quais as coordenadas de na base .  Sejam e bases para . Se um vetor tem coordenadas e nas bases e nas respectivas bases e e são as matrizes de mudança de base das bases e para a base canônica, temos que de modo que ou seja, a matriz de mudança de base da base para a base é .   A matriz de mudança de base sempre é inversível, pois, caso não fosse, o sistema admitiria soluções não nulas, de modo que (a completar).  Sejam um espaço vetorial e  bases para e A = a matriz de mudança de base da base para a base , de modo que   Encontre as matrizes de mudança de base da base para a base para as de bases a seguir:  ,  ,  ,  ,  ,    utilize o código a seguir para verificar as respostas obtidas no exercício anterior.      Espaço Linha e Espaço Coluna     espaço vetorial    Seja uma matriz . O subespaço de coberto pelos vetores linha de é chamado de de espaço linha de . O subespaço de coberto pelos vetores coluna de é chamado de espaço coluna de .     Para a matriz , o espaço linha é formado pelas triplas da forma: , ou seja, é igual ao . O espaço coluna é formado pelos vetores da forma: , ou seja, é igual ao .    Para a matriz , temos que há duas linhas que são iguais as outras duas e o espaço linha é formado pelas quadruplas da forma: , ou seja, é igual ao . Denotando para as colunas de , observamos que e e o espaço coluna é formado pelos vetores da forma: , ou seja, é igual ao .      Duas matrizes equivalentes por linhas têm o mesmo espaço linha.  A completar.      posto    O posto ( rank em inglês) de uma matriz , denotado ou , é a dimensão do espaço linha ou do espaço coluna, pois, ambas são iguais de .    O posto de uma matriz é igual ao número de linhas não nulas na sua forma escalonada e as linhas não nulas da forma escalonada formam uma base para o espaço linha de .     A dimensão do espaço linha de uma matriz é igual à dimensão do seu espaço coluna.  A completar.   As colunas da matriz na forma escalonada não formam uma base para o espaço coluna de  , apesar de terem a mesma dimensão. Todavia os pivôs da matriz escalonada indicam as colunas que formam uma base para o espaço coluna de .  O espaço linha de é igual ao espaço coluna de (se transpormos os vetores).  Determine o posto da matriz e bases para seu espaço linha e espaço coluna.  Determine o posto da matriz e bases para seu espaço linha e espaço coluna.  O código abaixo permite colocar uma matriz na forma escalonada.   Um sistema linear tem solução se, e somente se, está no espaço coluna de .     nulidade    A nulidade de uma matriz , denotado , é a dimensão do seu espaço nulo.     do núcleo e da imagem   Para qualquer matriz vale:   A completar.    "
},
{
  "id": "bases-2-1",
  "level": "2",
  "url": "bases.html#bases-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base spans independância linear "
},
{
  "id": "coberturas-2",
  "level": "2",
  "url": "bases.html#coberturas-2",
  "type": "Definition",
  "number": "11.1",
  "title": "",
  "body": "   cobertura    Sejam um espaço vetorial e . Uma soma da forma é dita uma combinação linear de . O conjunto de todas as combinações lineares de é chamado de Span de  (as nomenclaturas cobertura de ou espaço vetorial gerado por também são utilizadas na literatura):    "
},
{
  "id": "coberturas-3",
  "level": "2",
  "url": "bases.html#coberturas-3",
  "type": "Example",
  "number": "11.2",
  "title": "",
  "body": " No  , o espaço nulo da matriz é igual ao :   "
},
{
  "id": "coberturas-4",
  "level": "2",
  "url": "bases.html#coberturas-4",
  "type": "Example",
  "number": "11.3",
  "title": "",
  "body": " Denotamos por o vetor cuja -ésima entrada é igual a 1 e todas as demais são nulas para , é formado por todos os vetores da forma de modo que .  "
},
{
  "id": "coberturas-5",
  "level": "2",
  "url": "bases.html#coberturas-5",
  "type": "Theorem",
  "number": "11.4",
  "title": "",
  "body": "    Se , então é um subespaço vetorial de V.   Se e e é um escalar, então   e           "
},
{
  "id": "coberturas-6",
  "level": "2",
  "url": "bases.html#coberturas-6",
  "type": "Checkpoint",
  "number": "11.5",
  "title": "",
  "body": "Dados vetores não colineares, o é um plano que passa pela origem e qualquer desses é um subespaço de . Os planos que não passam pela origem são subespaços de ? Qual a justificativa? "
},
{
  "id": "coberturas-7",
  "level": "2",
  "url": "bases.html#coberturas-7",
  "type": "Definition",
  "number": "11.6",
  "title": "",
  "body": "   conjunto de geradores    Sejam um espaço vetorial e O conjunto é um conjunto de geradores (ou gera ) se, e somente se, qualquer vetor de pode ser escrito como uma combinação linear de , ou seja,    "
},
{
  "id": "gera_r3",
  "level": "2",
  "url": "bases.html#gera_r3",
  "type": "Checkpoint",
  "number": "11.7",
  "title": "",
  "body": "Quais dos seguintes conjuntos são coberturas de e justifique sua resposta analisando se o sistema associado tem solução única, infinitas soluções ou não tem solução?               "
},
{
  "id": "dependencia_linear-3",
  "level": "2",
  "url": "bases.html#dependencia_linear-3",
  "type": "Lemma",
  "number": "11.8",
  "title": "",
  "body": "    Sejam um espaço vetorial e um vetor. Suponha que possa ser escrito como uma combinação linear de . Existem infinitas formas de escrever como combinação linear de exatamente quando um desses vetores pode ser escrito como combinação linear dos demais.    Se for possível escrever um vetor como combinação linear de de duas maneiras distintas, então existem escalares e , nem todos iguais ( para pelo menos algum ), tais que   de modo que é L.D. ( para algum ).  Sem perda de generalidade se o vetor que pode ser escrico como combinação linear dos demais não for o último da lista, podemos fazer uma reordenação dos vetores e colocá-lo por último , se for possível escrever o vetor como combinação linear de , então existem escalares , tais que   para qualquer escalar , de modo que   para qualquer escalar .   "
},
{
  "id": "dependencia_linear-5",
  "level": "2",
  "url": "bases.html#dependencia_linear-5",
  "type": "Definition",
  "number": "11.9",
  "title": "",
  "body": "   (in)dependência linear    Seja um espaço vetorial. Os vetores são ditos linearmente independentes (L.I.) se a única solução Note que sempre é uma solução da equação. de é . Caso exista alguma solução não nula dessa equação, o conjunto é dito linearmente dependente (L.D.) .   "
},
{
  "id": "dependencia_linear-6",
  "level": "2",
  "url": "bases.html#dependencia_linear-6",
  "type": "Example",
  "number": "11.10",
  "title": "",
  "body": " Quais dos seguintes conjuntos de vetores são L.I.? Justifique sua resposta analisando se o sistema associado tem solução única, infinitas soluções ou não tem solução?   Para verificarmos se é L.I., precisamos verificar se existe alguma solução não trivial para o sistema   é solução para qualquer e o istema é L.D.    é L.I. pois     é L.I.   é L.D.    "
},
{
  "id": "dependencia_linear-7",
  "level": "2",
  "url": "bases.html#dependencia_linear-7",
  "type": "Remark",
  "number": "11.11",
  "title": "",
  "body": " Para verificar se os vetores são L.I. verificamos se o sistema   tem solução única. Isso pode ser feito de diversas maneiras! Denotando  e  o sistema pode ser consderado nas seguintes formas, que são equivalentes à equação acima:   Analisando o sistema acima para entender se a solução é única, percebemos:    Se , então são L.D. pois o sistema associado tem mais incógnitas do que equações.   Se , então podemos colocar o sistema associado na forma escalonada e verificar se temos linhas não nulas. Em caso afirmativo a solução do sistema é única e o sistema é L.I. Caso tenhamos menos do que linhas não nulas, o sistema é L.D.   Se , então a matriz é quadrada e o sistema tem solução única se, e somente se, a matriz é inversível, de modo que basta verificar que .   "
},
{
  "id": "dependencia_linear-10",
  "level": "2",
  "url": "bases.html#dependencia_linear-10",
  "type": "Checkpoint",
  "number": "11.12",
  "title": "",
  "body": "Quais dos seguintes conjuntos de vetores são L.I.? Justifique sua resposta analisando se o sistema associado tem solução única, infinitas soluções ou não tem solução?               "
},
{
  "id": "dependencia_linear-11",
  "level": "2",
  "url": "bases.html#dependencia_linear-11",
  "type": "Lemma",
  "number": "11.13",
  "title": "",
  "body": " Um conjunto de vetores é L.D. se, e somente se, um dos vetores pode ser escrito como combinação linear dos demais.  A completar.  "
},
{
  "id": "bases_subsection-2",
  "level": "2",
  "url": "bases.html#bases_subsection-2",
  "type": "Definition",
  "number": "11.14",
  "title": "",
  "body": "   base    Sejam um espaço vetorial e vetores. O conjunto é uma base para se, e somente se,  são linearmente independentes,  cobrem .  Alternativamente, dizemos que  formam uma base para .   "
},
{
  "id": "bases_subsection-3",
  "level": "2",
  "url": "bases.html#bases_subsection-3",
  "type": "Example",
  "number": "11.15",
  "title": "",
  "body": " Para verificarmos que formam uma base para , precisamos verificar que:  esses vetores são L.I. Para isso precisamos mostrar que a única solução de é o que ocorre de fato pois   esses vetores geram . Para isso precisamos mostrar que qualquer vetor pode ser escrito como uma combinação linear de , o que ocorre de fato pois   De modo que é uma base para .  "
},
{
  "id": "bases_subsection-6",
  "level": "2",
  "url": "bases.html#bases_subsection-6",
  "type": "Example",
  "number": "11.16",
  "title": "",
  "body": " Para verificarmos que formam uma base para , precisamos verificar que:  esses vetores são L.I. Para isso precisamos mostrar que a única solução de é para verificarmos isso, escrevemos o sistema acima na forma matricial e verificamos que esse sistema admite solução única pois a matriz tem determinante e é, portanto inversível.  esses vetores geram . Para isso precisamos mostrar que qualquer vetor pode ser escrito como uma combinação linear de , o que ocorre de fato pois, escrevendo o sistema acima na forma matricial verificamos que esse sistema admite solução ( ) para qualquer , pois a matriz é tem determinante e é, portanto inversível.  De modo que é uma base para .  "
},
{
  "id": "bases_subsection-7",
  "level": "2",
  "url": "bases.html#bases_subsection-7",
  "type": "Example",
  "number": "11.17",
  "title": "",
  "body": " Para verificarmos que formam uma base para , observamos que a matriz tem determinante e portanto é inversível, de modo que o sistema tem solução para qualquer e geram , além disso, a solução é única para qualquer , em particular para , de modo que os vetores são L.I. Dessa forma, formam uma base para .  "
},
{
  "id": "bases_subsection-8",
  "level": "2",
  "url": "bases.html#bases_subsection-8",
  "type": "Checkpoint",
  "number": "11.18",
  "title": "",
  "body": "Verifique que a base do sistema anterior é formada por vetores unitários e ortogonais entre si. "
},
{
  "id": "bases_subsection-9",
  "level": "2",
  "url": "bases.html#bases_subsection-9",
  "type": "Checkpoint",
  "number": "11.19",
  "title": "",
  "body": "Utilize o código acima para explorar o que ocorre quando os vetores formam um ângulo pequeno entre si. "
},
{
  "id": "vetores_demais",
  "level": "2",
  "url": "bases.html#vetores_demais",
  "type": "Theorem",
  "number": "11.20",
  "title": "",
  "body": "    Se geram um espaço vtorial , então qualquer coleção de vetores de é L.D.   Sejam vetores. Cada um desses vetores pode ser escrito como combinação linear de , pois estes geram . Assim, para cada , existem escalares tais que Assim, encontrar constantes tais que é o mesmo que resolver o sistema e uma solução dessa equação é tomar cada coeficiente dos vetores iguais a zero, de modo que para mostrarmos que é L.D., basta mostrar que o sistema admite múltiplas soluções, o que ocorre pois o sistema é homogêneo (portanto sempre tem solução) e tem mais variáveis do que equações (portanto admite infinitas soluções).  "
},
{
  "id": "bases_subsection-12",
  "level": "2",
  "url": "bases.html#bases_subsection-12",
  "type": "Theorem",
  "number": "11.21",
  "title": "",
  "body": "    Se é uma base para um espaço vetorial , então qualquer coleção de vetores de não gera .   A completar.  "
},
{
  "id": "bases_subsection-14",
  "level": "2",
  "url": "bases.html#bases_subsection-14",
  "type": "Definition",
  "number": "11.22",
  "title": "",
  "body": "   dimensão    Seja um espaço vetorial. Se tem uma base de vetores, dizemos que tem dimensão  . O (sub)espaço é dito ter dimensão nula ou . Em ambos os casos dizemos que tem dimensão finita . Caso não exista um conjunto de vetores que cobre com um número finito de elementos, dizemos que tem dimensão infinita .   "
},
{
  "id": "bases_subsection-15",
  "level": "2",
  "url": "bases.html#bases_subsection-15",
  "type": "Checkpoint",
  "number": "11.23",
  "title": "",
  "body": "Determine uma base para os seguintes conjuntos e determine suas dimensões  O conjunto das matrizes reais triangulares inferiores.  O conjunto dos polinômios de grau 4 (ou seja, polinômios da forma ).  O espaço nulo da matriz    "
},
{
  "id": "bases_subsection-16",
  "level": "2",
  "url": "bases.html#bases_subsection-16",
  "type": "Checkpoint",
  "number": "11.24",
  "title": "",
  "body": "Encontre outras diferentes das apresentadas na solução do exercício anterior bases para os espaços do exercício anterior. "
},
{
  "id": "bases_subsection-18",
  "level": "2",
  "url": "bases.html#bases_subsection-18",
  "type": "Theorem",
  "number": "11.25",
  "title": "",
  "body": "    Se é um espaço vetorial de dimensão , então:   qualquer conjunto de vetores linearmente independentes gera ,   quaisquer vetores que cobrem são linearmente independentes        Se tem dimensão , então admite uma base com vetores (não necessariamente ). Então o diz que, para qualquer vetor , o conjunto é L.D. Portanto a equação admite solução não nula. Nessa solução , pois, caso contrário, o conjunto seria L.D. Portanto e gera .   Seja um conjunto de vetores que gera . Se este conjunto é L.D., então um dos vetores pode ser escrito como combinação dos demais. Sem perda de generalidade, digamos que seja : então também gera , pois qualquer vetor pode ser escrito como Assim é um conjunto de geradores para e o implica que qualquer conjunto com vetores é L.D. e não tem base com vetores, o que contradiz ter dimensão .     "
},
{
  "id": "mudanca_base-3",
  "level": "2",
  "url": "bases.html#mudanca_base-3",
  "type": "Definition",
  "number": "11.26",
  "title": "",
  "body": "   coordenadas na base    Seja um espaço vetorial e uma base para . A -upla de escalares tal que é chamada de (conjunto de) coordenadas de  na base e escrevemos Normalmente omitimos a referência à base sobrescrita quando nos referimos à base canônica.   "
},
{
  "id": "mudanca_base-4",
  "level": "2",
  "url": "bases.html#mudanca_base-4",
  "type": "Remark",
  "number": "11.27",
  "title": "",
  "body": "As coordenadas de um vetor em uma base são únicas, pois, caso existissem mais de um conjunto de coordenadas correspondente a um único vetor, obteríamos uma contradição com a independencia linear dos vetores da base. Deixamos a verificação disso ao leitor. "
},
{
  "id": "base_u_canon",
  "level": "2",
  "url": "bases.html#base_u_canon",
  "type": "Example",
  "number": "11.28",
  "title": "",
  "body": " Considere a base para (note que as coordenadas mostradas para os vetores da base são as representações dos vetores na base canônica). O vetor é, na base canônica, note que o cálculo realizado acima pode ser escrito como um produto matricial  A matrix é a matriz de mudança de base da base para a base canônica.  "
},
{
  "id": "base_canon_u",
  "level": "2",
  "url": "bases.html#base_canon_u",
  "type": "Example",
  "number": "11.29",
  "title": "",
  "body": " Considere a base para e o vetor (na base canônica). As coordenadas de na base são encontradas resolvendo o sistema Dessa forma A matrix é a matriz de mudança de base da base canônica para a base .  "
},
{
  "id": "base_canoninca_na_u",
  "level": "2",
  "url": "bases.html#base_canoninca_na_u",
  "type": "Example",
  "number": "11.30",
  "title": "",
  "body": " Considere a base para e os vetores da base canônica. As coordenadas de são Note que as colunas da matriz são as coordenadas dos vetores na base .  "
},
{
  "id": "mudanca_base-9",
  "level": "2",
  "url": "bases.html#mudanca_base-9",
  "type": "Definition",
  "number": "11.31",
  "title": "",
  "body": "   matriz de mudança de base    Sejam um espaço vetorial e e bases para . Cada vetor da base tem coordenadas na base , . A matriz de mudança de base da base para a base é a matriz    "
},
{
  "id": "mudanca_base-10",
  "level": "2",
  "url": "bases.html#mudanca_base-10",
  "type": "Checkpoint",
  "number": "11.32",
  "title": "",
  "body": "Sejam um espaço vetorial e uma base para . Quais as coordenadas de na base . "
},
{
  "id": "mudanca_base-11",
  "level": "2",
  "url": "bases.html#mudanca_base-11",
  "type": "Remark",
  "number": "11.33",
  "title": "",
  "body": "Sejam e bases para . Se um vetor tem coordenadas e nas bases e nas respectivas bases e e são as matrizes de mudança de base das bases e para a base canônica, temos que de modo que ou seja, a matriz de mudança de base da base para a base é . "
},
{
  "id": "mudanca_base-13",
  "level": "2",
  "url": "bases.html#mudanca_base-13",
  "type": "Remark",
  "number": "11.34",
  "title": "",
  "body": "A matriz de mudança de base sempre é inversível, pois, caso não fosse, o sistema admitiria soluções não nulas, de modo que (a completar). "
},
{
  "id": "mudanca_base-14",
  "level": "2",
  "url": "bases.html#mudanca_base-14",
  "type": "Remark",
  "number": "11.35",
  "title": "",
  "body": "Sejam um espaço vetorial e  bases para e A = a matriz de mudança de base da base para a base , de modo que  "
},
{
  "id": "mudanca_base-15",
  "level": "2",
  "url": "bases.html#mudanca_base-15",
  "type": "Checkpoint",
  "number": "11.36",
  "title": "",
  "body": "Encontre as matrizes de mudança de base da base para a base para as de bases a seguir:  ,  ,  ,  ,  ,   "
},
{
  "id": "esp_linha-2",
  "level": "2",
  "url": "bases.html#esp_linha-2",
  "type": "Definition",
  "number": "11.37",
  "title": "",
  "body": "   espaço vetorial    Seja uma matriz . O subespaço de coberto pelos vetores linha de é chamado de de espaço linha de . O subespaço de coberto pelos vetores coluna de é chamado de espaço coluna de .   "
},
{
  "id": "esp_linha-3",
  "level": "2",
  "url": "bases.html#esp_linha-3",
  "type": "Example",
  "number": "11.38",
  "title": "",
  "body": " Para a matriz , o espaço linha é formado pelas triplas da forma: , ou seja, é igual ao . O espaço coluna é formado pelos vetores da forma: , ou seja, é igual ao .  "
},
{
  "id": "esp_linha-4",
  "level": "2",
  "url": "bases.html#esp_linha-4",
  "type": "Example",
  "number": "11.39",
  "title": "",
  "body": " Para a matriz , temos que há duas linhas que são iguais as outras duas e o espaço linha é formado pelas quadruplas da forma: , ou seja, é igual ao . Denotando para as colunas de , observamos que e e o espaço coluna é formado pelos vetores da forma: , ou seja, é igual ao .  "
},
{
  "id": "esp_linha-5",
  "level": "2",
  "url": "bases.html#esp_linha-5",
  "type": "Theorem",
  "number": "11.40",
  "title": "",
  "body": "   Duas matrizes equivalentes por linhas têm o mesmo espaço linha.  A completar.  "
},
{
  "id": "esp_linha-6",
  "level": "2",
  "url": "bases.html#esp_linha-6",
  "type": "Definition",
  "number": "11.41",
  "title": "",
  "body": "   posto    O posto ( rank em inglês) de uma matriz , denotado ou , é a dimensão do espaço linha ou do espaço coluna, pois, ambas são iguais de .   "
},
{
  "id": "esp_linha-7",
  "level": "2",
  "url": "bases.html#esp_linha-7",
  "type": "Remark",
  "number": "11.42",
  "title": "",
  "body": "O posto de uma matriz é igual ao número de linhas não nulas na sua forma escalonada e as linhas não nulas da forma escalonada formam uma base para o espaço linha de . "
},
{
  "id": "esp_linha-8",
  "level": "2",
  "url": "bases.html#esp_linha-8",
  "type": "Theorem",
  "number": "11.43",
  "title": "",
  "body": "   A dimensão do espaço linha de uma matriz é igual à dimensão do seu espaço coluna.  A completar.  "
},
{
  "id": "esp_linha-9",
  "level": "2",
  "url": "bases.html#esp_linha-9",
  "type": "Remark",
  "number": "11.44",
  "title": "",
  "body": "As colunas da matriz na forma escalonada não formam uma base para o espaço coluna de  , apesar de terem a mesma dimensão. Todavia os pivôs da matriz escalonada indicam as colunas que formam uma base para o espaço coluna de . "
},
{
  "id": "esp_linha-10",
  "level": "2",
  "url": "bases.html#esp_linha-10",
  "type": "Remark",
  "number": "11.45",
  "title": "",
  "body": "O espaço linha de é igual ao espaço coluna de (se transpormos os vetores). "
},
{
  "id": "esp_linha-11",
  "level": "2",
  "url": "bases.html#esp_linha-11",
  "type": "Checkpoint",
  "number": "11.46",
  "title": "",
  "body": "Determine o posto da matriz e bases para seu espaço linha e espaço coluna. "
},
{
  "id": "esp_linha-12",
  "level": "2",
  "url": "bases.html#esp_linha-12",
  "type": "Checkpoint",
  "number": "11.47",
  "title": "",
  "body": "Determine o posto da matriz e bases para seu espaço linha e espaço coluna. "
},
{
  "id": "esp_linha-15",
  "level": "2",
  "url": "bases.html#esp_linha-15",
  "type": "Remark",
  "number": "11.48",
  "title": "",
  "body": "Um sistema linear tem solução se, e somente se, está no espaço coluna de . "
},
{
  "id": "esp_linha-16",
  "level": "2",
  "url": "bases.html#esp_linha-16",
  "type": "Definition",
  "number": "11.49",
  "title": "",
  "body": "   nulidade    A nulidade de uma matriz , denotado , é a dimensão do seu espaço nulo.   "
},
{
  "id": "esp_linha-17",
  "level": "2",
  "url": "bases.html#esp_linha-17",
  "type": "Theorem",
  "number": "11.50",
  "title": "do núcleo e da imagem.",
  "body": " do núcleo e da imagem   Para qualquer matriz vale:   A completar.  "
},
{
  "id": "produto_interno",
  "level": "1",
  "url": "produto_interno.html",
  "type": "Section",
  "number": "12",
  "title": "Produto interno e ortogonalidade em <span class=\"process-math\">\\(\\mathbb{R}^n\\text{.}\\)<\/span>",
  "body": " Produto interno e ortogonalidade em .   Ao tomarmos uma base para um espaço vetorial, buscamos, com frequência, uma base formada por vetores ortogonais (perpendiculares) entre si ou temos apenas alguns vetores e desejamos adicionar outros vetores para \"completar\" a base. Nessa seção construíremos os conceitos e teoremas necessários para fazer isso em .    Produto Interno (ou escalar) em     produto interno    Dados , , , definimos o produto interno (ou produto escalar ) de e como O produto interno também é denotado por ou .     Dados e , .    Dados e , .    Dados e , .    Propriedades do produto interno   Se e é um escalar, então   .     Exercício.      comprimento    O comprimento (euclidiano) (ou norma ) de um vetor é     Em particular a distância entre os pontos finais de dois vetores é igual a .   Dados e , .       Se , são vetores não nulos e é o ângulo entre eles, então   Pela Lei dos cossenos Por outro lado, Como as expressões são iguais à , elas são iguais entre si e    Podemos utilizar o teorema acima como um método para definir o ângulo entre dois vetores para , qualquer.  Se são vetores não nulos, suas direções são os vetores unitários e o ângulo entre eles é definido através de Em particular, dizemos que e são ortogonis se .   O ângulo entre os vetores e seus vetores unitários é...      Projeções escalares e vetoriais  A projeção vetorial de um vetor na direção do vetor é um vetor , múltiplo de tal que .   Dados vetores , queremos escrever com . Ou seja, vamos decompor na soma de um vetor na direção de com um vetor perpendicular a .  Note que , mas    é a projeção escalar de sobre .  é a projeção vetorial de sobre .  Encontre as projeções escalares e vetoriais dos vetores e na direção do vetor para      Conjuntos ortogonais e ortogonalização de Gram-Schmidt     conjuntos ortonormais    Sejam um conjunto de vetores em um espaço vetorial munido com produto interno. Se sempre que , então o conjunto é dito ortogonal . Além disso, se para todo , o conjunto é dito ortonormal .     O conjunto formado pelos pelos vetores é ortogonal pois , e . Todavia, o conjunto não é ortonormal pois . Podemos obter um conjunto ortonormal a partir de um conjunto ortogonal, se dividirmos cada um dos vetores por sua norma. Assim, é ortonormal o conjunto formado pelos vetores:       Se é um conjunto ortogonal de vetores não nulos em um espaço vetorial com produto interno, então é Linearmente Independente.   Isso vale para qualquer , de modo que a única solução de é .      Seja é uma base ortonormal para um espaço vetorial com produto interno. Se , então .      O pode ser utilizado como um método para calcular as coordenadas de um vetor em uma base ortonormal de um espaço vetorial com produto interno.  Calcule as coordenadas do vetor na base formada pelos vetores   Suponha que temos dois vetores L.I. e buscamos uma base ortonormal que contenha um vetor na direção de . Podemos fazer isso do através dos seguintes vetores:  ,  ,  .     Note que a base obtida pelo processo acima é, de fato, ortonormal, pois e   Suponha, agora, que temos três vetores L.I. e buscamos uma base ortonormal que contenha um vetor na direção de . Podemos fazer isso do através dos seguintes vetores:  ,  ,  ,  ,  .     Utilize o processo descrito acima para encontrar uma base para a partir de , , .  Processo de ortogonalização de Gram-Schmidt.  Definimos agora o processo de ortogonalização de Gram-Schmidt em geral.  Seja uma base para um espaço com produto interno . Obtemos uma base ortonormal para definindo:   e definindo recursivamente por    Encontre uma base ortonormal para o espaço coluna de   O processo de ortogonalizaçã de Gram-Schmidt tem a propriedade que é uma base ortonormal para para qualquer . Deixamos para o leitor a verificação dessa propriedade.  Se é uma base ortonormal para , então a matriz de mudança de base da base para a base canônica tem inversa . Deixamos para o leitor a verificação dessa propriedade.   "
},
{
  "id": "inner_prod-2",
  "level": "2",
  "url": "produto_interno.html#inner_prod-2",
  "type": "Definition",
  "number": "12.1",
  "title": "",
  "body": "   produto interno    Dados , , , definimos o produto interno (ou produto escalar ) de e como O produto interno também é denotado por ou .   "
},
{
  "id": "inner_prod-3",
  "level": "2",
  "url": "produto_interno.html#inner_prod-3",
  "type": "Example",
  "number": "12.2",
  "title": "",
  "body": " Dados e , .  "
},
{
  "id": "inner_prod-4",
  "level": "2",
  "url": "produto_interno.html#inner_prod-4",
  "type": "Example",
  "number": "12.3",
  "title": "",
  "body": " Dados e , .  "
},
{
  "id": "inner_prod-5",
  "level": "2",
  "url": "produto_interno.html#inner_prod-5",
  "type": "Example",
  "number": "12.4",
  "title": "",
  "body": " Dados e , .  "
},
{
  "id": "inner_prod-6",
  "level": "2",
  "url": "produto_interno.html#inner_prod-6",
  "type": "Theorem",
  "number": "12.5",
  "title": "Propriedades do produto interno.",
  "body": " Propriedades do produto interno   Se e é um escalar, então   .     Exercício.  "
},
{
  "id": "inner_prod-7",
  "level": "2",
  "url": "produto_interno.html#inner_prod-7",
  "type": "Definition",
  "number": "12.6",
  "title": "",
  "body": "   comprimento    O comprimento (euclidiano) (ou norma ) de um vetor é    "
},
{
  "id": "inner_prod-9",
  "level": "2",
  "url": "produto_interno.html#inner_prod-9",
  "type": "Example",
  "number": "12.7",
  "title": "",
  "body": " Dados e , .  "
},
{
  "id": "inner_prod-11",
  "level": "2",
  "url": "produto_interno.html#inner_prod-11",
  "type": "Theorem",
  "number": "12.8",
  "title": "",
  "body": "   Se , são vetores não nulos e é o ângulo entre eles, então   Pela Lei dos cossenos Por outro lado, Como as expressões são iguais à , elas são iguais entre si e   "
},
{
  "id": "inner_prod-13",
  "level": "2",
  "url": "produto_interno.html#inner_prod-13",
  "type": "Remark",
  "number": "12.9",
  "title": "",
  "body": "Se são vetores não nulos, suas direções são os vetores unitários e o ângulo entre eles é definido através de Em particular, dizemos que e são ortogonis se . "
},
{
  "id": "inner_prod-14",
  "level": "2",
  "url": "produto_interno.html#inner_prod-14",
  "type": "Example",
  "number": "12.10",
  "title": "",
  "body": " O ângulo entre os vetores e seus vetores unitários é...  "
},
{
  "id": "projecoes-6",
  "level": "2",
  "url": "produto_interno.html#projecoes-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "projeção escalar "
},
{
  "id": "projecoes-7",
  "level": "2",
  "url": "produto_interno.html#projecoes-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "projeção vetorial "
},
{
  "id": "projecoes-8",
  "level": "2",
  "url": "produto_interno.html#projecoes-8",
  "type": "Checkpoint",
  "number": "12.11",
  "title": "",
  "body": "Encontre as projeções escalares e vetoriais dos vetores e na direção do vetor para  "
},
{
  "id": "Gram-Schmidt-2",
  "level": "2",
  "url": "produto_interno.html#Gram-Schmidt-2",
  "type": "Definition",
  "number": "12.12",
  "title": "",
  "body": "   conjuntos ortonormais    Sejam um conjunto de vetores em um espaço vetorial munido com produto interno. Se sempre que , então o conjunto é dito ortogonal . Além disso, se para todo , o conjunto é dito ortonormal .   "
},
{
  "id": "Gram-Schmidt-3",
  "level": "2",
  "url": "produto_interno.html#Gram-Schmidt-3",
  "type": "Example",
  "number": "12.13",
  "title": "",
  "body": " O conjunto formado pelos pelos vetores é ortogonal pois , e . Todavia, o conjunto não é ortonormal pois . Podemos obter um conjunto ortonormal a partir de um conjunto ortogonal, se dividirmos cada um dos vetores por sua norma. Assim, é ortonormal o conjunto formado pelos vetores:   "
},
{
  "id": "Gram-Schmidt-4",
  "level": "2",
  "url": "produto_interno.html#Gram-Schmidt-4",
  "type": "Theorem",
  "number": "12.14",
  "title": "",
  "body": "   Se é um conjunto ortogonal de vetores não nulos em um espaço vetorial com produto interno, então é Linearmente Independente.   Isso vale para qualquer , de modo que a única solução de é .  "
},
{
  "id": "coord_prod_int",
  "level": "2",
  "url": "produto_interno.html#coord_prod_int",
  "type": "Theorem",
  "number": "12.15",
  "title": "",
  "body": "   Seja é uma base ortonormal para um espaço vetorial com produto interno. Se , então .     "
},
{
  "id": "Gram-Schmidt-7",
  "level": "2",
  "url": "produto_interno.html#Gram-Schmidt-7",
  "type": "Checkpoint",
  "number": "12.16",
  "title": "",
  "body": "Calcule as coordenadas do vetor na base formada pelos vetores  "
},
{
  "id": "Gram-Schmidt-13",
  "level": "2",
  "url": "produto_interno.html#Gram-Schmidt-13",
  "type": "Checkpoint",
  "number": "12.17",
  "title": "",
  "body": "Utilize o processo descrito acima para encontrar uma base para a partir de , , . "
},
{
  "id": "Gram-Schmidt-21",
  "level": "2",
  "url": "produto_interno.html#Gram-Schmidt-21",
  "type": "Checkpoint",
  "number": "12.18",
  "title": "",
  "body": "Encontre uma base ortonormal para o espaço coluna de  "
},
{
  "id": "Gram-Schmidt-22",
  "level": "2",
  "url": "produto_interno.html#Gram-Schmidt-22",
  "type": "Remark",
  "number": "12.19",
  "title": "",
  "body": "O processo de ortogonalizaçã de Gram-Schmidt tem a propriedade que é uma base ortonormal para para qualquer . Deixamos para o leitor a verificação dessa propriedade. "
},
{
  "id": "Gram-Schmidt-23",
  "level": "2",
  "url": "produto_interno.html#Gram-Schmidt-23",
  "type": "Remark",
  "number": "12.20",
  "title": "",
  "body": "Se é uma base ortonormal para , então a matriz de mudança de base da base para a base canônica tem inversa . Deixamos para o leitor a verificação dessa propriedade. "
},
{
  "id": "Transformacoes_lineares",
  "level": "1",
  "url": "Transformacoes_lineares.html",
  "type": "Section",
  "number": "13",
  "title": "Transformações Lineares",
  "body": " Transformações Lineares   Muitos problemas de interesse nas ciências e na engenharia são aplicações lineares. Para aplicações lineares podemos utilizar os conhecimentos adquiridos nas seções anteriores sobre bases e matrizes para estudar e resolver problemas desse tipo de maneira conveniente.    Transformações Lineares     transformação linear    Um mapeamento uma função  , de um espaço vetorial para um espaço vetorial é dita uma transformação linear  também chamado de mapeamento linear, operador linear ou função linear (dependendo do contexto) se      Seja a função definida por é uma transformação linear, pois     Seja a função definida por não é uma transformação linear, pois     O mapeamento definido por é uma transformação linear, pois Podemos notar que Essa transformação linear é a projeção do espaço em .   O código abaixo faz um plot da projeção do exemplo acima.    O mapeamento definido por é uma transformação linear, pois Podemos notar que    Seja é uma matriz . Mostre que a função é uma transformação linear.   Rotação no plano  Seja a operação que os vetores do plano em radianos no sentido anti horário. Para compreendermos seu efeito, colocamos os vetores do plano em sua forma polar: e percebemos que rodar no sentido anti-horário significa somar ao ângulo, de modo que Pelo exercício anterior, a rotação é uma transformação linear.      Se é uma transformação linear e , então                Seja um espaço vetorial. O operador identidade definido por é uma transformação linear, pois     O mapeamento , que associa a cada função a sua derivada é um operador linear pois, para quaisquer e ,     Seja o conjunto dos polinômios de grau 3. Ele é um espaço vetorial e é uma base para esse espaço. O operador definido por é um operador linear, pois ... Se , então suas coordenadas na base são e , de modo que as suas coordenadas na base são iguais a       Representação Matricial de Transformações Lineares   da Representação Matricial   Sejam uma transformação linear entre dois espaços vetoriais e e , bases para esses espaços vetoriais, respectivamente. Se um vetor tem coordenadas , então existe uma matriz , , tal que as coordenadas de na base são dadas por As colunas dessa matriz são obtidas calculando , , de modo que .   de modo que as coordenadas de na base são    Dizemos que representa nas bases e .   Seja , a transformação linear definida por A matriz que representa nas bases canônicas de e é de modo que .    A matriz que representa a transformação linear do exemplo anterior nas bases e na base canônica é de modo que .    A matriz que representa a transformação linear do exemplo anterior nas bases e tem colunas , e , nessa ordem.    Seja a projeção no plano que passa pela origem e têm vetores diretores . Para representá-la na base notamos que e de modo que, nessa base, a é representada pela matriz    Como representar a matriz do exemplo anterior na base canônica?    da Mudança de Base   Sejam e bases para um espaço vetorial , a matriz de mudança de base da base para a base . Se é um operador linear em representado pela matriz na base , então a matriz que representa na base é   A completar.   Esse teorema é frequentemente utilizado com sendo a base canônica, e sendo a matriz de mudança de base da base para a base canônica.    Para calcularmos a matriz que representa a projeção do na base canônica, precisamos da matriz de mudança de base e sua inversa de modo que    Determine a matriz da rotação de radianos em torno do eixo , no sentido anti-horário, na base .  Determine a matriz da rotação de radianos em torno do eixo , no sentido anti-horário, na base canônica.  Temos a situação que se duas matrizes e representam a mesma transformação linear, em bases e , respectivamente, e é a matriz de mudança de base da base para a base , então . Isso nos motiva a introduzir a seguinte definição:     matrizes similares    Duas matrizes , e , são ditas similares se existe uma matriz inversível tal que        Problemas envolvendo transformações Lineares  Utilize o código abaixo para testar as respostas de seus exercícios   Encontre uma matriz que representa uma rotação de ângulo no sentido anti-horário em torno do eixo y.  Encontre uma matriz que representa uma rotação de ângulo no sentido anti-horário em torno do eixo .  Encontre uma matriz que dilata a direção x por 2, a direção y por 0.5 e a direção z por 3.  Encontre uma matriz que dilata a direção por 2, a direção por 0.5 e a direção por 3.   Translações não são transformações lineares, contudo podemos representá-las como matrizes utilizando uma dimensão adicional. Dado um ponto no plano , podemos transladá-lo por , , através das duas primeiras coordenadas do vetor:   Verifique isso com o código a seguir:    "
},
{
  "id": "trans_lin-2",
  "level": "2",
  "url": "Transformacoes_lineares.html#trans_lin-2",
  "type": "Definition",
  "number": "13.1",
  "title": "",
  "body": "   transformação linear    Um mapeamento uma função  , de um espaço vetorial para um espaço vetorial é dita uma transformação linear  também chamado de mapeamento linear, operador linear ou função linear (dependendo do contexto) se    "
},
{
  "id": "trans_lin-3",
  "level": "2",
  "url": "Transformacoes_lineares.html#trans_lin-3",
  "type": "Example",
  "number": "13.2",
  "title": "",
  "body": " Seja a função definida por é uma transformação linear, pois   "
},
{
  "id": "trans_lin-4",
  "level": "2",
  "url": "Transformacoes_lineares.html#trans_lin-4",
  "type": "Example",
  "number": "13.3",
  "title": "",
  "body": " Seja a função definida por não é uma transformação linear, pois   "
},
{
  "id": "trans_lin-5",
  "level": "2",
  "url": "Transformacoes_lineares.html#trans_lin-5",
  "type": "Example",
  "number": "13.4",
  "title": "",
  "body": " O mapeamento definido por é uma transformação linear, pois Podemos notar que Essa transformação linear é a projeção do espaço em .  "
},
{
  "id": "trans_lin-8",
  "level": "2",
  "url": "Transformacoes_lineares.html#trans_lin-8",
  "type": "Example",
  "number": "13.5",
  "title": "",
  "body": " O mapeamento definido por é uma transformação linear, pois Podemos notar que   "
},
{
  "id": "trans_lin-9",
  "level": "2",
  "url": "Transformacoes_lineares.html#trans_lin-9",
  "type": "Checkpoint",
  "number": "13.6",
  "title": "",
  "body": "Seja é uma matriz . Mostre que a função é uma transformação linear. "
},
{
  "id": "trans_lin-10",
  "level": "2",
  "url": "Transformacoes_lineares.html#trans_lin-10",
  "type": "Example",
  "number": "13.7",
  "title": "Rotação no plano.",
  "body": " Rotação no plano  Seja a operação que os vetores do plano em radianos no sentido anti horário. Para compreendermos seu efeito, colocamos os vetores do plano em sua forma polar: e percebemos que rodar no sentido anti-horário significa somar ao ângulo, de modo que Pelo exercício anterior, a rotação é uma transformação linear.  "
},
{
  "id": "linear_trans_prop",
  "level": "2",
  "url": "Transformacoes_lineares.html#linear_trans_prop",
  "type": "Lemma",
  "number": "13.8",
  "title": "",
  "body": "   Se é uma transformação linear e , então              "
},
{
  "id": "trans_lin-12",
  "level": "2",
  "url": "Transformacoes_lineares.html#trans_lin-12",
  "type": "Example",
  "number": "13.9",
  "title": "",
  "body": " Seja um espaço vetorial. O operador identidade definido por é uma transformação linear, pois   "
},
{
  "id": "trans_lin-13",
  "level": "2",
  "url": "Transformacoes_lineares.html#trans_lin-13",
  "type": "Example",
  "number": "13.10",
  "title": "",
  "body": " O mapeamento , que associa a cada função a sua derivada é um operador linear pois, para quaisquer e ,   "
},
{
  "id": "trans_lin-14",
  "level": "2",
  "url": "Transformacoes_lineares.html#trans_lin-14",
  "type": "Example",
  "number": "13.11",
  "title": "",
  "body": " Seja o conjunto dos polinômios de grau 3. Ele é um espaço vetorial e é uma base para esse espaço. O operador definido por é um operador linear, pois ... Se , então suas coordenadas na base são e , de modo que as suas coordenadas na base são iguais a   "
},
{
  "id": "rep_matricial",
  "level": "2",
  "url": "Transformacoes_lineares.html#rep_matricial",
  "type": "Theorem",
  "number": "13.12",
  "title": "da Representação Matricial.",
  "body": " da Representação Matricial   Sejam uma transformação linear entre dois espaços vetoriais e e , bases para esses espaços vetoriais, respectivamente. Se um vetor tem coordenadas , então existe uma matriz , , tal que as coordenadas de na base são dadas por As colunas dessa matriz são obtidas calculando , , de modo que .   de modo que as coordenadas de na base são   "
},
{
  "id": "matriz_lin_trans-4",
  "level": "2",
  "url": "Transformacoes_lineares.html#matriz_lin_trans-4",
  "type": "Example",
  "number": "13.13",
  "title": "",
  "body": " Seja , a transformação linear definida por A matriz que representa nas bases canônicas de e é de modo que .  "
},
{
  "id": "matriz_lin_trans-5",
  "level": "2",
  "url": "Transformacoes_lineares.html#matriz_lin_trans-5",
  "type": "Example",
  "number": "13.14",
  "title": "",
  "body": " A matriz que representa a transformação linear do exemplo anterior nas bases e na base canônica é de modo que .  "
},
{
  "id": "matriz_lin_trans-6",
  "level": "2",
  "url": "Transformacoes_lineares.html#matriz_lin_trans-6",
  "type": "Example",
  "number": "13.15",
  "title": "",
  "body": " A matriz que representa a transformação linear do exemplo anterior nas bases e tem colunas , e , nessa ordem.  "
},
{
  "id": "ex_proj",
  "level": "2",
  "url": "Transformacoes_lineares.html#ex_proj",
  "type": "Example",
  "number": "13.16",
  "title": "",
  "body": " Seja a projeção no plano que passa pela origem e têm vetores diretores . Para representá-la na base notamos que e de modo que, nessa base, a é representada pela matriz   "
},
{
  "id": "mud_base",
  "level": "2",
  "url": "Transformacoes_lineares.html#mud_base",
  "type": "Theorem",
  "number": "13.17",
  "title": "da Mudança de Base.",
  "body": " da Mudança de Base   Sejam e bases para um espaço vetorial , a matriz de mudança de base da base para a base . Se é um operador linear em representado pela matriz na base , então a matriz que representa na base é   A completar.  "
},
{
  "id": "matriz_lin_trans-13",
  "level": "2",
  "url": "Transformacoes_lineares.html#matriz_lin_trans-13",
  "type": "Example",
  "number": "13.18",
  "title": "",
  "body": " Para calcularmos a matriz que representa a projeção do na base canônica, precisamos da matriz de mudança de base e sua inversa de modo que   "
},
{
  "id": "matriz_lin_trans-14",
  "level": "2",
  "url": "Transformacoes_lineares.html#matriz_lin_trans-14",
  "type": "Checkpoint",
  "number": "13.19",
  "title": "",
  "body": "Determine a matriz da rotação de radianos em torno do eixo , no sentido anti-horário, na base . "
},
{
  "id": "matriz_lin_trans-15",
  "level": "2",
  "url": "Transformacoes_lineares.html#matriz_lin_trans-15",
  "type": "Checkpoint",
  "number": "13.20",
  "title": "",
  "body": "Determine a matriz da rotação de radianos em torno do eixo , no sentido anti-horário, na base canônica. "
},
{
  "id": "matriz_lin_trans-17",
  "level": "2",
  "url": "Transformacoes_lineares.html#matriz_lin_trans-17",
  "type": "Definition",
  "number": "13.21",
  "title": "",
  "body": "   matrizes similares    Duas matrizes , e , são ditas similares se existe uma matriz inversível tal que    "
},
{
  "id": "trans_lineares_prob-4",
  "level": "2",
  "url": "Transformacoes_lineares.html#trans_lineares_prob-4",
  "type": "Checkpoint",
  "number": "13.22",
  "title": "",
  "body": "Encontre uma matriz que representa uma rotação de ângulo no sentido anti-horário em torno do eixo y. "
},
{
  "id": "trans_lineares_prob-5",
  "level": "2",
  "url": "Transformacoes_lineares.html#trans_lineares_prob-5",
  "type": "Checkpoint",
  "number": "13.23",
  "title": "",
  "body": "Encontre uma matriz que representa uma rotação de ângulo no sentido anti-horário em torno do eixo . "
},
{
  "id": "trans_lineares_prob-6",
  "level": "2",
  "url": "Transformacoes_lineares.html#trans_lineares_prob-6",
  "type": "Checkpoint",
  "number": "13.24",
  "title": "",
  "body": "Encontre uma matriz que dilata a direção x por 2, a direção y por 0.5 e a direção z por 3. "
},
{
  "id": "trans_lineares_prob-7",
  "level": "2",
  "url": "Transformacoes_lineares.html#trans_lineares_prob-7",
  "type": "Checkpoint",
  "number": "13.25",
  "title": "",
  "body": "Encontre uma matriz que dilata a direção por 2, a direção por 0.5 e a direção por 3. "
},
{
  "id": "auto_val",
  "level": "1",
  "url": "auto_val.html",
  "type": "Section",
  "number": "14",
  "title": "Autovalores e autovetores",
  "body": " Autovalores e autovetores   Temos visto que, muitas vezes, é mais fácil compreender uma transformação linear em uma base adaptada para o problema em questão. Todavia encontrar uma base natural para o problema nem sempre é fácil. Nesse capítulo vamos nos ocupar com o problema no outro sentido: se temos uma transformação linear (representada por uma matriz na base canônica, por exemplo), quais são as direções mais naturais a se escolher para uma base?  Responderemos a essa pergunta passa por entender quais direções a transformação linear é mais simples, tendo o efeito de apenas multiplicar vetores naquela direção por uma constante. A constante pela qual o vetor é multiplicado é chamada de autovalor e a direção é chamada de autovetor. Veremos que as rotações também serão incluídas nesse caso naturalmente, com autovalores complexos.    Autovalores e autovetores     autovalor    Seja uma matriz . Um número (real ou complexo) é dito um autovalor de se existe um vetor não nulo tal que . é dito um autovetor associado ao autovalor .     A matriz, admite como autovalor porque o vetor satisfaz . Outro autovalor dessa matrix é 0 pois o vetor satisfaz .   Nesse exemplo os autovalores e autovetores foram dados, mas como fazemos para encontrar os autovalores de uma matriz qualquer? A observação a seguir nos dá um método para isso.  Se existe um vetor não nulo tal que , temos que e, portanto, , ou seja, essa equação tem solução não nula e a matriz não é inversível. Desse modo, encontrar autovalores é descobrir para que escalares temos . O polinômio é chamado de polinômio característico e os autovalores são as raízes desse polinômio. Uma vez encontrados os autovalores, resolvemos o sistema para cada autovalor encontrado para determinar os autovetores associados a cada autovalor.   A matriz, tem polinômio característico que têm raízes 2 e -2. Os autovetores associados ao autovalor 2 são encontrados resolvendo Os autovetores associados ao autovalor -2 são encontrados resolvendo     Confira a sua resposta com o código abaixo.   Podemos pensar na matriz como uma transformação linear da base canônica para a base canônica. Se representarmos essa transformação linear na base de autovetores (supondo que exista uma), temos que ela será representada por uma matriz diagonal, com os autovalores na diagonal. Desse modo temos que: Encontrar matrizes (de autovetores) e (com autovalores na diagonal) é conhecido como a diagonalização da matriz A.  Infelizmente nem sempre é possível encontrar uma base de autovetores para uma matriz.   O código abaixo pode ser utilizado para verificar se o produto das matrizes encontradas retorna a matriz original.   Esse processo é particularmente útil quando precisamos aplicar uma transformação linear multiplas vezes, pois   e, para uma matriz diagonal,   Suponha que uma cidade tem 100000 homens separados em dois grupos: não comprometidos e comprometidos; e que, a cada ano, dos não comprometidos passam a ser comprometidos e dos comprometidos passam a ser não comprometidos. Se no primeiro ano, temos 50000 comprometidos e 50000 não comprometidos, quais os números de comprometidos e não comprometidos após 1, 10 e 50 anos?     Resultados e dificuldades relacionados a autovetores e autovalores.  Nessa seção discutimos quando é possível diagonalizar uma matriz e quais as opções quando isso não é possível.     Seja uma matriz . Autovetores associados a autovalores distintos são linearmente independentes.  A completar.   O garante que se o polinômio característico tem raízes distintas, teremos autovetores LI. Todavia esses autovalores e autovetores ainda podem ser complexos, o que pode não permite diagonalizar a matriz, se buscamos uma matriz real.     Seja uma matriz real Na qual todos os coeficientes são reais  simétrica. Então, seus autovalores e autovetores são reais e a matriz tem autovetores distintos. Além disso, admite uma base de autovetores ortonormais.  A completar.   Isso significa que uma matriz simétrica sempre é diagonalizável (A matriz é a matriz de mudança de base da base de autovetores para a base canônica). Se uma matriz não é simétrica essa pode não ser a situação.  Para analisar o que ocorre no caso de autovalores múltiplos, precisamos de números complexos e recorro a um resultado de variável complexa, que diz que um polinômio real ou complexo de grau sempre pode ser decomposto no produto de monômios de grau . Em particular onde é a variável complexa, , são as raízes (possivelmente complexas) e os coeficientes, .     multiplicidades algébrica e geométrica    Seja o polinômio característico de uma matriz real , . O número de vezes que um autovalor aparece na decomposição no produto de monômios de é chamada de multiplicidade algébrica desse autovalor. A dimensão do espaço nulo de , é a multiplicidade geométrica do autovalor .              Uma matriz real é diagonalizável exatamente quando tem autovalores reais e a multiplicidade geométrica é igual a multiplicidade algébrica para cada autovalor.   Diagonalize a matriz    Se uma matriz tem autovalores complexos, então não é possível colocá-la na forma diagonal usual utilizando matrizes reais. Todavia os autovalores complexos sempre vem em pares conjugados , com autovetores complexos . Vejamos em detalhe o que ocorre com as partes reais e complexas do autovetor associado ao autovalor (escrito na forma polar) .  Assim, lembrando que e , temos    Desse modo, se , com reais, temos:   e é possível escrever um bloco na diagonal da forma:   de modo que autovalores complexos indicam a rotações no plano definido por e . Deixamos ao leitor a verificação do fato que e são linearmente independentes.       Para mais informações sobre esse processo, ver Forma de Jordan .     Aplicações: sistemas de EDOs lineares de primeira ordem.  As leis que descrevem muitos processos na natureza são dadas por equações diferenciais. Por exemplo, vamos considerar a radioatividade. Suponha que uma amostra de material contém átomos radioativos. É natural pensar que o número de átomos, , que decai a cada segundo é proporcional ao número de átomos que ainda não decairam. Em linguagem matemática, isso significa que:   Um problema assim é chamado de uma equação diferencial ordinária e sua solução é .  Em outros problemas pode-se ter múltiplas funções simultaneamente.   Uma amostra formada por dois isótopos radioativos com quantidades iniciais e e a fração dos átomos que decai a cada segundo é 0.1% e 0.2%. Então o número de átomos radioativos na amostra de cada um dos tipos é ...    Alguns isótopos decaem em outros isótopos que também são radioativos. Suponha que um isótopo decai no isótopo , que decai no isótopo . Uma amostra formada pelos isótopos , e com quantidades iniciais e e e a fração dos átomos que decai a cada segundo do isótopo A para o isótopo B é 0.1%, do isótopo B para o isótopo C é 0.2% e do isótopo B para material não radioativo é de 0.3%. Então o número de átomos radioativos na amostra de cada um dos tipos é ...   Consideremos o sistema de equações diferenciais (com condições iniciais associadas):   que pose ser escrito na forma   Se a matriz A tem autovalores reais, ,(não necessariamente distintos) e a eles estão associados n autovetores LI, , então a solução do sistema de EDOs é   Resolva o sistema      Aplicações: sistemas de EDOs lineares de segunda ordem.  As leis que descrevem muitos processos na natureza são dadas por equações diferenciais. Muitas vezes essas leis envolvem derivadas de segunda ordem. Por exemplo a segunda lei de Newton, , ao lembrarmos que a aceleração é a taxa de variação da velocidade e a velocidade é a taxa de variação da posição: . Vejamos como resolver uma EDO linear de segunda ordem num exemplo.   Consideremos o PVI Podemos definir variáveis , , de modo que obtemos o sistema Autovalores, autovetores, ...    Consideremos o PVI Podemos definir variáveis , , de modo que obtemos o sistema Autovalores, autovetores, ...   Podemos ter um sistema de equações lineares de segunda ordem.   Consideremos o PVI que pode ser escrito como Podemos definir variáveis , , de modo que obtemos o sistema Autovalores, autovetores, ...   Consideremos o sistema de equações diferenciais (com condições iniciais associadas), escrito na forma matricial, denotando , como:   Podemos definir as variáveis e, denotando, e , temos o problema linear   Que pode ser resolvido pelo método de autovalores e autovetores.   "
},
{
  "id": "auto_val_sub-2",
  "level": "2",
  "url": "auto_val.html#auto_val_sub-2",
  "type": "Definition",
  "number": "14.1",
  "title": "",
  "body": "   autovalor    Seja uma matriz . Um número (real ou complexo) é dito um autovalor de se existe um vetor não nulo tal que . é dito um autovetor associado ao autovalor .   "
},
{
  "id": "auto_val_sub-3",
  "level": "2",
  "url": "auto_val.html#auto_val_sub-3",
  "type": "Example",
  "number": "14.2",
  "title": "",
  "body": " A matriz, admite como autovalor porque o vetor satisfaz . Outro autovalor dessa matrix é 0 pois o vetor satisfaz .  "
},
{
  "id": "auto_val_sub-5",
  "level": "2",
  "url": "auto_val.html#auto_val_sub-5",
  "type": "Remark",
  "number": "14.3",
  "title": "",
  "body": "Se existe um vetor não nulo tal que , temos que e, portanto, , ou seja, essa equação tem solução não nula e a matriz não é inversível. Desse modo, encontrar autovalores é descobrir para que escalares temos . O polinômio é chamado de polinômio característico e os autovalores são as raízes desse polinômio. Uma vez encontrados os autovalores, resolvemos o sistema para cada autovalor encontrado para determinar os autovetores associados a cada autovalor. "
},
{
  "id": "auto_val_sub-6",
  "level": "2",
  "url": "auto_val.html#auto_val_sub-6",
  "type": "Example",
  "number": "14.4",
  "title": "",
  "body": " A matriz, tem polinômio característico que têm raízes 2 e -2. Os autovetores associados ao autovalor 2 são encontrados resolvendo Os autovetores associados ao autovalor -2 são encontrados resolvendo   "
},
{
  "id": "auto_val_sub-7",
  "level": "2",
  "url": "auto_val.html#auto_val_sub-7",
  "type": "Checkpoint",
  "number": "14.5",
  "title": "",
  "body": ""
},
{
  "id": "auto_val_sub-10",
  "level": "2",
  "url": "auto_val.html#auto_val_sub-10",
  "type": "Remark",
  "number": "14.6",
  "title": "",
  "body": "Podemos pensar na matriz como uma transformação linear da base canônica para a base canônica. Se representarmos essa transformação linear na base de autovetores (supondo que exista uma), temos que ela será representada por uma matriz diagonal, com os autovalores na diagonal. Desse modo temos que: Encontrar matrizes (de autovetores) e (com autovalores na diagonal) é conhecido como a diagonalização da matriz A. "
},
{
  "id": "auto_val_sub-12",
  "level": "2",
  "url": "auto_val.html#auto_val_sub-12",
  "type": "Checkpoint",
  "number": "14.7",
  "title": "",
  "body": ""
},
{
  "id": "auto_val_sub-19",
  "level": "2",
  "url": "auto_val.html#auto_val_sub-19",
  "type": "Checkpoint",
  "number": "14.8",
  "title": "",
  "body": "Suponha que uma cidade tem 100000 homens separados em dois grupos: não comprometidos e comprometidos; e que, a cada ano, dos não comprometidos passam a ser comprometidos e dos comprometidos passam a ser não comprometidos. Se no primeiro ano, temos 50000 comprometidos e 50000 não comprometidos, quais os números de comprometidos e não comprometidos após 1, 10 e 50 anos? "
},
{
  "id": "autovetores_LI",
  "level": "2",
  "url": "auto_val.html#autovetores_LI",
  "type": "Theorem",
  "number": "14.9",
  "title": "",
  "body": "   Seja uma matriz . Autovetores associados a autovalores distintos são linearmente independentes.  A completar.  "
},
{
  "id": "matriz_simetrica",
  "level": "2",
  "url": "auto_val.html#matriz_simetrica",
  "type": "Theorem",
  "number": "14.10",
  "title": ".",
  "body": "   Seja uma matriz real Na qual todos os coeficientes são reais  simétrica. Então, seus autovalores e autovetores são reais e a matriz tem autovetores distintos. Além disso, admite uma base de autovetores ortonormais.  A completar.  "
},
{
  "id": "autoval_teormas-7",
  "level": "2",
  "url": "auto_val.html#autoval_teormas-7",
  "type": "Remark",
  "number": "14.11",
  "title": "",
  "body": "Para analisar o que ocorre no caso de autovalores múltiplos, precisamos de números complexos e recorro a um resultado de variável complexa, que diz que um polinômio real ou complexo de grau sempre pode ser decomposto no produto de monômios de grau . Em particular onde é a variável complexa, , são as raízes (possivelmente complexas) e os coeficientes, . "
},
{
  "id": "autoval_teormas-8",
  "level": "2",
  "url": "auto_val.html#autoval_teormas-8",
  "type": "Definition",
  "number": "14.12",
  "title": "",
  "body": "   multiplicidades algébrica e geométrica    Seja o polinômio característico de uma matriz real , . O número de vezes que um autovalor aparece na decomposição no produto de monômios de é chamada de multiplicidade algébrica desse autovalor. A dimensão do espaço nulo de , é a multiplicidade geométrica do autovalor .   "
},
{
  "id": "autoval_teormas-9",
  "level": "2",
  "url": "auto_val.html#autoval_teormas-9",
  "type": "Example",
  "number": "14.13",
  "title": "",
  "body": "    "
},
{
  "id": "autoval_teormas-10",
  "level": "2",
  "url": "auto_val.html#autoval_teormas-10",
  "type": "Example",
  "number": "14.14",
  "title": "",
  "body": "    "
},
{
  "id": "autoval_teormas-12",
  "level": "2",
  "url": "auto_val.html#autoval_teormas-12",
  "type": "Example",
  "number": "14.15",
  "title": "",
  "body": " Diagonalize a matriz   "
},
{
  "id": "autoval_teormas-23",
  "level": "2",
  "url": "auto_val.html#autoval_teormas-23",
  "type": "Example",
  "number": "14.16",
  "title": "",
  "body": "    "
},
{
  "id": "aplicacoes-6",
  "level": "2",
  "url": "auto_val.html#aplicacoes-6",
  "type": "Example",
  "number": "14.17",
  "title": "",
  "body": " Uma amostra formada por dois isótopos radioativos com quantidades iniciais e e a fração dos átomos que decai a cada segundo é 0.1% e 0.2%. Então o número de átomos radioativos na amostra de cada um dos tipos é ...  "
},
{
  "id": "aplicacoes-7",
  "level": "2",
  "url": "auto_val.html#aplicacoes-7",
  "type": "Example",
  "number": "14.18",
  "title": "",
  "body": " Alguns isótopos decaem em outros isótopos que também são radioativos. Suponha que um isótopo decai no isótopo , que decai no isótopo . Uma amostra formada pelos isótopos , e com quantidades iniciais e e e a fração dos átomos que decai a cada segundo do isótopo A para o isótopo B é 0.1%, do isótopo B para o isótopo C é 0.2% e do isótopo B para material não radioativo é de 0.3%. Então o número de átomos radioativos na amostra de cada um dos tipos é ...  "
},
{
  "id": "aplicacoes-14",
  "level": "2",
  "url": "auto_val.html#aplicacoes-14",
  "type": "Checkpoint",
  "number": "14.19",
  "title": "",
  "body": "Resolva o sistema  "
},
{
  "id": "aplicacoes_2-3",
  "level": "2",
  "url": "auto_val.html#aplicacoes_2-3",
  "type": "Example",
  "number": "14.20",
  "title": "",
  "body": " Consideremos o PVI Podemos definir variáveis , , de modo que obtemos o sistema Autovalores, autovetores, ...  "
},
{
  "id": "aplicacoes_2-4",
  "level": "2",
  "url": "auto_val.html#aplicacoes_2-4",
  "type": "Example",
  "number": "14.21",
  "title": "",
  "body": " Consideremos o PVI Podemos definir variáveis , , de modo que obtemos o sistema Autovalores, autovetores, ...  "
},
{
  "id": "aplicacoes_2-6",
  "level": "2",
  "url": "auto_val.html#aplicacoes_2-6",
  "type": "Example",
  "number": "14.22",
  "title": "",
  "body": " Consideremos o PVI que pode ser escrito como Podemos definir variáveis , , de modo que obtemos o sistema Autovalores, autovetores, ...  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
