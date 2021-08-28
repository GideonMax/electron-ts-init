# electron-ts-init
A CLI tool for initializing an [electron](https://www.electronjs.org/) project with TypeScript and electron-builder

## installation and usage
To install run `npm i -g @gideonmax/electron-ts-init`

To initialize a project run
```
electron-ts-init
```
or
```
eti
```
optional flags:
```
--git if set, project will have git integration (currently just edits the .gitignore file)
--ghost if set, logo will look ghosty, purely cosmetic
--scope=<scope> if set, npm init will initialize using the given scope 
```

To start your project run `npm start`\
To package your project into an installer run `npm run package`, the installer will be found in the `dist` folder\
The project is initialized with a rudimentary app, you should try to start it to ensure that everything works correctly.\
If you find that you cannot start your project, you might have `ignore-scripts` set to true, if it is, run `npm config set ignore-scripts false` to turn it off.