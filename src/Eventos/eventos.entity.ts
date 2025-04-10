export class EventoEntity {
    id: string;
    nome: string;
    genero: string;
    data: string
    horario: string
    descricao: string;
    localizacao: string;
    image: string
    
    constructor(id: string, nome: string, genero: string, data: string, horario: string,  descricao: string, localizacao: string, image: string){
        this.id = id;
        this.nome = nome;
        this.genero = genero;
        this.data = data;
        this.horario = horario;
        this.descricao = descricao;
        this.localizacao = localizacao;
        this.image = image;
    }
  }


  