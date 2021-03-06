GLOBAL =GLOBAL||{};
GLOBAL.tankItems = {
	grass :{
		name :"Grass",
		type :"grass",
		price:{B:50000,Y:50000},
		money:2,
		minGlassLvl:0,
		width :"100%",
		height :"15px",
		el : (i=f.ce("div"))&&(f.sa(i,"style","position:absolute;bottom:0;left:0px;width:100%;height:15px;background-image:url('"+IMG.tank.grass+"');background-size:15px;background-repeat:repeat-x")||1)&&i
	},
	rocks :{
		name :"Rocks",
		type :"rocks",
		price:{B:100000,R:100000},
		money:2,
		minGlassLvl:0,
		width :"100px",
		height :"125px",
		el : (i=f.ce("div"))&&(f.sa(i,"style","position:absolute;bottom:0;left:0px;width:100px;height:125px;background-image:url('"+IMG.tank.rocks+"');background-size:cover;background-repeat:no-repeat")||1)&&i
	},
	pagoda :{
		name :"Pagoda",
		type :"pagoda",
		price:{R:200000,Y:100000},
		money:3,
		minGlassLvl:5,
		width :"120px",
		height :"300px",
		el : (i=f.ce("div"))&&(f.sa(i,"style","position:absolute;bottom:0;left:0px;width:120px;height:300px;background-image:url('"+IMG.tank.pagoda+"');background-size:cover;background-repeat:no-repeat")||1)&&i
	},
	house :{
		name :"House",
		type :"house",
		price:{B:10000,R:5000},
		money:1,
		minGlassLvl:0,
		width :"80px",
		height :"70px",
		el : (i=f.ce("div"))&&(f.sa(i,"style","position:absolute;bottom:0;left:0px;width:80px;height:70px;background-image:url('"+IMG.tank.house+"');background-size:cover;background-repeat:no-repeat")||1)&&i
		// el : (i=f.ce("div"))&&(f.sa(i,"style","position:absolute;bottom:0;left:0px;width:80px;height:60px;background-image:url('data:image/svg+xml;utf8,"+IMG.fishs.A+"');background-size:cover;background-repeat:none")||1)&&i
	},
	sand :{
		name :"Sand",
		type :"sand",
		price:{R:1000,Y:5000},
		money:1,
		minGlassLvl:0,
		width :"100%",
		height :"40px",
		el : (i=f.ce("div"))&&(f.sa(i,"style","position:absolute;bottom:0;left:0px;width:100%;height:100%;background-image:url('"+IMG.tank.sand+"');background-size:100%;background-repeat:no-repeat;background-position:50% 100%;")||1)&&i
		// el : (i=f.ce("div"))&&(f.sa(i,"style","position:absolute;bottom:0;left:0px;width:100%;height:100%;background-image:url('../img/t7.svg');background-size:100%;background-repeat:no-repeat;background-position:50% 100%;")||1)&&i
	},
	chest :{
		name :"Treasure Chest",
		type :"chest",
		price:{Y:300000},
		money:4,
		minGlassLvl:0,
		width :"95px",
		height :"60px",
		el : (i=f.ce("div"))&&(f.sa(i,"style","position:absolute;bottom:0;left:0px;width:95px;height:60px;background-image:url('"+IMG.tank.chest+"');background-size:cover;background-repeat:no-repeat;")||1)&&i
		// el : (i=f.ce("div"))&&(f.sa(i,"style","position:absolute;bottom:0;left:0px;width:95px;height:60px;background-image:url('../img/t8.svg');background-size:cover;background-repeat:no-repeat;")||1)&&i
	},
	name :{
		name :"Your Name",
		type :"name",
		price:{B:300000,Y:50000},
		money:2,
		minGlassLvl:3,
		width :"180px",
		height :"165px",
		onload :function(g,el){
			el = el || f.ce("div");
			let textPanel = el.querySelector(".yourName");
			let text = el.querySelector(".yourName .textPanel .text");
			try{text.childNodes[0].innerText = (g && g.username) || window.kongVars.username;}catch(e){}
			// console.log(text.offsetWidth ,text.childNodes[0].offsetWidth , textPanel.offsetWidth)
			if(text.childNodes[0].offsetWidth > text.offsetWidth){
				text.style.transform = "scale("+((text.offsetWidth/text.childNodes[0].offsetWidth))+",1)";
				// text.childNodes[0].style.transform = "scale("+(textPanel.offsetWidth/text.childNodes[0].offsetWidth)+",1)";
				text.style.transformOrigin = "left";
				text.style.textAlign = "left";
			}
		},
		el : (i=f.ce("div"))&&(f.sa(i,"class","yourName")||1)&&(f.ac(i, (j=f.ce("div"))&&(f.sa(j,"class","textPanel")||1)&&(f.ac(j, (k=f.ce("div"))&&(f.sa(k,"class","text")||1)&&(f.ac(k, (l=f.ce("span"))&&(l.innerText="Someone")&&l )||1) &&k )||1) &&j )||1)&&i
	},
	pumpkin :{
		name :"Jack",
		type :"pumpkin",
		price:{R:300000,Y:100000},
		money:2,
		minGlassLvl:0,
		width :"80px",
		height :"80px",
		onload :function(g,el){
			el.childNodes[0].style.opacity = 1;

			window.setTimeout(function(){
				el.childNodes[0].style.opacity = "";
			},3000);
		},
		el : (i=f.ce("div"))&&(f.sa(i,"class","pumpkin")||1)&&(i.style.backgroundImage="url('"+IMG.tank.pumpkin1+"')")&&(f.ac(i, (j=f.ce("div"))&&(f.sa(j,"class","yyy")||1)&&(j.style.backgroundImage="url('"+IMG.tank.pumpkin2+"')")&&j )||1)&&i
	}
};
GLOBAL.tankItemsShop = [
	// "grass","rocks","pagoda","house","sand","name","pumpkin"
	"grass","rocks","pagoda","house","sand","name"
];

class Tank{
	constructor(game,type,left=0){
		this.game = game;
		this.game.tankItemsUnlocked = this.game.tankItemsUnlocked || [];
		this.game.tankItems = this.game.tankItems || [];

		this.type = type;
		this.left = left;
		let i = null;


		if(GLOBAL.tankItems[type] && this.game.tankItemsUnlocked.indexOf(this.type)!==-1){
			if(this.game.glassLvl<(GLOBAL.tankItems[type].minGlassLvl || 1))return;

			let isUsed=false;
			let saya = this;
			this.game.tankItems.map(el=>el && el.item && el.item.type==saya.type && (isUsed=true) );

			if(isUsed){

			}else{
				this.elWrap = f.ce("div");
				f.sa(this.elWrap,"class","tankItems");

				// console.log(this.type);
				let el = GLOBAL.tankItems[this.type].el.cloneNode(true);
				f.ac(this.elWrap,el);
				this.elWrap.style.width = GLOBAL.tankItems[this.type].width;
				this.elWrap.style.height = GLOBAL.tankItems[this.type].height;
				this.elWrap.style.left = this.left+"px";
				// this.elWrap.style.zIndex = this.game.tankItems.length;

				f.ac(this.game.el.amb,this.elWrap);
				this.game.tankItems.push({
					item:this,
					index:this.game.tankItems.length
				});

				let saya = this;
				saya.claimMoney=GLOBAL.tankItems[saya.type].money;
				this.claimingInterval = window.setInterval(()=>{
					saya.game.uang+=saya.claimMoney;
					saya.game.viewMoney();
				},3000);

				(GLOBAL.tankItems[this.type].onload||function(){})(null,el);
			}

		}
	}

	kill(){
		try{
			f.rc(this.game.el.amb, this.elWrap);
		}catch(e){
			console.log("Tank::kill()");
			console.log(e);
		}

		try{
			window.clearInterval(this.claimingInterval);
		}catch(e){}

		let newTankItems = [];
		for(let i in this.game.tankItems){
			if(!this.game.tankItems[i])continue;
			if(this.game.tankItems[i].item.type==this.type){
				// this.game.tankItems[i]=null;
			}else{
				newTankItems.push({
					item:this.game.tankItems[i].item,
					index:newTankItems.length
				});
			}
		}
		this.game.tankItems = newTankItems;
	}

	configure(){
		let saya=this;
		let vars={};
		let modal = f.ce("div");
		f.sa(modal,"class","modal");
		let idx=-1;
		(saya.game.tankItems || []).map((el, i)=>el && el.item.type==saya.type && (idx=i));
		if(idx==-1)return;

		// this.game.el.glass.style.zIndex=10;

		if(GLOBAL.tankItems[this.type].width.slice(-2)=="px"){
			let divPos = f.ce('div');
			f.sa(divPos,"class","setPositionPanel");
			divPos.style.textAlign="center";
			divPos.style.width = this.game.el.glass.offsetWidth+"px";
			divPos.style.paddingLeft=this.elWrap.offsetWidth/2|0+"px";
			let input = f.ce("input");
			f.sa(input,"type","range");
			f.sa(input,"min","0");
			f.sa(input,"step","1");
			f.sa(input,"max",this.game.el.amb.offsetWidth-this.elWrap.offsetWidth);
			input.value=this.left;
			input.style.width=this.game.el.amb.offsetWidth-this.elWrap.offsetWidth+"px";
			input.oninput = function(e){
				vars.left = this.value;
				// console.log(vars.left);
				saya.elWrap.style.left=vars.left+"px";
			};
			f.ac(divPos,input);
			f.ac(modal,divPos);
		}


		// buttons
		let divButtons = f.ce("div");
		f.sa(divButtons,"class","rightButtonsPanel");
		// Z index sort UP
		let buttonUp = f.ce("button");
		buttonUp.innerHTML="Move forward";
		buttonUp.onclick = function(e){
			if(idx==saya.game.tankItems.length-1)return;

			let nextItem = saya.game.tankItems[idx+1].item;
			// nextItem.elWrap.style.zIndex=idx;
			// saya.elWrap.style.zIndex=idx+1;
			
			saya.game.tankItems[idx+1].item=saya;
			saya.game.tankItems[idx].item=nextItem;
			idx++;
			saya.normalizeElWrap();
		};
		f.ac(divButtons,buttonUp);
		f.ac(divButtons,f.ce('br'));
		// Z index sort DOWN
		let buttonDown = f.ce("button");
		buttonDown.innerHTML="Move backward";
		buttonDown.onclick = function(e){
			if(idx==0)return;

			let prevItem = saya.game.tankItems[idx-1].item;
			// prevItem.elWrap.style.zIndex=idx;
			// saya.elWrap.style.zIndex=idx-1;
			
			saya.game.tankItems[idx-1].item=saya;
			saya.game.tankItems[idx].item=prevItem;
			idx--;
			saya.normalizeElWrap();
		};
		f.ac(divButtons,buttonDown);
		f.ac(divButtons,f.ce('br'));
		// button.save
		let buttonSave = f.ce("button");
		f.sa(buttonSave,"class","green");
		buttonSave.innerHTML="Done";
		buttonSave.onclick = function(e){
			if(vars.left)saya.left=vars.left;
			saya.normalizeElWrap();
			try{
				f.rc(saya.game.parentEl, modal);
			}catch(err){
				console.log(err);
			}
		};
		f.ac(divButtons,buttonSave);
		// button.cancel
		let buttonCancel = f.ce("button");
		f.sa(buttonCancel,"class","red");
		buttonCancel.innerHTML="Cancel";
		buttonCancel.onclick = function(e){
			saya.elWrap.style.left=saya.left+"px";
			// saya.game.el.glass.style.zIndex='';
			try{
				f.rc(saya.game.parentEl, modal);
			}catch(err){
				console.log(err);
			}
		};
		// f.ac(divButtons,buttonCancel);
		//
		f.ac(modal,divButtons);

		f.ac(this.game.parentEl, modal);
	}


	normalizeElWrap(){
		this.game.el.amb.innerHTML="";
		this.game.tankItems.sort((a,b)=>b.index<a.index?1:-1).map(e=>f.ac(this.game.el.amb,e.item.elWrap));
	}

	save(){
		return [this.type,this.left];
	}

}