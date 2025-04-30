import client from '../../../config/database.js'

class CursoModel{
    static async criar(nome_curso,  cod_curso){
            const dados = [nome_curso,  cod_curso]
            const consulta = `insert into curso(nome_curso, cod_curso)
            values ($1, $2) returning *;`
            const resultado = await client.query(consulta, dados);
            return resultado.rows;
    }
    static async listarTodos(){
        const consulta = `select * from curso`
        const resultado = await client.query(consulta)
        return resultado.rows;
    }
  
    static async atualizarCurso(nome_curso,  cod_curso){
        const dados = [nome_curso, cod_curso]
        const consulta = `update curso set nome = $1
        where cod_turma = $2 returning *`
        const resultado = await client.query(consulta, dados)
        return resultado.rows;
    }
    static async deletarCurso(cod_curso){
        const dados = [cod_curso]
        const consulta = `delete from curso where cod_turma = $2`
        await client.query(consulta,dados)
    }
    static async deletarTodos(cod_curso){
        const consulta = `delete from curso`
        await client.query(consulta)
    }
    // quantidade de Cursos
    static async totalcursos(cod_curso){
        const consulta = `select count(email) as total from curso`
        const resultado = await client.query(consulta)
        return resultado.rows
    }
    static async totalalunosPorCurso (cod_curso){
        const dados = [cod_curso];
        const consulta = `select count (cod_curso)
        join aluno on curso.nome_curso = aluno.cod_curso
        where aluno.nome_curso = $1`
        const total_alunos_curso = await client.query(consulta, dados)
        return total_alunos_curso.rows;
    }
    static async listasAlunosPorCurso (cod_curso){
        const dados = [cod_curso];
        const consulta = `select aluno.nome, curso.nome turma from curso
        join aluno on curso.nome_curso = aluno.cod_curso
        where aluno.cod_turma = $1`
        const resultado = await client.query(consulta, dados)
        return resultado.rows;
    }
    static async listasProfessoresPorCurso (cod_curso){
        const dados = [cod_curso];
        const consulta = `select professor.nome, curso.nome turma from curso
        join professor on curso.cod_turma = professor.cod_curso
        where professor.cod_turma = $1`
        const resultado = await client.query(consulta, dados)
        return resultado.rows;
    }
}

export default CursoModel;