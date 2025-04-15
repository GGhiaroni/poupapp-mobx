import { autorun, makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

class ContasStore {
  contas = [];

  constructor() {
    makeAutoObservable(this);
    this.#carregarDoLocalStorage();

    autorun(() => {
      localStorage.setItem("contas-bancarias", JSON.stringify(this.contas));
    });
  }

  adicionarConta(conta) {
    this.contas.push({ id: uuidv4(), ...conta });
  }

  #carregarDoLocalStorage() {
    const dados = localStorage.getItem("contas-bancarias");

    if (dados) {
      try {
        this.contas = JSON.parse(dados);
      } catch (error) {
        console.error(error);
      }
    }
  }
}

export const contasStore = new ContasStore();
