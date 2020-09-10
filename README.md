<h1 align="center"># NSint - Neon Pinturas sistemas interno</h1>
<h4 align="right">- Projeto já finalizado</h4>

<h2 align="center">Código HTML/CSS simulando uma aplicação interna de uma empresa fictícia de pinturas de Neon. </h2>

<h2 align="center">Código se divide por arquivos html e CSS</h2>

<h2 align="center">software utilizado para a programação:<br><br>
<ul><li>VScode Studio 1.48.2</li>
<li>Node.js - 12.18.3</li>
  <li>Git for Windows v2.28.0 </li>
</ul></h2>

<h1 align="center">Instalação</h1>
Após baixado os arquivos é só prosseguir com as instalações (next, next)

<h2 align="center">Comandos utilizados no cmd:<br><br>
<ul>
  <li>npm init -y</li>
  <li>node src/server.js</li>
  <li>npm install express</li>
  <li>npm install nodemon -D</li>
  <li>npm install nunjucks</li>
  <li>npm install sqlite-async</li> 
  <li>npm run dev</li>
  <li>node src/database/test/test_value_db.js</li>
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
  <p></p>
  <h3 id="create_t">create_table.js</h3>
  <p>Inicializa a dependência sqlite-async, cria o arquivo database.sqlite, abre conexão com o banco de dados local e cria algumas tabelas</p>
  <h3 id="tvdb">test_value_db.js</h3>
  <p>arquivo de teste de valores no banco de dados, nele se gera alguns valores conforme as tabelas do banco de dados e importa o arquivo test_insert_db.js</p>
  <h3 id="tidb">test_insert_db.js</h3>
  <p>insere dados na tabelado banco de dados uma vez que esse arquivo foi invocado pelo arquivo test_value_db.js</p>
  

<h1 align="center">Referências</h1>
<p>Link abaixo de onde extrai o conteúdo para desenvolver essa aplicação:</p>
<p>https://www.freepik.com/popular-icons</p>
<p>https://wallpapercave.com/rain-background</p>