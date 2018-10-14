class Multi{
	constructor(game){
		this.game = game;
		this.game.friendList = this.game.friendList || {};

		this.elWrap = f.ce("div");
		this.elWrap.classList.add('friendHouse');

		//dummy
		this.uang = 2000000000;
		this.paper = {
			B: 2000000000,
			R: 2000000000,
			Y: 2000000000
		};

		// setting aquarioum view
		this.el = {};
		this.el.glass = f.ce("div");
		f.sa(this.el.glass,"class","glass");
		f.ac(this.elWrap,this.el.glass);
		this.el.aqua = f.ce("div");
		f.sa(this.el.aqua,"class","aqua");
		f.ac(this.el.glass,this.el.aqua);
		this.el.amb = f.ce("div");
		f.sa(this.el.amb,"class","amb");
		f.ac(this.el.aqua,this.el.amb);

		this.el.papan = f.ce("div");
		f.sa(this.el.papan,"class","title2");
		f.ac(this.elWrap,this.el.papan);
		this.el.avatar = f.ce("div");
		f.sa(this.el.avatar,"class","avatar");
		f.ac(this.el.papan, this.el.avatar);
		this.el.name = f.ce("div");
		f.ac(this.el.papan, this.el.name);


		this.el.btnHome = f.ce("div");
		f.sa(this.el.btnHome,"class","sideMenuL");
		this.el.btnHome.style.top ="380px";
		this.el.btnHome.style.backgroundImage = "url('"+IMG.icon.home+"')";
		let saya = this;
		this.el.btnHome.onclick = function(){
			saya.game.multi.backHome()
			// saya.game.multi.viewFriends();
		};
		f.ac(this.el.btnHome, f.ce("br"));
		f.ac(this.el.btnHome, f.ce("br"));
		f.ac(this.el.btnHome, f.ct("Home"));
		f.ac(this.elWrap,this.el.btnHome);

		this.el.btnFriend = f.ce("div");
		f.sa(this.el.btnFriend,"class","sideMenuL");
		this.el.btnFriend.style.top ="430px";
		this.el.btnFriend.style.backgroundImage = "url('"+IMG.icon.friend+"')";
		this.el.btnFriend.onclick = function(){
			saya.game.multi.viewFriends();
		};
		f.ac(this.el.btnFriend, f.ce("br"));
		f.ac(this.el.btnFriend, f.ce("br"));
		f.ac(this.el.btnFriend, f.ct("Friends"));
		f.ac(this.elWrap,this.el.btnFriend);

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
		if(Object.keys(saya.game.friendList).length){
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

				menu.onclick = function(ev){

					GLOBAL.waitMessage.innerText = "I am coming, "+(saya.game.friendList[i].name||"friend")+" !";
					saya.game.transisiTutup();

					window.setTimeout(function(){
						saya.goToFriend(i);
					},1000);

				};

			}
		}else{
			f.ac(divFriends,f.ct("Can't find your friends."));
		}
		f.ac(saya.game.el.content, divFriends);
		saya.game.showModalWide("Kongregate Friends");
	}

	backHome(){
		let saya = this;
		GLOBAL.waitMessage.innerText = "Going home.";
		saya.game.transisiTutup();

		window.setTimeout(function(){
			saya.game.el.glass.style.opacity=1;
			saya.el.glass.innerHTML = "";
			saya.el.aqua = f.ce("div");
			f.sa(saya.el.aqua,"class","aqua");
			f.ac(saya.el.glass,saya.el.aqua);
			saya.el.amb = f.ce("div");
			f.sa(saya.el.amb,"class","amb");
			f.ac(saya.el.aqua,saya.el.amb);

			try{
				f.rc(saya.game.parentEl, saya.elWrap);
			}catch(err){}
			saya.game.transisiBuka();
		},1200);
		// saya.game.hideModal();
	}

	goToFriend(user_id){
		let saya = this;
		saya.game.el.glass.style.opacity=0;
		saya.game.hideModal();
		// console.log(saya.game.friendList[user_id]);
		// saya.elWrap.innerText = user_id;
		if(!saya.game.friendList[user_id].PFId){
			let param = {
				KongregateIDs :[
					user_id
				]
			};
			let callback = function(r,e){
				if(e!=null){
					saya.game.showModalInfo(saya.game.friendList[user_id].name+" isn't home","Please come back later");
					saya.backHome();
				}else
				if(r!=null){
					// console.log(r);
					if(r.data && r.data.Data && r.data.Data[0] && r.data.Data[0].PlayFabId){
						saya.game.friendList[user_id].PFId = r.data.Data[0].PlayFabId;
						saya.viewTank(saya.game.friendList[user_id].PFId, user_id);
					}else
					{
						saya.game.showModalInfo(saya.game.friendList[user_id].name+" isn't home","Please come back later");
						saya.backHome();
					}
				}else{
					saya.game.showModalInfo(saya.game.friendList[user_id].name+" isn't home","Please come back later");
						saya.backHome();
				}
			};

			PlayFabClientSDK.GetPlayFabIDsFromKongregateIDs(param, callback);
		}else{
			saya.viewTank(saya.game.friendList[user_id].PFId, user_id);
		}

		f.ac(saya.game.parentEl, saya.elWrap);
	}

	viewTank(PFId,user_id){
		let saya = this;
		saya.username = saya.game.friendList[user_id].name;

		let param = {
			Keys:["savePublic"],
			PlayFabId: PFId
		};

		let callback = function(r,e){
			if(e!=null){
				saya.game.showModalInfo(saya.game.friendList[user_id].name+" isn't home","Please come back later");
				saya.backHome();

			}else
			if(r!=null){
				if(r.data && r.data.Data && r.data.Data.savePublic && r.data.Data.savePublic.Value){
					// console.log(r.data.Data.savePublic.Value);
					try{
						saya.el.glass.innerHTML = "";
						saya.el.glass.style.backgroundImage = null;
						saya.el.aqua = f.ce("div");
						f.sa(saya.el.aqua,"class","aqua");
						f.ac(saya.el.glass,saya.el.aqua);
						saya.el.amb = f.ce("div");
						f.sa(saya.el.amb,"class","amb");
						f.ac(saya.el.aqua,saya.el.amb);

						// saya.el.papan = f.ce("div");
						// f.sa(saya.el.papan,"class","title2");
						// f.ac(saya.elWrap,saya.el.papan);
						// saya.el.avatar = f.ce("div");
						// f.sa(saya.el.avatar,"class","avatar");
						// saya.el.avatar.style.margin = "20px 10px 10px 10px";
						// f.ac(saya.el.papan, saya.el.avatar);
						// saya.el.name = f.ce("div");
						// f.ac(saya.el.papan, saya.el.name);


						saya.el.avatar.style.backgroundImage = "url('"+saya.game.friendList[user_id].avatar+"')";
						saya.el.name.innerText = " "+saya.game.friendList[user_id].name+" ";


						let data = JSON.parse(r.data.Data.savePublic.Value);

						saya.el.glass.style.width = Math.min(600,400+20*data.glassLvl) + "px";
						saya.el.glass.style.height = Math.min(400,200+20*data.glassLvl) + "px";
						saya.el.glass.style.right = ((saya.elWrap.offsetWidth - saya.el.glass.offsetWidth)/2|0) + "px";



						
						// (saya.ikan||[]).map(function(el){
						// 	try{
						// 		el.elWrap.outerHTML = "";
						// 	}catch(e){

						// 	}
						// });
						saya.ikan = [];
						JSON.parse(data.craft).map(function(el){
							if(el)saya.addCraft(el);
						});
						JSON.parse(data.ikan1).map(function(el){
							if(el)saya.loadIkan(el);
						});

						(data.tankItems).sort((a,b)=>b[1]<a[1]?1:-1).map(function(el){
							saya.addTankItem(el[0][0],el[0][1]||0);
						});



						
						saya.game.transisiBuka();
					}catch(e){
						console.log(e);
					}

				}else{
					saya.game.showModalInfo(saya.game.friendList[user_id].name+" isn't home","Please come back later");
					saya.backHome();
				}
			}else{
				saya.game.showModalInfo(saya.game.friendList[user_id].name+" isn't home","Please come back later");
				saya.backHome();
			}
		};
		PlayFabClientSDK.GetUserData(param, callback);

	}



	addTankItem(type,left=0){
		let i = null;


		if(GLOBAL.tankItems[type]){

			let elWrap = f.ce("div");
			f.sa(elWrap,"class","tankItems");

			// console.log(this.type);
			f.ac(elWrap,GLOBAL.tankItems[type].el.cloneNode(true));
			elWrap.style.width = GLOBAL.tankItems[type].width;
			elWrap.style.height = GLOBAL.tankItems[type].height;
			elWrap.style.left = left+"px";

			f.ac(this.el.amb,elWrap);
			(GLOBAL.tankItems[type].onload||function(){})(this);

		}
	}


	addCraft(type){
		if(!type)return;
		let ikan = new Craft(this.el.aqua.offsetWidth*Math.random(),this.el.aqua.offsetHeight*Math.random(),this.el.aqua, 74, 46, type);

		try{
			ikan.function0(this,ikan);
		}catch(e){
			console.log(e);
		}
	}

	loadIkan(arr){
		if(!GLOBAL.fishs[arr[1]]){
			console.log("Game::loadIkan() ERROR");
			return;
		}

		if(arr[4] && arr[4]==2){
			let type = arr[1];
			let level = arr[2] || 1;
			let ikan = new Ikan2(this.el.aqua.offsetWidth*Math.random(),this.el.aqua.offsetHeight*Math.random(),this.el.aqua, 74, 46, type,true,true,level);
			
			// console.log(ikan.save());
			ikan.timeCreated = arr[0]?arr[0]:ikan.timeCreated;
			ikan.lastClaim = arr[3];
			this.ikan.push(ikan);
			this.afterAddIkan(ikan);
			
		}else{
			let type = arr[1];
			let level = arr[2] || 1;
			let ikan = new Ikan(this.el.aqua.offsetWidth*Math.random(),this.el.aqua.offsetHeight*Math.random(),this.el.aqua, 74, 46, type,true,true,level);
			ikan.timeCreated = arr[0]?arr[0]:ikan.timeCreated;
			ikan.lastClaim = arr[3];
			this.ikan.push(ikan);
			this.afterAddIkan(ikan);
		}
	}

	afterAddIkan(ikan){
		ikan.onclick = e=>{
		}
	}



}

window.test1 = function(){
	window.multi = new Multi(game);
	multi.getFriends();
}