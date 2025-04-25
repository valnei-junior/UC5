import ProfessorController from "../controllers/index.js";
import prompt from 'prompt-sync'

const input = prompt()
class ProfessorView {
  static async criar() {
    const nome = input("Digite o nome do professor: ");
   
    const matricula = input("Digite a matrícula do professor: ");
   
    const cod_turma = input("Digite o código da turma: ");
    const professor = await ProfessorController.criar(
      nome,
     
      matricula,
      
      cod_turma
    );
    console.table(professor);
  }
  static async editarProfessor(nome,  matricula, cod_turma) {
    const professor = await ProfessorController.editar(
      nome,
     
      matricula,
     
      cod_turma
    ); 
    console.table(professor);
  }
  static async listarTodos() {
    const professor = await ProfessorController.listarTodos();
    console.table(professor);
  }
  static async listarPorEmail(matricula) {
    const professor = await ProfessorController.listarPorEmail(matricula);
    console.table(professor);
  }
  static async deletarTodos() {
    await ProfessorController.deletarTodos();
  }
  static async deletarProfessor(matricula) {
    await ProfessorController.deletarProfessor(matricula);
  }
  static async totalProfessor() {
    const total = await ProfessorController.totalProfessor();
    console.table(total);
  }
}

export default ProfessorView;