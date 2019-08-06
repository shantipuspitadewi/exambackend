const express = require("express");
const categories = require('../src/routers/categoriesRouter');
const movie = require('../src/routers/movieRouter');
const movcat = require('../src/routers/movecatRouter');


const app = express()
const port = 2995

app.use(express.json())
app.use(categories)
app.use(movie)
app.use(movcat)

app.listen(port, () => {
    console.log('eh jalan nih ' + port);
    
})