import dotenv from 'dotenv'
dotenv.config()
import client from './database.js'

class CriarTabela{
    static async usuario(){
        const consulta = `create table if not exists usuario(
            nome varchar(100) primary key,
            email varchar(100) not null unique,
            id_usuario char(10) not null,
            profissao char(11) not null
            
        );`
        await client.query(consulta)
        console.log('Tabela usuario criada com sucesso!')
    }
    static async estacao(){
        const consulta = `create table if not exists estação(
            id_estacao varchar(20) primary key,,
            identificador char(5) not null,
            localizacao varchar(100) not null,
            recurso varchar(50) not null, 
        )`
        await client.query(consulta)
        console.log('Tabela estação criada com sucesso!')
    }
    static async reserva(){
        const consulta = `create table if not exists reserva(
            id_reserva char(3) primary key,
            data_reserva varchar(60) not null,
            hora_inicio char(5) not null,
            hora_fim char(5) not null,
            status varchar(10) not null,
            id_usuario char(10) not null,
            id_estacao varchar(20) not null,

        )`
        await client.query(consulta)
        console.log('Tabela reserva criada com sucesso!')
    }
}

export default CriarTabela