import ProfessorModel from "../models/index.js"; 

class ProfessorController{
    static async criar(nome,  matricula, cod_curso){
        try {
            if(!nome ||  !matricula || !cod_curso){
                return console.error('Todos os campos devem ser preenchidos!')
            }
            const professor = await ProfessorModel.criar(nome,  matricula, cod_curso)
            console.log('Professor criado com sucesso!')
            return professor
        } catch (error) {
            console.log('Erro ao criar Professor:', error.message)
        }
    }
    static async editar(nome,  matricula,  cod_curso){
        try {
            if(!nome ||  !matricula || !cod_curso){
                return console.error('Todos os campos devem ser preenchidos!')
            }
            const professor = await ProfessorModel.atualizarProfessor(nome,  matricula,  cod_curso)
            if(professor.length === 0){
                return console.error('Professor não encontrado!')
            }
            console.log('Professor atualizado com sucesso!')
            return professor
        } catch (error) {
            console.log('Erro ao atualizar o Professor:', error.message)
        }
    }
    static async deletarProfessor(matricula){
        try {
            const professor = await ProfessorModel.listarPorEmail(matricula)
            if(professor.length === 0){
                return console.error('Professor não encontrado!')
            }
            await ProfessorModel.deletarProfessor(matricula)
            console.log('Professor excluido com sucesso!')
        } catch (error) {
            console.log('Erro ao excluir o Professor:', error.message)
        }
    }
    static async deletarTodos(){
        try {
            await ProfessorModel.deletarTodos()
            console.log('AProfessor excluidos com sucesso!')
        } catch (error) {
            console.log('Erro ao excluir todos os Professor:', error.message)
        }
    }
    static async listarTodos(matricula){
        try {
            const professor = await ProfessorModel.listarTodos(matricula)
            if(professor.length === 0){
                return console.log('Nenhum usuario a ser exibido!')
            }
            console.log('Listagem de Professor:')
            return professor
        } catch (error) {
            console.log('Erro ao listar todos os Professores:', error.message)
        }
    }
    static async listarPorMatriculas(matricula){
        try {
            const professor = await ProfessorModel.listarPorMatriculas(matricula)
            if(professor.length === 0){
                return console.error('Aluno não encontrado!')
            }
            console.log('Professor:')
            return professor
        } catch (error) {
            console.log('Erro ao listar todos os Professor:', error.message)
        }
    }
    static async totalProfessor(matricula){
        try {
            const total = await ProfessorModel.totalProfessor(matricula)
            if(total.length === 0){
                return console.error('Não há Professores na contagem!')
            }
            return total
        } catch (error) {
            console.log('Erro ao contar todos os Professores:', error.message)
        }
    }


}

export default ProfessorController;