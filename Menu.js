class Menu{
	constructor(game){
		this.game = game;
		this.el = {};

		this.vars = {};

		this.addMenuSave();
		this.addMenuBuyIkan1();
		this.addMenuCraft();
		this.addMenuTank();
		this.addMenuGuide();

		this.addMenuFriend();
		this.addMenuOfferTankItem();
	}


	addMenu(menu,y=0,text="", img="",click=()=>{}){
		this.el[menu] = f.ce("div");
		f.sa(this.el[menu],"class","sideMenu");
		// this.el[menu].style.top = (60+y*80)+"px";
		this.el[menu].style.top = (60+y*60)+"px";
		this.el[menu].style.backgroundImage = "url('"+img+"')";
		this.el[menu].onclick = click;
		f.ac(this.el[menu], f.ce("br"));
		f.ac(this.el[menu], f.ce("br"));
		f.ac(this.el[menu], f.ct(text));
		f.ac(this.game.parentEl,this.el[menu]);
	}

	addMenuL(menu,y=0,text="", img="",click=()=>{}){
		this.el[menu] = f.ce("div");
		f.sa(this.el[menu],"class","sideMenuL");
		this.el[menu].style.top = (30+y*40)+"px";
		this.el[menu].style.backgroundImage = "url('"+img+"')";
		this.el[menu].onclick = click;
		f.ac(this.el[menu], f.ce("br"));
		f.ac(this.el[menu], f.ce("br"));
		f.ac(this.el[menu], f.ct(text));
		f.ac(this.game.parentEl,this.el[menu]);
	}

	addMenuFriend(){
		let saya = this;
		let click = function(){
			saya.game.multi.viewFriends();
		};
		this.addMenuL("menuFriend",10,"Players",IMG.icon.friend,click);
	}

	addMenuOfferTankItem(offer){
		offer=offer|| {
			icon:IMG.tank.pumpkin1,
			title:"Jack",
			desc:"Buy Jack as your new tank item!",
			id:"pumpkin",
			price:1000000,
			end:1540047863000
			// end:1539712662000
		};
		let saya = this;
		let now = new Date();
		if(offer.end<now.getTime())return;
		let click = function(){
			saya.game.el.content.innerHTML = "";

			let div2 = f.ce("div");
			div2.style.textAlign="center";

			f.ac(div2, f.ct(offer.desc));
			f.ac(div2, f.ce("br"));

			let menu = f.ce("div");
			f.sa(menu,"class","shopMenu");
			menu.style.height = "260px";
			menu.style.width = "auto";
			menu.style.padding = "0";
			menu.style.margin = "3px";
			menu.style.cursor = "pointer";

			if(saya.game.tankItemsUnlocked.indexOf(offer.id)!==-1){
				menu.classList.add("MENU_showUnlocked");
			}
			else
			if(GLOBAL.tankItemsShop.indexOf(offer.id)!==-1){
				menu.classList.add("MENU_showShop");
			}

			// let name = f.ce("div");
			// f.sa(name,"class","title1");
			// f.ac(name,f.ct(GLOBAL.tankItems[offer.id].name));
			// f.ac(menu,name);

			let aquaMini = f.ce("div");
			f.sa(aquaMini,"class","aquaMini");
			let aquaMiniSize=[220,150];
			aquaMini.style.height = aquaMiniSize[1]+"px";
			aquaMini.style.width = aquaMiniSize[0]+"px";
			aquaMini.style.overflowY = "visible";
			aquaMini.style.display = "list-item";

			let el = GLOBAL.tankItems[offer.id].el.cloneNode(true);
			f.ac(aquaMini, el);

			// SCALE
			let scale=1;
			if(GLOBAL.tankItems[offer.id].width.slice(-2)=='px'){
				let width = parseInt(GLOBAL.tankItems[offer.id].width.slice(0,-2));
				if(width>aquaMiniSize[0]){
					scale = Math.min(scale,aquaMiniSize[0]/width);
				}
			}
			if(GLOBAL.tankItems[offer.id].height.slice(-2)=='px'){
				let height = parseInt(GLOBAL.tankItems[offer.id].height.slice(0,-2));
				if(height>aquaMiniSize[1]){
					scale = Math.min(scale,aquaMiniSize[1]/height);
				}
			}
			el.style.transform = "scale("+scale+") translate(-50%,0)";
			el.style.left = "50%";
			el.style.transformOrigin = "left bottom";

			let money = f.ce("div");
			money.style.color="#000000";
			money.style.position="relative";
			money.innerHTML = "<img src='"+IMG.icon._plus(IMG.icon.money)+"' class='icon'>"+(GLOBAL.tankItems[offer.id].money*20)+"/min";
			f.ac(aquaMini, money);


			let divAct0 = f.ce("div");
			let updateState = function(refresh=false){
				let now = new Date();
				menu.style.backgroundColor = "transparent";
				let divAct = f.ce("div");
				divAct.style.textAlign = "center";
				if(saya.game.tankItemsUnlocked && saya.game.tankItemsUnlocked.indexOf(offer.id)!==-1){
					// menu.style.backgroundColor = "";

					let isEnabled=-1;
					(saya.game.tankItems || []).map((el, idx)=>el && el.item.type==offer.id && (isEnabled=idx));

					let divBuy = f.ce("div");
					let conf = f.ce("button")
					conf.innerHTML = "Move";
					f.ac(divBuy, conf);
					f.ac(divAct, divBuy);

					if(isEnabled==-1){
						f.sa(conf,"disabled","");
					}else{
						conf.onclick = function(){
							saya.game.tankItems[isEnabled].item.configure();
							saya.game.hideModal();
						}
					}

					divBuy = f.ce("div");
					let button = f.ce("button")
					f.ac(divBuy, button);
					f.ac(divAct, divBuy);
					if(isEnabled!==-1){
						button.classList.add("red");
						button.innerHTML = "Remove";
						button.onclick = function(){
							saya.game.tankItems.map(e=>e && e.item.type==offer.id && e.item.kill() );
							updateState(true);
						};
					}else{
						button.classList.remove("red");
						button.innerHTML = "Insert";
						button.onclick = function(){
							let tank = new Tank(saya.game,offer.id);
							updateState(true);
						};
					}

				}else{
					// menu.style.backgroundColor = "#777777";
					let divPrice = f.ce("div");
					divPrice.style.color = "#000000";
					// let isEnabled = true;

					divPrice.innerHTML = offer.end>now.getTime()?f.lifeBar(offer.end-now.getTime()):"Times up";
					let isEnabled = offer.price<=saya.game.uang;

					let divBuy = f.ce("div");
					let buy = f.ce("button")
					// buy.innerHTML = "Buy";
					buy.innerHTML+=" <img src='"+IMG.icon.money+"' class='icon'> "+f.numFormat(offer.price);
					((buy,i, saya,menu)=>{
						buy.onclick = function(){
							// for(let j of Object.keys(GLOBAL.tankItems[i].price)){
							// 	saya.game.paper[j]-=GLOBAL.tankItems[i].price[j];
							// }
							// menu.classList.remove("MENU_showShop");
							// menu.classList.add("MENU_showUnlocked");
							saya.game.tankItemsUnlocked.push(offer.id);
							updateState(true);
							saya.game.uang-= offer.price
							saya.game.viewMoney();;
						};
						
					})(buy, offer.id,saya,menu);

					if(!isEnabled){
						f.sa(buy,"disabled","");
					}
					f.ac(divBuy, buy);

					f.ac(divAct, divPrice);
					f.ac(divAct, divBuy);
				}
				if(refresh){
					divAct0.innerHTML = '';
					f.ac(divAct0,divAct);
				}
				saya.game.viewPaper();
				return divAct;
			};

			f.ac(menu,aquaMini);
			f.ac(menu, divAct0);
			f.ac(div2,menu);
			f.ac(saya.game.el.content, div2);

			updateState(true);
			let update = window.setInterval(()=>updateState(true),1000);

			saya.game.onModalRemoved.push(()=>{
				window.clearInterval(update);
			});


			saya.game.showModal(offer.title);
		};
		this.addMenuL("menuOffer",1,f.lifeBar(offer.end - now.getTime()),offer.icon,click);

		saya.el.menuOffer.classList.add("shiny");
		this.intervalTimeOffer = window.setInterval(function(){
			let now = new Date();
			if(offer.end - now.getTime()<0 || saya.game.tankItemsUnlocked.indexOf(offer.id)!==-1){
				window.clearInterval(saya.intervalTimeOffer);
				saya.el.menuOffer.outerHTML = "";
				return;
			}
			try{
				saya.el.menuOffer.childNodes[2].nodeValue = f.lifeBar(offer.end - now.getTime());
			}catch(e){
				console.log(e);
			}
		},1000);
	}

	addMenuSave(){
		let saya = this;
		let click = function(){
			saya.game.viewStatus("Saving...");
			if(saya.game.loggedIn){
				saya.game.saveData();
			}else{
				// saya.game.showModalInfo("Error","You playing as guest.");
				kongregate.services.showRegistrationBox();

			}
		};
		this.addMenu("menuSave",4,"Save",IMG.icon.save,click);
	}

	addMenuGuide(){
		let saya = this;
		let click = function(){
			saya.game.el.content.innerHTML = "";
			f.ac(saya.game.el.content, saya.guide());
			saya.game.showModalWide("Guide Book");
		};
		this.addMenu("menuGuide",3,"Guide",IMG.icon.book,click);
	}

	addMenuTank(){
		let saya = this;
		let click = function(){
			saya.game.el.content.innerHTML = "";
			f.ac(saya.game.el.content, saya.tank());
			saya.game.showModalWide("Tank");
		};
		this.addMenu("menuTank",2,"Tank",IMG.icon.tank,click);
	}

	addMenuCraft(){
		let saya = this;
		let click = function(){
			saya.game.el.content.innerHTML = "";
			let div = saya.fishCraft1();
			f.ac(saya.game.el.content, div );
			// saya.game.showModalWide("Creatures Craft ("+saya.game.craft.length+"/"+saya.game.craftMaxItem+")");
			saya.game.showModalWide("Creatures Craft");
			// window.setTimeout(()=>{
			// 	div.scrollTop = saya.vars.scrollTop;
			// },5000);
		};
		this.addMenu("menuCraft",1,"Creatures",IMG.icon.craft,click);
	}

	addMenuBuyIkan1(){
		let saya = this;
		let click = function(){
			let totalIkan = 0;
			saya.game.ikan.map(e=>e && (totalIkan++) );
			saya.game.el.content.innerHTML = "";
			if(saya.game.glassLvl*2+1 > totalIkan || 1){
				f.ac(saya.game.el.content, saya.fishShop());
				saya.game.showModalWide("Fish Shop ("+totalIkan+"/"+(saya.game.glassLvl*2+1)+")");
				// saya.game.showModalWide("Fish Shop");
			}else{
				// alert("penuh");
				saya.game.showModalInfo("Insufficient Space","Tank is full ("
					+totalIkan+"/"+(saya.game.glassLvl*2+1)+"). Upgrade your tank to place more fish.");
			}
		};
		this.addMenu("menuShop",0,"Fish",IMG.icon.shop,click);

		// alert
		if(0){
			// HANYA TANDA SERU
			// let icon = f.ce("img");
			// f.sa(icon,"class","icon goyang");
			// f.sa(icon,"src",IMG.icon.warn);
			// icon.style.position = "absolute";
			// icon.style.left = "0";
			// icon.style.top = "0";
			// icon.style.display = "none";
			// f.ac(this.el.menuShop,icon);
			// this.updateMenuBuyIkan = function(){
			// 	try{
			// 		let totalIkan = 0;
			// 		saya.game.ikan.map(e=>e && (totalIkan++) );
			// 		if(saya.game.glassLvl*2+1 > totalIkan){
			// 			icon.style.display = "";
			// 		}else{
			// 			icon.style.display = "none";
			// 		}
			// 	}catch(e){}
			// };
			// this.updateMenuBuyIkan();
		}else{
			let notif = f.ce("div");
			f.sa(notif,"class","notifAngka");
			f.ac(this.el.menuShop,notif);
			this.updateMenuBuyIkan = function(){
				try{
					let totalIkan = 0;
					saya.game.ikan.map(e=>e && (totalIkan++) );
					if(saya.game.glassLvl*2+1 > totalIkan){
						// notif.innerHTML = ""+totalIkan+"/"+(saya.game.glassLvl*2+1)+"";
						notif.innerHTML = (saya.game.glassLvl*2+1)-totalIkan;
						notif.style.display = "";
					}else{
						notif.style.display = "none";
					}
				}catch(e){
					notif.style.display = "none";
					window.setTimeout(this.updateMenuBuyIkan,2000);
					// console.log(e);
				}
			};
			this.updateMenuBuyIkan();
		}



	}

	fishShop(scrollTop=0){
		let saya = this;
		let div = f.ce("div");
		f.sa(div,"style","overflow-y:scroll;max-height:350px;margin:10px 0px;position:relative;");
		div.onscroll =e=>{scrollTop=div.scrollTop;};

		// for(let j=9;--j;)
		for(let i of Object.keys(GLOBAL.fishShop).sort((a,b)=>GLOBAL.fishs[a].price>GLOBAL.fishs[b].price?1:-1)){
			let menu = f.ce("div");
			f.sa(menu,"class","shopMenu");

			let aquaMini = f.ce("div");
			f.sa(aquaMini,"class","aquaMini");
			f.ac(menu,aquaMini);
			
			let div1 = f.ce("div");
			f.sa(div1,"class","title1");
			div1.innerHTML = GLOBAL.fishShop[i].name;
			f.ac(menu, div1);

			let buy = f.ce("button");
			div1 = f.ce("div");

			if(!GLOBAL.fishShop[i].v){
				let ikan = new Ikan((160-GLOBAL.fishShop[i].lvlUpVar.base[0])/2 ,(100-GLOBAL.fishShop[i].lvlUpVar.base[1])/2,aquaMini, 200, 200, GLOBAL.fishShop[i].type,false,false,1);


				div1.innerHTML = "<img src='"+IMG.icon._plus(IMG.icon.paper)+"' class='icon coin"+GLOBAL.fishShop[i].type+"'>"+(GLOBAL.fishShop[i].claimBase*6)+"/min";
				// f.ac(menu, div1);

				// div1 = f.ce("div");
				div1.innerHTML += "<br><img src='"+IMG.icon.heart+"' class='icon'>"+f.lifeBar(GLOBAL.fishShop[i].lifeSpan);
				f.ac(menu, div1);


				div1 = f.ce("div");
				buy.onclick = function(ev){
					saya.game.addIkan(GLOBAL.fishShop[i].type);
					// saya.game.hideModal();

					let totalIkan = 0;
					saya.game.ikan.map(e=>e && (totalIkan++) );
					saya.game.el.title.innerHTML="Fish Shop ("+totalIkan+"/"+(saya.game.glassLvl*2+1)+")";
					saya.game.showPop(" <span style='color:#911'><img src='"+IMG.icon.money+"' class='icon'>"+f.numFormat(GLOBAL.fishShop[i].price), ev.pageX, ev.pageY)+"</span>";
				}

			}else
			if(GLOBAL.fishShop[i].v==2){

				let ikan = new Ikan2((160-GLOBAL.fishShop[i].lvlUpVar.base[0])/2 ,(100-GLOBAL.fishShop[i].lvlUpVar.base[1])/2,aquaMini, 200, 200, i ,false,false,1);

				div1 = f.ce("div");
				for(let j in GLOBAL.fishShop[i].claimBase){
					div1.innerHTML += "<img src='"+IMG.icon._plus(IMG.icon.paper)+"' class='icon coin"+GLOBAL.fishShop[i].curr[j]+"'>"+(GLOBAL.fishShop[i].claimBase[j]*6)+"/min<br>";
				}
				// f.ac(menu, div1);

				// div1 = f.ce("div");
				div1.innerHTML += "<img src='"+IMG.icon.heart+"' class='icon'>"+f.lifeBar(GLOBAL.fishShop[i].lifeSpan);
				f.ac(menu, div1);

				div1 = f.ce("div");
				buy.onclick = function(ev){
					saya.game.addIkan2(i);
					// saya.game.hideModal();

					let totalIkan = 0;
					saya.game.ikan.map(e=>e && (totalIkan++) );
					saya.game.el.title.innerHTML="Fish Shop ("+totalIkan+"/"+(saya.game.glassLvl*2+1)+")";
					saya.game.showPop(" <span style='color:#911'><img src='"+IMG.icon.money+"' class='icon'>"+f.numFormat(GLOBAL.fishShop[i].price), ev.pageX, ev.pageY)+"</span>";
				}
			}
			
			buy.innerHTML = " <img src='"+IMG.icon.money+"' class='icon'>"+f.numFormat(GLOBAL.fishShop[i].price);


			try{

				let totalIkan = 0;
				saya.game.ikan.map(e=>e && (totalIkan++) );

				if(this.game.uang<GLOBAL.fishShop[i].price || saya.game.glassLvl*2+1 <= totalIkan){
					f.sa(buy,"disabled","");
				}else{
					f.ra(buy,"disabled");
				}
			}catch(e){
				console.log(e);
			}

			let update = window.setInterval(()=>{
				try{

					let totalIkan = 0;
					saya.game.ikan.map(e=>e && (totalIkan++) );

					if(this.game.uang<GLOBAL.fishShop[i].price || saya.game.glassLvl*2+1 <= totalIkan){
						f.sa(buy,"disabled","");
					}else{
						f.ra(buy,"disabled");
					}
				}catch(e){
					console.log(e);
				}
			}, 1000);

			this.game.onModalRemoved.push(()=>{
				window.clearInterval(update);
				saya.updateMenuBuyIkan();
			});


			f.sa(div1,"style","text-align:center;position: absolute;bottom: 0;width:100%;");
			f.ac(div1, buy);
			f.ac(menu, div1);
			f.ac(div, menu);
		}

		return div;
	}


	fishCraft1(scrollTop=0,short=null){
		let saya = this;
		let fishShop = {};
		let div = f.ce("div");
		f.sa(div,"class",'tank');
		// f.sa(div,"style","overflow-y:scroll;max-height:350px;margin:10px 0px;position:relative;");
		div.onscroll =e=>{scrollTop=div.scrollTop;};

		if(!short){
			for(let i of this.game.craftUnlocked.sort((a,b)=> this.game.craft.indexOf(a)!=-1?-1:this.game.craft.indexOf(b)!=-1?1: Object.values(GLOBAL.fishCraft[b].price).reduce((c,d)=>c+d) < Object.values(GLOBAL.fishCraft[a].price).reduce((c,d)=>c+d)?1:-1)){
				if(!fishShop[i]){
					fishShop[i] = GLOBAL.fishCraft[i];
				}
			}

			for(let i of Object.keys(GLOBAL.fishCraftShop).sort((a,b)=>Object.values(GLOBAL.fishCraftShop[b].price).reduce((c,d)=>c+d) < Object.values(GLOBAL.fishCraftShop[a].price).reduce((c,d)=>c+d)?1:-1)){
				if(!fishShop[i]){
					fishShop[i] = GLOBAL.fishCraftShop[i];
				}
			}
			short = Object.keys(fishShop);
		}else{
			for(let i of short){
				if(!fishShop[i]){
					fishShop[i] = GLOBAL.fishCraft[i];
				}
			}
		}

		let divLeft = f.ce("div");
		f.sa(divLeft,"class","left");
		f.ac(div,divLeft);
		let divRight = f.ce("div");
		f.sa(divRight,"class","right");
		f.ac(div,divRight);
		divRight.style.overflowY = "scroll";

		let divTitle = f.ce("div");
		f.sa(divTitle,"class",'title1');
		f.ac(divLeft, divTitle);

		let divDesc = f.ce("div");
		f.sa(divDesc,"style","height:200px;overflow-y:hidden");
		f.ac(divLeft, divDesc);

		let divAct = f.ce("div");
		f.sa(divAct,"style","text-align:center;position:absolute;width:100%;bottom:10px;");
		f.ac(divLeft, divAct);


		// if(0)
		for(let i of Object.keys(fishShop)){
			let menu = f.ce("div");
			f.sa(menu,"class","shopMenu");
			menu.style.height = "auto";
			menu.style.width = "auto";
			menu.style.padding = "0";
			menu.style.margin = "3px";
			menu.style.cursor = "pointer";

			let aquaMini = f.ce("div");
			f.sa(aquaMini,"class","aquaMini");
			// aquaMini.style.transform = "scale(.5)";
			aquaMini.style.height = "50px";
			aquaMini.style.width = "80px";
			f.ac(menu,aquaMini);
			let ikan = new Craft((80-fishShop[i].length)/2 ,(50-fishShop[i].height)/2,aquaMini, 200, 200, fishShop[i].type,false,false,1);
			ikan.elWrap.style.transform = "scale(.5)";

			let div1 = f.ce("div");
			f.sa(div1,"class","center");

			let icon = f.ce("img");
			f.sa(icon,"class","icon");
			f.sa(icon,"src",IMG.icon.check);
			icon.style.position = "absolute";
			icon.style.left = "0";
			icon.style.top = "0";
			icon.style.opacity = 0;


			let updateState = function(saya,i,refresh=true){
				let div1 = f.ce("div");
				if(saya.game.craftUnlocked.indexOf(i)==-1){
					menu.style.backgroundColor = "#777777";
					aquaMini.style.backgroundColor = "#bbb";
					ikan.hint(null,ikan);
					let buy = f.ce("button");
					buy.onclick = function(){
						saya.game.unlockCraft(i);
						menu.style.backgroundColor = "";
						aquaMini.style.backgroundColor = "";
						icon.style.opacity = 0;
						ikan.unHint(null,ikan);
						updateState(saya,i);
						// console.log("Menu::fishCraft1 : unlock craft");
					}
					buy.innerHTML = " Unlock ";

					let div2 = f.ce("div");
					// f.sa(div2,"style","text-align:left;");
					div2.innerHTML = "";
					let idx=-1;
					for(let j of Object.keys(fishShop[i].price)){
						div2.innerHTML += fishShop[i].price[j]?" <img src='"+IMG.icon.paper+"' class='icon coin"+j+"'>"+f.numFormat(fishShop[i].price[j])+(++idx%2?"<br>":""):"";
						if(saya.game.paper[j]<fishShop[i].price[j]){
							f.sa(buy,"disabled","");
						}
					}
					if(!buy.disabled){
						f.sa(icon,"src",IMG.icon.warn);
						icon.classList.add("goyang");
						icon.style.opacity = 1;
					}


					let update = window.setInterval(()=>{
						try{

							let disabled = false;
							for(let j of Object.keys(fishShop[i].price)){
								if(saya.game.paper[j]<fishShop[i].price[j]){
									disabled = true;
								}
							}
							if(disabled){
								f.sa(buy,"disabled","");
							}else{
								f.ra(buy,"disabled");
								if(saya.game.craftUnlocked.indexOf(i)==-1){
									f.sa(icon,"src",IMG.icon.warn);
									icon.classList.add("goyang");
									icon.style.opacity = 1;
								}
							}
						}catch(e){
							console.log(e);
						}
					}, 1000);
					saya.game.onModalRemoved.push(()=>{window.clearInterval(update)});

					f.ac(div1, div2);
					f.ac(div1, buy);
				}else
				if(saya.game.craft.indexOf(i)==-1){

					let totalIkan = 0;
					saya.game.craft.map(e=>e && (totalIkan++) );

					let buy = f.ce("button");
					f.sa(buy,"class","green");

					buy.onclick = function(){
						saya.game.addCraft(fishShop[i].type);
						f.sa(icon,"src",IMG.icon.check);
						icon.classList.remove("goyang");
						icon.style.opacity = 1;
						updateState(saya,i);
					}


					buy.innerHTML = " Insert to tank ";
					if(totalIkan>=saya.game.craftMaxItem){
						buy.innerHTML = " Remove others first ";
						f.sa(buy,"disabled","");
					}

					f.ac(div1, buy);

				}else{
					f.sa(icon,"src",IMG.icon.check);
					icon.classList.remove("goyang");
					icon.style.opacity = 1;

					let buy = f.ce("button");
					f.sa(buy,"class","red");


					((buy,saya,i)=>{
						buy.onclick = function(){
							saya.game.removeCraft(i);
							// console.log("NOOO ",i);
							icon.style.opacity = 0;
							updateState(saya,i);

						}
					})(buy,saya,fishShop[i].type);


					buy.innerHTML = " Remove from tank ";

					f.ac(div1, buy);

				}

				if(refresh){
					divAct.innerHTML = "";
					f.ac(divAct, div1);
				}
				return div1;
			};

			// div1 = updateState(saya,i);

			updateState(saya,i,false);
			f.ac(menu, icon);
			((menu,i,div1)=>{
				menu.onclick = function(e){
					divTitle.innerHTML = fishShop[i].name;
					divDesc.innerHTML = fishShop[i].desc;
					updateState(saya,i);
					try{f.qs("#shopMenuSelected").id="";}catch(e){}
					menu.id="shopMenuSelected";
					// divAct.innerHTML = "";
					// f.ac(divAct, div1);
				};
			})(menu,i,div1);
			f.ac(divRight, menu);
		}

		return div;
	}

	tank(){
		let saya = this;
		let div = f.ce("div");
		f.sa(div,"class",'tank');



		// LEFT PANEL
		let div1 = f.ce("div");
		f.sa(div1,"class",'left');
		// div1.innerHTML = "asdsdsad asds";

		let div11 = f.ce("div");
		f.sa(div11,"class",'title1');
		div11.innerHTML = "Tank Properties";
		f.ac(div1, div11);

		let icon = f.ce("img");
		f.sa(icon,"class","iconBig");
		f.sa(icon,"src",IMG.icon.tank);
		f.ac(div1, icon);

		let table = f.ce("table");
		let tr = f.ce("tr");
		let td = f.ce("td");
		td.innerHTML = "Level";
		f.ac(tr,td);
		td = f.ce("td");

		let textGlassLvl = f.ce("span");
		textGlassLvl.innerHTML = this.game.glassLvl+"/10";
		f.ac(td,textGlassLvl);

		// td.innerHTML = this.game.glassLvl+"/10";
		f.ac(tr,td);
		f.ac(table,tr);


		tr = f.ce("tr");
		td = f.ce("td");
		td.innerHTML = "Paperfish";
		f.ac(tr,td);
		td = f.ce("td");
		let totalIkan = 0;
		this.game.ikan.map(e=>e && (totalIkan++) );
		let textTotalIkan = f.ce("span");
		textTotalIkan.innerHTML = (totalIkan+"/"+(this.game.glassLvl*2+1));
		f.ac(td,textTotalIkan);
		f.ac(tr,td);
		f.ac(table,tr);


		tr = f.ce("tr");
		td = f.ce("td");
		td.innerHTML = "Upgrade";
		f.ac(tr,td);
		td = f.ce("td");
		let button = f.ce("button");

		let buttonSet = function(saya,button,textTotalIkan,textGlassLvl){
			f.ra(button,"disabled");
			if(saya.game.glassLvl>=10){
				button.innerHTML = "Maxed";
				f.sa(button,"disabled","");
			}else{
				let cost = Math.pow(2,saya.game.glassLvl-1)*saya.game.glassLvlUpCost;
				button.innerHTML = " <img src='"+IMG.icon.paper+"' class='icon coinB'> "+f.numFormat(cost);
				if(cost>saya.game.paper.B){
					f.sa(button,"disabled","");
				}

				button.onclick = function(ev){
					saya.game.glassLvlUp();
					// saya.game.el.content.innerHTML = "";
					// f.ac(saya.game.el.content, saya.tank());
					buttonSet(saya, this, textTotalIkan,textGlassLvl);
					saya.game.showPop(" <span style='color:#911'><img src='"+IMG.icon.paper+"' class='icon coinB'> "+f.numFormat(cost), ev.pageX, ev.pageY)+"</span>";

				}

			}

			textGlassLvl.innerHTML = saya.game.glassLvl+"/10";


			let totalIkan = 0;
			saya.game.ikan.map(e=>e && (totalIkan++) );
			textTotalIkan.innerHTML = (totalIkan+"/"+(saya.game.glassLvl*2+1));

		};
		buttonSet(saya, button, textTotalIkan, textGlassLvl);
		
		let buttonUpdate = window.setInterval(()=>{
			buttonSet(saya, button,textTotalIkan, textGlassLvl);
		}, 1000);

		this.game.onModalRemoved.push(()=>{
			window.clearInterval(buttonUpdate);
		});
		f.ac(td,button);
		f.ac(tr,td);
		f.ac(table,tr);



		f.ac(div1, table);


		// RIGHT PANEL
		let div2 = f.ce("div");
		f.sa(div2,"class",'right');
		div2.style.overflowY = "scroll";

		let div21 = f.ce("div");
		f.sa(div21,"class",'title1');
		div21.innerHTML = "Tank Items";
		f.ac(div2, div21);

		// f.ac(div2,f.ct("Coming soon"));

		// for(let xxx=0;++xxx<2;)
		this.tankItems(div2,true,false);

		f.ac(div, div1);
		f.ac(div, div2);


		// LEFT AGAIN

		tr = f.ce("tr");
		td = f.ce("td");
		let btnTankShop = f.ce("button");
		btnTankShop.innerHTML = " Inventory ";
		btnTankShop.classList.add("green");
		btnTankShop.onclick = function(){
			for(let i of saya.game.parentEl.querySelectorAll(".MENU_showUnlocked")){
				i.style.display="inline-table";
			}
			for(let i of saya.game.parentEl.querySelectorAll(".MENU_showShop")){
				i.style.display="none";
			}
		};
		td.colspan=2;
		f.ac(td,btnTankShop);
		f.ac(tr,td);
		f.ac(table,tr);


		tr = f.ce("tr");
		td = f.ce("td");
		btnTankShop = f.ce("button");
		btnTankShop.innerHTML = " Shop ";
		btnTankShop.classList.add("green");
		btnTankShop.onclick = function(){
			// let temp = f.ce("div");
			// saya.tankItems(div2,false,true);
			for(let i of saya.game.parentEl.querySelectorAll(".MENU_showUnlocked")){
				i.style.display="none";
			}
			for(let i of saya.game.parentEl.querySelectorAll(".MENU_showShop")){
				i.style.display="inline-table";
			}
		};
		td.colspan=2;
		f.ac(td,btnTankShop);
		f.ac(tr,td);
		f.ac(table,tr);


		this.game.onModalRemoved.push(()=>{
			saya.updateMenuBuyIkan();
		});

		return div;
	}


	tankItems(div2, showUnlocked=true, showShop=true){
		let saya = this;

		let tankItemsList=[];
		for(let i of saya.game.tankItemsUnlocked.slice(0).reverse()){
			if(tankItemsList.indexOf(i)==-1 && GLOBAL.tankItemsShop.indexOf(i)!==-1){
				tankItemsList.push(i);
			}
		}

		for(let i of GLOBAL.tankItemsShop.sort((a,b)=>GLOBAL.tankItems[b].minGlassLvl<GLOBAL.tankItems[a].minGlassLvl?1:GLOBAL.tankItems[b].minGlassLvl>GLOBAL.tankItems[a].minGlassLvl?-1: Object.values(GLOBAL.tankItems[b].price).reduce((c,d)=>c+d) < Object.values(GLOBAL.tankItems[a].price).reduce((c,d)=>c+d)?1:-1)){
			if(tankItemsList.indexOf(i)==-1){
				tankItemsList.push(i);
			}
		}

		for(let i of tankItemsList)
		{
			let menu = f.ce("div");
			f.sa(menu,"class","shopMenu");
			menu.style.height = "260px";
			menu.style.width = "auto";
			menu.style.padding = "0";
			menu.style.margin = "3px";
			menu.style.cursor = "pointer";

			if(saya.game.tankItemsUnlocked.indexOf(i)!==-1){
				menu.classList.add("MENU_showUnlocked");
				if(!showUnlocked){
					menu.style.display = "none";
				}
			}else
			if(GLOBAL.tankItemsShop.indexOf(i)!==-1){
				menu.classList.add("MENU_showShop");
				if(!showShop){
					menu.style.display = "none";
				}
			}

			let name = f.ce("div");
			f.sa(name,"class","title1");
			f.ac(name,f.ct(GLOBAL.tankItems[i].name));
			f.ac(menu,name);

			let aquaMini = f.ce("div");
			f.sa(aquaMini,"class","aquaMini");
			let aquaMiniSize=[220,150];
			aquaMini.style.height = aquaMiniSize[1]+"px";
			aquaMini.style.width = aquaMiniSize[0]+"px";
			aquaMini.style.overflowY = "visible";
			aquaMini.style.display = "list-item";

			let el = GLOBAL.tankItems[i].el.cloneNode(true);
			f.ac(aquaMini, el);

			// SCALE
			let scale=1;
			if(GLOBAL.tankItems[i].width.slice(-2)=='px'){
				let width = parseInt(GLOBAL.tankItems[i].width.slice(0,-2));
				if(width>aquaMiniSize[0]){
					scale = Math.min(scale,aquaMiniSize[0]/width);
				}
			}
			if(GLOBAL.tankItems[i].height.slice(-2)=='px'){
				let height = parseInt(GLOBAL.tankItems[i].height.slice(0,-2));
				if(height>aquaMiniSize[1]){
					scale = Math.min(scale,aquaMiniSize[1]/height);
				}
			}
			el.style.transform = "scale("+scale+") translate(-50%,0)";
			el.style.left = "50%";
			el.style.transformOrigin = "left bottom";

			let money = f.ce("div");
			money.style.color="#000000";
			money.style.position="relative";
			money.innerHTML = "<img src='"+IMG.icon._plus(IMG.icon.money)+"' class='icon'>"+(GLOBAL.tankItems[i].money*20)+"/min";
			f.ac(aquaMini, money);


			let divAct0 = f.ce("div");
			let updateState = function(refresh=false){
				let divAct = f.ce("div");
				divAct.style.textAlign = "center";
				if(saya.game.tankItemsUnlocked && saya.game.tankItemsUnlocked.indexOf(i)!==-1){
					menu.style.backgroundColor = "";

					let isEnabled=-1;
					(saya.game.tankItems || []).map((el, idx)=>el && el.item.type==i && (isEnabled=idx));

					let divBuy = f.ce("div");
					let conf = f.ce("button")
					conf.innerHTML = "Move";
					f.ac(divBuy, conf);
					f.ac(divAct, divBuy);

					if(isEnabled==-1){
						f.sa(conf,"disabled","");
					}else{
						conf.onclick = function(){
							saya.game.tankItems[isEnabled].item.configure();
							saya.game.hideModal();
						}
					}

					divBuy = f.ce("div");
					let button = f.ce("button")
					f.ac(divBuy, button);
					f.ac(divAct, divBuy);
					if(isEnabled!==-1){
						button.classList.add("red");
						button.innerHTML = "Remove";
						button.onclick = function(){
							saya.game.tankItems.map(e=>e && e.item.type==i && e.item.kill() );
							updateState(true);
						};
					}else{
						button.classList.remove("red");
						button.innerHTML = "Insert";
						button.onclick = function(){
							let tank = new Tank(saya.game,i);
							updateState(true);
						};
					}

				}else{
					menu.style.backgroundColor = "#777777";
					let divPrice = f.ce("div");
					let isEnabled = true;

					if(saya.game.glassLvl<(GLOBAL.tankItems[i].minGlassLvl || 1)){
						divPrice.innerHTML = "Available on Tank lvl. "+(GLOBAL.tankItems[i].minGlassLvl || 1);
						isEnabled = false;
					}else{
						for(let j of Object.keys(GLOBAL.tankItems[i].price)){
							divPrice.innerHTML+=" <img src='"+IMG.icon.paper+"' class='icon coin"+j+"'> "+f.numFormat(GLOBAL.tankItems[i].price[j]);
							isEnabled &= GLOBAL.tankItems[i].price[j]<=saya.game.paper[j];
						}
					}

					let divBuy = f.ce("div");
					let buy = f.ce("button")
					buy.innerHTML = "Buy";
					((buy,i, saya,menu)=>{
						buy.onclick = function(){
							for(let j of Object.keys(GLOBAL.tankItems[i].price)){
								saya.game.paper[j]-=GLOBAL.tankItems[i].price[j];
							}
							menu.classList.remove("MENU_showShop");
							menu.classList.add("MENU_showUnlocked");
							saya.game.tankItemsUnlocked.push(i);
							updateState(true);
						};
						
					})(buy, i,saya,menu);

					if(!isEnabled){
						f.sa(buy,"disabled","");
					}
					f.ac(divBuy, buy);

					f.ac(divAct, divPrice);
					f.ac(divAct, divBuy);
				}
				if(refresh){
					divAct0.innerHTML = '';
					f.ac(divAct0,divAct);
				}
				saya.game.viewPaper();
				return divAct;
			};

			f.ac(menu,aquaMini);
			f.ac(menu, divAct0);
			f.ac(div2,menu);

			updateState(true);
			let update = window.setInterval(()=>updateState(true),2000);

			saya.game.onModalRemoved.push(()=>{
				window.clearInterval(update);
			});


		}
		return div2;
	}


	guide(){
		let saya = this;
		let div = f.ce("div");
		f.sa(div,"class",'tank');



		// LEFT PANEL
		let div1 = f.ce("div");
		f.sa(div1,"class",'left');

		let div11 = f.ce("div");
		f.sa(div11,"class",'title1');
		div11.innerHTML = "Contents";
		f.ac(div1, div11);




		// RIGHT PANEL
		let div2 = f.ce("div");
		f.sa(div2,"class",'right');

		let div21 = f.ce("div");
		f.sa(div21,"class",'title1');
		f.ac(div2, div21);

		let div22 = f.ce("div");
		f.ac(div2, div22);

		f.ac(div, div1);
		f.ac(div, div2);

		for(let i of Object.keys(GUIDE)){
			let button = f.ce("button");
			f.ac(button,f.ct(i));
			f.ac(div1,button);
			f.ac(div1,f.ce("br"));

			((button,i)=>{
				button.onclick = function(){
					div21.innerHTML = i;
					div22.innerHTML = GUIDE[i];
				};
			})(button,i);
		}

		return div;
	}
}