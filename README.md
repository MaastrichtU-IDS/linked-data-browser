# Lightweight RDF linked data browser

Browse a RDF triplestore by providing the SPARQL endpoint URL, browser supports graphs, includes a YASGUI editor and provide insights using precomputed [HCLS descriptive statistics](https://www.w3.org/TR/hcls-dataset/). 

It has been developped and used as part of the [Data2Services](http://d2s.semanticscience.org/) framework. [Data2Services](http://d2s.semanticscience.org/) provides tools and guideline to easily integrate multiple structured data sources (CSV, RDB, XML) to a RDF knowledge graph, complying with a defined data model.

> Explore the documentation at [d2s.semanticscience.org](http://d2s.semanticscience.org/)

Into-the-graph is built with [ReactJS](https://reactjs.org) and [Material-UI](https://material-ui.com/) to serve and explore RDF data from any SPARQL endpoint (better performance using [RDF4J server](https://rdf4j.eclipse.org/documentation/server-workbench-console/)).

This RDF linked data browser gives you access to a [YASGUI](http://doc.yasgui.org/) SPARQL endpoint and enables you to browse the triplestore statements easily.  The app will extract metadata and provide insights about the content of your triplestore's graphs using precomputed [HCLS descriptives statistics](https://www.w3.org/TR/hcls-dataset/).

> [HCLS descriptive statistics](https://www.w3.org/TR/hcls-dataset/) can simply be computed and inserted running a `docker run` command. Follow [those instructions](https://github.com/MaastrichtU-IDS/data2services-transform-repository/tree/master/sparql/compute-hcls-stats) to run it.

A few things to know:

* Runs on http://graphdb.dumontierlab.com/repositories/bio2rdf-ammar by default.

* Can be changed to any SPARQL endpoint, but URL needs to be changed in the JavaScript before [Docker](https://docs.docker.com/install/) build at the moment.

  > Search for `http://graphdb.dumontierlab.com/repositories/bio2rdf-ammar` in the repo.

# Development

### Install dependencies

```shell
yarn

# Add package to dev
yarn add my-package --dev
```

### Start the development server

Use Expo (recommended)

```bash
expo start --web
```

Or directly use Yarn

```bash
yarn web
```

## Docker

### Build

```powershell
docker build -t into-the-graph .
```

### Run

```shell
docker run --rm -it -p 3000:80 into-the-graph
```

> Access on http://localhost:3000/

### Restart script

```bash
./restart_docker.sh
```

> Access at http://localhost:3000

## Publish using Expo (not tested)

See [GitHub repository](https://github.com/expo/expo-cli) and [documentation to build standalone app](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/).

Using [bycedric/expo-cli](https://hub.docker.com/r/bycedric/expo-cli) Docker image. On Docker: use `yarn start` to build using `serve`

> First you need to have your app built in the `web-build` folder.

```bash
# To remove:
docker run --tty --interactive \
    --workdir /srv \
    --volume $HOME/into-the-graph:/srv \
    --env EXPO_CLI_USERNAME=vemonet \
    --env EXPO_CLI_PASSWORD=password \
    bycedric/expo-cli publish
```

> Don't forget to change the path to the git repository (`$HOME` at the moment).

## Old way (npm)

### Start development server

```shell
npm start
```

> Known issues:
>
> * Error: `System limit for number of file watchers reached`
>
> ```bash
> echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
> ```

### Bundles the app to static files for production

```shell
npm run build
```