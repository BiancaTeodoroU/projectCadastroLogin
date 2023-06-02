# Sistema de listagem de usuários

![image](https://github.com/BiancaTeodoroU/projectListerUsers/assets/101062400/8add75a1-17a4-44ee-a7b0-2bb988399f13)

#### Objetivo: Com esse novo projeto o usuário deve entrar direto na home, e nela terá um botão para adicionar novas informações de usuários detalhe que os campos terão a validação de que os campos não podem estar em branco o email tem que ter o @, quando adicionada a nova informação o usuário será redirecionado novamente para a home, e lá estara listado o usuário novo que foi cadastro, e será possivel editar ou excluir.

#### O ambiente de desenvolvimento utilizado foi usando o NodeJs e ExpressJs que com ambos foi possivel criar um ambiente virtual e criação de rotas para a aplicação.
#### As tecnologias utilizadas para essa aplicação serão: NodeJS, ExpressJS , MySQL, ejs, bootstrap, bodyParser e Cypress.
#### Objetivo da aplicação: O objetivo é ter uma aplicação simples mas fácil de utilizar para o usuário final.

#### Como instalar o projeto
#### Você pode usar 2 formas para instalar, a primeira com o git clone

    git clone git@github.com:BiancaTeodoroU/projectListerUsers.git

#### e a segunda forma é baixando como um zip, só clicar em CODE e Download zip

    ![image](https://github.com/BiancaTeodoroU/projectListerUsers/assets/101062400/5679cb23-96b0-4fd1-a3d8-cefc957b7235)

#### Após baixar o projeto rodar o comando

    npm install

#### para iniciar o servidor usar o comando

    npm run start

#### Para rodar os testes é preciso que esteja com o servidor já inicializado, e depois rodar o comando

    npm run cypress

#### Para rodar o banco de dados, recomendo usar esse script para criação da tabela do banco e no arquivo app.js colocar as informações do seu banco de dados

![image](https://github.com/BiancaTeodoroU/projectListerUsers/assets/101062400/33306427-bb25-422b-a517-2f719b61f417)

### Criação da tabela do banco de dados

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

#### 2) Ler a documentação do projeto
#### O arquivo detalhará como funciona a contribuição para o projeto, explicando todas os procedimentos que você deverá seguir para fazer a sua contribuição.

#### 3) Acessar a aba Issues
#### Procurar por alguma issue que já foi aberta e que não tem ninguém trabalhando ou abrir uma issue. A abertura de uma issue é uma sugestão no projeto e o manteiner do projeto irá avaliar se a sua sugestão é válida ou não. O manteiner aprovando, você estará apto para prosseguir.

#### 4) Fork 
#### O próximo passo é realizar um fork do repositório do projeto no GitHub.

#### 5) Clone
#### Feito o fork do repositório, será criado um novo repositório no seu perfil do GitHub. Faça um git clone deste na sua máquina (seu ambiente local).

#### 6) Adicionando um repositório remoto e atualizando seu repositório local em relação ao remoto
#### Neste passo é preciso que você crie um novo repositório remoto (que será o repositório original do projeto).
    
    git remote add origin urlDoRepositórioDoProjeto

#### No caso, chamei o novo repositório remoto de origin, mas você pode colocar o nome que preferir. Ao realizar o comando abaixo, irei atualizar meu repositório local em relação ao repositório remoto (branch main ou master - a depender de como está nomeada a branch principal do repositório que você fez o fork).
    
    git pull upstream main

#### 7) Criar uma nova branch
#### Feito isso, deve-se criar uma branch para que você possa fazer as alterações/criações de código necessárias
    
    git checkout -b novoBranch

#### 8) Faça/modifique o código
#### 9) Realizar Stage - Commit do seu trabalho
#### 10) Open a pull request
#### Abra pull request solicitando o merge da branch que você criou (novoBranch) ao repositório do projeto Open Source no qual deseja contribuir. Lembre-se de referenciar na pull request qual issue você está solucionando.

#### Para ver os testes, após rodar os comandos citados acima, o cypress irá abrir sua interface gráfica que será assim

![image](https://github.com/BiancaTeodoroU/projectListerUsers/assets/101062400/8ae40787-33a3-4769-b50a-2bc2fed3b0cd)

#### Clicar em E2E testing, e escolher em qual browser você quer visualizar o teste

![image](https://github.com/BiancaTeodoroU/projectListerUsers/assets/101062400/62515168-2bdf-48cb-a014-578d5e264674)

#### Clicar em specs e pra ser mais rápido caso não apareça só esquecer front que irá aparecer o arquivo e pasta

![image](https://github.com/BiancaTeodoroU/projectListerUsers/assets/101062400/614c490a-9cc6-4be9-8b7c-4fd208a613c9)

#### ai é só clicar no arquivo e irá começar os testes

![image](https://github.com/BiancaTeodoroU/projectListerUsers/assets/101062400/9a4eee6c-b122-4a0d-9d4b-fc6a87da3f6c)


