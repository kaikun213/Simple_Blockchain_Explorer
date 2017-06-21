# Simple blockchain explorer dApp

Using <a href="https://github.com/paritytech/oo7"> oo7 library </a> from <a href="https://github.com/paritytech/parity"> parity </a>.

Build upon the <a href="https://github.com/paritytech/skeleton"> skeleton dApp </a>.

In progress. Currently modified libraries included. Compile with 
```
$ npm run compile
```
in folder oo7-parity, parity-reactive-ui.


To run the app itself use npm and webpack:

```
$ npm install
$ npm install -g webpack
```

To build:

```
webpack --watch
```

Files will be build into `dist/`. Just symlink that dir into your dapps path and run a parity instance.

