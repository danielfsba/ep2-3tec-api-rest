
--atualizar node
nvm install node
--instalar sequelize
npm i --save sequelize
npm i -D sequelize-cli

--instalar mariadb
npm i mariadb


--criação de tabelas  sequelize
npx sequelize migration:create --name=secoes
npx sequelize migration:create --name=usuarios
npx sequelize migration:create --name=funcoes
npx sequelize migration:create --name=riscos
npx sequelize migration:create --name=epis

--migra tabelas para o banco de dados
npx sequelize db:migrate

--retornar migração caso tenha algum tipo de erro
npx sequelize db:migrate:undo
npx sequelize db:migrate:undo:all


--ordem de criação:
1. migrations
2. models (lembrar de colocar no index.js da pasta database)
3. Controllers
4. Routes

-Configuração de segurança
-Criação do token JWS
1. configurar chaves no .env
2. instalar JSONWEBTOKEN
  npm i jsonwebtoken
3. Criar TokenController
4. Cria rota do autenticação
5. Registra no app.js a rota de token
6. criar middleware de autenticação
7. incluir middleware nas rotas que precisam de autenticação
8. Instalar CORS e Helmet
  npm i cors helmet

Publicar no servidor
npm run build
git add
read message
echo 'Mensagem do commit'
git commit -am "$message"
git push

ssh enedereço do servidor \
'git -C /home/pastadaaplicaoa/api'\
'pull origin master && '\
'pm2 restart api && sudo systemctl restart nginx'
