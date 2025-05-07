import ReservaModel from "../models/index.js";

class ReservaController {
    static async criar(id_reserva, data_reserva, hora_reserva, hora_fim, status, id_usuario, id_estacao) {
        try {
            if (!id_reserva || !data_reserva || !hora_reserva || !hora_fim || !status || !id_usuario || !id_estacao) {
                return console.error('Todos os campos devem ser preenchidos!')
            }
            const reserva = await ReservaModel.criar(id_reserva, data_reserva, hora_reserva, hora_fim, status, id_usuario, id_estacao)
            console.log('Reserva criado com sucesso!')
            return reserva
        } catch (error) {
            console.log('Erro ao criar reserva:', error.message)
        }
    }
    static async editar(id_reserva, data_reserva, hora_reserva, hora_fim, status, id_usuario, id_estacao) {
        try {
            if (!id_reserva || !data_reserva || !hora_reserva || !hora_fim || !status || !id_usuario || !id_estacao) {
                return console.error('Todos os campos devem ser preenchidos!')
            }
            const reserva = await ReservaModel.atualizarReserva(id_reserva, data_reserva, hora_reserva, hora_fim, status, id_usuario, id_estacao)
            if (reserva.length === 0) {
                return console.error('Reserva não encontrado!')
            }
            console.log('Reserva atualizado com sucesso!')
            return reserva
        } catch (error) {
            console.log('Erro ao atualizar o Reserva:', error.message)
        }
    }
    static async deletarReserva(email) {
        try {
            const reserva = await ReservaModel.listarPorEmail(email)
            if (reserva.length === 0) {
                return console.error('Reserva não encontrado!')
            }
            await ReservaModel.deletarReserva(email)
            console.log('Reserva excluido com sucesso!')
        } catch (error) {
            console.log('Erro ao excluir o Reserva:', error.message)
        }
    }

    static async listarPorId_usuarioId_estacao(id_usuario, id_estacao) {
        try {
            const reserva = await ReservaModel.listarPorEmail(id_usuario, id_estacao)
            if (reserva.length === 0) {
                return console.error('Reserva não encontrado!')
            }
            console.log('Reserva:')
            return reserva
        } catch (error) {
            console.log('Erro ao listar todos os reserva:', error.message)
        }
    }
    static async listarTodos() {
        try {
            const reserva = await ReservaModel.listarTodos()
            if (reserva.length === 0) {
                return console.log('Nenhum reserva a ser exibido!')
            }
            console.log('Listagem de reservas:')
            return reserva
        } catch (error) {
            console.log('Erro ao listar todos os reservas:', error.message)
        }
        
    }
}
        export default ReservaController