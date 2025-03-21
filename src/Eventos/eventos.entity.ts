export class EventoEntity {
    id: string;
    nome: string;
    genero: string;
    descricao: string;
    localizacao: string;
    image: string
    
    constructor(id: string, nome: string, genero: string, descricao: string, localizacao: string, image: string){
        this.id = id;
        this.nome = nome;
        this.genero = genero;
        this.descricao = descricao;
        this.localizacao = localizacao;
        this.image = image;
    }
  }