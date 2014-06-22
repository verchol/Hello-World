
var  sass = require('node-sass');
sass.render({file:'./app/styles/mains.scss' ,
 success: function(){console.log("worked")}
});