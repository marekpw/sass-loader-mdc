# to reproduce:

```git clone git@github.com:marekpw/sass-loader-mdc && cd sass-loader-mdc```

```npm i```

```./node_modules./bin/webpack```

# output
```
/mnt/q/demos/sass-loader-mdc on  master! ⌚ 11:02:35
$ ./node_modules/.bin/webpack
Hash: 53ef08f54e7761d863ef
Version: webpack 2.6.1
Time: 1002ms
                      Asset     Size  Chunks             Chunk Names
app.53ef08f54e7761d863ef.js  15.9 kB       0  [emitted]  app
   [0] ../~/css-loader!../~/sass-loader/lib/loader.js!./main.scss 367 bytes {0} [built] [failed] [1 error]
   [1] ../~/style-loader/lib/addStyles.js 8.66 kB {0} [built]
   [2] ./main.scss 1.13 kB {0} [built]
   [3] ../~/style-loader/lib/urls.js 3.01 kB {0} [built]

ERROR in ../~/css-loader!../~/sass-loader/lib/loader.js!./main.scss
Module build failed:
@import "@material/animation/variables";
^
      File to import not found or unreadable: @material/animation/variables.
Parent style sheet: /mnt/q/demos/sass-loader-mdc/node_modules/@material/button/mdc-button.scss
      in /mnt/q/demos/sass-loader-mdc/node_modules/@material/button/mdc-button.scss (line 17, column 1)
 @ ./main.scss 4:14-116
 ```
