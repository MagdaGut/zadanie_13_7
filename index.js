var fs = require('fs');

fs.readdir('./node_modules', function(err, data) {
  if (err) throw err;

  data.join('\n');
  fs.writeFile('./output.txt', data.join('\n'), function(err) {
    if (err) throw err;
  });
});