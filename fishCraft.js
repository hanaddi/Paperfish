"use strict";

var fishCraft = {
	G: {
		name: 'Mini Gold',
		type: "G",
		desc: "Generate 300<img src='" + IMG.icon.money + "' class='icon'>/min",
		length: 37,
		height: 22,
		delay: 6000,
		function0: function function0(g) {},
		function1: function function1(g) {},
		function: function _function(g) {
			g.uang += 30;g.viewMoney();
		},
		price: { B: 10, R: 0, Y: 0 }
	},
	G1: {
		name: 'Gold',
		type: "G1",
		desc: "Generate 600<img src='" + IMG.icon.money + "' class='icon'>/min",
		length: 50,
		height: 30,
		delay: 6000,
		function0: function function0(g) {},
		function1: function function1(g) {},
		function: function _function(g) {
			g.uang += 60;g.viewMoney();
		},
		price: { B: 30, R: 10, Y: 0 }
	},
	M: {
		name: 'Blues Mom',
		type: "M",
		desc: "Produce <img src='data:image/svg+xml;utf8, " + IMG.fishs.B + "' class='icon coinY'>/ 5 minutes (as long as tank not full).",
		length: 80,
		height: 45,
		delay: 300000,
		function0: function function0(g) {},
		function1: function function1(g) {},
		function: function _function(g, s) {
			g.addIkan("B", true, s.elWrap.offsetLeft + s.dir * s.length / 2, s.elWrap.offsetTop + 20);
		},
		price: { B: 1000, R: 1000, Y: 1000 }
	},
	A: {
		name: 'Sura',
		type: "A",
		desc: "For every minute :<br>- Generate 330<img src='" + IMG.icon.money + "' class='icon'><br>- Turn 20<img src='" + IMG.icon.paper + "' class='icon coinB'> to 10<img src='" + IMG.icon.paper + "' class='icon coinR'>",
		length: 125,
		height: 50,
		delay: 60000,
		function0: function function0(g) {},
		function1: function function1(g) {},
		function: function _function(g) {
			g.uang += 300;
			g.viewMoney();
			if (g.paper.B >= 20) {
				g.paper.B -= 20;
				g.paper.R += 11;
				g.viewPaper();
			}
		},
		price: { B: 2000, R: 2500, Y: 2000 }
	},
	N: {
		name: 'Shadow',
		type: "N",
		desc: "Generate 400<img src='" + IMG.icon.money + "' class='icon'>/min.<br>Add shadow effect on tank.",
		length: 100,
		height: 42,
		delay: 6000,
		function0: function function0(g) {
			// g.el.aqua.style.background = "radial-gradient(#eeeeee, #aaaaaa)";
			g.el.glass.style.backgroundImage = "url('" + IMG.bg.shadow + "')";
			g.el.glass.style.backgroundPosition = "center top";
		},
		function1: function function1(g) {
			g.el.glass.style.background = null;
		},
		function: function _function(g) {
			g.uang += 4;g.viewMoney();
		},
		price: { B: 100, R: 50, Y: 20 }
	},

	C_1: {
		name: 'Marlin',
		type: "C_1",
		img: "C_1",
		desc: "Generate 300<img src='" + IMG.icon.money + "' class='icon'>/min.<br>Show life bar on fish.",
		length: 140,
		height: 56,
		delay: 1000,
		function0: function function0(g) {
			g.ikan.map(function (ikan) {
				if (!ikan) return;
				ikan.fishVar.C_1 = ikan.fishVar.C_1 || f.ce("div");
				f.sa(ikan.fishVar.C_1, "class", "C_1");
				if (!ikan.elWrap.contains(ikan.fishVar.C_1)) {
					f.ac(ikan.elWrap, ikan.fishVar.C_1);
				}
				ikan.fishVar.C_1.innerHTML = ikan.lifeBar().outerHTML;
			});
		},
		function1: function function1(g) {
			g.ikan.map(function (ikan) {
				if (!ikan) return;
				if (ikan.elWrap.contains(ikan.fishVar.C_1)) {
					f.rc(ikan.elWrap, ikan.fishVar.C_1);
				}
				ikan.fishVar.C_1 = null;
			});
		},
		function: function _function(g) {
			g.uang += 5;g.viewMoney();
			g.ikan.map(function (ikan) {
				if (!ikan) return;
				ikan.fishVar.C_1 = ikan.fishVar.C_1 || f.ce("div");
				f.sa(ikan.fishVar.C_1, "class", "C_1");
				if (!ikan.elWrap.contains(ikan.fishVar.C_1)) {
					f.ac(ikan.elWrap, ikan.fishVar.C_1);
				}
				ikan.fishVar.C_1.innerHTML = ikan.lifeBar().outerHTML;
			});
		},
		areaLimit: [0, -15, -1, -1],
		price: { R: 5000, Y: 2000 }
	},
	C_2: {
		name: 'Siwid',
		type: "C_2",
		img: "C_2",
		desc: "Freeze fish lifetimes.<br>Little fish likes him.",
		length: 80,
		height: 80,
		delay: 4000,
		dirLock: true,
		prepareAnim: f.craft.weedAnim,
		function0: function function0(g, s) {
			g.ikan.map(function (ikan) {
				if (!ikan) return;
				var now = new Date();
				// if(ikan.level>4)return;
				ikan.fishVar = ikan.fishVar || {};
				ikan.fishVar.C_2 = {
					sisaUsia: ikan.timeCreated + ikan.lifeSpan - now.getTime()
				};
				// ikan.timeCreated =Math.min(ikan.timeCreated+4000,now.getTime());
			});
		},
		function1: function function1(g) {},
		function: function _function(g, s) {
			g.ikan.map(function (ikan) {
				if (!ikan) return;
				var now = new Date();
				// if(ikan.level>4)return;

				ikan.fishVar = ikan.fishVar || {};
				ikan.fishVar.C_2 = ikan.fishVar.C_2 || {
					sisaUsia: ikan.timeCreated + ikan.lifeSpan - now.getTime()
				};

				if (ikan.fishVar && ikan.fishVar.C_2 && ikan.fishVar.C_2.sisaUsia) {
					ikan.timeCreated = Math.min(now.getTime() + ikan.fishVar.C_2.sisaUsia - ikan.lifeSpan, now.getTime());
				} else {
					ikan.timeCreated = Math.min(ikan.timeCreated + 4000, now.getTime());
				}

				if (ikan.level < 3) {
					ikan.nextPos = { x: s.x + 200 * (Math.random() - .5), y: s.y - 50 * Math.random() };
				}
			});
			// console.log(s.x, s.y);
		},
		areaLimit: [0, 500, -1, -1],
		price: { B: 30000, R: 600000, Y: 600000 }
	},
	C_3: {
		name: 'Cob',
		type: "C_3",
		img: "C_3",
		desc: "Level up the littlest fish every 4 minutes, if you have enough <img src='" + IMG.icon.money + "' class='icon'>.",
		length: 70,
		height: 50,
		delay: 240000,
		// delay : 4000,
		prepareAnim: f.craft.swanAnim,
		function0: function function0(g) {},
		function1: function function1(g) {},
		function: function _function(g, s) {
			var ikan = g.ikan.sort(function (a, b) {
				return !a ? 1 : !b ? -1 : b.level < a.level ? 1 : -1;
			});
			if (ikan[0] && ikan[0].level < ikan[0].maxLevel) {
				ikan[0].levelUp(g, false);
				g.viewMoney();
			}
		},
		areaLimit: [0, 0, -1, 10],
		price: { B: 10000, R: 100000, Y: 200000 }
	},
	C_4: {
		name: 'Lucy',
		type: "C_4",
		img: "C_4",
		desc: "Generate 450<img src='" + IMG.icon.money + "' class='icon'>/min",
		length: 120,
		height: 60,
		delay: 4000,
		prepareAnim: function prepareAnim(s) {
			f.craft.defaultAnim(s);
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = s.elWrap.querySelectorAll(".ikan .ruas .ruas")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var i = _step.value;

					if (!i) continue;
					i.style.animationName = 'ekorEll';
					// i.style.backgroundColor='red';
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
		},
		function0: function function0(g, s) {},
		function1: function function1(g) {},
		function: function _function(g, s) {
			g.uang += 30;g.viewMoney();
		},
		areaLimit: [0, 0, -1, "-100"],
		price: { B: 500, R: 500 }
	},
	C_5: {
		name: 'Venus',
		type: "C_5",
		img: "C_5",
		desc: "Force fish to generate 40<img src='" + IMG.icon.money + "' class='icon'>/min each.",
		length: 70,
		height: 49,
		delay: 3000,
		function0: function function0(g) {},
		function1: function function1(g) {},
		function: function _function(g, s) {
			g.ikan.map(function (e) {
				return e && (g.uang += 2);
			});
			g.viewMoney();
		},
		price: { B: 50000, R: 50000, Y: 60000 }
	},
	C_6: {
		name: 'Kiiro',
		type: "C_6",
		img: "C_6",
		desc: "Extra 50% <img src='" + IMG.icon.paper + "' class='icon coinY'> production.",
		length: 72,
		height: 30,
		delay: 6000,
		function0: function function0(g) {},
		function1: function function1(g) {},
		function: function _function(g, s) {
			g.ikan.map(function (e) {
				if (!e) return;
				if (Array.isArray(e.claimBase) && e.curr.indexOf("Y") !== -1) {
					g.paper.Y += e.claimBase[e.curr.indexOf("Y")];
				} else if (e.type == "Y") {
					g.paper.Y += e.claimBase;
				}
			});
			g.viewPaper();
		},
		price: { B: 60000, R: 60000, Y: 200000 }
	},
	C_7: {
		name: 'Soga',
		type: "C_7",
		img: "C_7",
		desc: "Extra 50% <img src='" + IMG.icon.paper + "' class='icon coinR'> production.",
		length: 72,
		height: 50,
		delay: 6000,
		function0: function function0(g) {},
		function1: function function1(g) {},
		function: function _function(g, s) {
			g.ikan.map(function (e) {
				if (!e) return;
				if (Array.isArray(e.claimBase) && e.curr.indexOf("R") !== -1) {
					g.paper.R += e.claimBase[e.curr.indexOf("R")];
				} else if (e.type == "R") {
					g.paper.R += e.claimBase;
				}
			});
			g.viewPaper();
		},
		price: { B: 60000, R: 200000, Y: 60000 }
	},
	C_8: {
		name: 'Cai',
		type: "C_8",
		img: "C_8",
		desc: "Extra 50% <img src='" + IMG.icon.paper + "' class='icon coinB'> production.",
		length: 72,
		height: 35,
		delay: 6000,
		function0: function function0(g) {},
		function1: function function1(g) {},
		function: function _function(g, s) {
			g.ikan.map(function (e) {
				if (!e) return;
				if (Array.isArray(e.claimBase) && e.curr.indexOf("B") !== -1) {
					g.paper.B += e.claimBase[e.curr.indexOf("B")];
				} else if (e.type == "B") {
					g.paper.B += e.claimBase;
				}
			});
			g.viewPaper();
		},
		price: { B: 200000, R: 60000, Y: 60000 }
	},
	C_9: {
		name: 'Drake',
		type: "C_9",
		img: "C_9",
		desc: "Generate 300<img src='" + IMG.icon.money + "' class='icon'>/min.<br>Show level on fish.",
		length: 150,
		height: 75,
		delay: 1000,
		function0: function function0(g) {
			g.ikan.map(function (ikan) {
				if (!ikan) return;
				ikan.fishVar.C_9 = ikan.fishVar.C_9 || f.ce("div");
				f.sa(ikan.fishVar.C_9, "class", "C_9");
				if (!ikan.elWrap.contains(ikan.fishVar.C_9)) {
					f.ac(ikan.elWrap, ikan.fishVar.C_9);
				}
				ikan.fishVar.C_9.innerHTML = ikan.level;
			});
		},
		function1: function function1(g) {
			g.ikan.map(function (ikan) {
				if (!ikan) return;
				if (ikan.elWrap.contains(ikan.fishVar.C_9)) {
					f.rc(ikan.elWrap, ikan.fishVar.C_9);
				}
				ikan.fishVar.C_9 = null;
			});
		},
		function: function _function(g) {
			g.uang += 5;g.viewMoney();
			g.ikan.map(function (ikan) {
				if (!ikan) return;
				ikan.fishVar.C_9 = ikan.fishVar.C_9 || f.ce("div");
				f.sa(ikan.fishVar.C_9, "class", "C_9");
				if (!ikan.elWrap.contains(ikan.fishVar.C_9)) {
					f.ac(ikan.elWrap, ikan.fishVar.C_9);
				}
				ikan.fishVar.C_9.innerHTML = ikan.level;
			});
		},
		price: { B: 1000, R: 1000, Y: 1000 }
	}
};