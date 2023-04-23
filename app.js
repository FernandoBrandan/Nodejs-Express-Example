const express = require('express');
const app = express();
//Middlewares
const middlewares = require('./middlewares');
middlewares.setupMiddlewares(app);
//Database
require('./database');
// Routes
const authRoutes = require('./Router/auth.router').router;
const teamsRoutes = require('./Router/teams.router').router;
app.use('/auth', authRoutes);
app.use('/teams', teamsRoutes);

const port = 3000;
app.listen(port, () => {console.log('Server started at port 3000')})
exports.app = app;