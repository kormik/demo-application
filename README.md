A Puli Demo Application
=======================

This repository contains a demo application showing how to use [Puli] in a
[Silex] application together with [Twig] and [Gulp JS].

Run the following commands after cloning the repository:

```
$ npm install
$ gulp
$ composer install
$ vendor/bin/puli asset install
```

Building your Own
-----------------

If you want to build this demo application from scratch, follow these steps:

1. Create the basic directory layout
2. Copy `composer.json`, `package.json` and `Gulpfile.js` to the project
3. Run `npm install`
4. Run `composer install`
5. Put your SCSS files into `res/scss/`
6. Put your Javascript files into `res/js/`
7. Run `gulp`
8. Run `vendor/bin/puli plugin install Puli\\AssetPlugin\\Api\\AssetPlugin`
9. Run `vendor/bin/puli map /app res` to map the Puli path `/app` to the `res` directory
10. Run `vendor/bin/puli target add local web` to add the install target "local" for the directory `web`
11. Run `vendor/bin/puli asset map /app/public /` to map your assets to the install target.
12. Run `vendor/bin/puli asset install` to install the assets

[Puli]: http://puli.io
[Silex]: http://silex.sensiolabs.org
[Twig]: http://twig.sensiolabs.org
[Gulp JS]: http://gulpjs.com
