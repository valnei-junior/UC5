import  UsuarioModel from "../models/index.js"; 

class UsuarioController{
    static async criar(id_usuario, nome, email, profissao){
        try {
            if(!id_usuario || !nome || !email || !profissao){
                return console.error('Todos os campos devem ser preenchidos!')
            }
            const usuario = await UsuarioModel.criar(id_usuario, nome, email, profissao)
            console.log('Usuario criado com sucesso!')
            return usuario
        } catch (error) {
            console.log('Erro ao criar usuario:', error.message)
        }
    }
    static async editar(id_usuario, nome, email, profissao){
        try {
            if(!id_usuario || !nome || !email || !profissao){
                return console.error('Todos os campos devem ser preenchidos!')
            }
            const usuario = await UsuarioModel.atualizarUsuario(id_usuario, nome, email, profissao)
            if(usuario.length === 0){
                return console.error('Usuario não encontrado!')
            }
            console.log('Usuario atualizado com sucesso!')
            return usuario
        } catch (error) {
            console.log('Erro ao atualizar o Usuario:', error.message)
        }
    }
    static async deletarUsuario(email){
        try {
            const usuario = await UsuarioModel.listarPorEmail(email)
            if(usuario.length === 0){
                return console.error('Usuario não encontrado!')
            }
            await UsuarioModel.deletarUsuario(email)
            console.log('Usuario excluido com sucesso!')
        } catch (error) {
            console.log('Erro ao excluir o Usuario:', error.message)
        }
    }
    // static async deletarTodos(){
    //     try {
    //         await UsuarioModel.deletarTodos()
    //         console.log('Usuarios excluidos com sucesso!')
    //     } catch (error) {
    //         console.log('Erro ao excluir todos os usuario:', error.message)
    //     }
    // }
    // static async listarTodos(){
    //     try {
    //         const usuario = await UsuarioModel.listarTodos()
    //         if(usuario.length === 0){
    //             return console.log('Nenhum usuario a ser exibido!')
    //         }
    //         console.log('Listagem de Usuario:')
    //         return usuario
    //     } catch (error) {
    //         console.log('Erro ao listar todos os alunos:', error.message)
    //     }
    // }
    static async listarPorEmail(email){
        try {
            const usuario = await UsuarioModel.listarPorEmail(email)
            if(usuario.length === 0){
                return console.error('Usuario não encontrado!')
            }
            console.log('Usuario:')
            return aluno
        } catch (error) {
            console.log('Erro ao listar todos os Usuario:', error.message)
        }
    }
    // static async totalUsuario(){
    //     try {
    //         const total = await UsuarioModel.totalUsuario()
    //         if(total.length === 0){
    //             return console.error('Não há Usuario na contagem!')
    //         }
    //         return total
    //     } catch (error) {
    //         console.log('Erro ao contar todos os usuario:', error.message)
    //     }
    // }


}

export default UsuarioController