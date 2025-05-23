import {
  Cartao,
  CartaoCabecalho,
  CartaoCorpo,
  Descricao,
} from "@components/Cartao";
import BarraProgresso from "@components/MetaFinanceira/BarraProgresso/BarraProgresso";
import { observer } from "mobx-react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { useStoreContext } from "src/mobx/StoreContext";
import styled from "styled-components";

export const TituloMetaFinanceira = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-s);
  font-size: var(--fonte-l);
  color: var(--cor-secundaria-receita);
  margin: 0;
`;

const MetaFinanceira = observer(() => {
  const { usuarioStore } = useStoreContext();

  return (
    <Cartao>
      <CartaoCabecalho>Progresso da meta financeira</CartaoCabecalho>
      <CartaoCorpo>
        <Descricao>
          <TituloMetaFinanceira>
            {usuarioStore.objetivoFinanceiroSelecionado === "Economizar" ? (
              <LiaPiggyBankSolid size={30} />
            ) : usuarioStore.objetivoFinanceiroSelecionado === "Investir" ? (
              <FaMoneyBillTrendUp size={25} />
            ) : (
              <GiTakeMyMoney size={30} />
            )}
            {usuarioStore.objetivoFinanceiroSelecionado
              ? `Meta de ${usuarioStore.objetivoFinanceiroSelecionado}`
              : "Nenhuma meta selecionada"}
          </TituloMetaFinanceira>
          <BarraProgresso />
        </Descricao>
      </CartaoCorpo>
    </Cartao>
  );
});
export default MetaFinanceira;
