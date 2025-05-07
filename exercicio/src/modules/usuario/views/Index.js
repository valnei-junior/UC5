import UsuarioController from "../controllers/index.js";
import prompt from 'prompt-sync'

const input = prompt()
class UsuarioView {
    static async criar() {
        const id_usuario = input("Digite o nome do Usuario: ");
        const nome = input("Digite o nome do usuario: ");
        const email = input("Digite o email do usuario: ");
        const profissao = input("Digite o profissao do usuario: ");

        const usuario = await UsuarioController.criar(
            id_usuario,
            nome,
            email,
            profissao
        );
        console.table(usuario);
    }
    
    static async editarUsuario(id_usuario, nome, email, profissao) {
        const usuario = await UsuarioController.editar(
            id_usuario,
            nome,
            email,
            profissao
        );
        console.table(usuario);
    }
    // static async listarTodos() {
    //     const usuario = await UsuarioController.listarTodos();
    //     console.table(usuario);
    // }
    static async listarPorEmail(email) {
        const usuario = await UsuarioController.listarPorEmail(email);
        console.table(usuario);
    }
    // static async deletarTodos() {
    //     await UsuarioController.deletarTodos();
    // }
    static async deletarUsuario(email) {
        await UsuarioController.deletarUsuario(email);
    }
    // static async totalUsuario() {
    //     const total = await UsuarioController.totalUsuario();
    //     console.table(total);
    // }
}

export default UsuarioView;