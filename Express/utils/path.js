const path = require('path');


module.exports = path.dirname(process.mainModule.filename);
// module.exports = path.dirname(require.main.filename);
// The path.dirname() method returns the directory name of a path
// The process.mainModule.filename property provides the filename of the module that is ran directly from the command line