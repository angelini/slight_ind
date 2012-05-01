var tako = require('tako')
  , path = require('path')
  , app = tako()
  , port = 80
  ;

if (process.env.NODE_ENV == 'dev') {
  port = 3030;
}

app.route('/assets/*').files(path.join(__dirname, 'assets'));
app.route('/').file('./index.html');

app.httpServer.listen(port);
