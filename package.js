Package.describe({
  summary: "HighlightJS syntax highlighting"
});

Package.on_use(function (api) {
  api.add_files([
    'highlight.pack.js',
    'styles/monokai_sublime.css'
  ], "client");
  api.export("hljs", 'client');
});