import CursoController from "../controllers/index.js";
import prompt from 'prompt-sync'

const input = prompt()
class CursoView {
  static async criar() {
    const nome = input("Digite o nome do Curso: ");
    const cod_turma = input("Digite o código da turma: ");
    const curso = await CursoController.criar(
      nome,
      cod_turma
    );
    console.table(curso);
  }
  static async editarCurso(nome_curso,  cod_curso) {
    const curso = await CursoController.editar(
      nome_curso,
      cod_curso
    ); 
    console.table(curso);
  }
  static async listarTodos() {
    const curso = await CursoController.listarTodos();
    console.table(curso);
  }
  static async listarPorEmail(cod_curso) {
    const curso = await CursoController.listarPorEmail(cod_curso);
    console.table(curso);
  }
  static async deletarTodos() {
    await CursoController.deletarTodos();
  }
  static async deletarCurso(cod_curso) {
    await CursoController.deletarCurso(cod_curso);
  }
  static async totalCurso() {
    const total = await CursoController.totalCursos();
    console.table(total);
  }
}

export default CursoView;