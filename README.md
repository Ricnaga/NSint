<h2 align="center">Comandos utilizados no cmd:<br><br>
<ul>
  <li>npm init -y</li>
  <li>node src/server.js</li>
  <li>npm install express</li>
  <li>npm install nodemon -D</li>
  <li>npm install nunjucks</li>
  <li>npm install sqlite-async</li> 
  <li>npm run dev</li>
  <li></li>
</ul>
</h2>

<h1 align="center">Sumário</h1>
<ul>
    <li><a href="#indexpage">index.html</a></li>
    <li><a href="#indexvisual">index.css</a></li>
    <li><a href="#mainvisual">main.css</a></li>
    <li><a href="#employeepage">employee.html</a></li>
    <li><a href="#employeevisual">employee.css</a></li>
    <li><a href="#r_employeepage">register_employee.html</a></li>
    <li><a href="#r_employeevisual">reg_employee.css</a></li>
    <li><a href="#a_employeepage">alter_employee.html</a></li>
    <li><a href="#a_employeevisual">alt_employee.css</a></li>
    <li><a href="#companypage">company.html</a></li>
    <li><a href="#companyvisual">company.css</a></li>
    <li><a href="#r_companypage">reg_company.html</a></li>
    <li><a href="#r_companyvisual">reg_company.css</a></li>
    <li><a href="#a_companypage">alt_company.html</a></li>
    <li><a href="#a_companyvisual">alt_company.css</a></li>
    <li><a href="#svjs">server.js</a></li>
    <li><a href="#routes">routes.js</a></li>
    <li><a href="#create_t">create_table.js</a></li>
    <li><a href="#tvdb">test_value_db.js</a></li>
    <li><a href="#tidb">test_insert_db.js</a></li>
</ul>

<h3 id="indexpage">index.html</h3>
  <p>Onde é feito a primeira página, nela existem apenas um plano de fundo fosco com 3 aplicações na tela, não importa o tamanho da tela, sempre estará alinha os 3 ícones</p>
  <h3 id="indexvisual">index.css</h3>
  <p>formata visualmente os botões e todo conteúdo deles, além do dimensionamento da página em dispositivos móveis</p>
  <h3 id="mainvisual">main.css</h3>
  <p>formata visualmente o fundo de tela, estrutura de todas as páginas, o logo inicial e superficialmente os botões</p>
  <h3 id="employeepage">employee.html</h3>
  <p>página para acesso a cadastro e alteração de dados de funcionário</p>
  <h3 id="employeevisual">employee.css</h3>
  <p>formata visualmente os botões e todo conteúdo deles, além do dimensionamento da página em dispositivos móveis e parcialmente do formulário </p>
  <h3 id="r_employeepage">register_employee.html</h3>
  <p>página web contendo alguns campos básico para simular um cadastro de um funcionário num sistema de uma empresa</p>
  <h3 id="r_employeevisual">reg_employee.css</h3>
  <p>formata visualmente os botões e todo conteúdo deles, além do dimensionamento da página em dispositivos móveis e parcialmente do formulário</p>
  <h3 id="a_employeepage">alter_employee.html</h3>
  <p>página web contendo alguns campos básico para simular a alteração do cadastro de um funcionário num sistema de uma empresa</p>
  <h3 id="a_employeevisual">alt_employee.css</h3>
  <p>formata visualmente os botões e todo conteúdo deles, além do dimensionamento da página em dispositivos móveis e parcialmente do formulário</p>
  <h3 id="companypage">company.html</h3>
  <p>responsável por oferecer a opção de cadastro ou alteração de dados de um cliente</p>
  <h3 id="companyvisual">company.css</h3>
  <p>formata visualmente os botões e todo conteúdo deles, além do dimensionamento da página em dispositivos móveis e parcialmente do formulário</p>
  <h3 id="r_companypage">reg_company.html</h3>
  <p>Apenas o formulário responsável por gerênciar os dados dos clientes</p>
  <h3 id="r_companyvisual">reg_company.css</h3>
  <p>formata visualmente os botões e todo conteúdo deles, além do dimensionamento da página em dispositivos móveis e parcialmente do formulário</p>
  <h3 id="a_companypage">alt_company.html</h3>
  <p>Página web contendo alguns campos básico para simular a alteração do cadastro de um cliente num sistema de uma empresa</p>
  <h3 id="a_companyvisual">alt_company.css</h3>
  <p>formata visualmente os botões e todo conteúdo deles, além do dimensionamento da página em dispositivos móveis e parcialmente do formulário</p>
  <h3 id="svjs">server.js</h3>
  <p>Esse arquivo javascript é responsável por executar dependências nunjucks, express, definir rotas de acesso de páginas web e sinalizar que todas podem ser encontradas no arquivo routes.js</p>
  <h3 id="routes">routes.js</h3>
  <p>Arquivo que traça rotas, o servidor indica para o navegador qual página deve ser acessada conforme for acessando as páginas</p>
  <h3 id="create_t">create_table.js</h3>
  <p>Inicializa a dependência sqlite-async, cria o arquivo database.sqlite, abre conexão com o banco de dados local e cria algumas tabelas</p>
  <h3 id="tvdb">test_value_db.js</h3>
  <p>arquivo de teste de valores no banco de dados, nele se gera alguns valores conforme as tabelas do banco de dados e importa o arquivo test_insert_db.js</p>
  <h3 id="tidb">test_insert_db.js</h3>
  <p>insere dados na tabelado banco de dados uma vez que esse arquivo foi invocado pelo arquivo test_value_db.js</p>
  

<h1 align="center">Referências</h1>
<p>Link abaixo de onde extrai o conteúdo para desenvolver essa aplicação:</p>



#### <div align="right">- Projeto em andamento <div>
# <div align="center"># NSint - Neon Pinturas sistemas interno<div>
## <div align="center">Simulação de uma aplicação interna de uma empresa fictícia de pinturas de Neon.<div>
### <div align="center">Sumário <div>
### <div align="center">================= <div>
<!--ts-->
   - [Requisitos](#Requisitos)
   - [Tecnologias utilizadas](#tecnologias-utilizadas)
   - [Autor](#autor)
   - [Licença](#Licença)
<!--te-->
## <div align="center">Requisitos<div>
Antes de começar é necessário instalar algumas ferramentas, tais como um editor de códigos para realizar compilação dos mesmos. Os códigos desse repositório foi utilizado o [Visual Studio Code](https://code.visualstudio.com/), [NodeJS](https://nodejs.org/en/) e [Git Bash](https://gitforwindows.org/). Após instalados, no prompt de comando será necessário instalar as seguintes dependências.\
OBS:Todas as tecnologias e dependências serão instaladas via prompt de comando (bash ou cmd) e todas foram instaladas a partir da pasta raíz do repositório.
- [Express.js](#express)
- [Nodemon](#nodemon)
- [Nunjucks](#nunjucks)
- [Sqlite-async](#sqlite-async)


### <div align="center">Express</div>
Clone este repositório: git clone <https://github.com/Ricnaga/NSint> \
Acesse o projeto: cd NSint \
Inicie um projeto: npm init -y \
Ainda na raíz será necessário entrar com o comando abaixo para instalar o [Express](https://expressjs.com/pt-br/starter/installing.html): \
npm install express \

### <div align="center">Nodemon</div>
Após instalado o Express, é necessário instalar o monitorador [Nodemon](https://nodemon.io/): \
npm install nodemon -D \

### <div align="center">Nunjucks</div>
Instale o [Nunjucks](https://mozilla.github.io/nunjucks/): npm install nunjucks

### <div align="center">Sqlite-async</div>
Instale o banco de dados [Sqlite](https://www.nodenpm.com/sqlite-async/package.html): npm install sqlite-async \
Antes de iniciar a aplicação, de preferência, o banco de dados pode ter armazenado algum valor prévio com o seguinte comando:\
node src/database/test/test_value_db.js
Feito todos os passos, é hora de iniciar a aplicação: npm run dev \
Iniciado cada aplicação, abra qualquer navegador e digite http://localhost:5500 \

## <div align="center">Tecnologias utilizadas<div>
- [HTML](https://www.w3.org/HTML)
- [CSS](https://www.w3.org/Style/CSS/)
- [NodeJS](https://nodejs.org/en/)
- [Git Bash](https://gitforwindows.org/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Express](https://expressjs.com/pt-br/starter/installing.html)
- [Nodemon](https://nodemon.io/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Sqlite](https://www.nodenpm.com/sqlite-async/package.html)


## <div align="center">Autor<div>
Atividade de minha autoria com exceção dos ícones onde foram extraídos dos sites:\
<p>https://www.freepik.com/popular-icons</p>
<p>https://wallpapercave.com/rain-background</p>
Gostou? tem alguma sugestão de melhoria? por favor, entre em contato e ja aproveita e me adiciona \
<a href="https://www.linkedin.com/in/ricardo-nagatomy-56553254"><img src="https://img.shields.io/badge/-RicardoNaga-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>
<a href="https://app.rocketseat.com.br/me/ricardo-nagatomy-08130"><img src="https://img.shields.io/badge/-Rocketseat-000?style=flat-square&logo=&logoColor=white"></a>

## <div align="center">Licença<div>

![GitHub](https://img.shields.io/github/license/Ricnaga/NLW)