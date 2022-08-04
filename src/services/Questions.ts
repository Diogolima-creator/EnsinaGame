import { Charges } from '../imagens/Charges'
import { Animals } from '../imagens/Animais'


export interface QuestionsArray {
      Question: string
      QuestionType: 'OnlySelectQuestion' | 'ImageInQuestion' | 'AlternativesInImage'
      QuestionImg: string
      Answer: number
      Alternatives: [string,string,string,string]
      WidthImg?: number 
}

const Questions:QuestionsArray[][][] = [
  [
     [
      { Question: 'Qual é a primeira letra do Alfabeto?', QuestionType:'OnlySelectQuestion', QuestionImg: '', Answer: 0, Alternatives: ['A','E', 'C', 'D'] },
      { Question: 'Escolha a palavra que começa com B ?', QuestionType:'OnlySelectQuestion', QuestionImg: '', Answer: 1, Alternatives: ['Dente','Bola', 'Leão', 'Loja'] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestion', QuestionImg: '', Answer: 1, Alternatives: ['Bol-a','Be-i-jo', 'Pil-ar', 'Limp-ar'] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestion', QuestionImg: '', Answer: 1, Alternatives: ['Cor-a-ção','Ca-der-no', 'Cacho-rro', 'Per-de-r'] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestion', QuestionImg: '', Answer: 0, Alternatives: ['Mi-nho-ca','Par-ceir-o', 'Leã-o', 'Co-sta'] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestion', QuestionImg: '', Answer: 3, Alternatives: ['Re-fri-ge-rante','Fac-a', 'Olh-o', 'Lu-a'] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestion', QuestionImg: '', Answer: 3, Alternatives: ['Cas-a','Tu-can-o', 'Ge-la-deir-a', 'Sol'] },
      { Question: 'Escolha a separação silábica correta ?', QuestionType:'OnlySelectQuestion', QuestionImg: '', Answer: 0, Alternatives: ['Te-le-fo-ne','Dia', 'Pe-r-der', 'Am-or'] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge1, WidthImg: 500, Answer: 1, Alternatives: ['Os meninos resolveram fazer pose para a foto','Os meninos entenderam de forma errada o que Monica disse', 'Os meninos estavam se protegendo de uma forte chuva', 'Eles ficaram com medo da Monica bater neles'] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge2, WidthImg: 200, Answer: 0, Alternatives: ['O vento empurra o fedor do cascão para longe','Dorinha esta sentindo o cheiro do cebolinha', 'Cascão está cheiroso porque tomou banho', 'O cebolinha está na frente do vento porque está com calor'] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge3, WidthImg: 200, Answer: 2, Alternatives: ['Monica resolveu bater no cebolinha porque ele roubou seu coelho','Monica fez o que cebolinha pediu para ela e quebrou o galho na cabeça dele', 'Monica não conhecia a expressão "quebrar um galho" e acabou machucando o cebolinha', 'Monica ignorou o galho que caiu na cabeça do cebolinha em vez de ajudar ele'] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge4, WidthImg: 500, Answer: 1, Alternatives: ['Papai do céu resolveu castigar o cebolinha tampando sua boca','Papai do céu tampou a boca de cebolinha para que ele não pudesse xingar a Monica', 'Cebolinha tampou sua boca para que Papai do céu atendesse o seu pedido', 'Cebolinha estava agradecendo Papai do céu por poder estar sempre junto da Monica'] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge5, WidthImg: 500, Answer: 0, Alternatives: ['Monica achou que cebolinha estava pedindo carinho em vez de brincar de carrinho','Monica e Cebolinha namoram e por isso a Monica começou a fazer carinho nele', 'Cebolinha e Monica estão brincando de carinho como Cebolinha tinha pedido', 'Monica está tentando pegar o carrinho de Cebolinha sem que ele perceba'] },
      { Question: 'Faça uma interpretação da charge', QuestionType:'ImageInQuestion', QuestionImg: Charges.Charge6, WidthImg: 200, Answer: 3, Alternatives: ['Cebolinha está surpreso com a beleza de Monica usando seu vestido vermelho','Cebolinha ficou assustado com o Touro todo machucado', 'Cebolinha estava tentando enganar a Monica para que ela não usasse mais vermelho', 'Monica bateu no Touro porque ele tentou correr atrás dela por ela estar de vermelho'] },
      { Question: 'Selecione o animal que começa com a letra Z ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 1, Alternatives: [Animals.Cabra, Animals.Zebra, Animals.Abelha, Animals.Dinossauro] },
      { Question: 'Selecione o animal que começa com a letra D ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 0, Alternatives: [Animals.Dromedário, Animals.Tartaruga, Animals.Elefante, Animals.Leao] },
      { Question: 'Selecione o animal que começa com a letra E ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 0, Alternatives: [Animals.Ema, Animals.Foca, Animals.Formiga, Animals.Cobra] },
      { Question: 'Selecione o animal que começa com a letra F ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 1, Alternatives: [Animals.Panda, Animals.Formiga, Animals.Golfinho, Animals.Pato] },
      { Question: 'Selecione o animal que começa com a letra A ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 3, Alternatives: [Animals.Cachorro, Animals.Golfinho, Animals.Dinossauro, Animals.Abelha] },
      { Question: 'Selecione o animal que começa com a letra T ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 2, Alternatives: [Animals.Macaco, Animals.Foca, Animals.Tartaruga, Animals.Camelo] },
      { Question: 'Selecione o animal que começa com a letra C ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 0, Alternatives: [Animals.Cachorro, Animals.Ema, Animals.Raposa, Animals.Panda] },
      { Question: 'Selecione o animal que começa com a letra U ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 0, Alternatives: [Animals.Urso, Animals.Cabra, Animals.Cobra, Animals.Dromedário] },
      { Question: 'Selecione o animal que começa com a letra R ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 2, Alternatives: [Animals.Zebra, Animals.Elefante, Animals.Raposa, Animals.Abelha] },
      { Question: 'Selecione o animal que começa com a letra P ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 2, Alternatives: [Animals.Raposa, Animals.Cachorro, Animals.Panda, Animals.Cobra] },
      { Question: 'Selecione o animal que começa com a letra L ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 0, Alternatives: [Animals.Leao, Animals.Cachorro, Animals.Camelo, Animals.Elefante] },
      { Question: 'Selecione o animal que começa com a letra M ?', QuestionType:'AlternativesInImage', QuestionImg: '', Answer: 2, Alternatives: [Animals.Formiga, Animals.Foca, Animals.Macaco, Animals.Golfinho] },
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