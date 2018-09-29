

////////////TEST//////////////

window.onload = function(){
    PlayFab.settings.titleId = "EAC6";
	window.game = new Game(f.qs("#wadah"));

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

	

}
