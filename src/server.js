const path = require('path');
const express = require('express');

const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('dist'));

app.use(routes);

app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));