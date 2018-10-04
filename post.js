

////////////TEST//////////////

window.onload = function(){
    PlayFab.settings.titleId = "EAC6";
	// window.game = new Game(f.qs("#wadah"));
	var game = new Game(f.qs("#wadah"));

	let kongUser = function(){
		console.log("---------------------------");
		window.kongVars = {
			username : kongregate.services.getUsername(),
			userId : kongregate.services.getUserId(),
			isGuest : kongregate.services.isGuest(),
			token : kongregate.services.getGameAuthToken()
		};


		if(!(window.isOnKong)){
			if(window.kongVars.isGuest){
				game.newGame("kongGuest");
				kongregate.services.showRegistrationBox();
			}else{
				game.kongLogin();
			}
		}
		window.isOnKong = true;
		kongregate.stats.submit("initialized", 1);
	}


	let kongUserLoggedin = function(){
		console.log("---------------------------");
		window.kongVars = {
			username : kongregate.services.getUsername(),
			userId : kongregate.services.getUserId(),
			isGuest : kongregate.services.isGuest(),
			token : kongregate.services.getGameAuthToken()
		};


		if(window.kongVars.isGuest){
			game.newGame();
			kongregate.services.showRegistrationBox();
		}else{
			game.hideModal();
			game.kongLogin();
		}
		window.isOnKong = true;
		kongregate.stats.submit("initialized", 1);
	}



	try{
		kongregateAPI.loadAPI(function(){
			window.kongregate = kongregateAPI.getAPI();
			kongUser();

			kongregate.services.addEventListener('login', function(){
				kongUserLoggedin();
			});
		});
	}
	catch(e){
		window.isOnKong = false;
		game.newGame();

	}

	// document.body.addEventListener("click",beep);

// TEST
	// window.test1 = function(x=0){
		// let weed = {
		// 	height:50,
		// 	length:game.el.amb.offsetWidth,
		// 	y:game.el.amb.offsetHeight-50,
		// 	x:x,
		// 	img:"weed",
		// 	parentEl : game.el.amb
		// };
		// f.craft.weedAnim(weed);
		// f.ac(game.el.amb,(i=f.ce("div"))&&(f.sa(i,"style","position:absolute;bottom:0;left:"+((game.el.amb.offsetWidth%50)/2)+"px;width:"+(game.el.amb.offsetWidth/50|0)*50+"px;height:50px;background-image:url('data:image/svg+xml;utf8, "+IMG.fishs.weed+"');background-size:50px;background-repeat:repeat-x")||1)&&i);
		// f.ac(game.el.amb,(i=f.ce("div"))&&(f.sa(i,"style","position:absolute;bottom:0;left:0px;width:100%;height:50px;background-image:url('data:image/svg+xml;utf8, "+IMG.fishs.weed+"');background-size:50px;background-repeat:space")||1)&&i);
		// f.ac(game.el.amb,(i=f.ce("div"))&&(f.sa(i,"style","position:absolute;bottom:0;left:0px;width:100%;height:30px;background-image:url('../img/t2.svg');background-size:30px;background-repeat:repeat-x")||1)&&i);
	// };

	// window.test2 = function(x="grass"){
	// 	let tank = new Tank(game,x);
	// };

}
