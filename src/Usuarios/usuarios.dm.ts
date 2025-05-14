// import { Injectable } from "@nestjs/common";
// import { UsuarioEntity } from "../Usuarios/usuarios.entity";


// @Injectable()
// export class UsuarioArmazenados{
//     #usuarios: UsuarioEntity[]=[];

//     todosUsuarios() {
//         return this.#usuarios;
//       }
    
//     AdicionarUsuario(usuario: UsuarioEntity){
//         this.#usuarios.push(usuario);
//     }

//     get Usuarios(){
//         return this.#usuarios;
//     }

//    async validaEmail(email: string): Promise <boolean>{
//         const possivelUsuario = this.#usuarios.find(
//             usuario => usuario.email === email
//         );
//         return (possivelUsuario!== undefined);
//     }

//    async removeUsuario(id:string){
//         const usuario = this.buscaPorID(id);

//         this.#usuarios = this.#usuarios.filter(
//             usuarioSalvo => usuarioSalvo.id !== id
//         )
//         return usuario;
//     }

//    atualizaUsuario(id: string,dadosAtualizacao: Partial<UsuarioEntity>){
//     const usuario = this.buscaPorID(id);

//     Object.entries(dadosAtualizacao).forEach(
//         ([chave,valor]) =>{
//             if(valor === undefined){
//                  return
//             }

//             if (chave === 'id'){
//                 return

//             }else if (chave === 'senha'){
//                 usuario.TrocarSenha(valor);
//                 return
//             }
//             if(valor === undefined){

//             }
//             usuario [chave] = valor;
//         }

//     )
//     return usuario
//    } 

//    public buscaPorID(id: string){
//         const possivelUsuario = this.#usuarios.find(
//         usuarioSalvo => usuarioSalvo.id === id
//         )
//             if (!possivelUsuario){
//             throw new Error('Usuario nao encontrado')
//             }
//         return possivelUsuario
//    }

//     private buscarPorEmail(email:string){
//         const possivelUsuario =      this.#usuarios.find(
//         usuarioSalvo => usuarioSalvo.email === email
//         )

//         if (!possivelUsuario) {
//             throw new Error(`Usuário com e-mail '${email}' não encontrado`);
//         }
//     return possivelUsuario;

//     }

//     async validarLogin(email: string, senha: string) {
//         const usuario = await this.buscarPorEmail(email);
      
//         if (!usuario) {
//           throw new Error("Usuario nao Encontrado");
//         }
      
//         const senhaCorreta = await usuario.login(senha);
//         return {
//           login: senhaCorreta,
//           usuario: senhaCorreta ? usuario : undefined
//         };
//       }

// }
