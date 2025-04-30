import CursoModel from "../models/index.js"; 


class CursoController{
    static async criar(nome_curso,  cod_curso){
        try {
            if(!nome_curso || !cod_curso){
                return console.error('Todos os campos devem ser preenchidos!')
            }
            const curso = await CursoModel.criar(nome_curso, cod_curso)
            console.log('Curso criado com sucesso!')
            return curso
        } catch (error) {
            console.log('Erro ao criar curso', error.message)
        }
    }
    static async editar(nome_curso,  cod_curso){
        try {
            if(!nome_curso ||  !cod_curso){
                return console.error('Todos os campos devem ser preenchidos!')
            }
            const curso = await CursoModel.atualizarCurso(nome_curso, cod_curso)
            if(curso.length === 0){
                return console.error('Curso não encontrado!')
            }
            console.log('Curso atualizado com sucesso!')
            return curso
        } catch (error) {
            console.log('Erro ao atualizar o Curso:', error.message)
        }
    }
    static async deletarCurso(cod_curso){
        try {
            const curso = await CursoModel.listarPorCodigo(cod_curso)
            if(curso.length === 0){
                return console.error('curso não encontrado!')
            }
            await CursoModel.deletarCurso(cod_curso)
            console.log('Curso excluido com sucesso!')
        } catch (error) {
            console.log('Erro ao excluir o Curso:', error.message)
        }
    }
    static async deletarTodos(){
        try {
            await CursoModel.deletarTodos()
            console.log('Curso excluidos com sucesso!')
        } catch (error) {
            console.log('Erro ao excluir todos os Cursos:', error.message)
        }
    }
    static async listarTodos(cod_curso){
        try {
            const curso = await CursoModel.listarTodos(cod_curso)
            if(curso.length === 0){
                return console.log('Nenhum curso a ser exibido!')
            }
            console.log('Listagem de curso:')
            return curso
        } catch (error) {
            console.log('Erro ao listar todos os cursos:', error.message)
        }
    }
    static async listarPorEmail(cod_curso){
        try {
            const curso = await CursoModel.listarPorEmail(cod_curso)
            if(curso.length === 0){
                return console.error('Curso não encontrado!')
            }
            console.log('Curso:')
            return curso
        } catch (error) {
            console.log('Erro ao listar todos os Cursos:', error.message)
        }
    }
    static async totalCurso(cod_curso){
        try {
            const total = await CursoModel.totalCursos(cod_curso)
            if(total.length === 0){
                return console.error('Não há Curso na contagem!')
            }
            return total
        } catch (error) {
            console.log('Erro ao contar todos os Cursos:', error.message)
        }
    }
    static async totalalunosPorCurso(cod_curso){
        try {
            const total = await CursoModel.totalalunosPorCurso(cod_curso)
            if(total.length === 0){
                return console.error('Não há Alunos na contagem!')
            }
            return total
        } catch (error) {
            console.log('Erro ao contar todos os Alunos nos Cursos:', error.message)
        }
    }
    
    static async listasAlunosPorCurso(cod_curso){
        try {
            const total = await CursoModel.listasAlunosPorCurso(cod_curso)
            if(total.length === 0){
                return console.error('Não há Alunos na contagem!')
            }
            return total
        } catch (error) {
            console.log('Erro ao contar todos os Alunos nos Cursos:', error.message)
        }
    }
    
    static async listasProfessoresPorCurso(cod_curso){
        try {
            const total = await CursoModel.listasProfessoresPorCurso(cod_curso)
            if(total.length === 0){
                return console.error('Não há Professores na contagem!')
            }
            return total
        } catch (error) {
            console.log('Erro ao Listar todos os Professores nos Cursos:', error.message)
        }
    }

}

export default CursoController