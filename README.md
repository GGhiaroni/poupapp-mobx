# 💸 PoupApp

**PoupApp** é uma aplicação web interativa que auxilia usuários no acompanhamento de suas metas financeiras mensais, permitindo definir objetivos como **economizar**, **investir** ou **controlar gastos**, tudo de forma visual, intuitiva e reativa.

Acesse o projeto em: https://poupapp-mobx.vercel.app/

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| [React](https://reactjs.org/) | Biblioteca JavaScript para construção de interfaces |
| [MobX](https://mobx.js.org/) | Biblioteca de gerenciamento de estado reativo |
| [mobx-react](https://mobx.js.org/react-integration.html) | Integração oficial do MobX com o React |
| [Styled-components](https://styled-components.com/) | CSS-in-JS com estilos dinâmicos |
| [React Icons](https://react-icons.github.io/react-icons/) | Biblioteca de ícones populares para React |
| [Chart.js + React Chart.js 2](https://www.chartjs.org/) | Criação de gráficos dinâmicos e visuais |
| [React Router DOM](https://reactrouter.com/) | Navegação entre páginas de forma declarativa |
| [uuid](https://www.npmjs.com/package/uuid) | Geração de identificadores únicos |

---

## 🧠 Gerenciamento de Estado com MobX

O MobX foi escolhido por sua **abordagem simples, reativa e declarativa** para lidar com o estado da aplicação.

### ✅ Benefícios do uso do MobX no projeto:

- **Reatividade automática**: componentes React se atualizam ao detectar mudanças no estado observado.
- **Stores organizadas**: toda a lógica de negócio e dados ficam centralizados em stores específicas.
- **Menos boilerplate** comparado a outros gerenciadores como Redux.

## ✨ Funcionalidades

- 🎯 **Definição de objetivos financeiros**:
  - Economizar
  - Investir
  - Controlar gastos

- 📊 **Acompanhamento de progresso**:
  - Cálculo automático do progresso com base na renda mensal e no objetivo escolhido
  - Exibição de barra de progresso visual e percentual

- 📅 **Orçamento diário calculado automaticamente**:
  - Baseado na renda mensal e nos dias do mês atual

- 📈 **Visualização gráfica**:
  - Utilização de gráficos com Chart.js e React Chart.js 2
  - Representação visual clara da evolução das metas

- 💅 **Interface moderna e responsiva**:
  - Construída com styled-components para garantir visual limpo e adaptado a diferentes dispositivos

- 🔄 **Navegação entre etapas fluída**:
  - Com React Router DOM, o usuário pode navegar entre telas de forma rápida e intuitiva

- 🧠 **Gerenciamento de estado com MobX**:
  - Toda a lógica de dados e reatividade do app é centralizada em uma Store usando `makeAutoObservable`
  - Os componentes são automaticamente reativos às mudanças de estado, reduzindo o boilerplate e aumentando a legibilidade

## 📸 Prévia com Imagens

<img width="890" alt="Captura de Tela 2025-04-15 às 11 57 33" src="https://github.com/user-attachments/assets/b50872b7-4f2b-4246-8c13-0660ba40caf9" />


<img width="890" alt="Captura de Tela 2025-04-15 às 11 56 35" src="https://github.com/user-attachments/assets/de1b4e51-54b0-4631-a8e7-7a60864a829e" />

<img width="890" alt="Captura de Tela 2025-04-15 às 11 56 58" src="https://github.com/user-attachments/assets/c36943ae-5511-4f70-96d4-1a93880ab2e9" />

---

Acesse o projeto em: https://poupapp-mobx.vercel.app/
