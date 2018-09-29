"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
	function Menu(game) {
		_classCallCheck(this, Menu);

		this.game = game;
		this.el = {};

		this.vars = {};

		this.addMenuSave();
		this.addMenuBuyIkan1();
		this.addMenuCraft();
		this.addMenuTank();
		this.addMenuGuide();
	}

	_createClass(Menu, [{
		key: "addMenu",
		value: function addMenu(menu) {
			var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
			var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
			var img = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
			var click = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};

			this.el[menu] = f.ce("div");
			f.sa(this.el[menu], "class", "sideMenu");
			this.el[menu].style.top = 60 + y * 80 + "px";
			this.el[menu].style.backgroundImage = "url('" + img + "')";
			this.el[menu].onclick = click;
			f.ac(this.el[menu], f.ce("br"));
			f.ac(this.el[menu], f.ce("br"));
			f.ac(this.el[menu], f.ct(text));
			f.ac(this.game.parentEl, this.el[menu]);
		}
	}, {
		key: "addMenuSave",
		value: function addMenuSave() {
			var saya = this;
			var click = function click() {
				saya.game.viewStatus("Saving...");
				if (saya.game.loggedIn) {
					saya.game.saveData();
				} else {
					// saya.game.showModalInfo("Error","You playing as guest.");
					kongregate.services.showRegistrationBox();
				}
			};
			this.addMenu("menuSave", 4, "Save", IMG.icon.save, click);
		}
	}, {
		key: "addMenuGuide",
		value: function addMenuGuide() {
			var saya = this;
			var click = function click() {
				saya.game.el.content.innerHTML = "";
				f.ac(saya.game.el.content, saya.guide());
				saya.game.showModalWide("Gude Book");
			};
			this.addMenu("menuGuide", 3, "Guide", IMG.icon.book, click);
		}
	}, {
		key: "addMenuTank",
		value: function addMenuTank() {
			var saya = this;
			var click = function click() {
				saya.game.el.content.innerHTML = "";
				f.ac(saya.game.el.content, saya.tank());
				saya.game.showModalWide("Tank");
			};
			this.addMenu("menuTank", 2, "Tank", IMG.icon.tank, click);
		}
	}, {
		key: "addMenuCraft",
		value: function addMenuCraft() {
			var saya = this;
			var click = function click() {
				saya.game.el.content.innerHTML = "";
				var div = saya.fishCraft();
				f.ac(saya.game.el.content, div);
				saya.game.showModalWide("Creatures Craft (" + saya.game.craft.length + "/" + saya.game.craftMaxItem + ")");
				// window.setTimeout(()=>{
				// 	div.scrollTop = saya.vars.scrollTop;
				// },5000);
			};
			this.addMenu("menuCraft", 1, "Craft", IMG.icon.craft, click);
		}
	}, {
		key: "addMenuBuyIkan1",
		value: function addMenuBuyIkan1() {
			var saya = this;
			var click = function click() {
				var totalIkan = 0;
				saya.game.ikan.map(function (e) {
					return e && totalIkan++;
				});
				saya.game.el.content.innerHTML = "";
				if (saya.game.glassLvl * 2 + 1 > totalIkan) {
					f.ac(saya.game.el.content, saya.fishShop());
					saya.game.showModalWide("Fish Shop");
				} else {
					// alert("penuh");
					saya.game.showModalInfo("Insufficient Space", "Tank is full (" + totalIkan + "/" + (saya.game.glassLvl * 2 + 1) + "). Upgrade your tank to place more fish.");
				}
			};
			this.addMenu("menuSave", 0, "Shop", IMG.icon.shop, click);
		}
	}, {
		key: "fishShop",
		value: function (_fishShop) {
			function fishShop() {
				return _fishShop.apply(this, arguments);
			}

			fishShop.toString = function () {
				return _fishShop.toString();
			};

			return fishShop;
		}(function () {
			var _this = this;

			var saya = this;
			var div = f.ce("div");
			f.sa(div, "style", "overflow-y:scroll;max-height:350px;margin:10px 0px;position:relative;");

			// for(let j=9;--j;)
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				var _loop = function _loop() {
					var i = _step.value;

					var menu = f.ce("div");
					f.sa(menu, "class", "shopMenu");

					var aquaMini = f.ce("div");
					f.sa(aquaMini, "class", "aquaMini");
					f.ac(menu, aquaMini);

					var div1 = f.ce("div");
					f.sa(div1, "class", "title1");
					div1.innerHTML = fishShop[i].name;
					f.ac(menu, div1);

					var buy = f.ce("button");
					div1 = f.ce("div");

					if (!fishShop[i].v) {
						var ikan = new Ikan((160 - fishShop[i].lvlUpVar.base[0]) / 2, (100 - fishShop[i].lvlUpVar.base[1]) / 2, aquaMini, 200, 200, fishShop[i].type, false, false, 1);

						div1.innerHTML = "<img src='" + IMG.icon._plus(IMG.icon.paper) + "' class='icon coin" + fishShop[i].type + "'>" + fishShop[i].claimBase * 6 + "/min";
						// f.ac(menu, div1);

						// div1 = f.ce("div");
						div1.innerHTML += "<br><img src='" + IMG.icon.heart + "' class='icon'>" + f.timeFormat(fishShop[i].lifeSpan);
						f.ac(menu, div1);

						div1 = f.ce("div");
						buy.onclick = function () {
							saya.game.addIkan(fishShop[i].type);
							saya.game.hideModal();
						};
					} else if (fishShop[i].v == 2) {

						var _ikan = new Ikan2((160 - fishShop[i].lvlUpVar.base[0]) / 2, (100 - fishShop[i].lvlUpVar.base[1]) / 2, aquaMini, 200, 200, i, false, false, 1);

						div1 = f.ce("div");
						for (var j in fishShop[i].claimBase) {
							div1.innerHTML += "<img src='" + IMG.icon._plus(IMG.icon.paper) + "' class='icon coin" + fishShop[i].curr[j] + "'>" + fishShop[i].claimBase[j] * 6 + "/min<br>";
						}
						// f.ac(menu, div1);

						// div1 = f.ce("div");
						div1.innerHTML += "<img src='" + IMG.icon.heart + "' class='icon'>" + f.timeFormat(fishShop[i].lifeSpan);
						f.ac(menu, div1);

						div1 = f.ce("div");
						buy.onclick = function () {
							saya.game.addIkan2(i);
							saya.game.hideModal();
						};
					}

					buy.innerHTML = " <img src='" + IMG.icon.money + "' class='icon'>" + f.numFormat(fishShop[i].price);
					if (_this.game.uang < fishShop[i].price) {
						f.sa(buy, "disabled", "");
					}
					f.sa(div1, "style", "text-align:center;position: absolute;bottom: 0;width:100%;");
					f.ac(div1, buy);
					f.ac(menu, div1);
					f.ac(div, menu);
				};

				for (var _iterator = Object.keys(fishShop)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					_loop();
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

			return div;
		})
	}, {
		key: "fishCraft",
		value: function (_fishCraft) {
			function fishCraft() {
				return _fishCraft.apply(this, arguments);
			}

			fishCraft.toString = function () {
				return _fishCraft.toString();
			};

			return fishCraft;
		}(function () {
			var _this2 = this;

			var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

			var saya = this;
			var fishShop = JSON.parse(JSON.stringify(fishCraftShop));
			var div = f.ce("div");
			f.sa(div, "style", "overflow-y:scroll;max-height:350px;margin:10px 0px;position:relative;");
			div.onscroll = function (e) {
				scrollTop = div.scrollTop;
			};

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = this.game.craftUnlocked[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var _i = _step2.value;

					if (!fishShop[_i]) {
						fishShop[_i] = fishCraft[_i];
					}
				}

				// for(let jjjj=9;--jjjj;)
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

			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				var _loop2 = function _loop2() {
					var i = _step3.value;

					var menu = f.ce("div");
					f.sa(menu, "class", "shopMenu");

					var aquaMini = f.ce("div");
					f.sa(aquaMini, "class", "aquaMini");
					f.ac(menu, aquaMini);
					var ikan = new Craft((160 - fishShop[i].length) / 2, (100 - fishShop[i].height) / 2, aquaMini, 200, 200, fishShop[i].type, false, false, 1);

					var div1 = f.ce("div");
					f.sa(div1, "class", "title1");
					div1.innerHTML = fishShop[i].name;
					f.ac(menu, div1);

					div1 = f.ce("div");
					f.sa(div1, "style", "height:100px;overflow-y:hidden");
					div1.innerHTML = fishShop[i].desc;
					f.ac(menu, div1);

					// BUY
					div1 = f.ce("div");
					f.sa(div1, "style", "text-align:center;height:80px;display:grid;place-items:center");
					if (_this2.game.craftUnlocked.indexOf(i) == -1) {
						menu.style.backgroundColor = "#777777";
						ikan.hint();
						var _buy = f.ce("button");
						_buy.onclick = function () {
							saya.game.unlockCraft(i);
							saya.game.el.content.innerHTML = "";
							saya.game.el.title.innerHTML = "Creatures Craft (" + saya.game.craft.length + "/" + saya.game.craftMaxItem + ")";
							var div = saya.fishCraft(scrollTop);
							f.ac(saya.game.el.content, div);
							div.scrollTop = scrollTop;
						};
						_buy.innerHTML = " Unlock ";

						var div2 = f.ce("div");
						f.sa(div2, "style", "text-align:left;");
						div2.innerHTML = "";
						var idx = -1;
						var _iteratorNormalCompletion4 = true;
						var _didIteratorError4 = false;
						var _iteratorError4 = undefined;

						try {
							for (var _iterator4 = Object.keys(fishShop[i].price)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
								var j = _step4.value;

								div2.innerHTML += fishShop[i].price[j] ? " <img src='" + IMG.icon.paper + "' class='icon coin" + j + "'>" + fishShop[i].price[j] + (++idx % 2 ? "<br>" : "") : "";
								if (_this2.game.paper[j] < fishShop[i].price[j]) {
									f.sa(_buy, "disabled", "");
								}
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

						f.ac(div1, div2);
						f.ac(div1, _buy);
					} else if (_this2.game.craft.indexOf(i) == -1) {

						var totalIkan = 0;
						saya.game.craft.map(function (e) {
							return e && totalIkan++;
						});

						var _buy2 = f.ce("button");
						f.sa(_buy2, "class", "green");

						_buy2.onclick = function () {
							saya.game.addCraft(fishShop[i].type);
							if (1) {
								saya.game.el.content.innerHTML = "";
								saya.game.el.title.innerHTML = "Creatures Craft (" + saya.game.craft.length + "/" + saya.game.craftMaxItem + ")";
								var _div = saya.fishCraft(scrollTop);
								f.ac(saya.game.el.content, _div);
								_div.scrollTop = scrollTop;
							} else {
								saya.game.hideModal();
							}
						};

						_buy2.innerHTML = " Insert to tank ";
						if (totalIkan >= _this2.game.craftMaxItem) {
							_buy2.innerHTML = " Remove others first ";
							f.sa(_buy2, "disabled", "");
						}

						f.ac(div1, _buy2);
					} else {
						var _buy3 = f.ce("button");
						f.sa(_buy3, "class", "red");
						// buy.onclick = function(){
						// 	saya.game.removeCraft(i);
						// 	if(1){
						// 		saya.game.el.content.innerHTML = "";
						// 		f.ac(saya.game.el.content, saya.fishCraft(scrollTop));
						// 	}else{
						// 		saya.game.hideModal();
						// 	}
						// }

						(function (buy, saya, i) {
							buy.onclick = function () {
								saya.game.removeCraft(i);
								// console.log("NOOO ",i);
								if (1) {
									saya.game.el.content.innerHTML = "";
									saya.game.el.title.innerHTML = "Creatures Craft (" + saya.game.craft.length + "/" + saya.game.craftMaxItem + ")";
									var _div2 = saya.fishCraft(scrollTop);
									f.ac(saya.game.el.content, _div2);
									_div2.scrollTop = scrollTop;
								} else {
									saya.game.hideModal();
								}
							};
						})(_buy3, saya, fishShop[i].type);

						_buy3.innerHTML = " Remove from tank ";

						f.ac(div1, _buy3);
					}

					f.ac(menu, div1);
					f.ac(div, menu);
				};

				for (var _iterator3 = Object.keys(fishShop)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					_loop2();
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

			return div;
		})
	}, {
		key: "tank",
		value: function tank() {
			var saya = this;
			var div = f.ce("div");
			f.sa(div, "class", 'tank');

			// LEFT PANEL
			var div1 = f.ce("div");
			f.sa(div1, "class", 'left');
			// div1.innerHTML = "asdsdsad asds";

			var div11 = f.ce("div");
			f.sa(div11, "class", 'title1');
			div11.innerHTML = "Tank Properties";
			f.ac(div1, div11);

			var icon = f.ce("img");
			f.sa(icon, "class", "iconBig");
			f.sa(icon, "src", IMG.icon.tank);
			f.ac(div1, icon);

			var table = f.ce("table");
			var tr = f.ce("tr");
			var td = f.ce("td");
			td.innerHTML = "Level";
			f.ac(tr, td);
			td = f.ce("td");
			td.innerHTML = this.game.glassLvl + "/10";
			f.ac(tr, td);
			f.ac(table, tr);

			tr = f.ce("tr");
			td = f.ce("td");
			td.innerHTML = "Paperfish";
			f.ac(tr, td);
			td = f.ce("td");
			var totalIkan = 0;
			this.game.ikan.map(function (e) {
				return e && totalIkan++;
			});
			td.innerHTML = totalIkan + "/" + (this.game.glassLvl * 2 + 1);
			f.ac(tr, td);
			f.ac(table, tr);

			tr = f.ce("tr");
			td = f.ce("td");
			td.innerHTML = "Upgrade";
			f.ac(tr, td);
			td = f.ce("td");
			var button = f.ce("button");
			if (this.game.glassLvl >= 10) {
				button.innerHTML = "Maxed";
				f.sa(button, "disabled", "");
			} else {
				var cost = Math.pow(2, this.game.glassLvl - 1) * this.game.glassLvlUpCost;
				button.innerHTML = " <img src='" + IMG.icon.paper + "' class='icon coinB'> " + f.numFormat(cost);
				if (cost > this.game.paper.B) {
					f.sa(button, "disabled", "");
				}

				button.onclick = function () {
					saya.game.glassLvlUp();
					saya.game.el.content.innerHTML = "";
					f.ac(saya.game.el.content, saya.tank());
				};
			}
			f.ac(td, button);
			f.ac(tr, td);
			f.ac(table, tr);

			f.ac(div1, table);

			// RIGHT PANEL
			var div2 = f.ce("div");
			f.sa(div2, "class", 'right');

			var div21 = f.ce("div");
			f.sa(div21, "class", 'title1');
			div21.innerHTML = "Tank Shop";
			f.ac(div2, div21);

			f.ac(div2, f.ct("Coming soon"));

			f.ac(div, div1);
			f.ac(div, div2);

			return div;
		}
	}, {
		key: "guide",
		value: function guide() {
			var saya = this;
			var div = f.ce("div");
			f.sa(div, "class", 'tank');

			// LEFT PANEL
			var div1 = f.ce("div");
			f.sa(div1, "class", 'left');

			var div11 = f.ce("div");
			f.sa(div11, "class", 'title1');
			div11.innerHTML = "Contents";
			f.ac(div1, div11);

			// RIGHT PANEL
			var div2 = f.ce("div");
			f.sa(div2, "class", 'right');

			var div21 = f.ce("div");
			f.sa(div21, "class", 'title1');
			f.ac(div2, div21);

			var div22 = f.ce("div");
			f.ac(div2, div22);

			f.ac(div, div1);
			f.ac(div, div2);

			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = Object.keys(GUIDE)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var _i2 = _step5.value;

					var button = f.ce("button");
					f.ac(button, f.ct(_i2));
					f.ac(div1, button);
					f.ac(div1, f.ce("br"));

					(function (button, i) {
						button.onclick = function () {
							div21.innerHTML = i;
							div22.innerHTML = GUIDE[i];
						};
					})(button, _i2);
				}
			} catch (err) {
				_didIteratorError5 = true;
				_iteratorError5 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion5 && _iterator5.return) {
						_iterator5.return();
					}
				} finally {
					if (_didIteratorError5) {
						throw _iteratorError5;
					}
				}
			}

			return div;
		}
	}]);

	return Menu;
}();