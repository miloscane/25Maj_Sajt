//Server
var server				=	require('express')();
var http					=	require('http').Server(server);
var httpl 				= require('http');
var net						=	require('net');
var express				=	require('express');
var fs						=	require('fs');   
var bodyParser		=	require('body-parser');    
var session				=	require('express-session');
var nodemailer 		= require('nodemailer');
const dotenv 			=	require('dotenv');
var cookieParser	=	require('cookie-parser');
var crypto				=	require('crypto');
var mongo					=	require('mongodb');
//var io						=	require('socket.io')(http);
dotenv.config();


server.set('view engine','ejs');
var viewArray	=	[__dirname+'/views'];
var viewFolder	=	fs.readdirSync('views');
for(var i=0;i<viewFolder.length;i++){
	if(viewFolder[i].split(".").length==1){
		viewArray.push(__dirname+'/'+viewFolder[i])
	}
}
server.set('views', viewArray);
server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());  
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(session({
	secret: process.env.sessionsecret,
    resave: true,
    saveUninitialized: true
}));

//PORT Listening
http.listen(process.env.PORT, function(){
  console.log('Server Started');
});

var mainFileVersion	=	1.1;

server.get('/',function(req,res){
	res.render('home',{
		fileVersion: mainFileVersion,
		title: "SRC 25.Maj",
		ogtitle: "SRC 25.Maj", 
		description: "Pored tri otvorena bazena i jednog zatvorenog, olimpijskog, u čijem sklopu se nalazi i saunski blok - welness, centar sadrži i salu za dvoranske sportove. U sklopu SRPC funkcionišu razni ugostiteljski objekti - restorani I kafići, dečije igraonice, teretane i drugi razni poslovni objekti.",
		image: "https://25maj.azurewebsites.net/images/ogImage.jpg",
		url: "https://25maj.azurewebsites.net"
	});
});

server.get('/dokumenti',function(req,res){
	res.render('dokumenti',{
		fileVersion: mainFileVersion,
		title: "SRC 25.Maj",
		ogtitle: "SRC 25.Maj", 
		description: "Pored tri otvorena bazena i jednog zatvorenog, olimpijskog, u čijem sklopu se nalazi i saunski blok - welness, centar sadrži i salu za dvoranske sportove. U sklopu SRPC funkcionišu razni ugostiteljski objekti - restorani I kafići, dečije igraonice, teretane i drugi razni poslovni objekti.",
		image: "https://25maj.azurewebsites.net/images/ogImage.jpg",
		url: "https://25maj.azurewebsites.net"
	});
});

server.get('/o-nama',function(req,res){
	res.render('o-nama',{
		fileVersion: mainFileVersion,
		title: "SRC 25.Maj",
		ogtitle: "SRC 25.Maj", 
		description: "Pored tri otvorena bazena i jednog zatvorenog, olimpijskog, u čijem sklopu se nalazi i saunski blok - welness, centar sadrži i salu za dvoranske sportove. U sklopu SRPC funkcionišu razni ugostiteljski objekti - restorani I kafići, dečije igraonice, teretane i drugi razni poslovni objekti.",
		image: "https://25maj.azurewebsites.net/images/ogImage.jpg",
		url: "https://25maj.azurewebsites.net"
	});
});

server.get('/javne-nabavke',function(req,res){
	res.render('javne-nabavke',{
		fileVersion: mainFileVersion,
		title: "SRC 25.Maj",
		ogtitle: "SRC 25.Maj", 
		description: "Pored tri otvorena bazena i jednog zatvorenog, olimpijskog, u čijem sklopu se nalazi i saunski blok - welness, centar sadrži i salu za dvoranske sportove. U sklopu SRPC funkcionišu razni ugostiteljski objekti - restorani I kafići, dečije igraonice, teretane i drugi razni poslovni objekti.",
		image: "https://25maj.azurewebsites.net/images/ogImage.jpg",
		url: "https://25maj.azurewebsites.net"
	});
});

server.get('/besplatni-programi-deca',function(req,res){
	res.render('besplatni-programi-deca',{
		fileVersion: mainFileVersion,
		title: "SRC 25.Maj",
		ogtitle: "SRC 25.Maj", 
		description: "Pored tri otvorena bazena i jednog zatvorenog, olimpijskog, u čijem sklopu se nalazi i saunski blok - welness, centar sadrži i salu za dvoranske sportove. U sklopu SRPC funkcionišu razni ugostiteljski objekti - restorani I kafići, dečije igraonice, teretane i drugi razni poslovni objekti.",
		image: "https://25maj.azurewebsites.net/images/ogImage.jpg",
		url: "https://25maj.azurewebsites.net"
	});
});

server.get('/besplatni-programi-penzioneri',function(req,res){
	res.render('besplatni-programi-penzioneri',{
		fileVersion: mainFileVersion,
		title: "SRC 25.Maj",
		ogtitle: "SRC 25.Maj", 
		description: "Pored tri otvorena bazena i jednog zatvorenog, olimpijskog, u čijem sklopu se nalazi i saunski blok - welness, centar sadrži i salu za dvoranske sportove. U sklopu SRPC funkcionišu razni ugostiteljski objekti - restorani I kafići, dečije igraonice, teretane i drugi razni poslovni objekti.",
		image: "https://25maj.azurewebsites.net/images/ogImage.jpg",
		url: "https://25maj.azurewebsites.net"
	});
});








