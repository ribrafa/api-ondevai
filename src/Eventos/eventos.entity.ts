export class EventoEntity {
    id: string;
    nome: string;
    genero: string;
    data: string
    horario: string
    descricao: string;
    endereco: string;
    numero: string;
    cep: string;
    cidade: string;
    image: string
    
    constructor(id: string, nome: string, genero: string, data: string, horario: string,  descricao: string, endereco: string, numero: string, cep: string, cidade: string, image: string){
        this.id = id;
        this.nome = nome;
        this.genero = genero;
        this.data = data;
        this.horario = horario;
        this.descricao = descricao;
        this.endereco = endereco;
        this.numero = numero;
        this.cep = cep;
        this.cidade = cidade;
        this.image = image;
    }
  }


  