import { Charges } from '../imagens/Charges'
import { Animals } from '../imagens/Animais'
import { Alfabeto } from '../imagens/Alfabeto'
import { Objetos } from '../imagens/Objetos'

export interface QuestionsArray {
      Question: string
      QuestionType: 'OnlySelectQuestion' | 'ImageInQuestion' | 'AlternativesInImage' | 'OnlySelectQuestionWithImage'
      QuestionImg: string
      Answer: number
      Alternatives: [[string],[string],[string],[string]] | [[string,string],[string,string],[string,string],[string,string]]
      WidthImg?: number 
}

const Questions:QuestionsArray[][][] = [
  [
     [
      { Question: 'Qual é a primeira letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 0, Alternatives: [['A'],['E'], ['C'], ['D']] },
      { Question: 'Qual é a segunda letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 1, Alternatives: [['J'],['B'], ['W'], ['A']] },
      { Question: 'Qual é a terceira letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 3, Alternatives: [['E'],['Q'], ['A'], ['C']] },
      { Question: 'Qual é a quarta letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 3, Alternatives: [['X'],['H'], ['P'], ['D']] },
      { Question: 'Qual é a quinta letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 1, Alternatives: [['X'],['E'], ['K'], ['L']] },
      { Question: 'Qual é a sexta letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 0, Alternatives: [['F'],['A'], ['B'], ['C']] },
      { Question: 'Qual é a sétima letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 0, Alternatives: [['G'],['E'], ['C'], ['D']] },
      { Question: 'Qual é a oitava letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 1, Alternatives: [['P'],['H'], ['A'], ['B']] },
      { Question: 'Qual é a nona letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 0, Alternatives: [['I'],['Y'], ['L'], ['A']] },
      { Question: 'Qual é a décima letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 1, Alternatives: [['X'],['J'], ['M'], ['I']] },
      { Question: 'Qual é a décima primeira letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 2, Alternatives: [['E'],['N'], ['K'], ['T']] },
      { Question: 'Qual é a décima segunda letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 0, Alternatives: [['L'],['B'], ['P'], ['C']] },
      { Question: 'Qual é a décima terceira letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 2, Alternatives: [['R'],['S'], ['M'], ['Q']] },
      { Question: 'Qual é a décima quarta letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 1, Alternatives: [['R'],['N'], ['C'], ['D']] },
      { Question: 'Qual é a décima quinta letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 1, Alternatives: [['A'],['O'], ['C'], ['P']] },
      { Question: 'Qual é a décima sexta letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 2, Alternatives: [['A'],['E'], ['P'], ['Q']] },
      { Question: 'Qual é a décima sétima letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 3, Alternatives: [['B'],['E'], ['C'], ['Q']] },
      { Question: 'Qual é a décima oitava letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 1, Alternatives: [['S'],['R'], ['C'], ['V']] },
      { Question: 'Qual é a décima nona letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 3, Alternatives: [['A'],['T'], ['C'], ['S']] },
      { Question: 'Qual é a vigésima letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 2, Alternatives: [['A'],['E'], ['T'], ['Z']] },
      { Question: 'Qual é a vigésima primeira letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 1, Alternatives: [['A'],['U'], ['C'], ['D']] },
      { Question: 'Qual é a vigésima segunda letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 0, Alternatives: [['V'],['E'], ['C'], ['D']] },
      { Question: 'Qual é a vigésima terceira letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 2, Alternatives: [['A'],['E'], ['W'], ['D']] },
      { Question: 'Qual é a vigésima quarta letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 1, Alternatives: [['A'],['X'], ['C'], ['D']] },
      { Question: 'Qual é a vigésima quinta letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 2, Alternatives: [['A'],['E'], ['Y'], ['D']] },
      { Question: 'Qual é a vigésima sexta letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: Alfabeto.AlfabetoImage, WidthImg: 500, Answer: 3, Alternatives: [['A'],['E'], ['Y'], ['Z']] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 1, Alternatives: [['Bol-a', Objetos.Bola],['Be-i-jo', Objetos.Beijo], ['Pil-ar', Objetos.Pilar], ['Limp-ar', Objetos.Limpar]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 1, Alternatives: [['Cor-a-ção', Objetos.Coração],['Ca-der-no', Objetos.Caderno], ['Cacho-rro', Objetos.Cachorro], ['Gela-tina', Objetos.Gelatina]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 0, Alternatives: [['Mi-nho-ca', Objetos.Minhoca],['Par-ceir-o', Objetos.Parceiro], ['Leã-o', Objetos.Leão], ['Co-stas', Objetos.Costas]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 3, Alternatives: [['Re-fri-ge-rante', Objetos.Refrigerante],['Fac-a', Objetos.Faca], ['Olh-o', Objetos.Olho], ['Lu-a', Objetos.Lua]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 3, Alternatives: [['Cas-a', Objetos.Casa],['Tu-can-o', Objetos.Tucano], ['Ge-la-deir-a', Objetos.Geladeira], ['Sol', Objetos.Sol]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 0, Alternatives: [['Te-le-fo-ne', Objetos.Telefone],['Gel-o', Objetos.Gelo], ['L-ua', Objetos.Lua], ['Am-or', Objetos.Amor]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 1, Alternatives: [['Foc-a', Objetos.Foca],['Gra-ma', Objetos.Grama], ['G-ato', Objetos.Gato], ['Uva', Objetos.Uva]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 1, Alternatives: [['A-ba-caxi', Objetos.Abacaxi],['Me-lan-cia', Objetos.Melancia], ['Don-zela', Objetos.Donzela], ['Peixe', Objetos.Peixe]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 0, Alternatives: [['A-çu-car', Objetos.Açúcar],['Diogo', Objetos.Diogo], ['M-ia', Objetos.Mia], ['Z-en', Objetos.Zen]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 3, Alternatives: [['Tâni-a', Objetos.Tania],['G-ilvan', Objetos.Gilvan], ['Poli-ana', Objetos.Poliana], ['Zen', Objetos.Zen]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 3, Alternatives: [['Di-nheiro', Objetos.Dinheiro],['Ci-dade', Objetos.Cidade], ['Men-nina', Objetos.Menina], ['Mi-a', Objetos.Mia]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 0, Alternatives: [['Po-li-a-na', Objetos.Poliana],['Bal-a', Objetos.Bala], ['Tra-ves-sura', Objetos.Travessura], ['Jov-em', Objetos.Jovem]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 0, Alternatives: [['Di-o-go', Objetos.Diogo],['Men-ni-na', Objetos.Menina], ['Gi-ras-sol', Objetos.Girassol], ['Am-or', Objetos.Amor]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 1, Alternatives: [['Lençol', Objetos.Lençol],['Tu-ca-no', Objetos.Tucano], ['Ver-melho', Objetos.Vermelho], ['Verde', Objetos.Verde]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 1, Alternatives: [['Ge-la-tina', Objetos.Gelatina],['Ge-la-dei-ra', Objetos.Geladeira], ['Al-moço', Objetos.Almoco], ['Milh-o', Objetos.Milho]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 2, Alternatives: [['La-ranja', Objetos.Laranja],['Roupa', Objetos.Roupa], ['Co-lher', Objetos.Colher], ['Di-nhe-i-ro', Objetos.Dinheiro]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 2, Alternatives: [['Me-di-r', Objetos.Medir],['G-ilvan', Objetos.Gilvan], ['A-pos-ti-la', Objetos.Apostila], ['F-ru-ta', Objetos.Fruta]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 2, Alternatives: [['Ma-caco', Objetos.Macaco],['Águ-a', Objetos.Água], ['Pei-xe', Objetos.Peixe], ['Min-ga-u', Objetos.Mingau]] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestionWithImage', QuestionImg: '', Answer: 2, Alternatives: [['Ja-qu-eta', Objetos.Jaqueta],['Blus-a', Objetos.Blusa], ['Mé-di-co',Objetos.Medico], ['L-oir-a', Objetos.Loira]] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge1, WidthImg: 500, Answer: 1, Alternatives: [['Os meninos resolveram fazer pose para a foto'],['Os meninos entenderam de forma errada o que Monica disse'], ['Os meninos estavam se protegendo de uma forte chuva'], ['Eles ficaram com medo da Monica bater neles']] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge2, WidthImg: 200, Answer: 0, Alternatives: [['O vento empurra o fedor do cascão para longe'],['Dorinha esta sentindo o cheiro do cebolinha'], ['Cascão está cheiroso porque tomou banho'], ['O cebolinha está na frente do vento porque está com calor']] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge3, WidthImg: 200, Answer: 2, Alternatives: [['Monica resolveu bater no cebolinha porque ele roubou seu coelho'],['Monica fez o que cebolinha pediu para ela e quebrou o galho na cabeça dele'], ['Monica não conhecia a expressão "quebrar um galho" e acabou machucando o cebolinha'], ['Monica ignorou o galho que caiu na cabeça do cebolinha em vez de ajudar ele']] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge4, WidthImg: 500, Answer: 1, Alternatives: [['Papai do céu resolveu castigar o cebolinha tampando sua boca'],['Papai do céu tampou a boca de cebolinha para que ele não pudesse xingar a Monica'], ['Cebolinha tampou sua boca para que Papai do céu atendesse o seu pedido'], ['Cebolinha estava agradecendo Papai do céu por poder estar sempre junto da Monica']] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge5, WidthImg: 500, Answer: 0, Alternatives: [['Monica achou que cebolinha estava pedindo carinho em vez de brincar de carrinho'],['Monica e Cebolinha namoram e por isso a Monica começou a fazer carinho nele'], ['Cebolinha e Monica estão brincando de carinho como Cebolinha tinha pedido'], ['Monica está tentando pegar o carrinho de Cebolinha sem que ele perceba']] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge6, WidthImg: 200, Answer: 3, Alternatives: [['Cebolinha está surpreso com a beleza de Monica usando seu vestido vermelho'],['Cebolinha ficou assustado com o Touro todo machucado'], ['Cebolinha estava tentando enganar a Monica para que ela não usasse mais vermelho'], ['Monica bateu no Touro porque ele tentou correr atrás dela por ela estar de vermelho']] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge7, WidthImg: 700, Answer: 0, Alternatives: [['Cebolinha ouviu o conselho para deixar o cachorrinho da monica feliz e fez igual'],['Cebolinha estava tentando se declarar para a monica depois de ver ela'], ['Monica ficou irritada com o cachorrinho dela estar bravo e cebolinha tentou ajudar'], ['O cachorro da monica não gosta mais dela e cebolinha abraçou ela pra consolar']] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge8, WidthImg: 700, Answer: 0, Alternatives: [['O Marcinho estava tentando conscientizar o Cebolinha e o Cascão sobre o gasto de água mas eles não entenderam'],['Cebolinha entendeu o que o Marcinho quis dizer e mostrou que ele consegue ser mais rapido'], ['Cascão toma banho e por isso ele ganhou do Marcinho e cebolinha em quem tomava banho mais rapido'], ['Cascão gasta muita agua no banho e por isso ele ganhou a competição com o Marcinho e Cebolinha']] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge9, WidthImg: 500, Answer: 2, Alternatives: [['Todo mundo estava de fantasia menos a magali por que ela ficou com fome e perdeu a sua'],['Magali ficou mostrando a lingua para todo mundo porque ela estava sem fome e com raiva do seus amigos'], ['Magali estava com tanta fome que começou a ver seus amigos como comidas, e eles foram conversar sobre isso'], ['Cebolinha bolou um plano para enganar a Monica e fazer ela ficar contra a Magali']] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge10, WidthImg: 700, Answer: 1, Alternatives: [['Essa charge fala sobre o desmatamento de árvores e extinção dos animais'],['Essa charge fala sobre a falta de agua no mundo e como tomar atitudes que economizem a agua'], ['Essa charge fala sobre a educação de jogar sempre lixo nas lixeiras e sobre como é importante a reciclagem'], ['Essa charge fala sobre a relação dentro das salas de aulas']] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge11, WidthImg: 700, Answer: 1, Alternatives: [['Cascão queria colocar o seu carro de brinquedo para lavar a seco também'],['Cascão gostou da ideia de se lavar sem ter que usar agua por ele ter medo'], ['O pai do cascão pediu ajuda para levar o carro para lavar e o cascão queria tomar banho também'], ['O pai do cascão desistiu de lavar o carro a rapido por que não usava agua']] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge12, WidthImg: 700, Answer: 2, Alternatives: [['Cascão havia roubado a monica e se arrependeu e devolveu o dinheiro delas'],['Monica pegou o dinheiro que Cascão deu para ela mas não era dela o dinheiro'], ['Cascão fez uma boa ação de devolver o dinheiro que a monica havia deixado cair e não percebeu'], ['Monica ficou feliz que o Cascão deu dinheiro para ela sem ela não ter feito nada']] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge13, WidthImg: 700, Answer: 2, Alternatives: [['Cebolinha e Cascão estão querendo ser convidados para a proxima janta junto da Magali e Monica'],['Cebolinha e Cascão estão com saudades da Monica e Magali e foram chamar elas para brincarem'], ['Cebolinha e Cascão estão anotando as comidas que a Monica está comendo para ficarem fortes igual ela'], ['Os Pais da Monica chamaram a Magali para comer e aproveitaram para ensinar a ela como comer bem']] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge14, WidthImg: 700, Answer: 3, Alternatives: [['Todo mundo abraçou o Cascão por que era o seu aniversário e queriam deixar ele feliz'],['Todo quis brincar com o cascão e foi abraçar ele para sujar ele mas não funcionou'], ['Foi tudo um plano do Cebolinha para deixarem todo mundo sujo'], ['Cascão saiu abraçando todo mundo para limpar a sua sujeira e ficar limpo']] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge15, WidthImg: 700, Answer: 3, Alternatives: [['Magali imitou os meninos para Monica para elas brincarem igual eles'],['Monica e Magali queriam pegar os brinquedos dos meninos para ela'], ['Monica e Magali não gostam da brincadeira dos meninos por que é muito chata'], ['Monica ficou empolgada com a brincadeira de imaginação dos meninos e queria brincar também']] },
      { Question: 'Selecione o animal que começa com a letra Z ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 1, Alternatives: [[Animals.Cabra], [Animals.Zebra], [Animals.Abelha], [Animals.Dinossauro]] },
      { Question: 'Selecione o animal que começa com a letra D ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 0, Alternatives: [[Animals.Dromedário], [Animals.Tartaruga], [Animals.Elefante], [Animals.Leao]] },
      { Question: 'Selecione o animal que começa com a letra E ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 0, Alternatives: [[Animals.Ema], [Animals.Foca], [Animals.Formiga], [Animals.Cobra]] },
      { Question: 'Selecione o animal que começa com a letra F ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 1, Alternatives: [[Animals.Panda], [Animals.Formiga], [Animals.Golfinho], [Animals.Pato]] },
      { Question: 'Selecione o animal que começa com a letra A ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 3, Alternatives: [[Animals.Cachorro], [Animals.Golfinho], [Animals.Dinossauro], [Animals.Abelha]] },
      { Question: 'Selecione o animal que começa com a letra T ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 2, Alternatives: [[Animals.Macaco], [Animals.Foca], [Animals.Tartaruga], [Animals.Camelo]] },
      { Question: 'Selecione o animal que começa com a letra C ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 0, Alternatives: [[Animals.Cachorro], [Animals.Ema], [Animals.Raposa], [Animals.Panda]] },
      { Question: 'Selecione o animal que começa com a letra U ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 0, Alternatives: [[Animals.Urso], [Animals.Cabra], [Animals.Cobra], [Animals.Dromedário]] },
      { Question: 'Selecione o animal que começa com a letra R ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 2, Alternatives: [[Animals.Zebra], [Animals.Elefante], [Animals.Raposa], [Animals.Abelha]] },
      { Question: 'Selecione o animal que começa com a letra P ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 2, Alternatives: [[Animals.Raposa], [Animals.Cachorro], [Animals.Panda], [Animals.Cobra]] },
      { Question: 'Selecione o animal que começa com a letra L ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 0, Alternatives: [[Animals.Leao], [Animals.Cachorro], [Animals.Camelo], [Animals.Elefante]] },
      { Question: 'Selecione o animal que começa com a letra M ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 2, Alternatives: [[Animals.Formiga], [Animals.Foca], [Animals.Macaco], [Animals.Golfinho]] },
     ],
     [],
     [],
     [],
     [],
     []
  ],
  [
     [],
     [],
     [],
     [],
     [],
     []
  ],
  [
    [],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    [],
    [],
    [],
    []
  ],
  [
    [],
    [],
    [],
    [],
    [],
    []
  ]
]


export default Questions;