"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ikan = function () {
	function Ikan(x, y, parentEl) {
		var length = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 200;
		var height = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
		var type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "N";
		var moveable = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
		var enableNotif = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;

		var _this = this;

		var level = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
		var dir = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;

		_classCallCheck(this, Ikan);

		if (moveable) {
			x = Math.max(0, Math.min((parentEl.offsetWidth || 0) - length, x));
			y = Math.max(100, Math.min((parentEl.offsetHeight || 0) - height, y));
		}

		var now = new Date();
		this.lastClaim = now.getTime();
		this.timeCreated = now.getTime();

		// console.log(parentEl.offsetWidth, parentEl.offsetHeight);
		// console.log(x,y);

		if (!moveable) {
			this.x = x | 0;
			this.y = y | 0;
			this.dir = dir || 0;
		} else {
			this.x = parentEl.offsetWidth / 2 | 0 || 0;
			this.y = -200;
			this.dir = x < this.x ? 0 : 1;
		}

		if (!fishs[type]) throw "Undefined ikan";

		var fishVar = fishs[type] || fishs["B"];
		// console.log(fishVar);
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = Object.keys(fishVar)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var i = _step.value;

				this[i] = fishVar[i];
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		this.level = level;

		length = this.lvlUpVar.base[0] + this.level * this.lvlUpVar.inc[0];
		height = this.lvlUpVar.base[1] + this.level * this.lvlUpVar.inc[1];

		this.maxLevel = 10;
		this.parentEl = parentEl;
		this.speed = 50;
		this.length = length;
		this.height = height;
		this.nextPos = null;

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
		var onclick = function onclick(e) {
			_this.onclick(e);
		};
		this.elWrap.addEventListener("click", onclick);
		// this.elWrap.onclick = this.onclick;

		if (moveable) {
			this.move(x - this.x, y - this.y, 10);
		}

		if (enableNotif) {

			// let saya = this;
			// let addNotif = function(){
			// 	saya.addNotif();
			// }
			// window.setTimeout(addNotif, this.timeToClaim - now);
		}
	}

	_createClass(Ikan, [{
		key: "prepareAnim",
		value: function prepareAnim() {
			this.elWrap = f.ce("div");
			f.sa(this.elWrap, "class", "ikan");
			f.sa(this.elWrap, "style", "z-index:9;");
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
		key: "paperIntervalClaim",
		value: function paperIntervalClaim(game) {
			if (this.claimingInterval) {
				window.clearInterval(this.claimingInterval);
			}

			var saya = this;
			var claim = function claim() {
				saya.paperClaim(game);
			};
			this.claimingInterval = window.setInterval(claim, 3000);
		}
	}, {
		key: "paperClaim",
		value: function paperClaim(game) {
			var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var now = new Date();
			if (now.getTime() - this.lastClaim >= 3000 || force) {
				var claimed = this.claimBase * this.level * (Math.min(now.getTime(), this.timeCreated + this.lifeSpan) - this.lastClaim) / 10000 | 0;
				if (claimed > 0) {
					game.paper[this.type] = parseInt(game.paper[this.type]) + claimed;
					this.lastClaim = now.getTime();
				}
				game.viewPaper();
			}
		}
	}, {
		key: "save",
		value: function save() {
			var param = [this.timeCreated, this.type, this.level, this.lastClaim];

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

	}, {
		key: "kill",
		value: function kill() {
			var game = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			try {
				window.clearInterval(this.claimingInterval);
				this.paperClaim(game, true);
			} catch (e) {}
			this.el.classList.add("death");

			if (game) {
				var idx = game.ikan.indexOf(this);
				if (idx != -1) {
					game.ikan[idx] = null;
				}
			}

			var saya = this;
			window.setTimeout(function () {
				try {
					saya.elWrap.outerHTML = "";
				} catch (e) {}
			}, this.elWrap.style.transitionDuration.slice(0, -1) * 1000);
		}
	}, {
		key: "levelUp",
		value: function levelUp(game) {
			var _this2 = this;

			var saya = this;
			if (this.level >= this.maxLevel) return;
			this.level++;
			try {
				paperClaim(game, true);
			} catch (e) {}

			// test
			if (0) {
				var ikan = null;
				if (this.constructor.name == "Ikan") {
					ikan = new Ikan(this.elWrap.offsetLeft, this.elWrap.offsetTop, this.parentEl, 200, 100, this.type, false, true, this.level, this.dir);
				} else if (this.constructor.name == "Ikan2") {
					ikan = new Ikan2(this.elWrap.offsetLeft, this.elWrap.offsetTop, this.parentEl, 200, 100, this.type, false, true, this.level, this.dir);
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
				this.onDontMove = function () {
					this.dontMove = false;
					this.move(0, 0);
				};

				this.el.style.animation = null;
				var _shine = function _shine() {
					_this2.el.style.animation = "shine 1s";
				};
				setTimeout(_shine, 100);

				return;
			}

			var length = this.lvlUpVar.base[0] + this.level * this.lvlUpVar.inc[0];
			var height = this.lvlUpVar.base[1] + this.level * this.lvlUpVar.inc[1];

			// this.move((this.parentEl.offsetWidth - length)/2 - this.x, (this.parentEl.offsetHeight - height)/2 - this.y, false );

			this.length = length;
			this.height = height;

			this.elWrap.style.height = height + "px";
			this.elWrap.style.width = length + "px";

			this.el.style.height = height + "px";
			this.el.style.width = length + "px";

			// let el = this.el;
			length /= 5;
			var els = this.el.querySelectorAll(".ikan .ikan .ruas");

			// for(let i=0;i<5;i++){
			for (var i in els) {
				if (!els[i].style) {
					// console.log(els[i]);
					continue;
				}
				els[i].style.width = length + 1 + "px";
				els[i].style.left = (parseInt(i) ? length : 0) + "px";
				els[i].style.height = height + "px";
				els[i].style.backgroundPosition = -length * i + "px 0";
				els[i].style.animationDuration = 1 + 3 * this.length / 200 + "s";
			}

			this.el.style.animation = null;
			var shine = function shine() {
				_this2.el.style.animation = "shine 1s";
			};
			setTimeout(shine, 100);
		}
	}, {
		key: "lifeBar",
		value: function lifeBar() {
			var now = new Date();
			var div = f.ce("div");
			f.sa(div, "class", "lifeBar");
			var bar = f.ce("div");
			f.ac(div, bar);
			bar.style.width = ((now.getTime() - this.timeCreated) / this.lifeSpan * 100 | 0) + "%";
			bar.style.transitionDuration = ((-now.getTime() + this.timeCreated + this.lifeSpan) / 998 | 0) + "s";
			// bar.style.transitionDuration = "2s";
			window.setTimeout(function () {
				bar.style.width = "100%";
			}, 1000);
			return div;
		}
	}, {
		key: "viewStats",
		value: function viewStats(game) {
			var div = f.ce("div");

			var uBar = f.ce("div");
			var aquaMini = f.ce("div");
			f.sa(aquaMini, "class", "aquaMini");
			f.ac(uBar, aquaMini);
			var ikan = new Ikan((160 - this.length) / 2, (100 - this.height) / 2, aquaMini, this.length, this.height, this.type, false, false, this.level);

			var table = f.ce("table"),
			    tr = void 0,
			    td = void 0;

			tr = f.ce("tr");
			td = f.ce("td");
			td.innerHTML = "Level &nbsp;&nbsp;&nbsp;&nbsp;";
			f.ac(tr, td);
			td = f.ce("td");
			td.innerText = this.level + "/" + this.maxLevel;
			f.ac(tr, td);
			f.ac(table, tr);

			tr = f.ce("tr");
			td = f.ce("td");
			td.innerText = "Life ";
			f.ac(tr, td);
			td = f.ce("td");
			f.ac(td, this.lifeBar());
			f.ac(tr, td);
			f.ac(table, tr);

			tr = f.ce("tr");
			td = f.ce("td");
			td.innerHTML = "Paper";
			f.ac(tr, td);
			td = f.ce("td");
			td.innerHTML = " <img src='" + IMG.icon._plus(IMG.icon.paper) + "' class='icon coin" + this.type + "'>" + this.claimBase * this.level * 6 + "/min";
			f.ac(tr, td);
			f.ac(table, tr);

			if (this.level < this.maxLevel) {
				var lvlUpCost = Math.pow(2, this.level) * this.lvlUpCost;
				tr = f.ce("tr");
				td = f.ce("td");
				var button = f.ce("button");
				button.innerHTML = "Lvl. Up<br><img src='" + IMG.icon.money + "' class='icon'>" + f.numFormat(lvlUpCost);
				f.ac(td, button);
				f.ac(tr, td);
				f.sa(td, "colspan", 2);

				var saya = this;
				var onclick = function onclick() {
					saya.levelUp(game);

					// console.log(game.ikan.indexOf(saya));
					if (game.ikan.indexOf(saya) != -1) {
						game.uang -= lvlUpCost;
					} else {
						game.hideModal();
					}

					ikan.kill();
					// game.hideModal();
					game.el.content.innerHTML = "";
					f.ac(game.el.content, saya.viewStats(game));

					game.viewMoney();

					if (0) window.setTimeout(function () {
						game.el.content.innerHTML = "";
						f.ac(game.el.content, saya.viewStats(game));
						game.showModal(saya.name + " Fish");
					}, 500);
				};
				button.onclick = onclick;

				if (game.uang < lvlUpCost) {
					f.sa(button, "disabled", "");
				}
				f.ac(table, tr);
			} else {
				tr = f.ce("tr");
				td = f.ce("td");
				var _button = f.ce("button");
				_button.innerHTML = " Level <br> Maxed ";
				f.ac(td, _button);
				f.ac(tr, td);
				f.sa(td, "colspan", 2);
				f.sa(_button, "disabled", "");
				f.ac(table, tr);
			}

			f.ac(uBar, table);

			f.ac(div, uBar);
			return div;
		}
	}, {
		key: "move",
		value: function move(x, y) {
			var _this3 = this;

			var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
			var moveable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

			if (moveable) {
				x = Math.min(this.parentEl.offsetWidth - this.length, Math.max(0, this.x + x));
				y = Math.min(this.parentEl.offsetHeight - this.height - 10, Math.max(0, this.y + y));
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
				_this3.elWrap.style.transitionDuration = Math.max(distance / 40 | 0, 1) + "s";
				_this3.elWrap.style.left = _this3.x + "px";
				_this3.elWrap.style.top = _this3.y + "px";

				try {
					window.clearTimeout(_this3.timeoutMove);
				} catch (e) {}
				_this3.timeoutMove = window.setTimeout(function () {

					var X = _this3.nextPos && _this3.nextPos.x != undefined ? _this3.nextPos.x - _this3.x : _this3.parentEl.offsetWidth * (Math.random() - .5);
					var Y = _this3.nextPos && _this3.nextPos.y != undefined ? _this3.nextPos.y - _this3.y : _this3.parentEl.offsetHeight * (Math.random() - .5);
					// console.log(X,Y);
					_this3.nextPos = null;

					if (moveable) {
						if (_this3.dontMove) {
							_this3.onDontMove();
						} else {
							_this3.move(X, Y);
						}
					}
				}, distance * 25 + 500 + 2500 * Math.random());
			}, delay + 1);
		}
	}, {
		key: "onDontMove",
		value: function onDontMove() {}
	}, {
		key: "onclick",
		value: function onclick(e) {}
	}, {
		key: "addNotif",
		value: function addNotif() {
			this.notif = this.notif || f.ce("div");
			this.notif.innerText = "!";
			f.sa(this.notif, "class", "notif");
			if (!this.hasNotif()) {
				f.ac(this.elWrap, this.notif);
			}
		}
	}, {
		key: "hasNotif",
		value: function hasNotif() {
			return this.elWrap.contains(this.notif);
		}
	}, {
		key: "clearNotif",
		value: function clearNotif() {
			try {
				f.rc(this.elWrap, this.notif);
			} catch (e) {}
		}
	}]);

	return Ikan;
}();

/////////////////////////////////////////////////////////////////////////////////


var Ikan2 = function (_Ikan) {
	_inherits(Ikan2, _Ikan);

	function Ikan2() {
		var _ref;

		_classCallCheck(this, Ikan2);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _this4 = _possibleConstructorReturn(this, (_ref = Ikan2.__proto__ || Object.getPrototypeOf(Ikan2)).call.apply(_ref, [this].concat(args)));

		var lastClaim = _this4.lastClaim;
		_this4.lastClaim = [];
		for (var i in _this4.claimBase) {
			_this4.lastClaim.push(lastClaim);
		}return _this4;
	}

	_createClass(Ikan2, [{
		key: "prepareAnim",
		value: function prepareAnim() {
			// console.log("anim ikan 2");
			// console.log(this.img);
			this.elWrap = f.ce("div");
			f.sa(this.elWrap, "class", "ikan");
			f.sa(this.elWrap, "style", "z-index:9;");
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
				el.style.backgroundImage = "url('data:image/svg+xml;utf8, " + IMG.fishs[this.img] + "')";
				el.style.backgroundPosition = -length * i + "px 0";
				el.style.animationDuration = 1 + 3 * this.length / 200 + "s";
			}
			this.elWrap.style.left = this.x + "px";
			this.elWrap.style.top = this.y + "px";

			f.ac(this.elWrap, this.el);
			f.ac(this.parentEl, this.elWrap);
		}
	}, {
		key: "paperClaim",
		value: function paperClaim(game) {
			var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var now = new Date();
			// console.log("claim");
			for (var i in this.claimBase) {
				if (now.getTime() - this.lastClaim[i] >= 3000 || force) {
					// console.log("try to claim "+this.curr[i] );
					var claimed = this.claimBase[i] * this.level * (Math.min(now.getTime(), this.timeCreated + this.lifeSpan) - this.lastClaim[i]) / 10000 | 0;
					if (claimed > 0) {
						// console.log("claimed "+this.curr[i] );
						game.paper[this.curr[i]] += claimed;
						this.lastClaim[i] = now.getTime();
					}
				}
				game.viewPaper();
			}
		}
	}, {
		key: "save",
		value: function save() {
			// console.log("save ikan 2");
			var param = [this.timeCreated, this.type, this.level, [].concat(_toConsumableArray(this.lastClaim)), this.v];

			return param;
		}
	}, {
		key: "viewStats",
		value: function viewStats(game) {
			var div = f.ce("div");

			var uBar = f.ce("div");
			var aquaMini = f.ce("div");
			f.sa(aquaMini, "class", "aquaMini");
			f.ac(uBar, aquaMini);
			var ikan = new Ikan2((160 - this.length) / 2, (100 - this.height) / 2, aquaMini, this.length, this.height, this.type, false, false, this.level);

			var table = f.ce("table"),
			    tr = void 0,
			    td = void 0;

			tr = f.ce("tr");
			td = f.ce("td");
			td.innerHTML = "Level &nbsp;&nbsp;&nbsp;&nbsp;";
			f.ac(tr, td);
			td = f.ce("td");
			td.innerText = this.level + "/" + this.maxLevel;
			f.ac(tr, td);
			f.ac(table, tr);

			tr = f.ce("tr");
			td = f.ce("td");
			td.innerText = "Life ";
			f.ac(tr, td);
			td = f.ce("td");
			f.ac(td, this.lifeBar());
			f.ac(tr, td);
			f.ac(table, tr);

			tr = f.ce("tr");
			td = f.ce("td");
			td.innerHTML = "Paper";
			f.ac(tr, td);
			td = f.ce("td");
			for (var i in this.claimBase) {
				td.innerHTML += " <img src='" + IMG.icon._plus(IMG.icon.paper) + "' class='icon coin" + this.curr[i] + "'>" + this.claimBase[i] * this.level * 6 + "/min<br>";
			}
			f.ac(tr, td);
			f.ac(table, tr);

			if (this.level < this.maxLevel) {
				var lvlUpCost = Math.pow(2, this.level) * this.lvlUpCost;
				tr = f.ce("tr");
				td = f.ce("td");
				var button = f.ce("button");
				button.innerHTML = "Lvl. Up<br><img src='" + IMG.icon.money + "' class='icon'>" + f.numFormat(lvlUpCost);
				f.ac(td, button);
				f.ac(tr, td);
				f.sa(td, "colspan", 2);

				var saya = this;
				var onclick = function onclick() {
					saya.levelUp(game);

					// console.log(game.ikan.indexOf(saya));
					if (game.ikan.indexOf(saya) != -1) {
						game.uang -= lvlUpCost;
					} else {
						game.hideModal();
					}

					ikan.kill();
					// game.hideModal();
					game.el.content.innerHTML = "";
					f.ac(game.el.content, saya.viewStats(game));

					game.viewMoney();

					if (0) window.setTimeout(function () {
						game.el.content.innerHTML = "";
						f.ac(game.el.content, saya.viewStats(game));
						game.showModal(saya.name + " Fish");
					}, 500);
				};
				button.onclick = onclick;

				if (game.uang < lvlUpCost) {
					f.sa(button, "disabled", "");
				}
				f.ac(table, tr);
			} else {
				tr = f.ce("tr");
				td = f.ce("td");
				var _button2 = f.ce("button");
				_button2.innerHTML = " Level <br> Maxed ";
				f.ac(td, _button2);
				f.ac(tr, td);
				f.sa(td, "colspan", 2);
				f.sa(_button2, "disabled", "");
				f.ac(table, tr);
			}

			f.ac(uBar, table);

			f.ac(div, uBar);
			return div;
		}
	}]);

	return Ikan2;
}(Ikan);