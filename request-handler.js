exports.renderIndex = function(req, res){
  res.render('index');
};

exports.sendApp = function(req, res){
  res.send(app.js)
;};