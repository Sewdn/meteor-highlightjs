Package.describe({
  name: 'sewdn:highlightjs',
  summary: "HighlightJS syntax highlighting",
  version: "8.4.0_2",
  git: "https://github.com/Sewdn/meteor-highlightjs.git"
});

Package.on_use(function (api) {
  api.add_files([
    'highlight.pack.js',
    'styles/monokai_sublime.css'
  ], "client");
  api.export("hljs", 'client');
});