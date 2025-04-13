import Botao from "@components/Botao";
import { Cartao, CartaoCabecalho } from "@components/Cartao";
import { Container, ListaMovimentacoes } from "@components/Contas/Contas";
import { observer } from "mobx-react";
import { useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { useStoreContext } from "src/mobx/StoreContext";
import Transacao from "./Transacao/Transacao";
import TransacaoModal from "./TransacaoModal";

const Transacoes = observer(() => {
  const { transacoesStore } = useStoreContext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Cartao>
      <CartaoCabecalho>Movimentação financeira</CartaoCabecalho>
      <Container>
        <ListaMovimentacoes>
          {transacoesStore.map((transacao) => (
            <Transacao key={transacao.id} transacao={transacao} />
          ))}
        </ListaMovimentacoes>
        <Botao $variante="neutro" onClick={() => handleOpenModal()}>
          <BsCashCoin />
          Adicionar transação
        </Botao>
        {isModalOpen && (
          <TransacaoModal
            isOpen={isModalOpen}
            onCloseModal={() => handleCloseModal()}
          />
        )}
      </Container>
    </Cartao>
  );
});
export default Transacoes;
