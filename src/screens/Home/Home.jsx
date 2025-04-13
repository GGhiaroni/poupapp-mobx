import BalancoFinanceiro from "@components/BalancoFinanceiro";
import BarraLateral from "@components/BarraLateral";
import BarraPesquisa from "@components/BarraPesquisa";
import Contas from "@components/Contas/Contas";
import MetaFinanceira from "@components/MetaFinanceira";
import OrcamentoDiario from "@components/OrcamentoDiario/OrcamentoDiario";
import SaudacaoUsuario from "@components/SaudacaoUsuario";
import Transacoes from "@components/Transacoes/Transacoes";
import { Container, Movimentacoes, Orcamento } from "./style";

function Home() {
  return (
    <Container>
      <BarraLateral />
      <BarraPesquisa />
      <SaudacaoUsuario />
      <Orcamento>
        <OrcamentoDiario />
        <MetaFinanceira />
      </Orcamento>
      <Movimentacoes>
        <Transacoes />
        <Contas />
      </Movimentacoes>
      <BalancoFinanceiro />
    </Container>
  );
}

export default Home;
