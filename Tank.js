class Tank{
	constructor(game,type){
		this.game = game;
		this.type = type;
		this.left = 0;
		let i = null;

		this.tankItems = {
			grass :{
				name :"grass",
				width :"100%",
				height :"30px",
				el : (i=f.ce("div"))&&(f.sa(i,"style","position:absolute;bottom:0;left:0px;width:100%;height:30px;background-image:url('../img/t2.svg');background-size:30px;background-repeat:repeat-x")||1)&&i
			}
		};

		this.elWrap = f.ce("div");
		f.sa(this.elWrap,"class","tankItems");

		f.ac(this.elWrap,this.tankItems[type].el);
		this.elWrap.style.width = this.tankItems[type].width;
		this.elWrap.style.height = this.tankItems[type].height;
		this.elWrap.style.left = this.tankItems[type].left;

		f.ac(this.game.el.amb,this.elWrap);
	}

}