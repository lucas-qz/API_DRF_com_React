![GitHub Repo Size](https://img.shields.io/github/repo-size/lucas-qz/PortalVagasEmprego)

# 🧑🏼‍💻 API DRF + React / Cadastro de Usuários com Ativação por E-mail
O projeto é uma API feita em Django Rest Framework (DRF) para cadastro de usuários, consumida por um frontend em React. 
Após cadastrar-se no sistema o usuário recebe e-mail com link para confirmação do cadastro. Ele só consegue acessar o sistema após clicar no link, garantindo dessa forma que trata-se de um e-mail válido.
<br/><br/>

## 🪄 Funcionalidades
- tela para cadastro de usuários com confirmação por e-mail
- tela de login - só permite que usuário acesse o sistema após confirmar cadastro por e-mail
- tela para recuperação de senha - recupera senha por e-mail
- páginas internas da aplicação só podem ser acessadas por usuários autenticados

Fluxo
- usuário se cadastra
- recebe e-mail pra confirmação (só consegue logar no sistema se clicar no link do e-mail)
- clica no link do e-mail
- faz login
- página home só pode ser acessada por usuários autenticados

Se usuário solicitar redefinição de senha
- usuário informa seu e-mail
- recebe e-mail 
- clica no link
- é redirecionado para tela de redefinição de senha (informa nova senha)
- consegue logar com nova senha

<br/>


## 🚀 Tecnologias utilizadas 
<div align="center"> 
  
<img align="left" alt="DRF" height="30" width="30" src="https://camo.githubusercontent.com/30dc64811266b70d9aeababff3bb98cefc7f177903d49b91fecab5202ceea2df/687474703a2f2f6c75636173717a2e636f6d2e62722f7374617469632f7372632f706e672f6472662e706e67">
  <img align="left" alt="Django" height="30" width="30" src="https://camo.githubusercontent.com/2e1c5f30ca52c89470ca2018fd68bc46e4c24bee783e03409798531fe6b05799/68747470733a2f2f7374617469632d30302e69636f6e6475636b2e636f6d2f6173736574732e30302f646a616e676f2d69636f6e2d3136303678323034382d6c776d77317a37332e706e67">
<img align="left" alt="React" height="30" width="30" src="https://camo.githubusercontent.com/2822c17be1616affa2b8e7407ccfcea0cf3d6152f81d94a5a99fec5ffc3eeadb/68747470733a2f2f63646e312e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f70726f6772616d696e672d646576656c6f706d656e742d382f32342f72656163745f6c6f676f2d3531322e706e67">
<img align="left" alt="JavaScript" height="30" width="30" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png">
  
<img align="left" alt="Bootstrap" height="30" width="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png">
<img align="left" alt="SQLite" height="30" width="50" src="https://cdn.iconscout.com/icon/free/png-256/free-sqlite-282687.png?f=webp">
<img align="left" alt="Docker" height="30" width="30" src="https://static-00.iconduck.com/assets.00/docker-icon-2048x2048-5mc7mvtn.png">    
<img align="left" alt="AWS" height="30" width="30" src="https://saidvandeklundert.net/img/aws_logo.png">    
</div>
<br/><br/>

- API utilizando Django Rest Framework (DRF)
- Cors para comunicação com frontend
- Frontend utilizando React
- Layout responsivo para utilização em Mobile
- Docker para containerizar a aplicação na AWS facilitando a implantação do sistema
- Banco de dados SQLite
- Compose para facilitar a gestão dos containers
- Deploy em instância EC2 da AWS
<br/>

## 🖥️ Demonstração ao Vivo
- Acessse [Portfólio de Lucas Queiróz](http://lucasqz.com.br) para ver esse e outros projetos no ar
<br/>

## 🎞️ Screenshot do Sistema
<img width="532" alt="zz" src="https://github.com/user-attachments/assets/99a133ba-c76f-4d1f-bdf3-73b9cb4b5a45">

<br/><br/>



## 👨🏼 Autor - Lucas Queiróz
<div align="left"> 
<a  href="https://github.com/lucas-qz" target="_blank"><img align="left" alt="GitHub" height="30" width="30" src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"> GitHub - Lucas Queiróz </a><br/><br/>
<a  href="https://www.linkedin.com/in/lucas-qz/" target="_blank"><img align="left" alt="Linkedin" height="30" width="30" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"> Linkedin - Lucas Queiróz </a><br/><br/>
<a  href="http://lucasqz.com.br" target="_blank"><img align="left" alt="Portfólio" height="30" width="30" src="https://cdn-icons-png.flaticon.com/512/5602/5602732.png"> Portfólio - Lucas Queiróz </a><br/><br/>
</div>
<br/><br/>
