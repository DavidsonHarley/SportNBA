
	require('@babel/register');
	require('dotenv').config();
	
	const morgan = require('morgan')
	
	const { sequelize } = require('../db/models');
	const express = require('express');
	const path = require('path');
	const app = express();
	const renderTemplate = require('./lib/renderTemplate');
	const session = require('express-session');
	const FileStore = require('session-file-store')(session);
	const { PORT, SESSION_SECRET} = process.env;
	
	
		const sessionConfig = {
	  name: 'CookieUser',
	  store: new FileStore(),
	  secret: SESSION_SECRET ?? 'flash',
	  resave: false,
	  saveUninitialized: false,
	  cookie: {
	    maxAge: 1000 * 60 * 60 * 24 * 10,
	    httpOnly: true,
	  },
	};

	
	app.use(session(sessionConfig));
	app.use(morgan("dev"));
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(express.static(path.join(__dirname, '../public/')));

	const isAuth =require('../src/midlewares/isAuth')
    const RouterHome = require('../src/router/RouterHome');
	const RouterGameUser = require('../src/router/RouterGameUser');
	const RouterReg = require('../src/router/RouterReg');  
	const RouterAvt = require('../src/router/RouterAvt');
	const RouterRedac = require('../src/router/RouterRedac');
	const RouterLogout = require('../src/router/RouterLogout');
	const RouterUpdateTable = require('../src/router/RouterUpdateTable');
	const RouterMoreNews = require('../src/router/RouterMoreNews');



    app.use('/', RouterHome);
	app.use('/', RouterGameUser);
	app.use('/', RouterReg);
	app.use('/', RouterAvt);
	app.use('/red', isAuth, RouterRedac);
	app.use('/', RouterLogout);
	app.use('/update', RouterUpdateTable);
	app.use('/', RouterMoreNews);

	


	app.listen(PORT, async() => {
	 try {
	    await sequelize.authenticate();
	    console.log('База данных успешно подключена! :)');
	  } catch (error) {
	    console.error('База данных не подключена:', error.message);
	  }
	  console.log(`Сервер поднят на ${PORT} порту!`);
	});