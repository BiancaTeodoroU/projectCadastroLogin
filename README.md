# Sistema de listagem de usuários

## Objetivo: Com esse novo projeto o usuário deve entrar direto na home, e nela terá um botão para adicionar novas informações de usuários detalhe que os campos terão a validação de que os campos não podem estar em branco o email tem que ter o @, quando adicionada a nova informação o usuário será redirecionado novamente para a home, e lá estara listado o usuário novo que foi cadastro, e será possivel editar ou excluir.

### As tecnologias utilizadas para essa aplicação serão: NodeJS, ExpressJS , MySQL, ejs, bootstrap, bodyParser.

### Objetivo da aplicação: O objetivo é ter uma aplicação simples mas fácil de utilizar para o usuário final.

### para iniciar o servidor usar o comando

    npm run start

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
