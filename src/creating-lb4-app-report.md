************  I couldn't easily find how to manage user, as it is very different from lb3 ***************
************  I have to look after it in the community(later) ***************


Install Loopback CLI globally:
npm i -g @loopback/cli
Create new Project(I had problem with npm)
lb4 app heroku-playground
I updated npm with this command in PowerShell(as admin):
(link: https://www.npmjs.com/package/npm-windows-upgrade)
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
npm install --global --production npm-windows-upgrade
npm-windows-upgrade

I run command lb4 app heroku-playground again
I rum command npm install, after creating the application
I run npm start to start the application
I browse the application at:
http://127.0.0.1:3000/ping
I had to add

    "compilerOptions": {
        "experimentalDecorators": true,
        "allowJs": true
    }
to tsconfig.json file in order to work with decorators

#Adding Legacy Juggler(follow this tutorial: https://loopback.io/doc/en/lb4/todo-tutorial-juggler.html#adding-legacy-juggler)
I instal @loopback/repository, for
npm i --save @loopback/repository


I imported juggler class into application.ts file
// juggler imports are required to infer types for RepositoryMixin!
import {
  Class,
  Repository,
  RepositoryMixin,
  juggler,
} from '@loopback/repository';
