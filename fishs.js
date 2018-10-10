'use strict';

var fishs = {
	B: {
		name: 'Blu',
		type: "B",
		lvlUpCost: 100,
		lifeSpan: 40 * 60 * 1000,
		claimBase: 3,
		price: 100,
		lvlUpVar: { base: [32, 20], inc: [10, 6] }
	},
	R: {
		name: 'Red',
		type: "R",
		lvlUpCost: 200,
		lifeSpan: 40 * 60 * 1000,
		claimBase: 3,
		price: 150,
		lvlUpVar: { base: [37, 23], inc: [10, 6] }
	},
	Y: {
		name: 'Orang',
		type: "Y",
		lvlUpCost: 200,
		lifeSpan: 40 * 60 * 1000,
		claimBase: 3,
		price: 150,
		lvlUpVar: { base: [37, 23], inc: [10, 6] }
	},

	v2_A: {
		v: 2,
		name: 'Nilo',
		img: "D",
		type: "v2_A",
		lvlUpCost: 200,
		lifeSpan: 40 * 60 * 1000,
		curr: ["B"],
		claimBase: [6],
		price: 250,
		lvlUpVar: { base: [24, 9], inc: [8, 3] }
	},
	v2_B: {
		v: 2,
		name: 'Lisa',
		img: "B1",
		type: "v2_B",
		lvlUpCost: 200,
		lifeSpan: 40 * 60 * 1000,
		// lifeSpan : 10000,
		curr: ["R", "Y"],
		claimBase: [2, 2],
		price: 300,
		lvlUpVar: { base: [32, 20], inc: [5, 3] }
	},
	v2_D: {
		v: 2,
		name: 'Fred',
		img: "C",
		type: "v2_D",
		lvlUpCost: 400,
		lifeSpan: 10 * 60 * 1000,
		// lifeSpan : 15000,
		curr: ["R"],
		claimBase: [12],
		price: 950,
		lvlUpVar: { base: [30, 24], inc: [5, 4] }
	},
	v2_C: {
		v: 2,
		name: 'Nani',
		img: "S",
		type: "v2_C",
		lvlUpCost: 500,
		lifeSpan: 172799999,
		// lifeSpan : 186399999,
		curr: ["B", "R", "Y"],
		claimBase: [2, 2, 2],
		price: 30000,
		lvlUpVar: { base: [32, 20], inc: [5, 3] }
	},
	v2_E: {
		v: 2,
		name: 'Nimo',
		img: "V2_1",
		type: "v2_E",
		lvlUpCost: 400,
		lifeSpan: 4800000,
		// lifeSpan : 15000,
		curr: ["B", "R"],
		claimBase: [3, 6],
		price: 1000,
		lvlUpVar: { base: [42, 25], inc: [3, 2] }
	}
};