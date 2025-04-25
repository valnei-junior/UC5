import AlunoController from "../controllers/index.js";
import prompt from 'prompt-sync'

const input = prompt()
class AlunoView {
  static async criar() {
    const nome = input("Digite o nome do aluno: ");
    const email = input("Digite o email do aluno: ");
    const matricula = input("Digite a matrícula do aluno: ");
    const telefone = input("Digite o telefone do aluno: ");
    const cod_turma = input("Digite o código da turma: ");
    const aluno = await AlunoController.criar(
      nome,
      email,
      matricula,
      telefone,
      cod_turma
    );
    console.table(aluno);
  }
  static async editarAluno(nome, email, matricula, telefone, cod_turma) {
    const aluno = await AlunoController.editar(
      nome,
      email,
      matricula,
      telefone,
      cod_turma
    ); 
    console.table(aluno);
  }
  static async listarTodos() {
    const alunos = await AlunoController.listarTodos();
    console.table(alunos);
  }
  static async listarPorEmail(email) {
    const aluno = await AlunoController.listarPorEmail(email);
    console.table(aluno);
  }
  static async deletarTodos() {
    await AlunoController.deletarTodos();
  }
  static async deletarAluno(email) {
    await AlunoController.deletarAluno(email);
  }
  static async totalAlunos() {
    const total = await AlunoController.totalAlunos();
    console.table(total);
  }
}

export default AlunoView;
