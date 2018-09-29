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
		// console.log(fishVar);
		for(let i of Object.keys(fishVar)){
			this[i] = fishVar[i];
		}




		length = this.length;
		height = this.height;

		this.parentEl = parentEl;
		this.speed = 50;

		this.prepareAnim();

		// this.elWrap = f.ce("div");
		// f.sa(this.elWrap,"class","ikan");
		// f.sa(this.elWrap,"style","z-index:6;");
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

		f.ac(this.elWrap, this.el);
		f.ac(parentEl, this.elWrap);
		var onclick = function onclick(e) {
			_this.onclick(e);
		};
		this.elWrap.addEventListener("click", onclick);
		// this.elWrap.onclick = this.onclick;

		if (moveable) {
			this.move(x - this.x, y - this.y, 10);
		}

		if (enableNotif) {}
	}

	_createClass(Craft, [{
		key: "prepareAnim",
		value: function prepareAnim() {
			this.elWrap = f.ce("div");
			f.sa(this.elWrap, "class", "ikan");
			f.sa(this.elWrap, "style", "z-index:6;");
			this.elWrap.style.height = this.height + "px";
			this.elWrap.style.width = this.length + "px";

			this.el = f.ce("div");
			f.sa(this.el, "class", "ikan");
			this.el.style.height = this.height + "px";
			this.el.style.width = this.length + "px";

			this.el.style.transform = " perspective(400px) rotateY(" + (180 * this.dir | 0) + "deg)";
			var el = this.el;
			length = this.length / 5;
			for (var i = 0; i < 5; i++) {
				f.ac(el, f.ce("div"));
				el = el.childNodes[0];
				f.sa(el, "class", "ruas");
				el.style.width = length + 1 + "px";
				el.style.left = (i ? length : 0) + "px";
				el.style.height = this.height + "px";
				el.style.backgroundImage = "url('data:image/svg+xml;utf8, " + IMG.fishs[this.type] + "')";
				el.style.backgroundPosition = -length * i + "px 0";
				el.style.animationDuration = 1 + 3 * this.length / 200 + "s";
			}
			this.elWrap.style.left = this.x + "px";
			this.elWrap.style.top = this.y + "px";

			f.ac(this.elWrap, this.el);
			f.ac(this.parentEl, this.elWrap);
		}
	}, {
		key: "intervalFunction",
		value: function intervalFunction(game) {
			var saya = this;

			this.functionInterval = window.setInterval(function () {
				saya.function(game, saya);

				// saya.el.style.animation = null;
				// let shine =()=>{
				// 	saya.el.style.animation = "shine 1s";
				// };
				// setTimeout(shine,100);
			}, this.delay);
		}
	}, {
		key: "move",
		value: function move(x, y) {
			var _this2 = this;

			var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
			var moveable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

			if (moveable) {
				x = Math.min(this.parentEl.offsetWidth - this.length, Math.max(0, this.x + x));
				y = Math.min(this.parentEl.offsetHeight - this.height, Math.max(100, this.y + y));
			}
			var delay = 0;
			if (x > this.x && this.dir == 0) {
				delay = 2000;
				this.dir = 1;
				this.el.style.transitionDuration = "2s";
				this.el.style.transform = " perspective(400px) rotateY(180deg)";
			} else if (x < this.x && this.dir == 1) {
				delay = 2000;
				this.dir = 0;
				this.el.style.transitionDuration = "2s";
				this.el.style.transform = " perspective(400px) rotateY(0deg)";
			}

			var distance = speed ? 1000 / speed : Math.sqrt((this.x - x) * (this.x - x) + (this.y - y) * (this.y - y));
			// let rotate = ( (this.x<=x)?Math.atan((y-this.y)/(x-this.x)):Math.atan((y-this.y)/(x-this.x))+Math.PI );
			this.x = x | 0;
			this.y = y | 0;
			setTimeout(function () {
				_this2.elWrap.style.transitionDuration = Math.max(distance / 40 | 0, 1) + "s";
				_this2.elWrap.style.left = _this2.x + "px";
				_this2.elWrap.style.top = _this2.y + "px";
				setTimeout(function () {
					if (moveable) {
						_this2.move(_this2.parentEl.offsetWidth * (Math.random() - .5), _this2.parentEl.offsetHeight * (Math.random() - .5));
					}
				}, distance * 25 + 500 + 2500 * Math.random());
			}, delay + 1);
		}
	}, {
		key: "onclick",
		value: function onclick(e) {}
	}, {
		key: "kill",
		value: function kill() {
			var game = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			try {
				window.clearInterval(this.functionInterval);
			} catch (e) {}
			this.el.classList.add("death");

			if (game) {
				var idx = game.craft.indexOf(this.type);
				if (idx != -1) {
					game.craft.splice(idx, 1);
					game.craftObj.splice(idx, 1);
				}
			}

			var saya = this;
			window.setTimeout(function () {
				saya.elWrap.outerHTML = "";
			}, this.elWrap.style.transitionDuration.slice(0, -1) * 1000);
		}
	}, {
		key: "hint",
		value: function hint(game) {

			var length = this.length;
			var height = this.height;

			this.elWrap.style.height = height + "px";
			this.elWrap.style.width = length + "px";

			this.el.style.height = height + "px";
			this.el.style.width = length + "px";

			length /= 5;
			var els = this.el.querySelectorAll(".ikan .ikan .ruas");

			for (var i in els) {
				if (!els[i].style) {
					continue;
				}
				els[i].style.width = length + 1 + "px";
				els[i].style.left = (parseInt(i) ? length : 0) + "px";
				els[i].style.height = height + "px";
				els[i].style.backgroundPosition = -length * i + "px 0";
				els[i].style.animationDuration = 1 + 3 * this.length / 200 + "s";
				els[i].style.backgroundImage = "url('data:image/svg+xml;utf8, " + IMG.fishs._hint(IMG.fishs[this.type]) + "')";
			}
		}
	}]);

	return Craft;
}();

var CraftV = function (_Craft) {
	_inherits(CraftV, _Craft);

	function CraftV() {
		var _ref;

		_classCallCheck(this, CraftV);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _possibleConstructorReturn(this, (_ref = CraftV.__proto__ || Object.getPrototypeOf(CraftV)).call.apply(_ref, [this].concat(args)));
	}

	_createClass(CraftV, [{
		key: "prepareAnim",
		value: function prepareAnim() {
			this.elWrap = f.ce("div");
			f.sa(this.elWrap, "class", "ikan");
			f.sa(this.elWrap, "style", "z-index:6;border:solid 1px;");
			this.elWrap.style.height = this.height + "px";
			this.elWrap.style.width = this.length + "px";

			this.el = f.ce("div");
			f.sa(this.el, "class", "ikan");
			this.el.style.height = this.height + "px";
			this.el.style.width = this.length + "px";

			this.el.style.transform = " perspective(400px) rotateY(" + (180 * this.dir | 0) + "deg)";
			var el = this.el;
			length = this.length / 5;
			for (var i = 0; i < 5; i++) {
				f.ac(el, f.ce("div"));
				el = el.childNodes[0];
				f.sa(el, "class", "ruas");
				el.style.width = length + 1 + "px";
				el.style.left = (i ? length : 0) + "px";
				el.style.height = this.height + "px";
				el.style.backgroundImage = "url('data:image/svg+xml;utf8, " + IMG.fishs[this.type] + "')";
				el.style.backgroundPosition = -length * i + "px 0";
				el.style.animationDuration = 1 + 3 * this.length / 200 + "s";
			}
			this.elWrap.style.left = this.x + "px";
			this.elWrap.style.top = this.y + "px";

			f.ac(this.elWrap, this.el);
			f.ac(this.parentEl, this.elWrap);
		}
	}]);

	return CraftV;
}(Craft);