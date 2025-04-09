import logo from "@assets/images/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = styled.aside`
  grid-area: sidebar;
  background-color: var(--cor-neutra-medium);
  color: var(--cor-neutra-light);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--border-radius-s);
`;

export const Imagem = styled.img`
  padding-top: var(--padding-l);
`;

export const Rodape = styled.footer`
  padding: var(--padding-m);
  text-align: center;
`;

const BarraLateral = () => {
  return (
    <Sidebar>
      <Link to="/">
        <Imagem src={logo} alt="Logotipo da poupeapp" />
      </Link>
      <Rodape>
        Desenvolvido por Gabriel Ghiaroni. Projeto fictício sem fins comerciais.
      </Rodape>
    </Sidebar>
  );
};
export default BarraLateral;
