# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Updating codemirror
cp node_modules/codemirror/lib/codemirror.js static 
cp node_modules/codemirror/lib/codemirror.css static
cp node_modules/codemirror/mode/javascript/javascript.js static
cp node_modules/codemirror/mode/htmlmixed/htmlmixed.js static 

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

For local testing do:
`npm run serve -- --build --port 8081 --host 0.0.0.0`

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
