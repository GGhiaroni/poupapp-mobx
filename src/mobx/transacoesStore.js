const { makeAutoObservable } = require("mobx");

class TransacoesStore {
  transacoes = [];

  constructor() {
    makeAutoObservable(this);
  }

  adicionarTransacao(transacao) {
    this.transacoes.push({ id: uuidv4(), ...transacao });
  }
}

export const transacoesStore = new TransacoesStore();
