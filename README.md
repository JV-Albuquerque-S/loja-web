# Devnology E-commerce

Este projeto é um e-commerce com funcionalidades completas de listagem de produtos, visualização individual, carrinho de compras e pedidos. Utiliza tecnologias modernas no frontend (React + MUI) e backend (NestJS).

---

## 🚧 Disclaimer

Meu computador teve um problema no início da semana e só fui capaz de consertá-lo na quarta-feira à noite, logo, só tive dois dias para realizar o teste técnico (Quinta e Sexta). Por causa disso, não fui capaz de terminar as funcionalidades completas exigidas no teste, deixando alguns pontos apenas simulados, sendo eles:

- Barra de pesquisa de produtos e filtros na barra lateral, exceto o filtro de Região, que filtra corretamente entre os dados do Brasil e os dados da Europa, ou a fusão dos dois.
- As páginas Carrinho de Compras e Meus Pedidos apenas renderizam um array de objetos estático na página.

Espero que ainda assim o código tenha qualidade o suficiente para avançar nesse processo seletivo :)

De qualquer forma agradeço pela atenção e pela oportunidade!

## 🧰 Tecnologias utilizadas

### Frontend:

- React
- React Router
- Material UI (MUI)
- TypeScript

### Backend:

- NestJS
- Prisma ORM
- Axios
- TypeScript

---

## ▶️ Como rodar o projeto

### Pré-requisitos:

- Node.js (v18 ou superior)
- NPM ou Yarn

### Rodando o Frontend:

```bash
# Acesse a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O frontend estará disponível em: http://localhost:5173

### Rodando o Backend:

```bash
# Acesse a pasta do backend
cd backend

# Instale as dependências
npm install

# Gere o cliente Prisma (mesmo sem banco real)
npx prisma generate

# Inicie o servidor
npm run start:dev
```

O backend estará disponível em: http://localhost:3000

---

## 🧠 Decisões Técnicas

### Frontend:

- Utilização do Material UI para uma interface moderna e responsiva.
- React Router para navegação entre páginas.
- Tela de carrinho consome dados do backend, que acessa APIs externas de acordo com a origem do produto.
- Tipos de produtos foram unificados para facilitar o reuso de componentes entre Brasil e Europa.

### Backend:

- Implementado com NestJS e organização por módulos (produtos do Brasil, Europa, carrinho).
- Prisma utilizado apenas para persistência dos IDs dos produtos no carrinho.
- **Não é necessário configurar banco local** para rodar a aplicação, já que a persistência é simulada.

---
