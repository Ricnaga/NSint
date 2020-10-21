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
npm install express 

### <div align="center">Nodemon</div>
Após instalado o Express, é necessário instalar o monitorador [Nodemon](https://nodemon.io/): \
npm install nodemon -D 

### <div align="center">Nunjucks</div>
Instale o [Nunjucks](https://mozilla.github.io/nunjucks/): npm install nunjucks

### <div align="center">Sqlite-async</div>
Instale o banco de dados [Sqlite](https://www.nodenpm.com/sqlite-async/package.html): npm install sqlite-async \
Antes de iniciar a aplicação, de preferência, o banco de dados pode ter armazenado algum valor prévio com o seguinte comando:\
node src/database/test/test_value_db.js
Feito todos os passos, é hora de iniciar a aplicação: npm run dev \
Iniciado cada aplicação, abra qualquer navegador e digite http://localhost:5500 

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
Atividade de minha autoria com exceção dos ícones onde foram extraídos dos sites:
<p>https://www.freepik.com/popular-icons</p>
<p>https://wallpapercave.com/rain-background</p>
Gostou? tem alguma sugestão de melhoria? por favor, entre em contato e ja aproveita e me adiciona
<a href="https://www.linkedin.com/in/ricardo-nagatomy-56553254"><img src="https://img.shields.io/badge/-RicardoNaga-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>
<a href="https://app.rocketseat.com.br/me/ricardo-nagatomy-08130"><img src="https://img.shields.io/badge/-Rocketseat-000?style=flat-square&logo=&logoColor=white"></a>

## <div align="center">Licença<div>

![GitHub](https://img.shields.io/github/license/Ricnaga/NSint)