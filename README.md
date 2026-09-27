# 🛒 Mercantil

Aplicação de mercado desenvolvida com **React Native, Expo e TypeScript**, criada como projeto de portfólio para praticar desenvolvimento de interfaces, navegação, gerenciamento de estado e animações.

O Mercantil simula a experiência de compra em um pequeno mercado, permitindo navegar por categorias, visualizar produtos, adicionar itens ao carrinho, controlar quantidades e finalizar uma compra.

## 📱 Sobre o projeto

O projeto foi desenvolvido com foco em uma interface simples, organizada e responsiva, utilizando uma estrutura baseada em componentes reutilizáveis.

A aplicação possui fluxo completo de navegação entre produtos, categorias, carrinho e checkout.

O projeto atualmente utiliza dados locais para representar os produtos e o funcionamento do carrinho, sem integração com backend ou banco de dados.

## ✨ Funcionalidades

### 🏠 Início

* Tela de boas-vindas
* Logo do Mercantil
* Animação de entrada dos elementos
* Banner de produtos
* Categorias de produtos
* Navegação para as categorias
* Navegação para os produtos
* Navegação inferior entre Início e Carrinho

### 📦 Produtos

* Listagem de produtos
* Imagens dos produtos
* Nome do produto
* Preço
* Categoria
* Botão para adicionar ao carrinho
* Feedback visual ao adicionar um produto
* Animação de entrada dos cards
* Animação no botão ao adicionar um produto

### 🗂️ Categorias

* Categorias organizadas em cards
* Imagens das categorias
* Navegação para os produtos da categoria

### 🛒 Carrinho

* Listagem dos produtos adicionados
* Controle de quantidade
* Adição de unidades
* Remoção de unidades
* Remoção automática do produto quando a quantidade chega a zero
* Cálculo do subtotal de cada produto
* Cálculo do valor total da compra
* Indicador da quantidade de produtos
* Animação na alteração da quantidade
* Navegação para o checkout

### 💳 Checkout

* Resumo dos produtos
* Quantidade de cada produto
* Preço individual
* Subtotal
* Valor total da compra
* Botão para finalizar a compra
* Tela de confirmação após a finalização
* Animação de sucesso
* Opção para voltar ao início

## 🎨 Interface

A interface utiliza uma identidade visual baseada em:

* Verde principal: `#0B6645`
* Verde de ação: `#10B981`
* Fundo creme: `#FAF6EE`
* Branco: `#FFFFFF`
* Texto principal: `#333333`
* Texto secundário: `#666666`
* Bordas suaves: `#E5EDE8`

O projeto utiliza cards com bordas arredondadas, sombras sutis e espaçamentos consistentes para criar uma interface limpa e agradável.

## 🛠️ Tecnologias utilizadas

### React Native

Utilizado para construção das interfaces da aplicação.

### Expo

Utilizado para facilitar o desenvolvimento e execução do projeto React Native.

### TypeScript

Utilizado para adicionar tipagem estática e maior segurança ao código.

### Expo Router

Utilizado para organizar a navegação da aplicação através de rotas baseadas em arquivos.

### Zustand

Utilizado para gerenciamento do estado global do carrinho.

O Zustand mantém os produtos adicionados ao carrinho e disponibiliza ações para:

* adicionar produtos;
* aumentar quantidade;
* diminuir quantidade;
* limpar o carrinho.

### React Native Reanimated

Utilizado para criar as animações da aplicação.

As animações estão presentes em:

* tela de boas-vindas;
* cards de produtos;
* botão de adicionar ao carrinho;
* quantidade de produtos no carrinho;
* confirmação da compra.

### Lucide React Native

Utilizado para os ícones da navegação da aplicação.

### StyleSheet

Utilizado para criação e organização dos estilos dos componentes React Native.

## 📂 Estrutura do projeto

```text
mercantil-app/
│
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── home.tsx
│   │   └── cart.tsx
│   │
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── category.tsx
│   ├── product.tsx
│   └── checkout.tsx
│
├── assets/
│   ├── products/
│   ├── logo.png
│   ├── img1.jpg
│   ├── img2.jpg
│   ├── img3.jpg
│   └── categoria.png
│
├── components/
│   ├── Banner/
│   │   └── Banner.tsx
│   │
│   ├── Button/
│   │   └── Button.tsx
│   │
│   ├── Category/
│   │   └── Category.tsx
│   │
│   ├── Checkout/
│   │   └── Checkout.tsx
│   │
│   ├── Product/
│   │   └── Product.tsx
│   │
│   └── Welcome/
│       └── Welcome.tsx
│
├── data/
│   ├── categories.ts
│   └── products.ts
│
├── store/
│   └── cart-store.ts
│
├── types/
│   ├── cart-type.ts
│   └── product-type.ts
│
├── package.json
└── README.md
```

## 🧠 Gerenciamento do carrinho

O carrinho é gerenciado globalmente utilizando Zustand.

Cada item possui o produto e sua quantidade:

```text
CartItem
├── product
└── quantity
```

O estado global disponibiliza ações para:

```text
addToCart()
decreaseCart()
clearCart()
```

Dessa forma, diferentes telas conseguem acessar e modificar o mesmo carrinho sem precisar passar os dados manualmente através de várias propriedades.

## ✨ Animações

As animações foram implementadas utilizando React Native Reanimated.

### Welcome

A tela inicial possui animações de entrada para:

* logo;
* título;
* descrição.

Os elementos aparecem de forma gradual utilizando `withTiming` e `withDelay`.

### Produtos

Os cards possuem animação de entrada e o botão de adicionar ao carrinho possui um pequeno efeito de escala para fornecer feedback visual ao usuário.

### Carrinho

A quantidade do produto recebe uma pequena animação quando é aumentada ou diminuída.

### Checkout

Após finalizar a compra, o ícone de confirmação e a mensagem de sucesso aparecem com animação.

## 📱 Responsividade

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela, mantendo:

* cards organizados;
* espaçamentos adequados;
* navegação acessível;
* imagens proporcionais;
* botões utilizáveis em telas menores.

O projeto também foi testado através do **Expo Web**, permitindo visualizar a aplicação diretamente no navegador.

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* Node.js
* npm

Também é necessário ter o ambiente Expo configurado.

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entre na pasta

```bash
cd mercantil-app
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o projeto

```bash
npx expo start
```

### 5. Executar no navegador

Para executar a aplicação utilizando o Expo Web:

```bash
npx expo start --web
```

## 🌐 Aplicação online

A aplicação estará disponível em:

**URL:** EM_BREVE

## 📸 Screenshots

### Tela inicial

EM_BREVE

### Produtos

EM_BREVE

### Carrinho

EM_BREVE

### Checkout

EM_BREVE

## 📚 Objetivos de aprendizado

Este projeto foi desenvolvido para colocar em prática conceitos de desenvolvimento mobile e organização de aplicações React Native.

Entre os principais conceitos praticados estão:

* React Native
* TypeScript
* Componentização
* Props
* Estado
* Gerenciamento de estado global
* Zustand
* Expo Router
* Navegação entre telas
* React Native Reanimated
* Animações
* StyleSheet
* Layout responsivo
* Organização de pastas
* Componentes reutilizáveis

## 🔮 Possíveis evoluções

Como o projeto atualmente utiliza dados locais, algumas evoluções futuras poderiam incluir:

* integração com uma API;
* autenticação de usuários;
* backend;
* banco de dados;
* persistência do carrinho;
* sistema real de pedidos;
* integração com pagamentos;
* painel administrativo.

Essas funcionalidades não fazem parte da versão atual do projeto.

## 👨‍💻 Autor

**Luiz André**

Desenvolvedor Full Stack

### Links

* GitHub: EM_BREVE
* LinkedIn: EM_BREVE

---

⭐ Projeto desenvolvido como parte do meu portfólio de desenvolvimento web e mobile.
