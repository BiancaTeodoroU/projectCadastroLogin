# Sistema de listagem de usuários 📝

 ## Índice
- [Sobre](#-sobre)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Uso](#-uso)

## Sobre 📄
Com esse projeto o usuário deve entrar direto na home, e nela terá um botão para adicionar novas informações de usuários detalhe que os campos terão a validação de que os campos não podem estar em branco o email tem que ter o @, quando adicionada a nova informação o usuário será redirecionado novamente para a home, e lá estara listado o usuário novo que foi cadastro, e será possivel editar ou excluir.

### Descrição do ambiente de desenvolvimento utilizado;
O ambiente de desenvolvimento utilizado foi usando o vsCode e NodeJs, ExpressJs que com ambos foi possivel criar um ambiente virtual e criação de rotas e visualização do front-end para a aplicação.

### Especificação da linguagem de programação, frameworks e banco de dados utilizados;
Este é um projeto de listagem de usuários, utilizando NodeJS, ExpressJS , MySQL, ejs, bootstrap, bodyParser e Cypress.

### Como instalar o projeto e inicializar a aplicação
Você pode usar 2 formas para instalar, a primeira com o git clone

    git clone git@github.com:BiancaTeodoroU/projectListerUsers.git

e a segunda forma é baixando como um zip, só clicar em CODE e Download zip

![image](https://github.com/BiancaTeodoroU/projectListerUsers/assets/101062400/5679cb23-96b0-4fd1-a3d8-cefc957b7235)

### para iniciar o servidor usar o comando

    npm run start

### Para rodar os testes é preciso que esteja com o servidor já inicializado, e depois rodar o comando

    npm run cypress

### Informações sobre como contribuir para o projeto;

#### 1- Ler a documentação do projeto
O arquivo detalhará como funciona a contribuição para o projeto, explicando todas os procedimentos que você deverá seguir para fazer a sua contribuição.

#### 2- Acessar a aba Issues
Procurar por alguma issue que já foi aberta e que não tem ninguém trabalhando ou abrir uma issue. A abertura de uma issue é uma sugestão no projeto e o manteiner do projeto irá avaliar se a sua sugestão é válida ou não. O manteiner aprovando, você estará apto para prosseguir.

#### 3- Fork 
O próximo passo é realizar um fork do repositório do projeto no GitHub.

#### 4- Clone
Feito o fork do repositório, será criado um novo repositório no seu perfil do GitHub. Faça um git clone deste na sua máquina (seu ambiente local).

#### 5- Adicionando um repositório remoto e atualizando seu repositório local em relação ao remoto
Neste passo é preciso que você crie um novo repositório remoto (que será o repositório original do projeto).
    
    git remote add origin urlDoRepositórioDoProjeto

No caso, chamei o novo repositório remoto de origin, mas você pode colocar o nome que preferir. Ao realizar o comando abaixo, irei atualizar meu repositório local em relação ao repositório remoto (branch main ou master - a depender de como está nomeada a branch principal do repositório que você fez o fork).
    
    git pull upstream main

#### 6- Criar uma nova branch
Feito isso, deve-se criar uma branch para que você possa fazer as alterações/criações de código necessárias
    
    git checkout -b novoBranch

#### 7- Faça/modifique o código
#### 8- Realizar Stage - Commit do seu trabalho
#### 9- Open a pull request
Abra pull request solicitando o merge da branch que você criou (novoBranch) ao repositório do projeto Open Source no qual deseja contribuir. Lembre-se de referenciar na pull request qual issue você está solucionando.

### Descrição da aplicação de práticas de código limpo;
![image](https://github.com/BiancaTeodoroU/projectListerUsers/assets/101062400/233a14da-79d6-4975-abd5-84fc8e064432)

Primeiro eu separei, cada parte da aplicação estilização, e boas praticas no próprio código vou citar a parte do front, na criação das classes coloquei nomes mais genericos, e não especificos porque nesse caso, eu usei as mesmas classes em vários lugares, se fosse somente em um arquivo especifico eu colocaria nomes mais especificos, e boas práticas no geral, tentando não repetir muito css etc...

### Identificação da criação de testes automatizados para a aplicação;

#### Para ver os testes, após rodar os comandos citados acima, o cypress irá abrir sua interface gráfica que será assim

![image](https://github.com/BiancaTeodoroU/projectListerUsers/assets/101062400/8ae40787-33a3-4769-b50a-2bc2fed3b0cd)

#### Clicar em E2E testing, e escolher em qual browser você quer visualizar o teste

![image](https://github.com/BiancaTeodoroU/projectListerUsers/assets/101062400/62515168-2bdf-48cb-a014-578d5e264674)

#### Clicar em specs e pra ser mais rápido caso não apareça só escrever front que irá aparecer o arquivo e pasta

![image](https://github.com/BiancaTeodoroU/projectListerUsers/assets/101062400/614c490a-9cc6-4be9-8b7c-4fd208a613c9)

ai é só clicar no arquivo e irá começar os testes

![image](https://github.com/BiancaTeodoroU/projectListerUsers/assets/101062400/9a4eee6c-b122-4a0d-9d4b-fc6a87da3f6c)

## 🧰 Pré-requisitos
Antes de começar, você vai precisar ter instalado:
- NodeJS >= 14.21.3
- MySQL Workbench >= 8.0.32

## 🛠 Instalação
```sh
npm i
```

## 👩‍💻 Uso
Adicionar as informações do seu banco no arquivo app.js

```js
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    port: '3306',
    password:'bianca',
    database:'crud'
});
```

### Criação da tabela do banco de dados

```sql
   CREATE DATABASE crud;

    use crud;

    CREATE TABLE `users` (
    `id` int(11) NOT NULL,
    `name` varchar(150) NOT NULL,
    `email` varchar(150) NOT NULL,
    `pwd` varchar(25) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;


    ALTER TABLE `users`
    ADD PRIMARY KEY (`id`);

    ALTER TABLE `users`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
```

#### Objetivo da aplicação: O objetivo é ter uma aplicação simples mas fácil de utilizar para o usuário final.
#### Imagens de como ficou visualmente
![image](https://github.com/BiancaTeodoroU/projectListerUsers/assets/101062400/a35e4073-44ea-4e6c-b3f6-84db69acff8b)
![image](https://github.com/BiancaTeodoroU/projectListerUsers/assets/101062400/1cc8bcdd-5bf5-4453-9438-490cefdf6e55)
![image](https://github.com/BiancaTeodoroU/projectListerUsers/assets/101062400/a401fb99-5425-4a18-bd7f-3aa9797dc1f3)

