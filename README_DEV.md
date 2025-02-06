# Nextrap Entwickler Readme

## Einleitung

Nextrap soll ein Multi-Repo Webcomponents Framework sein. Mutli-Repos aus dem Grund, dass verschiedene
Komponenten in verschiedenen Versionen genutzt werden können.

Jede Komponente wird dazu in einem eigenen Repo entwickelt und erhält eine eigene Versionierung.

## Projekt-Setup für Entwickler

Ziel ist es, dass Entwickler außer einem git clone und kickstart nichts machen müssen, um ein Repo 
zu starten. 

- [Kickstart Zero Conf Dev Container](https://nfra.infracamp.org) installieren

### Erster Start mit Kickstart

Alle Repos arbeiten mit [**Kickstart**](https://nfra.infracamp.org). Kickstart ist ein CLI Tool, welches
die Entwicklungsumgebung als Docker-Container startet. Die Umgebung ist in `kick.yml` definiert.

Nach der Installation des Kickstart Tools kann jedes Projekt mit `kickstart` gestartet werden (einfach
im Root-Verzeichnis des Projektes ausführen).

Nach dem Start erhältst du eine Shell im Container. Das aktuelle Verzeichnis ist nach /opt gemounted.

Im Container kannst du mit dem `kick`-Befehl die Umgebung steuern. 

### Umgang mit Npm-Workspaces

Um die Entwicklung zu vereinfachen [NPM Workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces). Jedes
Projekt hat das Verzeichnis `workspaces/*` als Worspace Root definiert. 

Klone einfach andere Projekte in dieses Verzeichnis. Danach `npm update` ausführen. NPM linkt dann die 
workspace-Version direkt in node_modules - Verzeichnis. Und da workspaces in .gitignore steht, kannst du
die Repos direkt aus dem Workspace per git pushen.

**Wichtig** Nachdem Du ein Repo in den Workspace geklont hast, musst du `npm update` ausführen.


### Webpack dev server

Nach dem start des Containers einfach `npm update` und dann `webpack-dev-server` ausführen. Die Dev-Version
ist dann über `http://localhost:4000` erreichbar.



## FAQ

Hier bitte FAQs einführen (Fehler, Hinweise, etc)

### FAQ 1
