class Ikan{
	constructor(x,y,parentEl,length=200,height=100,type="N",moveable=true,enableNotif=true,level=1,dir=null){
		if(moveable){
			x = Math.max(  0, Math.min((parentEl.offsetWidth||0)-length, x));
			y = Math.max(100, Math.min((parentEl.offsetHeight||0)-height, y));
		}

		let now = new Date();
		this.lastClaim = now.getTime();
		this.timeCreated = now.getTime();

		// console.log(parentEl.offsetWidth, parentEl.offsetHeight);
		// console.log(x,y);

		if(!moveable){
			this.x = x|0;
			this.y = y|0;
			this.dir=dir || 0;
		}else{
			this.x = (parentEl.offsetWidth/2|0||0);
			this.y = -200;
			this.dir=(x<this.x?0:1);
		}

		if(!fishs[type])throw "Undefined ikan";

		let fishVar = fishs[type]||fishs["B"];
		// console.log(fishVar);
		for(let i of Object.keys(fishVar)){
			this[i] = fishVar[i];
		}


		this.level = level;

		length = this.lvlUpVar.base[0]+this.level*this.lvlUpVar.inc[0];
		height = this.lvlUpVar.base[1]+this.level*this.lvlUpVar.inc[1];

		this.maxLevel = 10;
		this.parentEl = parentEl;
		this.speed = 50;
		this.length = length;
		this.height = height;
		this.nextPos = null;
		this.fishVar = {};


		this.prepareAnim();
		// this.elWrap = f.ce("div");
		// f.sa(this.elWrap,"class","ikan");
		// f.sa(this.elWrap,"style","z-index:7;");
		// this.elWrap.style.height = height+"px";
		// this.elWrap.style.width = (length)+"px";

		// this.el = f.ce("div");
		// f.sa(this.el,"class","ikan");
		// this.el.style.height = height+"px";
		// this.el.style.width = (length)+"px";

		// this.el.style.transform=" perspective(400px) rotateY("+(180*this.dir|0)+"deg)";
		// let el = this.el;
		// length /= 5;
		// for(let i=0;i<5;i++){
		// 	f.ac(el,f.ce("div"));
		// 	el = el.childNodes[0];
		// 	f.sa(el,"class","ruas");
		// 	el.style.width = (length+1)+"px";
		// 	el.style.left = (i?length:0)+"px";
		// 	el.style.height = height+"px";
		// 	el.style.backgroundImage = "url('data:image/svg+xml;utf8, "+IMG.fishs[this.type]+"')";
		// 	el.style.backgroundPosition = (-length*i)+"px 0";
		// 	el.style.animationDuration = (1+3*this.length/200)+"s";
		// }
		// this.elWrap.style.left = this.x +"px";
		// this.elWrap.style.top = this.y +"px";

		// f.ac(this.elWrap,this.el);
		// f.ac(parentEl,this.elWrap);
		let onclick =e=>{
			this.onclick(e);
		};
		this.elWrap.addEventListener("click", onclick);
		// this.elWrap.onclick = this.onclick;

		if(moveable){
			this.move(x-this.x, y-this.y,10)
		}

		if(enableNotif){

			// let saya = this;
			// let addNotif = function(){
			// 	saya.addNotif();
			// }
			// window.setTimeout(addNotif, this.timeToClaim - now);
		}
	}


	prepareAnim(){
		this.elWrap = f.ce("div");
		f.sa(this.elWrap,"class","ikan");
		f.sa(this.elWrap,"style","z-index:9;");
		this.elWrap.style.height = this.height+"px";
		this.elWrap.style.width = this.length+"px";

		this.el = f.ce("div");
		f.sa(this.el,"class","ikan");
		this.el.style.height = this.height+"px";
		this.el.style.width = this.length+"px";

		this.el.style.transform=" perspective(400px) rotateY("+(180*this.dir|0)+"deg)";
		let el = this.el;
		length = this.length / 5;
		for(let i=0;i<5;i++){
			f.ac(el,f.ce("div"));
			el = el.childNodes[0];
			f.sa(el,"class","ruas");
			el.style.width = (length+1)+"px";
			el.style.left = (i?length:0)+"px";
			el.style.height = this.height+"px";
			el.style.backgroundImage = "url('data:image/svg+xml;utf8, "+IMG.fishs[this.type]+"')";
			el.style.backgroundPosition = (-length*i)+"px 0";
			el.style.animationDuration = (1+3*this.length/200)+"s";
		}
		this.elWrap.style.left = this.x +"px";
		this.elWrap.style.top = this.y +"px";

		f.ac(this.elWrap,this.el);
		f.ac(this.parentEl,this.elWrap);

	}

	paperIntervalClaim(game){
		if(this.claimingInterval){
			window.clearInterval(this.claimingInterval);
		}

		let saya = this;
		let claim = function(){
			saya.paperClaim(game);
		}
		this.claimingInterval = window.setInterval(claim,3000);
	}

	paperClaim(game,force=false){
		let now = new Date();
		if(now.getTime() - this.lastClaim>=3000 || force){
			let claimed = this.claimBase*this.level*(Math.min(now.getTime(),this.timeCreated+this.lifeSpan) - this.lastClaim)/10000|0;
			if(claimed>0){
				game.paper[this.type] = parseInt(game.paper[this.type])+claimed;
				this.lastClaim = now.getTime();
			}
			game.viewPaper();
		}
	}

	save(){
		let param = [
			this.timeCreated,
			this.type,
			this.level,
			this.lastClaim
		];

		return param;
	}

	// load(arr){
	// 	// this.kill();
	// 	let ikan = new Ikan(
	// 		this.x,
	// 		this.y,
	// 		this.parentEl,
	// 		200,100,
	// 		arr[1],
	// 		true,
	// 		true,
	// 		arr[2]
	// 	);

	// 	ikan.timeCreated = arr[0];
	// 	ikan.lastClaim = arr[3];
	// 	// this.timeCreated = arr[0];
	// 	// this.type = arr[1];
	// 	// this.level = arr[2];

	// 	return ikan;
	// }


	tryToKill(game){
		let saya = this;
		// return;
		let now = new Date();
		if(saya.timeCreated + saya.lifeSpan <= now.getTime()){
			// console.log("Ikan::tryToKill : "+saya.timeCreated);
			saya.kill(game);
		}
		else{
			window.setTimeout(()=>{
				saya.tryToKill(game);
			}, saya.timeCreated + saya.lifeSpan - now.getTime());
		}
	}
	

	kill(game=null){
		try{
			window.clearInterval(this.claimingInterval);
			this.paperClaim(game,true);
		}catch(e){}
		this.el.classList.add("death");

		if(game){
			let idx = game.ikan.indexOf(this);
			if(idx!=-1){
				game.ikan[idx] = null;
			}
		}

		let saya = this;
		window.setTimeout(function(){
			try{
				saya.elWrap.outerHTML = "";
			}catch(e){}
		},this.elWrap.style.transitionDuration.slice(0,-1)*1000);
	}

	levelUp(game){
		let saya = this;
		if(this.level>=this.maxLevel)return;
		this.level++;
		try{
			paperClaim(game,true);
		}catch(e){}


		// test
		if(0){
			let ikan = null;
			if(this.constructor.name=="Ikan"){
				ikan = new Ikan(this.elWrap.offsetLeft,this.elWrap.offsetTop,this.parentEl,200,100,this.type,false,true,this.level,this.dir);
			}else
			if(this.constructor.name=="Ikan2"){
				ikan = new Ikan2(this.elWrap.offsetLeft,this.elWrap.offsetTop,this.parentEl,200,100,this.type,false,true,this.level,this.dir);
			}
			this.elWrap.outerHTML = "";
			this.elWrap = ikan.elWrap;
			this.el = ikan.el;
			this.length = ikan.length;
			this.height = ikan.height;
			ikan.onclick = this.onclick;


			// window.clearTimeout(this.timeoutMove);
			// this.timeoutMove = window.setTimeout(()=>{
			// 	let X = this.nextPos && this.nextPos.x!=undefined?this.nextPos.x-this.x:this.parentEl.offsetWidth*(Math.random()-.5);
			// 	let Y = this.nextPos && this.nextPos.y!=undefined?this.nextPos.y-this.y:this.parentEl.offsetHeight*(Math.random()-.5);
			// 	this.move(X, Y);
			// },4000);

			this.dontMove = true;
			this.onDontMove = function(){
				this.dontMove = false;
				this.move(0,0);
			};


			this.el.style.animation = null;
			let shine =()=>{
				this.el.style.animation = "shine 1s";
			};
			setTimeout(shine,100);


			return;
		}




		let length = this.lvlUpVar.base[0]+this.level*this.lvlUpVar.inc[0];
		let height = this.lvlUpVar.base[1]+this.level*this.lvlUpVar.inc[1];

		// this.move((this.parentEl.offsetWidth - length)/2 - this.x, (this.parentEl.offsetHeight - height)/2 - this.y, false );

		this.length = length;
		this.height = height;

		this.elWrap.style.height = height+"px";
		this.elWrap.style.width = (length)+"px";

		this.el.style.height = height+"px";
		this.el.style.width = (length)+"px";


		// let el = this.el;
		length /= 5;
		let els = this.el.querySelectorAll(".ikan .ikan .ruas");


		// for(let i=0;i<5;i++){
		for(let i in els){
			if(!els[i].style){
				// console.log(els[i]);
				continue;
			}
			els[i].style.width = (length+1)+"px";
			els[i].style.left = (parseInt(i)?length:0)+"px";
			els[i].style.height = height+"px";
			els[i].style.backgroundPosition = (-length*i)+"px 0";
			els[i].style.animationDuration = (1+3*this.length/200)+"s";
		}
		
		this.el.style.animation = null;
		let shine =()=>{
			this.el.style.animation = "shine 1s";
		};
		setTimeout(shine,100);

	}

	lifeBar(){
		let now = new Date();
		let div = f.ce("div");
		f.sa(div,"class","lifeBar");
		let bar = f.ce("div");
		f.ac(div, bar);
		bar.style.width = ((now.getTime() - this.timeCreated)/this.lifeSpan*100|0)+"%";
		bar.style.transitionDuration = ((-now.getTime() + this.timeCreated + this.lifeSpan)/998|0)+"s";
		// bar.style.transitionDuration = "2s";
		window.setTimeout(()=>{
			bar.style.width = "100%";
		},1000);
		return div;
	}

	viewStats(game){
		let div = f.ce("div");

		let uBar = f.ce("div");
		let aquaMini = f.ce("div");
		f.sa(aquaMini,"class","aquaMini");
		f.ac(uBar,aquaMini);
		let ikan = new Ikan((160-this.length)/2,(100-this.height)/2,aquaMini, this.length, this.height, this.type,false,false,this.level);

		let table = f.ce("table"),tr,td;


		tr = f.ce("tr");
		td = f.ce("td");
		td.innerHTML = "Level &nbsp;&nbsp;&nbsp;&nbsp;";
		f.ac(tr, td);
		td = f.ce("td");
		td.innerText = this.level+"/"+this.maxLevel;
		f.ac(tr, td);
		f.ac(table, tr);

		tr = f.ce("tr");
		td = f.ce("td");
		td.innerText = "Life ";
		f.ac(tr, td);
		td = f.ce("td");
		f.ac(td,this.lifeBar());
		f.ac(tr, td);
		f.ac(table, tr);

		
		tr = f.ce("tr");
		td = f.ce("td");
		td.innerHTML = "Paper";
		f.ac(tr, td);
		td = f.ce("td");
		td.innerHTML = " <img src='"+IMG.icon._plus(IMG.icon.paper)+"' class='icon coin"+this.type+"'>"+(this.claimBase*this.level*6)+"/min";
		f.ac(tr, td);
		f.ac(table, tr);


		if(this.level < this.maxLevel){
			let lvlUpCost = Math.pow(2,this.level)*this.lvlUpCost;
			tr = f.ce("tr");
			td = f.ce("td");
			let button = f.ce("button");
			button.innerHTML = "Lvl. Up<br><img src='"+IMG.icon.money+"' class='icon'>"+f.numFormat(lvlUpCost);
			f.ac(td, button);
			f.ac(tr, td);
			f.sa(td,"colspan",2);

			let saya = this;
			let onclick = function(){

					
				saya.levelUp(game);

				if(game.uang<lvlUpCost){
					f.sa(button,"disabled","");
				}else{
					f.ra(button,"disabled");
				}

				// console.log(game.ikan.indexOf(saya));
				if(game.ikan.indexOf(saya)!=-1){
					game.uang -= lvlUpCost;
				}else{
					game.hideModal();
				}

				ikan.kill();
				// game.hideModal();
				game.el.content.innerHTML = "";
				f.ac(game.el.content, saya.viewStats(game));

				game.viewMoney();

				if(0)
				window.setTimeout(()=>{
					game.el.content.innerHTML = "";
					f.ac(game.el.content, saya.viewStats(game));
					game.showModal(saya.name+" Fish");
				},500);
			}
			button.onclick = onclick;


			let update = window.setInterval(()=>{
				try{
					if(game.uang<lvlUpCost){
						f.sa(button,"disabled","");
					}else{
						f.ra(button,"disabled");
					}
				}catch(e){
					console.log(e);
				}
			}, 1000);

			game.onModalRemoved.push(()=>{window.clearInterval(update)});

			if(game.uang<lvlUpCost){
				f.sa(button,"disabled","");
			}


			f.ac(table, tr);
		}
		else{
			tr = f.ce("tr");
			td = f.ce("td");
			let button = f.ce("button");
			button.innerHTML = " Level <br> Maxed ";
			f.ac(td, button);
			f.ac(tr, td);
			f.sa(td,"colspan",2);
			f.sa(button,"disabled","");
			f.ac(table, tr);
		}


		f.ac(uBar,table);
		

		f.ac(div,uBar);
		return div;
	}

	move(x,y,speed=null,moveable=true){
		if(moveable){
			x = Math.min(this.parentEl.offsetWidth-this.length, Math.max(  0,this.x + x));
			y = Math.min(this.parentEl.offsetHeight-this.height-10,Math.max(  0,this.y + y));
		}
		let delay = 0;
		if(x>this.x && this.dir==0){
			delay = 2000;
			this.dir = 1;
			this.el.style.transitionDuration="2s";
			this.el.style.transform=" perspective(400px) rotateY(180deg)";
		}else
		if(x<this.x && this.dir==1){
			delay = 2000;
			this.dir = 0;
			this.el.style.transitionDuration="2s";
			this.el.style.transform=" perspective(400px) rotateY(0deg)";
		}

		let distance = speed?1000/speed:Math.sqrt((this.x-x)*(this.x-x)+(this.y-y)*(this.y-y));
		// let rotate = ( (this.x<=x)?Math.atan((y-this.y)/(x-this.x)):Math.atan((y-this.y)/(x-this.x))+Math.PI );
		this.x = x|0;
		this.y = y|0;
		setTimeout(()=>{
			this.elWrap.style.transitionDuration=Math.max(distance/40|0,1)+"s";
			this.elWrap.style.left = this.x +"px";
			this.elWrap.style.top = this.y +"px";

			try{
				window.clearTimeout(this.timeoutMove);
			}catch(e){}
			this.timeoutMove = window.setTimeout(()=>{

				let X = this.nextPos && this.nextPos.x!=undefined?this.nextPos.x-this.x:this.parentEl.offsetWidth*(Math.random()-.5);
				let Y = this.nextPos && this.nextPos.y!=undefined?this.nextPos.y-this.y:this.parentEl.offsetHeight*(Math.random()-.5);
				// console.log(X,Y);
				this.nextPos = null;

				if(moveable){
					if(this.dontMove){
						this.onDontMove();
					}else{
						this.move(X, Y);
					}
				}
			},distance*25+500+2500*Math.random());

		},delay+1);

	}
	onDontMove(){

	}

	onclick(e){
	}

	addNotif(){
		this.notif = this.notif || f.ce("div");
		this.notif.innerText = "!";
		f.sa(this.notif,"class","notif");
		if(!this.hasNotif()){
			f.ac(this.elWrap,this.notif);
		}
	}

	hasNotif(){
		return this.elWrap.contains(this.notif);
	}

	clearNotif(){
		try{
			f.rc(this.elWrap,this.notif);
		}catch(e){}
	}

}

/////////////////////////////////////////////////////////////////////////////////


class Ikan2 extends Ikan{
	constructor(...args){
		super(...args);
		let lastClaim = this.lastClaim;
		this.lastClaim = [];
		for(let i in this.claimBase)this.lastClaim.push(lastClaim);
	}


	prepareAnim(){
		// console.log("anim ikan 2");
		// console.log(this.img);
		this.elWrap = f.ce("div");
		f.sa(this.elWrap,"class","ikan");
		f.sa(this.elWrap,"style","z-index:9;");
		this.elWrap.style.height = this.height+"px";
		this.elWrap.style.width = this.length+"px";

		this.el = f.ce("div");
		f.sa(this.el,"class","ikan");
		this.el.style.height = this.height+"px";
		this.el.style.width = this.length+"px";

		this.el.style.transform=" perspective(400px) rotateY("+(180*this.dir|0)+"deg)";
		let el = this.el;
		length = this.length / 5;
		for(let i=0;i<5;i++){
			f.ac(el,f.ce("div"));
			el = el.childNodes[0];
			f.sa(el,"class","ruas");
			el.style.width = (length+1)+"px";
			el.style.left = (i?length:0)+"px";
			el.style.height = this.height+"px";
			el.style.backgroundImage = "url('data:image/svg+xml;utf8, "+IMG.fishs[this.img]+"')";
			el.style.backgroundPosition = (-length*i)+"px 0";
			el.style.animationDuration = (1+3*this.length/200)+"s";
		}
		this.elWrap.style.left = this.x +"px";
		this.elWrap.style.top = this.y +"px";

		f.ac(this.elWrap,this.el);
		f.ac(this.parentEl,this.elWrap);

	}

	paperClaim(game,force=false){
		let now = new Date();
		// console.log("claim");
		for(let i in this.claimBase){
			if(now.getTime() - this.lastClaim[i]>=3000 || force){
				// console.log("try to claim "+this.curr[i] );
				let claimed = this.claimBase[i]*this.level*(Math.min(now.getTime(),this.timeCreated+this.lifeSpan) - this.lastClaim[i])/10000|0;
				if(claimed>0){
					// console.log("claimed "+this.curr[i] );
					game.paper[this.curr[i]] += claimed;
					this.lastClaim[i] = now.getTime();
				}
			}
			game.viewPaper();
		}
	}



	save(){
		// console.log("save ikan 2");
		let param = [
			this.timeCreated,
			this.type,
			this.level,
			[...this.lastClaim],
			this.v
		];

		return param;
	}



	viewStats(game){
		let div = f.ce("div");

		let uBar = f.ce("div");
		let aquaMini = f.ce("div");
		f.sa(aquaMini,"class","aquaMini");
		f.ac(uBar,aquaMini);
		let ikan = new Ikan2((160-this.length)/2,(100-this.height)/2,aquaMini, this.length, this.height, this.type,false,false,this.level);

		let table = f.ce("table"),tr,td;


		tr = f.ce("tr");
		td = f.ce("td");
		td.innerHTML = "Level &nbsp;&nbsp;&nbsp;&nbsp;";
		f.ac(tr, td);
		td = f.ce("td");
		td.innerText = this.level+"/"+this.maxLevel;
		f.ac(tr, td);
		f.ac(table, tr);

		tr = f.ce("tr");
		td = f.ce("td");
		td.innerText = "Life ";
		f.ac(tr, td);
		td = f.ce("td");
		f.ac(td,this.lifeBar());
		f.ac(tr, td);
		f.ac(table, tr);

		
		tr = f.ce("tr");
		td = f.ce("td");
		td.innerHTML = "Paper";
		f.ac(tr, td);
		td = f.ce("td");
		for(let i in this.claimBase){
			td.innerHTML += " <img src='"+IMG.icon._plus(IMG.icon.paper)+"' class='icon coin"+this.curr[i]+"'>"+(this.claimBase[i]*this.level*6)+"/min<br>";
		}
		f.ac(tr, td);
		f.ac(table, tr);


		if(this.level < this.maxLevel){
			let lvlUpCost = Math.pow(2,this.level)*this.lvlUpCost;
			tr = f.ce("tr");
			td = f.ce("td");
			let button = f.ce("button");
			button.innerHTML = "Lvl. Up<br><img src='"+IMG.icon.money+"' class='icon'>"+f.numFormat(lvlUpCost);
			f.ac(td, button);
			f.ac(tr, td);
			f.sa(td,"colspan",2);

			let saya = this;
			let onclick = function(){
				saya.levelUp(game);
				
				if(game.uang<lvlUpCost){
					f.sa(button,"disabled","");
				}else{
					f.ra(button,"disabled");
				}

				// console.log(game.ikan.indexOf(saya));
				if(game.ikan.indexOf(saya)!=-1){
					game.uang -= lvlUpCost;
				}else{
					game.hideModal();
				}

				ikan.kill();
				// game.hideModal();
				game.el.content.innerHTML = "";
				f.ac(game.el.content, saya.viewStats(game));

				game.viewMoney();

				if(0)
				window.setTimeout(()=>{
					game.el.content.innerHTML = "";
					f.ac(game.el.content, saya.viewStats(game));
					game.showModal(saya.name+" Fish");
				},500);
			}
			button.onclick = onclick;

			if(game.uang<lvlUpCost){
				f.sa(button,"disabled","");
			}



			let update = window.setInterval(()=>{
				try{
					if(game.uang<lvlUpCost){
						f.sa(button,"disabled","");
					}else{
						f.ra(button,"disabled");
					}
				}catch(e){
					console.log(e);
				}
			}, 1000);

			game.onModalRemoved.push(()=>{window.clearInterval(update)});

			if(game.uang<lvlUpCost){
				f.sa(button,"disabled","");
			}

			f.ac(table, tr);
		}
		else{
			tr = f.ce("tr");
			td = f.ce("td");
			let button = f.ce("button");
			button.innerHTML = " Level <br> Maxed ";
			f.ac(td, button);
			f.ac(tr, td);
			f.sa(td,"colspan",2);
			f.sa(button,"disabled","");
			f.ac(table, tr);
		}


		f.ac(uBar,table);
		

		f.ac(div,uBar);
		return div;
	}







}