var tankItems = {
	grass :{
		name :"Grass",
		type :"grass",
		price:{B:1},
		money:2,
		width :"100%",
		height :"30px",
		el : (i=f.ce("div"))&&(f.sa(i,"style","position:absolute;bottom:0;left:0px;width:100%;height:30px;background-image:url('../img/t2.svg');background-size:30px;background-repeat:repeat-x")||1)&&i
	},
	rocks :{
		name :"Rocks",
		type :"rocks",
		price:{B:100000,R:200000},
		money:2,
		width :"100px",
		height :"125px",
		el : (i=f.ce("div"))&&(f.sa(i,"style","position:absolute;bottom:0;left:0px;width:100px;height:125px;background-image:url('../img/t3.svg');background-size:cover;background-repeat:none")||1)&&i
	}
};
var tankItemsShop = [
	"grass","rocks"
];

class Tank{
	constructor(game,type,left=0){
		this.game = game;
		this.game.tankItemsUnlocked = this.game.tankItemsUnlocked || [];
		this.game.tankItems = this.game.tankItems || [];

		this.type = type;
		this.left = left;
		let i = null;


		if(tankItems[type] && this.game.tankItemsUnlocked.indexOf(this.type)!==-1){
			let isUsed=false;
			let saya = this;
			this.game.tankItems.map(el=>el && el.item && el.item.type==saya.type && (isUsed=true) );

			if(isUsed){

			}else{
				this.elWrap = f.ce("div");
				f.sa(this.elWrap,"class","tankItems");

				// console.log(this.type);
				f.ac(this.elWrap,tankItems[this.type].el.cloneNode(true));
				this.elWrap.style.width = tankItems[this.type].width;
				this.elWrap.style.height = tankItems[this.type].height;
				this.elWrap.style.left = this.left+"px";
				// this.elWrap.style.zIndex = this.game.tankItems.length;

				f.ac(this.game.el.amb,this.elWrap);
				this.game.tankItems.push({
					item:this,
					index:this.game.tankItems.length
				});

				let saya = this;
				saya.claimMoney=tankItems[saya.type].money;
				this.claimingInterval = window.setInterval(()=>{
					saya.game.uang+=saya.claimMoney;
					saya.game.viewMoney();
				},3000);
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

		if(tankItems[this.type].width.slice(-2)=="px"){
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