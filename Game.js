"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
	function Game(parentEl) {
		var _this = this;

		_classCallCheck(this, Game);

		this.parentEl = parentEl;
		this.el = {};

		// setting aquarioum view
		this.el.glass = f.ce("div");
		f.sa(this.el.glass, "class", "glass");
		f.ac(this.parentEl, this.el.glass);
		this.el.aqua = f.ce("div");
		f.sa(this.el.aqua, "class", "aqua");
		f.ac(this.el.glass, this.el.aqua);
		this.el.amb = f.ce("div");
		f.sa(this.el.amb, "class", "amb");
		f.ac(this.el.aqua, this.el.amb);

		// bottomBar
		this.el.bottomBar = f.ce("div");
		f.sa(this.el.bottomBar, "class", "bottomBar");
		f.ac(this.parentEl, this.el.bottomBar);

		// tutup
		this.el.tutup = document.querySelector(".tutup");
		// this.el.tutup = f.ce("div");
		// f.sa(this.el.tutup,"class","tutup");
		// this.el.tutup.innerHTML = "<div class='d'>Paperfish</div>Please wait...";
		// this.el.tutup.innerHTML += "<div><img src='data:image/svg+xml;utf8, "+IMG.fishs.M+"'></div>";
		// this.el.tutup.innerHTML += "<img width='100px' style='position:absolute;bottom:5px;left:5px;' src='data:image/png;base64,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'>";
		// f.ac(this.parentEl,this.el.tutup);

		// menu
		this.menu = new Menu(this);

		this.ikan = [];
		this.craftUnlocked = [];
		this.craftObj = [];
		this.craft = [];
		this.craftMaxItem = 4;
		this.glassLvlUpCost = 1000;
		this.glassLvl = 1;
		this.fishVars = {};
		this.uang = 0;
		this.paper = {
			B: 0,
			R: 0,
			Y: 0
		};

		// setting modal popup
		this.el.modal = f.ce("div");
		f.sa(this.el.modal, "class", "modal");
		this.el.popUp = f.ce("div");
		f.sa(this.el.popUp, "class", "popUp");
		var uBar = f.ce("div");
		f.ac(this.el.popUp, uBar);
		var title = f.ce("div");
		f.sa(title, "class", "title");
		this.el.title = title;
		f.ac(uBar, title);
		var btnClose = f.ce("div");
		f.sa(btnClose, "class", "btnClose");
		var hideModal = function hideModal() {
			_this.hideModal();
		};
		btnClose.onclick = hideModal;
		f.ac(uBar, btnClose);
		this.el.content = f.ce("div");
		f.ac(this.el.popUp, this.el.content);
		f.ac(this.el.modal, this.el.popUp);

		// setting top bar
		this.el.topBar = f.ce("div");
		f.sa(this.el.topBar, "class", "topBar");
		f.ac(this.parentEl, this.el.topBar);

		// this.viewLogo();
		this.viewPaper();
		this.viewMoney();

		this.glassLvl--;
		this.glassLvlUp(true);
	}

	_createClass(Game, [{
		key: "glassLvlUp",
		value: function glassLvlUp() {
			var free = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

			if (this.glassLvl >= 10) {
				this.glassLvl = 10;
				return;
			}
			var cost = Math.pow(2, this.glassLvl - 1) * this.glassLvlUpCost;
			if (cost > this.paper.B && !free) return;
			this.paper.B -= free ? 0 : cost;
			this.glassLvl++;
			this.el.glass.style.width = Math.min(600, 400 + 20 * this.glassLvl) + "px";
			this.el.glass.style.height = Math.min(400, 200 + 20 * this.glassLvl) + "px";
			this.viewMoney();
		}
	}, {
		key: "newGame",
		value: function newGame(type) {
			this.transisiTutup();
			this.hideModal();
			var saya = this;

			window.setTimeout(function () {
				try {
					window.clearInteval(saya.saveInterval);
				} catch (e) {}
				saya.el.aqua.innerHTML = "";

				saya.uang = 500;
				saya.viewMoney();

				saya.ikan.map(function (e) {
					e.kill(saya);
				});

				saya.ikan = [];
				saya.glassLvl = 0;
				saya.glassLvlUp(true);
				saya.paper = {};
				saya.viewPaper();

				saya.craftObj.map(function (e) {
					e.kill(saya);
				});
				saya.craft = [];
				saya.craftUnlocked = [];
				saya.craftObj = [];
				saya.fishVars = {};
			}, 1000);

			window.setTimeout(function () {
				saya.addIkan("B");
				saya.transisiBuka();
				if (type == "kongGuest") {
					saya.showModalInfo("Hello Guest", "You are playing in guest mode. Your progress will not be saved. To keep your progress save, please login.");
				}
			}, 2000);
		}
	}, {
		key: "addIkan",
		value: function addIkan(type) {
			var free = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
			var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

			if (!type) return;

			var totalIkan = 0;
			this.ikan.map(function (e) {
				return e && totalIkan++;
			});
			if (this.glassLvl * 2 + 1 <= totalIkan) return;

			if (!free) {
				if (fishs[type].price > this.uang) return;
				this.uang -= fishs[type].price;
				this.viewMoney();
			}

			var ikan = new Ikan(x || this.el.aqua.offsetWidth * Math.random(), y || this.el.aqua.offsetHeight * Math.random(), this.el.aqua, 74, 46, type, !(x && y));
			ikan.move(0, 0);
			ikan.elWrap.style.animation = "birthIkan .5s";
			this.ikan.push(ikan);
			this.afterAddIkan(ikan);
		}
	}, {
		key: "addIkan2",
		value: function addIkan2(type) {
			var free = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
			var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
			var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

			if (!type) return;

			var totalIkan = 0;
			this.ikan.map(function (e) {
				return e && totalIkan++;
			});
			if (this.glassLvl * 2 + 1 <= totalIkan) return;

			if (!free) {
				if (fishs[type].price > this.uang) return;
				this.uang -= fishs[type].price;
				this.viewMoney();
			}

			var ikan = new Ikan2(x || this.el.aqua.offsetWidth * Math.random(), y || this.el.aqua.offsetHeight * Math.random(), this.el.aqua, 74, 46, type, !(x && y));
			ikan.move(0, 0);
			ikan.elWrap.style.animation = "birthIkan .5s";
			this.ikan.push(ikan);
			this.afterAddIkan(ikan);
		}
	}, {
		key: "loadIkan",
		value: function loadIkan(arr) {
			if (!fishs[arr[1]]) {
				console.log("Game::loadIkan() ERROR");
				return;
			}

			if (arr[4] && arr[4] == 2) {
				var type = arr[1];
				var level = arr[2] || 1;
				var ikan = new Ikan2(this.el.aqua.offsetWidth * Math.random(), this.el.aqua.offsetHeight * Math.random(), this.el.aqua, 74, 46, type, true, true, level);

				// console.log(ikan.save());
				ikan.timeCreated = arr[0] ? arr[0] : ikan.timeCreated;
				ikan.lastClaim = arr[3];
				this.ikan.push(ikan);
				this.afterAddIkan(ikan);
			} else {
				var _type = arr[1];
				var _level = arr[2] || 1;
				var _ikan = new Ikan(this.el.aqua.offsetWidth * Math.random(), this.el.aqua.offsetHeight * Math.random(), this.el.aqua, 74, 46, _type, true, true, _level);
				_ikan.timeCreated = arr[0] ? arr[0] : _ikan.timeCreated;
				_ikan.lastClaim = arr[3];
				this.ikan.push(_ikan);
				this.afterAddIkan(_ikan);
			}
		}
	}, {
		key: "afterAddIkan",
		value: function afterAddIkan(ikan) {
			var _this2 = this;

			// console.log("after add ikan");
			ikan.onclick = function (e) {
				ikan.nextPos = {
					x: _this2.parentEl.offsetWidth / 2 | 0,
					y: _this2.parentEl.offsetHeight / 2 | 0
				};
				_this2.el.content.innerHTML = "";
				f.ac(_this2.el.content, ikan.viewStats(_this2));

				_this2.showModal(ikan.name + " Fish");
			};
			ikan.paperIntervalClaim(this);
			var now = new Date();
			var saya = this;
			window.setTimeout(function () {
				ikan.kill(saya);
			}, ikan.timeCreated + ikan.lifeSpan - now.getTime());
		}
	}, {
		key: "addCraft",
		value: function addCraft(type) {
			if (!type) return;

			var totalIkan = 0;
			this.craft.map(function (e) {
				return e && totalIkan++;
			});
			if (this.craftMaxItem <= totalIkan) return;
			if (this.craft.indexOf(type) != -1) return;

			// let ikan = new CraftV(this.el.aqua.offsetWidth*Math.random(),this.el.aqua.offsetHeight*Math.random(),this.el.aqua, 74, 46, type);
			var ikan = new Craft(this.el.aqua.offsetWidth * Math.random(), this.el.aqua.offsetHeight * Math.random(), this.el.aqua, 74, 46, type);
			ikan.intervalFunction(this);
			this.craft.push(type);
			this.craftObj.push(ikan);
			ikan.function0(this);
		}
	}, {
		key: "removeCraft",
		value: function removeCraft(type) {
			if (type == null) return;

			var idx = this.craft.indexOf(type);
			if (idx != -1) {

				// for(let i in this.craftObj ){
				// 	if(this.craftObj[i] && this.craftObj[i].type==type){

				// 		this.craftObj[i].function1(this);
				// 		this.craftObj[i].kill(this);
				// 		// this.craftObj[i] = null;
				// 		// this.craft[idx]=null;
				// 		console.log(idx, this.craft);
				// 		break;
				// 	}
				// }

				this.craftObj[idx].function1(this);
				this.craftObj[idx].kill(this);

				// this.craft.splice(idx,1);
				// this.craftObj.splice(idx,1);

				// let craft =[];
				// this.craft.map((e,i)=>i!=idx && craft.push(e) );
				// this.craft = craft;
				// let craftObj =[];
				// this.craftObj.map((e,i)=>i!=idx && craftObj.push(e) );
				// this.craftObj = craftObj;
			}
		}
	}, {
		key: "unlockCraft",
		value: function unlockCraft(type) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.keys(fishCraft[type].price)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var i = _step.value;

					if (fishCraft[type].price[i] > this.paper[i]) return;
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

			this.craftUnlocked.push(fishCraft[type].type);
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = Object.keys(fishCraft[type].price)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var _i = _step2.value;

					this.paper[_i] -= fishCraft[type].price[_i];
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			this.viewPaper();
		}
	}, {
		key: "showModalInfo",
		value: function showModalInfo() {
			var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
			var info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

			var saya = this;
			this.el.content.innerHTML = "";
			var div1 = f.ce("div");
			f.sa(div1, "style", "text-align:center;padding:10px;");
			div1.innerHTML = info;
			f.ac(this.el.content, div1);

			div1 = f.ce("div");
			f.sa(div1, "style", "text-align:center;");
			var button = f.ce("button");
			button.innerHTML = " OK ";
			button.onclick = function () {
				saya.hideModal();
			};
			f.ac(div1, button);
			f.ac(this.el.content, div1);

			this.showModal(title);
		}
	}, {
		key: "showModalWide",
		value: function showModalWide() {
			var _this3 = this;

			var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			if (this.parentEl.contains(this.el.modal)) {} else {
				this.el.title.innerText = title;
				this.el.popUp.style.width = "95%";
				this.el.popUp.style.height = "400px";
				 this.el.popUp.style.opacity = 0;
				f.ac(this.parentEl, this.el.modal);
				var zoomin = function zoomin() {
					 _this3.el.popUp.style.opacity = 1;
				};
				setTimeout(zoomin, 50);
			}
		}
	}, {
		key: "showModal",
		value: function showModal() {
			var _this4 = this;

			var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			if (this.parentEl.contains(this.el.modal)) {} else {
				this.el.title.innerText = title;
				this.el.popUp.style.width = "400px";
				this.el.popUp.style.height = "auto";
				 this.el.popUp.style.opacity = 0;
				f.ac(this.parentEl, this.el.modal);
				var zoomin = function zoomin() {
					 _this4.el.popUp.style.opacity = 1;
				};
				setTimeout(zoomin, 50);
			}
		}
	}, {
		key: "hideModal",
		value: function hideModal() {
			var _this5 = this;

			this.el.content.innerHTML = "";
			if (this.parentEl.contains(this.el.modal)) {
				 this.el.popUp.style.opacity = 0;
				var zoomin = function zoomin() {
					f.rc(_this5.parentEl, _this5.el.modal);
				};
				setTimeout(zoomin, 100);
			} else {}
		}

		// visual

	}, {
		key: "viewLogo",
		value: function viewLogo() {
			var logo = f.ce("div");
			f.sa(logo, "class", "logo");
			logo.innerHTML = "&nbsp;";
			logo.style.backgroundImage = "url('" + IMG.logo + "')";
			f.ac(this.el.topBar, logo);
		}
	}, {
		key: "viewMoney",
		value: function viewMoney() {
			if (!this.el.moneyBar) {
				this.el.moneyBar = f.ce("div");
				f.sa(this.el.moneyBar, "class", "moneyBar");
			}
			if (!this.el.topBar.contains(this.el.moneyBar)) {
				f.ac(this.el.topBar, this.el.moneyBar);
			}
			this.uang = Math.min(this.uang || 0, 2000000000);
			this.el.moneyBar.innerText = f.numFormat(this.uang);
		}
	}, {
		key: "viewPaper",
		value: function viewPaper() {
			this.viewPaperChild("B");
			this.viewPaperChild("R");
			this.viewPaperChild("Y");
		}
	}, {
		key: "viewPaperChild",
		value: function viewPaperChild(id) {
			if (!this.el.paperBar) {
				this.el.paperBar = {};
			}
			if (!this.el.paperBar[id]) {
				this.el.paperBar[id] = f.ce("div");
				f.sa(this.el.paperBar[id], "class", "paperBar paper" + id);
			}
			this.paper[id] = Math.min(parseInt(this.paper[id]) || 0, 2000000);
			this.el.paperBar[id].innerText = f.numFormat(this.paper[id]);
			if (!this.el.topBar.contains(this.el.paperBar[id])) {
				f.ac(this.el.topBar, this.el.paperBar[id]);
			}
		}
	}, {
		key: "viewStatus",
		value: function viewStatus(text) {
			var _this6 = this;

			var div = f.ce("div");
			// f.sa(div,"class","bottomBar");
			div.innerText = text;
			f.ac(this.el.bottomBar, div);

			window.setTimeout(function () {
				div.style.transitionDuration = "1s";
				div.style.opacity = "0";
				div.style.height = "0px";
				div.style.padding = "0px";
			}, 2000);
			window.setTimeout(function () {
				f.rc(_this6.el.bottomBar, div);
			}, 4000);
		}
	}, {
		key: "transisiBuka",
		value: function transisiBuka() {
			try {
				this.el.tutup.style.left = (Math.random() > .5 ? 100 : -100) + "%";
			} catch (e) {}
		}
	}, {
		key: "transisiTutup",
		value: function transisiTutup() {
			try {
				this.el.tutup.style.left = "0%";
			} catch (e) {}
		}

		// PLAYFAB RELATED

	}, {
		key: "kongLogin",
		value: function kongLogin() {
			var _this7 = this;

			var param = {
				"KongregateId": window.kongVars.userId,
				"AuthTicket": window.kongVars.token,
				"CreateAccount": true,
				"TitleId": PlayFab.settings.titleId
			};
			PlayFabClientSDK.LoginWithKongregate(param, function (r, e) {
				try {
					// console.log(r);
					if (!r.data.NewlyCreated && 1) {
						_this7.loadData();
					} else {
						// this.newGame();
						_this7.saveData();
						_this7.transisiBuka();
					}

					var saya = _this7;
					saya.loggedIn = true;
					_this7.saveInterval = window.setInterval(function () {
						saya.saveData();
					}, 60000);
				} catch (e) {
					_this7.newGame();
				}
			});
		}
	}, {
		key: "loadData",
		value: function loadData() {
			var saya = this;
			saya.transisiTutup();

			var param = {
				Keys: []
			};
			PlayFabClientSDK.GetUserData(param, function (r, e) {
				// console.log(r);
				try {
					// throw 123;

					if (r.data.Data.glassLvl) {
						saya.glassLvl = 1;
						while (saya.glassLvl < parseInt(r.data.Data.glassLvl.Value)) {
							saya.glassLvlUp(true);
						}
					}

					if (r.data.Data.curr) {
						var data = JSON.parse(r.data.Data.curr.Value);
						saya.uang = parseInt(data[0]);
						saya.viewMoney();
						saya.paper = data[1];
						saya.viewPaper();
					}

					if (r.data.Data.craftUnlocked) {
						saya.craftUnlocked = JSON.parse(r.data.Data.craftUnlocked.Value);
					}

					if (r.data.Data.ikan1) {
						var _iteratorNormalCompletion3 = true;
						var _didIteratorError3 = false;
						var _iteratorError3 = undefined;

						try {

							for (var _iterator3 = saya.ikan[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
								var i = _step3.value;

								i.kill(saya);
							}
						} catch (err) {
							_didIteratorError3 = true;
							_iteratorError3 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion3 && _iterator3.return) {
									_iterator3.return();
								}
							} finally {
								if (_didIteratorError3) {
									throw _iteratorError3;
								}
							}
						}

						JSON.parse(r.data.Data.ikan1.Value).sort(function (i, j) {
							return Math.random() > .5 ? 1 : -1;
						}).map(function (e) {
							try {
								saya.loadIkan(e);
							} catch (e) {}
						});
					}

					if (r.data.Data.craft) {
						var _iteratorNormalCompletion4 = true;
						var _didIteratorError4 = false;
						var _iteratorError4 = undefined;

						try {
							for (var _iterator4 = saya.craft[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
								var _i2 = _step4.value;

								saya.removeCraft(_i2);
							}
						} catch (err) {
							_didIteratorError4 = true;
							_iteratorError4 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion4 && _iterator4.return) {
									_iterator4.return();
								}
							} finally {
								if (_didIteratorError4) {
									throw _iteratorError4;
								}
							}
						}

						JSON.parse(r.data.Data.craft.Value).map(function (e) {
							try {
								saya.addCraft(e);
							} catch (e) {}
						});
					}

					window.setTimeout(function () {
						saya.transisiBuka();
					}, 2001);
				} catch (e) {
					console.error(e);
					saya.newGame();
				}
			});
		}
	}, {
		key: "saveData",
		value: function saveData() {
			var param = {
				Data: {
					glassLvl: this.glassLvl,
					ikan1: JSON.stringify(this.ikan.map(function (e) {
						try {
							// console.log("Game::saveData()");
							// console.log(e.save());
							return e.save();
						} catch (e) {}
					})),

					// money:this.uang,
					// paper:JSON.stringify(this.paper),
					curr: JSON.stringify([this.uang, this.paper]),

					craft: JSON.stringify(this.craft),
					craftUnlocked: JSON.stringify(this.craftUnlocked)
				}
			};
			var saya = this;
			var saving = function saving(r, e) {
				if (r !== null) {
					saya.viewStatus("Game saved.");
				}
			};
			PlayFabClientSDK.UpdateUserData(param, saving);
		}
	}]);

	return Game;
}();