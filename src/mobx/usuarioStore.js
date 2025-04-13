import { autorun, makeAutoObservable, reaction } from "mobx";

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
  objetivosTipos = {
    economizar: "Economizar",
    investir: "Investir",
    "controlar-gastos": "Controlar gastos",
  };

  constructor() {
    makeAutoObservable(this);

    this.#carregarDoLocalStorage();

    autorun(() => {
      const userState = {
        nome: this.nome,
        renda: this.renda,
        objetivoFinanceiro: this.objetivoFinanceiro,
        orcamentoDiario: this.orcamentoDiario,
      };

      localStorage.setItem("usuario", JSON.stringify(userState));
    });

    reaction(
      () => this.orcamentoDiario,
      () => console.log("Orçamento diário atualizado:")
    );
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

  atualizarOrcamentoDiario(transacao) {
    const valor = Math.abs(transacao.valor);

    if (transacao.tipo !== "receita") {
      this.orcamentoDiario -= valor;
      return;
    }

    this.orcamentoDiario += valor;
  }

  get objetivoFinanceiroSelecionado() {
    if (!this.objetivosTipos[this.objetivoFinanceiro]) {
      return null;
    }

    return this.objetivosTipos[this.objetivoFinanceiro];
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

  #carregarDoLocalStorage() {
    const dados = localStorage.getItem("usuario");

    if (dados) {
      try {
        const { nome, renda, objetivoFinanceiro, orcamentoDiario } =
          JSON.parse(dados);
        this.nome = nome;
        this.renda = renda;
        this.objetivoFinanceiro = objetivoFinanceiro;
        this.orcamentoDiario = orcamentoDiario;
      } catch (error) {
        console.error(error);
      }
    }
  }
}

export const usuarioStore = new UsuarioStore();
