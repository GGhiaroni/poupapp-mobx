const { makeAutoObservable } = require("mobx");

class TransacoesStore {
  transacoes = [];

  constructor() {
    makeAutoObservable(this);
  }
}

export const transacoesStore = new TransacoesStore();
