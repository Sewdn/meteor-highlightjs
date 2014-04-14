Package.describe({
  summary: "HighlightJS syntax highlighting"
});

Package.on_use(function (api) {
  api.add_files('lib/src/highlight.js', "client");
});