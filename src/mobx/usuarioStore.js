import { makeAutoObservable } from "mobx";

class UsuarioStore {
  nome = "";
  renda = 0;
  objetivoFinanceiro = "";
  orcamentoDiario = 0;

  constructor() {
    makeAutoObservable(this);
  }

  definirDadosUsuario({ nome, renda, objetivoFinanceiro }) {
    this.nome = nome;

    const rendaConvertida = Number(renda.replace(/\D/g, "")) / 100;

    this.renda = rendaConvertida;
    this.objetivoFinanceiro = objetivoFinanceiro;
    this.calcularOrcamentoDiario();
  }

  calcularOrcamentoDiario() {
    const diasDoMes = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0
    ).getDate();
    this.orcamentoDiario = Math.floor(this.renda / diasDoMes);
  }
}

export const usuarioStore = new UsuarioStore();
