import { makeAutoObservable } from "mobx";

class UsuarioStore {
  nome = "";
  renda = 0;
  objetivoFinanceiro = "";
  orcamentoDiario = 0;
  metas = {
    economizar: 0.2,
    investir: 0.15,
    "controlar-gastos": 0.8,
  };

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

  get progressoMeta() {
    if (!this.metas[this.objetivoFinanceiro]) {
      return 0;
    }

    const meta = this.renda * this.metas[this.objetivoFinanceiro];

    if (this.objetivoFinanceiro === "controlar-gastos") {
      return (((meta - this.orcamentoDiario) / meta) * 100).toFixed(2);
    }
    return ((this.orcamentoDiario / meta) * 100).toFixed(2);
  }
}

export const usuarioStore = new UsuarioStore();
