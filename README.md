<<<<<<< HEAD
# HelloAngular2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
=======
# Star Wars Database

## Introdução
Aplicação cliente de [API](https://swapi.co/) que disponibiliza dados sobre a franquia Star Wars.    

## Principais tecnologias envolvidas
* [Angular](https://angular.io/) - Baseado na linguagem TypeScript, possibilita o desenvolvimento web no formato Single Page Application;
* [TypeScript](https://www.typescriptlang.org/) - Ainda que compilada para JavaScript puro, traz recursos ausentes neste, como tipagem de dados estática, interfaces e modificadores de acesso;
* [ECMAScript 6](http://es6-features.org/) - Inaugurada em 2015, esta atualização do JavaScript tem como principal característica tornar sua sintaxe próxima a de uma linguagem orientada a objetos;
* [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS3/) - Segunda versão do CSS, traz recursos poderosos, tais como as Media Queries;
* [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5/) - Versão mais atual da linguagem HTML e alicerce de frameworks frontend modernos;
* [Bootstrap](https://getbootstrap.com/) - Framework de componentes visuais focado na responsividade e simplicidade;
* [Node.js](https://nodejs.org/) - Ambiente para execução de código JavaScript no lado servidor;
* [Node Package Manager](https://www.npmjs.com/) - Gerenciador de pacotes JavaScript, sendo o padrão do ambiente Node.js.

## Instalando   
1. Baixe o repositório remoto do projeto para sua máquina com o comando:
   ```bash
   git clone https://github.com/cleverton-heusner/contabil.git  
   ```
2. No Spring Tool Suite, importe o repositório baixado como um projeto maven;

3. Caso a sua IDE já esteja integrada à dependência Project Lombok, pule para o passo 4. Do contrário, siga as instruções no link https://projectlombok.org/setup/eclipse;

4. Na raíz do projeto, digite o comando abaixo, em que 2 representa o número de instâncias desejadas da aplicação:
   ```bash
   ./instalar 2
   ```
5. Após as instâncias da aplicação terem sido inicializadas, basta descobrir a porta de acesso escolhida para cada uma. Para tal, execute o comando que segue:
   ```bash
   docker ps
   ```
6. Supondo que uma das portas escolhidas seja **9999**, é o momento de enviar requisições. Para cadastrar um lançamento contábil, envie para a URL http://localhost:9999/lancamentos-contabeis uma requisição **POST** contendo o seguinte JSON:
   ```json
   {
     "contaContabil": "1234567",
     "data": "2018-12-27",
     "valor": 10.99     
   }
   ```
Para visualizar o lançamento contábil recém-cadastrado, envie para a mesma URL uma requisição **GET**.
   	
## Autor
Cleverton Heusner
>>>>>>> cd4cb5e97fd3384fc5868e6c6d96500e654a1994
