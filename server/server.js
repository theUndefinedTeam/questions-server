const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));




app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`);
});

/*
(separate server)
const port = process.env.PORT || 3001
app.use(express.static(path.join(__dirname, 'dist')))
app.listen(port, () => {
    console.log('server listening on port', port)
})
"scripts": {
    "start": "node index.js"
    "reviews": "nodemon index.js"
}
npm run reviews
*/

// exoress, statuc('../client.dust')
// app.use(json(*))



// app.get('/*', (req, res) => {

// })