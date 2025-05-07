import client from '../../../config/database.js'

class UsuarioModel{
    static async criar(id_usuario, nome, email, profissao){
            const dados = [id_usuario, nome, email, profissao]
            const consulta = `insert into reserva(id_usuario, nome, email, profissao)
            values ($1, $2, $3, $4) returning *;`
            const resultado = await client.query(consulta, dados);
            return resultado.rows 
    }
    // static async listarTodos(){
    //     const consulta = `select * from usuario`
    //     const resultado = await client.query(consulta)
    //     return resultado.rows
    // }
    static async listarPorEmail(email){
        const dados = [email]
        const consulta = `select * from usuario where email = $1`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
    static async atualizarUsuario(id_usuario, nome, email, profissao){
        const dados = [id_usuario, nome, email, profissao]
        const consulta = `update usuario set id_usuario = $1, nome = $3, profissão = $4 
        where email = $2 returning *`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
    static async deletarUsuario(email){
        const dados = [email]
        const consulta = `delete from usuario where email = $1`
        await client.query(consulta,dados)
    }
    // static async deletarTodos(){
    //     const consulta = `delete from usuario`
    //     await client.query(consulta)
    // }
    // quantidade de usuario
    // static async totalUsuario(){
    //     const consulta = `select count(email) as total from usuario`
    //     const resultado = await client.query(consulta)
    //     return resultado.rows
    // }
}

export default UsuarioModel