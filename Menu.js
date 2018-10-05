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
	}


	addMenu(menu,y=0,text="", img="",click=()=>{}){
		this.el[menu] = f.ce("div");
		f.sa(this.el[menu],"class","sideMenu");
		this.el[menu].style.top = (60+y*80)+"px";
		this.el[menu].style.backgroundImage = "url('"+img+"')";
		this.el[menu].onclick = click;
		f.ac(this.el[menu], f.ce("br"));
		f.ac(this.el[menu], f.ce("br"));
		f.ac(this.el[menu], f.ct(text));
		f.ac(this.game.parentEl,this.el[menu]);
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
			saya.game.showModalWide("Gude Book");
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
			let div = saya.fishCraft();
			f.ac(saya.game.el.content, div );
			saya.game.showModalWide("Creatures Craft ("+saya.game.craft.length+"/"+saya.game.craftMaxItem+")");
			// window.setTimeout(()=>{
			// 	div.scrollTop = saya.vars.scrollTop;
			// },5000);
		};
		this.addMenu("menuCraft",1,"Craft",IMG.icon.craft,click);
	}

	addMenuBuyIkan1(){
		let saya = this;
		let click = function(){
			let totalIkan = 0;
			saya.game.ikan.map(e=>e && (totalIkan++) );
			saya.game.el.content.innerHTML = "";
			if(saya.game.glassLvl*2+1 > totalIkan){
				f.ac(saya.game.el.content, saya.fishShop());
				saya.game.showModalWide("Fish Shop");
			}else{
				// alert("penuh");
				saya.game.showModalInfo("Insufficient Space","Tank is full ("
					+totalIkan+"/"+(saya.game.glassLvl*2+1)+"). Upgrade your tank to place more fish.");
			}
		};
		this.addMenu("menuSave",0,"Shop",IMG.icon.shop,click);
	}



	fishShop(){
		let saya = this;
		let div = f.ce("div");
		f.sa(div,"style","overflow-y:scroll;max-height:350px;margin:10px 0px;position:relative;");

		// for(let j=9;--j;)
		for(let i of Object.keys(fishShop)){
			let menu = f.ce("div");
			f.sa(menu,"class","shopMenu");

			let aquaMini = f.ce("div");
			f.sa(aquaMini,"class","aquaMini");
			f.ac(menu,aquaMini);
			
			let div1 = f.ce("div");
			f.sa(div1,"class","title1");
			div1.innerHTML = fishShop[i].name;
			f.ac(menu, div1);

			let buy = f.ce("button");
			div1 = f.ce("div");

			if(!fishShop[i].v){
				let ikan = new Ikan((160-fishShop[i].lvlUpVar.base[0])/2 ,(100-fishShop[i].lvlUpVar.base[1])/2,aquaMini, 200, 200, fishShop[i].type,false,false,1);


				div1.innerHTML = "<img src='"+IMG.icon._plus(IMG.icon.paper)+"' class='icon coin"+fishShop[i].type+"'>"+(fishShop[i].claimBase*6)+"/min";
				// f.ac(menu, div1);

				// div1 = f.ce("div");
				div1.innerHTML += "<br><img src='"+IMG.icon.heart+"' class='icon'>"+f.timeFormat(fishShop[i].lifeSpan);
				f.ac(menu, div1);


				div1 = f.ce("div");
				buy.onclick = function(){
					saya.game.addIkan(fishShop[i].type);
					saya.game.hideModal();
				}

			}else
			if(fishShop[i].v==2){

				let ikan = new Ikan2((160-fishShop[i].lvlUpVar.base[0])/2 ,(100-fishShop[i].lvlUpVar.base[1])/2,aquaMini, 200, 200, i ,false,false,1);

				div1 = f.ce("div");
				for(let j in fishShop[i].claimBase){
					div1.innerHTML += "<img src='"+IMG.icon._plus(IMG.icon.paper)+"' class='icon coin"+fishShop[i].curr[j]+"'>"+(fishShop[i].claimBase[j]*6)+"/min<br>";
				}
				// f.ac(menu, div1);

				// div1 = f.ce("div");
				div1.innerHTML += "<img src='"+IMG.icon.heart+"' class='icon'>"+f.timeFormat(fishShop[i].lifeSpan);
				f.ac(menu, div1);

				div1 = f.ce("div");
				buy.onclick = function(){
					saya.game.addIkan2(i);
					saya.game.hideModal();
				}
			}
			
			buy.innerHTML = " <img src='"+IMG.icon.money+"' class='icon'>"+f.numFormat(fishShop[i].price);


			let update = window.setInterval(()=>{
				try{
					if(this.game.uang<fishShop[i].price){
						f.sa(buy,"disabled","");
					}else{
						f.ra(buy,"disabled");
					}
				}catch(e){
					console.log(e);
				}
			}, 1000);
			this.game.onModalRemoved.push(()=>{window.clearInterval(update)});

			if(this.game.uang<fishShop[i].price){
				f.sa(buy,"disabled","");
			}
			f.sa(div1,"style","text-align:center;position: absolute;bottom: 0;width:100%;");
			f.ac(div1, buy);
			f.ac(menu, div1);
			f.ac(div, menu);
		}

		return div;
	}

	fishCraft(scrollTop=0,short=null){
		let saya = this;
		let fishShop = {};
		let div = f.ce("div");
		f.sa(div,"style","overflow-y:scroll;max-height:350px;margin:10px 0px;position:relative;");
		div.onscroll =e=>{scrollTop=div.scrollTop;};

		if(!short){
			// for(let i of this.game.craft.sort((a,b)=>Object.values(fishCraft[b].price).reduce((c,d)=>c+d) < Object.values(fishCraft[a].price).reduce((c,d)=>c+d)?1:-1)){
			// 	if(!fishShop[i]){
			// 		fishShop[i] = fishCraft[i];
			// 	}
			// }

			for(let i of this.game.craftUnlocked.sort((a,b)=> this.game.craft.indexOf(a)!=-1?-1:this.game.craft.indexOf(b)!=-1?1: Object.values(fishCraft[b].price).reduce((c,d)=>c+d) < Object.values(fishCraft[a].price).reduce((c,d)=>c+d)?1:-1)){
				if(!fishShop[i]){
					fishShop[i] = fishCraft[i];
				}
			}

			for(let i of Object.keys(fishCraftShop).sort((a,b)=>Object.values(fishCraftShop[b].price).reduce((c,d)=>c+d) < Object.values(fishCraftShop[a].price).reduce((c,d)=>c+d)?1:-1)){
			// for(let i of Object.keys(fishCraftShop)){
				if(!fishShop[i]){
					fishShop[i] = fishCraftShop[i];
				}
			}
			short = Object.keys(fishShop);
		}else{
			for(let i of short){
				if(!fishShop[i]){
					fishShop[i] = fishCraft[i];
				}
			}
		}


		// for(let jjjj=9;--jjjj;)
		for(let i of Object.keys(fishShop)){
			let menu = f.ce("div");
			f.sa(menu,"class","shopMenu");

			let aquaMini = f.ce("div");
			f.sa(aquaMini,"class","aquaMini");
			f.ac(menu,aquaMini);
			let ikan = new Craft((160-fishShop[i].length)/2 ,(100-fishShop[i].height)/2,aquaMini, 200, 200, fishShop[i].type,false,false,1);

			let div1 = f.ce("div");
			f.sa(div1,"class","title1");
			div1.innerHTML = fishShop[i].name;
			f.ac(menu, div1);

			div1 = f.ce("div");
			f.sa(div1,"style","height:100px;overflow-y:hidden");
			div1.innerHTML = fishShop[i].desc;
			f.ac(menu, div1);



			// BUY
			div1 = f.ce("div");
			f.sa(div1,"style","text-align:center;height:80px;display:grid;place-items:center");
			if(this.game.craftUnlocked.indexOf(i)==-1){
				menu.style.backgroundColor = "#777777";
				ikan.hint();
				let buy = f.ce("button");
				buy.onclick = function(){
					saya.game.unlockCraft(i);
					saya.game.el.content.innerHTML = "";
					saya.game.el.title.innerHTML="Creatures Craft ("+saya.game.craft.length+"/"+saya.game.craftMaxItem+")";
					let div = saya.fishCraft(scrollTop, short);
					f.ac(saya.game.el.content, div);
					div.scrollTop = scrollTop;
				}
				buy.innerHTML = " Unlock ";

				let div2 = f.ce("div");
				f.sa(div2,"style","text-align:left;");
				div2.innerHTML = "";
				let idx=-1;
				for(let j of Object.keys(fishShop[i].price)){
					div2.innerHTML += fishShop[i].price[j]?" <img src='"+IMG.icon.paper+"' class='icon coin"+j+"'>"+f.numFormat(fishShop[i].price[j])+(++idx%2?"<br>":""):"";
					if(this.game.paper[j]<fishShop[i].price[j]){
						f.sa(buy,"disabled","");
					}
				}


				let update = window.setInterval(()=>{
					try{

						let disabled = false;
						for(let j of Object.keys(fishShop[i].price)){
							if(this.game.paper[j]<fishShop[i].price[j]){
								disabled = true;
							}
						}
						if(disabled){
							f.sa(buy,"disabled","");
						}else{
							f.ra(buy,"disabled");
						}
					}catch(e){
						console.log(e);
					}
				}, 1000);
				this.game.onModalRemoved.push(()=>{window.clearInterval(update)});

				f.ac(div1, div2);
				f.ac(div1, buy);
			}else
			if(this.game.craft.indexOf(i)==-1){

				let totalIkan = 0;
				saya.game.craft.map(e=>e && (totalIkan++) );

				let buy = f.ce("button");
				f.sa(buy,"class","green");

				buy.onclick = function(){
					saya.game.addCraft(fishShop[i].type);
					if(1){
						saya.game.el.content.innerHTML = "";
						saya.game.el.title.innerHTML="Creatures Craft ("+saya.game.craft.length+"/"+saya.game.craftMaxItem+")";
						let div = saya.fishCraft(scrollTop,short);
						f.ac(saya.game.el.content, div);
						div.scrollTop = scrollTop;

					}else{
						saya.game.hideModal();
					}
				}


				buy.innerHTML = " Insert to tank ";
				if(totalIkan>=this.game.craftMaxItem){
					buy.innerHTML = " Remove others first ";
					f.sa(buy,"disabled","");
				}

				f.ac(div1, buy);

			}else{
				let buy = f.ce("button");
				f.sa(buy,"class","red");
				// buy.onclick = function(){
				// 	saya.game.removeCraft(i);
				// 	if(1){
				// 		saya.game.el.content.innerHTML = "";
				// 		f.ac(saya.game.el.content, saya.fishCraft(scrollTop, short));
				// 	}else{
				// 		saya.game.hideModal();
				// 	}
				// }

				((buy,saya,i)=>{
					buy.onclick = function(){
						saya.game.removeCraft(i);
						// console.log("NOOO ",i);
						if(1){
							saya.game.el.content.innerHTML = "";
							saya.game.el.title.innerHTML="Creatures Craft ("+saya.game.craft.length+"/"+saya.game.craftMaxItem+")";
							let div = saya.fishCraft(scrollTop,short);
							f.ac(saya.game.el.content, div);
							div.scrollTop = scrollTop;
						}else{
							saya.game.hideModal();
						}
					}
				})(buy,saya,fishShop[i].type);


				buy.innerHTML = " Remove from tank ";

				f.ac(div1, buy);

			}


			f.ac(menu, div1);
			f.ac(div, menu);
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
		td.innerHTML = this.game.glassLvl+"/10";
		f.ac(tr,td);
		f.ac(table,tr);


		tr = f.ce("tr");
		td = f.ce("td");
		td.innerHTML = "Paperfish";
		f.ac(tr,td);
		td = f.ce("td");
		let totalIkan = 0;
		this.game.ikan.map(e=>e && (totalIkan++) );
		td.innerHTML = totalIkan+"/"+(this.game.glassLvl*2+1);
		f.ac(tr,td);
		f.ac(table,tr);




		tr = f.ce("tr");
		td = f.ce("td");
		td.innerHTML = "Upgrade";
		f.ac(tr,td);
		td = f.ce("td");
		let button = f.ce("button");
		if(this.game.glassLvl>=10){
			button.innerHTML = "Maxed";
			f.sa(button,"disabled","");
		}else{
			let cost = Math.pow(2,this.game.glassLvl-1)*this.game.glassLvlUpCost;
			button.innerHTML = " <img src='"+IMG.icon.paper+"' class='icon coinB'> "+f.numFormat(cost);
			if(cost>this.game.paper.B){
				f.sa(button,"disabled","");
			}

			button.onclick = function(){
				saya.game.glassLvlUp();
				saya.game.el.content.innerHTML = "";
				f.ac(saya.game.el.content, saya.tank());
			}

		}
		f.ac(td,button);
		f.ac(tr,td);
		f.ac(table,tr);

		f.ac(div1, table);


		// RIGHT PANEL
		let div2 = f.ce("div");
		f.sa(div2,"class",'right');

		let div21 = f.ce("div");
		f.sa(div21,"class",'title1');
		div21.innerHTML = "Tank Shop";
		f.ac(div2, div21);

		f.ac(div2,f.ct("Coming soon"));

		f.ac(div, div1);
		f.ac(div, div2);

		return div;
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