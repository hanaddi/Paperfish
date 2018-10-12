class Multi{
	constructor(game){
		this.game = game;
		this.game.friendList = this.game.friendList || {};

		this.elWrap = f.ce("div");
	}

	getFriends(user_id){
		// saya.game.viewStatus("Looking for friends");
		let saya = this;
		user_id = user_id || window.kongVars.userId;

		let param = {
			"FunctionName": "getFriends",
			"FunctionParameter": {
				"user_id": user_id
			},
			"RevisionSelection": "Latest"
		};

		let callback = function(r,e){
			if(e!==null){
				saya.game.viewStatus("Can't find your friends.");
			}else
			if(r!==null){
				// console.log(r);
				if(r.data && r.data.FunctionResult && r.data.FunctionResult.data){
					(r.data.FunctionResult.data).map(function(el){
						if(!saya.game.friendList[el[0]]){
							saya.game.friendList[el[0]] = {};
						}
						saya.game.friendList[el[0]].id		= el[0];
						saya.game.friendList[el[0]].name	= el[1];
						saya.game.friendList[el[0]].avatar	= el[2];
					});
					// console.log(r.data.FunctionResult.data);
					saya.game.viewStatus("Friend list updated");
				}else{
					saya.game.viewStatus("Can't find your friends.");
				}
			}
		}

		PlayFabClientSDK.ExecuteCloudScript(param,callback);
	}

	viewFriends(){
		let saya = this;

		saya.game.el.content.innerHTML = "";
		let divFriends = f.ce("div")
		f.sa(divFriends,"class","friendPanel");
		for(let i of Object.keys(saya.game.friendList)){
			if(i == parseInt(window.kongVars.userId || "") )continue;
			let menu = f.ce("div");
			f.sa(menu,"class","shopMenu");
			menu.style.height = "auto";
			menu.style.width = "auto";
			menu.style.padding = "0";
			menu.style.margin = "3px";
			menu.style.cursor = "pointer";
			menu.title = saya.game.friendList[i].name;

			let avatar = f.ce("div");
			f.sa(avatar,"class","avatar");
			avatar.style.backgroundImage = "url('"+saya.game.friendList[i].avatar+"')";
			f.ac(menu,avatar);

			let name = f.ce("div");
			f.sa(name,"class","ellipses");
			name.innerText = saya.game.friendList[i].name;
			f.ac(menu,name);

			f.ac(divFriends,menu);

		}
		f.ac(saya.game.el.content, divFriends);
		saya.game.showModalWide("Friends");
	}

}

window.test1 = function(){
	window.multi = new Multi(game);
	multi.getFriends();
}