class Craft {
	constructor(x,y,parentEl,length=200,height=100,type="N",moveable=true,enableNotif=true){
		let saya = this;
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
			this.dir=0;
		}else{
			this.x = (parentEl.offsetWidth/2|0||0);
			this.y = -200;
			this.dir=x<this.x?0:1;
		}


		let fishVar = fishCraft[type]||fishs["B"];
		for(let i of Object.keys(fishVar)){
			this[i] = fishVar[i];
		}
		this.img = this.img || this.type;
		this.areaLimit = this.areaLimit || [0,100,-1,-1];
		this.dirLock = this.dirLock || false;




		length = this.length;
		height = this.height;

		this.parentEl = parentEl;
		this.speed = 50;

		this.prepareAnim(this);

		f.ac(this.elWrap,this.el);
		f.ac(parentEl,this.elWrap);
		let onclick =e=>{
			this.onclick(e);
		};
		this.elWrap.addEventListener("click", onclick);
		// this.elWrap.onclick = this.onclick;

		if(moveable){
			this.move(x-this.x, y-this.y,10)
		}

		if(enableNotif){
		}

	}
	moveArea(x,y){
		let minx = Math.max(this.length,this.areaLimit[0]);
		let miny = this.areaLimit[1];
		let maxx = Math.min(this.parentEl.offsetWidth ,this.areaLimit[2]==-1?this.parentEl.offsetWidth :this.areaLimit[2]);
		let maxy = Math.min(this.parentEl.offsetHeight,this.areaLimit[3]==-1?this.parentEl.offsetHeight:this.areaLimit[3]);

		x = Math.min(maxx-this.length, Math.max(minx,this.x + x));
		y = Math.min(maxy-this.height,Math.max(miny,this.y + y));
		return [x,y];
	}

	prepareAnim(saya){
		saya = saya || this;
		saya.elWrap = f.ce("div");
		f.sa(saya.elWrap,"class","ikan");
		f.sa(saya.elWrap,"style","z-index:6;");
		saya.elWrap.style.height = saya.height+"px";
		saya.elWrap.style.width = saya.length+"px";

		saya.el = f.ce("div");
		f.sa(saya.el,"class","ikan");
		saya.el.style.height = saya.height+"px";
		saya.el.style.width = saya.length+"px";

		saya.el.style.transform=" perspective(400px) rotateY("+(180*saya.dir|0)+"deg)";
		let el = saya.el;
		length = saya.length / 5;
		for(let i=0;i<5;i++){
			f.ac(el,f.ce("div"));
			el = el.childNodes[0];
			f.sa(el,"class","ruas");
			el.style.width = (length+1)+"px";
			el.style.left = (i?length:0)+"px";
			el.style.height = saya.height+"px";
			el.style.backgroundImage = "url('data:image/svg+xml;utf8, "+IMG.fishs[saya.img]+"')";
			el.style.backgroundPosition = (-length*i)+"px 0";
			el.style.animationDuration = (1+3*saya.length/200)+"s";
		}
		saya.elWrap.style.left = saya.x +"px";
		saya.elWrap.style.top = saya.y +"px";

		f.ac(saya.elWrap,saya.el);
		f.ac(saya.parentEl,saya.elWrap);

	}


	intervalFunction(game){
		let saya = this;

		this.functionInterval = window.setInterval(()=>{
			saya.function(game,saya);

			// saya.el.style.animation = null;
			// let shine =()=>{
			// 	saya.el.style.animation = "shine 1s";
			// };
			// setTimeout(shine,100);

		},this.delay);
	}


	move(x,y,speed=null,moveable=true){
		if(moveable){
			// x = Math.min(this.parentEl.offsetWidth-this.length, Math.max(  0,this.x + x));
			// y = Math.min(this.parentEl.offsetHeight-this.height,Math.max(100,this.y + y));
			[x,y] = this.moveArea(x,y);
		}
		let delay = 0;
		if(x>this.x && this.dir==0){
			delay = 2000;
			this.dir = 1;
			this.el.style.transitionDuration="2s";
			this.el.style.transform=" perspective(400px) "+(this.dirLock?"":"rotateY(180deg)");
		}else
		if(x<this.x && this.dir==1){
			delay = 2000;
			this.dir = 0;
			this.el.style.transitionDuration="2s";
			this.el.style.transform=" perspective(400px) "+(this.dirLock?"":"rotateY(0deg)");
		}

		let distance = speed?1000/speed:Math.sqrt((this.x-x)*(this.x-x)+(this.y-y)*(this.y-y));
		// let rotate = ( (this.x<=x)?Math.atan((y-this.y)/(x-this.x)):Math.atan((y-this.y)/(x-this.x))+Math.PI );
		this.x = x|0;
		this.y = y|0;
		setTimeout(()=>{
			this.elWrap.style.transitionDuration=Math.max(distance/40|0,1)+"s";
			this.elWrap.style.left = this.x +"px";
			this.elWrap.style.top = this.y +"px";
			setTimeout(()=>{
				if(moveable){
					this.move(this.parentEl.offsetWidth*(Math.random()-.5),	this.parentEl.offsetHeight*(Math.random()-.5))
				}
			},distance*25+500+2500*Math.random());
		},delay+1);

	}
	
	onclick(e){
	}


	kill(game=null){
		try{
			window.clearInterval(this.functionInterval);
		}catch(e){}
		this.el.classList.add("death");

		if(game){
			this.function1(game);
			let idx = game.craft.indexOf(this.type);
			if(idx!=-1){
				game.craft.splice(idx,1);
				game.craftObj.splice(idx,1);
			}
		}

		let saya = this;
		window.setTimeout(function(){
			saya.elWrap.outerHTML = "";
		},this.elWrap.style.transitionDuration.slice(0,-1)*1000);
	}



	hint(game){

		// let length = this.length
		// let height = this.height

		// this.elWrap.style.height = height+"px";
		// this.elWrap.style.width = (length)+"px";

		// this.el.style.height = height+"px";
		// this.el.style.width = (length)+"px";

		// length /= 5;
		let els = this.el.querySelectorAll(".ikan .ikan .ruas");

		for(let i in els){
			if(!els[i].style){
				continue;
			}
			// els[i].style.width = (length+1)+"px";
			// els[i].style.left = (parseInt(i)?length:0)+"px";
			// els[i].style.height = height+"px";
			// els[i].style.backgroundPosition = (-length*i)+"px 0";
			// els[i].style.animationDuration = (1+3*this.length/200)+"s";
			els[i].style.backgroundImage = "url('data:image/svg+xml;utf8, "+IMG.fishs._hint(IMG.fishs[this.img])+"')";
		}

		els = this.el.querySelectorAll(".weed .weed .daun");
		for(let i in els){
			if(!els[i].style){
				continue;
			}
			els[i].style.backgroundImage = "url('data:image/svg+xml;utf8, "+IMG.fishs._hint(IMG.fishs[this.img])+"')";
		}
		

	}

}



class CraftV extends Craft{
	constructor(...args){
		super(...args);
	}


	prepareAnim(){
		this.elWrap = f.ce("div");
		f.sa(this.elWrap,"class","ikan");
		f.sa(this.elWrap,"style","z-index:6;border:solid 1px;");
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
}