import { action, makeObservable, observable } from "mobx";

class UsuarioStore {
  nome = "";
  renda = 0;
  objetivoFinanceiro = "";
  orcamentoDiario = 0;

  constructor() {
    makeObservable(this, {
      nome: observable,
      renda: observable,
      objetivoFinanceiro: observable,
      definirDadosUsuario: action,
    });
  }

  definirDadosUsuario({ nome, renda, objetivoFinanceiro }) {
    this.nome = nome;
    this.renda = renda;
    this.objetivoFinanceiro = objetivoFinanceiro;
  }

  calcularOrcamentoDiario() {
    const diasDoMes = new Date(
      new Date().getFullYear(),
      newDate().getMonth() + 1,
      0
    ).getDate();
    this.orcamentoDiario = Math.floor(this.renda / diasDoMes);
  }
}

export const usuarioStore = new UsuarioStore();
