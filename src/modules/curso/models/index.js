import client from '../../../config/database.js'

class CursoModel{
    static async criar(nome,  cod_turma){
            const dados = [nome,  cod_turma]
            const consulta = `insert into curso(nome, cod_turma)
            values ($1, $2) returning *;`
            const resultado = await client.query(consulta, dados);
            return resultado.rows;
    }
    static async listarTodos(){
        const consulta = `select * from curso`
        const resultado = await client.query(consulta)
        return resultado.rows;
    }
  
    static async atualizarCurso(nome,  cod_turma){
        const dados = [nome, cod_turma]
        const consulta = `update curso set nome = $1
        where cod_turma = $2 returning *`
        const resultado = await client.query(consulta, dados)
        return resultado.rows;
    }
    static async deletarCurso(cod_turma){
        const dados = [cod_turma]
        const consulta = `delete from curso where cod_turma = $2`
        await client.query(consulta,dados)
    }
    static async deletarTodos(){
        const consulta = `delete from curso`
        await client.query(consulta)
    }
    // quantidade de Cursos
    static async totalcursos(){
        const consulta = `select count(email) as total from curso`
        const resultado = await client.query(consulta)
        return resultado.rows
    }
    static async totalalunosPorCurso (cod_turma){
        const dados = [cod_turma];
        const consulta = `select count (cod_turma)
        join aluno on curso.cod_turma = aluno.cod_turma
        where aluno.cod_turma = $1`
        const total_alunos_curso = await client.query(consulta, dados)
        return total_alunos_curso.rows;
    }
    static async listasAlunosPorCurso (cod_turma){
        const dados = [cod_turma];
        const consulta = `select aluno.nome, curso.nome turma from curso
        join aluno on curso.cod_turma = aluno.cod_turma
        where aluno.cod_turma = $1`
        const resultado = await client.query(consulta, dados)
        return resultado.rows;
    }
    static async listasProfessoresPorCurso (cod_turma){
        const dados = [cod_turma];
        const consulta = `select professor.nome, curso.nome turma from curso
        join professor on curso.cod_turma = professor.cod_turma
        where professor.cod_turma = $1`
        const resultado = await client.query(consulta, dados)
        return resultado.rows;
    }
}

export default CursosModel;