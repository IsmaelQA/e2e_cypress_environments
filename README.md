# automa-o-e2e-cypress
Repositorio para projeto de teste WEB com framework Cypress

Pre-requisitos
[OPCIONAL] Caso não tenha ainda o node em sua máquina, podera executar os comandos abaixo para o respectivo sistema operacional


Windows	winget install OpenJS.NodeJS.LTS
Linux	sudo apt install npm
[ESSENCIAL] Ao clonar o projeto e acessá-lo via terminal com comandos cd ... deve ser realizado a instação do cypress para que seja possivel executar comandos no terminal da sua IDE

Windows	npm install cypress
Linux	npm install cypress
[ESSENCIAL] Apos termos instalados o cypress não custa nada garantirmos que todas as dependencias do projeto estejam ok, com isso devemos executar o comando abaixo:


Windows	npm i

Execução dos testes

Execução de teste(s) com navegador em prod
npx cypress open --env environmentName=prod

- Execução de teste(s) com navegador em honolog
npx cypress open --env environmentName=homolog

Execução de teste(s) com headless em prod
npx cypress run --browser chrome --env environmentName=prod

Execução de teste(s) com headless em homolog
npx cypress run --browser chrome --env environmentName=homolog

Execução de teste(s) com headless em sandbox de um classe de teste especifica
npx cypress run --browser chrome --env environmentName=prod --spec "cypress/e2e/tests/${nome_classe}.cy.js"

Execução de teste(s) com headless em qa de um classe de teste especifica
npx cypress run --browser chrome --env environmentName=homolog --spec "cypress/e2e/tests/${nome_classe}.cy.js"
