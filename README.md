# Challenge

Installer le projet avec la commande suivante :

```
npm i
```

## First try

Script node JS qui transforme un nombre en chiffres romain. Pour exécuter le script, il suffit de lancer la commande suivante

```
node challenge.js
```

## Challenge API

Une API générée avec l'outils NestJS. Pour lancer l'API, il suffit de lancer l'application (en staging) avec la commande suivante :

```
npm run start:dev
```

L'API REST peut ensuite être utilisée au travers de l'URL suivante : http://localhost:3000/translate/roman?arabic=3098
On peut aussi voir le détails de la traduction avec la route suivante : http://localhost:3000/translate/roman/steps?arabic=3098
