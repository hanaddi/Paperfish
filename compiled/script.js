(()=>{
	
var i,f={
	ac		:(i,j)		=>i.appendChild(j),
	ce		:(i)		=>document.createElement(i),
	ct		:(i)		=>document.createTextNode(i),
	qs		:(i)		=>document.querySelector(i),
	ra		:(i,j)		=>i.removeAttribute(j),
	rc		:(i,j)		=>i.removeChild(j),
	sa		:(i,j,k)	=>i.setAttribute(j,k),

	numFormat	:(i)	=>(i+"").split("").reverse().reduce((a,b)=>b+(a.split(".").join("").length%3?a:"."+a)),
	timeFormat	:(i)	=>i>=24*60*60000?((i/24/60/60000|0)+"d "+((i%(24*60*60000))/60/60000|0)+"h"):
		i>=60*60000?((i/60/60000|0)+"h "+((i%(60*60000))/60000|0 )+"m"):((i/60000|0 )+((i/60000|0 )>1?" minutes":" minute")),
	lifeBar		:(i)	=>{
		let text="";
		let length = 0;
		if(i>=86400000){
			text += (i/86400000|0)+"d ";
			length++;
			i%=86400000;
		}
		if(length<2 && (i>=3600000 || length==1)){
			text+=(i/3600000|0)+"h ";
			i%=3600000;
			length++;
		}
		if(length<2 && (i>=60000 || length==1)){
			text+=(i/60000|0)+"m ";
			i%=60000;
			length++;
		}
		if(length<2 && (i>=1000 || length==1)){
			text+=(i/1000|0)+"s ";
		}

		return text || "0s";

	},


	credit:()=>{
		let div = f.ce("div");

		div.innerHTML = "<table style='text-align:left'><tr><td>Programming</td><td>:</td><td>Azpald</td></tr> <tr><td>Graphics</td><td>:</td><td>Azpald</td></tr> <tr><td>Music &amp; Sfx</td><td>:</td><td><i>nobody</i></td></tr> <tr><td>Special thanks to</td><td>:</td><td><a target='_blank' href='https://www.kongregate.com/accounts/instanceKilliN'>instanceKilliN</a></td></tr> </table>";

		return div;
	},

	craft :{
		defaultAnim:saya=>{
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
				el.style.backgroundImage = "url('data:image/svg+xml;utf8, "+IMG.fishs[saya.img || saya.type]+"')";
				el.style.backgroundPosition = (-length*i)+"px 0";
				el.style.animationDuration = (1+3*saya.length/200)+"s";
			}
			saya.elWrap.style.left = saya.x +"px";
			saya.elWrap.style.top = saya.y +"px";

			f.ac(saya.elWrap,saya.el);
			f.ac(saya.parentEl,saya.elWrap);

		},
		weedAnim :saya=>{
			saya.elWrap = f.ce("div");
			f.sa(saya.elWrap,"class","weed");
			f.sa(saya.elWrap,"style","z-index:6;");
			saya.elWrap.style.height = saya.height+"px";
			saya.elWrap.style.width = saya.length+"px";

			saya.el = f.ce("div");
			f.sa(saya.el,"class","weed");
			saya.el.style.height = saya.height+"px";
			saya.el.style.width = saya.length+"px";


			saya.el.style.transform=" perspective(400px)";
			let el = saya.el;
			let height = saya.height / 5;
			el.style.backgroundSize = saya.length+"px "+saya.height+"px";

			for(let i=0;i<5;i++){
				f.ac(el,f.ce("div"));
				el = el.childNodes[0];
				f.sa(el,"class","daun");

				el.style.height = (height+1)+"px";
				el.style.bottom = (i?height:0)+"px";
				el.style.width = saya.length+"px";
				el.style.backgroundImage = "url('data:image/svg+xml;utf8, "+IMG.fishs[saya.img || saya.type]+"')";
				el.style.backgroundSize = saya.length+"px "+saya.height+"px";
				el.style.backgroundPosition = "0 "+(-height*(4-i))+"px";

				el.style.animationDuration = (1+3*saya.height/100)+"s";

			}
			saya.elWrap.style.left = saya.x +"px";
			saya.elWrap.style.top = saya.y +"px";

			f.ac(saya.elWrap,saya.el);
			f.ac(saya.parentEl,saya.elWrap);
		
		},
		swanAnim:saya=>{
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
			saya.el.style.backgroundImage = "url('data:image/svg+xml;utf8, "+IMG.fishs[saya.img || saya.type]+"')";
			saya.el.style.backgroundSize= "contain";
			saya.el.style.backgroundPosition= "center center";
			saya.el.style.backgroundRepeat= "no-repeat";

			saya.elWrap.style.left = saya.x +"px";
			saya.elWrap.style.top = saya.y +"px";

			f.ac(saya.elWrap,saya.el);
			f.ac(saya.parentEl,saya.elWrap);

		}

	},

	null	:null
};

var IMG = {
	icon :{
		shop  : "data:image/svg+xml;utf8, %3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%208%208%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Cmetadata%3E%20%3Crdf%3ARDF%3E%20%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%20%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%20%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%20%3Cdc%3Atitle%2F%3E%20%3C%2Fcc%3AWork%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fmetadata%3E%20%3Cg%20transform%3D%22translate(-157.47%20-290.48)%22%3E%20%3Cpath%20d%3D%22m159.61%20293.9%201.1873%203.188h1.5642c1.4062%200%202.5475-1.3862%202.7289-3.188z%22%20fill%3D%22%233986c8%22%2F%3E%20%3Cpath%20d%3D%22m157.66%20292.79%200.26403%200.64795h1.1702l-0.26403-0.64795h-1.1702z%22%20fill%3D%22%233a5c79%22%2F%3E%20%3Cpath%20d%3D%22m160.63%20294.79c0.88494-1.0893%204.4198%200.93803%203.6792-2.9566-3.9612-0.30863-1.4123%203.0555-2.2597%204.1089%22%20fill%3D%22%237e414a%22%20fill-rule%3D%22evenodd%22%20stroke%3D%22%237e414a%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.31173%22%2F%3E%20%3Cpath%20d%3D%22m159.61%20293.9%201.1873%203.188h1.5642c1.4062%200%202.5475-1.3862%202.7289-3.188z%22%20fill%3D%22%233986c8%22%20fill-opacity%3D%22.50877%22%2F%3E%20%3Cpath%20d%3D%22m158.73%20292.79%201.7933%204.3845h3.1768l-0.27883-0.68637h-2.4861l-1.5103-3.6982z%22%20fill%3D%22%233a5c79%22%2F%3E%20%3Ccircle%20cx%3D%22161.27%22%20cy%3D%22297.3%22%20r%3D%22.59988%22%20fill%3D%22%233a5c79%22%2F%3E%20%3Ccircle%20cx%3D%22162.67%22%20cy%3D%22297.3%22%20r%3D%22.59988%22%20fill%3D%22%233a5c79%22%2F%3E%20%3C%2Fg%3E%20%3C%2Fsvg%3E%20",
		tank  : "data:image/svg+xml;utf8, %3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%208%208%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-157.47%20-290.48)%22%3E%3Crect%20x%3D%22158.48%22%20y%3D%22292.13%22%20width%3D%225.9734%22%20height%3D%225.1246%22%20ry%3D%220%22%20fill%3D%22%233986c8%22%2F%3E%3Cpath%20d%3D%22m158.41%20291.57v5.8438h6.125v-5.8438h-0.0762v5.6856h-5.9727v-5.6856h-0.0762z%22%20fill%3D%22%23e6e6e6%22%20stroke%3D%22%233a5c79%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m159.34%20294.42c1.1448-0.38556%202.7842%202.7151%204.0366-0.45913-2.7401-2.0463-2.4328%201.5736-3.5338%201.9503%22%20fill%3D%22%237e414a%22%20fill-rule%3D%22evenodd%22%20stroke%3D%22%237e414a%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.26831%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		save  : "data:image/svg+xml;utf8, %3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%208%208%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Cmetadata%3E%20%3Crdf%3ARDF%3E%20%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%20%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%20%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%20%3Cdc%3Atitle%2F%3E%20%3C%2Fcc%3AWork%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fmetadata%3E%20%3Cg%20transform%3D%22translate(-157.47%20-290.48)%22%3E%20%3Cpath%20d%3D%22m160.86%20291.03c-1.0988%200-1.9835%200.88463-1.9835%201.9835%200%200.0248%207e-3%200.0479%208e-3%200.0726-0.56107%200.045-1.0012%200.50625-1.0012%201.0793%200%200.60292%200.48539%201.0883%201.0883%201.0883h5.0507c0.60294%200%201.0883-0.48539%201.0883-1.0883%200-0.60294-0.48538-1.0883-1.0883-1.0883h-0.0844c2e-3%20-0.0215%207e-3%20-0.0417%207e-3%20-0.0634%200-0.57726-0.46481-1.0421-1.0421-1.0421-0.11526%200-0.22393%200.0229-0.3274%200.0572-0.34162-0.59508-0.97604-0.99854-1.7141-0.99854z%22%20fill%3D%22%233986c8%22%20stroke-width%3D%220%22%2F%3E%20%3Cpath%20d%3D%22m160.05%20291.21c-0.69069%200.30956-1.1714%200.99948-1.1714%201.8079%200%200.0248%206e-3%200.0478%207e-3%200.0725-0.56108%200.045-1.001%200.50594-1.001%201.079%200%200.60292%200.48508%201.088%201.088%201.088h5.0502c0.48441%200%200.87902-0.31852%201.0209-0.75436-0.2167%200.0638-0.44212%200.1088-0.68001%200.1088h-2.1289c-1.3327%200-2.4063-1.0718-2.4063-2.4045%200-0.35706%200.0828-0.69323%200.22122-0.99735z%22%20fill%3D%22%233a5c79%22%20stroke-width%3D%220%22%2F%3E%20%3Cg%20transform%3D%22matrix(1.8143%200%200%201.8143%20-131.54%20-239.21)%22%20fill%3D%22%23ba3a4e%22%3E%20%3Crect%20transform%3D%22matrix(.71572%20-.69839%20.69839%20.71572%200%200)%22%20x%3D%22-90.055%22%20y%3D%22322.53%22%20width%3D%22.96859%22%20height%3D%221.8921%22%20rx%3D%22.4843%22%20ry%3D%220%22%2F%3E%20%3Crect%20transform%3D%22matrix(.71572%20-.69839%20.69839%20.71572%200%200)%22%20x%3D%22-91.009%22%20y%3D%22322.53%22%20width%3D%221.9222%22%20height%3D%22.96859%22%20rx%3D%220%22%20ry%3D%22.4843%22%2F%3E%20%3Crect%20x%3D%22161%22%20y%3D%22293.28%22%20width%3D%22.96859%22%20height%3D%222.7658%22%20rx%3D%22.4843%22%20ry%3D%220%22%2F%3E%20%3C%2Fg%3E%20%3Cpath%20d%3D%22m161.45%20293.37c-0.0945-9.2e-4%20-0.18783%200.032-0.26294%200.10519l-1.2385%201.2077c-0.15162%200.14783-0.15379%200.3684-6e-3%200.52043%200.11475%200.11754%200.26852%200.13771%200.41164%200.0725a0.51069%200.51069%200%200%201%200.72172%200.46422v1.2984c0%200.21217%200.15468%200.36629%200.36811%200.36629%200.21344%200%200.36811-0.15285%200.36811-0.36629v-1.2802a0.51069%200.51069%200%200%201%200.68002-0.48054c0.13497%200.0478%200.27369%200.0248%200.37898-0.078%200.15296-0.14908%200.15557-0.36662%208e-3%20-0.51863l-1.1714-1.2004c-0.0746-0.0765-0.16182-0.1097-0.25749-0.11063z%22%20fill%3D%22%23e3951d%22%2F%3E%20%3C%2Fg%3E%20%3C%2Fsvg%3E",
		craft : "data:image/svg+xml;utf8, %3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%208%208%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-147.47%20-300.48)%22%3E%3Cpath%20d%3D%22m148.51%20302.15c1.8042%200.0189%202.5926%205.1981%205.9191%201.3365-2.859-4.2331-4.2048%201.0237-5.9428%201.0139%22%20fill%3D%22%233a5c79%22%20fill-rule%3D%22evenodd%22%20stroke%3D%22%233a5c79%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.40077%22%2F%3E%3Ccircle%20cx%3D%22153.2%22%20cy%3D%22302.83%22%20r%3D%22.39062%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20transform%3D%22translate(157.47%20290.48)%22%20d%3D%22m-6.8496%2012.779c-0.042242-0.0058-0.086963-4e-3%20-0.13086%200.0078-0.17559%200.04719-0.27961%200.22676-0.23242%200.40234l0.72461%202.6934c0.033422%200.12437%200.13422%200.20836%200.25195%200.23242%200.024925%200.0051%200.050092%200.0048%200.076172%200.0039%200.025526%207.41e-4%200.049814%200.0011%200.074219-0.0039%200.11759-0.02416%200.21856-0.10816%200.25195-0.23242l0.72266-2.6934c0.047185-0.17558-0.054883-0.35516-0.23047-0.40234-0.17559-0.04718-0.35516%200.05684-0.40234%200.23242l-0.41602%201.5508-0.41797-1.5508c-0.035389-0.13169-0.14476-0.22284-0.27148-0.24023zm-0.5957%202.7227c-0.36769%200.05173-0.68913%200.31619-0.79102%200.69531-0.13585%200.50551%200.16832%201.0321%200.67383%201.168%200.50549%200.13584%201.0321-0.16636%201.168-0.67188%200.13584-0.5055-0.16832-1.0321-0.67383-1.168-0.12638-0.03396-0.25439-0.04068-0.37695-0.02344zm2.5664%200c-0.12256-0.01724-0.24862-0.01052-0.375%200.02344-0.50551%200.13584-0.80967%200.66247-0.67383%201.168%200.13585%200.50551%200.66248%200.80772%201.168%200.67188%200.50551-0.13585%200.80772-0.66246%200.67188-1.168-0.10189-0.37912-0.42332-0.64358-0.79102-0.69531zm-2.4961%200.52344c0.054518-0.0071%200.11228-0.0038%200.16992%200.01172%200.23057%200.062%200.36079%200.28701%200.29883%200.51758-0.062%200.23057-0.28896%200.3608-0.51953%200.29883-0.23058-0.062-0.35882-0.28701-0.29688-0.51758%200.0465-0.17293%200.1841-0.28935%200.34766-0.31055zm2.4277%200c0.16355%200.0212%200.30116%200.13762%200.34766%200.31055%200.06195%200.23057-0.068248%200.45558-0.29883%200.51758-0.23057%200.06197-0.45558-0.06826-0.51758-0.29883-0.06196-0.23057%200.068258-0.45558%200.29883-0.51758%200.057645-0.01549%200.1154-0.01879%200.16992-0.01172z%22%20fill-opacity%3D%22.6%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.3%22%2F%3E%3Cg%20transform%3D%22matrix(1.0172%20-.3013%20.3013%201.0172%20-112.67%2045.599)%22%20fill%3D%22%237e414a%22%3E%3Crect%20transform%3D%22matrix(.85226%20.52312%20-.52312%20.85226%200%200)%22%20x%3D%22303.78%22%20y%3D%22169.78%22%20width%3D%22.61872%22%20height%3D%223.2483%22%20rx%3D%22.30936%22%20ry%3D%220%22%2F%3E%3Cpath%20d%3D%22m168.05%20305.79c-0.42051-0.25811-0.97757-0.12481-1.2357%200.2957-0.25812%200.42052-0.1248%200.97758%200.29571%201.2357%200.42051%200.25811%200.97757%200.1248%201.2357-0.29572%200.25811-0.42051%200.12481-0.97757-0.29571-1.2357zm-0.26156%200.42613c0.1918%200.11773%200.24887%200.35619%200.13114%200.54799-0.11773%200.19181-0.3562%200.24888-0.548%200.13115-0.19181-0.11774-0.24887-0.3562-0.13114-0.54801%200.11773-0.1918%200.35619-0.24887%200.548-0.13113z%22%20color%3D%22%23000000%22%20color-rendering%3D%22auto%22%20image-rendering%3D%22auto%22%20shape-rendering%3D%22auto%22%20solid-color%3D%22%23000000%22%20style%3D%22block-progression%3Atb%3Bisolation%3Aauto%3Bmix-blend-mode%3Anormal%3Btext-decoration-color%3A%23000000%3Btext-decoration-line%3Anone%3Btext-decoration-style%3Asolid%3Btext-indent%3A0%3Btext-transform%3Anone%3Bwhite-space%3Anormal%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(-1.0172%20-.3013%20-.3013%201.0172%20415.29%2045.599)%22%20fill%3D%22%237e414a%22%3E%3Crect%20transform%3D%22matrix(.85226%20.52312%20-.52312%20.85226%200%200)%22%20x%3D%22303.78%22%20y%3D%22169.78%22%20width%3D%22.61872%22%20height%3D%223.2483%22%20rx%3D%22.30936%22%20ry%3D%220%22%2F%3E%3Cpath%20d%3D%22m168.05%20305.79c-0.42051-0.25811-0.97757-0.12481-1.2357%200.2957-0.25812%200.42052-0.1248%200.97758%200.29571%201.2357%200.42051%200.25811%200.97757%200.1248%201.2357-0.29572%200.25811-0.42051%200.12481-0.97757-0.29571-1.2357zm-0.26156%200.42613c0.1918%200.11773%200.24887%200.35619%200.13114%200.54799-0.11773%200.19181-0.3562%200.24888-0.548%200.13115-0.19181-0.11774-0.24887-0.3562-0.13114-0.54801%200.11773-0.1918%200.35619-0.24887%200.548-0.13113z%22%20color%3D%22%23000000%22%20color-rendering%3D%22auto%22%20image-rendering%3D%22auto%22%20shape-rendering%3D%22auto%22%20solid-color%3D%22%23000000%22%20style%3D%22block-progression%3Atb%3Bisolation%3Aauto%3Bmix-blend-mode%3Anormal%3Btext-decoration-color%3A%23000000%3Btext-decoration-line%3Anone%3Btext-decoration-style%3Asolid%3Btext-indent%3A0%3Btext-transform%3Anone%3Bwhite-space%3Anormal%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		help  : "data:image/svg+xml;utf8, %3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%208%208%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-157.47%20-290.48)%22%3E%3Cpath%20d%3D%22m160.93%20290.73c-1.0013%200-1.808%200.8067-1.808%201.808%200%200.0226%207e-3%200.0438%208e-3%200.0663-0.025%202e-3%20-0.0459%200.0149-0.0704%200.0187-0.099%200.0155-0.19485%200.0344-0.28166%200.0767-0.0191%209e-3%20-0.0334%200.0249-0.0517%200.0352-0.0862%200.049-0.16861%200.10228-0.23609%200.17396-0.0369%200.0386-0.0589%200.0884-0.089%200.13255-0.0379%200.0562-0.0818%200.10627-0.10769%200.16983-0.04%200.0965-0.0569%200.20321-0.0642%200.31273-1e-3%200.0211-0.0125%200.0387-0.0125%200.0601v2e-3%202e-3c5.6e-4%200.13581%200.0291%200.26564%200.0787%200.38314%202.6e-4%206.2e-4%20-2.6e-4%201e-3%200%202e-3%200.05%200.11809%200.12203%200.22351%200.21125%200.31274%200.17935%200.17997%200.42675%200.29201%200.70209%200.29201h0.0767c-2e-3%200.0189-6e-3%200.0368-6e-3%200.056%200%200.52602%200.42254%200.95061%200.94854%200.95061%200.10498%200%200.20396-0.0206%200.29824-0.0517%200.3113%200.54226%200.89107%200.9092%201.5636%200.9092%201.0013%200%201.808-0.80671%201.808-1.808%200-0.0226-7e-3%20-0.0438-8e-3%20-0.0663%200.0251-2e-3%200.0459-0.0149%200.0704-0.0187%200.099-0.0155%200.19485-0.0344%200.28167-0.0767%200.0192-9e-3%200.0334-0.0249%200.0517-0.0352%200.0862-0.049%200.16862-0.10229%200.2361-0.17398%200.0369-0.0386%200.0589-0.0884%200.089-0.13255%200.0379-0.0562%200.0818-0.10625%200.1077-0.16982%200.04-0.0964%200.0569-0.20321%200.0642-0.31273%201e-3%20-0.0216%200.0124-0.0401%200.0125-0.0621-2.8e-4%20-0.1372-0.0284-0.26874-0.0787-0.38729-0.0498-0.11818-0.12218-0.22335-0.21125-0.31272-0.17935-0.17998-0.42675-0.29202-0.70208-0.29202h-0.0767c2e-3%20-0.0189%206e-3%20-0.0368%206e-3%20-0.056%200-0.52601-0.42253-0.95061-0.94854-0.95061-0.10497%200-0.20395%200.0206-0.29823%200.0517-0.3113-0.54225-0.89107-0.90918-1.5636-0.90918z%22%20fill%3D%22%233986c8%22%20stroke-width%3D%220%22%2F%3E%3Ccircle%20cx%3D%22159.02%22%20cy%3D%22296.02%22%20r%3D%22.79528%22%20fill%3D%22%233986c8%22%2F%3E%3Ccircle%20cx%3D%22159.75%22%20cy%3D%22297.57%22%20r%3D%22.6296%22%20fill%3D%22%233986c8%22%2F%3E%3Cg%20fill%3D%22%237e414a%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.21208%22%3E%3Cpath%20d%3D%22m160.58%20293.72q0-0.24851%200.0388-0.51254%200.0466-0.26403%200.15532-0.48147%200.11648-0.21744%200.31062-0.35723%200.19415-0.14755%200.51254-0.14755h1.0872q0.25627%200%200.45041%200.10872%200.20191%200.10096%200.32616%200.26404%200.13202%200.16308%200.20191%200.37275%200.0777%200.20968%200.0932%200.41935%200.0233%200.20967-0.0155%200.40382-0.0311%200.19414-0.10872%200.34169l-0.86976%201.592v0.69891h-0.89306v-0.7921l0.82317-1.4367q0.0699-0.11648%200.0932-0.30286%200.0311-0.18638%200-0.35722-0.0233-0.17861-0.11648-0.30286-0.0854-0.12425-0.2485-0.12425h-0.50477q-0.13202%200-0.21744%200.0466-0.0854%200.0388-0.13979%200.12425-0.0466%200.0777-0.0621%200.19414-0.0155%200.10872-0.0155%200.24851h-0.90083zm2.2055%204.1314h-0.91635v-0.90858h0.91635v0.90858z%22%20fill%3D%22%237e414a%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.21208%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		book  : "data:image/svg+xml;utf8,%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%208%208%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-157.47%20-290.48)%22%3E%3Cpath%20d%3D%22m158.97%20293.1c-0.22121-1.9e-4%20-0.40058%200.17918-0.40039%200.40039l-0.41984%204.0273c-1.9e-4%200.22121%200.17918%200.40058%200.40039%200.40039h5.8438c0.22121%201.9e-4%200.40058-0.17918%200.40039-0.40039v-0.0762l-0.44194-3.875v-0.0762c-6.2e-4%20-0.067-0.0181-0.13287-0.0508-0.19141-0.0133-0.0237-0.029-0.0459-0.0469-0.0664-9e-3%20-0.01-0.0178-0.0187-0.0273-0.0274-0.01-0.01-0.0203-0.0188-0.0312-0.0273-0.0531-0.0408-0.11551-0.0677-0.18164-0.0781-0.013-2e-3%20-0.026-3e-3%20-0.0391-4e-3%20-0.01-3.6e-4%20-0.0195-3.6e-4%20-0.0293%200l6e-3%20-6e-3h-4.982z%22%20color%3D%22%23000000%22%20color-rendering%3D%22auto%22%20fill%3D%22%23e3951d%22%20image-rendering%3D%22auto%22%20shape-rendering%3D%22auto%22%20solid-color%3D%22%23000000%22%20style%3D%22block-progression%3Atb%3Bisolation%3Aauto%3Bmix-blend-mode%3Anormal%3Btext-decoration-color%3A%23000000%3Btext-decoration-line%3Anone%3Btext-decoration-style%3Asolid%3Btext-indent%3A0%3Btext-transform%3Anone%3Bwhite-space%3Anormal%22%2F%3E%3Cpath%20d%3D%22m164.03%20295.71v1.9734h-5.1246v-1.9734z%22%20fill%3D%22%233986c8%22%2F%3E%3Cpath%20d%3D%22m158.97%20293.1c-0.22121-1.9e-4%20-0.40058%200.17918-0.40039%200.40039l-0.41985%204.0274c-1.9e-4%200.22121%200.17918%200.40058%200.40039%200.40039h0.0215l0.41984-4.8281zm4.9761%200v6e-3l6e-3%20-6e-3zm0%206e-3%200.44195%204.8223h6e-3c0.22121%201.9e-4%200.40058-0.17918%200.40039-0.40039v-0.0762l-0.44195-3.875v-0.0762c-6.2e-4%20-0.067-0.0181-0.13287-0.0508-0.19141-0.0133-0.0237-0.029-0.0459-0.0469-0.0664-9e-3%20-0.01-0.0178-0.0186-0.0273-0.0273-0.01-0.01-0.0204-0.0188-0.0312-0.0273-0.0531-0.0408-0.11551-0.0677-0.18164-0.0781-0.013-2e-3%20-0.026-3e-3%20-0.0391-4e-3%20-0.01-3.6e-4%20-0.0195-3.6e-4%20-0.0293%200z%22%20color%3D%22%23000000%22%20color-rendering%3D%22auto%22%20fill%3D%22%23795620%22%20image-rendering%3D%22auto%22%20shape-rendering%3D%22auto%22%20solid-color%3D%22%23000000%22%20style%3D%22block-progression%3Atb%3Bisolation%3Aauto%3Bmix-blend-mode%3Anormal%3Btext-decoration-color%3A%23000000%3Btext-decoration-line%3Anone%3Btext-decoration-style%3Asolid%3Btext-indent%3A0%3Btext-transform%3Anone%3Bwhite-space%3Anormal%22%2F%3E%3Cpath%20d%3D%22m158.97%20291.03c-0.22121-1.9e-4%20-0.40058%200.17918-0.40039%200.40039l-0.41984%204.0273c-1.9e-4%200.22121%200.17918%200.40058%200.40039%200.40039h5.8438c0.22121%201.9e-4%200.40058-0.17918%200.40039-0.40039v-0.0762l-0.44194-3.875v-0.0762c-6.2e-4%20-0.067-0.0181-0.13287-0.0508-0.19141-0.0133-0.0237-0.029-0.0459-0.0469-0.0664-9e-3%20-0.01-0.0178-0.0187-0.0273-0.0274-0.01-0.01-0.0203-0.0188-0.0312-0.0273-0.0531-0.0408-0.11551-0.0677-0.18164-0.0781-0.013-2e-3%20-0.026-3e-3%20-0.0391-4e-3%20-0.01-3.6e-4%20-0.0195-3.6e-4%20-0.0293%200l6e-3%20-6e-3h-4.982z%22%20color%3D%22%23000000%22%20color-rendering%3D%22auto%22%20fill%3D%22%23e3951d%22%20image-rendering%3D%22auto%22%20shape-rendering%3D%22auto%22%20solid-color%3D%22%23000000%22%20style%3D%22block-progression%3Atb%3Bisolation%3Aauto%3Bmix-blend-mode%3Anormal%3Btext-decoration-color%3A%23000000%3Btext-decoration-line%3Anone%3Btext-decoration-style%3Asolid%3Btext-indent%3A0%3Btext-transform%3Anone%3Bwhite-space%3Anormal%22%2F%3E%3Cpath%20d%3D%22m158.97%20291.03c-0.22121-1.9e-4%20-0.40058%200.17918-0.40039%200.40039l-0.41985%204.0274c-1.9e-4%200.22121%200.17918%200.40058%200.40039%200.40039h0.0215l0.41984-4.8281zm4.9761%200v6e-3l6e-3%20-6e-3zm0%206e-3%200.44195%204.8223h6e-3c0.22121%201.9e-4%200.40058-0.17918%200.40039-0.40039v-0.0762l-0.44195-3.875v-0.0762c-6.2e-4%20-0.067-0.0181-0.13287-0.0508-0.19141-0.0133-0.0237-0.029-0.0459-0.0469-0.0664-9e-3%20-0.01-0.0178-0.0186-0.0273-0.0273-0.01-0.01-0.0204-0.0188-0.0312-0.0273-0.0531-0.0408-0.11551-0.0677-0.18164-0.0781-0.013-2e-3%20-0.026-3e-3%20-0.0391-4e-3%20-0.01-3.6e-4%20-0.0195-3.6e-4%20-0.0293%200z%22%20color%3D%22%23000000%22%20color-rendering%3D%22auto%22%20fill%3D%22%23795620%22%20image-rendering%3D%22auto%22%20shape-rendering%3D%22auto%22%20solid-color%3D%22%23000000%22%20style%3D%22block-progression%3Atb%3Bisolation%3Aauto%3Bmix-blend-mode%3Anormal%3Btext-decoration-color%3A%23000000%3Btext-decoration-line%3Anone%3Btext-decoration-style%3Asolid%3Btext-indent%3A0%3Btext-transform%3Anone%3Bwhite-space%3Anormal%22%2F%3E%3Cpath%20d%3D%22m164.39%20295.43h-5.8438v2.125h5.8438v-0.0762h-5.6856v-1.9727h5.6856v-0.0762z%22%20fill%3D%22%23e6e6e6%22%20stroke%3D%22%233a5c79%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.8%22%2F%3E%3Cpath%20d%3D%22m160%20291.47c-0.1301-1.2e-4%20-0.2356%200.10538-0.23548%200.23547l-0.24692%202.3686c-1.1e-4%200.13009%200.10538%200.23558%200.23548%200.23547h3.4368c0.1301%201.1e-4%200.23559-0.10538%200.23548-0.23547v-0.0448l-0.25991-2.279v-0.0448c-3.7e-4%20-0.0394-0.0106-0.0781-0.0299-0.11257-8e-3%20-0.0139-0.017-0.027-0.0276-0.039-5e-3%20-6e-3%20-0.0105-0.011-0.0161-0.0161-6e-3%20-6e-3%20-0.0119-0.0111-0.0183-0.016-0.0312-0.024-0.0679-0.0398-0.10683-0.046-8e-3%20-8.7e-4%20-0.0153-2e-3%20-0.023-3e-3%20-6e-3%20-2.1e-4%20-0.0114-2.1e-4%20-0.0172%200l3e-3%20-3e-3h-2.93z%22%20color%3D%22%23000000%22%20color-rendering%3D%22auto%22%20fill%3D%22%23ba3a4e%22%20image-rendering%3D%22auto%22%20shape-rendering%3D%22auto%22%20solid-color%3D%22%23000000%22%20style%3D%22block-progression%3Atb%3Bisolation%3Aauto%3Bmix-blend-mode%3Anormal%3Btext-decoration-color%3A%23000000%3Btext-decoration-line%3Anone%3Btext-decoration-style%3Asolid%3Btext-indent%3A0%3Btext-transform%3Anone%3Bwhite-space%3Anormal%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		paper : "data:image/svg+xml;utf8, %3Csvg%20width%3D%222.3183mm%22%20height%3D%222.3183mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%208.2143%208.2143%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-157.47%20-290.26)%22%3E%3Cpath%20transform%3D%22translate(157.47%20290.26)%22%20d%3D%22m4.1074%200.25781c-2.1322%200-3.8496%201.7174-3.8496%203.8496%200%202.1322%201.7174%203.8477%203.8496%203.8477%202.1322%200%203.8477-1.7155%203.8477-3.8477%200-2.1322-1.7155-3.8496-3.8477-3.8496zm-0.64453%202.1465h3.5l-1.1582%202.2344-2.5371%201.3809h-1.6797l1.875-3.6152z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.76023%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.1%22%2F%3E%3Cpath%20transform%3D%22translate(157.47%20290.26)%22%20d%3D%22m4.1074%200c-2.2754%200-4.1074%201.8321-4.1074%204.1074s1.8321%204.1074%204.1074%204.1074%204.1074-1.8321%204.1074-4.1074-1.8321-4.1074-4.1074-4.1074zm0%200.25781c2.1322%200%203.8477%201.7174%203.8477%203.8496%200%202.1322-1.7155%203.8477-3.8477%203.8477-2.1322%200-3.8496-1.7155-3.8496-3.8477%200-2.1322%201.7174-3.8496%203.8496-3.8496z%22%20fill%3D%22%231b1b1b%22%20fill-opacity%3D%22.5614%22%2F%3E%3Cpath%20d%3D%22m160.74%20296.28%202.5373-1.381-1.2382-0.18464z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.64327%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.1%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		money : "data:image/svg+xml;utf8, %3Csvg%20width%3D%222.3183mm%22%20height%3D%222.3183mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%208.2143%208.2143%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Cmetadata%3E%20%3Crdf%3ARDF%3E%20%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%20%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%20%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%20%3Cdc%3Atitle%2F%3E%20%3C%2Fcc%3AWork%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fmetadata%3E%20%3Cg%20transform%3D%22translate(-157.47%20-290.26)%22%3E%20%3Crect%20x%3D%22157.47%22%20y%3D%22290.26%22%20width%3D%228.2143%22%20height%3D%228.2143%22%20rx%3D%224.1071%22%20ry%3D%224.1071%22%20fill%3D%22%23f9961e%22%2F%3E%20%3Crect%20x%3D%22157.73%22%20y%3D%22290.52%22%20width%3D%227.6974%22%20height%3D%227.6974%22%20rx%3D%223.8487%22%20ry%3D%223.8487%22%20fill%3D%22%23eda600%22%20stroke%3D%22%23662c00%22%20stroke-linecap%3D%22square%22%20stroke-width%3D%22.28112%22%2F%3E%20%3Cg%20transform%3D%22matrix(.60967%200%200%20.60967%2075.493%20111.25)%22%20fill%3D%22%237b3800%22%20stroke%3D%22%23662c00%22%20stroke-width%3D%22.18043%22%3E%20%3Cpath%20d%3D%22m140.21%20297.6v2.6348h1.193q0.66223%200%201.0239-0.34286%200.36164-0.34285%200.36164-0.9769%200-0.62935-0.36164-0.97221t-1.0239-0.34286h-1.193zm-0.94873-0.77964h2.1417q1.1789%200%201.78%200.53542%200.60587%200.53072%200.60587%201.5593%200%201.038-0.60587%201.5687-0.60117%200.53072-1.78%200.53072h-1.193v2.818h-0.94873v-7.0121z%22%20fill%3D%22%237b3800%22%20stroke%3D%22%23662c00%22%20stroke-width%3D%22.18043%22%2F%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3C%2Fsvg%3E%20",
		heart : "data:image/svg+xml;utf8, %3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%208%208%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-117.47%20-290.48)%22%3E%3Cpath%20d%3D%22m119.97%20291.13c-0.56974%204e-3%20-1.1375%200.22829-1.5705%200.66838-0.82724%200.84069-0.84487%202.1559-0.0786%203.0273l0.0117-0.0117c0.0371%200.0424%200.0516%200.0959%200.0924%200.13601l3.0624%203.0135%203.0624-3.0135c0.0408-0.0401%200.0554-0.0936%200.0924-0.13601%200.76252-0.87147%200.75898-2.1763-0.0669-3.0156-0.84751-0.8613-2.205-0.87764-3.0879-0.0669-0.0194%200.0178%200.0444-0.0388%200.0255-0.0202%200.0199-0.0195-0.0459%200.0293-0.0255%200.0107-0.4313-0.39463-0.97334-0.59626-1.5174-0.59187z%22%20fill%3D%22%23ba3a4e%22%20stroke%3D%22%23800000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.339%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		check : "data:image/svg+xml;utf8,%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%208%208%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-157.47%20-290.48)%22%3E%3Ccircle%20cx%3D%22161.43%22%20cy%3D%22294.52%22%20r%3D%223.3575%22%20fill%3D%22%23fff%22%20stroke%3D%22%23008000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.62797%22%2F%3E%3Cg%20transform%3D%22matrix(.15783%20-.12526%20.12526%20.15783%2092.228%20274.47)%22%20fill%3D%22%23008000%22%20stroke-width%3D%221px%22%3E%3Cpath%20d%3D%22m201.47%20282.26v10.234h19.266v4.6094h-23.914v-14.844z%22%20fill%3D%22%23008000%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		warn  : "data:image/svg+xml;utf8,%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%208%208%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-157.47%20-290.48)%22%3E%3Cpath%20transform%3D%22translate(157.47%20290.48)%22%20d%3D%22m4.1992%200.35352-2.9609%200.61914%202.541%204.9512%201.1484-0.59766-0.67383-4.5977-0.054687-0.375zm1.0195%205.709-1.1973%200.52148%200.53125%201.0176%200.98438-0.50781-0.095703-0.31055-0.16016-0.51953-0.0625-0.20117z%22%20fill%3D%22%23fff%22%20stroke%3D%22%23dbdbdb%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.5%22%2F%3E%3Cpath%20d%3D%22m158.71%20291.45%202.9619-0.61872%200.7292%204.9727-1.1499%200.59663z%22%20fill%3D%22%23ff0028%22%2F%3E%3Cpath%20d%3D%22m161.49%20297.06%201.1963-0.52228%200.31962%201.0303-0.9856%200.50934z%22%20fill%3D%22%23ff0028%22%2F%3E%3Cpath%20d%3D%22m158.71%20291.45%202.9619-0.61872%200.0549%200.37415-2.1552%200.50024%201.8845%204.1975%200.89594-0.43399%200.0491%200.33477-1.1499%200.59663z%22%20fill%3D%22%23b13d4e%22%2F%3E%3Cpath%20d%3D%22m161.49%20297.06%201.1963-0.52228%200.0624%200.20127-0.85293%200.42395%200.27181%200.50857%200.74241-0.41263%200.0959%200.30911-0.9856%200.50934z%22%20fill%3D%22%23b13d4e%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		gear  : "data:image/svg+xml;utf8,%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%208%208%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-157.47%20-290.48)%22%20fill%3D%22%231d1d1d%22%20stroke%3D%22%23e9e9e9%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Crect%20x%3D%22163.22%22%20y%3D%22294.26%22%20width%3D%221.8376%22%20height%3D%22.42342%22%20rx%3D%220%22%20ry%3D%22.42342%22%20stroke-width%3D%22.7%22%2F%3E%3Crect%20transform%3D%22rotate(-90)%22%20x%3D%22-292.73%22%20y%3D%22161.25%22%20width%3D%221.8376%22%20height%3D%22.42342%22%20rx%3D%220%22%20ry%3D%22.42342%22%20stroke-width%3D%22.7%22%2F%3E%3Crect%20transform%3D%22scale(-1)%22%20x%3D%22-159.73%22%20y%3D%22-294.69%22%20width%3D%221.8376%22%20height%3D%22.42342%22%20rx%3D%220%22%20ry%3D%22.42342%22%20stroke-width%3D%22.7%22%2F%3E%3Crect%20transform%3D%22rotate(90)%22%20x%3D%22296.22%22%20y%3D%22-161.69%22%20width%3D%221.8376%22%20height%3D%22.42342%22%20rx%3D%220%22%20ry%3D%22.42342%22%20stroke-width%3D%22.7%22%2F%3E%3Crect%20transform%3D%22matrix(.70711%20-.70711%20.70711%20.70711%200%200)%22%20x%3D%22-92.304%22%20y%3D%22322.18%22%20width%3D%221.8376%22%20height%3D%22.42342%22%20rx%3D%220%22%20ry%3D%22.42342%22%20stroke-width%3D%22.7%22%2F%3E%3Crect%20transform%3D%22matrix(-.70711%20-.70711%20.70711%20-.70711%200%200)%22%20x%3D%22-320.66%22%20y%3D%22-94.267%22%20width%3D%221.8376%22%20height%3D%22.42342%22%20rx%3D%220%22%20ry%3D%22.42342%22%20stroke-width%3D%22.7%22%2F%3E%3Crect%20transform%3D%22matrix(-.70711%20.70711%20-.70711%20-.70711%200%200)%22%20x%3D%2295.793%22%20y%3D%22-322.62%22%20width%3D%221.8376%22%20height%3D%22.42342%22%20rx%3D%220%22%20ry%3D%22.42342%22%20stroke-width%3D%22.7%22%2F%3E%3Crect%20transform%3D%22matrix(.70711%20.70711%20-.70711%20.70711%200%200)%22%20x%3D%22324.15%22%20y%3D%2293.83%22%20width%3D%221.8376%22%20height%3D%22.42342%22%20rx%3D%220%22%20ry%3D%22.42342%22%20stroke-width%3D%22.7%22%2F%3E%3Cpath%20d%3D%22m161.03%20297.38c-1.2337-0.17974-2.2333-1.1539-2.4546-2.392-0.0557-0.31142-0.0251-1.0254%200.0553-1.292%200.25663-0.85111%200.78849-1.4881%201.5543-1.8614%200.38849-0.18942%200.69892-0.26486%201.1719-0.28479%200.81621-0.0344%201.5149%200.22416%202.1122%200.7816%200.67673%200.6316%201.0018%201.4946%200.91551%202.4303-0.034%200.36855-0.0984%200.60132-0.26599%200.96143-0.54518%201.1716-1.7999%201.8447-3.0886%201.6569z%22%20stroke-width%3D%22.266%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		_plus :(t)=>t.split(encodeURIComponent("</svg>")).join(encodeURIComponent('<g transform="translate(-157.47 -290.48)"><path d="m163.39 293.53v1.981h1.9734v0.89219h-1.9734v1.981h-0.89975v-1.981h-1.9734v-0.89219h1.9734v-1.981h0.89975z" fill="#00ee00" stroke="#008000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".2"/></g></svg>'))
	},
	fishs : {
		A:"%3Csvg%20width%3D%2270.556mm%22%20height%3D%2228.222mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20250%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-144.43%20-293.55)%22%3E%3Cpath%20d%3D%22m311.44%20333.24-27.873%2018.81%2013.315%2028.44-11.304-4.7358-11.936-29.237%2026.452-15.29z%22%20fill%3D%22%23315b86%22%2F%3E%3Cpath%20d%3D%22m280.22%20293.55-11.442%2015.158-10.68%2015.679-24.472-5.2192%207.8671-14.314%2015.382-7.2996z%22%20fill%3D%22%23315b86%22%2F%3E%3Cpath%20d%3D%22m343.47%20328.39-24.001%2028.393-2.5911%2010.378%2025.262%2018.167%2015.386%202.9293-13.794-17.388-5.5875-11.142%2014.281-18.046%2042-36.93z%22%20fill%3D%22%23315b86%22%2F%3E%3Cpath%20d%3D%22m212.54%20312.89-16.549%2035.853-21.701%2021.21%2010.481%203.9547%2025.672-4.4985%207.8034-34.532z%22%20fill%3D%22%23ccc%22%2F%3E%3Cpath%20d%3D%22m244.64%20379.19%2077.906-13.92-6.4818-8.6959-48.627-11.954-70.288-30.9-1.4505%2045.635%2017.569%2013.577z%22%20fill%3D%22%23b3b3b3%22%2F%3E%3Cpath%20d%3D%22m343.47%20328.39-24.001%2028.393-2.5911%2010.378%2025.262%2018.167%2015.386%202.9293-12.759-6.3692-12.888-20.992%2013.546-27.016%2049-29.129z%22%20fill-opacity%3D%22.087719%22%2F%3E%3Cpath%20d%3D%22m262.78%20314.44%2061.827%2036.055%200.33591%2020.346-52.104-12.885-72.604-0.0871%207.7066-51.813z%22%20fill%3D%22%233a5c79%22%2F%3E%3Cpath%20d%3D%22m242.87%20318.79%2024.101%209.8637%2057.988%2042.16-52.116-12.858-41.214%200.0771-7.5452-11.506-23.845%2011.342%207.7066-51.813z%22%20fill%3D%22%23b1e9fb%22%20fill-opacity%3D%22.093567%22%2F%3E%3Cpath%20d%3D%22m246.91%20393.55-15.307-35.348-7.6753-11.584-19.491%209.526%207.1715%2020.9%2014.022%2010.658z%22%20fill%3D%22%233a5c79%22%2F%3E%3Cpath%20d%3D%22m212.15%20305.2-30.615%200.95793-37.112%2018.246%203.1257%2013.955%2017.635%2019.979%2019.198%203.5262%2022.305-2.8304%208.0675-20.536z%22%20fill%3D%22%2349769c%22%2F%3E%3Cellipse%20transform%3D%22matrix(.93642%20-.35089%20.14595%20.98929%200%200)%22%20cx%3D%22138.35%22%20cy%3D%22387.92%22%20rx%3D%222.8196%22%20ry%3D%224.2535%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.1709%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		B:"%3Csvg%20width%3D%2245.156mm%22%20height%3D%2228.222mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20160%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Cmetadata%3E%20%3Crdf%3ARDF%3E%20%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%20%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%20%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%20%3Cdc%3Atitle%2F%3E%20%3C%2Fcc%3AWork%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fmetadata%3E%20%3Cg%20transform%3D%22translate(-148.54%20-282.05)%22%3E%20%3Cpath%20d%3D%22m197.14%20366.88%2030.732%205.6132-13.402-28.122-19.919%202.5897z%22%20fill%3D%22%23294a66%22%2F%3E%20%3Cpath%20d%3D%22m195.14%20301.98%2030.732-5.6132-13.402%2028.122-19.919-2.5897z%22%20fill%3D%22%23294a66%22%2F%3E%20%3Cpath%20d%3D%22m280.02%20296.8-34.926%2035.426%2035.424%2034.924-7.5664-33.496c0.12206%200.17745%207.0684-36.854%207.0684-36.854z%22%20fill%3D%22%234c565e%22%2F%3E%20%3Cpath%20transform%3D%22matrix(.7121%20.70207%20-.70207%20.7121%200%200)%22%20d%3D%22m346.57%2075.209%2078.917-25.275-25.636%2078.556h-53.281z%22%20fill%3D%22%233c76a8%22%2F%3E%20%3Cpath%20transform%3D%22translate(148.54%20282.05)%22%20d%3D%22m45.447%2014.826-37.408%2037.941%2037.943%2037.406%2028.232-14.592%2017.162-27.866-18.09-18.806z%22%20fill%3D%22%233a7fba%22%2F%3E%20%3Cpath%20d%3D%22m193.99%20296.87%2023.662%2040.169-23.128%2035.18-37.942-37.407z%22%20fill%3D%22%23336590%22%2F%3E%20%3Cpath%20d%3D%22m193.99%20296.87%2019.942%2037.407-19.407%2037.942-37.942-37.407z%22%20fill%3D%22%233986c8%22%2F%3E%20%3Cpath%20d%3D%22m178.18%20322.08%203.7042%203.8552-3.6491%203.9103-3.9103-3.8552z%22%20fill%3D%22%23fff%22%2F%3E%20%3Cpath%20d%3D%22m178.16%20323.47%202.7405%202.8523-2.6998%202.893-2.893-2.8522z%22%2F%3E%20%3C%2Fg%3E%20%3C%2Fsvg%3E%20",
		C:"%3Csvg%20width%3D%2242.333mm%22%20height%3D%2233.867mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20150%20120%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-163.57%20-279.34)%22%3E%3Cg%20transform%3D%22matrix(.9738%20-.22741%20.22741%20.9738%20-86.325%2041.1)%22%3E%3Cpath%20d%3D%22m265.15%20323.53%2022.52-3.1266%2034.874%2010.264-33.355-18.485-19.134%200.1098-8.6854%201.8216z%22%20fill%3D%22%23d82e3e%22%2F%3E%3Cpath%20d%3D%22m266.02%20331.27-26.669%2083.052%2043.981%203.3924%2015.354%2019.91%200.19954-32.212%2022.843-24.656-34.805%2014.065%201.6137-31.943z%22%20fill%3D%22%23ead200%22%2F%3E%3Cpath%20d%3D%22m262.74%20314.38-1.3662-0.26526%203.782%209.416%201.5737-0.29279z%22%20fill-opacity%3D%22.070175%22%2F%3E%3Cpath%20d%3D%22m199.59%20360.62%2020.556-38.523%2041.233-7.9558%207.4318%2019.272%2014.019%2073.943-54.537%209.1198-32.535-13.961z%22%20fill-opacity%3D%22.1462%22%2F%3E%3Cpath%20d%3D%22m199.59%20360.62%2020.556-38.523%2041.233-7.9558%209.0704%2016.694%209.6274%2080.321-51.784%205.3204-32.535-13.961z%22%20fill%3D%22%23d87f2e%22%2F%3E%3Cpath%20d%3D%22m256.72%20315.04-16.269%203.138%206.4821%2048.811-28.454%2045.276%209.8103%204.2102%204.859-0.49834%2034.771-40.945z%22%20fill%3D%22%23d82e3e%22%2F%3E%3Cpath%20d%3D%22m240.45%20318.18%206.4816%2048.811-28.453%2045.276%2030.431-39.929-8.4589-54.158zm25.865%2058.741-33.168%2039.057%2033.983-33.801-0.81498-5.2569z%22%20fill-opacity%3D%22.11111%22%2F%3E%3Cpath%20d%3D%22m216.34%20377.38%2019.117-6.6926%206.3081%2016.373-12.39%207.8452-15.691-10.138z%22%20fill-opacity%3D%22.1345%22%2F%3E%3Cpath%20d%3D%22m216.3%20377.37%2017.43-3.4217%205.9636%2016.293-12.031%207.929-13.988-13.405z%22%20fill%3D%22%23ead200%22%2F%3E%3Cpath%20d%3D%22m219.93%20321.43-21.329%2015.393-15.471%2015.86-9.3305%201.9486%202.9123%2014.243%205.1632%2010.491%2013.926%2025.282%2040.414-37.347z%22%20fill-opacity%3D%22.11696%22%2F%3E%3Cpath%20d%3D%22m219.93%20321.43-21.329%2015.393-15.471%2015.86-9.3305%201.9486%202.9123%2014.243%205.1632%2010.491%2013.926%2025.282%2038.657-40.473z%22%20fill%3D%22%23d82e3e%22%2F%3E%3Cpath%20d%3D%22m287.67%20320.4%201.8538%200.10528-0.33541-8.326z%22%20fill-opacity%3D%22.099415%22%2F%3E%3Cpath%20d%3D%22m283.33%20417.72%203.9154-3.0966-0.32335-19.796z%22%20fill-opacity%3D%22.081871%22%2F%3E%3Cpath%20d%3D%22m283.33%20417.72%2015.528-8.181%200.0255-4.1206z%22%20fill-opacity%3D%22.11696%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22m181.15%20335.1%203.5532%204.8078-3.5004%204.8765-3.7509-4.8078z%22%20fill-opacity%3D%22.23977%22%2F%3E%3Cpath%20d%3D%22m181.14%20335.62%203.1209%204.2229-3.0745%204.2832-3.2946-4.2229z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22m181.12%20337.14%202.309%203.1243-2.2746%203.1689-2.4374-3.1242z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		D:"%3Csvg%20width%3D%2267.733mm%22%20height%3D%2225.4mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20240%2090%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-158.65%20-290.34)%22%3E%3Cpath%20d%3D%22m185.21%20335.42%2015.469-32.523%2027.116-6.1455%2059.983%207.8997%2051.451%2032.472%2017.08-22.352%2042.34-24.429-32.373%2052.308%2025.48%2037.691-37.952-13.583-16.005-18.866-30.671%2021.357-51.125%208.3752-28.379-1.068-31.579-6.521z%22%20fill%3D%22%23ea7f00%22%2F%3E%3Cpath%20d%3D%22m185.21%20335.42%2015.469-32.523%2027.116-6.1455%2026.477%208.3396%2037.501%2012.268%2047.711%2025.033-40.774%2023.886-46.476%205.6293-24.61%204.6501-31.579-6.521z%22%20fill-opacity%3D%22.11696%22%2F%3E%3Cpath%20d%3D%22m185.21%20335.42%2015.469-32.523%2027.116-6.1455%2026.477%208.3396%2085.212%2037.301-44.92%2022.019-42.33%207.4955-24.61%204.6501-31.579-6.521z%22%20fill%3D%22%23456985%22%2F%3E%3Cpath%20d%3D%22m231.94%20349.18%204.5672%207.4264-5.2004%2010.141-10.506-2.6618-2.6806-14.183z%22%20fill-opacity%3D%22.1345%22%2F%3E%3Cpath%20d%3D%22m231.93%20349.15%202.2022%206.067-5.5655%2012.09-10.366-2.4172-3.5724-7.2707%203.4946-7.7245z%22%20fill%3D%22%23ea7f00%22%2F%3E%3Cpath%20d%3D%22m201.14%20301.7-19.379%207.817-14.1%2018.747-7.9396%208.1864%2011.019%206.6427%204.3938%2014.026%2020.831%2012.935%2029.446-38.306z%22%20fill-opacity%3D%22.11696%22%2F%3E%3Cpath%20d%3D%22m201.14%20301.7-19.379%207.817-14.1%2018.747-8.661%208.1887%200.60526%201.9942%209.4144%204.5432-6.5712%207.4899%2012.686%206.6394%2020.831%2012.935%2027.019-41.088z%22%20fill%3D%22%232e91d8%22%2F%3E%3Cpath%20d%3D%22m179.24%20321.26%203.5606%205.0598-3.5077%205.1321-3.7588-5.0598z%22%20fill-opacity%3D%22.23977%22%2F%3E%3Cpath%20d%3D%22m179.23%20321.81%203.1274%204.4442-3.081%204.5077-3.3014-4.4442z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22m179.21%20323.41%202.3138%203.288-2.2794%203.335-2.4425-3.288z%22%2F%3E%3Cpath%20d%3D%22m160.45%20336.69-1.5671%202.1152%200.91904%202.5248%202.354-0.24147%206.1569%202.2512-6.3812%201.2629-2.3523-0.63483-0.92565%202.3705%203.7289%204.3921%205.5796-3.5014%204.9496-2.8171-3.6216-4.2553-4.2447-4.8598z%22%20fill%3D%22%23ea7f00%22%2F%3E%3Cpath%20d%3D%22m398.65%20290.34-38.983%2052.373%2032.09%2037.627-25.479-37.692z%22%20fill-opacity%3D%22.18129%22%2F%3E%3Cpath%20d%3D%22m398.65%20290.34-38.983%2052.373%203.7357%204.3919%202.8749-4.4564z%22%20fill-opacity%3D%22.18129%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		R:"%3Csvg%20width%3D%2245.156mm%22%20height%3D%2228.222mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20160%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Cmetadata%3E%20%3Crdf%3ARDF%3E%20%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%20%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%20%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%20%3Cdc%3Atitle%2F%3E%20%3C%2Fcc%3AWork%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fmetadata%3E%20%3Cg%20transform%3D%22translate(-148.54%20-282.05)%22%3E%20%3Cpath%20d%3D%22m198.63%20368.99%2040.675%205.9786-17.739-29.953-26.364%202.7583z%22%20fill%3D%22%23662929%22%2F%3E%20%3Cpath%20d%3D%22m195.98%20299.87%2040.675-5.9786-17.739%2029.953-26.364-2.7583z%22%20fill%3D%22%23662929%22%2F%3E%20%3Cpath%20d%3D%22m280.02%20294.8-50.583%2035.173%2051.081%2035.176-7.5664-33.496c0.12206%200.17745%207.0684-36.854%207.0684-36.854z%22%20fill%3D%22%235e4c4c%22%2F%3E%20%3Cpath%20transform%3D%22matrix(.7121%20.70207%20-.70207%20.7121%200%200)%22%20d%3D%22m346.57%2075.209%2067.268-19.464-13.987%2072.745-36.212-14.701z%22%20fill%3D%22%23a83c40%22%2F%3E%20%3Cpath%20transform%3D%22translate(148.54%20282.05)%22%20d%3D%22m45.447%2014.826-10.387%2036.931%2010.922%2038.416%2036.232-14.592%2017.162-27.866-18.09-18.806z%22%20fill%3D%22%23ba3a4e%22%2F%3E%20%3Cpath%20d%3D%22m193.99%20296.87%2023.662%2040.169-23.128%2035.18-32.133-31.346z%22%20fill%3D%22%23903338%22%2F%3E%20%3Cpath%20d%3D%22m193.99%20296.87%2019.942%2037.407-19.407%2037.942-34.406-36.65z%22%20fill%3D%22%23c8393c%22%2F%3E%20%3Cpath%20d%3D%22m178.18%20322.08%203.7042%203.8552-3.6491%203.9103-3.9103-3.8552z%22%20fill%3D%22%23fff%22%2F%3E%20%3Cpath%20d%3D%22m178.16%20323.47%202.7405%202.8523-2.6998%202.893-2.893-2.8522z%22%2F%3E%20%3C%2Fg%3E%20%3C%2Fsvg%3E",
		Y:"%3Csvg%20width%3D%2245.156mm%22%20height%3D%2228.222mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20160%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Cmetadata%3E%20%3Crdf%3ARDF%3E%20%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%20%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%20%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%20%3Cdc%3Atitle%2F%3E%20%3C%2Fcc%3AWork%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fmetadata%3E%20%3Cg%20transform%3D%22translate(-148.54%20-282.05)%22%3E%20%3Cpath%20d%3D%22m281.16%20294.8-72.59%2035.173%2073.305%2035.176-10.858-33.496c0.17517%200.17745%2010.144-36.854%2010.144-36.854z%22%20fill%3D%22%236b4206%22%2F%3E%20%3Cpath%20d%3D%22m286.02%20309.68-56.585%2020.3%2057.142%2020.302-8.4642-19.332c0.13655%200.10242%207.907-21.27%207.907-21.27z%22%20fill%3D%22%239d630f%22%2F%3E%20%3Cpath%20d%3D%22m198.63%20368.99%2040.675%205.9786-17.739-29.953-26.364%202.7583z%22%20fill%3D%22%23815b2b%22%2F%3E%20%3Cpath%20d%3D%22m195.98%20299.87%2040.675-5.9786-17.739%2029.953-26.364-2.7583z%22%20fill%3D%22%23815b2b%22%2F%3E%20%3Cpath%20transform%3D%22matrix(.7121%20.70207%20-.70207%20.7121%200%200)%22%20d%3D%22m346.57%2075.209%2068.717-22.311-15.436%2075.592-36.212-14.701z%22%20fill%3D%22%23b44f0f%22%2F%3E%20%3Cpath%20transform%3D%22translate(148.54%20282.05)%22%20d%3D%22m45.447%2014.826-10.387%2036.931%2010.922%2038.416%2018.232-14.592%2017.162-27.866-18.09-18.806z%22%20fill%3D%22%23e3951d%22%2F%3E%20%3Cpath%20d%3D%22m193.99%20296.87%2023.662%2040.169-23.128%2035.18-30.744-25.475z%22%20fill%3D%22%23b44f0f%22%2F%3E%20%3Cpath%20d%3D%22m193.99%20296.87%2019.942%2037.407-19.407%2037.942-20.165-14.442-14.241-22.208%2014.552-25.176z%22%20fill%3D%22%23e3951d%22%2F%3E%20%3Cpath%20d%3D%22m178.18%20322.08%203.7042%203.8552-3.6491%203.9103-3.9103-3.8552z%22%20fill%3D%22%23fff%22%2F%3E%20%3Cpath%20d%3D%22m178.16%20323.47%202.7405%202.8523-2.6998%202.893-2.893-2.8522z%22%2F%3E%20%3C%2Fg%3E%20%3C%2Fsvg%3E",
		G:"%3Csvg%20width%3D%2242.333mm%22%20height%3D%2225.4mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20150%2090%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-156.33%20-290.46)%22%3E%3Cpath%20d%3D%22m233.63%20343.02%207.7049%2029.376%204.3692-5.9208%2016.025%201.5603-28.349-41.926-12.78%2012.981z%22%20fill%3D%22%23e3951d%22%2F%3E%3Cpath%20d%3D%22m165.42%20343.04-7.4778%202.9284-0.46952%202.5506%2017.283%2011.725z%22%20fill%3D%22%23e3951d%22%2F%3E%3Cpath%20d%3D%22m207.13%20371.8%2026.506%203.2266-10.097-14.13-2.0887-10.176-17.03%2014.511z%22%20fill%3D%22%23e3951d%22%2F%3E%3Cpath%20d%3D%22m207.13%20371.8%2026.506%203.2266-10.097-14.13-2.0887-10.176-0.44696%2011.211%203.2927%207.6769-11.971%200.41463-7.9046-4.7914z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.16374%22%2F%3E%3Cpath%20d%3D%22m250.12%20337.18%2027.382-4.7018%2023.542-36.434-45.326%2014.318-26.579%2023.085%204.2267%204.0154z%22%20fill%3D%22%23f7bf1a%22%2F%3E%3Cpath%20d%3D%22m240.02%20343.89%2018.057%2030.602%2048.254%205.9596-36.657-38.784-36.295-15.557-1.9725%206.234z%22%20fill%3D%22%23f7bf1a%22%2F%3E%3Cpath%20d%3D%22m250.6%20323.02%2031.318-5.5994%2019.12-21.381-45.326%2014.318-26.579%2023.085%204.2267%204.0154z%22%20fill%3D%22%23e3951d%22%2F%3E%3Cpath%20d%3D%22m178.96%20316.4%2013.635-17.812%2026.446-8.1317%204.8008%2020.615%2018.195%2020.632-65.41-6.2571z%22%20fill%3D%22%23e3951d%22%2F%3E%3Cpath%20d%3D%22m254.41%20342.7%2021.002%2028.898%2030.92%208.8561-36.657-38.784-36.295-15.557-1.9725%206.234z%22%20fill%3D%22%23795620%22%20fill-opacity%3D%22.33918%22%2F%3E%3Cpath%20d%3D%22m178.96%20316.4%2013.635-17.812%2026.446-8.1317%204.8008%2020.615%2018.195%2020.632-26.548-18.322-8.5859-10.111-12.733%201.1709-17.544%2021.005z%22%20fill%3D%22%23e6e6e6%22%20fill-opacity%3D%22.15789%22%2F%3E%3Cpath%20d%3D%22m192.74%20314.41%2011.996-0.90416%2039.817%2016.84-20.34%2015.388-3.3161%2014.367-13.279%209.587-16.605-1.7695-8.4465-4.4745-15.021-22.566%205.0461-7.9284z%22%20fill%3D%22%23f7bf1a%22%2F%3E%3Cpath%20d%3D%22m178.37%20318.67%203.5014%205.486%2010.006%2010.468-10.95%2026.824-6.1787-1.2058-18.423-19.118%205.0461-7.295z%22%20fill-opacity%3D%22.17544%22%2F%3E%3Cpath%20d%3D%22m192.74%20314.41%2011.996-0.90416%2039.817%2016.84-20.34%2015.388-9.7304%2010.281-17.377-4.8097-6.6268%203.6779-7.912%208.5603-15.021-22.566%205.0461-7.9284z%22%20fill%3D%22%23795620%22%20fill-opacity%3D%22.17544%22%2F%3E%3Cpath%20d%3D%22m178.37%20318.67%208.2161%2018.292-5.6587%2024.486-6.1787-1.2058-18.423-19.118%205.0461-7.295z%22%20fill%3D%22%23ffe644%22%2F%3E%3Cpath%20d%3D%22m172.72%20328.99%203.1435%203.5724-3.0968%203.6234-3.3185-3.5724z%22%20fill-opacity%3D%22.23977%22%2F%3E%3Cpath%20d%3D%22m172.71%20329.38%202.7611%203.1378-2.72%203.1826-2.9147-3.1378z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22m172.69%20330.51%202.0428%202.3215-2.0124%202.3546-2.1564-2.3214z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		M:"%3Csvg%20width%3D%2245.156mm%22%20height%3D%2225.4mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20160%2090%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-165.82%20-329.23)%22%3E%3Cpath%20d%3D%22m253.2%20381.43%2026.409%2010.947%2046.203-46.905-41.701%2011.752z%22%20fill%3D%22%234dadff%22%2F%3E%3Cpath%20d%3D%22m253.72%20379.39%2026.895%209.5934%2011.709%2030.242-22.774-11.173z%22%20fill%3D%22%234dadff%22%2F%3E%3Cpath%20d%3D%22m215.16%20340.45%2028.399-1.6996%2021.919%2023.374-25.165-1.3817z%22%20fill%3D%22%234dadff%22%2F%3E%3Cpath%20d%3D%22m209.14%20367.53%2017.328%2023.363%2031.409%201.8905-17.464-18.814z%22%20fill%3D%22%234dadff%22%2F%3E%3Cpath%20d%3D%22m170.39%20375.28%2018.466-16.141%205.8926-29.75%2029.01%201.846%2024.627%2024.187%2027.015%2032.319-79.079-2.0245-20.737-7.9184-4.5619%200.55708z%22%20fill%3D%22%233986c8%22%2F%3E%3Cpath%20d%3D%22m195.05%20329.23-20.028%2016.074-7.4112%2024.277%2029.022%2016.431%2012.028-35.036z%22%20fill-opacity%3D%22.081871%22%2F%3E%3Cpath%20d%3D%22m195.05%20329.23-20.028%2016.074-7.4112%2024.277%2015.357%207.4987%2011.548-0.77502%2010.517-23.993z%22%20fill%3D%22%234dadff%22%2F%3E%3Cpath%20d%3D%22m167.83%20366.89-2.0173%201.7123%200.40234%202.4917%202.4235%200.15484%2011.844%206.3592%208.0722-0.98339-6.3451-2.2642z%22%20fill%3D%22%233a5c79%22%2F%3E%3Cellipse%20transform%3D%22matrix(.97161%20-.23658%20.2214%20.97518%200%200)%22%20cx%3D%2299.878%22%20cy%3D%22393.56%22%20rx%3D%223.3864%22%20ry%3D%223.4942%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.1631%22%2F%3E%3Cpath%20d%3D%22m201.51%20371.02-3.6701%2011.288%2019.779%2018.382-1.4292-30.137z%22%20fill%3D%22%234dadff%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		N:"%3Csvg%20width%3D%2256.444mm%22%20height%3D%2223.989mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20200%2085%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-158.14%20-291.16)%22%3E%3Cg%3E%3Cpath%20d%3D%22m273.17%20375.34%2020.063-3.5923%203.1821-21.512-27.356-7.6259-6.7213%203.7508%201.0322%204.6971z%22%20fill%3D%22%23b08023%22%2F%3E%3Cpath%20d%3D%22m274.64%20371.5%2016.544-4.7752%205.2351-16.485-27.356-7.6259-6.7213%203.7508%201.0322%204.6971z%22%20fill-opacity%3D%22.19298%22%2F%3E%3Cpath%20d%3D%22m270.82%20291.16%2020.063%203.5923%203.1821%2021.512-27.356%207.6259-6.7213-3.7508%201.0322-4.6972z%22%20fill%3D%22%23b08023%22%2F%3E%3Cpath%20d%3D%22m341.17%20305.25%2016.973%2032.396-26.527%2028.087-40.616-30.448-2.1321-13.644%207.6845-3.6829z%22%20fill%3D%22%23b08023%22%2F%3E%3Cpath%20d%3D%22m158.14%20357.59%202.2168-10.24%201.4662%209.2739%203.3898%206.0067-4.1554%201.911z%22%2F%3E%3Cpath%20d%3D%22m270.82%20291.16%2020.063%203.5923-0.6307%2018.259-23.543%2010.879-6.7213-3.7508%201.0322-4.6972z%22%20fill-opacity%3D%22.21637%22%2F%3E%3Cpath%20d%3D%22m341.17%20305.25%2014.04%2032.396-24.474%2021.877-39.736-24.237-2.1321-13.644%207.6845-3.6829z%22%20fill-opacity%3D%22.18713%22%2F%3E%3Cpath%20d%3D%22m184.95%20337.63%2016.978-26.741%2025.194-10.026%2026.221%200.8319%2045.418%2017.98%201.875%2016.919-42.566%2035.137-24.372%204.4215-38.02-5.6089z%22%20fill%3D%22%234d3300%22%2F%3E%3Cpath%20d%3D%22m244.08%20331.58%2013.544%2019.399-8.9868%2017.902-28.447-7.9974-2.6546-9.4826z%22%20fill-opacity%3D%22.1345%22%2F%3E%3Cpath%20d%3D%22m244.07%20331.56%209.8542%2019.361-9.2446%2019.755-27.064-9.0194-3.5379-6.9131%203.4608-3.342z%22%20fill%3D%22%23b08023%22%2F%3E%3Cpath%20d%3D%22m203.22%20308.97-7.6176%2061.592%2032.387-6.2573z%22%20fill-opacity%3D%22.11696%22%2F%3E%3Cpath%20d%3D%22m164.15%20358.8%202.6643-7.5595%200.22485%207.1845%201.9984%204.8911-3.3383%201.0463z%22%2F%3E%3Cpath%20d%3D%22m168.81%20358.88%202.8189-5.2735-0.64437%205.3281%200.92324%203.8389-2.5818%200.38936z%22%2F%3E%3Cpath%20d%3D%22m172.68%20358.9%202.7478-4.023-0.99%204.2613%200.41136%203.1941-2.1269%200.0851z%22%2F%3E%3Cpath%20d%3D%22m163.15%20350.09%200.45984%206.1623%201.6117-5.293%202.4686-3.2261-2.2704-1.46z%22%2F%3E%3Cpath%20d%3D%22m168.54%20351.24%200.45984%206.1623%201.6117-5.293%202.4686-3.2261-2.2704-1.46z%22%2F%3E%3Cpath%20d%3D%22m172.27%20351.45%200.45985%206.1623%201.6117-5.293%202.4686-3.2262-2.2704-1.46z%22%2F%3E%3Cpath%20d%3D%22m177.25%20351.97%200.45985%206.1623%201.6117-5.293%202.4686-3.2261-2.2704-1.46z%22%2F%3E%3Cpath%20d%3D%22m203.22%20308.97-18.605%209.2069-6.4851%203.4819-5.6738%2018.725-8.7564%206.3352%2029.12%2010.087-32.61%207.713%201.2717%204.8342%2034.121%201.2091%2029.983-8.9026z%22%20fill%3D%22%237b5814%22%2F%3E%3Cpath%20d%3D%22m164.53%20345.28-1.5519%202.0112%200.91015%202.4006%202.3312-0.2296%2023.401%206.9461-28.096%205.6367-2.3295-0.6036-0.9167%202.254%204.2794%203.8065%2026.716-7.3955%204.9018-2.6786-3.5866-4.046-21.508-9.4265z%22%20fill%3D%22%23464646%22%2F%3E%3Cellipse%20transform%3D%22matrix(.97303%20-.23068%20.22709%20.97387%200%200)%22%20cx%3D%22106.55%22%20cy%3D%22367.11%22%20rx%3D%224.4554%22%20ry%3D%224.4886%22%20fill%3D%22%23fff%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%224.003%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		S:"%3Csvg%20width%3D%2236.689mm%22%20height%3D%2222.578mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20130%2080%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-167.38%20-298.71)%22%3E%3Cg%20transform%3D%22matrix(.9512%20-.22858%20.22213%20.97882%20-102.14%2038.344)%22%3E%3Cg%3E%3Cpath%20d%3D%22m254.29%20388.98%2018.43%202.4926%204.6394%2010.503-10.426%205.8522-14.715-1.2012-9.1626-9.1951z%22%20fill%3D%22%237248bf%22%2F%3E%3Cpath%20d%3D%22m256.25%20388.71%2013.876%201.8767%203.4931%207.9077-7.8499%204.4062-11.079-0.90438-6.8987-6.9232z%22%20fill-opacity%3D%22.11696%22%2F%3E%3Cpath%20d%3D%22m283.79%20363.38-6.5244%2033.695%2024.116%2019.712%2023.986-16.593%208.0844-29.505-17.973-23.807z%22%20fill%3D%22%237248bf%22%2F%3E%3Cpath%20d%3D%22m271.5%20348.56%2012.858%209.8999%2011.146-4.8689-1.4578-11.014-9.6344-8.4924-12.764%201.0084z%22%20fill%3D%22%237248bf%22%2F%3E%3Cpath%20d%3D%22m280.83%20368.97-4.2723%2021.955%2015.458%2012.005%2015.252-10.551%205.1407-18.762-11.429-15.139z%22%20fill-opacity%3D%22.11696%22%2F%3E%3Cpath%20d%3D%22m273.03%20350.62%208.1763%206.2951%207.0874-3.096-0.92698-7.0035-6.1263-5.4002-8.1167%200.64122z%22%20fill-opacity%3D%22.11696%22%2F%3E%3Cpath%20d%3D%22m229.12%20356.2%2019.647-28.121%2022.851%201.3468%2024.941%2045.051-17.182%2025.083-49.226-4.0028-14.277-11.174z%22%20fill%3D%22%23c83990%22%2F%3E%3Cpath%20d%3D%22m253.69%20326.7-27.436%205.8789-18.023%2015.035%205.4129%2010.912%2013.718%2010.931%2023.643-17.255z%22%20fill%3D%22%23ff4dc0%22%2F%3E%3Ccircle%20transform%3D%22matrix(.9982%20-.059979%20.059979%20.9982%200%200)%22%20cx%3D%22211.01%22%20cy%3D%22365.83%22%20r%3D%223.0908%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.0451%22%2F%3E%3Cpath%20d%3D%22m247.18%20364.02%209.8566%203.2798%2010.283%2010.392-11.491%208.8239-16.951-5.8289z%22%20fill-opacity%3D%22.16374%22%2F%3E%3Cpath%20d%3D%22m209.64%20371.84-9.7362-9.5176%201.1348-9.8683%202.5127-1.0808%2015.83%2010.679%208.0116%206.1028%2024.128-16.385-10.959%2034.457-17.887%201.224z%22%20fill-opacity%3D%22.21637%22%2F%3E%3Cpath%20d%3D%22m245.76%20364.05%207.3391%205.4829%205.7435%2012.413-8.2782%207.9909-11.722-9.1039z%22%20fill%3D%22%237248bf%22%2F%3E%3Cpath%20d%3D%22m209.64%20371.84-9.7362-9.5176%201.1348-9.8683%202.5127-1.0808%2015.83%2010.679%208.0116%206.1028%2024.128-16.385-14.071%2032.08-20.484%201.351z%22%20fill%3D%22%23d73da1%22%2F%3E%3Cpath%20transform%3D%22matrix(.48384%20.87515%20.87515%20-.48384%200%200)%22%20d%3D%22m415.93%2036.702%203.7829%201.7303%207.7018-0.61135-9.873%203.6486z%22%20fill%3D%22%23666%22%2F%3E%3Cpath%20d%3D%22m209.12%20344.75-2.4904%200.53193-0.84202%202.4264%201.9456%201.3362%203.326%205.5913-5.6462-3.1798-1.4084-1.9724-2.1566%201.1295%200.16222%205.589%206.4028%201.0369%205.5032%201.13-0.16394-5.4206-0.27016-6.2605z%22%20fill%3D%22%238f0c0a%22%2F%3E%3Cpath%20transform%3D%22matrix(.9738%20.22741%20-.22741%20.9738%20179.59%20298)%22%20d%3D%22m82.273%2036.006-19.77%2021.441-9.1895-4.1211%2011.51%206.4434z%22%20fill-opacity%3D%22.12281%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		G1:"%3Csvg%20width%3D%2242.333mm%22%20height%3D%2225.4mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20150%2090%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-156.33%20-290.46)%22%3E%3Cpath%20d%3D%22m233.63%20343.02%207.7049%2029.376%204.3692-5.9208%2016.025%201.5603-28.349-41.926-12.78%2012.981z%22%20fill%3D%22%23e3951d%22%2F%3E%3Cpath%20d%3D%22m165.42%20343.04-7.4778%202.9284-0.46952%202.5506%2017.283%2011.725z%22%20fill%3D%22%23e3951d%22%2F%3E%3Cpath%20d%3D%22m207.13%20371.8%2026.506%203.2266-10.097-14.13-2.0887-10.176-17.03%2014.511z%22%20fill%3D%22%23e3951d%22%2F%3E%3Cpath%20d%3D%22m207.13%20371.8%2026.506%203.2266-10.097-14.13-2.0887-10.176-0.44696%2011.211%203.2927%207.6769-11.971%200.41463-7.9046-4.7914z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.16374%22%2F%3E%3Cpath%20d%3D%22m247.67%20340.95%2026.387%203.0286%2031.219-28.533-45.402%201.2685-30.492%2014.864%202.8244%205.025z%22%20fill%3D%22%23f7bf1a%22%2F%3E%3Cpath%20d%3D%22m240.02%20343.89%2018.057%2030.602%2048.254%205.9596-36.657-38.784-36.295-15.557-1.9725%206.234z%22%20fill%3D%22%23f7bf1a%22%2F%3E%3Cpath%20d%3D%22m251.85%20327.48%2030.239%203.251%2023.193-15.282-45.402%201.2685-30.492%2014.864%202.8244%205.025z%22%20fill%3D%22%23e3951d%22%2F%3E%3Cpath%20d%3D%22m178.96%20316.4%2013.635-17.812%2026.446-8.1317%204.8008%2020.615%2018.195%2020.632-65.41-6.2571z%22%20fill%3D%22%23e3951d%22%2F%3E%3Cpath%20d%3D%22m254.41%20342.7%2021.002%2028.898%2030.92%208.8561-36.657-38.784-36.295-15.557-1.9725%206.234z%22%20fill%3D%22%23795620%22%20fill-opacity%3D%22.33918%22%2F%3E%3Cpath%20d%3D%22m178.96%20316.4%2013.635-17.812%2026.446-8.1317%204.8008%2020.615%2018.195%2020.632-26.548-18.322-8.5859-10.111-12.733%201.1709-17.544%2021.005z%22%20fill%3D%22%23e6e6e6%22%20fill-opacity%3D%22.15789%22%2F%3E%3Cpath%20d%3D%22m192.74%20314.41%2011.996-0.90416%2039.817%2016.84-20.34%2015.388-3.3161%2014.367-13.279%209.587-16.605-1.7695-8.4465-4.4745-15.021-22.566%205.0461-7.9284z%22%20fill%3D%22%23f7bf1a%22%2F%3E%3Cpath%20d%3D%22m178.37%20318.67%203.5014%205.486%2010.006%2010.468-10.95%2026.824-6.1787-1.2058-18.423-19.118%205.0461-7.295z%22%20fill-opacity%3D%22.17544%22%2F%3E%3Cpath%20d%3D%22m192.74%20314.41%2011.996-0.90416%2039.817%2016.84-20.34%2015.388-9.7304%2010.281-17.377-4.8097-6.6268%203.6779-7.912%208.5603-15.021-22.566%205.0461-7.9284z%22%20fill%3D%22%23795620%22%20fill-opacity%3D%22.17544%22%2F%3E%3Cpath%20d%3D%22m192.74%20314.41-1.5471%2010.86%206.8505%2014.5%2012.922%206.3597%2013.248-0.39532-9.7304%2010.281-17.377-4.8097-6.6268%203.6779-7.912%208.5603-15.021-22.566%205.0461-7.9284z%22%20fill%3D%22%23795620%22%20fill-opacity%3D%22.17544%22%2F%3E%3Cpath%20d%3D%22m178.37%20318.67%208.2161%2018.292-5.6587%2024.486-6.1787-1.2058-18.423-19.118%205.0461-7.295z%22%20fill%3D%22%23f7bf1a%22%2F%3E%3Cpath%20d%3D%22m172.72%20328.99%203.1435%203.5724-3.0968%203.6234-3.3185-3.5724z%22%20fill-opacity%3D%22.23977%22%2F%3E%3Cpath%20d%3D%22m172.71%20329.38%202.7611%203.1378-2.72%203.1826-2.9147-3.1378z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22m172.69%20330.51%202.0428%202.3215-2.0124%202.3546-2.1564-2.3214z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		B1:"%3Csvg%20width%3D%2242.333mm%22%20height%3D%2228.222mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20150%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-154.25%20-299.15)%22%3E%3Cg%20transform%3D%22matrix(.9738%20-.22741%20.22741%20.9738%20-86.325%2041.1)%22%3E%3Cg%20transform%3D%22matrix(1.0215%20.0053362%20.0053362%20.99988%20-5.4366%20-.76793)%22%3E%3Cpath%20d%3D%22m194.59%20391.61%2032.693%2029.158%2020.535-2.8997%209.2349-14.891-11.882-18.914z%22%20fill%3D%22%23ffc74d%22%2F%3E%3Cpath%20transform%3D%22matrix(.9738%20.22741%20-.22741%20.9738%20179.59%20298)%22%20d%3D%22m144.59%2021.011-35.131%2019.795-26.019%2014.617%2011.479%2016.573%2030.66%2015.693-22.673-27.301z%22%20fill%3D%22%23ffc74d%22%2F%3E%3Cpath%20d%3D%22m201.8%20333.83%2037.009-13.205%2025.991%2011.528%203.1613%2025.481-19.4%2010.142z%22%20fill%3D%22%23ffc74d%22%2F%3E%3Cpath%20d%3D%22m164.58%20367.94%2025.429-9.6371%206.1873-30.164%2039.689%204.7601%2016.324%2013.414%205.0694%2019.235%209.3902%2013.767-12.833%205.3518-11.564%2015.907-18.984%206.1199-32.786-13.01-11.691-18.51-8.7762-4.6812-4.7901%200.56483z%22%20fill%3D%22%23c83a39%22%2F%3E%3Cpath%20d%3D%22m164.58%20367.94%2025.429-9.6371%206.1873-30.164%2061.082%2037.409%209.3902%2013.767-12.833%205.3518-75.024-9.4928-8.7762-4.6812-4.7901%200.56483z%22%20fill-opacity%3D%22.1345%22%2F%3E%3Cpath%20d%3D%22m200.05%20325.72-23.496%2012.483-11.855%2022.932%2027.365%2018.521%2018.319-29.779z%22%20fill-opacity%3D%22.081871%22%2F%3E%3Cpath%20d%3D%22m200.05%20325.72-23.496%2012.483-11.855%2022.932%2014.597%2010.235%2012.083%201.2881%2015.02-22.094z%22%20fill%3D%22%23ff4d52%22%2F%3E%3Cpath%20d%3D%22m165.4%20358.49-2.3827%201.3506-0.0134%202.5614%202.4809%200.58751%2011.159%208.4689%208.522%200.45905-6.175-3.3955z%22%20fill%3D%22%23793b3a%22%2F%3E%3Ccircle%20transform%3D%22matrix(.9982%20-.059979%20.059979%20.9982%200%200)%22%20cx%3D%22161.87%22%20cy%3D%22365.05%22%20r%3D%223.5491%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.2%22%2F%3E%3Cpath%20d%3D%22m200.6%20377.45-1.4557%2010.06%205.9807%209.3618%2010.753-3.9847%202.5416-12.885z%22%20fill-opacity%3D%22.19883%22%2F%3E%3Cpath%20d%3D%22m200.6%20377.45%202.4754%208.7737%209.8499%2010.006%2010.159-4.7718-4.6645-11.456z%22%20fill%3D%22%23ff784d%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		
		V2_1	:"%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%2085%2050%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22matrix(.99125%200%200%201.007%20-321.41%20-221)%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m402.15%20233.5%203.25-0.6%204.6%209.8v9.8l-5.9%205.9-3.9-1.35%205.85-8.5-3.9-15.05%22%20fill%3D%22%23bd3100%22%2F%3E%3Cpath%20d%3D%22m390.4%20253.75-3.9-1.25-0.75%200.15%200.75-11.95%205.9-3.3-0.3%202.05-1.7%2014.3m-8.15%202.65%200.3%200.7-2.75%207.15-6.35%203-4.55-1.95-1.45-2.45%205.3%201.4%204.55-2%204.95-5.85m-16.15%203.9-3.55%200.65%202.05-1.7%206.05-7.65v-4l-1.55-3.45v-8.35l-6.25-7.7%204.05%201.7%200.4%200.2%206.25%204.85%202.05%209.2v5.95l-1.2%204.7-5.5%204.35-2.8%201.25m-7.95%204.9-0.6%202.95-2.75%200.95-5.65-2.35-0.45-2.5%203.8%201.9h3.05l2.6-0.95m-9.65-1.8-7.1-0.8%201.25-1.75%201.05-1.45%204.2-5.85v-9.45l-3.35-9.7-0.75-0.55-0.8-0.6-4.65-3.35%203.25-2.1%208.4%206.45%202.5%208.3%200.6%204.9-0.15%208.45-4.45%207.5m-6.2-38.45v-2.05l4-3.45h9.2l5.85%203.9%200.6%202-7.75-4-6.55%200.9-5.35%202.7m26.1%201.3%200.5-1.15%204.9-2%207.75%205.1%201%205.75-0.6%200.9-2.05-2.8-1.25-3.05-5.9-2.75h-4.35m-6.35%2016.5h3.9l2%207.85-2%205.85-3.9%200.8%201.9-4.7v-1.95l-1.9-7.85%22%20fill%3D%22%23ffdacd%22%2F%3E%3Cpath%20d%3D%22m380.9%20253.6%201.35%202.8-4.95%205.85-4.55%202-5.3-1.4-1.35-2.55%202.8-1.25%2012-5.45m-21.9%208-0.85%203.6-2.6%200.95h-3.05l-3.8-1.9-0.2-0.85%202.15-0.35%206.4-1.1%201.95-0.35m-32.75-19.55%205.35-7.9%206.75-4.25%204.8%204.75%203.75%2011.05-3.2%2013.7-1.05%201.45-3.2-0.55-7.85-3.9-5.5-5.8%207.05-1.9%201.55-1.95-8.45-4.7m16.05-14.25v-2.85l5.35-2.7%206.55-0.9%207.75%204%200.9%202.75-1-0.4-0.35-0.15-0.45-0.2-17.15%200.7-1.6-0.25m24.6%202%201.5-3.55h4.35l5.9%202.75%201.25%203.05%202.05%202.8-1.3%201.95-13.35-6.8-0.4-0.2m-25.55%2010.85q0-1.2-0.9-2.05-0.85-0.85-2.05-0.85t-2.05%200.85q-0.9%200.85-0.9%202.05%200%201.25%200.9%202.1%200.85%200.85%202.05%200.85t2.05-0.85q0.9-0.85%200.9-2.1%22%20fill%3D%22%23d04315%22%2F%3E%3Cpath%20d%3D%22m400.2%20257.05-9.8-3.3%201.7-14.3%205.35-3.55%204.7-2.4%203.9%2015.05-5.85%208.5m-58.6-29.25h0.7l1.6%200.25%2017.15-0.7%200.45%200.2%200.35%200.15%201%200.4%206.25%207.7v8.35l1.55%203.45v4l-6.05%207.65-7.55%202.7-6.4%201.1-2.15%200.35%204.45-7.5v0.65l7.15%201.15%201.95-0.45%203.9-0.8%202-5.85-2-7.85h-3.9-1.95l-6.95%202-0.05%202.7-0.6-4.9-2.5-8.3-8.4-6.45m39.05%209%205.85%203.9-0.75%2011.95-7.3-0.15-2.2%200.9v0.05l-1.85%201.25%201.2-4.7v-5.95l-2.05-9.2-6.25-4.85%2013.35%206.8%22%20fill%3D%22%23c30%22%2F%3E%3Cpath%20d%3D%22m392.4%20237.4%205.85-3.25%203.9-0.65-4.7%202.4-5.35%203.55%200.3-2.05%22%20fill%3D%22%23db4218%22%2F%3E%3Cpath%20d%3D%22m338.35%20229.9%204.65%203.35%200.8%200.6%200.75%200.55%203.35%209.7v9.45l-4.2%205.85%203.2-13.7-3.75-11.05-4.8-4.75%22%20fill%3D%22%23c23c10%22%2F%3E%3Cpath%20d%3D%22m326.1%20250.6-0.35%200.1-1.5-2%200.5-2.9-0.45-1.95%201.45-2.15%200.5%200.35%208.45%204.7-1.55%201.95-7.05%201.9%22%20fill%3D%22%23e66%22%2F%3E%3Cpath%20d%3D%22m341.35%20240.65q0%201.25-0.9%202.1-0.85%200.85-2.05%200.85t-2.05-0.85q-0.9-0.85-0.9-2.1%200-1.2%200.9-2.05%200.85-0.85%202.05-0.85t2.05%200.85q0.9%200.85%200.9%202.05m-3.65-0.7q-0.25%200.25-0.25%200.65%200%200.35%200.25%200.6%200.25%200.3%200.6%200.3l0.65-0.3%200.3-0.6-0.3-0.65q-0.25-0.25-0.65-0.25-0.35%200-0.6%200.25%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22m337.7%20239.95q0.25-0.25%200.6-0.25%200.4%200%200.65%200.25l0.3%200.65-0.3%200.6-0.65%200.3q-0.35%200-0.6-0.3-0.25-0.25-0.25-0.6%200-0.4%200.25-0.65%22%2F%3E%3Cpath%20d%3D%22m353.1%20247.45%200.05-2.7%206.95-2h1.95l1.9%207.85v1.95l-1.9%204.7-1.95%200.45-7.15-1.15v-0.65l0.15-8.45%22%20fill%3D%22%23d9572b%22%2F%3E%3Cpath%20d%3D%22m385.75%20252.65-4.85%200.95-12%205.45%205.5-4.35%201.85-1.25v-0.05l2.2-0.9%207.3%200.15m-23.2%208.3-3.55%200.65-1.95%200.35%207.55-2.7-2.05%201.7m-21.15%201.65-3.2-0.35-8.05-4.95-4.05-6.7%205.5%205.8%207.85%203.9%203.2%200.55-1.25%201.75%22%20fill%3D%22%23bb2e00%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",

		C_1		:"%3Csvg%20width%3D%2270.556mm%22%20height%3D%2228.222mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20250%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-169.69%20-280.27)%22%3E%3Cpath%20d%3D%22m339.09%20368.09%200.73652-9.4447%208.6368-5.8551%2015.231-5.4128-46.168%203.6258%209.5699%2010.968z%22%20fill%3D%22%239bb9e0%22%2F%3E%3Cpath%20d%3D%22m287.33%20280.27%202.8197%2028.612%2031.238%2015.465%2041.337%2014.69-125.3-9.8402%2018.789-24.659z%22%20fill%3D%22%23435e81%22%2F%3E%3Cpath%20d%3D%22m418.41%20374.99-23.418-30.125%2024.705-29.665-23.979%2010.092-18.689%2014.777-3.6589%205.1006%204.206%205.2572%2015.844%2011.19z%22%20fill%3D%22%23435e81%22%2F%3E%3Cpath%20d%3D%22m266.73%20363.08%2040.413%207.58-42.678-5.2452-13.935-5.8556%202.6767-4.7268z%22%20fill%3D%22%232d415b%22%2F%3E%3Cpath%20d%3D%22m255.17%20356.03%2010.996%209.5922-3.7659-4.0211z%22%20fill-opacity%3D%22.35673%22%2F%3E%3Cpath%20d%3D%22m266.36%20365.79%2038.625%2014.473-41.234-12.564-12.796-8.187%203.4002-4.1968z%22%20fill%3D%22%232d415b%22%2F%3E%3Cpath%20d%3D%22m363.7%20347.38-15.898%204.987-9.4583%205.5884%200.75141%2010.137%200.73649-9.445%208.6365-5.8544z%22%20fill-opacity%3D%22.23392%22%2F%3E%3Cpath%20d%3D%22m239.56%20327.34%2022.213-1.908%2064.853%207.298%2069.892%2010.378%200.82928%204.5726-69.1%206.761-78.166%208.9415-14.864-3.5842z%22%20fill%3D%22%236b90c0%22%2F%3E%3Cpath%20d%3D%22m312.94%20340.82-72.379-2.7972%201.9829%202.5598%2068.135%201.7466%2086.35%203.1735z%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m287.33%20280.27-23.242%2029.25-1.7012%2023.74%2044.346%201.3806-27.534-22.441z%22%20fill-opacity%3D%22.099415%22%2F%3E%3Cpath%20d%3D%22m261.78%20325.44-22.214%201.9077%200.56374%2013.692%2072.814-0.21285%2084.089%204.6825-0.5091-2.3932-69.891-10.378z%22%20fill%3D%22%235b79a1%22%2F%3E%3Cpath%20d%3D%22m242.17%20326.72-13.418-0.0313-15.159%209.4194-43.895%206.1723%2040.68%204.0035%2010.194%202.6843-19.159%202.4525%2022.684%205.1614%2011.441%204.1109%2012.811-12.305%200.14185-11.15z%22%20fill%3D%22%2380a6d7%22%2F%3E%3Cpath%20d%3D%22m220.57%20348.97-19.16%202.4528%2022.685%205.1602%2011.44%204.1118%204.8505-4.6588z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.21637%22%2F%3E%3Cpath%20d%3D%22m220.57%20348.97%2018.953%207.8954%200.86307-0.82952z%22%20fill-opacity%3D%22.21637%22%2F%3E%3Cpath%20d%3D%22m220.57%20348.97-19.16%202.4528%2021.675-1.3348%2017.302%205.9479z%22%20fill-opacity%3D%22.49708%22%2F%3E%3Cpath%20d%3D%22m225.52%20336.47%204.5178%203.0322-4.4506%203.0755-4.7692-3.0322z%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22square%22%20stroke-width%3D%221.6996%22%2F%3E%3Cpath%20d%3D%22m228.75%20326.69-15.159%209.4192-43.894%206.1727%2043.75-4.6681z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m242.17%20326.72%206.3196%2010.517-0.14193%2011.15-12.812%2012.306%2013.734-10.391%200.65593-11.469z%22%20fill-opacity%3D%22.20468%22%2F%3E%3Cpath%20d%3D%22m265.11%20348.91%2014.95%202.2762-14.374%201.7757-7.6705%201.4036-4.7883-2.6764%201.2094-3.7908z%22%20fill-opacity%3D%22.30409%22%2F%3E%3Cpath%20d%3D%22m265.18%20344.24%2015.313%200.77113-13.43%206.8175-9.049%202.5324-4.7883-2.6764%201.6447-5.8978z%22%20fill%3D%22%232d415b%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		C_2		:"%3Csvg%20width%3D%2228.222mm%22%20height%3D%2228.222mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-181.5%20-256.43)%22%3E%3Cg%20transform%3D%22matrix(1.0552%200%200%201.0076%20-10.023%20-2.6956)%22%3E%3Cpath%20d%3D%22m275.07%20320.71%201.2062-12.07-5.5927%205.661-10.226%2017.539z%22%20fill%3D%22%23227000%22%2F%3E%3Cpath%20d%3D%22m251.88%20303.77-2.0361-10.196%2011.962-15.827-3.7485%2016.047z%22%20fill%3D%22%23144200%22%2F%3E%3Cpath%20d%3D%22m261.28%20312.05-11.436-18.471-3.4631%2012.348%202.0361%2016.441z%22%20fill%3D%22%231f7b18%22%2F%3E%3Cpath%20d%3D%22m230.32%20281.98%2010.846-6.6713-14.201-18.126-0.96411%2015.537z%22%20fill%3D%22%23227000%22%2F%3E%3Cpath%20d%3D%22m230.32%20281.98%2010.846-6.6713-14.442%2029.16-6.2666-10.864z%22%20fill%3D%22%232d9300%22%2F%3E%3Cpath%20d%3D%22m183.66%20304.35%201.3937-27.174%207.403%2027.977-2.5882%2014.564z%22%20fill%3D%22%2337960d%22%2F%3E%3Cpath%20d%3D%22m191.22%20335.28%206.371-19.49-5.1398-10.639-10.95%2020.672z%22%20fill%3D%22%2337960d%22%2F%3E%3Cpath%20d%3D%22m206.75%20272.21%204.9828%2021.062-7.7507%2012.685-3.6574-18.124z%22%20fill%3D%22%23227000%22%2F%3E%3Cpath%20d%3D%22m212.54%20302.99-0.81187-9.7268-12.619%2016.497%207.5168%2010.107z%22%20fill%3D%22%232d9300%22%2F%3E%3Cpath%20d%3D%22m217.3%20327.09-11.943%209.763v13.807l11.943%205.763h16.891l11.943-5.763v-13.807l-11.943-9.763z%22%20fill%3D%22%231f7b18%22%2F%3E%3Cpath%20d%3D%22m217.3%20327.09-11.943%209.763-6.5002-16.64%200.25365-10.453z%22%20fill%3D%22%232d9300%22%2F%3E%3Cpath%20d%3D%22m205.36%20336.86v13.807l-21.864-12.61-1.9909-12.231z%22%20fill%3D%22%2337960d%22%2F%3E%3Cpath%20d%3D%22m217.3%20327.09%208.6769-12.188%2011.347-7.6839-3.1333%2019.872z%22%20fill%3D%22%23227000%22%2F%3E%3Cpath%20d%3D%22m218.03%20304.04%207.9538%2010.864%2011.347-7.6839-16.872-13.622z%22%20fill%3D%22%232d9300%22%2F%3E%3Cpath%20d%3D%22m205.36%20350.66%2011.943%205.763h16.891l11.943-5.763v-13.807z%22%20fill%3D%22%2382ff80%22%20fill-opacity%3D%22.16374%22%2F%3E%3Cpath%20d%3D%22m261.28%20312.05-1.313%2013.053-13.827%2011.757-11.943-9.763z%22%20fill%3D%22%232d9300%22%2F%3E%3Cpath%20d%3D%22m275.07%20320.71-6.1222%209.8032-22.806%2020.15v-13.807z%22%20fill%3D%22%232d9300%22%2F%3E%3Ccircle%20transform%3D%22matrix(.95841%20-.28541%20.28541%20.95841%200%200)%22%20cx%3D%22110.55%22%20cy%3D%22394.97%22%20r%3D%223.0908%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.0451%22%2F%3E%3Ccircle%20transform%3D%22matrix(.95841%20-.28541%20.28541%20.95841%200%200)%22%20cx%3D%22123.97%22%20cy%3D%22398.96%22%20r%3D%223.0908%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.0451%22%2F%3E%3Cpath%20d%3D%22m205.36%20336.86v13.807l-1.3839-0.76759%200.20332-8.2606z%22%20fill-opacity%3D%22.33333%22%2F%3E%3Cpath%20d%3D%22m181.51%20325.82%2011.127%205.1471%201.1897-3.639z%22%20fill-opacity%3D%22.28655%22%2F%3E%3Cpath%20d%3D%22m185.05%20277.18%202.5952%2031.015%205e-4%206.0356%204.8066-9.0742z%22%20fill-opacity%3D%22.28655%22%2F%3E%3Cpath%20d%3D%22m199.11%20309.76%208.2891%207.8971%202.4992-7.1311z%22%20fill-opacity%3D%22.23977%22%2F%3E%3Cpath%20d%3D%22m220.45%20293.6%208.3203%206.7188%205.7016-11.512z%22%20fill-opacity%3D%22.22222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		C_3		:"%3Csvg%20width%3D%2256.444mm%22%20height%3D%2242.333mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20200%20150%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-159.62%20-225.73)%22%3E%3Cg%20transform%3D%22translate(-278.36%20-38.231)%22%3E%3Cpath%20d%3D%22m580%20374.44%2052.444%2016.824-38.582%2019.976-125.75-34.309%2061.318-46.44%2085.274%203.9035z%22%20fill%3D%22%23e6e6e6%22%2F%3E%3Cpath%20d%3D%22m580%20374.44%2037.968%2012.069-24.106%2024.731-119.9-39.592%2054.542-40.893%2080.962%209.1866z%22%20fill-opacity%3D%22.56725%22%2F%3E%3Cpath%20d%3D%22m483.8%20373.3%2015.027-76.116-7.0856-23.352-32.924%203.2396-20.847%207.3294%2038.242%203.6078-1.6079%2013.695-23.31%2083.799%2039.745%2028.449%20104.02-0.35085%2042.905-64.952-102.66-17z%22%20fill%3D%22%23e6e6e6%22%2F%3E%3Cpath%20d%3D%22m455.89%20268.8%2018.582-4.8401%2018.025%209.5316-17.18%2014.905-19.294-0.79491z%22%20fill%3D%22%23e6e6e6%22%2F%3E%3Cpath%20d%3D%22m467.28%20273.53%203.1559%201.8167-3.109%201.8426-3.3315-1.8166z%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22square%22%20stroke-width%3D%221.0995%22%2F%3E%3Cpath%20d%3D%22m474.61%20301.71%2020.084%200.65417-14.217%2080.861%202.1976%2010.365-31.375-8.0796%2039.747%2028.448%2032.635-0.10997%20105.58-54.921%208.7177-10.273-102.66-16.998-51.512%2041.649%2015.029-76.117zm-18.647-23.627-1.8721%207.9104%201.9297%200.11579z%22%20fill-opacity%3D%22.56725%22%2F%3E%3Cpath%20d%3D%22m491.82%20274.08-16.013%2013.892%200.40876%200.0394-0.41287%202.5184%2016.471-14.981z%22%20fill-opacity%3D%22.38012%22%2F%3E%3Cpath%20d%3D%22m535.31%20331.66-51.368%2041.782-2.3584%209.6969%202.2318%208.8777%207.8264%2021.932%2032.033-0.0987%2095.105-55.184%2019.188-10.009z%22%20fill%3D%22%23ccc%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		C_4		:"%3Csvg%20width%3D%2228.222mm%22%20height%3D%2214.111mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20100%2050%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-207.45%20-306.43)%22%3E%3Cg%20transform%3D%22matrix(1.3801%20-.75852%20-.46108%201.5234%2063.471%20-6.8879)%22%3E%3Cpath%20d%3D%22m248.56%20356.43-14.106-11.568-3.9989-6.7351%203.1405-0.0589%205.7723%207.6658z%22%20fill%3D%22%238237d4%22%2F%3E%3Cpath%20d%3D%22m243.66%20350.75-9.1963-5.9933-4.0006-6.6347%203.1405-0.0589%205.7723%207.6658z%22%20fill-opacity%3D%22.18129%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.8314%20.29362%20.27003%20-1.1393%20-6.1546%20643.43)%22%3E%3Cpath%20d%3D%22m248.56%20356.43-14.106-11.568-3.9989-6.7351%203.1405-0.0589%205.7723%207.6658z%22%20fill%3D%22%237f37d4%22%2F%3E%3Cpath%20d%3D%22m235.24%20342.06-2.6067-0.50712-2.1768-3.4281%203.1405-0.0589%205.7723%207.6658z%22%20fill-opacity%3D%22.081871%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.73933%20.56259%20.4682%20-1.0321%20-51.909%20544.78)%22%3E%3Cpath%20d%3D%22m248.56%20356.43-14.106-11.568-3.9989-6.7351%203.1405-0.0589%205.7723%207.6658z%22%20fill%3D%22%238b37d4%22%2F%3E%3Cpath%20d%3D%22m235.24%20342.06-2.6067-0.50712-2.1768-3.4281%203.1405-0.0589%205.7723%207.6658z%22%20fill-opacity%3D%22.081871%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.59863%201.3523%201.0575%20-.89223%20-218.29%20314.33)%22%3E%3Cpath%20d%3D%22m248.56%20356.43-12.337-6.5535-5.768-11.75%203.1405-0.0589%205.7723%207.6658z%22%20fill%3D%22%238337d4%22%2F%3E%3Cpath%20d%3D%22m235.24%20342.06-2.6067-0.50712-2.1768-3.4281%203.1405-0.0589%205.7723%207.6658z%22%20fill-opacity%3D%22.081871%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22m245.11%20321.73%2015.882%200.62058%2019.35%206.5654-21.285%205.4865-29.703%204.1455-11.575-5.8322z%22%20fill%3D%22%239837d4%22%2F%3E%3Cg%20transform%3D%22matrix(1.3801%20-.75852%20-.46108%201.5234%2070.471%20-6.9644)%22%3E%3Cpath%20d%3D%22m248.56%20356.43-14.106-11.568-3.9989-6.7351%203.1405-0.0589%205.7723%207.6658z%22%20fill%3D%22%238237d4%22%2F%3E%3Cpath%20d%3D%22m235.24%20342.06-2.6067-0.50712-2.1768-3.4281%203.1405-0.0589%205.7723%207.6658z%22%20fill-opacity%3D%22.18129%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(1.4097%20.28655%20-.34948%201.4888%2031.085%20-234.57)%22%3E%3Cpath%20d%3D%22m249.46%20326.33-25.413-2.2605%200.84737%2014.777%2026.161-6.5166%207.3459-3.8259z%22%20fill-opacity%3D%22.4152%22%2F%3E%3Cpath%20d%3D%22m249.46%20326.33-25.413-2.2605%200.84737%2014.777%2025.542-7.3121%206.9924-3.1188z%22%20fill%3D%22%237e37d4%22%2F%3E%3Cpath%20d%3D%22m249.46%20326.33-25.413-2.2605%201.0986%208.4886%202.4943-0.57183%2029.789-3.5709z%22%20fill-opacity%3D%22.19883%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.20037%20.7996%20.85539%20-.044943%20-69.308%20152.54)%22%3E%3Cpath%20d%3D%22m240.68%20352.64-7.1123-0.57364-3.1093-13.945%203.1405-0.0589%205.7723%207.6658z%22%20fill%3D%22%238c37d4%22%2F%3E%3Cpath%20d%3D%22m234.39%20337.65-2.83%200.0271-1.0972%200.44683%203.1405-0.0589%205.7723%207.6658z%22%20fill-opacity%3D%22.23392%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22m234.51%20311.36-12.794%202.253-9.2148%209.8428-5.0586%206.8188%201.2238%202.7266%202.9069%201.098%207.4391%202.0589%206.9779%201.1732%209.352-4.0791%202.29-12.014z%22%20fill-opacity%3D%22.29825%22%2F%3E%3Cpath%20d%3D%22m234.51%20311.36-12.794%202.253-9.2148%209.8428-5.0586%206.8188%201.2238%202.7266%202.9069%201.098%207.4391%202.0589%206.9779%201.1732%208.2918-5.2941%202.2583-9.9862z%22%20fill%3D%22%239837d4%22%2F%3E%3Cellipse%20transform%3D%22matrix(.9564%20.29207%20-.21149%20.97738%200%200)%22%20cx%3D%22288.58%22%20cy%3D%22244.72%22%20rx%3D%221.7269%22%20ry%3D%222.0279%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.2664%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		C_5		:"%3Csvg%20width%3D%228.4667mm%22%20height%3D%225.9267mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%2030%2021%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-532.18%20-419.05)%22%3E%3Cpath%20d%3D%22m534.91%20432.08%201.682-8.2489%202.5925-2.2703%205.9711-2.2783%200.37732%202.6387%203.6145%209.2996%203.0848-3.4285%209.9524-8.3468-3.0997%2011.816%202.8256%207.4154-8.9324-3.2519-3.9084-1.993-0.37044%201.337-4.2608%204.8261-4.2458-0.86836-3.9518-2.0041z%22%20fill%3D%22%236ae36b%22%2F%3E%3Cpath%20d%3D%22m562.18%20419.45-13.763%2012.883%2013.489%206.3485-2.8256-7.4155z%22%20fill-opacity%3D%22.18129%22%2F%3E%3Cpath%20d%3D%22m534.91%20432.08%201.6266-8.2489%202.6479-2.2703%204.2077%200.76408%202.0833-0.45836%201.3678%203.3633%203.5523%206.7762-1.8038%202.2626-4.4073%204.4013-1.5215-0.33818-2.4703%200.39531-3.9518-2.0041z%22%20fill-opacity%3D%22.11696%22%2F%3E%3Cpath%20d%3D%22m562.18%20419.45-13.763%2012.883%207.1239%200.81789%203.5396-1.8848z%22%20fill-opacity%3D%22.18129%22%2F%3E%3Cpath%20d%3D%22m534.91%20432.08%200.94318-7.861%203.3313-2.6582%204.2513%200.69791%205.0904%204.2707%203.2799%205.4733-4.5247%204.7397-4.6184%201.5893-2.4703%200.39531-3.9518-2.0041z%22%20fill%3D%22%2345855d%22%2F%3E%3Cpath%20d%3D%22m544.15%20431.58%200.35002%201.3397-0.88461%202.8615-1.941%200.0936-0.56783-1.5875%200.55546-1.8271z%22%20fill-opacity%3D%22.29825%22%2F%3E%3Cpath%20d%3D%22m543.85%20432.03%200.35002%201.3397-0.88461%202.8615-1.6477-0.35093-0.56783-1.5875%200.55546-1.8271z%22%20fill%3D%22%236ae36b%22%2F%3E%3Cpath%20d%3D%22m538.39%20423.98-1.9822%200.17032-3.2625%206.2946%200.0259%201.9464%201.2906%201.2262-0.0221%201.8224%203.8774%202.1406%202.3764-3.8697%200.76063-3.3073z%22%20fill-opacity%3D%22.11696%22%2F%3E%3Cpath%20d%3D%22m538.22%20424.15-2.3194%200.0104-1.7569%201.7371-1.5708%202.7132-0.25719%201.1748%201.383%201.2225-1.015%201.3808%200.47871%202.6198%202.1814%201.5655%202.8784%201.1357%202.3058-4.4327%200.46559-3.4621z%22%20fill%3D%22%232ed862%22%2F%3E%3Cpath%20d%3D%22m532.43%20429.19-0.21259%200.61209%200.12468%200.68208%200.31933-0.10771%200.83524%200.51533-0.86567%200.46014-0.31911-0.1346-0.12557%200.6715%200.50586%201.1495%200.75691-1.0651%200.67147-0.86497-0.4913-1.1135-0.57583-1.2698z%22%20fill%3D%22%23053015%22%2F%3E%3Cpath%20d%3D%22m541.82%20433.48-0.71243%200.81041%200.55546-1.8271z%22%20fill-opacity%3D%22.23977%22%2F%3E%3Cpath%20d%3D%22m548.52%20426.53%203.2799%205.4733-4.5247%204.7397-4.6184%201.5893-2.4703%200.39531%207.112-4.2122%201.9947-2.7375z%22%20fill-opacity%3D%22.16374%22%2F%3E%3Ccircle%20cx%3D%22536.66%22%20cy%3D%22428.29%22%20r%3D%22.93982%22%20fill%3D%22%23193418%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.73176%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		C_6		:"%3Csvg%20width%3D%2233.867mm%22%20height%3D%2214.111mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20120%2050%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-205.53%20-319)%22%3E%3Cpath%20d%3D%22m307.5%20369-5.6378-13.216-10.319-6.5882-44.47%2011.046%2010.111%204.6742%2017.054%200.28894z%22%20fill%3D%22%23f74d30%22%2F%3E%3Cpath%20d%3D%22m307.5%20369-24.159-7.3264-34.45-5.4554%2021.384-3.2963%2031.643%203.0892z%22%20fill-opacity%3D%22.099415%22%2F%3E%3Cpath%20d%3D%22m308.42%20319-7.0309%2010.553-9.6999%207.4921-51.965-6.1995%2012.61-8.4333%2045.118-0.78283z%22%20fill%3D%22%23ff9526%22%2F%3E%3Cpath%20d%3D%22m318.05%20360.74%207.4815-15.353-7.0404-15.089-8.2146%203.837-6.4026%208.495-1.2534%202.9322%201.4409%203.0222%205.4278%206.4329z%22%20fill%3D%22%23ff8b1f%22%2F%3E%3Cpath%20d%3D%22m280.01%20361.52%2017.129-8.789-5.5936-3.5404-44.47%2011.046%2010.111%204.6742%207.389-0.9447z%22%20fill-opacity%3D%22.23977%22%2F%3E%3Cpath%20d%3D%22m318.05%20360.74%207.4815-15.353-9.9757%203.1978-11.937-0.95245%200.18398-2.3901-1.1818%200.31979%201.4409%203.0222%205.4278%206.4329z%22%20fill-opacity%3D%22.099415%22%2F%3E%3Cpath%20d%3D%22m232.26%20328.09%2011.621%202.3349%2035.089%200.29076%2024.703%2012.861%200.42851%204.4911-24.726%2012.01-31.351%204.3358-20.815-5.3676z%22%20fill%3D%22%23de6d1d%22%2F%3E%3Cpath%20d%3D%22m273.2%20341.32-35.235-2.7473%200.96532%202.5142%2033.169%201.7154%2032.347%203.117z%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m308.42%20319-25.995%206.3563-33.835%208.5386%2021.589%201.356%2031.246-5.9287z%22%20fill-opacity%3D%22.099415%22%2F%3E%3Cpath%20d%3D%22m308.42%20319-25.995%206.3563-33.835%208.5386%200.39702-2.9255%2012.489-2.518z%22%20fill-opacity%3D%22.2807%22%2F%3E%3Cpath%20d%3D%22m247.28%20326.83-9.8015%201.2579%200.27444%2013.448%2035.447-0.20906%2031.246%204.5991-0.24784-2.3505-22.613-12.861z%22%20fill%3D%22%23ce5d0e%22%2F%3E%3Cpath%20d%3D%22m241.03%20327.47-14.48%201.2253-15.28%209.6209-5.7425%206.6864%202.6779%201.2386%201.3184%200.60466-3.8353%201.9412%2012.306%207.5382%2011.343%203.5886%2017.679-11.162%200.13745-10.951z%22%20fill%3D%22%23d48337%22%2F%3E%3Cpath%20d%3D%22m209.52%20346.85-3.8362%201.9414%2012.308%207.537%2011.342%203.5894%206.0603-3.832z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.21637%22%2F%3E%3Cpath%20d%3D%22m209.52%20346.85%2024.178%2010.348%201.6965-1.1122z%22%20fill-opacity%3D%22.21637%22%2F%3E%3Cpath%20d%3D%22m209.52%20346.85-3.8362%201.9414%204.3135-1.6532%2025.272%208.9295z%22%20fill-opacity%3D%22.49708%22%2F%3E%3Cpath%20d%3D%22m226.55%20328.7-15.28%209.6207-5.7414%206.6868%205.6022-5.209z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m241.03%20327.47%206.1236%2010.33-0.13753%2010.951-17.679%2011.163%2018.573-9.2821%200.63558-11.265z%22%20fill-opacity%3D%22.20468%22%2F%3E%3Cpath%20d%3D%22m256.78%20351.25%204.2686%204.6154-7.1648-0.77695-3.9741%207e-3%20-1.3079-3.2765%203.0201-0.73148z%22%20fill-opacity%3D%22.30409%22%2F%3E%3Cpath%20d%3D%22m257.24%20346.03%206.0452%204.2103-3.9429%203.9346-9.4326%200.91961-1.3079-3.2765%202.0925-1.6803z%22%20fill%3D%22%23ff9526%22%2F%3E%3Cellipse%20cx%3D%22221.45%22%20cy%3D%22339.8%22%20rx%3D%222.4342%22%20ry%3D%222.4673%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.6585%22%2F%3E%3Crect%20transform%3D%22matrix(.77241%20.63512%20-.63512%20.77241%200%200)%22%20x%3D%22386.62%22%20y%3D%22117.72%22%20width%3D%22.61945%22%20height%3D%221.2389%22%20fill%3D%22%23ff9526%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.0078%22%2F%3E%3Crect%20transform%3D%22matrix(.32747%20.94486%20-.94486%20.32747%200%200)%22%20x%3D%22393.24%22%20y%3D%22-101.92%22%20width%3D%22.61945%22%20height%3D%221.2389%22%20fill%3D%22%23ff9526%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.0078%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		C_7		:"%3Csvg%20width%3D%2220.32mm%22%20height%3D%2211.289mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%2072%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-205.53%20-315.13)%22%3E%3Cpath%20d%3D%22m236.42%20355.13-0.20959-3.392-1.707-2.4815-10.322-2.3431%201.8065%202.0543%203.6182%201.8568z%22%20fill%3D%22%23f74d30%22%2F%3E%3Cpath%20d%3D%22m236.42%20355.13-4.6054-4.095-6.9426-4.7824%204.8119%201.5535%206.5213%203.9858z%22%20fill-opacity%3D%22.099415%22%2F%3E%3Cpath%20d%3D%22m231.12%20350.66%204.3167-0.0575-0.92765-1.3386-10.322-2.3431%201.8065%202.0543%201.6481%200.57793z%22%20fill-opacity%3D%22.23977%22%2F%3E%3Cpath%20d%3D%22m263.64%20351.83-2.7428-6.3786-5.0201-3.1799-21.635%205.3317%204.9188%202.256%208.2968%200.13946z%22%20fill%3D%22%23f74d30%22%2F%3E%3Cpath%20d%3D%22m263.64%20351.83-11.753-3.5362-16.76-2.6331%2010.403-1.591%2015.394%201.491z%22%20fill-opacity%3D%22.099415%22%2F%3E%3Cpath%20d%3D%22m256.76%20315.14-3.3286%208.5361%201.0036%204.4921-34.839-3.0499%205.9701-8.431%2021.456%201.1938z%22%20fill%3D%22%23ff5126%22%2F%3E%3Cpath%20d%3D%22m276.28%20346.49%201.2434-9.7814-0.90048-9.6131-6.3875%202.4445-4.9785%205.412-0.97465%201.8681%201.1204%201.9254%204.2206%204.0984z%22%20fill%3D%22%23ff491f%22%2F%3E%3Cpath%20d%3D%22m250.27%20348.23%208.3332-4.2421-2.7213-1.7088-21.635%205.3317%204.9188%202.256%203.5948-0.45597z%22%20fill-opacity%3D%22.23977%22%2F%3E%3Cpath%20d%3D%22m276.28%20346.49%201.2434-9.7814-4.537%200.81677-7.9282%200.61371%200.14306-1.5227-0.91898%200.20373%201.1204%201.9254%204.2206%204.0984z%22%20fill-opacity%3D%22.099415%22%2F%3E%3Cpath%20d%3D%22m221.8%20324.29%207.0722%201.6748%2021.354%200.20857%2015.034%209.2252%200.26078%203.2215-15.048%208.6151-19.079%203.1101-12.668-3.8502z%22%20fill%3D%22%23de211d%22%2F%3E%3Cpath%20d%3D%22m246.71%20333.78-21.443-1.9707%200.58747%201.8034%2020.186%201.2305%2019.685%202.2358z%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m256.76%20315.13-16.44%206.1769-16.527%206.8499%200.18796-2.9247%205.9127-2.5173z%22%20fill-opacity%3D%22.2807%22%2F%3E%3Cpath%20d%3D%22m254.28%20323.16-7.0303%201.6237-6.5425%202.1746%200.0774-0.73858%202.4343-0.63572z%22%20fill-opacity%3D%22.2807%22%2F%3E%3Cpath%20d%3D%22m230.94%20323.38-5.9649%200.90232%200.16702%209.6464%2021.572-0.14996%2019.016%203.2989-0.15083-1.686-13.762-9.2253z%22%20fill%3D%22%23ce2f0e%22%2F%3E%3Cpath%20d%3D%22m234.49%20316.19-6.7997%205.1159-6.3279%206.8519%200.0748-2.3271%202.3544-2.003z%22%20fill-opacity%3D%22.2807%22%2F%3E%3Cpath%20d%3D%22m227.13%20323.84-8.8121%200.87892-9.0294%209.3956-3.7645%203.7362%201.6297%200.88841%200.84728%200.34098-2.379%201.4851%207.4893%203.9726%206.9031%202.5741%2010.759-8.0068%200.0836-7.8552z%22%20fill%3D%22%23d4373a%22%2F%3E%3Cpath%20d%3D%22m208.01%20339.09-2.3796%201.4853%207.4904%203.9717%206.9026%202.5747%203.6881-2.7487z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.21637%22%2F%3E%3Cpath%20d%3D%22m208.01%20339.09%2014.669%206.0808%201.0324-0.79778z%22%20fill-opacity%3D%22.21637%22%2F%3E%3Cpath%20d%3D%22m208.01%20339.09-2.3796%201.4853%202.67-1.2786%2015.335%205.0633z%22%20fill-opacity%3D%22.49708%22%2F%3E%3Cpath%20d%3D%22m218.32%20324.72-9.0294%209.3954-3.7638%203.7365%203.6791-2.6764z%22%20fill%3D%22%23fba947%22%20fill-opacity%3D%22.33918%22%2F%3E%3Cpath%20d%3D%22m227.13%20323.85%203.7267%207.4095-0.0837%207.8552-10.759%208.0069%2011.303-6.658%200.3868-8.0802z%22%20fill-opacity%3D%22.20468%22%2F%3E%3Cpath%20d%3D%22m235.81%20341.31%201.573%205.1825-3.6747-3.8502-2.1032-1.831-0.20559-2.8834%201.7061%200.88625z%22%20fill-opacity%3D%22.30409%22%2F%3E%3Cpath%20d%3D%22m236.83%20337.89%202.573%205.7214-2.6696%200.9157-5.126-3.7176-0.20559-2.8834%201.3562-0.20224z%22%20fill%3D%22%23ff4b26%22%2F%3E%3Cellipse%20cx%3D%22217.8%22%20cy%3D%22332.56%22%20rx%3D%221.5011%22%20ry%3D%221.6232%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.0564%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		C_8		:"%3Csvg%20width%3D%2220.32mm%22%20height%3D%229.8778mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%2072%2035%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-205.5%20-317.24)%22%3E%3Cpath%20d%3D%22m260.08%20346%202.0104-3.3497-5.0818-3.0003-21.901%205.0305%204.9793%202.1286%208.3988%200.13159z%22%20fill%3D%22%232aa9fa%22%2F%3E%3Cpath%20d%3D%22m260.08%20346-7.111-0.66774-16.966-2.4844%2010.531-1.5011%2015.583%201.4068z%22%20fill-opacity%3D%22.099415%22%2F%3E%3Cpath%20d%3D%22m259.9%20317.24-5.8748%205.2185%201.0159%204.2384-35.268-2.8776%206.8487-6.0367%2021.719%201.1264z%22%20fill%3D%22%2326d2ff%22%2F%3E%3Cpath%20d%3D%22m277.15%20343.98-4.5572-9.354%204.9043-8.945-6.466%202.3064-5.0397%205.1063-0.98663%201.7626%201.1342%201.8166%204.2724%203.8668z%22%20fill%3D%22%232aa9fa%22%2F%3E%3Cpath%20d%3D%22m251.32%20345.27%208.4356-4.0025-2.7548-1.6123-21.901%205.0305%204.9793%202.1286%203.639-0.43021z%22%20fill-opacity%3D%22.23977%22%2F%3E%3Cpath%20d%3D%22m277.15%20343.98-4.5572-9.354-4.5928%200.77063-2.2098%200.70414%200.14482-1.4367-0.93027%200.19222%201.1342%201.8166%204.2724%203.8668z%22%20fill-opacity%3D%22.099415%22%2F%3E%3Cpath%20d%3D%22m222%20323.03%207.1592%201.5802%2021.617%200.19679%2015.219%208.7041%200.26399%203.0395-15.233%208.1284-19.314%202.9344-12.823-3.6327z%22%20fill%3D%22%23c5fcfe%22%2F%3E%3Cpath%20d%3D%22m247.22%20331.99-21.707-1.8594%200.59468%201.7016%2020.434%201.161%2019.927%202.1095z%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m259.9%20317.24-18.673%203.5233-17.205%205.9322%200.19027-2.7595%205.9853-2.3751z%22%20fill-opacity%3D%22.2807%22%2F%3E%3Cpath%20d%3D%22m254.16%20322.45-5.4401%201.3846-7.5719%201.7275%200.0784-0.69687%202.4642-0.59981z%22%20fill-opacity%3D%22.2807%22%2F%3E%3Cpath%20d%3D%22m231.25%20322.18-6.0382%200.85135%200.16907%209.1015%2021.837-0.14149%2019.249%203.1126-0.15269-1.5908-13.931-8.7042z%22%20fill%3D%22%230e95ce%22%2F%3E%3Cpath%20d%3D%22m235.68%20318.26-6.3916%202.9088-7.7343%205.5213%200.0757-2.1957%202.3834-1.8899z%22%20fill-opacity%3D%22.2807%22%2F%3E%3Cg%20transform%3D%22matrix(1.1491%200%200%201.5758%20-33.448%20-199.27)%22%3E%3Cpath%20d%3D%22m241.01%20348.46-3.979%201.5192-7.4756-1.9703-4.5184-7.0613%203.0718-0.0222%205.7975%204.1621z%22%20fill%3D%22%232aa9fa%22%2F%3E%3Cpath%20d%3D%22m241.01%20348.46-6.5382-3.0982-9.4041-4.3988%202.0053%204.2658%2010.007%204.6968z%22%20fill-opacity%3D%22.099415%22%2F%3E%3Cpath%20d%3D%22m231.69%20345.36%202.6125%203.8657-4.7443-1.2198-4.5184-7.0613%203.0718-0.0222%201.5397%201.1463z%22%20fill-opacity%3D%22.23977%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22m227.4%20322.62-8.9205%200.82927-8.9817%206.4002-3.9959%206.7785%201.6762%200.0496%202.2856%200.34637-3.8098%200.58792%207.5549%204.5369%206.9879%202.4287%2010.891-7.5545%200.0847-7.4115z%22%20fill%3D%22%233791d4%22%2F%3E%3Cpath%20d%3D%22m209.46%20337.02-3.8103%200.58811%207.556%204.536%206.9874%202.4293%203.7335-2.5934z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.21637%22%2F%3E%3Cpath%20d%3D%22m209.46%20337.02%2013.422%205.7127%201.0451-0.75272z%22%20fill-opacity%3D%22.21637%22%2F%3E%3Cpath%20d%3D%22m209.46%20337.02-3.8103%200.58811%204.1874-0.45569%2014.012%204.8153z%22%20fill-opacity%3D%22.49708%22%2F%3E%3Cpath%20d%3D%22m218.48%20323.45-8.9818%206.4001-3.9952%206.7787%203.9094-5.7786z%22%20fill%3D%22%23fba947%22%20fill-opacity%3D%22.33918%22%2F%3E%3Cpath%20d%3D%22m227.4%20322.62%203.7725%206.991-0.0848%207.4115-10.891%207.5546%2011.442-6.2819%200.39155-7.6237z%22%20fill-opacity%3D%22.20468%22%2F%3E%3Cellipse%20cx%3D%22220.49%22%20cy%3D%22330.12%22%20rx%3D%221.5292%22%20ry%3D%221.4669%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.0136%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		C_9		:"%3Csvg%20width%3D%2228.222mm%22%20height%3D%2214.111mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20100%2050%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-207.45%20-306.43)%22%3E%3Cg%20transform%3D%22matrix(.80353%20.23196%20.22935%20-.61535%20-20.974%20480.65)%22%3E%3Cpath%20d%3D%22m248.56%20356.43-14.106-11.568-3.9989-6.7351%203.1405-0.0589%205.7723%207.6658z%22%20fill%3D%22%233791d4%22%2F%3E%3Cpath%20d%3D%22m235.24%20342.06-2.6067-0.50712-2.1768-3.4281%203.1405-0.0589%205.7723%207.6658z%22%20fill-opacity%3D%22.081871%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(1.3237%20.38213%20.37784%20-1.0137%20-202.25%20580.85)%22%3E%3Cpath%20d%3D%22m248.56%20356.43-14.106-11.568-3.9989-6.7351%203.1405-0.0589%205.7723%207.6658z%22%20fill%3D%22%233791d4%22%2F%3E%3Cpath%20d%3D%22m235.24%20342.06-2.6067-0.50712-2.1768-3.4281%203.1405-0.0589%205.7723%207.6658z%22%20fill-opacity%3D%22.081871%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(1.6194%20.20579%20.26493%20-1.2579%20-238.12%20703.64)%22%3E%3Cpath%20d%3D%22m248.56%20356.43-14.106-11.568-3.9989-6.7351%203.1405-0.0589%205.7723%207.6658z%22%20fill%3D%22%233791d4%22%2F%3E%3Cpath%20d%3D%22m235.24%20342.06-2.6067-0.50712-2.1768-3.4281%203.1405-0.0589%205.7723%207.6658z%22%20fill-opacity%3D%22.081871%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.94155%200%200%20.96097%209.3012%2011.27)%22%3E%3Cpath%20d%3D%22m248.56%20356.43-16.088-4.3218-2.017-13.982%203.1405-0.0589%205.7723%207.6658z%22%20fill%3D%22%233791d4%22%2F%3E%3Cpath%20d%3D%22m248.56%20356.43-16.088-4.3218-2.017-13.982%203.1405-0.0589%205.7723%207.6658z%22%20fill-opacity%3D%22.22807%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(1.6194%20.20579%20.26493%20-1.2579%20-189.52%20709.07)%22%3E%3Cpath%20d%3D%22m248.56%20356.43-14.106-11.568-3.9989-6.7351%203.1405-0.0589%205.7723%207.6658z%22%20fill%3D%22%233791d4%22%2F%3E%3Cpath%20d%3D%22m235.24%20342.06-2.6067-0.50712-2.1768-3.4281%203.1405-0.0589%205.7723%207.6658z%22%20fill-opacity%3D%22.081871%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(1.6006%20.15182%20-.11973%201.3148%20-121.67%20-141.7)%22%3E%3Cpath%20d%3D%22m277.15%20343.98-4.5572-9.354%204.9043-8.945-6.466%202.3064-5.0397%205.1063-0.98663%201.7626%201.1342%201.8166%204.2724%203.8668z%22%20fill%3D%22%232c75aa%22%2F%3E%3Cpath%20d%3D%22m277.15%20343.98-4.5572-9.354-4.5928%200.77063-2.2098%200.70414%200.14482-1.4367-0.93027%200.19222%201.1342%201.8166%204.2724%203.8668z%22%20fill%3D%22%2387f9ff%22%20fill-opacity%3D%22.099415%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22m244.21%20335.13%2021.654%200.59942%200.55681%207.3428-13.988%201.4126-19.317-0.24748-10.897-2.1696z%22%20fill%3D%22%2337a9d4%22%2F%3E%3Cg%20transform%3D%22matrix(.94155%200%200%20.77346%208.0204%2080.186)%22%3E%3Cpath%20d%3D%22m277.15%20343.98-3.7447-9.1987%204.0918-9.1003-6.466%202.3064-5.0397%205.1063-0.98663%201.7626%201.1342%201.8166%204.2724%203.8668z%22%20fill-opacity%3D%22.49708%22%2F%3E%3Cpath%20d%3D%22m277.15%20343.98-4.5572-9.354%204.9043-8.945-6.466%202.3064-5.0397%205.1063-0.98663%201.7626%201.1342%201.8166%204.2724%203.8668z%22%20fill%3D%22%232c75aa%22%2F%3E%3Cpath%20d%3D%22m277.15%20343.98-4.5572-9.354-4.5928%200.77063-2.2098%200.70414%200.14482-1.4367-0.93027%200.19222%201.1342%201.8166%204.2724%203.8668z%22%20fill%3D%22%2387f9ff%22%20fill-opacity%3D%22.099415%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.49108%200%200%20.32131%20141.64%20232.41)%22%3E%3Cpath%20d%3D%22m248.56%20356.43-16.088-4.3218-2.017-13.982%203.1405-0.0589%205.7723%207.6658z%22%20fill%3D%22%233791d4%22%2F%3E%3Cpath%20d%3D%22m235.13%20340.99-4.2756%200.36574-0.39203-3.2316%203.1405-0.0589%205.7723%207.6658z%22%20fill-opacity%3D%22.23392%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.88879%20.31717%20-.31076%20.90712%20145.77%20-39.096)%22%3E%3Cpath%20d%3D%22m249.13%20325.66-25.082-1.5969%200.84737%2014.777%2026.821-5.4809%201.9892-4.9249z%22%20fill-opacity%3D%22.4152%22%2F%3E%3Cpath%20d%3D%22m249.13%20325.66-25.082-1.5969%200.84737%2014.777%2026.203-6.2764%201.6357-4.2178z%22%20fill%3D%22%233791d4%22%2F%3E%3Cpath%20d%3D%22m249.13%20325.66-25.082-1.5969%201.0986%208.4886%202.4943-0.57183%2025.093-3.6341z%22%20fill-opacity%3D%22.19883%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.88879%20.31717%20-.31076%20.90712%20137.28%20-41.134)%22%3E%3Cpath%20d%3D%22m235.18%20321.65-11.13%202.4203%201.3637%2017.593%2012.659-2.8699%201.9408-10.152z%22%20fill-opacity%3D%22.4152%22%2F%3E%3Cpath%20d%3D%22m235.18%20321.65-11.13%202.4203%201.3637%2017.593%2012.04-3.6654%201.5873-9.4444z%22%20fill%3D%22%233791d4%22%2F%3E%3Cpath%20d%3D%22m235.18%20321.65-11.13%202.4203%201.0986%208.4886%202.4943-0.57183%2011.398-3.434z%22%20fill-opacity%3D%22.19883%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.94155%200%200%20.96097%2012.126%2013.913)%22%3E%3Cpath%20d%3D%22m248.56%20356.43-16.088-4.3218-2.017-13.982%203.1405-0.0589%205.7723%207.6658z%22%20fill%3D%22%233791d4%22%2F%3E%3Cpath%20d%3D%22m235.13%20340.99-4.2756%200.36574-0.39203-3.2316%203.1405-0.0589%205.7723%207.6658z%22%20fill-opacity%3D%22.23392%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.93151%20.13995%20-.13712%20.95072%2065.346%20-15.162)%22%3E%3Cpath%20d%3D%22m235.18%20321.65-11.13%202.4203%201.3637%2017.593%2012.659-2.8699%201.9408-10.152z%22%20fill-opacity%3D%22.4152%22%2F%3E%3Cpath%20d%3D%22m235.18%20321.65-11.13%202.4203%201.3637%2017.593%2012.04-3.6654%201.5873-9.4444z%22%20fill%3D%22%233791d4%22%2F%3E%3Cpath%20d%3D%22m235.18%20321.65-11.13%202.4203%201.0986%208.4886%202.4943-0.57183%2011.398-3.434z%22%20fill-opacity%3D%22.19883%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.94155%200%200%20.96097%2012.126%2013.913)%22%3E%3Cpath%20d%3D%22m235.18%20321.65-11.13%202.4203%201.3637%2017.593%2012.659-2.8699%201.9408-10.152z%22%20fill-opacity%3D%22.4152%22%2F%3E%3Cpath%20d%3D%22m235.18%20321.65-11.13%202.4203%201.3637%2017.593%2012.04-3.6654%201.5873-9.4444z%22%20fill%3D%22%233791d4%22%2F%3E%3Cpath%20d%3D%22m235.18%20321.65-11.13%202.4203%201.0986%208.4886%202.4943-0.57183%2011.398-3.434z%22%20fill-opacity%3D%22.19883%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22m226.23%20323.94-10.063%204.1095-5.7936%208.4437-2.9301%205.5796%201.4832%201.5696%202.5714%200.1403%206.4475-0.14197%205.9137-0.63896%206.9257-4.6265-0.25313-8.4812z%22%20fill-opacity%3D%22.29825%22%2F%3E%3Cpath%20d%3D%22m226.23%20323.94-10.063%204.1095-5.7936%208.4437-2.9301%205.5796%201.4832%201.5696%202.5714%200.1403%206.4475-0.14197%205.9137-0.63896%205.8438-5.2211%200.0797-7.1222z%22%20fill%3D%22%233791d4%22%2F%3E%3Cpath%20d%3D%22m226.23%20323.94-10.063%204.1095-5.7936%208.4437-2.9301%205.5796%201.4832%201.5696%2011.283-9.2779%209.573-3.706z%22%20fill-opacity%3D%22.28655%22%2F%3E%3Cellipse%20cx%3D%22219.98%22%20cy%3D%22334.11%22%20rx%3D%221.4399%22%20ry%3D%221.4096%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.96413%22%2F%3E%3Cpath%20d%3D%22m226.23%20323.94-10.063%204.1095-5.7936%208.4437-2.9301%205.5796%201.4832%201.5696%2010.805-9.717%2010.051-3.2669z%22%20fill%3D%22%232c75aa%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",

		weed	:"%3Csvg%20width%3D%2256.444mm%22%20height%3D%2256.444mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(160.82%20-264.94)%22%3E%3Cg%20transform%3D%22matrix(.93537%200%200%201.0866%20-83.246%20-40.259)%22%3E%3Cpath%20d%3D%22m-25.6%20280.91%2032.82%20127.2%206.6878%2052.664h-6.3522z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-25.6%20280.91%2032.82%20127.2%206.6878%2052.664h-3.9327z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-25.6%20280.91%2033.156%20179.87h2.4197%203.9327l-6.6879-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2067.917%20127.2%2027.531%2052.664h-6.8541z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2067.917%20127.2%2027.531%2052.664h-5.5986z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2088.594%20179.87h1.2557%205.5986l-27.531-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91%203.7562%20127.2-5.5884%2052.664h-6.5435z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91%203.7562%20127.2-5.5884%2052.664h-3.8881z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91-8.3757%20179.87h2.6556%203.8881l5.5883-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%203.5861%200.30108-2.2365%2010.011h-8.4189z%22%20fill-opacity%3D%22.16959%22%2F%3E%3Cpath%20transform%3D%22matrix(1.0003%200%200%20.9203%2030.856%20280.88)%22%20d%3D%22m-113.72%200.03125%2086.104%20190.01-6.2598%209.9277h8.416%2014.898l-4.8379-6.6641%205.373-55.051v-2e-3l-3.7559-138.22-6.9746%20162.79-2.8691-24.564v-2e-3l-32.811-138.22%2030.428%20179.42-19.814-41.195v-2e-3l-67.896-138.22z%22%20fill-opacity%3D%22.54971%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.061527%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.93537%200%200%201.0866%20-64.614%20-40.259)%22%3E%3Cpath%20d%3D%22m8.8127%20316.62%204.5731%20101.96-3.6371%2042.211h-5.0914z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m8.8127%20316.62%204.5731%20101.96-3.6371%2042.211h-3.1521z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m8.8126%20316.62-4.1555%20144.17h1.9394%203.1521l3.6371-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2032.704%20101.96%2013.069%2042.211h-5.4936z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2032.704%20101.96%2013.069%2042.211h-4.4873z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2040.279%20144.17h1.0064%204.4873l-13.069-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-20.722%20101.96-11.477%2042.211h-5.2447z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-20.722%20101.96-11.477%2042.211h-3.1163z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-37.443%20144.17h2.1285%203.1163l11.477-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20transform%3D%22matrix(-1%200%200%201%2049.026%20280.86)%22%20d%3D%22m44.99%20173.74-8.3555%200.30079-7.8965%2010.012h14.902l-2.2363-10.012%203.5859-0.30079z%22%20fill-opacity%3D%22.30994%22%2F%3E%3Cpath%20transform%3D%22matrix(-1.0003%200%200%20.9203%2029.029%20280.88)%22%20d%3D%22m-13.977%2038.832%2020.715%20110.79%209.8789%2039.496v2e-3l-3.8906%205.3594-3.9883%205.4941v2e-3h14.898v-2e-3h8.416l-5.2207-8.2773%2039.291-152.86-32.693%20110.79-9.4043%2033.018-3.8145-143.8-4.5723%20110.79%201.5605%2019.686-31.176-130.47z%22%20fill-opacity%3D%22.081871%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.049314%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(-.93566%200%200%20.99999%20-81.498%20.0034275)%22%3E%3Cg%20transform%3D%22matrix(.9997%200%200%201.0866%20-.012975%20-40.262)%22%3E%3Cpath%20d%3D%22m10.265%20280.91%205.7056%20127.2-4.5379%2052.664h-6.3522z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m10.265%20280.91%205.7056%20127.2-4.5379%2052.664h-3.9327z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m10.265%20280.91-5.1846%20179.87h2.4197%203.9327l4.5379-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-47.035%20280.91%2040.803%20127.2%2016.305%2052.664h-6.8541z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-47.035%20280.91%2040.803%20127.2%2016.305%2052.664h-5.5986z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-47.035%20280.91%2050.254%20179.87h1.2557%205.5986l-16.305-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m52.932%20280.91-23.358%20127.2-16.814%2052.664h-6.5435z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m52.932%20280.91-23.358%20127.2-16.814%2052.664h-3.8881z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m52.932%20280.91-46.716%20179.87h2.6556%203.8881l16.814-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%203.5861%200.30108-2.2365%2010.011h-8.4189z%22%20fill-opacity%3D%22.16959%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22m-47.035%20264.97%2049.249%20191.6-5.2601%208.3405h8.4174%2014.898l-6.2969-8.6758%2015.579-53.042%2023.352-138.22-38.898%20162.79%201.9467-24.569-5.7034-138.22-4.7564%20179.42-11.737-41.195-40.79-138.22z%22%20fill-opacity%3D%22.30409%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.061527%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.93537%200%200%201.0866%20-83.327%20-40.259)%22%3E%3Cpath%20d%3D%22m8.8127%20316.62%204.5731%20101.96-3.6371%2042.211h-5.0914z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m8.8127%20316.62%204.5731%20101.96-3.6371%2042.211h-3.1521z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m8.8126%20316.62-4.1555%20144.17h1.9394%203.1521l3.6371-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2032.704%20101.96%2013.069%2042.211h-5.4936z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2032.704%20101.96%2013.069%2042.211h-4.4873z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2040.279%20144.17h1.0064%204.4873l-13.069-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-20.722%20101.96-11.477%2042.211h-5.2447z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-20.722%20101.96-11.477%2042.211h-3.1163z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-37.443%20144.17h2.1285%203.1163l11.477-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20transform%3D%22matrix(-1%200%200%201%2049.026%20280.86)%22%20d%3D%22m44.99%20173.74-8.3555%200.30079-7.8965%2010.012h14.902l-2.2363-10.012%203.5859-0.30079z%22%20fill-opacity%3D%22.30994%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(-.93537%200%200%201.0866%20-38.388%20-40.259)%22%3E%3Cpath%20d%3D%22m-25.6%20280.91%2032.82%20127.2%206.6878%2052.664h-6.3522z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-25.6%20280.91%2032.82%20127.2%206.6878%2052.664h-3.9327z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-25.6%20280.91%2033.156%20179.87h2.4197%203.9327l-6.6879-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2067.917%20127.2%2027.531%2052.664h-6.8541z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2067.917%20127.2%2027.531%2052.664h-5.5986z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2088.594%20179.87h1.2557%205.5986l-27.531-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91%203.7562%20127.2-5.5884%2052.664h-6.5435z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91%203.7562%20127.2-5.5884%2052.664h-3.8881z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91-8.3757%20179.87h2.6556%203.8881l5.5883-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%203.5861%200.30108-2.2365%2010.011h-8.4189z%22%20fill-opacity%3D%22.16959%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",

		_:"%3Csvg%20width%3D%2236.689mm%22%20height%3D%2222.578mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20130%2080%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(-167.38%20-298.71)%22%3E%3Cpath%20d%3D%22m214.8%20298.71a43.051%2040%200%200%200-43.052%2040.001%2043.051%2040%200%200%200%200.0854%202.2131%2015.178%2014.103%200%200%200-4.4565%209.971%2015.178%2014.103%200%200%200%2015.036%2014.096%2043.051%2040%200%200%200%2032.386%2013.719%2043.051%2040%200%200%200%2040.14-25.663%2032.215%2029.932%200%200%200%2028.278%2015.595%2032.215%2029.932%200%200%200%2014.159-3.0659%2051.072%2047.453%200%200%201-9.0389-26.865%2051.072%2047.453%200%200%201%208.9834-26.869%2032.215%2029.932%200%200%200-14.104-3.0639%2032.215%2029.932%200%200%200-28.239%2015.589%2043.051%2040%200%200%200-40.179-25.657z%22%2F%3E%3Cpath%20d%3D%22m210.36%20311.27c-2.8488%200.16406-6.2178%201.7576-7.5221%205.1046-0.45895%201.1777-0.55328%202.1189-0.31012%203.4672%200.12164%200.67416%200.35762%201.4736%201.0245%202.2756%200.66687%200.80194%201.9047%201.4518%203.0454%201.5027%200.56681%200.0253%200.4095-6e-3%200.48115-0.0123%200.0716-8e-3%200.13412-0.0169%200.20346-0.0274%200.13858-0.0208%200.29726-0.0465%200.53531-0.11441%200.23804-0.0679%200.53951-0.0986%201.1723-0.58476%200.31641-0.2431%200.77334-0.65699%201.0638-1.4358%200.29044-0.77887%200.19921-1.85-0.10579-2.4949a3.157%203.157%200%200%200-0.69313-0.96908c0.3082-0.22975%200.71875-0.3647%201.4681-0.40785%201.2725-0.0733%203.0684%200.45212%203.942%201.0078%203.5194%202.2388%204.7818%205.6732%204.6647%209.7977-0.11718%204.1246-1.9192%208.6929-4.3772%2011.687-0.31381%200.38225-0.64127%200.75625-0.98121%201.1182a3.157%203.157%200%201%200%204.6022%204.3211c0.43464-0.46278%200.85442-0.94122%201.2585-1.4335%203.4258-4.1731%205.6468-9.7946%205.8091-15.512%200.16234-5.7173-2.037-11.773-7.5888-15.305-2.1646-1.377-4.8433-2.1489-7.6921-1.9848z%22%20color%3D%22%23000000%22%20color-rendering%3D%22auto%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20image-rendering%3D%22auto%22%20shape-rendering%3D%22auto%22%20solid-color%3D%22%23000000%22%20style%3D%22block-progression%3Atb%3Bisolation%3Aauto%3Bmix-blend-mode%3Anormal%3Btext-decoration-color%3A%23000000%3Btext-decoration-line%3Anone%3Btext-decoration-style%3Asolid%3Btext-indent%3A0%3Btext-transform%3Anone%3Bwhite-space%3Anormal%22%2F%3E%3Ccircle%20cx%3D%22214.47%22%20cy%3D%22354.08%22%20r%3D%223.4093%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		_hint :t=>t.replace(/\%23([0-9a-f]{3})*/gi,"%23441111")
	},
	tank:{
		grass:"data:image/svg+xml;utf8,%3Csvg%20width%3D%2256.444mm%22%20height%3D%2256.444mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(160.82%20-264.94)%22%3E%3Cg%20transform%3D%22matrix(1%200%200%20.73434%20-60.001%20123.51)%22%3E%3Cpath%20d%3D%22m-107.19%20208.98%2030.698%20177.82%206.2554%2073.619h-5.9415z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-107.19%20208.98%2030.698%20177.82%206.2554%2073.619h-3.6784z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-107.19%20208.98%2031.012%20251.44h2.2632%203.6784l-6.2554-73.619z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-160.78%20208.98%2063.526%20177.82%2025.751%2073.619h-6.4109z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-160.78%20208.98%2063.526%20177.82%2025.751%2073.619h-5.2366z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-160.78%20208.98%2082.865%20251.44h1.1745%205.2366l-25.751-73.619z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-67.281%20208.98%203.5133%20177.82-5.227%2073.619h-6.1204z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-67.281%20208.98%203.5133%20177.82-5.227%2073.619h-3.6367z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-67.281%20208.98-7.8342%20251.44h2.4839%203.6367l5.227-73.619z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-79.471%20453.71%207.815%200.32716%207.3869%2010.878h-21.814z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m-79.471%20453.71%203.3544%200.32716-2.092%2010.878h-7.8748z%22%20fill-opacity%3D%22.16959%22%2F%3E%3Cpath%20d%3D%22m-160.79%20264.97%2080.563%20190.01-5.857%209.9277h7.8745%2013.94l-4.5266-6.664%205.0273-55.05v-2e-3l-3.5142-138.22-6.5258%20162.79-2.6845-24.564v-2e-3l-30.699-138.22%2028.47%20179.42-18.54-41.195v-2e-3l-63.528-138.22z%22%20fill-opacity%3D%22.54971%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-56.371%20258.89%204.2774%20142.52-3.402%2059.006h-4.7621z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-56.371%20258.89%204.2774%20142.52-3.402%2059.006h-2.9483z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-56.371%20258.89-3.8868%20201.53h1.814%202.9483l3.4019-59.006z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-99.328%20258.89%2030.589%20142.52%2012.224%2059.006h-5.1384z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-99.328%20258.89%2030.589%20142.52%2012.224%2059.006h-4.1972z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-99.328%20258.89%2037.674%20201.53h0.94136%204.1972l-12.224-59.006z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-24.384%20258.89-19.382%20142.52-10.735%2059.006h-4.9055z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-24.384%20258.89-19.382%20142.52-10.735%2059.006h-2.9148z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-24.384%20258.89-35.022%20201.53h1.9908%202.9148l10.735-59.006z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-60.839%20453.71%207.815%200.32716%207.3869%2010.878h-21.814z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m-60.839%20453.71%207.8155%200.32683%207.3862%2010.879h-13.939l2.0918-10.879-3.3542-0.32683z%22%20fill-opacity%3D%22.30994%22%2F%3E%3Cpath%20d%3D%22m-24.383%20303.77-19.382%20110.78-9.2433%2039.496v2e-3l3.6403%205.3594%203.7317%205.4941v2e-3h-13.94v-2e-3h-7.8745l4.8848-8.2773-36.763-152.86%2030.59%20110.78%208.7992%2033.017%203.569-143.8%204.2781%20110.78-1.4601%2019.685%2029.17-130.47z%22%20fill-opacity%3D%22.081871%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047701%22%2F%3E%3Cg%20transform%3D%22matrix(-.93537%200%200%201.0866%20-81.486%20-40.259)%22%3E%3Cpath%20d%3D%22m10.265%20280.91%205.7056%20127.2-4.5379%2052.664h-6.3522z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m10.265%20280.91%205.7056%20127.2-4.5379%2052.664h-3.9327z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m10.265%20280.91-5.1846%20179.87h2.4197%203.9327l4.5379-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-47.035%20280.91%2040.803%20127.2%2016.305%2052.664h-6.8541z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-47.035%20280.91%2040.803%20127.2%2016.305%2052.664h-5.5986z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-47.035%20280.91%2050.254%20179.87h1.2557%205.5986l-16.305-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m52.932%20280.91-23.358%20127.2-16.814%2052.664h-6.5435z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m52.932%20280.91-23.358%20127.2-16.814%2052.664h-3.8881z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m52.932%20280.91-46.716%20179.87h2.6556%203.8881l16.814-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%203.5861%200.30108-2.2365%2010.011h-8.4189z%22%20fill-opacity%3D%22.16959%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22m-37.489%20264.97-46.08%20191.6%204.9217%208.3405h-7.8758-13.939l5.8918-8.6758-14.577-53.041-21.85-138.22%2036.396%20162.79-1.8214-24.569%205.3364-138.22%204.4503%20179.42%2010.982-41.195%2038.166-138.22z%22%20fill-opacity%3D%22.30409%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-75.083%20258.89%204.2774%20142.52-3.402%2059.006h-4.7621z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-75.083%20258.89%204.2774%20142.52-3.402%2059.006h-2.9483z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-75.083%20258.89-3.8868%20201.53h1.814%202.9483l3.4019-59.006z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-118.04%20258.89%2030.589%20142.52%2012.224%2059.006h-5.1384z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-118.04%20258.89%2030.589%20142.52%2012.224%2059.006h-4.1972z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-118.04%20258.89%2037.674%20201.53h0.94136%204.1972l-12.224-59.006z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-43.096%20258.89-19.382%20142.52-10.735%2059.006h-4.9055z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-43.096%20258.89-19.382%20142.52-10.735%2059.006h-2.9148z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-43.096%20258.89-35.022%20201.53h1.9908%202.9148l10.735-59.006z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-79.552%20453.71%207.815%200.32716%207.3869%2010.878h-21.814z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m-79.552%20453.71%207.8155%200.32683%207.3862%2010.879h-13.939l2.0918-10.879-3.3542-0.32683z%22%20fill-opacity%3D%22.30994%22%2F%3E%3Cpath%20d%3D%22m-14.445%20208.98-30.698%20177.82-6.2554%2073.619h5.9415z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-14.445%20208.98-30.698%20177.82-6.2554%2073.619h3.6784z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-14.445%20208.98-31.012%20251.44h-2.2632-3.6784l6.2554-73.619z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m39.15%20208.98-63.526%20177.82-25.751%2073.619h6.4109z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m39.15%20208.98-63.526%20177.82-25.751%2073.619h5.2366z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m39.151%20208.98-82.865%20251.44h-1.1745-5.2366l25.751-73.619z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-54.353%20208.98-3.5133%20177.82%205.227%2073.619h6.1204z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-54.353%20208.98-3.5133%20177.82%205.227%2073.619h3.6367z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-54.353%20208.98%207.8342%20251.44h-2.4839-3.6367l-5.227-73.619z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-42.163%20453.71-7.815%200.32716-7.3869%2010.878h21.814z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m-42.163%20453.71-3.3544%200.32716%202.092%2010.878h7.8748z%22%20fill-opacity%3D%22.16959%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(40)%22%3E%3Cg%20transform%3D%22matrix(.93537%200%200%201.0866%20-83.246%20-40.259)%22%3E%3Cpath%20d%3D%22m-25.6%20280.91%2032.82%20127.2%206.6878%2052.664h-6.3522z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-25.6%20280.91%2032.82%20127.2%206.6878%2052.664h-3.9327z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-25.6%20280.91%2033.156%20179.87h2.4197%203.9327l-6.6879-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2067.917%20127.2%2027.531%2052.664h-6.8541z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2067.917%20127.2%2027.531%2052.664h-5.5986z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2088.594%20179.87h1.2557%205.5986l-27.531-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91%203.7562%20127.2-5.5884%2052.664h-6.5435z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91%203.7562%20127.2-5.5884%2052.664h-3.8881z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91-8.3757%20179.87h2.6556%203.8881l5.5883-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%203.5861%200.30108-2.2365%2010.011h-8.4189z%22%20fill-opacity%3D%22.16959%22%2F%3E%3Cpath%20transform%3D%22matrix(1.0003%200%200%20.9203%2030.856%20280.88)%22%20d%3D%22m-113.72%200.03125%2086.104%20190.01-6.2598%209.9277h8.416%2014.898l-4.8379-6.6641%205.373-55.051v-2e-3l-3.7559-138.22-6.9746%20162.79-2.8691-24.564v-2e-3l-32.811-138.22%2030.428%20179.42-19.814-41.195v-2e-3l-67.896-138.22z%22%20fill-opacity%3D%22.54971%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.061527%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.93537%200%200%201.0866%20-64.614%20-40.259)%22%3E%3Cpath%20d%3D%22m8.8127%20316.62%204.5731%20101.96-3.6371%2042.211h-5.0914z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m8.8127%20316.62%204.5731%20101.96-3.6371%2042.211h-3.1521z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m8.8126%20316.62-4.1555%20144.17h1.9394%203.1521l3.6371-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2032.704%20101.96%2013.069%2042.211h-5.4936z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2032.704%20101.96%2013.069%2042.211h-4.4873z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2040.279%20144.17h1.0064%204.4873l-13.069-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-20.722%20101.96-11.477%2042.211h-5.2447z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-20.722%20101.96-11.477%2042.211h-3.1163z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-37.443%20144.17h2.1285%203.1163l11.477-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20transform%3D%22matrix(-1%200%200%201%2049.026%20280.86)%22%20d%3D%22m44.99%20173.74-8.3555%200.30079-7.8965%2010.012h14.902l-2.2363-10.012%203.5859-0.30079z%22%20fill-opacity%3D%22.30994%22%2F%3E%3Cpath%20transform%3D%22matrix(-1.0003%200%200%20.9203%2029.029%20280.88)%22%20d%3D%22m-13.977%2038.832%2020.715%20110.79%209.8789%2039.496v2e-3l-3.8906%205.3594-3.9883%205.4941v2e-3h14.898v-2e-3h8.416l-5.2207-8.2773%2039.291-152.86-32.693%20110.79-9.4043%2033.018-3.8145-143.8-4.5723%20110.79%201.5605%2019.686-31.176-130.47z%22%20fill-opacity%3D%22.081871%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.049314%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(-.93566%200%200%20.99999%20-81.498%20.0034275)%22%3E%3Cg%20transform%3D%22matrix(.9997%200%200%201.0866%20-.012975%20-40.262)%22%3E%3Cpath%20d%3D%22m10.265%20280.91%205.7056%20127.2-4.5379%2052.664h-6.3522z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m10.265%20280.91%205.7056%20127.2-4.5379%2052.664h-3.9327z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m10.265%20280.91-5.1846%20179.87h2.4197%203.9327l4.5379-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-47.035%20280.91%2040.803%20127.2%2016.305%2052.664h-6.8541z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-47.035%20280.91%2040.803%20127.2%2016.305%2052.664h-5.5986z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-47.035%20280.91%2050.254%20179.87h1.2557%205.5986l-16.305-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m52.932%20280.91-23.358%20127.2-16.814%2052.664h-6.5435z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m52.932%20280.91-23.358%20127.2-16.814%2052.664h-3.8881z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m52.932%20280.91-46.716%20179.87h2.6556%203.8881l16.814-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%203.5861%200.30108-2.2365%2010.011h-8.4189z%22%20fill-opacity%3D%22.16959%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22m-47.035%20264.97%2049.249%20191.6-5.2601%208.3405h8.4174%2014.898l-6.2969-8.6758%2015.579-53.042%2023.352-138.22-38.898%20162.79%201.9467-24.569-5.7034-138.22-4.7564%20179.42-11.737-41.195-40.79-138.22z%22%20fill-opacity%3D%22.30409%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.061527%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.93537%200%200%201.0866%20-83.327%20-40.259)%22%3E%3Cpath%20d%3D%22m8.8127%20316.62%204.5731%20101.96-3.6371%2042.211h-5.0914z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m8.8127%20316.62%204.5731%20101.96-3.6371%2042.211h-3.1521z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m8.8126%20316.62-4.1555%20144.17h1.9394%203.1521l3.6371-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2032.704%20101.96%2013.069%2042.211h-5.4936z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2032.704%20101.96%2013.069%2042.211h-4.4873z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2040.279%20144.17h1.0064%204.4873l-13.069-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-20.722%20101.96-11.477%2042.211h-5.2447z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-20.722%20101.96-11.477%2042.211h-3.1163z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-37.443%20144.17h2.1285%203.1163l11.477-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20transform%3D%22matrix(-1%200%200%201%2049.026%20280.86)%22%20d%3D%22m44.99%20173.74-8.3555%200.30079-7.8965%2010.012h14.902l-2.2363-10.012%203.5859-0.30079z%22%20fill-opacity%3D%22.30994%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(-.93537%200%200%201.0866%20-38.388%20-40.259)%22%3E%3Cpath%20d%3D%22m-25.6%20280.91%2032.82%20127.2%206.6878%2052.664h-6.3522z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-25.6%20280.91%2032.82%20127.2%206.6878%2052.664h-3.9327z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-25.6%20280.91%2033.156%20179.87h2.4197%203.9327l-6.6879-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2067.917%20127.2%2027.531%2052.664h-6.8541z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2067.917%20127.2%2027.531%2052.664h-5.5986z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2088.594%20179.87h1.2557%205.5986l-27.531-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91%203.7562%20127.2-5.5884%2052.664h-6.5435z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91%203.7562%20127.2-5.5884%2052.664h-3.8881z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91-8.3757%20179.87h2.6556%203.8881l5.5883-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%203.5861%200.30108-2.2365%2010.011h-8.4189z%22%20fill-opacity%3D%22.16959%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(-160)%22%3E%3Cg%20transform%3D%22matrix(.93537%200%200%201.0866%20-83.246%20-40.259)%22%3E%3Cpath%20d%3D%22m-25.6%20280.91%2032.82%20127.2%206.6878%2052.664h-6.3522z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-25.6%20280.91%2032.82%20127.2%206.6878%2052.664h-3.9327z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-25.6%20280.91%2033.156%20179.87h2.4197%203.9327l-6.6879-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2067.917%20127.2%2027.531%2052.664h-6.8541z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2067.917%20127.2%2027.531%2052.664h-5.5986z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2088.594%20179.87h1.2557%205.5986l-27.531-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91%203.7562%20127.2-5.5884%2052.664h-6.5435z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91%203.7562%20127.2-5.5884%2052.664h-3.8881z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91-8.3757%20179.87h2.6556%203.8881l5.5883-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%203.5861%200.30108-2.2365%2010.011h-8.4189z%22%20fill-opacity%3D%22.16959%22%2F%3E%3Cpath%20transform%3D%22matrix(1.0003%200%200%20.9203%2030.856%20280.88)%22%20d%3D%22m-113.72%200.03125%2086.104%20190.01-6.2598%209.9277h8.416%2014.898l-4.8379-6.6641%205.373-55.051v-2e-3l-3.7559-138.22-6.9746%20162.79-2.8691-24.564v-2e-3l-32.811-138.22%2030.428%20179.42-19.814-41.195v-2e-3l-67.896-138.22z%22%20fill-opacity%3D%22.54971%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.061527%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.93537%200%200%201.0866%20-64.614%20-40.259)%22%3E%3Cpath%20d%3D%22m8.8127%20316.62%204.5731%20101.96-3.6371%2042.211h-5.0914z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m8.8127%20316.62%204.5731%20101.96-3.6371%2042.211h-3.1521z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m8.8126%20316.62-4.1555%20144.17h1.9394%203.1521l3.6371-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2032.704%20101.96%2013.069%2042.211h-5.4936z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2032.704%20101.96%2013.069%2042.211h-4.4873z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2040.279%20144.17h1.0064%204.4873l-13.069-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-20.722%20101.96-11.477%2042.211h-5.2447z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-20.722%20101.96-11.477%2042.211h-3.1163z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-37.443%20144.17h2.1285%203.1163l11.477-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20transform%3D%22matrix(-1%200%200%201%2049.026%20280.86)%22%20d%3D%22m44.99%20173.74-8.3555%200.30079-7.8965%2010.012h14.902l-2.2363-10.012%203.5859-0.30079z%22%20fill-opacity%3D%22.30994%22%2F%3E%3Cpath%20transform%3D%22matrix(-1.0003%200%200%20.9203%2029.029%20280.88)%22%20d%3D%22m-13.977%2038.832%2020.715%20110.79%209.8789%2039.496v2e-3l-3.8906%205.3594-3.9883%205.4941v2e-3h14.898v-2e-3h8.416l-5.2207-8.2773%2039.291-152.86-32.693%20110.79-9.4043%2033.018-3.8145-143.8-4.5723%20110.79%201.5605%2019.686-31.176-130.47z%22%20fill-opacity%3D%22.081871%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.049314%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(-.93566%200%200%20.99999%20-81.498%20.0034275)%22%3E%3Cg%20transform%3D%22matrix(.9997%200%200%201.0866%20-.012975%20-40.262)%22%3E%3Cpath%20d%3D%22m10.265%20280.91%205.7056%20127.2-4.5379%2052.664h-6.3522z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m10.265%20280.91%205.7056%20127.2-4.5379%2052.664h-3.9327z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m10.265%20280.91-5.1846%20179.87h2.4197%203.9327l4.5379-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-47.035%20280.91%2040.803%20127.2%2016.305%2052.664h-6.8541z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-47.035%20280.91%2040.803%20127.2%2016.305%2052.664h-5.5986z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-47.035%20280.91%2050.254%20179.87h1.2557%205.5986l-16.305-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m52.932%20280.91-23.358%20127.2-16.814%2052.664h-6.5435z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m52.932%20280.91-23.358%20127.2-16.814%2052.664h-3.8881z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m52.932%20280.91-46.716%20179.87h2.6556%203.8881l16.814-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%203.5861%200.30108-2.2365%2010.011h-8.4189z%22%20fill-opacity%3D%22.16959%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22m-47.035%20264.97%2049.249%20191.6-5.2601%208.3405h8.4174%2014.898l-6.2969-8.6758%2015.579-53.042%2023.352-138.22-38.898%20162.79%201.9467-24.569-5.7034-138.22-4.7564%20179.42-11.737-41.195-40.79-138.22z%22%20fill-opacity%3D%22.30409%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.061527%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.93537%200%200%201.0866%20-83.327%20-40.259)%22%3E%3Cpath%20d%3D%22m8.8127%20316.62%204.5731%20101.96-3.6371%2042.211h-5.0914z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m8.8127%20316.62%204.5731%20101.96-3.6371%2042.211h-3.1521z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m8.8126%20316.62-4.1555%20144.17h1.9394%203.1521l3.6371-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2032.704%20101.96%2013.069%2042.211h-5.4936z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2032.704%20101.96%2013.069%2042.211h-4.4873z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m-37.114%20316.62%2040.279%20144.17h1.0064%204.4873l-13.069-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-20.722%20101.96-11.477%2042.211h-5.2447z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-20.722%20101.96-11.477%2042.211h-3.1163z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m43.011%20316.62-37.443%20144.17h2.1285%203.1163l11.477-42.211z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047315%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20transform%3D%22matrix(-1%200%200%201%2049.026%20280.86)%22%20d%3D%22m44.99%20173.74-8.3555%200.30079-7.8965%2010.012h14.902l-2.2363-10.012%203.5859-0.30079z%22%20fill-opacity%3D%22.30994%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(-.93537%200%200%201.0866%20-38.388%20-40.259)%22%3E%3Cpath%20d%3D%22m-25.6%20280.91%2032.82%20127.2%206.6878%2052.664h-6.3522z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-25.6%20280.91%2032.82%20127.2%206.6878%2052.664h-3.9327z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-25.6%20280.91%2033.156%20179.87h2.4197%203.9327l-6.6879-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2067.917%20127.2%2027.531%2052.664h-6.8541z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2067.917%20127.2%2027.531%2052.664h-5.5986z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-82.9%20280.91%2088.594%20179.87h1.2557%205.5986l-27.531-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91%203.7562%20127.2-5.5884%2052.664h-6.5435z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91%203.7562%20127.2-5.5884%2052.664h-3.8881z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m17.067%20280.91-8.3757%20179.87h2.6556%203.8881l5.5883-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%203.5861%200.30108-2.2365%2010.011h-8.4189z%22%20fill-opacity%3D%22.16959%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(1%200%200%20.73434%20140%20123.51)%22%3E%3Cpath%20d%3D%22m-107.19%20208.98%2030.698%20177.82%206.2554%2073.619h-5.9415z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-107.19%20208.98%2030.698%20177.82%206.2554%2073.619h-3.6784z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-107.19%20208.98%2031.012%20251.44h2.2632%203.6784l-6.2554-73.619z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-160.78%20208.98%2063.526%20177.82%2025.751%2073.619h-6.4109z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-160.78%20208.98%2063.526%20177.82%2025.751%2073.619h-5.2366z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-160.78%20208.98%2082.865%20251.44h1.1745%205.2366l-25.751-73.619z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-67.281%20208.98%203.5133%20177.82-5.227%2073.619h-6.1204z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-67.281%20208.98%203.5133%20177.82-5.227%2073.619h-3.6367z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-67.281%20208.98-7.8342%20251.44h2.4839%203.6367l5.227-73.619z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-79.471%20453.71%207.815%200.32716%207.3869%2010.878h-21.814z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m-79.471%20453.71%203.3544%200.32716-2.092%2010.878h-7.8748z%22%20fill-opacity%3D%22.16959%22%2F%3E%3Cpath%20d%3D%22m-160.79%20264.97%2080.563%20190.01-5.857%209.9277h7.8745%2013.94l-4.5266-6.664%205.0273-55.05v-2e-3l-3.5142-138.22-6.5258%20162.79-2.6845-24.564v-2e-3l-30.699-138.22%2028.47%20179.42-18.54-41.195v-2e-3l-63.528-138.22z%22%20fill-opacity%3D%22.54971%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-56.371%20258.89%204.2774%20142.52-3.402%2059.006h-4.7621z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-56.371%20258.89%204.2774%20142.52-3.402%2059.006h-2.9483z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-56.371%20258.89-3.8868%20201.53h1.814%202.9483l3.4019-59.006z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-99.328%20258.89%2030.589%20142.52%2012.224%2059.006h-5.1384z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-99.328%20258.89%2030.589%20142.52%2012.224%2059.006h-4.1972z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-99.328%20258.89%2037.674%20201.53h0.94136%204.1972l-12.224-59.006z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-24.384%20258.89-19.382%20142.52-10.735%2059.006h-4.9055z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-24.384%20258.89-19.382%20142.52-10.735%2059.006h-2.9148z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-24.384%20258.89-35.022%20201.53h1.9908%202.9148l10.735-59.006z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-60.839%20453.71%207.815%200.32716%207.3869%2010.878h-21.814z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m-60.839%20453.71%207.8155%200.32683%207.3862%2010.879h-13.939l2.0918-10.879-3.3542-0.32683z%22%20fill-opacity%3D%22.30994%22%2F%3E%3Cpath%20d%3D%22m-24.383%20303.77-19.382%20110.78-9.2433%2039.496v2e-3l3.6403%205.3594%203.7317%205.4941v2e-3h-13.94v-2e-3h-7.8745l4.8848-8.2773-36.763-152.86%2030.59%20110.78%208.7992%2033.017%203.569-143.8%204.2781%20110.78-1.4601%2019.685%2029.17-130.47z%22%20fill-opacity%3D%22.081871%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.047701%22%2F%3E%3Cg%20transform%3D%22matrix(-.93537%200%200%201.0866%20-81.486%20-40.259)%22%3E%3Cpath%20d%3D%22m10.265%20280.91%205.7056%20127.2-4.5379%2052.664h-6.3522z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m10.265%20280.91%205.7056%20127.2-4.5379%2052.664h-3.9327z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m10.265%20280.91-5.1846%20179.87h2.4197%203.9327l4.5379-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-47.035%20280.91%2040.803%20127.2%2016.305%2052.664h-6.8541z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-47.035%20280.91%2040.803%20127.2%2016.305%2052.664h-5.5986z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m-47.035%20280.91%2050.254%20179.87h1.2557%205.5986l-16.305-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m52.932%20280.91-23.358%20127.2-16.814%2052.664h-6.5435z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m52.932%20280.91-23.358%20127.2-16.814%2052.664h-3.8881z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m52.932%20280.91-46.716%20179.87h2.6556%203.8881l16.814-52.665z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059033%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%208.355%200.30108%207.8973%2010.011h-23.322z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m4.0355%20454.6%203.5861%200.30108-2.2365%2010.011h-8.4189z%22%20fill-opacity%3D%22.16959%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22m-37.489%20264.97-46.08%20191.6%204.9217%208.3405h-7.8758-13.939l5.8918-8.6758-14.577-53.041-21.85-138.22%2036.396%20162.79-1.8214-24.569%205.3364-138.22%204.4503%20179.42%2010.982-41.195%2038.166-138.22z%22%20fill-opacity%3D%22.30409%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-75.083%20258.89%204.2774%20142.52-3.402%2059.006h-4.7621z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-75.083%20258.89%204.2774%20142.52-3.402%2059.006h-2.9483z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-75.083%20258.89-3.8868%20201.53h1.814%202.9483l3.4019-59.006z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-118.04%20258.89%2030.589%20142.52%2012.224%2059.006h-5.1384z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-118.04%20258.89%2030.589%20142.52%2012.224%2059.006h-4.1972z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-118.04%20258.89%2037.674%20201.53h0.94136%204.1972l-12.224-59.006z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-43.096%20258.89-19.382%20142.52-10.735%2059.006h-4.9055z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-43.096%20258.89-19.382%20142.52-10.735%2059.006h-2.9148z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-43.096%20258.89-35.022%20201.53h1.9908%202.9148l10.735-59.006z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.054103%22%2F%3E%3Cpath%20d%3D%22m-79.552%20453.71%207.815%200.32716%207.3869%2010.878h-21.814z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m-79.552%20453.71%207.8155%200.32683%207.3862%2010.879h-13.939l2.0918-10.879-3.3542-0.32683z%22%20fill-opacity%3D%22.30994%22%2F%3E%3Cpath%20d%3D%22m-14.445%20208.98-30.698%20177.82-6.2554%2073.619h5.9415z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-14.445%20208.98-30.698%20177.82-6.2554%2073.619h3.6784z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-14.445%20208.98-31.012%20251.44h-2.2632-3.6784l6.2554-73.619z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m39.15%20208.98-63.526%20177.82-25.751%2073.619h6.4109z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m39.15%20208.98-63.526%20177.82-25.751%2073.619h5.2366z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m39.151%20208.98-82.865%20251.44h-1.1745-5.2366l25.751-73.619z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-54.353%20208.98-3.5133%20177.82%205.227%2073.619h6.1204z%22%20fill%3D%22%23008000%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-54.353%20208.98-3.5133%20177.82%205.227%2073.619h3.6367z%22%20fill%3D%22%23008080%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-54.353%20208.98%207.8342%20251.44h-2.4839-3.6367l-5.227-73.619z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.067501%22%2F%3E%3Cpath%20d%3D%22m-42.163%20453.71-7.815%200.32716-7.3869%2010.878h21.814z%22%20fill%3D%22%23bd7107%22%2F%3E%3Cpath%20d%3D%22m-42.163%20453.71-3.3544%200.32716%202.092%2010.878h7.8748z%22%20fill-opacity%3D%22.16959%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		rocks:"data:image/svg+xml;utf8,%3Csvg%20width%3D%2256.444mm%22%20height%3D%2270.556mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%20200%20250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(159.42%20-216.48)%22%3E%3Cg%20transform%3D%22matrix(-.82878%20.11179%20.10766%20.8606%20-334.41%20-21.285)%22%20stroke%3D%22%23e3951d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m-254.19%20315.47%2030.699%20138.22%206.2556%2057.225h-5.9417z%22%20fill%3D%22%23008000%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-254.19%20315.47%2030.699%20138.22%206.2556%2057.225h-3.6786z%22%20fill%3D%22%23008080%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-254.19%20315.47%2031.013%20195.45h2.2633%203.6786l-6.2557-57.225z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-307.79%20315.47%2063.528%20138.22%2025.752%2057.225h-6.4112z%22%20fill%3D%22%23008000%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-307.79%20315.47%2063.528%20138.22%2025.752%2057.225h-5.2368z%22%20fill%3D%22%23008080%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-307.79%20315.47%2082.869%20195.45h1.1745%205.2368l-25.752-57.225z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-214.28%20315.47%203.5134%20138.22-5.2272%2057.225h-6.1206z%22%20fill%3D%22%23008000%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-214.28%20315.47%203.5134%20138.22-5.2272%2057.225h-3.6368z%22%20fill%3D%22%23008080%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-214.28%20315.47-7.8345%20195.45h2.484%203.6368l5.2272-57.225z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-307.79%20315.47%2080.563%20190.01-5.857%209.9277h7.8745%2013.94l-4.5266-6.664%205.0273-55.05v-2e-3l-3.5142-138.22-6.5258%20162.79-2.6845-24.564v-2e-3l-30.699-138.22%2028.47%20179.42-18.54-41.195v-2e-3l-63.528-138.22z%22%20fill-opacity%3D%22.54971%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-238.09%20315.47-5.3368%20138.22%204.2446%2057.225h5.9417z%22%20fill%3D%22%23008000%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-238.09%20315.47-5.3368%20138.22%204.2446%2057.225h3.6786z%22%20fill%3D%22%23008080%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-238.09%20315.47%204.8496%20195.45h-2.2633-3.6786l-4.2446-57.225z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-184.49%20315.47-38.166%20138.22-15.252%2057.225h6.4112z%22%20fill%3D%22%23008000%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-184.49%20315.47-38.166%20138.22-15.252%2057.225h5.2368z%22%20fill%3D%22%23008080%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-184.49%20315.47-47.006%20195.45h-1.1745-5.2368l15.252-57.225z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-278%20315.47%2021.849%20138.22%2015.727%2057.225h6.1206z%22%20fill%3D%22%23008000%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-278%20315.47%2021.849%20138.22%2015.727%2057.225h3.6368z%22%20fill%3D%22%23008080%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-278%20315.47%2043.697%20195.45h-2.484-3.6368l-15.727-57.225z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-184.49%20315.47-46.08%20191.6%204.9217%208.3404h-7.8758-13.939l5.8918-8.6758-14.577-53.041-21.85-138.22%2036.396%20162.79-1.8214-24.569%205.3364-138.22%204.4503%20179.42%2010.982-41.195%2038.166-138.22z%22%20fill-opacity%3D%22.30409%22%20stroke-width%3D%22.059514%22%2F%3E%3Cpath%20d%3D%22m-222.08%20354.27%204.2775%20110.78-3.4021%2045.866h-4.7623z%22%20fill%3D%22%23008000%22%20stroke-width%3D%22.047701%22%2F%3E%3Cpath%20d%3D%22m-222.08%20354.27%204.2775%20110.78-3.4021%2045.866h-2.9484z%22%20fill%3D%22%23008080%22%20stroke-width%3D%22.047701%22%2F%3E%3Cpath%20d%3D%22m-222.08%20354.27-3.887%20156.65h1.814%202.9484l3.4021-45.866z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke-width%3D%22.047701%22%2F%3E%3Cpath%20d%3D%22m-265.04%20354.27%2030.59%20110.78%2012.224%2045.866h-5.1386z%22%20fill%3D%22%23008000%22%20stroke-width%3D%22.047701%22%2F%3E%3Cpath%20d%3D%22m-265.04%20354.27%2030.59%20110.78%2012.224%2045.866h-4.1973z%22%20fill%3D%22%23008080%22%20stroke-width%3D%22.047701%22%2F%3E%3Cpath%20d%3D%22m-265.04%20354.27%2037.676%20156.65h0.9414%204.1973l-12.224-45.866z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke-width%3D%22.047701%22%2F%3E%3Cpath%20d%3D%22m-190.1%20354.27-19.383%20110.78-10.735%2045.866h-4.9057z%22%20fill%3D%22%23008000%22%20stroke-width%3D%22.047701%22%2F%3E%3Cpath%20d%3D%22m-190.1%20354.27-19.383%20110.78-10.735%2045.866h-2.9149z%22%20fill%3D%22%23008080%22%20stroke-width%3D%22.047701%22%2F%3E%3Cpath%20d%3D%22m-190.1%20354.27-35.023%20156.65h1.9909%202.9149l10.735-45.866z%22%20fill%3D%22%23d0b80e%22%20fill-opacity%3D%22.33918%22%20stroke-width%3D%22.047701%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(-1.5393%20-.66998%20-.47646%202.6328%2095.261%20-760.95)%22%3E%3Cpath%20d%3D%22m-44.052%20451.07-8.1389-20.204%207.9016-19.816%2020.022-3.8205%2016.612%2023.529-7.7713%2020.388z%22%20fill%3D%22%23333%22%2F%3E%3Cpath%20d%3D%22m-40.753%20446.79-8.1092-15.756%205.8336-19.322%2018.71-3.9273%2014.68%2020.839-8.1908%2018.269z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.30994%22%2F%3E%3Cpath%20d%3D%22m-35.878%20436.21-4.0547-18.04%2013.752-7.7755%2011.535%2014.959-5.1623%2013.687z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.30994%22%2F%3E%3Cpath%20d%3D%22m-32.543%20431.86-3.7647-11.982%2010.416-6.4505%207.0395%2010.416-3.4221%208.3871z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.30994%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(-1.2485%200%200%201.4382%20-24.263%20-183.08)%22%3E%3Cpath%20transform%3D%22matrix(.69063%20-.72321%20.72321%20.69063%200%200)%22%20d%3D%22m-351.99%20283.39%2039.12-35.18%2034.43%2014.282%2010.539%2053.503-40.376%2012.379z%22%20fill%3D%22%23333%22%2F%3E%3Cpath%20d%3D%22m-33.977%20442.48%203.0774-42.231%2026.227-15.824%2045.211%2027.461-19.096%2034.316z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.30994%22%2F%3E%3Cpath%20d%3D%22m-14.354%20434.53-9.1438-32.953%2018.653-15.548%2041.598%2025.722-13.719%2020.49z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.30994%22%2F%3E%3Cpath%20d%3D%22m-2.9792%20424.25-14.118-22.222%2011.65-11.735%2038.729%2021.164-9.6987%2012.472z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.30994%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(-1.2485%200%200%201.4382%20-104.16%20-176.47)%22%3E%3Cpath%20transform%3D%22matrix(.69063%20-.72321%20.72321%20.69063%200%200)%22%20d%3D%22m-360.63%20274.7%2040.484-33.026%2057.516%2033.026-9.001%2045.891-36.645%207.7794z%22%20fill%3D%22%23333%22%2F%3E%3Cpath%20d%3D%22m-33.977%20442.48-6.1726-43.981%2057.352-17.949%2023.836%2033.836-19.596%2031.816z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.30994%22%2F%3E%3Cpath%20d%3D%22m-14.354%20434.53-10.769-36.203%2040.028-15.298%2022.598%2027.472-14.469%2021.74z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.30994%22%2F%3E%3Cpath%20d%3D%22m-2.9792%20424.25-14.118-22.222%2031.275-17.235%2018.729%2024.289-9.3237%2014.847z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.30994%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(-2.1524%200%200%201.8995%20-71.75%20-384.81)%22%3E%3Cpath%20d%3D%22m-44.052%20451.07-8.1389-20.204%207.9016-19.816%2020.022-3.8205%2016.612%2023.529-7.7713%2020.388z%22%20fill%3D%22%23333%22%2F%3E%3Cpath%20d%3D%22m-40.753%20446.79-8.1092-15.756%205.8336-19.322%2018.71-3.9273%2014.68%2020.839-8.1908%2018.269z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.30994%22%2F%3E%3Cpath%20d%3D%22m-35.878%20436.21-4.0547-18.04%2013.752-7.7755%2011.535%2014.959-5.1623%2013.687z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.30994%22%2F%3E%3Cpath%20d%3D%22m-32.543%20431.86-3.7647-11.982%2010.416-6.4505%207.0395%2010.416-3.4221%208.3871z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.30994%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(-1.2485%200%200%201.4382%20-104.16%20-176.47)%22%3E%3Cpath%20d%3D%22m-54.638%20450.88-0.67238-34.909%2031.043-8.7421%2016.612%2023.529-12.122%2019.631z%22%20fill%3D%22%23333%22%2F%3E%3Cpath%20d%3D%22m-51.485%20437.32-0.53542-20.882%2027.701-8.6595%2014.68%2020.839-13.266%2015.24z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.30994%22%2F%3E%3Cpath%20d%3D%22m-36.749%20434.7-8.6952-13.686%2019.262-10.615%2011.535%2014.959-5.7424%209.1442z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.30994%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		house:"data:image/svg+xml;utf8,%3Csvg%20width%3D%2222.578mm%22%20height%3D%2219.756mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%2080%2070%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(141.49%20-386.63)%22%3E%3Cpath%20d%3D%22m-132.75%20413.49v43.133h29.023%204.4753%2029.022v-43.133h-29.022-4.4753z%22%20fill%3D%22%2340365d%22%2F%3E%3Cpath%20d%3D%22m-128.09%20414.51v4.3162h24.699%203.8085%2024.698v-4.3162h-24.698-3.8085z%22%20fill-opacity%3D%22.32749%22%2F%3E%3Crect%20x%3D%22-89.366%22%20y%3D%22425.01%22%20width%3D%2210.243%22%20height%3D%2211.274%22%20fill%3D%22%23d1fffd%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.0517%22%2F%3E%3Crect%20transform%3D%22scale(-1%2C1)%22%20x%3D%2291.833%22%20y%3D%22425.01%22%20width%3D%2210.243%22%20height%3D%2211.274%22%20fill%3D%22%23d1fffd%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.0517%22%2F%3E%3Crect%20x%3D%22-123.44%22%20y%3D%22426.14%22%20width%3D%2212.777%22%20height%3D%2224.057%22%20fill%3D%22%23be6f0c%22%20stroke%3D%22%23060000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.80577%22%2F%3E%3Cpath%20d%3D%22m-135.48%20451.58v5.0425h30.956%206.0628%2030.953v-5.0425h-30.953-6.0628z%22%20fill%3D%22%23705341%22%2F%3E%3Cpath%20d%3D%22m-134.13%20451.58v-4.8105h29.726%205.8219%2029.724v4.8105h-29.724-5.8219z%22%20fill%3D%22%23705341%22%2F%3E%3Cpath%20d%3D%22m-120.76%20386.63-20.734%2030.613h38.097%203.8085%2038.095l-20.733-30.613h-17.362-3.8085z%22%20fill%3D%22%23e8933a%22%2F%3E%3Cpath%20d%3D%22m-135.42%20414.4c6.8732-5.7633%205.905%204.5302%2011.458-0.37404%205.5535-4.9043%205.1569%205.2665%2010.69-0.0523%205.533-5.3187%205.2505%205.7954%2011.272%200.0581%206.0218-5.7372%205.7435%205.9244%2011.851-0.11978%206.1073-6.0442%206.5643%206.4004%2012.21%200.0945%205.6459-6.3059%204.8275%206.5999%2011.95-0.31528%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.96158%22%2F%3E%3Cpath%20d%3D%22m-130.44%20407.42c5.8887-4.9377%205.0591%203.8813%209.8171-0.32047%204.758-4.2018%204.4182%204.5121%209.1587-0.0448%204.7405-4.5569%204.4984%204.9652%209.6576%200.0498%205.1592-4.9154%204.9208%205.0758%2010.153-0.10255%205.2324-5.1784%205.624%205.4836%2010.461%200.081%204.8372-5.4026%204.136%205.6545%2010.238-0.27011%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.96158%22%2F%3E%3Cpath%20d%3D%22m-125.47%20401.22c4.9042-4.1122%204.2133%203.2324%208.1758-0.26689%203.9625-3.4993%203.6796%203.7578%207.6275-0.0372%203.9479-3.795%203.7463%204.1351%208.043%200.0414%204.2966-4.0936%204.0981%204.2272%208.4557-0.0855%204.3576-4.3126%204.6837%204.5668%208.7122%200.0674%204.0285-4.4994%203.4445%204.7091%208.5262-0.22497%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.96158%22%2F%3E%3Cpath%20d%3D%22m-121.49%20394.32c4.1165-3.4518%203.5366%202.7133%206.8628-0.22402%203.3261-2.9373%203.0886%203.1542%206.4025-0.0313%203.3139-3.1855%203.1446%203.471%206.7512%200.0348%203.6066-3.4361%203.4399%203.5483%207.0977-0.0718%203.6578-3.62%203.9315%203.8334%207.313%200.0566%203.3815-3.7767%202.8913%203.9528%207.1569-0.18882%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.96158%22%2F%3E%3Cpath%20d%3D%22m-118.5%20389.19c3.5258-2.9564%203.0291%202.3239%205.878-0.19188%202.8488-2.5158%202.6454%202.7016%205.4837-0.0268%202.8383-2.7284%202.6934%202.9729%205.7825%200.0299%203.0891-2.9431%202.9463%203.0391%206.0792-0.0614%203.1329-3.1005%203.3674%203.2833%206.2636%200.0484%202.8962-3.2348%202.4764%203.3856%206.1299-0.16173%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.96158%22%2F%3E%3Cpath%20d%3D%22m-96.921%20425.15v10.948%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-width%3D%22.79558px%22%2F%3E%3Cpath%20d%3D%22m-92.107%20430.62h-9.6275%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-width%3D%22.79558px%22%2F%3E%3Cpath%20d%3D%22m-84.222%20425.25v10.948%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-width%3D%22.79558px%22%2F%3E%3Cpath%20d%3D%22m-79.408%20430.72h-9.6275%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-width%3D%22.79558px%22%2F%3E%3Crect%20x%3D%22-112.89%22%20y%3D%22436.66%22%20width%3D%22.34455%22%20height%3D%22.40128%22%20stroke%3D%22%23060000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.2346%22%2F%3E%3Cpath%20d%3D%22m-120.72%20386.63%2020.732%2030.612h-8.7397v29.535h1.3751v4.8099h1.3499v5.043h35.769%202.725v-5.043h-1.3499v-4.8099h-1.3751v-29.535h8.7397l-20.732-30.612h-38.032z%22%20fill-opacity%3D%22.1345%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		sand:"data:image/svg+xml;utf8,%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%2080%2010%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(141.49%20-446.63)%22%3E%3Crect%20x%3D%22-141.67%22%20y%3D%22455.97%22%20width%3D%2280.372%22%20height%3D%22.65468%22%20fill%3D%22%23e8933a%22%2F%3E%3Cg%20transform%3D%22matrix(.98504%200%200%20.98504%2012.913%206.8354)%22%3E%3Cpath%20d%3D%22m-135.48%20455.05-6.1524%201.7639h66.497l-16.304-1.7639z%22%20fill%3D%22%23e8933a%22%2F%3E%3Cpath%20transform%3D%22translate(-141.49%20386.63)%22%20d%3D%22m49.563%2068.42%2013.986%201.7637h2.8125l-16.302-1.7637z%22%20fill-opacity%3D%22.33333%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(1.9994%200%200%201.9994%20150.83%20-456.52)%22%3E%3Cpath%20d%3D%22m-135.48%20455.05-6.1524%201.7639h15.738l-6.1519-1.7639z%22%20fill%3D%22%23e8933a%22%2F%3E%3Cpath%20transform%3D%22translate(-141.49%20386.63)%22%20d%3D%22m8.9551%2068.42%203.834%201.7637h2.8125l-6.1504-1.7637h-0.49609z%22%20fill-opacity%3D%22.33333%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(1.2479%200%200%201.2479%2038.313%20-113.24)%22%3E%3Cpath%20d%3D%22m-135.48%20455.05-6.1524%201.7639h15.738l-6.1519-1.7639z%22%20fill%3D%22%23e8933a%22%2F%3E%3Cpath%20transform%3D%22translate(-141.49%20386.63)%22%20d%3D%22m8.9551%2068.42%203.834%201.7637h2.8125l-6.1504-1.7637h-0.49609z%22%20fill-opacity%3D%22.33333%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(1.4289%200%200%201.4289%2053.995%20-195.93)%22%3E%3Cpath%20d%3D%22m-135.48%20455.05-6.1524%201.7639h15.738l-6.1519-1.7639z%22%20fill%3D%22%23e8933a%22%2F%3E%3Cpath%20transform%3D%22translate(-141.49%20386.63)%22%20d%3D%22m8.9551%2068.42%203.834%201.7637h2.8125l-6.1504-1.7637h-0.49609z%22%20fill-opacity%3D%22.33333%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22m-141.85%20456.23c7.9645-0.99313%206.8425%200.78064%2013.278-0.0645%206.4353-0.84509%205.9757%200.90753%2012.387-9e-3%206.4115-0.91651%206.0842%200.99866%2013.062%200.01%206.9779-0.98863%206.6554%201.0209%2013.732-0.0206%207.0769-1.0415%207.6065%201.1029%2014.149%200.0163%206.5423-1.0866%205.594%201.1373%2013.847-0.0544%22%20fill%3D%22none%22%20stroke%3D%22%23985e00%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.42969%22%2F%3E%3Cpath%20d%3D%22m-142.18%20456.35c8.3969-0.64998%207.214%200.51091%2013.999-0.0422%206.7846-0.5531%206.3001%200.59395%2013.06-6e-3%206.7596-0.59984%206.4145%200.6536%2013.771%207e-3%207.3568-0.64705%207.0168%200.66815%2014.478-0.0135%207.4611-0.68167%208.0195%200.72183%2014.917%200.0107%206.8975-0.71117%205.8977%200.74432%2014.599-0.0356%22%20fill%3D%22none%22%20stroke%3D%22%23704907%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.35693%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		pagoda:"data:image/svg+xml;utf8,%3Csvg%20width%3D%2216.933mm%22%20height%3D%2242.333mm%22%20version%3D%221.1%22%20viewBox%3D%220%200%2060%20150%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cg%20transform%3D%22translate(152.08%20-303.67)%22%3E%3Cg%20transform%3D%22matrix(.61695%200%200%20.59899%20-133.74%20185.29)%22%3E%3Crect%20x%3D%2214.71%22%20y%3D%22234.44%22%20width%3D%2225.352%22%20height%3D%2232.115%22%20fill%3D%22%23cb7a00%22%2F%3E%3Cpath%20d%3D%22m14.71%20241.04h37.267l-25.529-26.114h-11.738z%22%20fill%3D%22%23ba000f%22%2F%3E%3Crect%20x%3D%2214.71%22%20y%3D%22241.56%22%20width%3D%2225.352%22%20height%3D%222.9349%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m14.71%20237.55h39.165l-2.7961%205.6779h-36.369z%22%20fill%3D%22%23ba000f%22%2F%3E%3Cpath%20d%3D%22m14.71%20237.55v0.74472h38.799l0.36617-0.74472z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.1345%22%2F%3E%3Cpath%20d%3D%22m14.71%20241.8v1.4318h36.368l0.70579-1.4318z%22%20fill-opacity%3D%22.22222%22%2F%3E%3Crect%20x%3D%2224.397%22%20y%3D%22246.72%22%20width%3D%2210.12%22%20height%3D%229.7493%22%20fill%3D%22%23cd914b%22%20stroke%3D%22%23464646%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.8445%22%2F%3E%3Cg%20transform%3D%22matrix(-.71557%200%200%20.77497%20-49.243%20-84.212)%22%3E%3Crect%20x%3D%22-101.1%22%20y%3D%22411.18%22%20width%3D%2235.43%22%20height%3D%2241.441%22%20fill%3D%22%23cb7a00%22%2F%3E%3Cpath%20d%3D%22m-101.1%20419.7h52.081l-35.676-33.697h-16.404z%22%20fill%3D%22%23ba000f%22%2F%3E%3Crect%20x%3D%22-101.1%22%20y%3D%22420.37%22%20width%3D%2235.43%22%20height%3D%223.7872%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m-101.1%20415.19h54.732l-3.9076%207.3267h-50.825z%22%20fill%3D%22%23ba000f%22%2F%3E%3Cpath%20d%3D%22m-101.1%20415.19v0.96094h54.221l0.51172-0.96094z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.1345%22%2F%3E%3Cpath%20d%3D%22m-101.1%20420.67v1.8476h50.824l0.98633-1.8476z%22%20fill-opacity%3D%22.22222%22%2F%3E%3Crect%20x%3D%22-87.559%22%20y%3D%22427.02%22%20width%3D%2214.143%22%20height%3D%2212.58%22%20fill%3D%22%23cd914b%22%20stroke%3D%22%23464646%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222.4768%22%2F%3E%3C%2Fg%3E%3Crect%20x%3D%2215.254%22%20y%3D%22266.73%22%20width%3D%2229.831%22%20height%3D%2237.788%22%20fill%3D%22%23cb7a00%22%2F%3E%3Cpath%20d%3D%22m15.254%20274.5h43.85l-18.455-15.046h-25.395z%22%20fill%3D%22%23ba000f%22%2F%3E%3Crect%20x%3D%2215.254%22%20y%3D%22275.11%22%20width%3D%2229.831%22%20height%3D%223.4534%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m15.254%20270.39h46.083l-3.2901%206.681h-42.793z%22%20fill%3D%22%23ba000f%22%2F%3E%3Cpath%20d%3D%22m15.254%20270.39v0.87625h45.652l0.43086-0.87625z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.1345%22%2F%3E%3Cpath%20d%3D%22m15.254%20275.38v1.6848h42.793l0.83046-1.6848z%22%20fill-opacity%3D%22.22222%22%2F%3E%3Crect%20x%3D%2228.045%22%20y%3D%22280.92%22%20width%3D%229.1218%22%20height%3D%228.7877%22%20fill%3D%22%23cd914b%22%20stroke%3D%22%23464646%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.6052%22%2F%3E%3Cg%20transform%3D%22matrix(-.84197%200%200%20.91187%20-62.566%20-108.21)%22%3E%3Crect%20x%3D%22-101.1%22%20y%3D%22411.18%22%20width%3D%2235.43%22%20height%3D%2241.441%22%20fill%3D%22%23cb7a00%22%2F%3E%3Cpath%20d%3D%22m-101.1%20419.7h52.081l-21.919-16.5h-30.162z%22%20fill%3D%22%23ba000f%22%2F%3E%3Crect%20x%3D%22-101.1%22%20y%3D%22420.37%22%20width%3D%2235.43%22%20height%3D%223.7872%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m-101.1%20415.19h54.732l-3.9076%207.3267h-50.825z%22%20fill%3D%22%23ba000f%22%2F%3E%3Cpath%20d%3D%22m-101.1%20415.19v0.96094h54.221l0.51172-0.96094z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.1345%22%2F%3E%3Cpath%20d%3D%22m-101.1%20420.67v1.8476h50.824l0.98633-1.8476z%22%20fill-opacity%3D%22.22222%22%2F%3E%3Crect%20x%3D%22-85.904%22%20y%3D%22426.74%22%20width%3D%2210.834%22%20height%3D%229.637%22%20fill%3D%22%23cd914b%22%20stroke%3D%22%23464646%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.832%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22m17.928%20205.32%202.0026%200.0341%2028.568%2032.171-59.16%200.0208z%22%20fill%3D%22%23ba000f%22%2F%3E%3Cpath%20d%3D%22m17.929%20197.63v7.6801l2.0008%200.0375v-7.6801z%22%20fill%3D%22%23ba000f%22%2F%3E%3Cpath%20d%3D%22m17.929%20203.73v1.6146l2.0008%208e-3v-1.6146z%22%20fill-opacity%3D%22.22807%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(-.53703%200%200%20.56468%20-174.65%20132.46)%22%3E%3Crect%20x%3D%22-101.1%22%20y%3D%22411.18%22%20width%3D%2235.43%22%20height%3D%2241.441%22%20fill%3D%22%23cb7a00%22%2F%3E%3Cpath%20d%3D%22m-101.1%20419.7h52.081l-17.361-16.062h-34.72z%22%20fill%3D%22%23ba000f%22%2F%3E%3Crect%20x%3D%22-101.1%22%20y%3D%22420.37%22%20width%3D%2235.43%22%20height%3D%223.7872%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m-101.1%20415.19h54.732l-3.9076%207.3267h-50.825z%22%20fill%3D%22%23ba000f%22%2F%3E%3Cpath%20d%3D%22m-101.1%20415.19v0.96094h54.221l0.51172-0.96094z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.1345%22%2F%3E%3Cpath%20d%3D%22m-101.1%20420.67v1.8476h50.824l0.98633-1.8476z%22%20fill-opacity%3D%22.22222%22%2F%3E%3Crect%20x%3D%22-85.904%22%20y%3D%22426.74%22%20width%3D%2210.834%22%20height%3D%229.637%22%20fill%3D%22%23cd914b%22%20stroke%3D%22%23464646%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.7286%22%2F%3E%3C%2Fg%3E%3Crect%20x%3D%22-123.79%22%20y%3D%22364.64%22%20width%3D%2219.027%22%20height%3D%2223.401%22%20fill%3D%22%23cb7a00%22%2F%3E%3Crect%20x%3D%22-115.64%22%20y%3D%22373.43%22%20width%3D%225.8181%22%20height%3D%225.4418%22%20fill%3D%22%23cd914b%22%20stroke%3D%22%23464646%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.95192%22%2F%3E%3Cpath%20d%3D%22m-123.79%20369.46h27.969l-9.3232-9.07h-18.646z%22%20fill%3D%22%23ba000f%22%2F%3E%3Crect%20x%3D%22-123.79%22%20y%3D%22369.83%22%20width%3D%2219.027%22%20height%3D%222.1385%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m-123.79%20366.91h29.393l-2.0985%204.1372h-27.294z%22%20fill%3D%22%23ba000f%22%2F%3E%3Cpath%20d%3D%22m-123.79%20366.91v0.54263h29.118l0.27481-0.54263z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.1345%22%2F%3E%3Cpath%20d%3D%22m-123.79%20370v1.0434h27.294l0.52969-1.0434z%22%20fill-opacity%3D%22.22222%22%2F%3E%3Cg%20transform%3D%22matrix(-.55693%200%200%20.62289%20-176.6%20123.99)%22%3E%3Crect%20x%3D%22-101.1%22%20y%3D%22418.24%22%20width%3D%2235.43%22%20height%3D%2238.96%22%20fill%3D%22%23cb7a00%22%2F%3E%3Cpath%20d%3D%22m-101.1%20426.26h52.081l-17.361-15.101h-34.72z%22%20fill%3D%22%23ba000f%22%2F%3E%3Crect%20x%3D%22-101.1%22%20y%3D%22426.89%22%20width%3D%2235.43%22%20height%3D%223.5605%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m-101.1%20422.02h54.732l-3.9076%206.8882h-50.825z%22%20fill%3D%22%23ba000f%22%2F%3E%3Cpath%20d%3D%22m-101.1%20422.02v0.90343h54.221l0.51172-0.90343z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.1345%22%2F%3E%3Cpath%20d%3D%22m-101.1%20427.17v1.7371h50.824l0.98633-1.7371z%22%20fill-opacity%3D%22.22222%22%2F%3E%3Crect%20x%3D%22-85.904%22%20y%3D%22432.88%22%20width%3D%2210.834%22%20height%3D%229.0602%22%20fill%3D%22%23cd914b%22%20stroke%3D%22%23464646%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.6162%22%2F%3E%3C%2Fg%3E%3Crect%20x%3D%22-123.86%22%20y%3D%22384.51%22%20width%3D%2219.732%22%20height%3D%2224.268%22%20fill%3D%22%23cb7a00%22%2F%3E%3Crect%20x%3D%22-115.4%22%20y%3D%22393.63%22%20width%3D%226.0338%22%20height%3D%225.6435%22%20fill%3D%22%23cd914b%22%20stroke%3D%22%23464646%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.95192%22%2F%3E%3Cpath%20d%3D%22m-123.86%20389.51h29.005l-9.6687-9.4061h-19.337z%22%20fill%3D%22%23ba000f%22%2F%3E%3Crect%20x%3D%22-123.86%22%20y%3D%22389.9%22%20width%3D%2219.732%22%20height%3D%222.2178%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m-123.86%20386.87h30.482l-2.1762%204.2906h-28.306z%22%20fill%3D%22%23ba000f%22%2F%3E%3Cpath%20d%3D%22m-123.86%20386.87v0.56275h30.197l0.28499-0.56275z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.1345%22%2F%3E%3Cpath%20d%3D%22m-123.86%20390.07v1.082h28.306l0.54932-1.082z%22%20fill-opacity%3D%22.22222%22%2F%3E%3Cg%20transform%3D%22matrix(-.57087%200%200%20.60026%20-177.96%20158.69)%22%20stroke-width%3D%221.6262%22%3E%3Crect%20x%3D%22-101.1%22%20y%3D%22411.18%22%20width%3D%2235.43%22%20height%3D%2241.441%22%20fill%3D%22%23cb7a00%22%2F%3E%3Cpath%20d%3D%22m-101.1%20419.7h52.081l-17.361-16.062h-34.72z%22%20fill%3D%22%23ba000f%22%2F%3E%3Crect%20x%3D%22-101.1%22%20y%3D%22420.37%22%20width%3D%2235.43%22%20height%3D%223.7872%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m-101.1%20415.19h54.732l-3.9076%207.3267h-50.825z%22%20fill%3D%22%23ba000f%22%2F%3E%3Cpath%20d%3D%22m-101.1%20415.19v0.96094h54.221l0.51172-0.96094z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.1345%22%2F%3E%3Cpath%20d%3D%22m-101.1%20420.67v1.8476h50.824l0.98633-1.8476z%22%20fill-opacity%3D%22.22222%22%2F%3E%3Crect%20x%3D%22-85.904%22%20y%3D%22426.74%22%20width%3D%2210.834%22%20height%3D%229.637%22%20fill%3D%22%23cd914b%22%20stroke%3D%22%23464646%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.6262%22%2F%3E%3C%2Fg%3E%3Crect%20x%3D%22-123.9%22%20y%3D%22405.5%22%20width%3D%2220.226%22%20height%3D%2224.875%22%20fill%3D%22%23cb7a00%22%2F%3E%3Crect%20x%3D%22-115.23%22%20y%3D%22414.84%22%20width%3D%226.1847%22%20height%3D%225.7847%22%20fill%3D%22%23cd914b%22%20stroke%3D%22%23464646%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.95192%22%2F%3E%3Crect%20x%3D%22-123.43%22%20y%3D%22428.71%22%20width%3D%2220.297%22%20height%3D%2224.963%22%20fill%3D%22%23cb7a00%22%2F%3E%3Crect%20transform%3D%22scale(-1%2C1)%22%20x%3D%22120.72%22%20y%3D%22428.71%22%20width%3D%2220.297%22%20height%3D%2224.963%22%20fill%3D%22%23cb7a00%22%2F%3E%3Crect%20x%3D%22-137.2%22%20y%3D%22438.08%22%20width%3D%2230.634%22%20height%3D%2215.592%22%20fill-opacity%3D%22.24561%22%2F%3E%3Crect%20x%3D%22-123.43%22%20y%3D%22438.19%22%20width%3D%2216.557%22%20height%3D%2215.486%22%20fill%3D%22%23cb4e00%22%2F%3E%3Crect%20x%3D%22-114.73%22%20y%3D%22439.71%22%20width%3D%226.2066%22%20height%3D%225.8052%22%20fill%3D%22%23cd914b%22%20stroke%3D%22%23464646%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.58745%22%2F%3E%3Crect%20transform%3D%22scale(-1%2C1)%22%20x%3D%22120.72%22%20y%3D%22438.19%22%20width%3D%2216.557%22%20height%3D%2215.486%22%20fill%3D%22%23cb4e00%22%2F%3E%3Crect%20transform%3D%22scale(-1%2C1)%22%20x%3D%22129.42%22%20y%3D%22439.71%22%20width%3D%226.2066%22%20height%3D%225.8052%22%20fill%3D%22%23cd914b%22%20stroke%3D%22%23464646%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.58745%22%2F%3E%3Crect%20x%3D%22-126.88%22%20y%3D%22442.04%22%20width%3D%229.9561%22%20height%3D%2213.068%22%20fill%3D%22%23ba000f%22%20stroke%3D%22%23060000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%22.52423%22%2F%3E%3Cpath%20d%3D%22m-142.67%20452.24v1.4368h18.757%203.6736%2018.756v-1.4368h-18.756-3.6736-18.757z%22%20fill%3D%22%23813200%22%2F%3E%3Cpath%20d%3D%22m-141.85%20452.24v-1.3173h18.012%203.5277%2018.011v1.3173h-18.011-3.5277-18.012z%22%20fill%3D%22%23813200%22%2F%3E%3Cpath%20d%3D%22m-123.43%20433.85h29.836l-9.9627-9.692h-19.874z%22%20fill%3D%22%23ba000f%22%2F%3E%3Cpath%20d%3D%22m-141.02%20434.25v2.2807h17.586%202.7118%2017.585v-2.2807h-17.585-2.7118-17.586z%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m-123.43%20431.13h31.355l-2.2386%204.4135h-29.117z%22%20fill%3D%22%23ba000f%22%2F%3E%3Cpath%20d%3D%22m-123.43%20431.13v0.57884h31.062l0.29315-0.57884z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.1345%22%2F%3E%3Cpath%20d%3D%22m-123.43%20434.43v1.113h29.117l0.56506-1.113z%22%20fill-opacity%3D%22.22222%22%2F%3E%3Cpath%20d%3D%22m-120.72%20433.85h-29.836l9.9627-9.692h19.874z%22%20fill%3D%22%23ba000f%22%2F%3E%3Cpath%20d%3D%22m-120.72%20431.13h-31.355l2.2386%204.4135h29.117z%22%20fill%3D%22%23ba000f%22%2F%3E%3Cpath%20d%3D%22m-120.72%20431.13v0.57884h-31.062l-0.29315-0.57884z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.1345%22%2F%3E%3Cpath%20d%3D%22m-120.72%20434.43v1.113h-29.117l-0.56506-1.113z%22%20fill-opacity%3D%22.22222%22%2F%3E%3Cpath%20d%3D%22m-123.9%20410.61h29.731l-9.9106-9.6414h-19.82z%22%20fill%3D%22%23ba000f%22%2F%3E%3Crect%20x%3D%22-123.9%22%20y%3D%22411.01%22%20width%3D%2220.226%22%20height%3D%222.2733%22%20fill-opacity%3D%22.32749%22%2F%3E%3Cpath%20d%3D%22m-123.9%20407.91h31.245l-2.2307%204.3979h-29.014z%22%20fill%3D%22%23ba000f%22%2F%3E%3Cpath%20d%3D%22m-123.9%20407.91v0.57683h30.953l0.29212-0.57683z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.1345%22%2F%3E%3Cpath%20d%3D%22m-123.9%20411.2v1.1091h29.014l0.56306-1.1091z%22%20fill-opacity%3D%22.22222%22%2F%3E%3Cpath%20transform%3D%22translate(-152.08%20303.67)%22%20d%3D%22m29.398%200v4.5996%200.00391l2.8984%2019.307h3.2793l-1.7266%203.4004h-4.2949v0.76172%208.959h0.36133l5.7754%206.5488h4.4883l-0.26563%200.52539-1.2539%202.4688h2e-3l-0.51367%201.0078h-7.9961v0.89453%208.2363h0.77539l6.7051%206.5234h4.043l-1.5703%203.0938-0.05859%200.11523-0.4707%200.92774v2e-3h-8.2676v0.92383%208.127h0.24609l6.9551%206.7656h4.1914l-0.28516%200.56445-1.3438%202.6445h2e-3l-0.55078%201.082h-8.5723v0.95898%208.8574h0.04297l7.1289%206.9356h4.2949l-0.29102%200.57617-1.377%202.7129-0.5625%201.1074v2e-3h-8.7891v0.98242%2010.865h0.11914l7.1699%206.9746h4.3125v2e-3l-0.29297%200.57813-1.9453%203.834h-8.8203v0.98633%2014.391h0.83398v1.3164h0.81836v1.4375h10.607%205.3926v-1.4375h-0.81836v-1.3164h-0.83398v-14.391-0.98633h8.8203l1.9453-3.834%200.29287-0.57828v-2e-3h-4.3125l-7.1699-6.9746h-0.11914v-10.865-0.98242h8.7891v-2e-3l0.5625-1.1074%201.377-2.7129%200.29102-0.57617h-4.2949l-7.1289-6.9356h-0.04297v-8.8574-0.95898h8.5723l0.55078-1.082h-2e-3l1.3438-2.6445%200.28516-0.56445h-4.1914l-6.9551-6.7656h-0.24609v-8.127-0.92383h8.2676v-2e-3l0.4707-0.92774%200.05859-0.11523%201.5703-3.0938h-4.043l-6.7051-6.5234h-0.77539v-8.2363-0.89453h7.9961l0.51367-1.0078h-2e-3l1.2539-2.4688%200.26563-0.52539h-4.4883l-8.2754-6.5488h-0.36133v-8.959-0.76172h6.7949l1.7266-3.4004h-3.2793l-0.25-0.25-17.414-19.037v-4.5996z%22%20fill-opacity%3D%22.28655%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
	},
	bg :{
		shadow : "data:image/svg+xml;utf8,%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%201920%201200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cdefs%3E%3Cfilter%20id%3D%22a%22%20x%3D%22-.0094751%22%20y%3D%22-.01636%22%20width%3D%221.019%22%20height%3D%221.0327%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeGaussianBlur%20stdDeviation%3D%227.5800478%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22m1468.4%20161.48c-1.0043%200-1.987%200.38726-2.7226%201.1621-0.5979%200.62982-17.025%2030.593-36.504%2066.584-19.479%2035.991-35.78%2066.035-36.225%2066.764l-0.8086%201.3262-2.1485-3.6621c-2.5835-4.4072-5.9335-11.461-5.9335-12.49%200-0.40834%2012.635-24.04%2028.078-52.516%2015.443-28.475%2028.19-52.326%2028.326-53.002%200.7694-3.8288-4.4274-6.3056-6.9336-3.3047-0.6012%200.72004-12.749%2022.814-26.994%2049.098-14.245%2026.284-26.059%2047.623-26.256%2047.42-0.5797-0.59878-1.3623-7.3593-1.3594-11.738%200.01-7.4584%202.0632-17.255%205.3711-25.557%201.9847-4.9809%207.2484-15.327%2013.08-25.709%206.6458-11.831%2010.483-18.841%2012.338-22.539%202.1173-4.2219%201.8893-6.4635-0.7734-7.5664-2.488-1.0306-3.4657-0.16916-6.6777%205.8867-1.6108%203.0369-6.2325%2011.411-10.27%2018.609-11.107%2019.804-14.671%2027.364-17.434%2036.971-5.651%2019.655-2.9776%2038.409%208.3829%2058.797%204.7373%208.5019%2015.886%2024.06%2017.754%2024.777%200.4054%200.1556%202.5606%200.28869%204.789%200.29492%207.6599%200.0216%2012.388%201.9906%2017.887%207.4492%204.4722%204.4392%207.2797%209.2009%209.6133%2016.301l1.793%205.4531h0.061l0.2598%201.541c0.1625%200.96406%200.6017%203.4694%200.9766%205.5684%203.4074%2019.078%201.1773%2048.909-6.3047%2084.344-1.7549%208.311-2.1015%209.394-4.1738%2013.037-10.436%2018.347-19.083%2039.522-26.912%2065.906-1.4875%205.0131-2.7462%209.173-2.7988%209.2441-0.052%200.0711-1.2295-0.64232-2.6152-1.5859-7.6628-5.2185-17.7-8.5516-26.357-8.75l-5.1426-0.11719-0.1172-84.699-0.1191-84.699h-0.1309l0.1269-2.9297c0.1602-3.6702-0.6161-5.5948-2.6914-6.668-1.7354-0.89741-3.4306-0.90179-5.1523-0.0117-2.235%201.1558-2.8105%202.4174-2.8105%206.168v3.3867l2.1191%200.0527h-2.209v85.98%2085.979l-3.6894%201.8144-3.6895%201.8144-6.3594-2.8047-6.3593-2.8047v-84.988-84.99h-0.1426l0.1211-18.252c0.1315-19.639%200.072-20.261-2.1192-21.984-1.4675-1.1543-5.0501-1.2389-6.5957-0.15625-2.2891%201.6032-2.3926%202.5526-2.3926%2022.111v18.23l2.1836%200.0508h-2.2734v82.035%2082.033l-5.207-3.2148c-2.8644-1.7676-7.282-4.7514-9.8164-6.6309l-4.6094-3.416v-75.402-75.404h-0.1231l0.1329-1.4238c0.4519-4.8568-1.4512-8.2704-4.8672-8.7285-4.0517-0.5433-6.2696%201.9528-6.2696%207.0547v3.0469l2.1817%200.0508h-2.2715l-0.018%2069.764-0.02%2069.762-1.6211-1.8691c-6.0878-7.0206-11.723-18.266-14.69-29.307-3.4742-12.93-4.1866-24.548-3.8613-63.057%200.1706-20.205%200.087-27.346-0.334-28.621-1.1936-3.6167-5.3922-4.8325-7.9297-2.2949l-1.289%201.291-0.3164%2030.377c-0.3908%2037.594%200.096%2046.694%203.2617%2060.939%206.1251%2027.567%2023.449%2048.746%2054.168%2066.217%209.5026%205.4045%2025.813%2012.832%2028.176%2012.832%200.6963%200%202.2558-0.70281%203.4649-1.5625%205.4948-3.9067%2011.993-5.6858%2019.299-5.2832%205.8469%200.32214%209.0352%201.1748%2014.957%204.002%2015.839%207.5622%2030.574%2025.247%2044.818%2053.793%200.2242%200.44932%200.4447%200.9119%200.668%201.3652a25.744%2025.744%200%200%200-8.1856%204.502%2014.936%2014.936%200%200%200-8.4394-1.4707%2011.768%2011.768%200%200%200-1.4278-1.8359%2011.768%2011.768%200%200%200-16.637-0.41016%2011.768%2011.768%200%200%200-2.8047%204.168%2025.744%2025.744%200%200%200-16.736%201.1426%2025.744%2025.744%200%200%200-5.9531-3.1543%2011.768%2011.768%200%200%200-0.9668-3.748%2011.768%2011.768%200%200%200-15.551-5.9277%2011.768%2011.768%200%200%200-6.8203%2012.459%2025.744%2025.744%200%200%200-3.1113%202.5117%2010.775%2010.775%200%200%200-8.9883-4.8418%2010.775%2010.775%200%200%200-6.1289%201.9277%2018.572%2018.572%200%200%200-16.332-10.512%2018.572%2018.572%200%200%200-2.9902-3.832%208.4901%208.4901%200%200%200%200.4688-2.7539%208.4901%208.4901%200%200%200-8.4903-8.4902%208.4901%208.4901%200%200%200-8.164%206.1934%2018.572%2018.572%200%200%200-12.23%207.957%2018.572%2018.572%200%200%200-1.2695-0.44921%208.4901%208.4901%200%200%200%200.58-3.0606%208.4901%208.4901%200%200%200-8.4902-8.4902%208.4901%208.4901%200%200%200-8.4902%208.4902%208.4901%208.4901%200%200%200%201.5625%204.8906%2018.572%2018.572%200%200%200-8.0606%209.9102%208.4901%208.4901%200%200%200-1.6816-0.16797%208.4901%208.4901%200%200%200-8.4903%208.4902%208.4901%208.4901%200%200%200%208.4903%208.4902%208.4901%208.4901%200%200%200%203.5644-0.79688%2018.572%2018.572%200%200%200%201.5157%202.0274%2039.543%2039.543%200%200%200-0.1563%200.32422%2018.572%2018.572%200%200%200-6.6992%202.502%208.4901%208.4901%200%200%200-4.6758-1.4102%208.4901%208.4901%200%200%200-8.4902%208.4902%208.4901%208.4901%200%200%200%202.1465%205.627%208.4901%208.4901%200%200%200-6.9864%208.3535%208.4901%208.4901%200%200%200%208.4903%208.4902%208.4901%208.4901%200%200%200%205.0957-1.7109%2018.572%2018.572%200%200%200%204.3847%203.7617%2018.572%2018.572%200%200%200-4.1914%207.1035%208.4901%208.4901%200%200%200-7.5957%208.4336%208.4901%208.4901%200%200%200%200.209%201.8262c-53.539%207.7239-86.391%2018.186-86.391%2029.746%200%2016.051%2063.258%2029.988%20157.47%2037.404%200.1136%2010.601-0.039%2021.202-0.4531%2031.803-75.713%201.723-133.11%2010.718-133.11%2021.629%200%2010.762%2055.845%2019.661%20130.03%2021.555-2.0947%2020.267-5.0843%2040.534-8.8847%2060.801-6.2675-0.0372-12.574-0.0644-18.959-0.0644-87.084%200-163.94%203.5269-211.49%208.9727%203.2429-11.035%206.9883-24.055%206.9883-24.389%200-1.3832-1.9267-2.2106-3.043-1.3066-0.3721%200.3013-1.4885%203.8298-5.2675%2016.637-1.4207%204.8146-1.8477%206.26-2.8184%209.5469-0.9648%200.11707-1.9212%200.23479-2.8594%200.35351l3.6309-12.316c3.2961-11.179%205.9941-20.615%205.9941-20.967%200-0.85821-0.9253-1.709-1.8574-1.709-1.4648%200-1.3168-0.40507-7.2832%2019.887-2.452%208.3391-3.8317%2012.945-4.6523%2015.65-0.9587%200.12949-1.8971%200.26128-2.8243%200.39257%200.3152-1.1014%201.9398-6.6335%204.1719-14.195%202.4047-8.1464%204.3711-15.146%204.3711-15.555%200-0.95694-0.8139-1.8164-1.7226-1.8164-1.5051%200-1.4826-0.055-5.4903%2013.527-2.036%206.9001-3.808%2012.935-3.9375%2013.41-0.2129%200.78028-0.26%200.82146-0.4785%200.43554-0.1331-0.23486-0.2813-1.6049-0.3301-3.0449-0.1286-3.7919-0.021-4.2919%203.3125-15.455%200.7818-2.6177%201.1786-4.3029%201.0938-4.6406-0.1673-0.66643-1.0741-1.3945-1.7363-1.3945-1.0315%200-1.532%200.81605-2.4668%204.0352-0.4879%201.68-1.329%204.5066-1.8711%206.2812-2.024%206.627-2.4373%2010.846-1.4551%2014.883%200.3438%201.413%200.9041%202.8344%201.623%204.248-12.392%201.9174-21.457%204.0085-26.592%206.2207-0.032-2.6762-0.089-3.9782-0.1777-4.1953-0.2529-0.61399-1.1779-1.2441-1.8262-1.2441-0.6225%200-1.5454%200.60916-1.8125%201.1953-0.1157%200.25395-0.1766%202.728-0.2148%206.7207-0.5483%200.58201-0.8379%201.1695-0.8379%201.7637%200%200.58967%200.2842%201.1723%200.8242%201.75-0.012%202.3549-0.033%203.9155-0.033%207.4551v7.6016l-7.5-0.85156%200.031-12.434c0.042-16.899-0.011-23.069-0.1954-23.52-0.267-0.64868-1.1855-1.2441-1.9199-1.2441-0.244%200-0.7663%200.28659-1.1582%200.63672l-0.7109%200.63672-0.059%2023.137-0.029%2012.328-7.4375-0.84376v-5.6094-17.389l-0.4902-0.56446c-0.2881-0.33157-0.8168-0.61781-1.2793-0.6914-0.6654-0.10586-0.9035-0.0223-1.5274%200.53516l-0.7402%200.66015v22.6l-26.744-3.0371c-0.5918-0.34871-1.0713-0.66147-1.0703-0.72656%200-0.0797%206.6372-12.368%2014.744-27.309%208.107-14.94%2014.793-27.479%2014.859-27.863%200.1-0.57623%206e-4%20-0.81532-0.5429-1.3633-0.8122-0.81229-1.7432-0.876-2.541-0.17383-0.3069%200.27-7.2852%2012.905-15.508%2028.078-6.4873%2011.971-9.7582%2017.989-11.834%2021.803%2010.34-32.611%2024.671-61.002%2041.441-78.203%2061.834-2.0786%20104.32-6.4182%20104.32-11.477%200-7.0871-83.189-12.793-186.52-12.793-38.821%200-74.792%200.80425-104.58%202.1855%206.7778-8.9687%2013.995-16.777%2021.578-23.115%2077.043-1.5723%20132.95-6.4458%20132.95-12.254%200-5.5881-51.814-10.304-124.35-12.055a6.748%206.748%200%200%200-3.0801-2.8203%2013.82%2013.82%200%200%200%200.2558-2.6191%2013.82%2013.82%200%200%200-0.01-0.30468%206.748%206.748%200%200%200%204.7246-6.4297%206.748%206.748%200%200%200-6.7481-6.748%206.748%206.748%200%200%200-2.6504%200.55078%2011.631%2011.631%200%200%200%203-7.7773%2011.631%2011.631%200%200%200-0.9316-4.5312%206.748%206.748%200%200%200%201.9434-4.7285%206.748%206.748%200%200%200-6.7481-6.748%206.748%206.748%200%200%200-3.8398%201.207%2011.631%2011.631%200%200%200-10.228-6.584%2011.631%2011.631%200%200%200-1.8711-2.4004%205.3168%205.3168%200%200%200%200.2929-1.7226%205.3168%205.3168%200%200%200-5.3164-5.3164%205.3168%205.3168%200%200%200-5.1133%203.8789%2011.631%2011.631%200%200%200-7.6582%204.9824%2011.631%2011.631%200%200%200-0.7949-0.2832%205.3168%205.3168%200%200%200%200.3633-1.916%205.3168%205.3168%200%200%200-5.3184-5.3164%205.3168%205.3168%200%200%200-5.3164%205.3164%205.3168%205.3168%200%200%200%200.9785%203.0625%2011.631%2011.631%200%200%200-5.0468%206.207%205.3168%205.3168%200%200%200-1.0528-0.10547%205.3168%205.3168%200%200%200-5.3164%205.3164%205.3168%205.3168%200%200%200%205.3164%205.3164%205.3168%205.3168%200%200%200%202.2325-0.49804%2011.631%2011.631%200%200%200%200.9492%201.2695%2024.764%2024.764%200%200%200-0.1%200.20312%2011.631%2011.631%200%200%200-4.1934%201.5664%205.3168%205.3168%200%200%200-2.9297-0.88281%205.3168%205.3168%200%200%200-5.3164%205.3164%205.3168%205.3168%200%200%200%201.3438%203.5234%205.3168%205.3168%200%200%200-4.375%205.2324%205.3168%205.3168%200%200%200%205.3164%205.3164%205.3168%205.3168%200%200%200%203.1914-1.0703%2011.631%2011.631%200%200%200%202.7461%202.3555%2011.631%2011.631%200%200%200-2.625%204.4473%205.3168%205.3168%200%200%200-4.2422%203.0176c-68.404%200.14805-127.34%202.784-157.98%206.6523h-73.777c9.2704-24.145%2025.669-46.143%2045.775-56.738%2061.706-4.1721%20103.99-12.885%20103.99-23.01%200-4.4919-8.3389-8.7052-22.984-12.369%201.6543-23.714%200.2395-30.95%206.3496-33.725%206.8926-3.1294%2011.348%200.77734%2011.348%200.77734%200.4888%200.40191%201.158%200.50394%201.7441%200.26562%2017.083-6.9464%2024.194-15.58%2026.777-25.279%202.5836-9.6995%200.903-20.109%201.4062-31.191%200.058-0.97013-0.6965-1.7967-1.6679-1.8262-0.9512-0.0289-1.7478%200.71881-1.7774%201.6699-0.5225%2011.506%201.0286%2021.745-1.293%2030.461-0.054%200.20142-0.1103%200.40137-0.1679%200.60156v-33.426c0-1.0762-0.8672-1.9434-1.9434-1.9434s-1.9414%200.86719-1.9414%201.9434v41.539c-0.4135%200.57602-0.8601%201.1459-1.3398%201.7109v-48.475c0-1.0762-0.8653-1.9414-1.9414-1.9414-1.0762%200-1.9434%200.86523-1.9434%201.9414v52.285c-0.4284%200.35542-0.8737%200.70953-1.3379%201.0605v-58.568c0-1.0762-0.8671-1.9434-1.9433-1.9434s-1.9415%200.86719-1.9415%201.9434v61.191c-0.434%200.26307-0.8814%200.52458-1.3398%200.78516v-67.201c0-1.0762-0.8671-1.9434-1.9434-1.9434-1.0761%200-1.9414%200.86719-1.9414%201.9434v69.234c-0.437%200.21114-0.8842%200.42135-1.3398%200.63086v-64.641c0-1.0762-0.8653-1.9434-1.9414-1.9434-1.0762%200-1.9434%200.86719-1.9434%201.9434v65.355c-0.3928-0.1923-0.8398-0.38883-1.3379-0.57617v-59.557c0-1.0762-0.8671-1.9434-1.9433-1.9434s-1.9414%200.86719-1.9414%201.9434v58.654c-0.4311-0.0404-0.8796-0.0599-1.3399-0.0605v-53.369c0-1.0762-0.8653-1.9434-1.9414-1.9434-1.0762%200-1.9433%200.86719-1.9433%201.9434v53.885c-0.8305%200.22279-1.6867%200.5244-2.5664%200.92382-7.5409%203.4238-6.5926%2011.54-8.2872%2036.057-28.698-6.5988-78.375-11.251-136.56-12.254%2023.747-65.331%2048.199-90.567%2066.369-98.816%2022.082-10.026%2036.359%202.4902%2036.359%202.4902a5.5234%205.5234%200%200%200%205.5879%200.84961c54.73-22.255%2077.51-49.909%2085.787-80.984s2.8917-64.425%204.5039-99.932a5.5234%205.5234%200%200%200-5.3457-5.8496%205.5234%205.5234%200%200%200-5.6875%205.3477c-1.6738%2036.861%203.2935%2069.667-4.1445%2097.592-0.1718%200.64531-0.3565%201.2864-0.541%201.9277v-107.09c0-3.4478-2.7749-6.2246-6.2227-6.2246s-6.2226%202.7768-6.2226%206.2246v133.08c-1.3247%201.8454-2.7541%203.6741-4.2911%205.4844v-155.3c0-3.4478-2.7748-6.2246-6.2226-6.2246s-6.2227%202.7768-6.2227%206.2246v167.51c-1.3727%201.1387-2.8019%202.27-4.289%203.3945v-187.64c0-3.4478-2.7768-6.2227-6.2246-6.2227-3.4479%200-6.2227%202.7749-6.2227%206.2227v196.04c-1.3905%200.84284-2.8203%201.6808-4.2891%202.5156v-215.3c0-3.4478-2.7768-6.2227-6.2246-6.2227-3.4479%200-6.2226%202.7748-6.2226%206.2227v221.81c-1.4001%200.67645-2.8296%201.3503-4.2891%202.0215v-207.1c0-3.4478-2.7748-6.2227-6.2226-6.2227-3.4479%200-6.2227%202.7749-6.2227%206.2227v209.39c-1.2585-0.6161-2.6954-1.2475-4.291-1.8477v-190.8c0-3.4478-2.7749-6.2246-6.2227-6.2246s-6.2226%202.7768-6.2226%206.2246v187.92c-1.3811-0.12944-2.8143-0.19508-4.2891-0.19727v-170.98c0-3.4478-2.7768-6.2246-6.2246-6.2246s-6.2227%202.7768-6.2227%206.2246v172.64c-2.6608%200.7138-5.4062%201.6774-8.2246%202.957-22.74%2010.324-48.892%2039.046-73.527%20108.72-3.9356-0.0338-7.893-0.0566-11.893-0.0566-10.465%200-20.709%200.12404-30.695%200.34961-3.0601-7.296-7.2194-12.694-13.076-16.809%201.0354-15.832%202.786-22.648%2010.268-26.045%2013.594-6.1718%2022.381%201.5332%2022.381%201.5332%200.9638%200.79265%202.2834%200.99342%203.4394%200.52344%2033.691-13.7%2047.715-30.724%2052.811-49.854s1.779-39.66%202.7715-61.518c0.114-1.9133-1.3753-3.5414-3.2911-3.5996-1.8759-0.057-3.4415%201.4152-3.5%203.291-1.0304%2022.691%202.028%2042.886-2.5507%2060.076-0.1058%200.39725-0.2203%200.7927-0.334%201.1875v-65.924c0-2.1224-1.7077-3.832-3.8301-3.832s-3.832%201.7096-3.832%203.832v81.922c-0.8155%201.136-1.6946%202.2606-2.6407%203.375v-95.6c0-2.1224-1.7076-3.832-3.83-3.832s-3.8301%201.7096-3.8301%203.832v103.12c-0.8449%200.70095-1.7251%201.3976-2.6406%202.0898v-115.51c0-2.1224-1.7096-3.832-3.8321-3.832-2.1224%200-3.83%201.7096-3.83%203.832v120.68c-0.8561%200.51884-1.7365%201.0349-2.6407%201.5488v-132.53c0-2.1224-1.7095-3.8301-3.832-3.8301-2.1224%200-3.8301%201.7076-3.8301%203.8301v136.54c-0.8618%200.41641-1.7422%200.83095-2.6406%201.2441v-127.49c0-2.1224-1.7095-3.832-3.832-3.832-2.1224%200-3.8301%201.7096-3.8301%203.832v128.9c-0.7747-0.37926-1.6583-0.76725-2.6406-1.1367v-117.46c0-2.1224-1.7078-3.832-3.8301-3.832-2.1226%200-3.8321%201.7096-3.8321%203.832v115.68c-0.8502-0.0797-1.7327-0.11974-2.6406-0.12109v-105.25c0-2.1224-1.7077-3.832-3.8301-3.832-2.1225%200-3.832%201.7096-3.832%203.832v106.27c-1.638%200.4394-3.3275%201.0326-5.0625%201.8203-9.214%204.1834-11.987%2011.936-13.564%2028.689-0.3512-0.16918-0.6998-0.3401-1.0606-0.50391-3.5453-1.6097-6.9986-2.8228-10.346-3.7207v-217.16c0-4.337-3.4909-7.8301-7.8281-7.8301-4.3368%200-7.8281%203.4931-7.8281%207.8301v215.08c-1.8552%203e-3%20-3.6573%200.0852-5.3946%200.24804v-236.38c0-4.337-3.491-7.8281-7.8281-7.8281-4.337%200-7.8281%203.4911-7.8281%207.8281v240.01c-2.0072%200.75498-3.8135%201.5492-5.3965%202.3242v-263.39c0-4.337-3.4911-7.8281-7.8281-7.8281-4.3371%200-7.8282%203.4911-7.8282%207.8281v260.51c-1.8358-0.84433-3.6354-1.6901-5.3964-2.541v-279.02c0-4.337-3.4913-7.8281-7.8282-7.8281-4.3372%200-7.8281%203.4911-7.8281%207.8281v270.82c-1.8477-1.0502-3.6454-2.1038-5.3945-3.1641v-246.61c0-4.337-3.4911-7.8281-7.8281-7.8281-4.3371%200-7.8301%203.4911-7.8301%207.8281v236.04c-1.8709-1.4146-3.6679-2.8372-5.3946-4.2695v-210.71c0-4.337-3.4912-7.8281-7.8281-7.8281-4.337%200-7.8281%203.4911-7.8281%207.8281v195.35c-1.9333-2.2771-3.73-4.577-5.3965-6.8984v-167.4c0-4.337-3.4911-7.8301-7.8281-7.8301s-7.8281%203.4931-7.8281%207.8301v134.71c-0.2321-0.80674-0.4635-1.614-0.6797-2.4258-9.3562-35.126-3.1073-76.392-5.2129-122.76-0.1195-3.833-3.3212-6.845-7.1543-6.7285-3.9148%200.11885-6.9576%203.4478-6.7246%207.3574%202.028%2044.663-4.7479%2086.618%205.664%20125.71%2010.412%2039.089%2039.068%2073.877%20107.91%20101.87%202.3622%200.96037%205.0618%200.54941%207.0313-1.0703%200%200%2017.957-15.742%2045.734-3.1309%202.1124%200.95906%203.9989%202.0504%205.6914%203.3027-0.106%201.782-0.2129%203.6137-0.3242%205.5371-78.21%203.0506-135.2%2012.902-135.2%2024.656%200%2010.684%2047.074%2019.8%20114.38%2023.662l-20.272%2056.086h-145.33c4.0093-13.714%208.0742-27.862%208.0743-28.268%200-1.8851-2.6233-3.0112-4.1446-1.7793-0.5072%200.41063-2.0314%205.2201-7.1816%2022.674-1.0973%203.7185-1.2233%204.1395-2.1778%207.373h-3.7558l3.1465-10.668c4.492-15.236%208.1679-28.093%208.1679-28.572%200-1.1696-1.2609-2.3301-2.5312-2.3301-1.9963%200-1.7946-0.55095-9.9258%2027.104-1.6345%205.5587-2.9953%2010.154-4.2734%2014.467h-3.7422c1.1325-3.857%201.6326-5.5834%203.5117-11.949%203.2772-11.102%205.957-20.644%205.957-21.201%200-1.3042-1.1092-2.4726-2.3476-2.4726-2.0512%200-2.0206-0.0749-7.4824%2018.436-2.6095%208.8438-4.6346%2015.752-5.045%2017.188h-1.2558c-0.072-0.72005-0.1355-1.5687-0.166-2.4688-0.1752-5.1678-0.03-5.8488%204.5136-21.062%201.0655-3.5676%201.6078-5.8639%201.4922-6.3242-0.228-0.90824-1.4666-1.9023-2.3691-1.9023-1.4056%200-2.0854%201.1148-3.3594%205.502-0.6649%202.2896-1.8139%206.142-2.5527%208.5606-2.3321%207.6356-3.0766%2012.919-2.4473%2017.695h-11.037c2.2263%2022.164%203.1428%2044.33%202.8359%2066.494l-11.031-1.252c0.2785-1.6155%200.5181-3.2762%200.6992-5.0137l0.1777-1.709h-0.09l0.1426-3.4355c0.082-1.9625%200.098-10.045%200.037-17.963l-0.1094-14.396-0.6953-0.69531c-0.909-0.9091-2.2318-0.90009-3.3047%200.0234l-0.8359%200.71875v17.949%2017.949h0.027c-0.1856%200.0782-0.2364%200.19415-0.2383%200.36914-0.01%200.81197-0.3584%203.3073-0.7461%205.6426l-9.3359-1.0605-0.029-5.1016h-0.1465c0.041-1.8996%200.097-11.406%200.1367-22.91%200.059-17.325-0.014-23.863-0.2636-24.473-0.3446-0.83677-1.6047-1.6953-2.4883-1.6953-0.8483%200-2.1048%200.82812-2.4688%201.627-0.2658%200.58332-0.3554%206.6544-0.3554%2024.107v23.328h2.6757c0.3782%200%200.7008%206e-3%200.9942%200.0156h-0.9063-2.8222v4.457l-10.109-1.1465v-3.3106h-0.092l0.078-31.088c0.057-23.031-0.013-31.441-0.2637-32.055-0.3639-0.88405-1.6182-1.6953-2.6191-1.6953-0.3325%200-1.0421%200.39001-1.5762%200.86719l-0.9707%200.86914-0.078%2031.531-0.078%2031.533%201.1875%200.0371h-1.2363v2.668l-10.109-1.1465v-1.3906l0.061%204e-3v-23.697-23.697l-0.6699-0.76953c-0.3926-0.45187-1.1138-0.84111-1.7441-0.94141-0.9068-0.14426-1.2298-0.0312-2.0801%200.72852l-1.0078%200.90039v44.701%203.543l-23.246-2.6387c-0.6819-2.1676-1.8969-5.5856-2.4863-6.8457-2.432-5.1999-6.1962-9.5478-10.211-11.793-1.0823-0.60529-1.9667-1.1883-1.9649-1.2969%200-0.10864%209.0433-16.858%2020.092-37.219%2011.049-20.361%2020.161-37.449%2020.252-37.973%200.1363-0.78531%204e-4%20-1.1106-0.7403-1.8574-1.1069-1.107-2.3756-1.1952-3.4629-0.23828-0.4182%200.36798-9.9284%2017.589-21.135%2038.268-11.206%2020.678-20.406%2037.626-20.443%2037.662-0.038%200.036-0.9699-8e-3%20-2.0742-0.0977l-2.0078-0.16211-1.9434-2.5391c-1.2406-1.6205-1.8798-2.7084-1.7656-3.0059%200.098-0.25638%2010.775-20.003%2023.725-43.881%2017.937-33.075%2023.568-43.699%2023.644-44.605%200.082-0.97129-0.042-1.323-0.6757-1.918-0.5232-0.49139-1.1735-0.73679-1.8106-0.73828-0.6368%201e-3%20-1.26%200.24883-1.7265%200.74024-0.3804%200.4007-10.831%2019.461-23.223%2042.357-12.392%2022.896-22.762%2042.009-23.045%2042.473l-0.5137%200.8418-1.3672-2.3301c-1.6436-2.8036-3.7754-7.2885-3.7754-7.9434%200-0.25976%208.0388-15.294%2017.863-33.408%209.8243-18.115%2017.933-33.287%2018.02-33.717%200.4895-2.4357-2.8158-4.0126-4.4101-2.1035-0.3825%200.45803-8.11%2014.514-17.172%2031.234-9.0619%2016.72-16.58%2030.295-16.705%2030.166-0.3688-0.38088-0.8671-4.6831-0.8652-7.4688%200-4.7447%201.3137-10.977%203.418-16.258%201.2625-3.1687%204.6124-9.7491%208.3222-16.354%204.2278-7.5264%206.6679-11.987%207.8477-14.34%201.3471-2.6857%201.2017-4.1109-0.4922-4.8125-1.5828-0.65562-2.2045-0.10633-4.248%203.7461-1.0247%201.932-3.965%207.2587-6.5333%2011.838-7.0654%2012.598-9.3326%2017.408-11.09%2023.52-3.5951%2012.503-1.895%2024.432%205.332%2037.402%203.0136%205.4085%2010.107%2015.308%2011.295%2015.764%200.2579%200.0989%201.6292%200.18356%203.0468%200.1875%204.8728%200.0138%207.8787%201.2658%2011.377%204.7383%202.8449%202.824%204.6327%205.8525%206.1172%2010.369l0.332%201.0059-65.434-7.4277%200.012-1.8555c0.083-12.493%200.046-12.89-1.3476-13.986-0.9336-0.73429-3.2141-0.78839-4.1973-0.0996-1.4562%201.0199-1.5215%201.624-1.5215%2014.066v1.0742l-74.7-8.4826v410.46h125.43c-3.034%205.6908-6.1023%2011.382-9.2363%2017.072h217.43a11.768%2011.766%2033.479%200%200-0.8965%206.9297%2011.768%2011.766%2033.479%200%200%2010.414%209.6367%2011.768%2011.766%2033.479%200%200%200.1386%202.8691%2011.768%2011.766%2033.479%200%200%2013.648%209.5234%2011.768%2011.766%2033.479%200%200%208.4512-6.3281%2025.742%2025.739%2033.484%200%200%205.6875-0.3496%2025.742%2025.739%2033.484%200%200%2019.648-16.525%2025.742%2025.739%2033.484%200%200%2021.652%206.1504%2025.742%2025.739%2033.484%200%200%2017.404-11.906h2.5918a30.586%2030.582%2033.498%200%200%2016.404%201.6465%2030.586%2030.582%2033.498%200%200%205.7793-1.6465h9.5625a14.935%2014.933%2033.493%200%200%208.791%201.1386%2014.935%2014.933%2033.493%200%200%203.5879-1.1386h127.19c0.2515%200.4447%200.4082%200.7589%200.4082%200.8496%200%200.3047%200.3171%200.9055%200.7032%201.334%200.9118%201.0115%202.1935%201.2247%203.2754%200.5468%200.6476-0.4058%200.9049-0.726%201.5429-2.7304h110.89a14.168%2014.17%2048.992%200%200%2012.81%2014.609%2014.168%2014.17%2048.992%200%200%2011.842-4.6308%2030.994%2030.998%2049.001%200%200%206.7148%201.4238%2030.994%2030.998%2049.001%200%200%2026.982-11.402h2.1777a30.994%2030.998%2049.001%200%200%2022.104%2012.635%2030.994%2030.998%2049.001%200%200%2024.916-9.0508%2036.826%2036.831%2048.987%200%200%2020.623%208.8438%2036.826%2036.831%2048.987%200%200%2014.43-1.5449%2017.982%2017.984%2049.002%200%200%2013.738%208.709%2017.982%2017.984%2049.002%200%200%2019.238-14.029%2011.768%2011.766%206.8537e-4%200%200%2012.414-2.4141%2011.768%2011.766%206.8537e-4%200%200%203.4824-6.584%2025.739%2025.742%2089.988%200%200%207.9981-0.414%2025.739%2025.742%2089.988%200%200%202.58%2011.139%2011.768%2011.766%206.8537e-4%200%200%200.4317%2015.721%2011.768%2011.766%206.8537e-4%200%200%2014.002%202.2891%2011.768%2011.766%206.8537e-4%200%200%201.6993%202.3144%2011.768%2011.766%206.8537e-4%200%200%2016.637%200.4122%2011.768%2011.766%206.8537e-4%200%200%203.5547-9.9415%2025.739%2025.742%2089.988%200%200%204.5527-3.4316%2025.739%2025.742%2089.988%200%200%207.6113-22.766h13.203a8.4895%208.4884%200%200%200%206.1094%207.1601%208.4895%208.4884%200%200%200-0.2617%202.0547%208.4895%208.4884%200%200%200%208.4883%208.4883%208.4895%208.4884%200%200%200%206.8047-3.4277%2018.571%2018.569%200%200%200%204.084%200.4707%2018.571%2018.569%200%200%200%2016.045-9.2539%2018.571%2018.569%200%200%200%2014.604%207.1035%2018.571%2018.569%200%200%200%2014.352-6.8008%2022.066%2022.063%200%200%200%2012.801%204.1133%2022.066%2022.063%200%200%200%208.5196-1.7344%2010.775%2010.773%200%200%200%208.6875%204.4219%2010.775%2010.773%200%200%200%2010.773-10.774%2010.775%2010.773%200%200%200-6.3223-9.7988%2022.066%2022.063%200%200%200%200.1485-0.9824h92.1a18.569%2018.571%2089.997%200%200%201.6816%207.7578%208.4895%208.4884%200.016236%200%200-1.334%201.0352%208.4895%208.4884%200.016236%200%200-0.2968%2012.002%208.4895%208.4884%200.016236%200%200%2012.002%200.2969%208.4895%208.4884%200.016236%200%200%202.0352-3.0332%2018.569%2018.571%2089.997%200%200%202.4941%200.4219%2039.536%2039.541%2089.995%200%200%200.1094%200.3418%2018.569%2018.571%2089.997%200%200-3.127%206.4316%208.4895%208.4884%200.016236%200%200-4.3593%202.2012%208.4895%208.4884%200.016236%200%200-0.2969%2012.002%208.4895%208.4884%200.016236%200%200%205.4336%202.5938%208.4895%208.4884%200.016236%200%200%200.6992%2010.865%208.4895%208.4884%200.016236%200%200%2012.002%200.2969%208.4895%208.4884%200.016236%200%200%202.5117-4.75%2018.569%2018.571%2089.997%200%200%205.7695-0.2988%2018.569%2018.571%2089.997%200%200%201.8633%208.0351%208.4895%208.4884%200.016236%200%200%200.3105%2011.342%208.4895%208.4884%200.016236%200%200%2010.102%201.6524%208.4895%208.4884%200.016236%200%200%201.2266%201.6699%208.4895%208.4884%200.016236%200%200%2012.002%200.2969%208.4895%208.4884%200.016236%200%200%202.5645-7.1739%2018.569%2018.571%2089.997%200%200%203.2832-2.4746%2018.569%2018.571%2089.997%200%200%205.2402-17.764%2018.569%2018.571%2089.997%200%200%2015.477-4.9199%2018.569%2018.571%2089.997%200%200%205.707-14.82%2022.066%2022.063%200.0060302%200%200%209.0449-3.4316%2011.63%2011.628%200%200%200%201.8516%200.1621%2011.63%2011.628%200%200%200%2010.049-5.7949%2011.63%2011.628%200%200%200%209.1445%204.4492%2011.63%2011.628%200%200%200%208.9883-4.2598%2013.819%2013.817%200%200%200%208.0156%202.5762%2013.819%2013.817%200%200%200%205.336-1.086%206.7475%206.7467%200%200%200%205.4394%202.7696%206.7475%206.7467%200%200%200%205.9454-3.5606%2020.386%2020.383%2050.991%200%200%2013.99%200.3164c3.3956%207.8074%206.5391%2016.688%209.4219%2026.648%201.5077%205.2096%201.5471%205.3094%202.3593%205.8183%200.9246%200.5793%202.0196%200.3976%202.7989-0.4668%200.33-0.3661%200.6015-0.8803%200.6015-1.1406%200-0.5799%206.6813-10.634%2010.047-15.119%200.4223-0.5629%200.8376-1.0978%201.2559-1.6426a20.386%2020.383%2050.991%200%200%206.25-1.6406%2024.222%2024.219%2050.982%200%200%2010.496%2010.377%2024.222%2024.219%2050.982%200%200%209.2031%202.5254%2011.828%2011.826%2050.981%200%200%206.3125%208.6387%2011.828%2011.826%2050.981%200%200%2015.894-5.207%2011.828%2011.826%2050.981%200%200-1.334-12.734%2024.222%2024.219%2050.982%200%200%202.4727-3.8887%2024.222%2024.219%2050.982%200%200%200.2246-0.4844%2011.828%2011.826%2050.981%200%200%2012.478-6.3125%2011.828%2011.826%2050.981%200%200-2.1426-13.644c6.534-1.8208%2011.86-4.3982%2016.17-7.875h465.41v-192.46l-138.65-15.742a11.828%2011.826%2050.981%200%200-3.3731-2.5644%2011.828%2011.826%2050.981%200%200-6.959-1.1523%2020.386%2020.383%2050.991%200%200-10.781-18.393%2020.386%2020.383%2050.991%200%200-1.0274-5.2344%209.3192%209.318%2050.988%200%200%201.8243-2.4648%209.3192%209.318%2050.988%200%200-4.1055-12.523%209.3192%209.318%2050.988%200%200-11.064%202.0156%2020.386%2020.383%2050.991%200%200-15.922%201.7266%2020.386%2020.383%2050.991%200%200-1.0196-1.0703%209.3192%209.318%2050.988%200%200%202.084-2.709%209.3192%209.318%2050.988%200%200-4.1035-12.523%209.3192%209.318%2050.988%200%200-12.523%204.1035%209.3192%209.318%2050.988%200%200-0.8926%205.5644%2020.386%2020.383%2050.991%200%200-12.809%205.7051%209.3192%209.318%2050.988%200%200-1.5625-0.99804%209.3192%209.318%2050.988%200%200-12.522%204.1035%209.3192%209.318%2050.988%200%200%204.1035%2012.523%209.3192%209.318%2050.988%200%200%203.8848%200.98828%2020.386%2020.383%2050.991%200%200%200.4805%202.7363%2043.405%2043.399%2050.992%200%200-0.3145%200.23828%2020.386%2020.383%2050.991%200%200-7.8008-0.86914%209.3192%209.318%2050.988%200%200-3.8808-3.7031%209.3192%209.318%2050.988%200%200-12.522%204.1035%209.3192%209.318%2050.988%200%200-0.6895%206.5742%209.3192%209.318%2050.988%200%200-6.4726%200.42773l-1.2832-0.14648-66.406-63.068c-0.6226-4.8815-1.1559-9.769-1.5898-14.639%20136.86-0.7482%20244.41-10.219%20244.41-21.877%200-8.3935-55.75-15.655-138.04-19.344a14.082%2014.082%200%200%200%203.8964-9.1562%2014.082%2014.082%200%200%200%202.9493-2.2109%206.4374%206.4374%200%200%200%202.08%200.39453%206.4374%206.4374%200%200%200%206.5606-6.3125%206.4374%206.4374%200%200%200-4.5781-6.2793%2014.082%2014.082%200%200%200-5.8536-9.3867%2014.082%2014.082%200%200%200%200.3594-0.95703%206.4374%206.4374%200%200%200%202.3125%200.48438%206.4374%206.4374%200%200%200%206.5586-6.3125%206.4374%206.4374%200%200%200-6.3125-6.5586%206.4374%206.4374%200%200%200-3.7304%201.1133%2014.082%2014.082%200%200%200-7.3946-6.2559%206.4374%206.4374%200%200%200%200.1524-1.2715%206.4374%206.4374%200%200%200-6.3125-6.5606%206.4374%206.4374%200%200%200-6.5606%206.3125%206.4374%206.4374%200%200%200%200.5508%202.7129%2014.082%2014.082%200%200%200-1.5566%201.1211%2029.983%2029.983%200%200%200-0.2442-0.12305%2014.082%2014.082%200%200%200-1.7988-5.1152%206.4374%206.4374%200%200%200%201.1367-3.5254%206.4374%206.4374%200%200%200-6.3125-6.5606%206.4374%206.4374%200%200%200-4.2969%201.5449%206.4374%206.4374%200%200%200-6.2304-5.416%206.4374%206.4374%200%200%200-6.5606%206.3125%206.4374%206.4374%200%200%200%201.2227%203.8887%2014.082%2014.082%200%200%200-2.916%203.2695%2014.082%2014.082%200%200%200-5.3243-3.2832%206.4374%206.4374%200%200%200-6.2832-5.8808%206.4374%206.4374%200%200%200-6.2754%204.5664%206.4374%206.4374%200%200%200-1.5546-0.23047%206.4374%206.4374%200%200%200-6.5606%206.3125%206.4374%206.4374%200%200%200%202.5%205.207%2014.082%2014.082%200%200%200-0.416%203.0898%2014.082%2014.082%200%200%200%206.7832%2012.301%2014.082%2014.082%200%200%200-5.5996%2010.967%2014.082%2014.082%200%200%200%204.9473%2010.98%2016.732%2016.732%200%200%200-3.2461%208.8086c-0.1046-2e-3%20-0.2138-4e-3%20-0.3184-6e-3a10.775%2010.773%200.012322%200%200-2.5195-10.473%2010.775%2010.773%200.012322%200%200-11.338-2.7402%2022.066%2022.063%200.0060302%200%200-2.584-3.3066%2022.066%2022.063%200.0060302%200%200-0.3496-0.3418%2010.775%2010.773%200.012322%200%200-1.6113-12.637%2010.775%2010.773%200.012322%200%200-15.234-0.375%2010.775%2010.773%200.012322%200%200-2.459%203.5527%2018.569%2018.571%2089.997%200%200-3.832-10.791c4.6328-33.231%2013.456-65.784%2025-89.588%2094.455-7.4076%20157.91-21.363%20157.91-37.439%200-9.8462-23.828-18.896-63.961-26.137a18.572%2018.572%200%200%200%201.6661-9.1777%2022.067%2022.067%200%200%200%2012.109-5.8438%2022.067%2022.067%200%200%200%204.9746-7.1309%2010.775%2010.775%200%200%200%209.3418-2.7852%2010.775%2010.775%200%200%200%200.377-15.234%2010.775%2010.775%200%200%200-11.338-2.7402%2022.067%2022.067%200%200%200-2.5859-3.3086%2022.067%2022.067%200%200%200-0.3477-0.33985%2010.775%2010.775%200%200%200-1.6133-12.641%2010.775%2010.775%200%200%200-15.234-0.375%2010.775%2010.775%200%200%200-2.4589%203.5527%2018.572%2018.572%200%200%200-5.0918-12.297%2018.572%2018.572%200%200%200-6.0664-4.2148%2010.775%2010.775%200%200%200-2.959-7.6094%2010.775%2010.775%200%200%200-15.234-0.37696%2010.775%2010.775%200%200%200-3.1094%205.623%2018.572%2018.572%200%200%200-19.08%203.6465%2018.572%2018.572%200%200%200-4.8066-0.7168%208.4901%208.4901%200%200%200-1.5586-2.3164%208.4901%208.4901%200%200%200-12.004-0.29687%208.4901%208.4901%200%200%200-1.6445%2010.115%2018.572%2018.572%200%200%200-2.9336%206.0254%2014.936%2014.936%200%200%200-1.8262-2.3496%2014.936%2014.936%200%200%200-7.793-4.3125%2025.744%2025.744%200%200%200-0.5644-19.564c22.566-7.642%2037.704-20.211%2047.527-39.254%205.4132-10.494%208.0518-18.046%2014.779-42.301%202.3531-8.4836%205.1128-17.999%206.1328-21.145%201.3514-4.1672%201.7752-6.1418%201.5625-7.2754-0.22-1.1732%200.1347-2.6403%201.4434-5.9668%205.9418-15.103%2012.579-23.709%2019.408-25.174%202.3514-0.50428%202.8512-0.40783%207.2852%201.4043%201.3943%200.56979%201.7675%200.46271%206.5234-1.8496%202.7749-1.3492%206.3212-3.3637%207.8809-4.4766%204.1711-2.9765%208.8068-8.1094%2010.469-11.592%202.7831-5.8315%203.0036-7.3216%203.2129-21.771%200.1749-12.081%200.1216-13.32-0.6191-14.139-1.5231-1.6829-4.1058-0.79759-4.6289%201.5879-0.1229%200.56049-0.303%206.5936-0.3985%2013.406-0.1783%2012.713-0.4067%2014.463-2.3672%2018.08-0.6512%201.2014-0.7156-0.44165-0.7324-18.461-0.019-19.656-0.1305-21.177-1.6094-22.164-0.9506-0.63479-2.6085-0.36606-3.5508%200.57617-0.9105%200.91039-0.9355%201.5589-0.9355%2024.742v23.805l-1.3574%200.9668c-0.7467%200.53165-1.4836%200.9668-1.6367%200.9668-0.1532%200-0.2793-12.921-0.2793-28.715%200-28.406-0.1141-30.771-1.5469-31.682-0.9505-0.60436-2.7806-0.40203-3.6738%200.40625-0.8118%200.73487-0.8555%202.3504-0.8555%2032.264v31.49l-1.2481%200.47461c-2.6013%200.98902-2.4902%202.1924-2.4902-26.973%200-24.441-0.072-27.052-0.7734-27.826-0.9918-1.0958-3.0688-1.0978-4.0586-6e-3%20-0.6923%200.76491-0.782%203.4969-0.8906%2027.189l-0.1211%2026.34-2.5704%200.5332c-9.2656%201.9165-17.502%2012.086-24.047%2029.689-0.8844%202.3787-2.0136%204.7701-2.5098%205.3164-1.2156%201.3385-3.8969%209.6592-8.9805%2027.871-9.4465%2033.842-14.759%2045.698-25.562%2057.051-3.4971%203.6749-11.197%2010.1-11.609%209.6875-0.08-0.0799%207.5337-26.12%2016.918-57.865%209.3843-31.745%2017.096-58.527%2017.139-59.516%200.064-1.4883-0.1848-2.0318-1.4434-3.1562-1.0512-0.93936-2.0125-1.3574-3.1211-1.3574-3.5785%200-2.2926-3.7118-22.59%2065.145l-18.582%2063.041-3.4961%201.3887c-1.525%200.60592-3.9594%201.4007-6.4238%202.166a25.744%2025.744%200%200%200%200.9316-6.4668%2011.768%2011.768%200%200%200%203.2109-2.1602%2011.768%2011.768%200%200%200%200.4102-16.639%2011.768%2011.768%200%200%200-7.1426-3.5625c3.3442-14.943%207.9755-33.836%2013.752-53.512%2012.975-44.194%2025.1-82.91%2047.244-119.77%204.4404-4.1985%207.0591-5.507%2011.496-5.7441%203.0988-0.16565%203.6667-0.0467%206.3164%201.3125l2.9121%201.4922%204.3965-1.9336c8.5258-3.7518%2015.325-8.275%2020.072-13.35%201.4323-1.5312%202.4365-2.581%202.957-3.3047l-0.018%200.0801%200.4727-0.58398c0.829-1.0224%202.9652-4.7328%203.7031-6.4316%201.5574-3.5855%202.7037-8.1474%203.3457-13.318%200.3927-3.1636%200.4396-29.353%200.055-30.404-0.7819-2.1329-4.028-2.3743-5.3672-0.39844-0.42%200.61976-0.4518%201.4334-0.5879%2015.262-0.1517%2015.417-0.2428%2016.835-1.373%2021.262-0.9239%203.6186-2.697%207.7694-3.9942%209.3555l-0.4765%200.58398%200.072-27.502c0.072-27.468%200.071-27.504-0.4101-28.148-0.8281-1.1096-1.5838-1.5312-2.7442-1.5312-1.3976%200-2.3951%200.60519-2.9492%201.7871-0.423%200.90237-0.446%202.1687-0.5449%2031.672-0.046%2013.951-0.059%2025.081-0.033%2027.994v0.95312c-0.01%202.1564-0.077%202.2722-2.5293%203.9746-1.3888%200.96406-2.7541%201.752-3.0332%201.752-0.2083%200-0.3569-0.59103-0.4375-1.6797%200.098-3.1358%200.238-18.511%200.332-37.264%200.1917-38.27%200.1857-38.993-0.2578-39.848-0.5848-1.1271-1.6871-1.7681-3.0117-1.748-2.0621%200.0312-3.0184%201.259-3.211%204.1211-0.1911%202.8418-0.2972%2062.761-0.1523%2070.523l-0.016%200.11719c-0.1635%201.1927-0.2969%203.904-0.2969%206.0254v3.8574l-1.8105%200.72266c-0.9952%200.39816-2.2574%200.60802-2.8047%200.46484-0.9552-0.24975-0.9942-0.52242-0.9942-6.75v-6.4902h-0.014c0.046-5.2244%200.104-13.262%200.164-22.922%200.2077-33.437%200.2013-34.673-0.2148-35.51-1.1982-2.4106-4.4318-2.5393-5.8282-0.23242-0.431%200.71227-0.451%201.7542-0.5898%2030.418-0.079%2016.325-0.1584%2031.859-0.1758%2034.52l-0.031%204.8379-2.6875%200.168%200.2715%200.01c-2.6585%200.33347-6.7387%201.862-9.418%203.5938-39.676%2045.632-52.502%20118.41-69.305%20182.21a25.744%2025.744%200%200%200-15.772-4.4258l1.832-6.2109a11.768%2011.768%200%200%200%201.6485-5.5898l7.5137-25.477c11.259-48.766%2034.617-101.87%2038.383-147.16%200.4557-5.8712%200.7861-7.5995-0.2207-8.082%200.2835-0.0541%200.4809-0.11892%200.5371-0.19532%200.4971-0.67681%200.4304-11.387-0.127-20.332-0.9294-14.915-3.1655-26.61-6.3183-33.059-1.3458-2.7523-2.1306-3.722-4.2481-5.2383-1.429-1.0233-3.5277-2.2164-4.664-2.6504-1.4968-0.57164-2.0038-0.99532-1.8399-1.5391%206.9283-22.975%2021.295-72.6%2021.295-73.557%200-2.9633-4.1261-4.7333-6.5175-2.7969-0.7972%200.64549-3.1912%208.2043-11.287%2035.641-5.6514%2019.152-10.697%2036.241-11.213%2037.977-0.7933%202.6696-1.0958%203.1522-1.9688%203.1406-0.5676-8e-3%20-1.71-0.63024-2.5371-1.3828l-1.5039-1.3672%2012.84-43.545c7.0614-23.95%2012.838-44.163%2012.838-44.916%200-1.8385-1.9797-3.6621-3.9765-3.6621-3.138%200-2.8215-0.86584-15.604%2042.605-6.5273%2022.199-12.101%2040.947-12.387%2041.662l-0.5176%201.3008-2.0312-2.6074c-1.4729-1.8911-1.9605-2.8924-1.7715-3.6387%200.1434-0.56603%204.4754-15.308%209.627-32.76%205.1515-17.452%209.3672-32.45%209.3672-33.326%200-2.05-1.7468-3.8867-3.6934-3.8867-3.2243%200-3.1759-0.11719-11.762%2028.98-4.3617%2014.782-8.158%2027.707-8.4356%2028.725-0.456%201.6716-0.5532%201.7623-1.0215%200.93555-0.2849-0.50313-0.6043-3.4385-0.7089-6.5234-0.2756-8.1234-0.047-9.1943%207.0957-33.109%201.6749-5.6081%202.5273-9.2178%202.3457-9.9414-0.3583-1.4277-2.304-2.9902-3.7227-2.9902-2.2096%200-3.2806%201.7501-5.2832%208.6465-1.0452%203.5991-2.8485%209.6552-4.0098%2013.457-4.3362%2014.197-5.2194%2023.236-3.1152%2031.883%202.498%2010.265%209.7638%2020.753%2020.789%2030.004%204.625%203.8805%203.7089%203.6302%209.7558%202.6621%204.4462-0.71182%2010.075%202.1978%2011.881%206.1426%203.1801%206.9462%204.4105%2015.958%204.707%2034.441l0.2363%2014.672h-0.2109l-0.3105%203.8574c-1.0199%2012.638-3.3064%2027.518-6.1016%2039.701-11.486%2038.552-24.259%2078.082-33.006%20107.75-2.1349%207.2454-3.5717%2012.054-5.5234%2018.652a11.768%2011.768%200%200%200-13.445%201.9531%2011.768%2011.768%200%200%200-3.418%206.2422%2025.744%2025.744%200%200%200-7.2812-0.95117c-0.1252-2.975-0.3588-5.743-0.7207-8.2285-1.7353-11.917-6.3988-21.144-12.842-25.412-1.1754-0.77854-2.3569-1.4888-2.625-1.5781-0.2682-0.0895%207.2186-15.83%2016.637-34.98s17.125-35.133%2017.125-35.516c0-1.0854-1.3794-2.789-2.6484-3.2715-2.714-1.0319-2.4975-1.4037-21.045%2036.314-15.698%2031.923-17.556%2035.478-18.611%2035.611-1.1017%200.1393-2.8369-1.3345-4.1133-3.4941-0.247-0.41789%206.5416-14.712%2019.748-41.582%2012.436-25.302%2020.125-41.462%2020.125-42.297%200-2.9031-3.7687-4.3479-5.6543-2.168-0.5004%200.57838-9.4926%2018.51-19.982%2039.848-10.49%2021.338-19.253%2038.764-19.475%2038.727-0.2215-0.0376-1.2067-1.5285-2.1875-3.3125l-1.7832-3.2441%2015.428-31.383c8.4843-17.26%2015.426-31.587%2015.426-31.838%200-1.17-1.1802-2.8263-2.3633-3.3164-2.9864-1.237-2.7712-1.5874-17.478%2028.395-7.4687%2015.226-13.737%2027.689-13.93%2027.695-0.1928%206e-3%20-0.3496-2.1442-0.3477-4.7793%200.01-8.7511%201.5655-13.316%2010.977-32.127%203.3869-6.7697%205.8476-12.247%205.8476-13.02%200-2.4281-3.2897-3.9997-4.9316-2.3555-1.1194%201.1209-13.551%2026.237-15.141%2030.59-3.9994%2010.951-4.2934%2020.276-0.9492%2030.117%202.3015%206.7732%208.349%2016.654%2014.129%2023.086l2.4746%202.7539%203.9629%200.0684c4.7659%200.0816%207.0698%201.086%2010.309%204.4942%204.8955%205.1516%207.6254%2014.387%208.1562%2027.098a25.744%2025.744%200%200%200-3.8867%201.4336%2011.768%2011.768%200%200%200-1.4375-1.8496%2011.768%2011.768%200%200%200-16.639-0.41016%2011.768%2011.768%200%200%200-0.4101%2016.637%2011.768%2011.768%200%200%200%204.205%202.8203%2025.744%2025.744%200%200%200-0.5859%203.457%2054.812%2054.812%200%200%200-0.4727%200.15235%2025.744%2025.744%200%200%200-8.916-4.332%2011.768%2011.768%200%200%200-3.0547-6.0469%2011.768%2011.768%200%200%200-16.637-0.41016%2011.768%2011.768%200%200%200-3.5996%207.5332%2011.768%2011.768%200%200%200-15.062%200.96875%2011.768%2011.768%200%200%200-0.4121%2016.637%2011.768%2011.768%200%200%200%206.5879%203.4824%2025.744%2025.744%200%200%200%200.4121%207.998%2025.744%2025.744%200%200%200-11.137%202.5801%2011.768%2011.768%200%200%200-15.727%200.4336%2011.768%2011.768%200%200%200-2.9043%204.4121%2014.936%2014.936%200%200%200-1.6992-2.168%2014.936%2014.936%200%200%200-21.117-0.52149%2014.936%2014.936%200%200%200-4.3125%207.793%2025.744%2025.744%200%200%200-6.7031-1.5449c-9.5402-20.115-19.522-35.393-30.996-47.518l-4.3359-4.582%202.248-7.8047c12.344-42.837%2028.031-74.863%2044.473-90.801%209.2913-9.0068%2016.735-12.592%2026.148-12.592%204.7512%200%208.8956%201.0368%2012.104%203.0274%204.4918%202.7873%204.4084%202.7785%209.2227%200.85156%209.7099-3.8863%2022.866-11.156%2030.695-16.961%2020.287-15.042%2029.776-32.003%2032.494-58.084l0.2813-2.6875h-0.1446l0.2246-5.3965c0.1287-3.085%200.1554-15.794%200.061-28.24l-0.1719-22.631-1.0918-1.0898c-1.429-1.4291-3.5106-1.4146-5.1972%200.0371l-1.3106%201.1289v28.215%2028.213h0.041c-0.2917%200.123-0.3719%200.30701-0.375%200.58203-0.023%202.0633-1.4224%2011.146-2.2617%2014.672-2.0297%208.5263-5.7316%2016.605-10.553%2023.033l-2.834%203.7793-0.1231-21.15-0.121-21.15h-0.2305c0.064-2.9861%200.1559-17.932%200.2168-36.016%200.092-27.234-0.02-37.509-0.4141-38.467-0.5418-1.3154-2.5233-2.666-3.9121-2.666-1.3337%200-3.3107%201.3029-3.8828%202.5586-0.4177%200.91695-0.5586%2010.461-0.5586%2037.896v36.67h4.207c0.5945%200%201.1012%207e-3%201.5625%200.0215h-1.4238-4.4355v25.617%2025.617l-3.1543%202.3906c-3.0643%202.3231-11.951%208.0742-12.477%208.0742-0.1434%200-0.2617-13.882-0.2617-30.85v-30.85h-0.1426l0.1211-48.867c0.09-36.203-0.019-49.422-0.416-50.387-0.5721-1.3896-2.542-2.666-4.1153-2.666-0.5229%200-1.6389%200.61514-2.4785%201.3652l-1.5254%201.3633-0.123%2049.566-0.1231%2049.568%201.8653%200.0566h-1.9434v33.305%2033.305l-4.9082%202.1934-4.9082%202.1953-3.0371-1.4199-3.0391-1.4219v-34.078-33.869l0.094%206e-3v-37.252-37.25l-1.0508-1.2109c-0.6171-0.7103-1.7492-1.3209-2.7402-1.4785-1.4254-0.22683-1.9351-0.0479-3.2715%201.1465l-1.584%201.4141-0.01%2070.268c0%2018.243%200.011%2031.094%200.031%2038.199l-0.1172%2031.93-4.3203%200.16992c-10.57%200.41318-20.409%205.2464-30.332%2014.902-2.6688%202.5968-4.8484%204.6168-4.8438%204.4883%200.01-0.12854%200.5162-2.9685%201.1367-6.3105%203.5822-19.291%205.0875-34.169%205.1055-50.48%200.013-12.341-0.5219-19.152-2.0781-26.408l-0.4668-2.1699c0.078-6e-3%200.1308-9e-3%200.1308-0.0137%200-1.0108-3.3772-10.834-4.6914-13.645-3.8228-8.1739-9.7418-15.008-16.053-18.537-1.7013-0.95145-3.0907-1.8703-3.0879-2.041%200-0.17068%2014.214-26.497%2031.582-58.504%2017.368-32.007%2031.695-58.868%2031.838-59.691%200.2139-1.2345%200.01-1.748-1.166-2.9219-1.7401-1.7402-3.7321-1.8753-5.4414-0.3711-0.6573%200.57845-15.609%2027.647-33.225%2060.152-17.616%2032.505-32.076%2059.145-32.135%2059.201-0.059%200.0567-1.526-0.0118-3.2617-0.15234l-3.1562-0.25391-3.0547-3.9922c-1.9501-2.5474-2.9548-4.2569-2.7754-4.7246%200.1547-0.403%2016.937-31.443%2037.293-68.979%2028.197-51.992%2037.048-68.691%2037.168-70.115%200.1281-1.5268-0.067-2.0804-1.0625-3.0156-0.8248-0.77485-1.851-1.1621-2.8555-1.1621zm10.084%20188.51%202.4903%200.0898h-2.4903v-0.0898zm-1161.6%20205.02c1.2451%202.6207%202.6143%205.2134%204.1191%207.7793-1.5053-2.5658-2.8743-5.1586-4.1191-7.7793zm1307.1%2076.449a18.572%2018.572%200%200%200%201.5332%2010.16%208.4901%208.4901%200%200%200-1.3321%201.0371%208.4901%208.4901%200%200%200-0.2968%2012.002%208.4901%208.4901%200%200%200%201.7871%201.4297c-5.8659-0.47735-11.868-0.92641-17.975-1.3516a14.936%2014.936%200%200%200-2.877-4.3848%2014.936%2014.936%200%200%200-4.9277-3.4082%2025.744%2025.744%200%200%200%2017.047-7.0586%2025.744%2025.744%200%200%200%205.8417-8.4082%2014.936%2014.936%200%200%200%201.1993-0.0176zm13.941%2020.463a18.572%2018.572%200%200%200%202.4941%200.42187%2039.543%2039.543%200%200%200%200.1094%200.3418%2018.572%2018.572%200%200%200-2.4766%204.4648c-1.6342-0.14758-3.2878-0.29013-4.9433-0.43359a8.4901%208.4901%200%200%200%202.7832-1.7617%208.4901%208.4901%200%200%200%202.0332-3.0332zm-1462.1%20156.61%201.584%200.0566h-1.584v-0.0566zm845.54%2083.957c1.9589%200.84284%204.5146%201.6659%207.5839%202.4707v6.5547%204.8613l-7.6269-0.86718c0.017-2.8641%200.034-3.8556%200.047-7.7441%200.01-2.4696%200-3.3771%200-5.2754zm11.189%203.3594c8.7103%201.9849%2020.735%203.8329%2035.525%205.498%200.1225%201.8282%200.2045%203.9052%200.2441%206.3789l0.051%203.125-35.772-4.0605c0-2.3372%200-5.122-0.025-7.916l-0.023-3.0254zm39.041%205.877c6.9487%200.74758%2014.429%201.4579%2022.459%202.123-0.022%204.5374-0.038%207.6182-0.051%209.9121l-21.922-2.4883c-0.011-1.8149-0.082-4.1152-0.2128-6.2109-0.072-1.1608-0.1681-2.2631-0.2735-3.3359zm25.564%202.3711c0.8933%200.0716%201.7801%200.14429%202.6855%200.21484-2e-4%204.1012%200%208.6186%200.014%2010.115l-2.7715-0.31446c0.021-2.3879%200.046-5.8251%200.072-10.016zm5.7675%200.45508c0.8803%200.0664%201.7965%200.12793%202.6876%200.19335-0.012%204.6464-0.02%209.2179-0.012%2010.334l-2.7656-0.31445c0.03-2.2283%200.061-5.613%200.09-10.213zm5.7833%200.41796c0.8633%200.0614%201.6953%200.12507%202.5683%200.18555-0.083%201.5032-0.2229%202.2763-0.5039%203.377-0.4313%201.6891-1.2578%203.6268-1.8633%204.3672l-0.2226%200.27344%200.021-8.2031zm5.4804%200.38086c44.852%203.0187%20101.88%204.8242%20164.16%204.8242%203.1898%200%206.3482-0.0102%209.5097-0.0195-2.0199%208.2958-4.1581%2016.591-6.4277%2024.887l-171.02-19.418c0.085-0.1013%200.1986-0.22432%200.2578-0.30664l-0.01%200.0371%200.2207-0.27344c0.3869-0.47721%201.384-2.209%201.7285-3.002%200.7269-1.6737%201.2629-3.8031%201.5625-6.2168%200.01-0.0682%200.012-0.39996%200.019-0.51172zm323.46%20294.65h7.1094l-0.5723%201.9434-1.6308%200.6484c-1.8927%200.752-6.7355%202.179-7.084%202.0879-0.035-0.01%200.1464-1.1867%200.5312-3.2481a20.386%2020.383%2050.991%200%200%201.6465-1.4316zm-81.016%2013.947a20.386%2020.383%2050.991%200%200%201.1797%203.8613c-0.3981-0.9918-0.7887-1.9457-1.166-2.832-0.1198-0.2814-0.2414-0.5368-0.3614-0.8145a20.386%2020.383%2050.991%200%200%200.3477-0.2148zm1.2441%204.0273a20.386%2020.383%2050.991%200%200%209.5332%2010.174%2020.386%2020.383%2050.991%200%200%206.4805%201.9922c-1.6059%202.179-3.2233%204.4618-4.8516%206.8731-1.5801%202.34-2.9409%204.2782-3.0254%204.3066-0.085%200.028-0.4903-1.1013-0.9003-2.5098-1.8178-6.2418-4.6806-14.45-7.2364-20.836z%22%20fill%3D%22%23b09765%22%20filter%3D%22url(%23a)%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%2F%3E%3Cg%20transform%3D%22translate(2260)%22%3E%3Crect%20x%3D%22-2260%22%20width%3D%221920%22%20height%3D%221200%22%20fill-opacity%3D%220%22%2F%3E%3Cpath%20transform%3D%22translate(-2260)%22%20d%3D%22m1468.4%20161.48c-1.0043%200-1.987%200.38726-2.7226%201.1621-0.5979%200.62982-17.025%2030.593-36.504%2066.584-19.479%2035.991-35.78%2066.035-36.225%2066.764l-0.8086%201.3262-2.1485-3.6621c-2.5835-4.4072-5.9335-11.461-5.9335-12.49%200-0.40834%2012.635-24.04%2028.078-52.516%2015.443-28.475%2028.19-52.326%2028.326-53.002%200.7695-3.8288-4.4274-6.3056-6.9336-3.3047-0.6012%200.72004-12.749%2022.814-26.994%2049.098-14.245%2026.284-26.059%2047.623-26.256%2047.42-0.5797-0.59877-1.3623-7.3593-1.3594-11.738%200.01-7.4584%202.0632-17.255%205.3711-25.557%201.9847-4.9809%207.2484-15.327%2013.08-25.709%206.6458-11.831%2010.483-18.841%2012.338-22.539%202.1173-4.2219%201.8893-6.4635-0.7734-7.5664-2.488-1.0306-3.4657-0.16916-6.6777%205.8867-1.6108%203.0369-6.2325%2011.411-10.27%2018.609-11.107%2019.804-14.671%2027.364-17.434%2036.971-5.651%2019.655-2.9776%2038.409%208.3829%2058.797%204.7373%208.5019%2015.886%2024.06%2017.754%2024.777%200.4054%200.1556%202.5606%200.28869%204.789%200.29492%207.6599%200.0216%2012.388%201.9906%2017.887%207.4492%204.4722%204.4392%207.2797%209.2009%209.6133%2016.301l1.793%205.4531h0.061l0.2598%201.541c0.1625%200.96406%200.6017%203.4694%200.9766%205.5684%203.4074%2019.078%201.1773%2048.909-6.3047%2084.344-1.7549%208.311-2.1015%209.394-4.1738%2013.037-10.436%2018.347-19.083%2039.522-26.912%2065.906-1.4875%205.0131-2.7462%209.173-2.7988%209.2441-0.052%200.0711-1.2295-0.64232-2.6152-1.5859-7.6628-5.2185-17.7-8.5516-26.357-8.75l-5.1426-0.11719-0.1172-84.699-0.1191-84.699h-0.1309l0.1269-2.9297c0.1602-3.6702-0.6161-5.5948-2.6914-6.668-1.7354-0.89741-3.4306-0.90177-5.1523-0.0117-2.235%201.1558-2.8105%202.4174-2.8105%206.168v3.3867l2.1191%200.0527h-2.209v85.98%2085.979l-3.6894%201.8144-3.6895%201.8144-6.3594-2.8047-6.3593-2.8047v-84.988-84.99h-0.1426l0.1211-18.252c0.1315-19.639%200.072-20.261-2.1192-21.984-1.4675-1.1543-5.0501-1.2389-6.5957-0.15625-2.2891%201.6032-2.3926%202.5526-2.3926%2022.111v18.23l2.1836%200.0508h-2.2734v82.035%2082.033l-5.207-3.2148c-2.8644-1.7676-7.282-4.7514-9.8164-6.6309l-4.6094-3.416v-75.402-75.404h-0.1231l0.1329-1.4238c0.4519-4.8568-1.4512-8.2704-4.8672-8.7285-4.0517-0.5433-6.2696%201.9528-6.2696%207.0547v3.0469l2.1817%200.0508h-2.2715l-0.018%2069.764-0.019%2069.762-1.6211-1.8691c-6.0878-7.0206-11.723-18.266-14.69-29.307-3.4742-12.93-4.1866-24.548-3.8613-63.057%200.1706-20.205%200.087-27.346-0.334-28.621-1.1936-3.6167-5.3922-4.8325-7.9297-2.2949l-1.289%201.291-0.3164%2030.377c-0.3908%2037.594%200.096%2046.694%203.2617%2060.939%206.1251%2027.567%2023.449%2048.746%2054.168%2066.217%209.5026%205.4045%2025.813%2012.832%2028.176%2012.832%200.6963%200%202.2558-0.7028%203.4649-1.5625%205.4948-3.9067%2011.993-5.6858%2019.299-5.2832%205.8469%200.32214%209.0352%201.1748%2014.957%204.002%2015.839%207.5622%2030.574%2025.247%2044.818%2053.793%200.2242%200.44932%200.4447%200.9119%200.668%201.3652a25.744%2025.744%200%200%200-8.1856%204.502%2014.936%2014.936%200%200%200-8.4394-1.4707%2011.768%2011.768%200%200%200-1.4278-1.8359%2011.768%2011.768%200%200%200-16.637-0.41016%2011.768%2011.768%200%200%200-2.8047%204.168%2025.744%2025.744%200%200%200-16.736%201.1426%2025.744%2025.744%200%200%200-5.9531-3.1543%2011.768%2011.768%200%200%200-0.9668-3.748%2011.768%2011.768%200%200%200-15.551-5.9277%2011.768%2011.768%200%200%200-6.8203%2012.459%2025.744%2025.744%200%200%200-3.1113%202.5117%2010.775%2010.775%200%200%200-8.9883-4.8418%2010.775%2010.775%200%200%200-6.1289%201.9277%2018.572%2018.572%200%200%200-16.332-10.512%2018.572%2018.572%200%200%200-2.9902-3.832%208.4901%208.4901%200%200%200%200.4688-2.7539%208.4901%208.4901%200%200%200-8.4903-8.4902%208.4901%208.4901%200%200%200-8.164%206.1934%2018.572%2018.572%200%200%200-12.23%207.957%2018.572%2018.572%200%200%200-1.2695-0.44921%208.4901%208.4901%200%200%200%200.58-3.0606%208.4901%208.4901%200%200%200-8.4902-8.4902%208.4901%208.4901%200%200%200-8.4902%208.4902%208.4901%208.4901%200%200%200%201.5625%204.8906%2018.572%2018.572%200%200%200-8.0606%209.9102%208.4901%208.4901%200%200%200-1.6816-0.16797%208.4901%208.4901%200%200%200-8.4903%208.4902%208.4901%208.4901%200%200%200%208.4903%208.4902%208.4901%208.4901%200%200%200%203.5644-0.79688%2018.572%2018.572%200%200%200%201.5157%202.0274%2039.543%2039.543%200%200%200-0.1563%200.32422%2018.572%2018.572%200%200%200-6.6992%202.502%208.4901%208.4901%200%200%200-4.6758-1.4102%208.4901%208.4901%200%200%200-8.4902%208.4902%208.4901%208.4901%200%200%200%202.1465%205.627%208.4901%208.4901%200%200%200-6.9864%208.3535%208.4901%208.4901%200%200%200%208.4903%208.4902%208.4901%208.4901%200%200%200%205.0957-1.7109%2018.572%2018.572%200%200%200%204.3847%203.7617%2018.572%2018.572%200%200%200-4.1914%207.1035%208.4901%208.4901%200%200%200-7.5957%208.4336%208.4901%208.4901%200%200%200%200.209%201.8262c-53.539%207.7239-86.391%2018.186-86.391%2029.746%200%2016.051%2063.258%2029.988%20157.47%2037.404%200.1136%2010.601-0.039%2021.202-0.4531%2031.803-75.713%201.723-133.11%2010.718-133.11%2021.629%200%2010.762%2055.845%2019.661%20130.03%2021.555-2.0947%2020.267-5.0843%2040.534-8.8847%2060.801-6.2675-0.0372-12.574-0.0644-18.959-0.0644-145.07%200-261.86%209.7814-261.86%2021.932s116.79%2021.932%20261.86%2021.932c3.1898%200%206.3482-0.0102%209.5097-0.0195-2.0199%208.2958-4.1581%2016.591-6.4277%2024.887l-317.98-36.104c10.459-35.568%2025.637-66.859%2043.613-85.297%2061.834-2.0786%20104.32-6.4182%20104.32-11.477%200-7.0871-83.189-12.793-186.52-12.793-38.821%200-74.792%200.80425-104.58%202.1855%206.7778-8.9687%2013.995-16.777%2021.578-23.115%2077.043-1.5723%20132.95-6.4458%20132.95-12.254%200-5.5881-51.814-10.304-124.35-12.055a6.748%206.748%200%200%200-3.0801-2.8203%2013.82%2013.82%200%200%200%200.25585-2.6191%2013.82%2013.82%200%200%200-0.01-0.30468%206.748%206.748%200%200%200%204.7246-6.4297%206.748%206.748%200%200%200-6.748-6.748%206.748%206.748%200%200%200-2.6504%200.55078%2011.631%2011.631%200%200%200%203-7.7773%2011.631%2011.631%200%200%200-0.93164-4.5312%206.748%206.748%200%200%200%201.9434-4.7285%206.748%206.748%200%200%200-6.748-6.748%206.748%206.748%200%200%200-3.8398%201.207%2011.631%2011.631%200%200%200-10.229-6.584%2011.631%2011.631%200%200%200-1.8711-2.4004%205.3168%205.3168%200%200%200%200.29297-1.7226%205.3168%205.3168%200%200%200-5.3164-5.3164%205.3168%205.3168%200%200%200-5.1133%203.8789%2011.631%2011.631%200%200%200-7.6582%204.9824%2011.631%2011.631%200%200%200-0.79492-0.2832%205.3168%205.3168%200%200%200%200.36328-1.916%205.3168%205.3168%200%200%200-5.3184-5.3164%205.3168%205.3168%200%200%200-5.3164%205.3164%205.3168%205.3168%200%200%200%200.97852%203.0625%2011.631%2011.631%200%200%200-5.0469%206.207%205.3168%205.3168%200%200%200-1.0527-0.10547%205.3168%205.3168%200%200%200-5.3164%205.3164%205.3168%205.3168%200%200%200%205.3164%205.3164%205.3168%205.3168%200%200%200%202.2324-0.49804%2011.631%2011.631%200%200%200%200.94922%201.2695%2024.764%2024.764%200%200%200-0.0996%200.20312%2011.631%2011.631%200%200%200-4.1934%201.5664%205.3168%205.3168%200%200%200-2.9297-0.88281%205.3168%205.3168%200%200%200-5.3164%205.3164%205.3168%205.3168%200%200%200%201.3438%203.5234%205.3168%205.3168%200%200%200-4.375%205.2324%205.3168%205.3168%200%200%200%205.3164%205.3164%205.3168%205.3168%200%200%200%203.1914-1.0703%2011.631%2011.631%200%200%200%202.7461%202.3555%2011.631%2011.631%200%200%200-2.625%204.4473%205.3168%205.3168%200%200%200-4.2422%203.0176c-68.404%200.14805-127.34%202.784-157.98%206.6523h-73.777c9.2704-24.145%2025.669-46.143%2045.775-56.738%2061.706-4.1721%20103.99-12.885%20103.99-23.01%200-4.4919-8.3389-8.7052-22.984-12.369%201.6544-23.714%200.23955-30.95%206.3496-33.725%206.8926-3.1294%2011.348%200.77734%2011.348%200.77734%200.4888%200.40191%201.158%200.50393%201.7441%200.26562%2017.083-6.9464%2024.194-15.58%2026.777-25.279%202.5836-9.6995%200.90305-20.109%201.4062-31.191%200.058-0.97013-0.69657-1.7967-1.668-1.8262-0.9512-0.0289-1.7477%200.71881-1.7773%201.6699-0.5225%2011.506%201.0286%2021.745-1.293%2030.461-0.054%200.20142-0.11037%200.40137-0.16797%200.60156v-33.426c0-1.0762-0.86716-1.9434-1.9434-1.9434s-1.9414%200.86719-1.9414%201.9434v41.539c-0.4135%200.57602-0.86014%201.1459-1.3398%201.7109v-48.475c0-1.0762-0.86531-1.9414-1.9414-1.9414-1.0762%200-1.9434%200.86523-1.9434%201.9414v52.285c-0.4284%200.35542-0.87369%200.70953-1.3379%201.0605v-58.568c0-1.0762-0.86716-1.9434-1.9434-1.9434s-1.9414%200.86719-1.9414%201.9434v61.191c-0.434%200.26307-0.88145%200.52458-1.3398%200.78516v-67.201c0-1.0762-0.86706-1.9434-1.9434-1.9434-1.0761%200-1.9414%200.86719-1.9414%201.9434v69.234c-0.437%200.21114-0.88425%200.42135-1.3398%200.63086v-64.641c0-1.0762-0.8653-1.9434-1.9414-1.9434-1.0762%200-1.9434%200.86719-1.9434%201.9434v65.355c-0.3928-0.1923-0.83979-0.38883-1.3379-0.57617v-59.557c0-1.0762-0.86716-1.9434-1.9434-1.9434s-1.9414%200.86719-1.9414%201.9434v58.654c-0.4311-0.0404-0.87954-0.0599-1.3398-0.0605v-53.369c0-1.0762-0.86531-1.9434-1.9414-1.9434-1.0762%200-1.9434%200.86719-1.9434%201.9434v53.885c-0.8305%200.22279-1.6867%200.5244-2.5664%200.92382-7.5409%203.4238-6.5925%2011.54-8.2871%2036.057-28.698-6.5989-78.375-11.251-136.56-12.254%2023.747-65.331%2048.199-90.567%2066.369-98.816%2022.082-10.026%2036.359%202.4902%2036.359%202.4902a5.5234%205.5234%200%200%200%205.5879%200.84961c54.73-22.255%2077.51-49.909%2085.787-80.984s2.8917-64.425%204.5039-99.932a5.5234%205.5234%200%200%200-5.3457-5.8496%205.5234%205.5234%200%200%200-5.6875%205.3477c-1.6738%2036.861%203.2935%2069.667-4.1445%2097.592-0.1718%200.64531-0.35641%201.2864-0.54101%201.9277v-107.09c0-3.4478-2.7749-6.2246-6.2227-6.2246s-6.2226%202.7768-6.2226%206.2246v133.08c-1.3247%201.8454-2.7541%203.6741-4.291%205.4844v-155.3c0-3.4478-2.7749-6.2246-6.2227-6.2246s-6.2226%202.7768-6.2226%206.2246v167.51c-1.3727%201.1387-2.802%202.27-4.2891%203.3945v-187.64c0-3.4478-2.7768-6.2227-6.2246-6.2227-3.4479%200-6.2227%202.7749-6.2227%206.2227v196.04c-1.3905%200.84284-2.8203%201.6808-4.2891%202.5156v-215.3c0-3.4478-2.7768-6.2227-6.2246-6.2227-3.4479%200-6.2227%202.7748-6.2227%206.2227v221.81c-1.4%200.67645-2.8296%201.3503-4.2891%202.0215v-207.1c0-3.4478-2.7749-6.2227-6.2227-6.2227-3.4479%200-6.2226%202.7749-6.2226%206.2227v209.39c-1.2585-0.6161-2.6954-1.2475-4.291-1.8477v-190.8c0-3.4478-2.7749-6.2246-6.2227-6.2246s-6.2226%202.7768-6.2226%206.2246v187.92c-1.3811-0.12944-2.8143-0.19508-4.2891-0.19727v-170.98c0-3.4478-2.7768-6.2246-6.2246-6.2246s-6.2227%202.7768-6.2227%206.2246v172.64c-2.6608%200.7138-5.4062%201.6774-8.2246%202.957-22.739%2010.324-48.893%2039.046-73.527%20108.72-3.9356-0.0338-7.893-0.0566-11.893-0.0566-10.465%200-20.709%200.12404-30.695%200.34961-3.06-7.296-7.2194-12.694-13.076-16.809%201.0354-15.832%202.786-22.648%2010.268-26.045%2013.594-6.1718%2022.381%201.5332%2022.381%201.5332%200.9638%200.79265%202.2835%200.99342%203.4394%200.52344%2033.691-13.7%2047.715-30.724%2052.811-49.854s1.779-39.66%202.7715-61.518c0.114-1.9133-1.3752-3.5414-3.291-3.5996-1.8759-0.057-3.4415%201.4152-3.5%203.291-1.0304%2022.691%202.0279%2042.886-2.5508%2060.076-0.1058%200.39725-0.22038%200.7927-0.33398%201.1875v-65.924c0-2.1224-1.7077-3.832-3.8301-3.832s-3.832%201.7096-3.832%203.832v81.922c-0.8155%201.136-1.6945%202.2606-2.6406%203.375v-95.6c0-2.1224-1.7077-3.832-3.8301-3.832s-3.8301%201.7096-3.8301%203.832v103.12c-0.845%200.70095-1.7251%201.3976-2.6406%202.0898v-115.51c0-2.1224-1.7095-3.832-3.832-3.832-2.1224%200-3.8301%201.7096-3.8301%203.832v120.68c-0.856%200.51884-1.7364%201.0349-2.6406%201.5488v-132.53c0-2.1224-1.7095-3.8301-3.832-3.8301-2.1224%200-3.8301%201.7076-3.8301%203.8301v136.54c-0.8618%200.41641-1.7422%200.83095-2.6406%201.2441v-127.49c0-2.1224-1.7095-3.832-3.832-3.832-2.1224%200-3.8301%201.7096-3.8301%203.832v128.9c-0.7747-0.37926-1.6583-0.76725-2.6406-1.1367v-117.46c0-2.1224-1.7077-3.832-3.8301-3.832-2.1225%200-3.832%201.7096-3.832%203.832v115.68c-0.8502-0.0797-1.7327-0.11974-2.6406-0.12109v-105.25c0-2.1224-1.7077-3.832-3.8301-3.832-2.1225%200-3.832%201.7096-3.832%203.832v106.27c-1.638%200.4394-3.3275%201.0326-5.0625%201.8203-9.214%204.1834-11.987%2011.936-13.564%2028.689-0.35123-0.16918-0.69974-0.3401-1.0606-0.50391-3.5453-1.6097-6.9986-2.8228-10.346-3.7207v-217.16c0-4.337-3.4909-7.8301-7.8281-7.8301-4.3369%200-7.8281%203.4931-7.8281%207.8301v215.08c-1.8552%203e-3%20-3.6572%200.0852-5.3945%200.24804v-236.38c0-4.337-3.491-7.8281-7.8281-7.8281-4.337%200-7.8281%203.4911-7.8281%207.8281v240.01c-2.0072%200.75498-3.8135%201.5492-5.3965%202.3242v-263.39c0-4.337-3.4911-7.8281-7.8281-7.8281-4.3371%200-7.8281%203.4911-7.8281%207.8281v260.51c-1.8358-0.84433-3.6355-1.6901-5.3965-2.541v-279.02c0-4.337-3.4912-7.8281-7.8281-7.8281-4.3372%200-7.8281%203.4911-7.8281%207.8281v270.82c-1.8477-1.0502-3.6454-2.1038-5.3945-3.1641v-246.61c0-4.337-3.4911-7.8281-7.8281-7.8281-4.3371%200-7.8301%203.4911-7.8301%207.8281v236.04c-1.8708-1.4146-3.6678-2.8372-5.3945-4.2695v-210.71c0-4.337-3.4912-7.8281-7.8281-7.8281-4.337%200-7.8281%203.4911-7.8281%207.8281v195.35c-1.9333-2.2771-3.73-4.577-5.3965-6.8984v-167.4c0-4.337-3.4911-7.8301-7.8281-7.8301s-7.8281%203.4931-7.8281%207.8301v134.71c-0.2321-0.80674-0.46349-1.614-0.67969-2.4258-9.3562-35.126-3.1073-76.392-5.2129-122.76-0.1195-3.833-3.3211-6.845-7.1543-6.7285-3.9148%200.11885-6.9576%203.4478-6.7246%207.3574%202.0281%2044.663-4.7478%2086.618%205.6641%20125.71%2010.412%2039.089%2039.068%2073.877%20107.91%20101.87%202.3622%200.96037%205.0618%200.54941%207.0312-1.0703%200%200%2017.957-15.742%2045.734-3.1309%202.1124%200.95906%203.9989%202.0504%205.6914%203.3027-0.10599%201.782-0.21293%203.6137-0.32422%205.5371-78.21%203.0506-135.2%2012.902-135.2%2024.656%200%2010.684%2047.074%2019.8%20114.38%2023.662l-20.271%2056.086h-186.26c2.2263%2022.164%203.1428%2044.33%202.8359%2066.494l-237.92-27.014v410.46h125.43c-3.034%205.6908-6.1022%2011.382-9.2363%2017.072h764.81v-0.42c-8.3272-0.799-16.431-3.4593-24.24-7.6933h181.1v-0.3731c-7.2063-0.8125-14.19-3.8057-20.869-8.5859h903.01v-192.46l-312.66-35.5c-6.4519-22.161-11.061-47.06-13.238-71.49%20136.86-0.7482%20244.41-10.219%20244.41-21.877%200-8.3935-55.75-15.655-138.04-19.344a14.082%2014.082%200%200%200%203.8964-9.1562%2014.082%2014.082%200%200%200%202.9493-2.2109%206.4374%206.4374%200%200%200%202.08%200.39453%206.4374%206.4374%200%200%200%206.5606-6.3125%206.4374%206.4374%200%200%200-4.5781-6.2793%2014.082%2014.082%200%200%200-5.8536-9.3867%2014.082%2014.082%200%200%200%200.3594-0.95703%206.4374%206.4374%200%200%200%202.3125%200.48438%206.4374%206.4374%200%200%200%206.5586-6.3125%206.4374%206.4374%200%200%200-6.3125-6.5586%206.4374%206.4374%200%200%200-3.7304%201.1133%2014.082%2014.082%200%200%200-7.3946-6.2559%206.4374%206.4374%200%200%200%200.1524-1.2715%206.4374%206.4374%200%200%200-6.3125-6.5606%206.4374%206.4374%200%200%200-6.5606%206.3125%206.4374%206.4374%200%200%200%200.5508%202.7129%2014.082%2014.082%200%200%200-1.5566%201.1211%2029.983%2029.983%200%200%200-0.2442-0.12305%2014.082%2014.082%200%200%200-1.7988-5.1152%206.4374%206.4374%200%200%200%201.1367-3.5254%206.4374%206.4374%200%200%200-6.3125-6.5606%206.4374%206.4374%200%200%200-4.2969%201.5449%206.4374%206.4374%200%200%200-6.2304-5.416%206.4374%206.4374%200%200%200-6.5606%206.3125%206.4374%206.4374%200%200%200%201.2227%203.8887%2014.082%2014.082%200%200%200-2.916%203.2695%2014.082%2014.082%200%200%200-5.3243-3.2832%206.4374%206.4374%200%200%200-6.2832-5.8808%206.4374%206.4374%200%200%200-6.2754%204.5664%206.4374%206.4374%200%200%200-1.5546-0.23047%206.4374%206.4374%200%200%200-6.5606%206.3125%206.4374%206.4374%200%200%200%202.5%205.207%2014.082%2014.082%200%200%200-0.416%203.0898%2014.082%2014.082%200%200%200%206.7832%2012.301%2014.082%2014.082%200%200%200-5.5996%2010.967%2014.082%2014.082%200%200%200%204.9473%2010.98%2016.732%2016.732%200%200%200-3.2461%208.8086c-14.124-0.27502-28.68-0.45703-43.596-0.5332%201.8162-44.657%2012.554-93.602%2028.35-126.17%2094.455-7.4076%20157.91-21.363%20157.91-37.439%200-9.8462-23.828-18.896-63.961-26.137a18.572%2018.572%200%200%200%201.6661-9.1777%2022.067%2022.067%200%200%200%2012.109-5.8438%2022.067%2022.067%200%200%200%204.9746-7.1309%2010.775%2010.775%200%200%200%209.3418-2.7852%2010.775%2010.775%200%200%200%200.377-15.234%2010.775%2010.775%200%200%200-11.338-2.7402%2022.067%2022.067%200%200%200-2.5859-3.3086%2022.067%2022.067%200%200%200-0.3477-0.33985%2010.775%2010.775%200%200%200-1.6133-12.641%2010.775%2010.775%200%200%200-15.234-0.375%2010.775%2010.775%200%200%200-2.4589%203.5527%2018.572%2018.572%200%200%200-5.0918-12.297%2018.572%2018.572%200%200%200-6.0664-4.2148%2010.775%2010.775%200%200%200-2.959-7.6094%2010.775%2010.775%200%200%200-15.234-0.37696%2010.775%2010.775%200%200%200-3.1094%205.623%2018.572%2018.572%200%200%200-19.08%203.6465%2018.572%2018.572%200%200%200-4.8066-0.7168%208.4901%208.4901%200%200%200-1.5586-2.3164%208.4901%208.4901%200%200%200-12.004-0.29687%208.4901%208.4901%200%200%200-1.6445%2010.115%2018.572%2018.572%200%200%200-2.9336%206.0254%2014.936%2014.936%200%200%200-1.8262-2.3496%2014.936%2014.936%200%200%200-7.793-4.3125%2025.744%2025.744%200%200%200-0.5644-19.564c22.566-7.642%2037.704-20.211%2047.527-39.254%205.4132-10.494%208.0518-18.046%2014.779-42.301%202.3531-8.4836%205.1128-17.999%206.1328-21.145%201.3514-4.1672%201.7752-6.1418%201.5625-7.2754-0.22-1.1732%200.1347-2.6403%201.4434-5.9668%205.9418-15.103%2012.579-23.709%2019.408-25.174%202.3514-0.50428%202.8512-0.40783%207.2852%201.4043%201.3943%200.56979%201.7675%200.46271%206.5234-1.8496%202.7749-1.3492%206.3212-3.3637%207.8809-4.4766%204.1711-2.9765%208.8068-8.1094%2010.469-11.592%202.7831-5.8315%203.0036-7.3216%203.2129-21.771%200.1749-12.081%200.1216-13.32-0.6191-14.139-1.5231-1.6829-4.1058-0.79759-4.6289%201.5879-0.1229%200.56049-0.303%206.5936-0.3985%2013.406-0.1783%2012.713-0.4067%2014.463-2.3672%2018.08-0.6512%201.2014-0.7156-0.44165-0.7324-18.461-0.019-19.656-0.1305-21.177-1.6094-22.164-0.9506-0.63479-2.6085-0.36606-3.5508%200.57617-0.9105%200.91039-0.9355%201.5589-0.9355%2024.742v23.805l-1.3574%200.9668c-0.7467%200.53165-1.4836%200.9668-1.6367%200.9668-0.1532%200-0.2793-12.921-0.2793-28.715%200-28.406-0.1141-30.771-1.5469-31.682-0.9505-0.60436-2.7806-0.40203-3.6738%200.40625-0.8118%200.73487-0.8555%202.3504-0.8555%2032.264v31.49l-1.2481%200.47461c-2.6013%200.98902-2.4902%202.1924-2.4902-26.973%200-24.441-0.072-27.052-0.7734-27.826-0.9918-1.0958-3.0688-1.0979-4.0586-6e-3%20-0.6923%200.76491-0.782%203.4969-0.8906%2027.189l-0.1211%2026.34-2.5704%200.5332c-9.2656%201.9165-17.502%2012.086-24.047%2029.689-0.8844%202.3787-2.0136%204.7701-2.5098%205.3164-1.2156%201.3385-3.8969%209.6592-8.9805%2027.871-9.4465%2033.842-14.759%2045.698-25.562%2057.051-3.4971%203.6749-11.197%2010.1-11.609%209.6875-0.08-0.0799%207.5337-26.12%2016.918-57.865%209.3843-31.745%2017.096-58.527%2017.139-59.516%200.064-1.4883-0.1848-2.0318-1.4434-3.1562-1.0512-0.93936-2.0125-1.3574-3.1211-1.3574-3.5786%200-2.2926-3.7118-22.59%2065.145l-18.582%2063.041-3.4961%201.3887c-1.525%200.60592-3.9594%201.4007-6.4238%202.166a25.744%2025.744%200%200%200%200.9316-6.4668%2011.768%2011.768%200%200%200%203.2109-2.1602%2011.768%2011.768%200%200%200%200.4102-16.639%2011.768%2011.768%200%200%200-7.1426-3.5625c3.3442-14.943%207.9755-33.836%2013.752-53.512%2012.975-44.194%2025.1-82.91%2047.244-119.77%204.4404-4.1985%207.0591-5.507%2011.496-5.7441%203.0988-0.16565%203.6667-0.0467%206.3164%201.3125l2.9121%201.4922%204.3965-1.9336c8.5258-3.7518%2015.325-8.275%2020.072-13.35%201.4323-1.5312%202.4365-2.581%202.957-3.3047l-0.018%200.0801%200.4727-0.58398c0.829-1.0224%202.9652-4.7328%203.7031-6.4316%201.5574-3.5855%202.7037-8.1474%203.3457-13.318%200.3927-3.1636%200.4399-29.353%200.055-30.404-0.7819-2.1329-4.028-2.3743-5.3672-0.39844-0.42%200.61976-0.4518%201.4334-0.5879%2015.262-0.1517%2015.417-0.2428%2016.835-1.373%2021.262-0.9239%203.6186-2.697%207.7694-3.9942%209.3555l-0.4765%200.58398%200.072-27.502c0.072-27.468%200.071-27.504-0.4101-28.148-0.8281-1.1096-1.5838-1.5312-2.7442-1.5312-1.3976%200-2.3951%200.60519-2.9492%201.7871-0.423%200.90237-0.446%202.1687-0.5449%2031.672-0.046%2013.951-0.059%2025.081-0.033%2027.994v0.95312c-0.01%202.1564-0.077%202.2722-2.5293%203.9746-1.3888%200.96406-2.7541%201.752-3.0332%201.752-0.2083%200-0.3569-0.59103-0.4375-1.6797%200.098-3.1358%200.238-18.511%200.332-37.264%200.1917-38.27%200.1857-38.993-0.2578-39.848-0.5848-1.1271-1.6871-1.7681-3.0117-1.748-2.0621%200.0312-3.0184%201.259-3.211%204.1211-0.1911%202.8418-0.2972%2062.761-0.1523%2070.523l-0.016%200.11719c-0.1635%201.1927-0.2969%203.904-0.2969%206.0254v3.8574l-1.8105%200.72266c-0.9952%200.39816-2.2574%200.60802-2.8047%200.46484-0.9552-0.24975-0.9942-0.52242-0.9942-6.75v-6.4902h-0.014c0.046-5.2244%200.104-13.262%200.164-22.922%200.2077-33.437%200.2013-34.673-0.2148-35.51-1.1982-2.4106-4.4319-2.5393-5.8282-0.23242-0.431%200.71227-0.451%201.7542-0.5898%2030.418-0.079%2016.325-0.1584%2031.859-0.1758%2034.52l-0.031%204.8379-2.6875%200.168%200.2715%200.01c-2.6585%200.33347-6.7387%201.862-9.418%203.5938-39.676%2045.632-52.502%20118.41-69.305%20182.21a25.744%2025.744%200%200%200-15.772-4.4258l1.832-6.2109a11.768%2011.768%200%200%200%201.6485-5.5898l7.5137-25.477c11.259-48.766%2034.617-101.87%2038.383-147.16%200.4557-5.8712%200.7861-7.5995-0.2207-8.082%200.2835-0.0541%200.4809-0.11892%200.5371-0.19532%200.4971-0.67681%200.4304-11.387-0.127-20.332-0.9294-14.915-3.1655-26.61-6.3183-33.059-1.3458-2.7523-2.1306-3.722-4.2481-5.2383-1.429-1.0233-3.5277-2.2164-4.664-2.6504-1.4968-0.57164-2.0038-0.99532-1.8399-1.5391%206.9283-22.975%2021.295-72.6%2021.295-73.557%200-2.9633-4.1261-4.7333-6.5175-2.7969-0.7972%200.64549-3.1912%208.2043-11.287%2035.641-5.6514%2019.152-10.697%2036.241-11.213%2037.977-0.7933%202.6696-1.0958%203.1522-1.9688%203.1406-0.5676-8e-3%20-1.71-0.63024-2.5371-1.3828l-1.5039-1.3672%2012.84-43.545c7.0614-23.95%2012.838-44.163%2012.838-44.916%200-1.8385-1.9797-3.6621-3.9765-3.6621-3.138%200-2.8215-0.86584-15.604%2042.605-6.5273%2022.199-12.101%2040.947-12.387%2041.662l-0.5176%201.3008-2.0312-2.6074c-1.4729-1.8911-1.9605-2.8924-1.7715-3.6387%200.1434-0.56603%204.4754-15.308%209.627-32.76%205.1515-17.452%209.3672-32.45%209.3672-33.326%200-2.05-1.7468-3.8867-3.6934-3.8867-3.2243%200-3.1759-0.11719-11.762%2028.98-4.3617%2014.782-8.158%2027.707-8.4356%2028.725-0.456%201.6716-0.5532%201.7623-1.0215%200.93555-0.2849-0.50313-0.6043-3.4385-0.7089-6.5234-0.2756-8.1234-0.047-9.1943%207.0957-33.109%201.6749-5.6081%202.5273-9.2178%202.3457-9.9414-0.3583-1.4277-2.304-2.9902-3.7227-2.9902-2.2096%200-3.2806%201.7501-5.2832%208.6465-1.0452%203.5991-2.8485%209.6552-4.0098%2013.457-4.3362%2014.197-5.2194%2023.236-3.1152%2031.883%202.498%2010.265%209.7638%2020.753%2020.789%2030.004%204.625%203.8805%203.7089%203.6302%209.7558%202.6621%204.4462-0.71182%2010.075%202.1978%2011.881%206.1426%203.1801%206.9462%204.4105%2015.958%204.707%2034.441l0.2363%2014.672h-0.2109l-0.3105%203.8574c-1.0199%2012.638-3.3064%2027.518-6.1016%2039.701-11.486%2038.552-24.259%2078.082-33.006%20107.75-2.1349%207.2454-3.5717%2012.054-5.5234%2018.652a11.768%2011.768%200%200%200-13.445%201.9531%2011.768%2011.768%200%200%200-3.418%206.2422%2025.744%2025.744%200%200%200-7.2812-0.95117c-0.1252-2.975-0.3588-5.743-0.7207-8.2285-1.7353-11.917-6.3988-21.144-12.842-25.412-1.1754-0.77854-2.3569-1.4888-2.625-1.5781-0.2682-0.0895%207.2186-15.83%2016.637-34.98s17.125-35.133%2017.125-35.516c0-1.0854-1.3794-2.789-2.6484-3.2715-2.714-1.0319-2.4975-1.4037-21.045%2036.314-15.698%2031.923-17.556%2035.478-18.611%2035.611-1.1017%200.1393-2.8369-1.3345-4.1133-3.4941-0.247-0.41789%206.5416-14.712%2019.748-41.582%2012.436-25.302%2020.125-41.462%2020.125-42.297%200-2.9031-3.7687-4.3479-5.6543-2.168-0.5004%200.57838-9.4926%2018.51-19.982%2039.848-10.49%2021.338-19.253%2038.764-19.475%2038.727-0.2215-0.0376-1.2067-1.5285-2.1875-3.3125l-1.7832-3.2441%2015.428-31.383c8.4843-17.26%2015.426-31.587%2015.426-31.838%200-1.17-1.1802-2.8263-2.3633-3.3164-2.9864-1.237-2.7712-1.5874-17.478%2028.395-7.4687%2015.226-13.737%2027.689-13.93%2027.695-0.1928%206e-3%20-0.3496-2.1442-0.3477-4.7793%200.01-8.7511%201.5655-13.316%2010.977-32.127%203.3869-6.7697%205.8476-12.247%205.8476-13.02%200-2.4281-3.2897-3.9997-4.9316-2.3555-1.1194%201.1209-13.551%2026.237-15.141%2030.59-3.9994%2010.951-4.2933%2020.276-0.9492%2030.117%202.3015%206.7732%208.349%2016.654%2014.129%2023.086l2.4746%202.7539%203.9629%200.0684c4.7659%200.0816%207.0698%201.086%2010.309%204.4942%204.8956%205.1516%207.6254%2014.387%208.1562%2027.098a25.744%2025.744%200%200%200-3.8867%201.4336%2011.768%2011.768%200%200%200-1.4375-1.8496%2011.768%2011.768%200%200%200-16.639-0.41016%2011.768%2011.768%200%200%200-0.4101%2016.637%2011.768%2011.768%200%200%200%204.205%202.8203%2025.744%2025.744%200%200%200-0.5859%203.457%2054.812%2054.812%200%200%200-0.4727%200.15235%2025.744%2025.744%200%200%200-8.916-4.332%2011.768%2011.768%200%200%200-3.0547-6.0469%2011.768%2011.768%200%200%200-16.637-0.41016%2011.768%2011.768%200%200%200-3.5996%207.5332%2011.768%2011.768%200%200%200-15.062%200.96875%2011.768%2011.768%200%200%200-0.4121%2016.637%2011.768%2011.768%200%200%200%206.5879%203.4824%2025.744%2025.744%200%200%200%200.4121%207.998%2025.744%2025.744%200%200%200-11.137%202.5801%2011.768%2011.768%200%200%200-15.727%200.4336%2011.768%2011.768%200%200%200-2.9043%204.4121%2014.936%2014.936%200%200%200-1.6992-2.168%2014.936%2014.936%200%200%200-21.117-0.52149%2014.936%2014.936%200%200%200-4.3125%207.793%2025.744%2025.744%200%200%200-6.7031-1.5449c-9.5402-20.115-19.522-35.393-30.996-47.518l-4.3359-4.582%202.248-7.8047c12.344-42.837%2028.031-74.863%2044.473-90.801%209.2913-9.0068%2016.735-12.592%2026.148-12.592%204.7512%200%208.8956%201.0368%2012.104%203.0274%204.4918%202.7873%204.4084%202.7785%209.2227%200.85156%209.7099-3.8863%2022.866-11.156%2030.695-16.961%2020.287-15.042%2029.776-32.003%2032.494-58.084l0.2813-2.6875h-0.1446l0.2246-5.3965c0.1286-3.085%200.1558-15.794%200.061-28.24l-0.1719-22.631-1.0918-1.0898c-1.429-1.4291-3.5106-1.4146-5.1972%200.0371l-1.3106%201.1289v28.215%2028.213h0.041c-0.2917%200.123-0.3719%200.30701-0.375%200.58203-0.023%202.0633-1.4224%2011.146-2.2617%2014.672-2.0297%208.5263-5.7316%2016.605-10.553%2023.033l-2.834%203.7793-0.1231-21.15-0.121-21.15h-0.2305c0.064-2.9861%200.1559-17.932%200.2168-36.016%200.092-27.234-0.02-37.509-0.4141-38.467-0.5418-1.3154-2.5233-2.666-3.9121-2.666-1.3337%200-3.3107%201.3029-3.8828%202.5586-0.4177%200.91695-0.5586%2010.461-0.5586%2037.896v36.67h4.207c0.5945%200%201.1012%207e-3%201.5625%200.0215h-1.4238-4.4355v25.617%2025.617l-3.1543%202.3906c-3.0643%202.3231-11.951%208.0742-12.477%208.0742-0.1434%200-0.2617-13.882-0.2617-30.85v-30.85h-0.1426l0.1211-48.867c0.09-36.203-0.019-49.422-0.416-50.387-0.5721-1.3896-2.542-2.666-4.1153-2.666-0.5229%200-1.6389%200.61514-2.4785%201.3652l-1.5254%201.3633-0.123%2049.566-0.1231%2049.568%201.8653%200.0566h-1.9434v33.305%2033.305l-4.9082%202.1934-4.9082%202.1953-3.0371-1.4199-3.0391-1.4219v-34.078-33.869l0.094%206e-3v-37.252-37.25l-1.0508-1.2109c-0.6171-0.7103-1.7492-1.3209-2.7402-1.4785-1.4254-0.22683-1.9351-0.0479-3.2715%201.1465l-1.584%201.4141-0.01%2070.268c0%2018.243%200.011%2031.094%200.031%2038.199l-0.1172%2031.93-4.3203%200.16992c-10.57%200.41318-20.409%205.2464-30.332%2014.902-2.6688%202.5968-4.8484%204.6168-4.8438%204.4883%200.01-0.12854%200.5162-2.9685%201.1367-6.3105%203.5822-19.291%205.0875-34.169%205.1055-50.48%200.013-12.341-0.5219-19.152-2.0781-26.408l-0.4668-2.1699c0.078-6e-3%200.1308-9e-3%200.1308-0.0137%200-1.0108-3.3772-10.834-4.6914-13.645-3.8228-8.1739-9.7418-15.008-16.053-18.537-1.7013-0.95145-3.0907-1.8703-3.0879-2.041%200-0.17068%2014.214-26.497%2031.582-58.504%2017.368-32.007%2031.695-58.868%2031.838-59.691%200.2139-1.2345%200.01-1.748-1.166-2.9219-1.7401-1.7402-3.7321-1.8753-5.4414-0.3711-0.6573%200.57845-15.609%2027.647-33.225%2060.152-17.616%2032.505-32.076%2059.145-32.135%2059.201-0.059%200.0567-1.526-0.0118-3.2617-0.15234l-3.1562-0.25391-3.0547-3.9922c-1.9501-2.5474-2.9548-4.2569-2.7754-4.7246%200.1547-0.403%2016.937-31.443%2037.293-68.979%2028.197-51.992%2037.048-68.691%2037.168-70.115%200.1281-1.5268-0.067-2.0804-1.0625-3.0156-0.8248-0.77485-1.8511-1.1621-2.8555-1.1621zm10.084%20188.51%202.4903%200.0898h-2.4903v-0.0898zm-1161.6%20205.02c1.2451%202.6207%202.6143%205.2134%204.1191%207.7793-1.5054-2.5658-2.8743-5.1586-4.1191-7.7793zm231.96%207.1328c-0.6092%201.2825-1.2789%202.551-2.0156%203.8066%200.73645-1.2557%201.4063-2.5242%202.0156-3.8066zm1075.1%2069.316a18.572%2018.572%200%200%200%201.5332%2010.16%208.4901%208.4901%200%200%200-1.3321%201.0371%208.4901%208.4901%200%200%200-0.2968%2012.002%208.4901%208.4901%200%200%200%201.7871%201.4297c-5.8659-0.47735-11.868-0.92641-17.975-1.3516a14.936%2014.936%200%200%200-2.877-4.3848%2014.936%2014.936%200%200%200-4.9277-3.4082%2025.744%2025.744%200%200%200%2017.047-7.0586%2025.744%2025.744%200%200%200%205.8417-8.4082%2014.936%2014.936%200%200%200%201.1993-0.0176zm13.941%2020.463a18.572%2018.572%200%200%200%202.4941%200.42187%2039.543%2039.543%200%200%200%200.1094%200.3418%2018.572%2018.572%200%200%200-2.4766%204.4648c-1.6342-0.14758-3.2878-0.29013-4.9433-0.43359a8.4901%208.4901%200%200%200%202.7832-1.7617%208.4901%208.4901%200%200%200%202.0332-3.0332z%22%20fill%3D%22%23b09765%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(1%200%200%20.93778%202260%2075.725)%22%3E%3Crect%20x%3D%22-2260%22%20y%3D%222.2575e-7%22%20width%3D%221920%22%20height%3D%221200%22%20fill-opacity%3D%220%22%2F%3E%3Cpath%20d%3D%22m-2259.9%20919.02%201192.9%20114.28%20321.53-220.35%20188.81%20191.22%20216.6%2070.49v124.14h-1919.9z%22%20fill%3D%22%23765c28%22%2F%3E%3Crect%20transform%3D%22scale(-1%2C1)%22%20x%3D%221379.9%22%20y%3D%22890.21%22%20width%3D%22373.02%22%20height%3D%2254.669%22%20rx%3D%22186.51%22%20ry%3D%2227.335%22%20fill%3D%22%23765c28%22%2F%3E%3Cpath%20d%3D%22m-1497%20934.9%2075.995%20224.18h-250.25v-0.202c42.725-3.0792%2076.3-63.626%2076.3-111.89%200-48.262-33.575-108.81-76.3-111.89v-0.19991z%22%20fill%3D%22%23765c28%22%2F%3E%3Cpath%20d%3D%22m-864.61%20690.39c1.6069%200%202.9003%201.3794%202.9003%203.0928v110.23c0.65252%200.33615%201.319%200.6707%201.9992%201.0042%200.68654%200.33667%201.3873%200.67223%202.1028%201.0063-0.71541-0.33416-1.4161-0.66958-2.1028-1.0063v-102.91c0-1.7133%201.2937-3.0928%202.9007-3.0928s2.9003%201.3794%202.9003%203.0928v104.05c0.58653-0.30616%201.2555-0.62031%201.9991-0.91856v-94.817c0-1.7133%201.2937-3.0928%202.9006-3.0928%201.607%200%202.9004%201.3794%202.9004%203.0928v93.382c0.64371-0.0643%201.3118-0.0972%201.9992-0.0983v-84.967c0-1.7133%201.2938-3.0928%202.9007-3.0928%201.607%200%202.9003%201.3794%202.9003%203.0928v85.789c1.2402%200.3547%202.5195%200.83371%203.8331%201.4696%2012.649%206.1233%209.2856%2021.585%2013.51%2073.011%200.97216%203.5622-4.0817%205.0507-4.9623%201.4615-4.4081-50.544-0.38406-64.492-10.676-69.474-10.292-4.9822-16.946%201.2369-16.946%201.2369-0.72975%200.63987-1.7295%200.80214-2.6048%200.42274-25.508-11.059-36.126-24.802-39.983-40.244s-1.3476-32.016-2.099-49.66c-0.0863-1.5445%201.0411-2.8598%202.4916-2.9068%201.4203-0.046%202.6069%201.1436%202.6512%202.6578%200.78021%2018.318-1.5356%2034.62%201.9311%2048.496%200.0801%200.32069%200.16611%200.63926%200.25211%200.95797%200.0667%200.24781%200.13625%200.49488%200.20684%200.7415-0.0704-0.24662-0.13988-0.49369-0.20684-0.7415v-53.218c0-1.7133%201.2938-3.0928%202.9007-3.0928%201.6069%200%202.9003%201.3794%202.9003%203.0928v66.133c0.61747%200.91706%201.2829%201.8253%201.9992%202.7248v-77.174c0-1.7133%201.2938-3.0928%202.9007-3.0928%201.6069%200%202.9003%201.3794%202.9003%203.0928v83.242c0.63974%200.56584%201.306%201.128%201.9992%201.6869%200.21802%200.17583%200.43879%200.35115%200.6623%200.52629-0.22351-0.17512-0.44428-0.35049-0.6623-0.52629v-93.245c0-1.7133%201.2937-3.0928%202.9007-3.0928%201.6069%200%202.9003%201.3794%202.9003%203.0928v97.421c0.64808%200.41883%201.3145%200.83546%201.9992%201.2503%200.44902%200.27214%200.90557%200.54333%201.3707%200.81378-0.46477-0.27042-0.92172-0.54168-1.3707-0.81378v-106.99c0-1.7133%201.2937-3.0928%202.9007-3.0928zm-26.017%2082.269c0.12984%200.44412%200.26598%200.8864%200.4086%201.3267-0.14255-0.44032-0.27876-0.88252-0.4086-1.3267zm0.47266%201.5253c0.0742%200.22524%200.15052%200.44986%200.22815%200.6741-0.0776-0.22432-0.15411-0.4488-0.22815-0.6741zm0.35913%201.0457c0.75224%202.114%201.6633%204.1846%202.7788%206.2119%200.14477%200.26315%200.2928%200.52566%200.44443%200.78739%200.30051%200.51851%200.61495%201.0342%200.9434%201.5472-0.32853-0.51305-0.64289-1.0286-0.9434-1.5472-0.15163-0.26176-0.29966-0.52421-0.44443-0.78739-1.1151-2.0273-2.027-4.0978-2.7788-6.2119zm4.1884%208.5802c0.16077%200.2505%200.32478%200.50044%200.49245%200.74963-0.16767-0.24919-0.33168-0.49913-0.49245-0.74963zm2.4977%203.4834c0.61487%200.77201%201.2676%201.5374%201.9608%202.2968-0.6931-0.75939-1.3459-1.5248-1.9608-2.2968zm1.9726%202.3098c0.68432%200.74933%201.4082%201.4925%202.1736%202.2298-0.76535-0.73722-1.4894-1.4806-2.1736-2.2298zm2.2346%202.2887c0.51154%200.49112%201.0414%200.9797%201.5909%201.4656-0.54952-0.48597-1.0793-0.97436-1.5909-1.4656zm4.2627%203.6873c0.21747%200.17034%200.43739%200.34035%200.65994%200.51005-0.22255-0.16969-0.44247-0.33971-0.65994-0.51005zm0.70303%200.54254c0.22051%200.16775%200.44354%200.33519%200.6692%200.50232-0.22566-0.16713-0.44869-0.33456-0.6692-0.50232zm0.67835%200.50922c0.22325%200.16528%200.44888%200.33037%200.67717%200.49502-0.22829-0.16467-0.45399-0.32973-0.67717-0.49502zm0.78611%200.573c0.20268%200.14557%200.40678%200.29103%200.61358%200.43613-0.20673-0.14508-0.41097-0.29058-0.61358-0.43613zm0.73852%200.52344c0.2207%200.15419%200.44339%200.30807%200.66879%200.46172%200.25275%200.17237%200.50838%200.34444%200.76706%200.51613-0.2586-0.17169-0.51431-0.34376-0.76706-0.51613-0.22547-0.15377-0.44795-0.30741-0.66879-0.46172zm1.44%200.9807c0.25349%200.16821%200.50986%200.33598%200.76902%200.50355-0.25916-0.16754-0.51561-0.33537-0.76902-0.50355zm4.1698%202.5868c0.45503%200.26446%200.91754%200.52818%201.3883%200.79105-0.47051-0.26291-0.93339-0.52654-1.3883-0.79105zm1.4252%200.81177c0.44839%200.25019%200.90482%200.49965%201.3677%200.74841-0.46277-0.24883-0.91943-0.49814-1.3677-0.74841zm1.5916%200.8682c0.4461%200.23833%200.89668%200.47607%201.3563%200.71309-0.4594-0.23691-0.91057-0.47486-1.3563-0.71309zm19.644%200.43532c0.0196%203.7e-4%200.0401%207.5e-4%200.0598%201e-3%20-0.0196-3.7e-4%20-0.0401-7.4e-4%20-0.0598-1e-3zm0.68861%200.0325c0.0311%201e-3%200.0621%205e-3%200.0926%206e-3%20-0.0311-1e-3%20-0.0621-5e-3%20-0.0926-6e-3zm0.7336%200.0601c0.0159%201e-3%200.0326%203e-3%200.0485%206e-3%20-0.0159-1e-3%20-0.0326-3e-3%20-0.0485-6e-3zm-4.8473%200.0893c-0.0681%209e-3%20-0.13388%200.0205-0.20113%200.0304%200.0674-0.01%200.13335-0.0211%200.20113-0.0304zm-0.75943%200.1202c-0.0781%200.0138-0.15507%200.0289-0.23236%200.0434%200.0772-0.0145%200.15422-0.0296%200.23236-0.0434zm-0.73282%200.14375c-0.0808%200.0173-0.16118%200.0348-0.24103%200.0528%200.0799-0.018%200.16018-0.0355%200.24103-0.0528zm-0.74994%200.17462c-0.056%200.0142-0.11275%200.0277-0.16833%200.0422%200.0553-0.0146%200.11223-0.0282%200.16833-0.0422zm-5.0225%201.9516c-0.20887%200.11239-0.40859%200.22336-0.59449%200.33096%200.18512-0.10738%200.38617-0.21876%200.59449-0.33096z%22%20fill%3D%22%23765c28%22%2F%3E%3Cg%20transform%3D%22matrix(.79525%200%200%20.8479%20173.14%20268.21)%22%20fill%3D%22%23765c28%22%3E%3Ccircle%20cx%3D%22-1346.3%22%20cy%3D%22741.04%22%20r%3D%2249.721%22%2F%3E%3Ccircle%20cx%3D%22-1309.4%22%20cy%3D%22767.07%22%20r%3D%2227.747%22%2F%3E%3Ccircle%20cx%3D%22-1308.4%22%20cy%3D%22725.49%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1343.6%22%20cy%3D%22774.84%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1382.1%22%20cy%3D%22777.55%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1386.9%22%20cy%3D%22741.71%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1372.7%22%20cy%3D%22703.17%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1344.9%22%20cy%3D%22694.38%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1325.3%22%20cy%3D%22705.88%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1285.8%22%20cy%3D%22753.54%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1287.8%22%20cy%3D%22784.65%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1296.6%22%20cy%3D%22706.89%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1338.7%22%20cy%3D%22674.27%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1396.8%22%20cy%3D%22706.05%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1411%22%20cy%3D%22748.3%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1375.9%22%20cy%3D%22676.97%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1403.3%22%20cy%3D%22781.1%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1395.8%22%20cy%3D%22793.94%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1404.9%22%20cy%3D%22730.72%22%20r%3D%2210.675%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.57604%20-.58457%20.54827%20.61418%20-322.44%20-404.53)%22%20fill%3D%22%23765c28%22%3E%3Ccircle%20cx%3D%22-1346.3%22%20cy%3D%22741.04%22%20r%3D%2249.721%22%2F%3E%3Ccircle%20cx%3D%22-1309.4%22%20cy%3D%22767.07%22%20r%3D%2227.747%22%2F%3E%3Ccircle%20cx%3D%22-1308.4%22%20cy%3D%22725.49%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1343.6%22%20cy%3D%22774.84%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1382.1%22%20cy%3D%22777.55%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1386.9%22%20cy%3D%22741.71%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1372.7%22%20cy%3D%22703.17%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1344.9%22%20cy%3D%22694.38%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1325.3%22%20cy%3D%22705.88%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1285.8%22%20cy%3D%22753.54%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1287.8%22%20cy%3D%22784.65%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1296.6%22%20cy%3D%22706.89%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1338.7%22%20cy%3D%22674.27%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1396.8%22%20cy%3D%22706.05%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1411%22%20cy%3D%22748.3%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1375.9%22%20cy%3D%22676.97%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1403.3%22%20cy%3D%22781.1%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1395.8%22%20cy%3D%22793.94%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1404.9%22%20cy%3D%22730.72%22%20r%3D%2210.675%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.91513%201.0251%20-.96149%20.97572%20513.42%201602.3)%22%20fill%3D%22%23765c28%22%3E%3Ccircle%20cx%3D%22-1346.3%22%20cy%3D%22741.04%22%20r%3D%2249.721%22%2F%3E%3Ccircle%20cx%3D%22-1309.4%22%20cy%3D%22767.07%22%20r%3D%2227.747%22%2F%3E%3Ccircle%20cx%3D%22-1308.4%22%20cy%3D%22725.49%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1343.6%22%20cy%3D%22774.84%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1382.1%22%20cy%3D%22777.55%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1386.9%22%20cy%3D%22741.71%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1372.7%22%20cy%3D%22703.17%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1344.9%22%20cy%3D%22694.38%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1325.3%22%20cy%3D%22705.88%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1285.8%22%20cy%3D%22753.54%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1287.8%22%20cy%3D%22784.65%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1296.6%22%20cy%3D%22706.89%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1338.7%22%20cy%3D%22674.27%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1396.8%22%20cy%3D%22706.05%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1411%22%20cy%3D%22748.3%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1375.9%22%20cy%3D%22676.97%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1403.3%22%20cy%3D%22781.1%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1395.8%22%20cy%3D%22793.94%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1404.9%22%20cy%3D%22730.72%22%20r%3D%2210.675%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.79846%20-.81029%20.75997%20.85133%20-560.95%20-724.79)%22%20fill%3D%22%23765c28%22%3E%3Ccircle%20cx%3D%22-1346.3%22%20cy%3D%22741.04%22%20r%3D%2249.721%22%2F%3E%3Ccircle%20cx%3D%22-1309.4%22%20cy%3D%22767.07%22%20r%3D%2227.747%22%2F%3E%3Ccircle%20cx%3D%22-1308.4%22%20cy%3D%22725.49%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1343.6%22%20cy%3D%22774.84%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1382.1%22%20cy%3D%22777.55%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1386.9%22%20cy%3D%22741.71%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1372.7%22%20cy%3D%22703.17%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1344.9%22%20cy%3D%22694.38%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1325.3%22%20cy%3D%22705.88%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1285.8%22%20cy%3D%22753.54%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1287.8%22%20cy%3D%22784.65%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1296.6%22%20cy%3D%22706.89%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1338.7%22%20cy%3D%22674.27%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1396.8%22%20cy%3D%22706.05%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1411%22%20cy%3D%22748.3%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1375.9%22%20cy%3D%22676.97%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1403.3%22%20cy%3D%22781.1%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1395.8%22%20cy%3D%22793.94%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1404.9%22%20cy%3D%22730.72%22%20r%3D%2210.675%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.49802%200%200%20.53099%20-89.074%20415.04)%22%20fill%3D%22%23765c28%22%3E%3Ccircle%20cx%3D%22-1346.3%22%20cy%3D%22741.04%22%20r%3D%2249.721%22%2F%3E%3Ccircle%20cx%3D%22-1309.4%22%20cy%3D%22767.07%22%20r%3D%2227.747%22%2F%3E%3Ccircle%20cx%3D%22-1308.4%22%20cy%3D%22725.49%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1343.6%22%20cy%3D%22774.84%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1382.1%22%20cy%3D%22777.55%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1386.9%22%20cy%3D%22741.71%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1372.7%22%20cy%3D%22703.17%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1344.9%22%20cy%3D%22694.38%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1325.3%22%20cy%3D%22705.88%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1285.8%22%20cy%3D%22753.54%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1287.8%22%20cy%3D%22784.65%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1296.6%22%20cy%3D%22706.89%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1338.7%22%20cy%3D%22674.27%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1396.8%22%20cy%3D%22706.05%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1411%22%20cy%3D%22748.3%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1375.9%22%20cy%3D%22676.97%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1403.3%22%20cy%3D%22781.1%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1395.8%22%20cy%3D%22793.94%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1404.9%22%20cy%3D%22730.72%22%20r%3D%2210.675%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.77877%20.42056%20-.39429%20.83041%20801.11%20943.66)%22%20fill%3D%22%23765c28%22%3E%3Ccircle%20cx%3D%22-1346.3%22%20cy%3D%22741.04%22%20r%3D%2249.721%22%2F%3E%3Ccircle%20cx%3D%22-1309.4%22%20cy%3D%22767.07%22%20r%3D%2227.747%22%2F%3E%3Ccircle%20cx%3D%22-1308.4%22%20cy%3D%22725.49%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1343.6%22%20cy%3D%22774.84%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1382.1%22%20cy%3D%22777.55%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1386.9%22%20cy%3D%22741.71%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1372.7%22%20cy%3D%22703.17%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1344.9%22%20cy%3D%22694.38%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1325.3%22%20cy%3D%22705.88%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1285.8%22%20cy%3D%22753.54%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1287.8%22%20cy%3D%22784.65%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1296.6%22%20cy%3D%22706.89%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1338.7%22%20cy%3D%22674.27%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1396.8%22%20cy%3D%22706.05%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1411%22%20cy%3D%22748.3%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1375.9%22%20cy%3D%22676.97%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1403.3%22%20cy%3D%22781.1%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1395.8%22%20cy%3D%22793.94%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1404.9%22%20cy%3D%22730.72%22%20r%3D%2210.675%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(1.0852%20-.20585%20.19317%201.1572%20-532.92%20-221.36)%22%20fill%3D%22%23765c28%22%3E%3Ccircle%20cx%3D%22-1346.3%22%20cy%3D%22741.04%22%20r%3D%2249.721%22%2F%3E%3Ccircle%20cx%3D%22-1309.4%22%20cy%3D%22767.07%22%20r%3D%2227.747%22%2F%3E%3Ccircle%20cx%3D%22-1308.4%22%20cy%3D%22725.49%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1343.6%22%20cy%3D%22774.84%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1382.1%22%20cy%3D%22777.55%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1386.9%22%20cy%3D%22741.71%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1372.7%22%20cy%3D%22703.17%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1344.9%22%20cy%3D%22694.38%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1325.3%22%20cy%3D%22705.88%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1285.8%22%20cy%3D%22753.54%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1287.8%22%20cy%3D%22784.65%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1296.6%22%20cy%3D%22706.89%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1338.7%22%20cy%3D%22674.27%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1396.8%22%20cy%3D%22706.05%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1411%22%20cy%3D%22748.3%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1375.9%22%20cy%3D%22676.97%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1403.3%22%20cy%3D%22781.1%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1395.8%22%20cy%3D%22793.94%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1404.9%22%20cy%3D%22730.72%22%20r%3D%2210.675%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22m-1270.3%20800.63c-0.4688%200-0.9272%200.19283-1.2706%200.5785-0.2791%200.31353-7.9469%2015.228-17.04%2033.142s-16.702%2032.869-16.91%2033.232l-0.3777%200.65948-1.0021-1.8229c-1.206-2.1937-2.7702-5.7038-2.7702-6.2162%200-0.20325%205.8981-11.966%2013.107-26.14%207.2087-14.174%2013.158-26.046%2013.222-26.382%200.3592-1.9058-2.0666-3.1388-3.2364-1.6451-0.2807%200.35839-5.9508%2011.356-12.6%2024.439-6.6493%2013.083-12.165%2023.704-12.256%2023.603-0.2706-0.29802-0.6363-3.6631-0.6349-5.8427%200-3.7125%200.9638-8.5892%202.5079-12.721%200.9264-2.4793%203.3835-7.6288%206.1056-12.796%203.1022-5.889%204.8935-9.3786%205.7592-11.219%200.9884-2.1014%200.8813-3.2169-0.3616-3.7659-1.1614-0.51299-1.6177-0.084-3.1171%202.9303-0.7519%201.5117-2.9089%205.68-4.7934%209.263-5.1844%209.8573-6.8484%2013.621-8.1378%2018.402-2.6379%209.7832-1.3898%2019.117%203.9131%2029.266%202.2113%204.2318%207.4153%2011.977%208.2873%2012.334%200.1893%200.0774%201.1953%200.14344%202.2355%200.14652%203.5755%200.0108%205.7817%200.99054%208.3486%203.7076%202.0875%202.2096%203.3987%204.5802%204.488%208.1142l0.8366%202.7137h0.028l0.1214%200.76755c0.076%200.47985%200.2811%201.7273%200.4561%202.772%201.5906%209.4963%200.5499%2024.345-2.9426%2041.982-0.8191%204.1368-0.981%204.6757-1.9483%206.4891-4.8717%209.1326-8.9076%2019.672-12.562%2032.805-0.6943%202.4953-1.2825%204.566-1.307%204.6014-0.025%200.035-0.5739-0.32-1.2207-0.7897-3.5769-2.5976-8.2624-4.256-12.304-4.3547l-2.3999-0.059-0.055-42.16-0.055-42.16h-0.062l0.06-1.4576c0.075-1.8268-0.288-2.7851-1.2567-3.3193-0.8101-0.44668-1.6012-0.44839-2.4048-5e-3%20-1.0433%200.57533-1.3115%201.2031-1.3115%203.07v1.6856l0.9894%200.0266h-1.0313v42.796%2042.796l-1.7226%200.9031-1.7224%200.9031-2.9684-1.3961-2.9686-1.3959v-42.303-42.304h-0.067l0.057-9.085c0.061-9.7754%200.033-10.085-0.9894-10.943-0.685-0.57454-2.3578-0.61686-3.0792-0.0779-1.0685%200.79804-1.1164%201.2705-1.1164%2011.006v9.074l1.0188%200.026h-1.0609v40.833%2040.833l-2.4308-1.5998c-1.337-0.8798-3.399-2.3651-4.582-3.3006l-2.1509-1.7009v-37.532-37.532h-0.058l0.062-0.70922c0.2109-2.4175-0.6773-4.1162-2.2718-4.3443-1.8913-0.27046-2.9266%200.97155-2.9266%203.511v1.5164l1.0189%200.026h-1.0608l-0.01%2034.725-0.01%2034.725-0.7568-0.93068c-2.8417-3.4945-5.4728-9.0911-6.8576-14.587-1.6217-6.4359-1.9538-12.219-1.802-31.387%200.08-10.057%200.041-13.612-0.1555-14.247-0.5572-1.8002-2.5175-2.4048-3.7019-1.1417l-0.6018%200.64184-0.1475%2015.121c-0.1824%2018.713%200.045%2023.243%201.5223%2030.333%202.8591%2013.722%2010.946%2024.263%2025.285%2032.959%204.4357%202.6901%2012.049%206.3877%2013.152%206.3877%200.325%200%201.0527-0.35%201.6171-0.7779%202.5649-1.9446%205.5985-2.8301%209.0088-2.6297%202.7293%200.1603%204.2178%200.5851%206.982%201.9924%207.3936%203.7641%2014.271%2012.566%2020.92%2026.775%204.6751%209.9906%208.912%2021.98%2012.702%2035.946%201.5077%205.5552%201.5482%205.6615%202.3604%206.2042%200.9246%200.6177%202.0199%200.4223%202.7992-0.4995%200.33-0.3904%200.6-0.9371%200.6-1.2147%200-0.6183%206.6812-11.34%2010.047-16.123%2011.58-16.456%2021.62-25.651%2030.9-28.3%202.6002-0.7422%206.1558-0.695%208.4856%200.1126%202.0729%200.7185%203.8785%201.9889%205.5857%203.9297l1.2351%201.4043%201.8193-0.1675c2.7011-0.2488%208.0047-1.2123%2011.026-2.003%2013.488-3.5299%2022.116-10.187%2027.424-21.159%202.5268-5.2234%203.7584-8.9826%206.8988-21.056%201.0983-4.2228%202.3867-8.9588%202.8629-10.524%200.6307-2.0743%200.8286-3.0568%200.7293-3.6211-0.1027-0.58401%200.063-1.314%200.6738-2.9698%202.7735-7.5175%205.8708-11.802%209.0588-12.531%201.0976-0.25101%201.3308-0.203%203.4005%200.69898%200.6508%200.28364%200.8256%200.23071%203.0456-0.92025%201.2954-0.67155%202.9506-1.6742%203.6786-2.2282%201.947-1.4815%204.1111-4.0365%204.8869-5.7699%201.2991-2.9027%201.4018-3.6446%201.4994-10.837%200.082-6.0134%200.056-6.6306-0.2894-7.038-0.7109-0.83765-1.9163-0.39618-2.1605%200.79123-0.057%200.27897-0.1408%203.2817-0.1854%206.6727-0.083%206.3278-0.1901%207.1987-1.1052%208.999-0.304%200.59799-0.3346-0.21966-0.3424-9.1889-0.01-9.7838-0.06-10.541-0.7505-11.032-0.4437-0.31596-1.2184-0.18187-1.6583%200.28715-0.425%200.45312-0.4364%200.77548-0.4364%2012.315v11.85l-0.6336%200.48123c-0.3486%200.26465-0.6923%200.48121-0.7637%200.48121-0.072%200-0.1301-6.4322-0.1301-14.294%200-14.139-0.054-15.316-0.7227-15.77-0.4437-0.3008-1.2976-0.20003-1.7145%200.20231-0.379%200.36578-0.3991%201.1698-0.3991%2016.059v15.674l-0.583%200.23643c-1.2143%200.49228-1.1624%201.0913-1.1624-13.426%200-12.166-0.034-13.465-0.3612-13.851-0.4629-0.54548-1.4321-0.5466-1.8941-2e-3%20-0.3232%200.38076-0.365%201.741-0.4157%2013.534l-0.056%2013.111-1.1999%200.26463c-4.3251%200.95398-8.1699%206.0157-11.225%2014.778-0.4128%201.184-0.94%202.3753-1.1715%202.6472-0.5675%200.66624-1.8188%204.8073-4.1917%2013.872-4.4095%2016.845-6.8893%2022.747-11.932%2028.398-1.6324%201.8292-5.2263%205.0266-5.4189%204.8212-0.037-0.04%203.5161-13.001%207.8965-28.802%204.3804-15.801%207.9807-29.132%208.0004-29.624%200.03-0.74078-0.086-1.0108-0.6734-1.5705-0.4907-0.46757-0.9401-0.67595-1.4575-0.67595-1.6705%200-1.0696-1.8476-10.544%2032.426l-8.6741%2031.379-1.6319%200.6915c-1.8927%200.8019-6.7353%202.3243-7.0838%202.2271-0.1423-0.04%203.2391-20.136%209.2955-42.134%206.0564-21.998%2011.717-41.269%2022.053-59.615%202.0728-2.0898%203.2949-2.7412%205.3661-2.8593%201.4464-0.0824%201.7117-0.0237%202.9485%200.65277l1.3593%200.74334%202.052-0.96277c3.9796-1.8675%207.1539-4.1186%209.3698-6.6445%200.6686-0.76218%201.1372-1.2851%201.3801-1.6453l-0.01%200.0397%200.2211-0.29068c0.3869-0.50888%201.384-2.3556%201.7285-3.2012%200.7269-1.7847%201.2617-4.055%201.5613-6.6289%200.1834-1.5747%200.2051-14.612%200.025-15.135-0.3649-1.0616-1.8802-1.1811-2.5053-0.19759-0.196%200.30848-0.2106%200.71336-0.2742%207.5965-0.071%207.6738-0.1135%208.379-0.6411%2010.582-0.4313%201.8012-1.2581%203.8673-1.8636%204.6568l-0.2231%200.29085%200.034-13.689c0.034-13.672%200.034-13.69-0.1911-14.01-0.3866-0.55231-0.7394-0.76231-1.281-0.76231-0.6524%200-1.1186%200.30103-1.3772%200.88933-0.1974%200.44916-0.2075%201.0799-0.2537%2015.765-0.022%206.9443-0.027%2012.484-0.016%2013.934v0.47432c0%201.0734-0.037%201.1303-1.1813%201.9776-0.6483%200.47986-1.2853%200.87237-1.4156%200.87237-0.097%200-0.1667-0.29402-0.2044-0.8359%200.045-1.5609%200.1109-9.2141%200.1547-18.549%200.09-19.049%200.087-19.409-0.1197-19.834-0.273-0.56103-0.7875-0.87932-1.4058-0.86934-0.9626%200.0156-1.4091%200.62657-1.499%202.0512-0.089%201.4145-0.1387%2031.24-0.071%2035.103l-0.01%200.058c-0.076%200.59371-0.1389%201.9433-0.1389%202.9992v1.92l-0.8445%200.36023c-0.4645%200.19819-1.0536%200.30212-1.3091%200.23086-0.4458-0.12433-0.4645-0.25983-0.4645-3.3596v-3.2302h-0.01c0.022-2.6005%200.049-6.6019%200.077-11.41%200.097-16.643%200.094-17.258-0.1006-17.675-0.5593-1.1999-2.0686-1.2641-2.7203-0.11578-0.2013%200.35453-0.2106%200.87337-0.2754%2015.141-0.037%208.1257-0.074%2015.858-0.082%2017.182l-0.015%202.408-1.2546%200.084%200.1265%204e-3c-1.2409%200.166-3.1449%200.9268-4.3955%201.7888-21.766%2026.694-26.219%2072.052-36.721%20106.89-0.1326%200.1593-4.2778%200.8689-5.0335%200.8617-0.18%200-0.8542-0.5019-1.4984-1.1115l-1.1711-1.1085%209.8439-35.589c5.2555-24.274%2016.159-50.708%2017.917-73.25%200.2127-2.9224%200.3669-3.7823-0.1031-4.0225%200.1323-0.0269%200.2242-0.0593%200.2504-0.0973%200.2321-0.33685%200.2008-5.6684-0.059-10.121-0.4339-7.4238-1.477-13.245-2.9487-16.455-0.6282-1.37-0.9952-1.8525-1.9835-2.6072-0.6671-0.50939-1.647-1.103-2.1775-1.319-0.6986-0.28454-0.9353-0.49568-0.8587-0.76636%203.234-11.436%209.9402-36.137%209.9402-36.613%200-1.475-1.9257-2.3566-3.042-1.3927-0.3721%200.32129-1.4896%204.0836-5.2686%2017.74-2.638%209.5329-4.9933%2018.039-5.234%2018.903-0.3703%201.3288-0.5117%201.5696-0.9193%201.5638-0.2649-4e-3%20-0.7975-0.31344-1.1836-0.68806l-0.702-0.681%205.993-21.675c3.2961-11.921%205.993-21.982%205.993-22.357%200-0.91515-0.9247-1.8229-1.8568-1.8229-1.4648%200-1.3166-0.43138-7.283%2021.207-3.0469%2011.05-5.6489%2020.382-5.782%2020.738l-0.2421%200.64723-0.9484-1.2982c-0.6876-0.94128-0.9148-1.439-0.8266-1.8105%200.067-0.28176%202.0892-7.6199%204.4939-16.307%202.4047-8.6869%204.372-16.151%204.372-16.588%200-1.0204-0.8146-1.9353-1.7233-1.9353-1.5051%200-1.4828-0.0585-5.4905%2014.425-2.036%207.3579-3.8078%2013.792-3.9373%2014.299-0.2129%200.83204-0.2589%200.87678-0.4774%200.46525-0.1331-0.25044-0.282-1.7117-0.3308-3.2472-0.1286-4.0435-0.021-4.5767%203.3126-16.481%200.7818-2.7914%201.1791-4.5876%201.0943-4.9478-0.1673-0.71065-1.0755-1.4887-1.7377-1.4887-1.0314%200-1.5305%200.87156-2.4653%204.3042-0.4879%201.7915-1.3305%204.8056-1.8726%206.6979-2.024%207.0667-2.4362%2011.566-1.454%2015.87%201.166%205.1096%204.5581%2010.329%209.7045%2014.934%202.1589%201.9315%201.7308%201.8071%204.5535%201.3252%202.0754-0.35429%204.7027%201.0945%205.5458%203.058%201.4843%203.4575%202.0595%207.9425%202.1979%2017.143l0.1099%207.3036h-0.098l-0.1453%201.9195c-0.476%206.2905-1.5436%2013.698-2.8483%2019.762-5.3615%2019.189-11.324%2038.866-15.407%2053.631-5.2969%2019.169-9.7081%2034.944-9.8025%2035.055-0.096%200.1132-0.6281%200.037-1.2066-0.1734-0.5691-0.2068-1.8345-0.4992-2.8119-0.65l-1.7773-0.274%200.3762-2.3446c1.4228-8.8704%201.8021-17.216%201.0371-22.819-0.81-5.932-2.9861-10.525-5.9936-12.649-0.5487-0.38753-1.1001-0.74101-1.2253-0.7855-0.1252-0.0445%203.3694-7.8802%207.7657-17.412%204.3962-9.5323%207.9932-17.487%207.9932-17.678%200-0.54024-0.6436-1.3878-1.2359-1.628-1.2668-0.51362-1.1659-0.69913-9.8236%2018.075-7.3275%2015.89-8.195%2017.66-8.6878%2017.726-0.5143%200.0693-1.3238-0.66404-1.9196-1.739-0.1153-0.20799%203.0536-7.3234%209.2182-20.698%205.8049-12.594%209.394-20.638%209.394-21.053%200-1.4451-1.7593-2.1648-2.6395-1.0797-0.2335%200.28792-4.4309%209.2134-9.3274%2019.834s-8.9874%2019.295-9.0908%2019.277c-0.1034-0.0189-0.5626-0.76082-1.0204-1.6488l-0.8325-1.6145%207.2008-15.621c3.9604-8.5916%207.2006-15.723%207.2006-15.848%200-0.58239-0.5506-1.4062-1.1028-1.6502-1.394-0.61573-1.2935-0.79023-8.1587%2014.133-3.4863%207.5786-6.4124%2013.782-6.5024%2013.785-0.09%203e-3%20-0.1629-1.0673-0.162-2.3789%200-4.3559%200.7308-6.6279%205.1237-15.991%201.581-3.3697%202.7294-6.0967%202.7294-6.4812%200-1.2086-1.5358-1.9904-2.3022-1.172-0.5225%200.55796-6.325%2013.06-7.067%2015.226-1.8669%205.451-2.0041%2010.092-0.4432%2014.99%201.0743%203.3714%203.8973%208.2904%206.5953%2011.492l1.1554%201.3709%201.849%200.0338c2.2247%200.0406%203.3001%200.54049%204.8119%202.2369%204.0144%204.5046%204.9229%2015.264%202.5926%2030.701-0.2414%201.5996-0.4851%203.0676-0.5414%203.2623-0.066%200.2268-0.6277%200.46-1.5664%200.6498-2.108%200.4265-4.4399%201.2966-6.9386%202.5891-9.7791%205.0586-20.826%2017.127-32.383%2035.378-1.5801%202.4953-2.9424%204.5619-3.0269%204.5922-0.085%200.03-0.4893-1.1736-0.8994-2.6755-2.1166-7.7509-5.6525-18.364-8.4678-25.415-5.2562-13.166-10.67-22.627-17.081-29.851l-2.024-2.2806%201.0499-3.885c5.7622-21.323%2013.084-37.264%2020.758-45.197%204.337-4.4832%207.812-6.2674%2012.206-6.2674%202.2178%200%204.1525%200.51601%205.6499%201.5068%202.0967%201.3874%202.0575%201.3836%204.3048%200.42444%204.5324-1.9344%2010.674-5.5531%2014.328-8.4425%209.4697-7.4872%2013.899-15.929%2015.168-28.911l0.1308-1.3378h-0.067l0.1049-2.6869c0.06-1.5356%200.073-7.8609%200.028-14.056l-0.081-11.264-0.5094-0.54305c-0.667-0.71132-1.6386-0.70391-2.4259%200.0187l-0.6123%200.56187v14.044%2014.044h0.019c-0.1362%200.0612-0.1732%200.15277-0.1746%200.28969-0.011%201.027-0.6647%205.5473-1.0565%207.3023-0.9474%204.244-2.675%208.2653-4.9254%2011.465l-1.323%201.8812-0.057-10.528-0.057-10.528h-0.1076c0.03-1.4864%200.072-8.9249%200.1007-17.926%200.043-13.556-0.01-18.67-0.1931-19.147-0.2529-0.65473-1.1781-1.3269-1.8264-1.3269-0.6225%200-1.5449%200.64808-1.812%201.2731-0.195%200.45641-0.2606%205.2069-0.2606%2018.863v18.253h1.9636c0.2775%200%200.5143%204e-3%200.7296%200.0112h-0.6647-2.0706v12.751%2012.751l-1.4726%201.1906c-1.4304%201.1563-5.5788%204.0191-5.8239%204.0191-0.067%200-0.1217-6.9099-0.1217-15.356v-15.356h-0.067l0.057-24.324c0.042-18.02-0.01-24.6-0.1945-25.08-0.267-0.69172-1.1865-1.3269-1.9209-1.3269-0.244%200-0.7645%200.30561-1.1564%200.67898l-0.7125%200.67883-0.057%2024.672-0.057%2024.672%200.8712%200.0289h-0.9073v16.577%2016.577l-2.2913%201.0925-2.2914%201.0925-1.4178-0.70738-1.4178-0.70755v-16.962-16.859l0.044%202e-3v-18.542-18.542l-0.491-0.60237c-0.2881-0.35357-0.8166-0.6578-1.2791-0.73628-0.6654-0.11288-0.9035-0.024-1.5274%200.57044l-0.739%200.7042v34.976c0%209.0803%200.01%2015.477%200.014%2019.014l-0.054%2015.894-2.0173%200.0842c-4.9339%200.20564-9.5263%202.6118-14.158%207.4181-1.2458%201.2926-2.2632%202.2979-2.261%202.2339%200-0.064%200.241-1.4775%200.5307-3.141%201.6721-9.6023%202.3743-17.008%202.3827-25.127%200.01-6.1429-0.2437-9.5332-0.9701-13.145l-0.2173-1.0799c0.036-2e-3%200.061-4e-3%200.061-7e-3%200-0.50314-1.5772-5.3928-2.1907-6.7915-1.7845-4.0686-4.5469-7.4708-7.4927-9.2275-0.7942-0.47361-1.4429-0.93059-1.4416-1.0156%200-0.085%206.6353-13.189%2014.742-29.121%208.107-15.931%2014.794-29.302%2014.861-29.712%200.1-0.61446%200-0.86975-0.5435-1.4541-0.8122-0.86618-1.7429-0.93409-2.5407-0.18533-0.3069%200.28792-7.2855%2013.761-15.508%2029.941-8.2227%2016.18-14.973%2029.44-15%2029.468-0.028%200.0282-0.7125-6e-3%20-1.5228-0.0759l-1.4731-0.12702-1.4263-1.9867c-0.9103-1.268-1.379-2.1189-1.2952-2.3516%200.072-0.2006%207.9057-15.651%2017.408-34.334%2013.162-25.879%2017.294-34.191%2017.35-34.9%200.06-0.75998-0.031-1.0353-0.4958-1.5008-0.3851-0.38567-0.8643-0.57851-1.3331-0.57851zm4.707%2093.831%201.1625%200.0442h-1.1627v-0.0442z%22%20fill%3D%22%23765c28%22%2F%3E%3Cpath%20d%3D%22m-2090.6%20653.55c-0.6389%200-1.2636%200.26279-1.7316%200.7884-0.3804%200.42729-10.83%2020.753-23.222%2045.168-12.392%2024.415-22.762%2044.796-23.045%2045.29l-0.5147%200.89876-1.3657-2.4843c-1.6436-2.9897-3.7753-7.7733-3.7753-8.4717%200-0.277%208.0381-16.308%2017.863-35.625%209.8243-19.317%2017.933-35.496%2018.019-35.954%200.4895-2.5973-2.8164-4.2777-4.4107-2.242-0.3825%200.48842-8.11%2015.476-17.172%2033.306-9.0619%2017.83-16.578%2032.305-16.703%2032.167-0.3688-0.40615-0.8672-4.9922-0.8653-7.9626%200-5.0595%201.3136-11.706%203.4179-17.337%201.2625-3.3789%204.6112-10.397%208.321-17.439%204.2278-8.0258%206.669-12.782%207.8488-15.29%201.3471-2.8639%201.2011-4.3842-0.4928-5.1323-1.5828-0.69912-2.2046-0.11448-4.2481%203.9935-1.0247%202.0602-3.9643%207.741-6.5326%2012.624-7.0655%2013.434-9.3333%2018.563-11.09%2025.08-3.5951%2013.333-1.8941%2026.054%205.3329%2039.885%203.0136%205.7673%2010.106%2016.322%2011.294%2016.809%200.2579%200.10548%201.629%200.19548%203.0466%200.19968%204.8728%200.0147%207.8795%201.35%2011.378%205.0529%202.8449%203.0114%204.6319%206.242%206.1164%2011.058l1.1402%203.6984h0.038l0.1655%201.046c0.1036%200.65396%200.3831%202.354%200.6216%203.7778%202.1677%2012.942%200.7494%2033.178-4.0103%2057.215-1.1163%205.6378-1.337%206.3722-2.6552%208.8436-6.6394%2012.446-12.14%2026.81-17.12%2044.708-0.9462%203.4007-1.7478%206.2227-1.7812%206.271-0.034%200.0477-0.7821-0.43611-1.6636-1.0762-4.8748-3.5401-11.26-5.8002-16.768-5.9348l-3.2707-0.0804-0.075-57.457-0.075-57.457h-0.084l0.082-1.9864c0.1022-2.4897-0.3925-3.7957-1.7127-4.5237-1.1041-0.60876-2.1822-0.61109-3.2774-7e-3%20-1.4218%200.78408-1.7873%201.6396-1.7873%204.1838v2.2972l1.3483%200.0362h-1.4054v58.325%2058.325l-2.3477%201.2308-2.3473%201.2308-4.0455-1.9027-4.0457-1.9024v-57.653-57.653h-0.091l0.078-12.381c0.083-13.322%200.045-13.744-1.3484-14.914-0.9336-0.78301-3.2133-0.84068-4.1965-0.10616-1.4562%201.0876-1.5215%201.7315-1.5215%2014.999v12.366l1.3885%200.0354h-1.4458v55.648%2055.648l-3.3128-2.1803c-1.8221-1.199-4.6323-3.2232-6.2446-4.4982l-2.9313-2.3181v-51.15-51.15h-0.079l0.084-0.96655c0.2874-3.2947-0.9231-5.6098-3.0961-5.9205-2.5776-0.36859-3.9885%201.3241-3.9885%204.785v2.0666l1.3886%200.0354h-1.4457l-0.014%2047.324-0.014%2047.324-1.0314-1.2684c-3.8728-4.7625-7.4585-12.39-9.3458-19.879-2.2101-8.7711-2.6627-16.653-2.4558-42.775%200.109-13.707%200.056-18.551-0.212-19.416-0.7593-2.4534-3.4309-3.2773-5.0451-1.556l-0.8201%200.87473-0.201%2020.607c-0.2486%2025.502%200.061%2031.676%202.0746%2041.339%203.8965%2018.7%2014.918%2033.067%2034.46%2044.918%206.0452%203.6662%2016.421%208.7054%2017.924%208.7054%200.4429%200%201.4347-0.47699%202.2038-1.0602%203.4956-2.6502%207.6299-3.857%2012.278-3.5839%203.7196%200.21846%205.7482%200.7974%209.5153%202.7153%2010.076%205.1299%2019.449%2017.126%2028.511%2036.49%206.3714%2013.616%2012.146%2029.956%2017.311%2048.989%202.0548%207.5708%202.11%207.7157%203.2168%208.4553%201.2601%200.84189%202.7529%200.57559%203.8149-0.68074%200.4497-0.53205%200.8177-1.2771%200.8177-1.6554%200-0.84265%209.1054-15.455%2013.692-21.973%2015.781-22.427%2029.465-34.959%2042.112-38.568%203.5436-1.0115%208.3893-0.94717%2011.564%200.15346%202.825%200.9792%205.2858%202.7106%207.6124%205.3556l1.6832%201.9138%202.4795-0.22827c3.6811-0.33908%2010.909-1.6522%2015.027-2.7298%2018.382-4.8107%2030.14-13.883%2037.374-28.837%203.4436-7.1187%205.1221-12.242%209.4019-28.696%201.4968-5.755%203.2527-12.209%203.9017-14.343%200.8595-2.8269%201.1292-4.166%200.9939-4.935-0.14-0.79592%200.086-1.7908%200.9183-4.0474%203.7798-10.245%208.001-16.084%2012.346-17.078%201.4958-0.34209%201.8137-0.27666%204.6343%200.9526%200.887%200.38655%201.1252%200.31442%204.1507-1.2542%201.7654-0.91522%204.0212-2.2817%205.0133-3.0367%202.6535-2.0191%205.6028-5.5012%206.6601-7.8635%201.7705-3.9559%201.9104-4.9671%202.0434-14.769%200.1118-8.1952%200.076-9.0365-0.3944-9.5917-0.9688-1.1416-2.6116-0.53993-2.9444%201.0783-0.078%200.38019-0.1919%204.4724-0.2527%209.0938-0.1131%208.6238-0.259%209.8107-1.5062%2012.264-0.4143%200.81496-0.456-0.29936-0.4666-12.523-0.014-13.334-0.082-14.366-1.0228-15.035-0.6047-0.4306-1.6605-0.24786-2.26%200.39134-0.5792%200.61753-0.5948%201.0569-0.5948%2016.784v16.149l-0.8634%200.65584c-0.4751%200.36067-0.9435%200.65581-1.0409%200.65581-0.098%200-0.1773-8.766-0.1773-19.48%200-19.27-0.073-20.873-0.9849-21.491-0.6047-0.40994-1.7684-0.27261-2.3366%200.27571-0.5165%200.4985-0.5439%201.5943-0.5439%2021.886v21.361l-0.7945%200.32222c-1.6549%200.6709-1.5842%201.4873-1.5842-18.297%200-16.58-0.046-18.351-0.4922-18.876-0.6309-0.7434-1.9518-0.74493-2.5814-3e-3%20-0.4405%200.51892-0.4974%202.3727-0.5665%2018.445l-0.076%2017.868-1.6353%200.36065c-5.8944%201.3001-11.134%208.1985-15.298%2020.14-0.5625%201.6136-1.281%203.2372-1.5965%203.6078-0.7734%200.90797-2.4788%206.5515-5.7126%2018.906-6.0095%2022.957-9.3891%2031-16.262%2038.702-2.2247%202.4929-7.1226%206.8504-7.3851%206.5705-0.05-0.0545%204.7919-17.718%2010.762-39.253%205.9698-21.535%2010.876-39.703%2010.903-40.373%200.041-1.0096-0.1172-1.3776-0.9177-2.1404-0.6687-0.63722-1.2812-0.92121-1.9863-0.92121-2.2767%200-1.4577-2.518-14.37%2044.191l-11.821%2042.764-2.224%200.9424c-2.5794%201.0929-9.1791%203.1676-9.6541%203.0352-0.1939-0.0545%204.4144-27.442%2012.668-57.422%208.2539-29.98%2015.968-56.243%2030.055-81.246%202.8249-2.8481%204.4904-3.7359%207.3131-3.8967%201.9712-0.11229%202.3328-0.0323%204.0184%200.88962l1.8525%201.0131%202.7965-1.3121c5.4236-2.5451%209.7496-5.6129%2012.77-9.0554%200.9112-1.0387%201.5498-1.7514%201.8808-2.2423l-0.014%200.0541%200.3013-0.39615c0.5273-0.69352%201.8862-3.2103%202.3557-4.3627%200.9906-2.4323%201.7195-5.5263%202.1278-9.0341%200.2499-2.1461%200.2795-19.913%200.034-20.626-0.4973-1.4468-2.5625-1.6097-3.4144-0.26929-0.2671%200.42041-0.287%200.9722-0.3737%2010.353-0.097%2010.458-0.1546%2011.419-0.8737%2014.422-0.5878%202.4547-1.7146%205.2704-2.5398%206.3464l-0.304%200.39638%200.046-18.656c0.046-18.633%200.046-18.657-0.2604-19.094-0.5269-0.75271-1.0077-1.0389-1.7458-1.0389-0.8891%200-1.5245%200.41026-1.8769%201.212-0.269%200.61213-0.2828%201.4718-0.3458%2021.486-0.03%209.4639-0.037%2017.014-0.022%2018.99v0.64642c0%201.4628-0.05%201.5404-1.6099%202.6952-0.8835%200.65398-1.7517%201.1889-1.9292%201.1889-0.1322%200-0.2272-0.4007-0.2786-1.1392%200.061-2.1272%200.1511-12.557%200.2108-25.279%200.1227-25.961%200.1186-26.451-0.1631-27.031-0.3721-0.7646-1.0732-1.1984-1.9159-1.1848-1.3119%200.0213-1.9204%200.85391-2.0429%202.7955-0.1213%201.9277-0.189%2042.574-0.097%2047.84l-0.014%200.079c-0.1035%200.80913-0.1893%202.6484-0.1893%204.0874v2.6167l-1.1509%200.49094c-0.633%200.2701-1.4359%200.41174-1.7841%200.31462-0.6075-0.16944-0.633-0.3541-0.633-4.5786v-4.4023h-0.014c0.03-3.544%200.067-8.9973%200.1049-15.55%200.1322-22.682%200.1281-23.52-0.1371-24.088-0.7622-1.6352-2.8192-1.7227-3.7073-0.15779-0.2744%200.48317-0.2871%201.1903-0.3754%2020.635-0.05%2011.074-0.1008%2021.611-0.1117%2023.416l-0.021%203.2816-1.7098%200.1144%200.1724%205e-3c-1.6911%200.22623-4.286%201.2631-5.9903%202.4378-29.663%2036.379-35.733%2098.196-50.045%20145.67-0.1808%200.2171-5.83%201.1842-6.8599%201.1744-0.2453%200-1.1641-0.68401-2.0421-1.5148l-1.596-1.5107%2013.416-48.502c7.1624-33.081%2022.022-69.107%2024.417-99.828%200.2899-3.9828%200.5-5.1547-0.1405-5.482%200.1803-0.0367%200.3056-0.0808%200.3413-0.13261%200.3163-0.45907%200.2736-7.7251-0.08-13.793-0.5914-10.117-2.013-18.051-4.0186-22.425-0.8562-1.867-1.3563-2.5246-2.7032-3.5532-0.9092-0.69421-2.2446-1.5032-2.9676-1.7976-0.9521-0.38779-1.2747-0.67554-1.1703-1.0444%204.4074-15.585%2013.547-49.249%2013.547-49.898%200-2.0102-2.6244-3.2117-4.1457-1.8981-0.5072%200.43787-2.0301%205.5654-7.1803%2024.177-3.5952%2012.992-6.8051%2024.585-7.1331%2025.762-0.5047%201.8109-0.6974%202.1391-1.2529%202.1312-0.361-5e-3%20-1.0868-0.42716-1.613-0.93771l-0.9567-0.9281%208.1675-29.539c4.492-16.247%208.1675-29.957%208.1675-30.468%200-1.2472-1.2603-2.4843-2.5306-2.4843-1.9963%200-1.7943-0.5879-9.9255%2028.901-4.1525%2015.059-7.6986%2027.777-7.88%2028.262l-0.3299%200.88207-1.2925-1.7692c-0.9371-1.2828-1.2468-1.9611-1.1266-2.4674%200.091-0.38399%202.8473-10.385%206.1245-22.224%203.2772-11.839%205.9584-22.012%205.9584-22.606%200-1.3907-1.1102-2.6375-2.3486-2.6375-2.0512%200-2.0209-0.0797-7.4827%2019.659-2.7747%2010.028-5.1894%2018.797-5.3659%2019.487-0.2902%201.1339-0.3529%201.1949-0.6506%200.63406-0.1814-0.34131-0.3844-2.3327-0.4509-4.4254-0.1752-5.5106-0.029-6.2373%204.5146-22.46%201.0655-3.8042%201.6069-6.2522%201.4913-6.743-0.228-0.9685-1.4657-2.0288-2.3682-2.0288-1.4056%200-2.0858%201.1878-3.3598%205.866-0.6649%202.4415-1.8132%206.5492-2.552%209.1282-2.7584%209.6308-3.3202%2015.763-1.9816%2021.628%201.5891%206.9636%206.212%2014.077%2013.226%2020.353%202.9422%202.6324%202.3588%202.4628%206.2057%201.806%202.8284-0.48284%206.409%201.4916%207.558%204.1676%202.0229%204.712%202.8068%2010.824%202.9954%2023.363l0.1498%209.9537h-0.1336l-0.198%202.616c-0.6487%208.573-2.1037%2018.668-3.8818%2026.932-7.3069%2026.152-15.433%2052.968-20.997%2073.091-7.2188%2026.124-13.23%2047.623-13.359%2047.774-0.1308%200.15428-0.856%200.0504-1.6444-0.23631-0.7756-0.28184-2.5001-0.68033-3.8322-0.88585l-2.4221-0.37342%200.5127-3.1953c1.939-12.089%202.4559-23.463%201.4134-31.098-1.1039-8.0844-4.0696-14.343-8.1684-17.238-0.7478-0.52815-1.4992-1.0099-1.6698-1.0705-0.1707-0.0607%204.5919-10.739%2010.583-23.73%205.9913-12.991%2010.893-23.833%2010.893-24.092%200-0.73626-0.8771-1.8914-1.6843-2.2187-1.7265-0.69998-1.589-0.9528-13.388%2024.634-9.9862%2021.655-11.168%2024.068-11.84%2024.158-0.7009%200.0945-1.8041-0.90498-2.6161-2.37-0.1571-0.28346%204.1616-9.9806%2012.563-28.208%207.9112-17.164%2012.802-28.126%2012.802-28.692%200-1.9694-2.3976-2.9502-3.5972-1.4715-0.3182%200.39239-6.0386%2012.556-12.712%2027.031-6.6732%2014.475-12.248%2026.297-12.389%2026.271-0.141-0.0258-0.7668-1.0369-1.3907-2.2471l-1.1345-2.2004%209.8135-21.289c5.3974-11.709%209.8133-21.428%209.8133-21.598%200-0.79371-0.7504-1.9165-1.503-2.2489-1.8998-0.83914-1.7628-1.077-11.119%2019.262-4.7512%2010.328-8.7391%2018.783-8.8617%2018.787-0.1227%204e-3%20-0.222-1.4545-0.2208-3.242%200-5.9364%200.996-9.0328%206.9828-21.793%202.1546-4.5924%203.7197-8.3089%203.7197-8.8328%200-1.6471-2.093-2.7126-3.1375-1.5972-0.7121%200.76041-8.62%2017.799-9.6312%2020.751-2.5443%207.4288-2.7313%2013.753-0.604%2020.429%201.4641%204.5947%205.3114%2011.298%208.9883%2015.662l1.5747%201.8683%202.5199%200.0461c3.0319%200.0553%204.4975%200.7366%206.5578%203.0485%205.471%206.139%206.7091%2020.803%203.5333%2041.84-0.329%202.18-0.6611%204.1806-0.7378%204.446-0.09%200.30909-0.8555%200.62691-2.1348%200.88557-2.8729%200.58126-6.0509%201.7671-9.4562%203.5285-13.327%206.8941-28.383%2023.341-44.133%2048.214-2.1534%203.4007-4.01%206.2171-4.1252%206.2584-0.1158%200.0409-0.6668-1.5994-1.2257-3.6463-2.8846-10.563-7.7035-25.027-11.54-34.637-7.1633-17.943-14.541-30.836-23.279-40.682l-2.7584-3.1081%201.4309-5.2946c7.8529-29.059%2017.831-50.784%2028.29-61.596%205.9107-6.1098%2010.646-8.5415%2016.635-8.5415%203.0225%200%205.6592%200.70324%207.6999%202.0536%202.8574%201.8907%202.804%201.8856%205.8667%200.57845%206.177-2.6364%2014.547-7.5679%2019.527-11.506%2012.906-10.204%2018.942-21.709%2020.671-39.401l0.1783-1.8232h-0.091l0.143-3.6618c0.082-2.0927%200.099-10.713%200.038-19.157l-0.1104-15.352-0.6942-0.74009c-0.909-0.96941-2.2332-0.95931-3.3061%200.0255l-0.8345%200.76574v19.14%2019.14h0.026c-0.1856%200.0834-0.236%200.2082-0.2379%200.3948-0.015%201.3997-0.9059%207.5601-1.4399%209.9518-1.2911%205.7839-3.6456%2011.264-6.7125%2015.625l-1.803%202.5638-0.078-14.348-0.078-14.348h-0.1467c0.041-2.0257%200.098-12.163%200.1373-24.43%200.059-18.475-0.014-25.445-0.2632-26.095-0.3446-0.89229-1.6055-1.8083-2.4891-1.8083-0.8483%200-2.1054%200.88322-2.4694%201.735-0.2658%200.62202-0.3552%207.0962-0.3552%2025.707v24.876h2.6761c0.3782%200%200.7009%205e-3%200.9943%200.0153h-0.9059-2.8219v17.377%2017.377l-2.0069%201.6226c-1.9494%201.5759-7.603%205.4774-7.937%205.4774-0.091%200-0.1659-9.4171-0.1659-20.927v-20.927h-0.091l0.078-33.15c0.057-24.559-0.014-33.526-0.2651-34.18-0.3639-0.94271-1.617-1.8083-2.6179-1.8083-0.3325%200-1.0419%200.4165-1.576%200.92534l-0.971%200.92514-0.078%2033.625-0.078%2033.624%201.1873%200.0394h-1.2365v22.592%2022.592l-6.2455%202.9778-1.9323-0.96405-1.9322-0.96428v-23.117-22.976l0.06%203e-3v-25.269-25.269l-0.6692-0.82093c-0.3926-0.48186-1.1129-0.89648-1.7432-1.0034-0.9068-0.15383-1.2313-0.0327-2.0816%200.77742l-1.0071%200.95971v47.667c0%2012.375%200.014%2021.092%200.019%2025.912l-0.073%2021.66-2.7493%200.11475c-6.7241%200.28025-12.983%203.5594-19.295%2010.11-1.6978%201.7616-3.0843%203.1316-3.0813%203.0444%200-0.0872%200.3284-2.0136%200.7232-4.2807%202.2788-13.086%203.2358-23.179%203.2473-34.244%200.014-8.3718-0.3322-12.992-1.3221-17.915l-0.2962-1.4717c0.049-3e-3%200.083-5e-3%200.083-0.01%200-0.68569-2.1494-7.3495-2.9855-9.2557-2.432-5.5449-6.1967-10.182-10.211-12.576-1.0823-0.64545-1.9664-1.2682-1.9646-1.384%200-0.11585%209.0428-17.975%2020.091-39.687%2011.049-21.712%2020.162-39.933%2020.253-40.492%200.1363-0.83741%200-1.1853-0.7407-1.9817-1.1069-1.1805-2.3753-1.273-3.4626-0.25257-0.4182%200.39239-9.9289%2018.755-21.135%2040.805-11.206%2022.05-20.406%2040.122-20.443%2040.161-0.038%200.0384-0.971-8e-3%20-2.0753-0.10344l-2.0076-0.1731-1.9438-2.7076c-1.2406-1.728-1.8794-2.8877-1.7652-3.2049%200.098-0.27339%2010.774-21.33%2023.724-46.792%2017.937-35.269%2023.569-46.597%2023.645-47.564%200.082-1.0357-0.042-1.4109-0.6757-2.0453-0.5248-0.5256-1.1779-0.78841-1.8168-0.78841zm6.4149%20127.88%201.5843%200.0602h-1.5846v-0.0602z%22%20fill%3D%22%23765c28%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(1%200%200%20.93778%202260%2075.725)%22%3E%3Crect%20x%3D%22-2260%22%20y%3D%22106.04%22%20width%3D%221920%22%20height%3D%221094%22%20fill-opacity%3D%220%22%2F%3E%3Cpath%20d%3D%22m-1126.1%201065c1.5202-0.5554%203.163%200.3024%203.6839%201.9233l33.506%20104.27c0.7194%200.092%201.4516%200.1786%202.1965%200.2591%200.7518%200.081%201.5167%200.1564%202.2951%200.2251-0.7784-0.069-1.5432-0.1439-2.2951-0.2251l-31.283-97.357c-0.5208-1.6208%200.2837-3.3729%201.8039-3.9283%201.5202-0.5555%203.1631%200.3023%203.6839%201.9231l31.63%2098.435c0.4618-0.4923%200.9992-1.0207%201.612-1.5599l-28.822-89.698c-0.5208-1.6209%200.2837-3.373%201.804-3.9284%201.5201-0.5555%203.163%200.3024%203.6838%201.9233l28.386%2088.34c0.5895-0.283%201.2115-0.5452%201.8615-0.7837l-25.828-80.379c-0.5208-1.6209%200.2838-3.373%201.804-3.9284%201.5201-0.5555%203.163%200.3024%203.6838%201.9233l26.078%2081.157c1.281-0.093%202.6369-0.082%204.0729%200.065%2013.827%201.4205%2015.346%2017.21%2034.974%2064.399%202.0025%203.0338-2.326%206.1887-4.25%203.0978-19.534-46.291-19.968-60.877-31.218-62.033-11.251-1.1558-15.655%207.0274-15.655%207.0274-0.4959%200.8575-1.3923%201.3566-2.3356%201.3002-27.492-1.6452-41.714-10.976-50.058-24.251-8.3436-13.275-11.007-29.822-17.081-46.254-0.5509-1.4314%200.1155-3.0653%201.4734-3.6111%201.3297-0.5345%202.8138%200.1808%203.316%201.598%206.3062%2017.059%209.071%2033.281%2016.569%2045.21%200.1732%200.2757%200.3514%200.5473%200.5297%200.8191%200.1387%200.2113%200.2793%200.421%200.4211%200.63-0.1412-0.2092-0.2824-0.4187-0.4211-0.63l-16.177-50.344c-0.5208-1.6209%200.2838-3.373%201.804-3.9285%201.5201-0.5554%203.163%200.3025%203.6838%201.9234l20.103%2062.562c0.8629%200.6541%201.7685%201.2833%202.7195%201.8866l-23.459-73.007c-0.5208-1.6208%200.2838-3.373%201.804-3.9284%201.5201-0.5554%203.163%200.3024%203.6838%201.9232l25.304%2078.748c0.7772%200.3141%201.5784%200.6156%202.404%200.9048%200.2597%200.091%200.5218%200.1804%200.7865%200.2689-0.2647-0.089-0.5268-0.178-0.7865-0.2689l-28.344-88.211c-0.5209-1.6209%200.2837-3.373%201.8039-3.9285%201.5202-0.5554%203.163%200.3024%203.6839%201.9233l29.614%2092.161c0.7405%200.1722%201.4976%200.3359%202.2714%200.4917%200.5074%200.1023%201.0218%200.201%201.544%200.2961-0.5219-0.095-1.0366-0.1938-1.544-0.2961l-32.522-101.21c-0.5208-1.6208%200.2838-3.3728%201.804-3.9283zm0.3958%2086.819c0.2578%200.3753%200.5211%200.7466%200.7899%201.1139-0.2688-0.3674-0.5321-0.7386-0.7899-1.1139zm0.9108%201.2796c0.1384%200.1875%200.2792%200.3735%200.4208%200.5588-0.142-0.1853-0.2822-0.3713-0.4208-0.5588zm0.6576%200.865c1.3542%201.7399%202.8456%203.3838%204.5171%204.916%200.2169%200.1989%200.4367%200.3961%200.6597%200.5913%200.4419%200.3866%200.8962%200.7658%201.3628%201.1376-0.4667-0.3718-0.9209-0.7509-1.3628-1.1376-0.223-0.1952-0.4428-0.3924-0.6597-0.5913-1.6712-1.5324-3.1632-3.1759-4.5171-4.916zm6.5705%206.6692c0.2282%200.1814%200.4594%200.3612%200.6936%200.5389-0.2342-0.1777-0.4654-0.3575-0.6936-0.5389zm3.4217%202.432c0.8163%200.5178%201.6665%201.0162%202.553%201.4951-0.8865-0.4788-1.7367-0.9773-2.553-1.4951zm2.5682%201.5032c0.8752%200.4724%201.7858%200.9252%202.7341%201.3582-0.9482-0.4329-1.8591-0.8858-2.7341-1.3582zm2.8096%201.3928c0.6333%200.2879%201.283%200.5668%201.9505%200.8366-0.6676-0.2698-1.3172-0.5487-1.9505-0.8366zm5.1534%202.0148c0.2575%200.086%200.5172%200.1707%200.7793%200.2544-0.2621-0.084-0.5218-0.1685-0.7793-0.2544zm0.8299%200.2702c0.2596%200.083%200.5216%200.1638%200.7858%200.244-0.2642-0.08-0.5262-0.1614-0.7858-0.244zm0.7966%200.2473c0.2614%200.079%200.525%200.1574%200.791%200.2343-0.266-0.077-0.5297-0.1551-0.791-0.2343zm0.9178%200.2704c0.236%200.068%200.4733%200.1347%200.7131%200.2004-0.2398-0.066-0.4772-0.1328-0.7131-0.2004zm0.8578%200.2399c0.2556%200.07%200.5131%200.1382%200.773%200.2056%200.2915%200.076%200.5857%200.1501%200.8825%200.2231-0.2968-0.073-0.591-0.1474-0.8825-0.2231-0.2601-0.068-0.5173-0.136-0.773-0.2056zm1.6603%200.43c0.291%200.072%200.5845%200.1416%200.8806%200.2105-0.2961-0.069-0.5897-0.139-0.8806-0.2105zm4.731%201.0058c0.5108%200.093%201.0285%200.1825%201.5538%200.2684-0.525-0.086-1.043-0.1754-1.5538-0.2684zm1.595%200.2753c0.5003%200.082%201.0079%200.1599%201.5214%200.2352-0.5135-0.075-1.0212-0.1534-1.5214-0.2352zm1.7696%200.2711c0.4945%200.071%200.993%200.1405%201.4998%200.2058-0.5066-0.065-1.0057-0.1344-1.4998-0.2058zm18.715-6.3779c0.019-0.01%200.038-0.013%200.057-0.021-0.019%200.01-0.038%200.013-0.057%200.021zm0.6615-0.2068c0.03-0.01%200.062-0.012%200.091-0.023-0.03%200.01-0.062%200.012-0.091%200.023zm0.7122-0.1968c0.015%200%200.031-0.011%200.049-0.01-0.015%200-0.031%200.011-0.049%200.01zm-4.5585%201.7597c-0.061%200.033-0.1202%200.066-0.1811%200.098%200.06-0.033%200.1198-0.066%200.1811-0.098zm-0.6819%200.3761c-0.07%200.04-0.1379%200.081-0.2068%200.1211%200.069-0.04%200.1369-0.082%200.2068-0.1211zm-0.6495%200.3893c-0.072%200.044-0.1419%200.089-0.2119%200.1334%200.07-0.045%200.1408-0.088%200.2119-0.1334zm-0.6565%200.4244c-0.049%200.033-0.098%200.065-0.1464%200.098%200.048-0.033%200.098-0.065%200.1464-0.098zm-4.158%203.5824c-0.1635%200.1785-0.3187%200.3524-0.4618%200.5185%200.1425-0.1655%200.2988-0.3404%200.4618-0.5185z%22%20fill%3D%22%2347381a%22%2F%3E%3Cg%20transform%3D%22matrix(.79525%200%200%20.8479%20-151.39%20545.06)%22%20fill%3D%22%2347381a%22%3E%3Ccircle%20cx%3D%22-1346.3%22%20cy%3D%22741.04%22%20r%3D%2249.721%22%2F%3E%3Ccircle%20cx%3D%22-1309.4%22%20cy%3D%22767.07%22%20r%3D%2227.747%22%2F%3E%3Ccircle%20cx%3D%22-1308.4%22%20cy%3D%22725.49%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1343.6%22%20cy%3D%22774.84%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1382.1%22%20cy%3D%22777.55%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1386.9%22%20cy%3D%22741.71%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1372.7%22%20cy%3D%22703.17%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1344.9%22%20cy%3D%22694.38%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1325.3%22%20cy%3D%22705.88%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1285.8%22%20cy%3D%22753.54%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1287.8%22%20cy%3D%22784.65%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1296.6%22%20cy%3D%22706.89%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1338.7%22%20cy%3D%22674.27%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1396.8%22%20cy%3D%22706.05%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1411%22%20cy%3D%22748.3%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1375.9%22%20cy%3D%22676.97%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1403.3%22%20cy%3D%22781.1%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1395.8%22%20cy%3D%22793.94%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1404.9%22%20cy%3D%22730.72%22%20r%3D%2210.675%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.57604%20-.58457%20.54827%20.61418%20-655.09%20-35.385)%22%20fill%3D%22%2347381a%22%3E%3Ccircle%20cx%3D%22-1346.3%22%20cy%3D%22741.04%22%20r%3D%2249.721%22%2F%3E%3Ccircle%20cx%3D%22-1309.4%22%20cy%3D%22767.07%22%20r%3D%2227.747%22%2F%3E%3Ccircle%20cx%3D%22-1308.4%22%20cy%3D%22725.49%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1343.6%22%20cy%3D%22774.84%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1382.1%22%20cy%3D%22777.55%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1386.9%22%20cy%3D%22741.71%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1372.7%22%20cy%3D%22703.17%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1344.9%22%20cy%3D%22694.38%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1325.3%22%20cy%3D%22705.88%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1285.8%22%20cy%3D%22753.54%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1287.8%22%20cy%3D%22784.65%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1296.6%22%20cy%3D%22706.89%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1338.7%22%20cy%3D%22674.27%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1396.8%22%20cy%3D%22706.05%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1411%22%20cy%3D%22748.3%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1375.9%22%20cy%3D%22676.97%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1403.3%22%20cy%3D%22781.1%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1395.8%22%20cy%3D%22793.94%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1404.9%22%20cy%3D%22730.72%22%20r%3D%2210.675%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(1.3214%20.133%20-.12489%201.4091%20418.26%20284.52)%22%20fill%3D%22%2347381a%22%3E%3Ccircle%20cx%3D%22-1346.3%22%20cy%3D%22741.04%22%20r%3D%2249.721%22%2F%3E%3Ccircle%20cx%3D%22-1309.4%22%20cy%3D%22767.07%22%20r%3D%2227.747%22%2F%3E%3Ccircle%20cx%3D%22-1308.4%22%20cy%3D%22725.49%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1343.6%22%20cy%3D%22774.84%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1382.1%22%20cy%3D%22777.55%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1386.9%22%20cy%3D%22741.71%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1372.7%22%20cy%3D%22703.17%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1344.9%22%20cy%3D%22694.38%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1325.3%22%20cy%3D%22705.88%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1285.8%22%20cy%3D%22753.54%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1287.8%22%20cy%3D%22784.65%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1296.6%22%20cy%3D%22706.89%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1338.7%22%20cy%3D%22674.27%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1396.8%22%20cy%3D%22706.05%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1411%22%20cy%3D%22748.3%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1375.9%22%20cy%3D%22676.97%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1403.3%22%20cy%3D%22781.1%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1395.8%22%20cy%3D%22793.94%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1404.9%22%20cy%3D%22730.72%22%20r%3D%2210.675%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.79846%20-.81029%20.75997%20.85133%20-801.65%20-569.06)%22%20fill%3D%22%2347381a%22%3E%3Ccircle%20cx%3D%22-1346.3%22%20cy%3D%22741.04%22%20r%3D%2249.721%22%2F%3E%3Ccircle%20cx%3D%22-1309.4%22%20cy%3D%22767.07%22%20r%3D%2227.747%22%2F%3E%3Ccircle%20cx%3D%22-1308.4%22%20cy%3D%22725.49%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1343.6%22%20cy%3D%22774.84%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1382.1%22%20cy%3D%22777.55%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1386.9%22%20cy%3D%22741.71%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1372.7%22%20cy%3D%22703.17%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1344.9%22%20cy%3D%22694.38%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1325.3%22%20cy%3D%22705.88%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1285.8%22%20cy%3D%22753.54%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1287.8%22%20cy%3D%22784.65%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1296.6%22%20cy%3D%22706.89%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1338.7%22%20cy%3D%22674.27%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1396.8%22%20cy%3D%22706.05%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1411%22%20cy%3D%22748.3%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1375.9%22%20cy%3D%22676.97%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1403.3%22%20cy%3D%22781.1%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1395.8%22%20cy%3D%22793.94%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1404.9%22%20cy%3D%22730.72%22%20r%3D%2210.675%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.49802%200%200%20.53099%20-286.5%20795.71)%22%20fill%3D%22%2347381a%22%3E%3Ccircle%20cx%3D%22-1346.3%22%20cy%3D%22741.04%22%20r%3D%2249.721%22%2F%3E%3Ccircle%20cx%3D%22-1309.4%22%20cy%3D%22767.07%22%20r%3D%2227.747%22%2F%3E%3Ccircle%20cx%3D%22-1308.4%22%20cy%3D%22725.49%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1343.6%22%20cy%3D%22774.84%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1382.1%22%20cy%3D%22777.55%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1386.9%22%20cy%3D%22741.71%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1372.7%22%20cy%3D%22703.17%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1344.9%22%20cy%3D%22694.38%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1325.3%22%20cy%3D%22705.88%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1285.8%22%20cy%3D%22753.54%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1287.8%22%20cy%3D%22784.65%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1296.6%22%20cy%3D%22706.89%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1338.7%22%20cy%3D%22674.27%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1396.8%22%20cy%3D%22706.05%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1411%22%20cy%3D%22748.3%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1375.9%22%20cy%3D%22676.97%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1403.3%22%20cy%3D%22781.1%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1395.8%22%20cy%3D%22793.94%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1404.9%22%20cy%3D%22730.72%22%20r%3D%2210.675%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(.77877%20.42056%20-.39429%20.83041%20468.46%201131.1)%22%20fill%3D%22%2347381a%22%3E%3Ccircle%20cx%3D%22-1346.3%22%20cy%3D%22741.04%22%20r%3D%2249.721%22%2F%3E%3Ccircle%20cx%3D%22-1309.4%22%20cy%3D%22767.07%22%20r%3D%2227.747%22%2F%3E%3Ccircle%20cx%3D%22-1308.4%22%20cy%3D%22725.49%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1343.6%22%20cy%3D%22774.84%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1382.1%22%20cy%3D%22777.55%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1386.9%22%20cy%3D%22741.71%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1372.7%22%20cy%3D%22703.17%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1344.9%22%20cy%3D%22694.38%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1325.3%22%20cy%3D%22705.88%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1285.8%22%20cy%3D%22753.54%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1287.8%22%20cy%3D%22784.65%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1296.6%22%20cy%3D%22706.89%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1338.7%22%20cy%3D%22674.27%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1396.8%22%20cy%3D%22706.05%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1411%22%20cy%3D%22748.3%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1375.9%22%20cy%3D%22676.97%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1403.3%22%20cy%3D%22781.1%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1395.8%22%20cy%3D%22793.94%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1404.9%22%20cy%3D%22730.72%22%20r%3D%2210.675%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(1.0852%20-.20585%20.19317%201.1572%20-543.74%2029.541)%22%20fill%3D%22%2347381a%22%3E%3Ccircle%20cx%3D%22-1346.3%22%20cy%3D%22741.04%22%20r%3D%2249.721%22%2F%3E%3Ccircle%20cx%3D%22-1309.4%22%20cy%3D%22767.07%22%20r%3D%2227.747%22%2F%3E%3Ccircle%20cx%3D%22-1308.4%22%20cy%3D%22725.49%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1343.6%22%20cy%3D%22774.84%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1382.1%22%20cy%3D%22777.55%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1386.9%22%20cy%3D%22741.71%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1372.7%22%20cy%3D%22703.17%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1344.9%22%20cy%3D%22694.38%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1325.3%22%20cy%3D%22705.88%22%20r%3D%2223.353%22%2F%3E%3Ccircle%20cx%3D%22-1285.8%22%20cy%3D%22753.54%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1287.8%22%20cy%3D%22784.65%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1296.6%22%20cy%3D%22706.89%22%20r%3D%2213.549%22%2F%3E%3Ccircle%20cx%3D%22-1338.7%22%20cy%3D%22674.27%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1396.8%22%20cy%3D%22706.05%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1411%22%20cy%3D%22748.3%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1375.9%22%20cy%3D%22676.97%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1403.3%22%20cy%3D%22781.1%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1395.8%22%20cy%3D%22793.94%22%20r%3D%2210.675%22%2F%3E%3Ccircle%20cx%3D%22-1404.9%22%20cy%3D%22730.72%22%20r%3D%2210.675%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22m-891.72%20996.73c-0.4688%200-0.9272%200.19283-1.2706%200.5785-0.2791%200.31353-7.9469%2015.228-17.04%2033.142-9.0926%2017.915-16.702%2032.87-16.91%2033.232l-0.3777%200.6595-1.0021-1.8229c-1.206-2.1937-2.7702-5.7038-2.7702-6.2162%200-0.2032%205.8981-11.966%2013.107-26.14%207.2087-14.174%2013.158-26.046%2013.222-26.382%200.3592-1.9058-2.0666-3.1389-3.2364-1.6451-0.2807%200.3583-5.9508%2011.356-12.6%2024.438-6.6493%2013.083-12.165%2023.704-12.256%2023.603-0.2706-0.298-0.6363-3.663-0.6349-5.8426%200-3.7125%200.9638-8.5892%202.5079-12.721%200.9264-2.4793%203.3835-7.6287%206.1056-12.796%203.1022-5.889%204.8935-9.3787%205.7592-11.219%200.9884-2.1014%200.8813-3.2169-0.3616-3.7659-1.1614-0.513-1.6177-0.084-3.1171%202.9303-0.7519%201.5117-2.9089%205.6801-4.7934%209.263-5.1844%209.8574-6.8484%2013.62-8.1378%2018.402-2.6379%209.7832-1.3898%2019.117%203.9131%2029.266%202.2113%204.2318%207.4153%2011.977%208.2873%2012.334%200.1893%200.077%201.1953%200.1434%202.2355%200.1465%203.5755%200.011%205.7817%200.9905%208.3486%203.7076%202.0875%202.2096%203.3987%204.5802%204.488%208.1142l0.8366%202.7137h0.028l0.1214%200.7676c0.076%200.4798%200.2811%201.7273%200.4561%202.772%201.5906%209.4964%200.5499%2024.345-2.9426%2041.982-0.8191%204.1368-0.981%204.6757-1.9483%206.489-4.8717%209.1326-8.9076%2019.672-12.562%2032.805-0.6943%202.4953-1.2825%204.566-1.307%204.6014-0.025%200.035-0.5739-0.32-1.2207-0.7897-3.5769-2.5976-8.2624-4.256-12.304-4.3547l-2.3999-0.059-0.055-42.16-0.055-42.16h-0.062l0.06-1.4576c0.075-1.8268-0.288-2.7851-1.2567-3.3193-0.8101-0.4467-1.6012-0.4484-2.4048-0.01-1.0433%200.5753-1.3115%201.2031-1.3115%203.07v1.6856l0.9894%200.027h-1.0313v42.796%2042.796l-1.7226%200.9031-1.7224%200.9031-2.9684-1.3961-2.9686-1.3959v-42.304-42.304h-0.067l0.057-9.085c0.061-9.7754%200.033-10.085-0.9894-10.943-0.685-0.5745-2.3578-0.6168-3.0792-0.078-1.0685%200.7981-1.1164%201.2705-1.1164%2011.006v9.074l1.0188%200.026h-1.0609v40.833%2040.833l-2.4308-1.5998c-1.337-0.8798-3.399-2.3651-4.582-3.3006l-2.1509-1.701v-37.532-37.532h-0.058l0.062-0.7092c0.2109-2.4175-0.6773-4.1163-2.2718-4.3443-1.8913-0.2705-2.9266%200.9716-2.9266%203.511v1.5164l1.0189%200.026h-1.0608l-0.02%2069.449-0.7568-0.9307c-2.8417-3.4945-5.4728-9.0911-6.8576-14.587-1.6217-6.4359-1.9538-12.219-1.802-31.387%200.08-10.057%200.041-13.612-0.1555-14.247-0.5572-1.8002-2.5175-2.4048-3.7019-1.1417l-0.6018%200.6419-0.1475%2015.121c-0.1824%2018.713%200.045%2023.242%201.5223%2030.333%202.8591%2013.722%2010.946%2024.263%2025.285%2032.959%204.4357%202.6901%2012.049%206.3877%2013.152%206.3877%200.325%200%201.0527-0.35%201.6171-0.7779%202.5649-1.9446%205.5985-2.8301%209.0088-2.6297%202.7293%200.1603%204.2178%200.5851%206.982%201.9924%207.3936%203.7641%2014.271%2012.566%2020.92%2026.775%204.6751%209.9906%208.912%2021.98%2012.702%2035.946%201.5077%205.5552%201.5482%205.6615%202.3604%206.2042%200.9246%200.6177%202.0199%200.4223%202.7992-0.4995%200.33-0.3904%200.6-0.9371%200.6-1.2147%200-0.6183%206.6812-11.34%2010.047-16.123%2011.58-16.456%2021.62-25.651%2030.9-28.3%202.6002-0.7422%206.1558-0.695%208.4856%200.1126%202.0729%200.7185%203.8785%201.9889%205.5857%203.9297l1.2351%201.4043%201.8193-0.1675c2.7011-0.2488%208.0047-1.2123%2011.026-2.003%2013.488-3.5299%2022.116-10.187%2027.424-21.159%202.5268-5.2234%203.7584-8.9826%206.8988-21.056%201.0983-4.2228%202.3867-8.9588%202.8629-10.524%200.6307-2.0742%200.8286-3.0568%200.7293-3.6211-0.1027-0.584%200.063-1.314%200.6738-2.9698%202.7735-7.5175%205.8708-11.802%209.0588-12.531%201.0976-0.251%201.3308-0.203%203.4005%200.699%200.6508%200.2836%200.8256%200.2307%203.0456-0.9203%201.2954-0.6715%202.9506-1.6742%203.6786-2.2281%201.947-1.4816%204.1111-4.0366%204.8869-5.77%201.2991-2.9026%201.4018-3.6446%201.4994-10.837%200.082-6.0134%200.056-6.6306-0.2894-7.038-0.7109-0.8377-1.9163-0.3962-2.1605%200.7912-0.057%200.279-0.1408%203.2817-0.1854%206.6727-0.083%206.3278-0.1901%207.1987-1.1052%208.999-0.304%200.598-0.3346-0.2197-0.3424-9.1889-0.01-9.7838-0.06-10.541-0.7505-11.032-0.4437-0.3159-1.2184-0.1819-1.6583%200.2872-0.425%200.4531-0.4364%200.7754-0.4364%2012.315v11.85l-0.6336%200.4812c-0.3486%200.2647-0.6923%200.4813-0.7637%200.4813-0.072%200-0.1301-6.4322-0.1301-14.294%200-14.14-0.054-15.316-0.7227-15.77-0.4437-0.3008-1.2976-0.2001-1.7145%200.2023-0.379%200.3657-0.3991%201.1698-0.3991%2016.059v15.674l-0.583%200.2365c-1.2143%200.4923-1.1624%201.0913-1.1624-13.426%200-12.166-0.034-13.465-0.3612-13.851-0.4629-0.5454-1.4321-0.5466-1.8941%200-0.3232%200.3808-0.365%201.7411-0.4157%2013.534l-0.056%2013.111-1.1999%200.2647c-4.3251%200.9539-8.1699%206.0157-11.225%2014.778-0.4128%201.184-0.94%202.3753-1.1715%202.6472-0.5675%200.6662-1.8188%204.8073-4.1917%2013.872-4.4095%2016.845-6.8893%2022.747-11.932%2028.398-1.6324%201.8292-5.2263%205.0265-5.4189%204.8211-0.037-0.04%203.5161-13.001%207.8965-28.802s7.9807-29.132%208.0004-29.624c0.03-0.7408-0.086-1.0108-0.6734-1.5705-0.4907-0.4676-0.9401-0.676-1.4575-0.676-1.6705%200-1.0696-1.8476-10.544%2032.426l-8.6741%2031.379-1.6319%200.6915c-1.8927%200.8019-6.7353%202.3243-7.0838%202.2271-0.1423-0.04%203.2391-20.136%209.2955-42.134%206.0564-21.998%2011.717-41.269%2022.053-59.615%202.0728-2.0899%203.2949-2.7412%205.3661-2.8593%201.4464-0.082%201.7117-0.024%202.9485%200.6528l1.3593%200.7433%202.052-0.9627c3.9796-1.8675%207.1539-4.1186%209.3698-6.6445%200.6686-0.7622%201.1372-1.2851%201.3801-1.6453l-0.01%200.04%200.2211-0.2907c0.3869-0.5089%201.384-2.3556%201.7285-3.2012%200.7269-1.7847%201.2617-4.055%201.5613-6.6288%200.1834-1.5747%200.2051-14.612%200.025-15.135-0.3649-1.0617-1.8802-1.1812-2.5053-0.1976-0.196%200.3084-0.2106%200.7133-0.2742%207.5965-0.071%207.6737-0.1135%208.379-0.6411%2010.582-0.4313%201.8012-1.2581%203.8673-1.8636%204.6568l-0.2231%200.2909%200.034-13.689c0.034-13.672%200.034-13.69-0.1911-14.01-0.3866-0.5523-0.7394-0.7623-1.281-0.7623-0.6524%200-1.1186%200.301-1.3772%200.8893-0.1974%200.4492-0.2075%201.08-0.2537%2015.765-0.022%206.9443-0.027%2012.484-0.016%2013.934v0.4743c0%201.0734-0.037%201.1303-1.1813%201.9777-0.6483%200.4798-1.2853%200.8723-1.4156%200.8723-0.097%200-0.1667-0.294-0.2044-0.8359%200.045-1.5608%200.1109-9.2141%200.1547-18.549%200.09-19.049%200.087-19.409-0.1197-19.834-0.273-0.5611-0.7875-0.8794-1.4058-0.8694-0.9626%200.016-1.4091%200.6266-1.499%202.0512-0.089%201.4145-0.1387%2031.24-0.071%2035.103l-0.01%200.058c-0.076%200.5937-0.1389%201.9432-0.1389%202.9992v1.92l-0.8445%200.3602c-0.4645%200.1982-1.0536%200.3021-1.3091%200.2309-0.4458-0.1243-0.4645-0.2598-0.4645-3.3596v-3.2303h-0.01c0.022-2.6005%200.049-6.6019%200.077-11.41%200.097-16.643%200.094-17.258-0.1006-17.675-0.5593-1.1999-2.0686-1.2641-2.7203-0.1158-0.2013%200.3545-0.2106%200.8733-0.2754%2015.141-0.037%208.1257-0.074%2015.858-0.082%2017.182l-0.015%202.4079-1.2546%200.084h0.1265c-1.2409%200.166-3.1449%200.9268-4.3955%201.7888-21.766%2026.694-26.219%2072.052-36.721%20106.89-0.1326%200.1593-4.2778%200.8689-5.0335%200.8617-0.18%200-0.8542-0.5019-1.4984-1.1115l-1.1711-1.1085%209.8439-35.589c5.2555-24.274%2016.159-50.708%2017.917-73.25%200.2127-2.9225%200.3669-3.7824-0.1031-4.0225%200.1323-0.027%200.2242-0.059%200.2504-0.097%200.2321-0.3369%200.2008-5.6684-0.059-10.121-0.4339-7.4238-1.477-13.245-2.9487-16.455-0.6282-1.37-0.9952-1.8525-1.9835-2.6072-0.6671-0.5094-1.647-1.103-2.1775-1.319-0.6986-0.2846-0.9353-0.4957-0.8587-0.7664%203.234-11.436%209.9402-36.137%209.9402-36.613%200-1.475-1.9257-2.3567-3.042-1.3928-0.3721%200.3213-1.4896%204.0837-5.2686%2017.74-2.638%209.5329-4.9933%2018.039-5.234%2018.903-0.3703%201.3287-0.5117%201.5695-0.9193%201.5638-0.2649%200-0.7975-0.3135-1.1836-0.6881l-0.702-0.681%205.993-21.675c3.2961-11.921%205.993-21.982%205.993-22.356%200-0.9151-0.9247-1.8229-1.8568-1.8229-1.4648%200-1.3166-0.4313-7.283%2021.207-3.0469%2011.05-5.6489%2020.382-5.782%2020.738l-0.2421%200.6472-0.9484-1.2981c-0.6876-0.9413-0.9148-1.439-0.8266-1.8105%200.067-0.2817%202.0892-7.6199%204.4939-16.307%202.4047-8.687%204.372-16.151%204.372-16.588%200-1.0205-0.8146-1.9353-1.7233-1.9353-1.5051%200-1.4828-0.058-5.4905%2014.425-2.036%207.3579-3.8078%2013.792-3.9373%2014.299-0.2129%200.832-0.2589%200.8768-0.4774%200.4652-0.1331-0.2504-0.282-1.7116-0.3308-3.2472-0.1286-4.0435-0.021-4.5767%203.3126-16.481%200.7818-2.7914%201.1791-4.5876%201.0943-4.9478-0.1673-0.7106-1.0755-1.4886-1.7377-1.4886-1.0314%200-1.5305%200.8715-2.4653%204.3042-0.4879%201.7915-1.3305%204.8056-1.8726%206.6979-2.024%207.0667-2.4362%2011.566-1.454%2015.87%201.166%205.1096%204.5581%2010.33%209.7045%2014.934%202.1589%201.9315%201.7308%201.8071%204.5535%201.3252%202.0754-0.3543%204.7027%201.0945%205.5458%203.0581%201.4843%203.4574%202.0595%207.9425%202.1979%2017.143l0.1099%207.3036h-0.098l-0.1453%201.9195c-0.476%206.2905-1.5436%2013.698-2.8483%2019.762-5.3615%2019.189-11.324%2038.866-15.407%2053.631-5.2969%2019.169-9.7081%2034.944-9.8025%2035.055-0.096%200.1132-0.6281%200.037-1.2066-0.1734-0.5691-0.2068-1.8345-0.4992-2.8119-0.65l-1.7773-0.274%200.3762-2.3446c1.4228-8.8703%201.8021-17.216%201.0371-22.818-0.81-5.932-2.9861-10.525-5.9936-12.649-0.5487-0.3876-1.1001-0.7411-1.2253-0.7855-0.1252-0.044%203.3694-7.8802%207.7657-17.412%204.3962-9.5323%207.9932-17.487%207.9932-17.678%200-0.5402-0.6436-1.3878-1.2359-1.628-1.2668-0.5136-1.1659-0.6991-9.8236%2018.075-7.3275%2015.89-8.195%2017.66-8.6878%2017.726-0.5143%200.069-1.3238-0.664-1.9196-1.739-0.1153-0.208%203.0536-7.3234%209.2182-20.698%205.8049-12.594%209.394-20.638%209.394-21.053%200-1.4451-1.7593-2.1648-2.6395-1.0797-0.2335%200.2879-4.4309%209.2133-9.3274%2019.834-4.8965%2010.621-8.9874%2019.296-9.0908%2019.277-0.1034-0.019-0.5626-0.7608-1.0204-1.6488l-0.8325-1.6146%207.2008-15.621c3.9604-8.5915%207.2006-15.723%207.2006-15.848%200-0.5824-0.5506-1.4063-1.1028-1.6502-1.394-0.6157-1.2935-0.7902-8.1587%2014.134-3.4863%207.5786-6.4124%2013.782-6.5024%2013.785-0.09%200-0.1629-1.0672-0.162-2.3789%200-4.3559%200.7308-6.6279%205.1237-15.991%201.581-3.3697%202.7294-6.0967%202.7294-6.4812%200-1.2086-1.5358-1.9904-2.3022-1.172-0.5225%200.558-6.325%2013.06-7.067%2015.226-1.8669%205.451-2.0041%2010.092-0.4432%2014.99%201.0743%203.3714%203.8973%208.2904%206.5953%2011.492l1.1554%201.3709%201.849%200.034c2.2247%200.041%203.3001%200.5405%204.8119%202.2369%204.0144%204.5046%204.9229%2015.264%202.5926%2030.701-0.2414%201.5996-0.4851%203.0676-0.5414%203.2623-0.066%200.2268-0.6277%200.46-1.5664%200.6498-2.108%200.4265-4.4399%201.2966-6.9386%202.5891-9.7791%205.0586-20.826%2017.127-32.383%2035.378-1.5801%202.4953-2.9424%204.5619-3.0269%204.5922-0.085%200.03-0.4893-1.1736-0.8994-2.6755-2.1166-7.7509-5.6525-18.364-8.4678-25.415-5.2562-13.166-10.67-22.626-17.081-29.851l-2.024-2.2806%201.0499-3.885c5.7622-21.322%2013.084-37.264%2020.758-45.197%204.337-4.4831%207.812-6.2674%2012.206-6.2674%202.2178%200%204.1525%200.516%205.6499%201.5068%202.0967%201.3874%202.0575%201.3836%204.3048%200.4245%204.5324-1.9345%2010.674-5.5531%2014.328-8.4426%209.4697-7.4872%2013.899-15.929%2015.168-28.911l0.1308-1.3378h-0.067l0.1049-2.6868c0.06-1.5356%200.073-7.8609%200.028-14.056l-0.081-11.264-0.5094-0.5431c-0.667-0.7113-1.6386-0.7039-2.4259%200.019l-0.6123%200.5619v14.044%2014.044h0.019c-0.1362%200.061-0.1732%200.1528-0.1746%200.2897-0.011%201.027-0.6647%205.5473-1.0565%207.3023-0.9474%204.244-2.675%208.2653-4.9254%2011.465l-1.323%201.8811-0.057-10.528-0.057-10.528h-0.1076c0.03-1.4864%200.072-8.925%200.1007-17.926%200.043-13.556-0.01-18.67-0.1931-19.147-0.2529-0.6547-1.1781-1.3269-1.8264-1.3269-0.6225%200-1.5449%200.6481-1.812%201.2731-0.195%200.4565-0.2606%205.207-0.2606%2018.863v18.253h1.9636c0.2775%200%200.5143%200%200.7296%200.011h-0.6647-2.0706v12.751%2012.751l-1.4726%201.1906c-1.4304%201.1563-5.5788%204.0191-5.8239%204.0191-0.067%200-0.1217-6.9099-0.1217-15.356v-15.356h-0.067l0.057-24.324c0.042-18.02-0.01-24.6-0.1945-25.08-0.267-0.6917-1.1865-1.3269-1.9209-1.3269-0.244%200-0.7645%200.3056-1.1564%200.679l-0.7125%200.6788-0.057%2024.672-0.057%2024.672%200.8712%200.029h-0.9073v16.577%2016.577l-2.2913%201.0925-2.2914%201.0925-1.4178-0.7074-1.4178-0.7076v-16.962-16.859h0.044v-18.542-18.542l-0.491-0.6024c-0.2881-0.3535-0.8166-0.6578-1.2791-0.7363-0.6654-0.1128-0.9035-0.024-1.5274%200.5705l-0.739%200.7042v34.976c0%209.0803%200.01%2015.477%200.014%2019.014l-0.054%2015.894-2.0173%200.084c-4.9339%200.2056-9.5263%202.6118-14.158%207.4181-1.2458%201.2926-2.2632%202.2978-2.261%202.2338%200-0.064%200.241-1.4775%200.5307-3.141%201.6721-9.6023%202.3743-17.008%202.3827-25.127%200.01-6.143-0.2437-9.5333-0.9701-13.145l-0.2173-1.0799c0.036%200%200.061%200%200.061-0.01%200-0.5031-1.5772-5.3928-2.1907-6.7915-1.7845-4.0686-4.5469-7.4708-7.4927-9.2275-0.7942-0.4736-1.4429-0.9306-1.4416-1.0156%200-0.085%206.6353-13.189%2014.742-29.121s14.794-29.302%2014.861-29.712c0.1-0.6145%200-0.8698-0.5435-1.4541-0.8122-0.8662-1.7429-0.9341-2.5407-0.1853-0.3069%200.2879-7.2855%2013.761-15.508%2029.941-8.2227%2016.18-14.973%2029.44-15%2029.468-0.028%200.028-0.7125-0.01-1.5228-0.076l-1.4731-0.127-1.4263-1.9867c-0.9103-1.268-1.379-2.1189-1.2952-2.3517%200.072-0.2006%207.9057-15.651%2017.408-34.334%2013.162-25.879%2017.294-34.191%2017.35-34.9%200.06-0.75998-0.031-1.0353-0.4958-1.5008-0.3851-0.38567-0.8643-0.57851-1.3331-0.57851zm4.707%2093.831%201.1625%200.044h-1.1627v-0.044z%22%20fill%3D%22%2347381a%22%2F%3E%3Cpath%20d%3D%22m-1657.1%20922.81c0.5485%200%201.0849%200.22562%201.4867%200.67689%200.3266%200.36685%209.2986%2017.818%2019.938%2038.78%2010.639%2020.962%2019.543%2038.46%2019.786%2038.884l0.4419%200.7717%201.1725-2.133c1.4112-2.5668%203.2414-6.6739%203.2414-7.2735%200-0.23783-6.9012-14.002-15.336-30.586-8.4348-16.584-15.396-30.476-15.471-30.869-0.4203-2.2299%202.418-3.6727%203.7868-1.9249%200.3284%200.41934%206.963%2013.287%2014.743%2028.595%207.7802%2015.308%2014.234%2027.736%2014.341%2027.618%200.3167-0.3487%200.7446-4.2861%200.743-6.8364%200-4.3439-1.1278-10.05-2.9345-14.885-1.084-2.901-3.959-8.9263-7.1441-14.973-3.6299-6.8906-5.7258-10.974-6.7387-13.127-1.1566-2.4588-1.0312-3.7641%200.4231-4.4064%201.3589-0.60024%201.8928-0.0983%203.6472%203.4287%200.8798%201.7688%203.4036%206.6461%205.6087%2010.838%206.0662%2011.534%208.0132%2015.937%209.5219%2021.532%203.0866%2011.447%201.6262%2022.369-4.5786%2034.244-2.5874%204.9516-8.6766%2014.014-9.6969%2014.431-0.2214%200.091-1.3986%200.1679-2.6157%200.1715-4.1836%200.013-6.7651%201.159-9.7686%204.3382-2.4425%202.5855-3.9768%205.3592-5.2513%209.4943l-0.9789%203.1753h-0.033l-0.1421%200.898c-0.089%200.5615-0.3289%202.0212-0.5336%203.2436-1.8612%2011.112-0.6435%2028.485%203.4431%2049.123%200.9584%204.8404%201.1479%205.471%202.2796%207.5928%205.7004%2010.686%2010.423%2023.018%2014.699%2038.385%200.8124%202.9197%201.5006%205.3426%201.5293%205.384%200.029%200.041%200.6715-0.3744%201.4283-0.924%204.1853-3.0394%209.6678-4.9799%2014.396-5.0954l2.8081-0.069%200.128-98.661h0.072l-0.07-1.7055c-0.088-2.1375%200.337-3.2588%201.4705-3.8839%200.9479-0.5226%201.8735-0.5246%202.8138-0.01%201.2208%200.6732%201.5346%201.4078%201.5346%203.5921v1.9723l-1.1576%200.031h1.2066v50.075%2050.076l2.0156%201.0567%202.0153%201.0567%203.4734-1.6335%203.4735-1.6334v-49.499-49.499h0.078l-0.067-10.63c-0.071-11.438-0.039-11.8%201.1577-12.804%200.8016-0.6723%202.7588-0.7218%203.603-0.091%201.2502%200.9338%201.3063%201.4867%201.3063%2012.878v10.617l-1.1921%200.03h1.2413v47.778%2047.778l2.8442-1.8718c1.5644-1.0295%203.9771-2.7674%205.3614-3.862l2.5167-1.9903v-43.916-43.916h0.068l-0.072-0.8299c-0.2467-2.8287%200.7926-4.8163%202.6582-5.0831%202.2131-0.3165%203.4244%201.1368%203.4244%204.1082v1.7743l-1.1922%200.03h1.2412l0.012%2040.631%200.012%2040.631%200.8855-1.089c3.325-4.0888%206.4036-10.637%208.024-17.068%201.8975-7.5306%202.2861-14.297%202.1084-36.725-0.094-11.768-0.048-15.928%200.182-16.67%200.6519-2.1064%202.9457-2.8138%204.3316-1.3359l0.7041%200.7511%200.1725%2017.693c0.2135%2021.895-0.052%2027.196-1.7811%2035.492-3.3454%2016.055-12.808%2028.39-29.586%2038.565-5.1902%203.1476-14.098%207.4741-15.389%207.4741-0.3803%200-1.2318-0.4095-1.8921-0.9102-3.0012-2.2753-6.5508-3.3114-10.541-3.077-3.1935%200.1875-4.9352%200.6847-8.1695%202.3313-8.6512%204.4043-16.699%2014.704-24.479%2031.329-5.4703%2011.69-10.428%2025.719-14.863%2042.06-1.7641%206.5-1.8115%206.6244-2.7618%207.2594-1.0819%200.7228-2.3635%200.4942-3.2753-0.5844-0.3861-0.4569-0.7021-1.0965-0.7021-1.4214%200-0.7234-7.8175-13.269-11.756-18.865-13.549-19.255-25.297-30.014-36.155-33.113-3.0424-0.8685-7.2028-0.8133-9.9289%200.1317-2.4254%200.8408-4.5382%202.3272-6.5357%204.5981l-1.4451%201.6431-2.1289-0.1959c-3.1604-0.2912-9.3661-1.4185-12.901-2.3437-15.782-4.1303-25.878-11.92-32.088-24.758-2.9566-6.1118-4.3977-10.51-8.0722-24.637-1.2851-4.941-2.7926-10.482-3.3498-12.314-0.738-2.4271-0.9695-3.5768-0.8533-4.237%200.1202-0.6834-0.074-1.5375-0.7885-3.4749-3.2452-8.7962-6.8693-13.809-10.6-14.662-1.2843-0.2937-1.5572-0.2375-3.9789%200.8179-0.7615%200.3319-0.966%200.2699-3.5636-1.0768-1.5157-0.7858-3.4525-1.959-4.3043-2.6072-2.2782-1.7335-4.8103-4.7231-5.7181-6.7513-1.5201-3.3963-1.6402-4.2646-1.7544-12.68-0.096-7.0361-0.065-7.7584%200.3386-8.2351%200.8318-0.9801%202.2423-0.4635%202.528%200.9258%200.067%200.3265%200.1648%203.84%200.217%207.8077%200.097%207.4041%200.2223%208.4231%201.2931%2010.53%200.3557%200.6997%200.3915-0.257%200.4006-10.752%200.012-11.448%200.07-12.334%200.8782-12.909%200.5192-0.3697%201.4256-0.2129%201.9403%200.3359%200.4973%200.5303%200.5107%200.9075%200.5107%2014.41v13.865l0.7413%200.5631c0.4079%200.3096%200.81%200.5631%200.8937%200.5631%200.084%200%200.1522-7.5263%200.1522-16.725%200-16.544%200.063-17.921%200.8456-18.452%200.5192-0.352%201.5183-0.234%202.0061%200.2367%200.4435%200.428%200.467%201.3688%200.467%2018.791v18.34l0.6821%200.2766c1.4209%200.576%201.3602%201.277%201.3602-15.709%200-14.235%200.039-15.755%200.4225-16.206%200.5417-0.6383%201.6758-0.6396%202.2163%200%200.3782%200.4455%200.4271%202.0371%200.4864%2015.836l0.065%2015.341%201.404%200.3096c5.0607%201.1163%209.5595%207.0389%2013.134%2017.292%200.483%201.3855%201.0998%202.7794%201.3707%203.0975%200.664%200.7795%202.1282%205.6249%204.9046%2016.232%205.1596%2019.71%208.0612%2026.616%2013.962%2033.228%201.91%202.1403%206.1152%205.8815%206.3406%205.6411%200.043-0.047-4.1142-15.212-9.2396-33.701-5.1255-18.489-9.3381-34.087-9.3611-34.663-0.035-0.8668%200.1006-1.1828%200.7879-1.8377%200.5741-0.5471%201.1-0.7909%201.7054-0.7909%201.9546%200%201.2515-2.1619%2012.338%2037.941l10.149%2036.716%201.9095%200.8091c2.2146%200.9382%207.8808%202.7196%208.2886%202.6059%200.1665-0.046-3.79-23.561-10.876-49.3-7.0865-25.739-13.71-48.288-25.804-69.754-2.4254-2.4453-3.8553-3.2075-6.2788-3.3456-1.6924-0.096-2.0029-0.027-3.45%200.7638l-1.5905%200.8698-2.401-1.1266c-4.6565-2.1851-8.3707-4.819-10.964-7.7746-0.7824-0.8918-1.3306-1.5036-1.6148-1.9251l0.012%200.046-0.2587-0.3402c-0.4527-0.5954-1.6194-2.7562-2.0225-3.7456-0.8505-2.0883-1.4763-4.7447-1.8269-7.7564-0.2145-1.8425-0.2399-17.097-0.029-17.709%200.4269-1.2422%202.2-1.382%202.9314-0.2312%200.2294%200.361%200.2464%200.8347%200.3209%208.8886%200.083%208.9789%200.1327%209.8041%200.7501%2012.382%200.5047%202.1075%201.4721%204.525%202.1806%205.4488l0.261%200.3403-0.04-16.018c-0.039-15.998-0.039-16.018%200.2236-16.393%200.4523-0.64625%200.8651-0.89197%201.4989-0.89197%200.7633%200%201.3088%200.35223%201.6114%201.0406%200.2309%200.52555%200.2428%201.2636%200.2969%2018.447%200.026%208.1254%200.032%2014.608%200.019%2016.304v0.5549c0%201.256%200.043%201.3227%201.3822%202.3141%200.7585%200.5614%201.5039%201.0208%201.6563%201.0208%200.1135%200%200.1951-0.3441%200.2392-0.9781-0.052-1.8263-0.1297-10.781-0.181-21.704-0.1053-22.289-0.1018-22.71%200.1401-23.208%200.3194-0.65645%200.9214-1.0289%201.6449-1.0172%201.1263%200.0183%201.6488%200.73314%201.7539%202.4001%200.1042%201.6551%200.1623%2036.553%200.083%2041.074l0.012%200.068c0.089%200.6947%200.1626%202.2738%200.1626%203.5094v2.2466l0.9881%200.4214c0.5435%200.2319%201.2328%200.3536%201.5317%200.2701%200.5216-0.1454%200.5435-0.304%200.5435-3.931v-3.7796h0.012c-0.026-3.0428-0.058-7.7248-0.09-13.351-0.1135-19.474-0.11-20.193%200.1177-20.681%200.6544-1.404%202.4204-1.4791%203.1829-0.13547%200.2356%200.41483%200.2465%201.0219%200.3223%2017.716%200.043%209.5077%200.087%2018.555%200.096%2020.104l0.018%202.8176%200.734%200.049%200.7339%200.049h-0.148c1.4519%200.1943%203.6798%201.0844%205.1431%202.0931%2025.468%2031.234%2030.679%2084.307%2042.967%20125.07%200.1552%200.1864%205.0054%201.0167%205.8896%201.0083%200.2106%200%200.9995-0.5873%201.7533-1.3006l1.3703-1.297-11.518-41.642c-6.1494-28.402-18.907-59.333-20.964-85.709-0.2489-3.4195-0.4293-4.4257%200.1207-4.7067-0.1548-0.032-0.2624-0.069-0.2931-0.1138-0.2715-0.3942-0.2349-6.6325%200.069-11.842%200.5078-8.6865%201.7283-15.498%203.4502-19.254%200.7351-1.603%201.1645-2.1676%202.3209-3.0507%200.7806-0.59602%201.9271-1.2906%202.5479-1.5433%200.8174-0.33294%201.0944-0.57999%201.0048-0.89671-3.7841-13.381-11.631-42.283-11.631-42.84%200-1.7258%202.2532-2.7575%203.5593-1.6296%200.4355%200.37594%201.743%204.7782%206.1648%2020.758%203.0867%2011.154%205.8426%2021.107%206.1242%2022.118%200.4333%201.5548%200.5988%201.8365%201.0757%201.8298%200.3099-4e-3%200.9331-0.36674%201.3849-0.80508l0.8213-0.79683-7.0123-25.361c-3.8566-13.949-7.0123-25.72-7.0123-26.159%200-1.0708%201.0821-2.1329%202.1727-2.1329%201.7139%200%201.5405-0.50475%208.5217%2024.814%203.5651%2012.929%206.6097%2023.848%206.7654%2024.265l0.2833%200.75731%201.1097-1.5189c0.8045-1.1014%201.0704-1.6838%200.9672-2.1184-0.078-0.32968-2.4446-8.9159-5.2582-19.08-2.8137-10.164-5.1157-18.898-5.1157-19.409%200-1.194%200.9532-2.2645%202.0164-2.2645%201.7611%200%201.7351-0.0684%206.4244%2016.878%202.3823%208.6094%204.4554%2016.138%204.607%2016.731%200.2491%200.97356%200.3029%201.0259%200.5585%200.54438%200.1558-0.29304%200.3301-2.0028%200.3872-3.7995%200.1504-4.7312%200.025-5.3552-3.8761-19.284-0.9148-3.2662-1.3796-5.3679-1.2804-5.7893%200.1958-0.83152%201.2584-1.7419%202.0333-1.7419%201.2068%200%201.7908%201.0198%202.8846%205.0363%200.5708%202.0962%201.5567%205.6229%202.191%207.8372%202.3683%208.2686%202.8506%2013.533%201.7014%2018.569-1.3644%205.9787-5.3334%2012.086-11.355%2017.474-2.5261%202.26-2.0252%202.1144-5.328%201.5506-2.4284-0.4145-5.5026%201.2807-6.4891%203.5782-1.7368%204.0456-2.4098%209.2934-2.5717%2020.059l-0.1286%208.5459h0.1147l0.17%202.246c0.5569%207.3604%201.8061%2016.027%203.3328%2023.123%206.2734%2022.453%2013.25%2045.476%2018.028%2062.753%206.1978%2022.429%2011.359%2040.887%2011.47%2041.018%200.1123%200.1324%200.7349%200.043%201.4118-0.2029%200.6659-0.2421%202.1465-0.5841%203.2902-0.7606l2.0795-0.3206-0.4401-2.7434c-1.6648-10.379-2.1086-20.144-1.2135-26.7%200.9477-6.9409%203.494-12.314%207.0131-14.8%200.642-0.4534%201.2871-0.8669%201.4336-0.9191%200.1465-0.052-3.9425-9.2204-9.0865-20.374-5.144-11.154-9.3527-20.462-9.3527-20.685%200-0.6322%200.753-1.6239%201.4461-1.9049%201.4823-0.601%201.3642-0.818%2011.494%2021.15%208.5738%2018.592%209.5889%2020.664%2010.166%2020.741%200.6018%200.081%201.5489-0.777%202.2461-2.0348%200.1349-0.2434-3.573-8.569-10.786-24.218-6.7922-14.736-10.992-24.148-10.992-24.634%200-1.6908%202.0585-2.533%203.0884-1.2633%200.2732%200.3368%205.1845%2010.78%2010.914%2023.208%205.7294%2012.428%2010.516%2022.577%2010.637%2022.555%200.1211-0.022%200.6584-0.8902%201.194-1.9292l0.9741-1.8891-8.4256-18.278c-4.634-10.053-8.4253-18.397-8.4253-18.544%200-0.6815%200.6443-1.6455%201.2904-1.9309%201.6311-0.7204%201.5135-0.9246%209.5464%2016.537%204.0792%208.8676%207.5031%2016.126%207.6083%2016.13%200.1054%200%200.1906-1.2488%200.1896-2.7835%200-5.0968-0.8551-7.7552-5.9952-18.711-1.8499-3.9429-3.1936-7.1338-3.1936-7.5836%200-1.4141%201.797-2.3289%202.6938-1.3713%200.6113%200.6529%207.4008%2015.281%208.269%2017.816%202.1844%206.3781%202.3449%2011.808%200.5185%2017.54-1.257%203.9449-4.5602%209.7005-7.717%2013.446l-1.352%201.6041-2.1635%200.039c-2.6031%200.047-3.8614%200.6324-5.6303%202.6174-4.6972%205.2707-5.7602%2017.86-3.0335%2035.922%200.2824%201.8717%200.5676%203.5893%200.6334%203.8171%200.077%200.2654%200.7345%200.5383%201.8329%200.7603%202.4665%200.4991%205.1951%201.5172%208.1187%203.0295%2011.442%205.919%2024.368%2020.04%2037.891%2041.395%201.8488%202.9198%203.4428%205.3378%203.5417%205.3733%200.099%200.035%200.5725-1.3732%201.0524-3.1306%202.4766-9.0692%206.6139-21.487%209.908-29.738%206.1502-15.405%2012.485-26.475%2019.987-34.928l2.3683-2.6685-1.2285-4.5458c-6.7422-24.949-15.309-43.602-24.289-52.884-5.0747-5.2456-9.1407-7.3334-14.282-7.3334-2.5951%200-4.8588%200.6038-6.6109%201.7631-2.4533%201.6233-2.4074%201.6189-5.0369%200.4966-5.3034-2.2634-12.489-6.4975-16.766-9.8784-11.08-8.7607-16.262-18.639-17.747-33.829l-0.1531-1.5654h0.078l-0.1228-3.1438c-0.07-1.7967-0.085-9.1979-0.033-16.447l0.095-13.18%200.596-0.63542c0.7804-0.8323%201.9174-0.82362%202.8385%200.0219l0.7165%200.65744v16.433%2016.432h-0.022c0.1593%200.071%200.2026%200.1788%200.2042%200.339%200.013%201.2017%200.7778%206.4908%201.2363%208.5443%201.1084%204.9658%203.1299%209.6711%205.7631%2013.415l1.548%202.2012%200.067-12.318%200.067-12.319h0.1259c-0.035-1.7392-0.084-10.443-0.1178-20.975-0.051-15.862%200.012-21.846%200.2259-22.404%200.2959-0.76609%201.3785-1.5526%202.1371-1.5526%200.7283%200%201.8076%200.7583%202.1201%201.4896%200.2282%200.53404%200.305%206.0926%200.305%2022.071v21.358h-2.2976c-0.3247%200-0.6018%200-0.8537%200.013h0.7778%202.4228v14.92%2014.919l1.723%201.3932c1.6737%201.353%206.5277%204.7027%206.8144%204.7027%200.078%200%200.1425-8.0852%200.1425-17.967v-17.968h0.078l-0.067-28.461c-0.049-21.085%200.012-28.784%200.2276-29.346%200.3125-0.80938%201.3883-1.5526%202.2477-1.5526%200.2854%200%200.8945%200.35759%201.3531%200.79446l0.8336%200.7943%200.067%2028.869%200.067%2028.869-1.0194%200.034h1.0616v19.397%2019.397l5.3622%202.5566%201.659-0.8276%201.6589-0.8279v-19.847-19.726h-0.052v-21.695-21.695l0.5745-0.70483c0.3371-0.4137%200.9555-0.76968%201.4967-0.86151%200.7785-0.13208%201.0571-0.0281%201.7872%200.66746l0.8646%200.82397v40.925c0%2010.625-0.012%2018.109-0.016%2022.248l0.063%2018.597%202.3604%200.099c5.7731%200.2405%2011.147%203.0559%2016.566%208.6797%201.4576%201.5124%202.648%202.6887%202.6455%202.6138%200-0.075-0.282-1.7288-0.6209-3.6752-1.9565-11.236-2.7782-19.901-2.7881-29.401-0.012-7.1878%200.2853-11.155%201.1351-15.381l0.2543-1.2635c-0.042%200-0.071%200-0.071-0.01%200-0.5887%201.8454-6.3101%202.5632-7.9467%202.0881-4.7606%205.3203-8.7415%208.7672-10.797%200.9292-0.5542%201.6883-1.0889%201.6867-1.1883%200-0.099-7.7638-15.433-17.25-34.074-9.4859-18.641-17.311-34.285-17.389-34.765-0.117-0.71897%200-1.0177%200.6359-1.7014%200.9504-1.0135%202.0394-1.093%202.9729-0.21684%200.359%200.33689%208.5246%2016.102%2018.146%2035.033%209.6212%2018.931%2017.519%2034.448%2017.551%2034.481%200.033%200.033%200.8336-0.01%201.7817-0.089l1.7237-0.1487%201.6689-2.3246c1.0651-1.4836%201.6136-2.4793%201.5155-2.7516-0.084-0.2347-9.2503-18.313-20.369-40.174-15.4-30.281-20.235-40.007-20.3-40.836-0.07-0.88925%200.036-1.2114%200.5801-1.756%200.4506-0.45126%201.0113-0.6769%201.5598-0.6769zm-5.5076%20109.79-1.3602%200.052h1.3604v-0.052z%22%20fill%3D%22%2347381a%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
	},
	logo : "data:image/svg+xml;utf8,%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%20812.42%20220.99%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%20rdf%3Aabout%3D%22%22%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%2F%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22b%22%20x1%3D%22967.1%22%20x2%3D%22967%22%20y1%3D%22340.96%22%20y2%3D%22358.71%22%20gradientTransform%3D%22translate(-554.58%20-149.1)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20offset%3D%220%22%2F%3E%3Cstop%20stop-opacity%3D%220%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22a%22%20x1%3D%22942.76%22%20x2%3D%22942.32%22%20y1%3D%22436.73%22%20y2%3D%22281.22%22%20gradientTransform%3D%22translate(-554.58%20-149.1)%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20offset%3D%220%22%2F%3E%3Cstop%20stop-color%3D%22%23005679%22%20stop-opacity%3D%220%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22translate(0%20-94.876)%22%3E%3Cpath%20d%3D%22m20.062%20106.75c-10.902%201e-3%20-20.061%209.1602-20.062%2020.062v2e-3%20134.6%202e-3c1e-3%2010.902%209.1602%2020.059%2020.062%2020.061h2e-3%2023.717%202e-3c10.902-1e-3%2020.061-9.1583%2020.062-20.061v-2e-3%20-35.674h13.934c7.5625%200%2015.067-1.3952%2022.066-4.2773h2e-3c2.5776-1.0614%205.0328-2.3726%207.416-3.8047-1.0443%204.3723-1.7246%208.8205-1.7246%2013.318%202e-5%205.8962%200.74643%2011.737%202.3555%2017.369%200.0595%200.20846%200.12125%200.41663%200.1875%200.62305l2e-3%206e-3c1.8714%205.8224%204.7387%2011.343%208.6465%2016.17l2e-3%202e-3c0.21912%200.27056%200.44678%200.53613%200.67968%200.79493%204.1548%204.6165%209.1639%208.3094%2014.635%2011.045l0.0391%200.0195c0.17462%200.0867%200.35027%200.17038%200.52735%200.25195%206.3823%202.9457%2013.262%204.2188%2020.068%204.2188h50.176v14.328%202e-3c1e-3%2010.902%209.1602%2020.059%2020.062%2020.061h2e-3%2022.928%202e-3c10.902-1e-3%2020.061-9.1583%2020.062-20.061v-2e-3%20-14.328h2.0723c7.7424%200%2015.342-1.1438%2022.488-3.8613%206.9791-2.6053%2013.445-6.5643%2018.777-11.896%200.50057-0.50057%200.93536-1.0567%201.4141-1.5762%200.48078%200.54791%200.92439%201.1241%201.4297%201.6523%200.08%200.0839%200.16078%200.16752%200.24219%200.25%200.0227%200.0229%200.0455%200.0457%200.0684%200.0684%204.6833%204.6834%2010.161%208.4972%2016.158%2011.299%204e-3%202e-3%208e-3%204e-3%200.0117%206e-3%203e-3%201e-3%205e-3%203e-3%208e-3%204e-3%200.16078%200.0751%200.32361%200.14794%200.48633%200.21875l0.0215%200.01c6.5205%202.8255%2013.557%204.2227%2020.627%204.2227h51.191c3.4864-3.6e-4%206.7475-1.0157%209.6348-2.6465%202.7107%201.3889%205.7162%202.2497%208.9141%202.25h2e-3%2024.508%202e-3c10.902-1e-3%2020.061-9.1583%2020.062-20.061v-2e-3%20-41.605c0.026-0.0421%200.1588-0.25033%200.293-0.46484%201.3012-1.863%202.9779-3.637%205.4336-5.459%200.028-0.0207%200.056-0.0416%200.084-0.0625%202.6734-2.0051%205.4936-3.5431%208.7324-4.7363%200.1188-0.0436%200.2375-0.0889%200.3555-0.13477%200.025-0.01%200.049-0.0195%200.074-0.0293%203.01-1.1882%205.2907-1.5644%207.2617-1.5644h2.5684c0.4954-5e-5%200.9637-0.11322%201.4512-0.15039%202.3339%201.3413%204.9276%202.2026%207.6914%202.5039v51.9%202e-3c9e-4%2010.902%209.1601%2020.061%2020.062%2020.062h20.754c8.2608-8.4e-4%2015.5-5.2678%2018.533-12.559%203.0798%207.1917%2010.282%2012.359%2018.471%2012.359h23.324c3.7069-3.7e-4%207.1733-1.123%2010.186-2.9492%203.0122%201.8263%206.4787%202.9488%2010.186%202.9492h47.832c6.3922%200%2012.765-1.2532%2018.689-3.7598v2e-3c2.8035-1.1861%205.4945-2.6362%208.0352-4.3242%203.6959%204.85%209.4609%208.0814%2015.891%208.082h22.137c8.7664-7.2e-4%2016.317-5.9572%2018.975-13.945%202.6575%207.9876%2010.207%2013.944%2018.973%2013.945h22.334c10.902-1e-3%2020.061-9.1583%2020.062-20.061v-2e-3%20-66.213c0-6.5117-1.145-12.962-3.3086-19.086-2.3171-6.6893-6.0247-12.83-10.877-17.984-4.9103-5.4831-10.982-9.7071-17.633-12.658-7.3848-3.3382-15.376-4.7266-23.428-4.7266h-5.039v-13.932-2e-3c0-10.902-9.1583-20.059-20.061-20.061l-22.139-2e-3c-10.902%201e-3%20-20.06%209.1603-20.061%2020.062v2e-3%2013.479c-1.4146-0.32755-2.8691-0.53501-4.3691-0.53516h-44.272-0.01c-6.8038%209.7e-4%20-13.681%201.2745-20.061%204.2188-0.6815%200.31452-1.3206%200.70673-1.9844%201.0547v-18.217-2e-3c0-10.902-9.1602-20.061-20.062-20.062h-23.324c-2.6153%202.6e-4%20-5.1193%200.55592-7.4316%201.5078-2.3139-0.95335-4.82-1.5076-7.4375-1.5078h-7.1153-0.012c-7.7961%201e-3%20-15.5%201.288-22.691%204.2226-6.6963%202.6578-12.846%206.6093-17.971%2011.734l-0.023%200.0254c-0.092%200.0924-0.1833%200.18515-0.2735%200.2793%200%203e-3%200%207e-3%20-0.01%200.01-5.1893%205.4176-8.9554%2011.943-11.365%2018.93-0.5281%201.5029-0.757%203.0268-1.1445%204.541-3.2813-2.3454-7.2432-3.7672-11.494-3.7676h-2.5684c-5.4694%200-10.937%200.51285-16.348%201.5273-3.6888%200.69168-7.272%201.7178-10.799%202.8945-3.7085-4.3375-9.1297-7.1889-15.15-7.1894h-2e-3%20-24.395c-0.0384-8.1e-4%20-0.0768-1e-3%20-0.11523-2e-3%20-7.5616%207.5e-4%20-14.205%204.4535-17.615%2010.791-2.0874-1.5398-4.258-2.963-6.5547-4.1738-7.1726-3.9932-15.225-5.8242-23.236-5.8242h-22.531c-7.2514%200-14.259%201.8531-20.57%204.9648-6.2441%202.9512-11.855%207.1022-16.531%2012.186-0.35179%200.38237-0.60458%200.83919-0.94532%201.2305-0.78088-0.87075-1.5428-1.7578-2.3867-2.5742-5.2349-5.1874-11.548-9.0619-18.361-11.643-7.2094-2.9143-14.92-4.166-22.74-4.166h-45.064c-1.0238%202e-3%20-2.0448%200.10828-3.0469%200.31836-5.8276%200.93213-10.868%204.4236-13.92%209.293-2.7476-1.881-5.6477-3.5306-8.6894-4.8809-7.4505-3.3693-15.503-4.7305-23.633-4.7305h-11.859c-0.0742%203e-3%20-0.14846%207e-3%20-0.22265%200.0117-7.6777%200.0241-15.269%201.2879-22.354%204.2441-2.3812%200.94847-4.676%202.1045-6.9102%203.373-0.67524-2.4108-1.4598-4.792-2.4648-7.0977-2.766-6.6332-6.7483-12.706-11.82-17.818-5.0782-5.2489-11.211-9.3222-17.914-12.119-7.0359-3.0676-14.64-4.5879-22.309-4.5879h-57.662c-0.0182-7e-4%20-0.0365-1e-3%20-0.0547-2e-3zm565.61%2029.926h3.5977v3.4004h-3.5977zm134.14%200h2.414v19.736c0.011%208.864%207.6808%2015.776%2016.498%2014.867%200.021-2e-3%200.043-4e-3%200.064-6e-3%200.2317-0.0206%200.4629-0.0467%200.6934-0.0781-0.1015%208e-3%20-0.177%200.0122-0.2871%200.0195%200.3119-0.0358%200.6226-0.0814%200.9316-0.13672-0.034%207e-3%20-0.067%200.0133-0.1015%200.0195l-0.096%200.0156c1.62-0.2859%203.4162-0.44141%205.4023-0.44141h11.857c4.6627%200%208.2865%200.78714%2011.127%202.0762%200.044%200.0197%200.088%200.0393%200.1328%200.0586%203.2815%201.451%205.7266%203.2538%207.584%205.3516%200.1193%200.135%200.2411%200.26784%200.3652%200.39844%202.0079%202.1093%203.4816%204.5253%204.4668%207.3848%200.013%200.0404%200.027%200.0808%200.041%200.12109%201.084%203.0606%201.6035%206.0805%201.6035%209.1387v56.352h-2.6113v-51.609c0-2.9019-0.2421-5.6741-0.7773-8.3789-0.6094-3.1986-2.6304-7.4114-4.8145-9.9023-2.2195-2.6206-5.5796-4.8415-8.6777-6.0488-4.2051-1.7899-7.6461-2.1328-11.998-2.1328h-4.9414c-4.3417%200-8.0591%200.44829-12.096%202.082-3.2016%201.228-6.7407%203.5446-8.9765%206.2773-2.1817%202.6666-3.6277%205.881-4.42%208.9062-0.08%200.30628-0.1504%200.61503-0.2109%200.92578-0.5076%202.6024-0.7598%205.3608-0.7598%208.2734v51.607h-2.414v-114.88zm-689.88%202e-3h47.854c3.8275%200%207.2424%200.72031%2010.416%202.1152%200.0998%200.0434%200.20006%200.0857%200.30078%200.12695%203.2675%201.3521%205.8899%203.1468%208.043%205.3848%200.0613%200.0637%200.12314%200.12685%200.18554%200.18945%202.3207%202.3285%204.1512%205.0693%205.5156%208.3672%200.0412%200.10072%200.0835%200.20098%200.12695%200.30078%201.4078%203.2027%202.1152%206.5561%202.1152%2010.219v5.9297c0%203.6666-0.70774%207.0229-2.1172%2010.227-0.0251%200.0571-0.0498%200.11443-0.0742%200.17187-1.3754%203.2356-3.2609%206.0898-5.7285%208.6562l-8e-3%208e-3c-2.1675%202.2573-4.8089%204.0621-8.1016%205.418-3.2301%201.33-6.7374%202.0254-10.674%202.0254h-28.896c-8.2628%206.1e-4%20-14.961%206.6982-14.963%2014.961v40.775h-3.9941v-114.88zm521.15%200.22852v1.5c-5.4362%200.6979-11.588%203.2243-15.096%206.7324-3.8755%203.8752-6.7199%2010.85-6.9688%2016.199-0.396%208.5275%206.4106%2015.658%2014.947%2015.658h7.1172v3.0059h-7.1719c-8.2635%206.1e-4%20-14.962%206.6994-14.963%2014.963v56.785h-1.0312v-56.785c-6e-4%20-8.2635-6.6994-14.962-14.963-14.963h-3.0235v-3.0059h3.1524c8.1-5.8e-4%2014.729-6.4462%2014.957-14.543%200.1214-4.3274%200.7287-7.8945%201.6817-10.6%200.013-0.0377%200.026-0.0755%200.039-0.11328%201.1558-3.366%202.732-5.9295%204.6446-7.9453%202.1478-2.1262%204.6942-3.8021%207.8027-5.0293%200.062-0.0243%200.1238-0.0491%200.1855-0.0742%202.4325-0.99805%205.3953-1.5402%208.6895-1.7852zm-502.19%203.5664%200.0234%200.0293c-7.1317-0.0134-13.282%205.0079-14.695%2011.998-0.1928%200.96661-0.28962%201.9499-0.28906%202.9356h-2e-3v0.0391%2021.582c2e-3%208.2628%206.7001%2014.96%2014.963%2014.961h24.943c7.1498%200%2014.533-1.8991%2019.592-7.2109%204.3952-4.6148%206.6738-11.995%206.6738-18.463%200-6.1801-2.3954-13.479-6.4434-17.994-4.6298-5.266-12.733-7.877-19.822-7.877h-24.943zm166.08%2017.719%200.17188%200.19335c-0.0239-0.0271-0.0522-0.0491-0.0762-0.0762-0.034-0.0374-0.0616-0.0798-0.0957-0.11718zm196.23%201.459%200.34571%200.42773c-0.0761-0.0981-0.16732-0.1819-0.24414-0.27929-0.0385-0.0463-0.0629-0.10224-0.10157-0.14844zm230.05%2010.033h34.41v0.83203h-29.471c-2.8189%200-6.1581%200.66473-8.9336%202.1524-1.951%201.0269-4.7366%203.377-6.0683%205.1523v2e-3c-1.3851%201.8469-2.5929%204.2764-3.2793%206.5-0.6539%202.0126-1.0644%204.3808-1.0644%206.5312%200%203.9693%201.92%209.441%204.0898%2012.451%200.3207%200.44438%200.6657%200.8708%201.0332%201.2773%200.9397%201.0408%202.5516%202.8229%205.5762%204.3008%203.0245%201.4778%206.3117%201.7148%207.6601%201.7148h22.137c3.4658%200%206.0157%200.58731%207.9101%201.459%200.053%200.0244%200.1067%200.0485%200.1602%200.0723%202.2307%200.99478%203.8234%202.2433%204.9961%203.6836%200.072%200.0887%200.1448%200.17662%200.2187%200.26367%201.3323%201.5623%202.3853%203.509%203.084%206.0215%200.037%200.1327%200.076%200.26487%200.1172%200.39649%200.8624%202.8001%201.3242%205.863%201.3242%209.2734v0.59179c0%203.2007-0.5284%205.8454-1.4375%208.0938-0.051%200.12499-0.099%200.25065-0.1465%200.37696-0.8634%202.314-2.0255%204.0974-3.4336%205.5059-1.5648%201.5647-3.4475%202.8423-5.7636%203.8223-2.1807%200.9226-4.4894%201.3945-7.0293%201.3945h-4.9571c4.1102-0.36285%208.7352-1.8775%2011.992-4.0723%201.5305-1.0038%204.4485-3.246%206.3125-6.7305%201.8888-3.5309%202.095-6.5335%202.1953-8.3945%200.023-0.42276%200.029-0.84632%200.016-1.2695-0.082-2.6354-0.1182-4.9759-2.2852-8.8027-1.0892-2.0905-3.9217-5.297-5.834-6.6484-2.0065-1.4778-4.6568-2.819-7.0176-3.4629-2.3055-0.62893-4.7627-0.9414-7.1406-0.9414h-17.789c-4.7508%200-7.9817-0.76117-10.094-1.7715-2.4223-1.2246-4.1193-2.6461-5.332-4.1836-1.2107-1.7004-2.0968-3.658-2.6016-6.0137-0.6438-3.0045-0.9668-6.0607-0.9668-9.1992%200-2.9539%200.4369-5.7474%201.3047-8.4473%200.8425-2.621%201.9949-4.7329%203.4004-6.4746%201.4153-1.7241%203.1104-3.0391%205.1797-3.9941%201.9606-0.90485%204.4015-1.4626%207.5273-1.4629zm-211.92%200.19922h4.0527c0.31496%207.9984%206.8686%2014.333%2014.873%2014.375v-0.50976c0.4382%200.0271%200.8775%200.0349%201.3164%200.0234l-1.1856%200.49024c2.3394-0.0156%204.6426-0.57954%206.7246-1.6465%200.092-0.0485%200.3286-0.25438%200.4493-0.32422%200.2235-0.10906%200.4443-0.22368%200.6621-0.34375-0.4389%200.24601-1.0052%200.62692-0.9551%200.58985%200.4531-0.23704%200.8938-0.49714%201.3203-0.7793%200.085-0.0519%200.1698-0.10462%200.2539-0.1582l0.012-8e-3%200.037-0.0234%200.012-0.01c0.3152-0.18911%200.6234-0.38976%200.9238-0.60156%202.4522-1.7682%204.9656-3.2123%207.5879-4.3398%203.152-1.2981%206.4825-2.2888%2010.025-2.9531%201.1833-0.22187%202.3603-0.34722%203.539-0.49609v5.0137c-3.6521%200.59337-7.2926%201.4764-10.867%202.8809-5.8197%202.1578-11.275%205.1152-16.207%208.8125-4.8235%203.5833-8.9674%207.7852-12.23%2012.496-0.0791%200.1148-0.15658%200.2307-0.23243%200.34766-3.2263%204.948-5.3301%2010.965-5.3301%2016.793v32.041h-4.7852v-81.67zm-267.55%200.78906h11.859c4.8254%200%208.5128%200.79946%2011.326%202.0762%200.0435%200.0197%200.0872%200.0393%200.13086%200.0586%203.2982%201.4585%205.7509%203.2705%207.6074%205.375%200.0574%200.0643%200.11534%200.12811%200.17383%200.19141%201.9391%202.123%203.4124%204.5967%204.4356%207.5664%200.0142%200.0404%200.0285%200.0808%200.043%200.1211%201.0839%203.0599%201.6035%206.081%201.6035%209.1406v56.352h-46.271c-3.0695%200-5.4624-0.55019-7.4043-1.4258-2.2384-1.1413-4.0059-2.4917-5.4297-4.0273-1.3142-1.6722-2.4038-3.6757-3.2129-6.1367-0.753-2.6926-1.1699-5.6612-1.1699-8.9863%201e-5%20-3.1189%200.44885-5.8719%201.2734-8.3457%200.79732-2.392%201.8638-4.1975%203.1172-5.6055%200.0685-0.0768%200.13622-0.15425%200.20313-0.23242%201.2379-1.4497%202.772-2.6036%204.7246-3.4648%200.0673-0.0301%200.13434-0.0607%200.20117-0.0918%200.44297-0.20328%201.1305-0.38085%201.7383-0.56836-0.28911%200.14802-0.63536%200.30969-0.86328%200.44336-0.81076%200.47546-1.3737%200.88911-1.8672%201.2812-0.98704%200.78428-1.659%201.4674-2.3105%202.1816-0.4002%200.43896-0.77392%200.90137-1.1192%201.3848-3.375%204.7232-3.6719%208.4056-3.6719%2013.018%200%204.5732%200.41363%208.1357%203.2148%2012.498%200.64915%201.0111%201.4177%201.9403%202.2891%202.7676%200.50232%200.47672%201.0189%200.96828%202.0391%201.7051%201.0202%200.7368%200.96505%202.9707%209.0391%202.9707h27.512c8.2635-6.1e-4%2014.962-6.6994%2014.963-14.963v-9.959c-0.01-7.0588-4.9507-13.151-11.856-14.617%207.342-1.7082%2012.267-8.611%2011.494-16.109%200.0501%200.48053%200.19728-0.57664-0.41601-3.7109-0.60467-3.1911-1.887-6.5351-3.877-9.2715v-2e-3c-2.0939-2.8788-5.8258-5.421-9.041-6.6758-4.3734-1.8601-7.7024-2.1289-12.176-2.1289h-4.9414c-0.97318%201e-3%20-1.9439%200.0974-2.8984%200.28711-2.0594%200.13476-4.2046%200.21685-5.9023%200.57812-2.4789%200.5275-3.6418%200.20971-7.9531%203.2051-1.6937%201.1338-3.444%203.0528-4.9531%205.2188h-4.3164c1.0012-1.952%202.1874-3.746%203.7422-5.3008%201.8178-1.8178%204.2378-3.4199%207.4922-4.7051%200.10399-0.0412%200.20751-0.0835%200.31055-0.12695%202.9239-1.2311%206.5589-1.9648%2011.117-1.9648zm71.01%200h35.203c4.7196%200%208.525%200.74432%2011.613%202.0078%200.14108%200.0575%200.28302%200.11284%200.42579%200.16601%203.3748%201.262%205.9816%202.9443%208.0391%204.9941%200.0613%200.0611%200.12317%200.12163%200.18554%200.18164%202.1972%202.1144%203.8964%204.6728%205.1133%207.8555%201.217%203.1829%201.9199%207.0277%201.9199%2011.695v27.08c0%204.4883-0.68842%208.351-1.9394%2011.736-1.2347%203.212-2.9704%205.8883-5.252%208.1699-2.0681%202.0681-4.6964%203.7642-8.1055%205.0332-0.0385%200.0148-0.0769%200.0298-0.11523%200.0449-3.1569%201.2053-7.0651%201.916-11.885%201.916h-6.3242c-2.6674%200-5.1826-0.2794-7.6426-0.79492-9.2959-1.9468-18.03%205.147-18.031%2014.645v20.541h-3.2051v-115.27zm116.74%200h22.531c3.6223%200%206.4316%200.76614%208.7383%202.0645%200.14453%200.0805%200.29038%200.15867%200.4375%200.23437%202.8202%201.4664%204.9811%203.2812%206.6699%205.457%200.11196%200.14467%200.22656%200.28727%200.34375%200.42774%201.9372%202.3151%203.4337%204.9563%204.5%208.0371%200.0553%200.15917%200.11322%200.3174%200.17383%200.47461%201.1767%203.062%201.6894%205.8479%201.6894%208.4277v15.635h-13.424c6.953-2.5684%2010.978-9.84%209.4629-17.096-0.82742-3.9338-2.5655-8.0749-5.3066-11.531-3.5153-4.5007-12.671-8.9277-18.424-8.9277h-12.254c-1.5199%202e-3%20-3.0308%200.23473-4.4805%200.69141-2.2852%200.52287-4.5119%201.26-6.2031%202.2617-2.711%201.5202-5.4564%203.889-7.2871%206.3301-1.9072%202.5429-3.2605%205.2754-4.3086%208.1992-0.078%200.21768-0.15093%200.43714-0.21875%200.6582-0.57329%201.8676-0.61775%202.5104-0.48046%201.9336-1.8517%207.8205%202.8047%2015.707%2010.547%2017.863-6.8144%201.5416-11.655%207.5935-11.662%2014.58v0.23633c0%203.0076%200.24907%205.9991%201.498%209.3496%201.249%203.3505%204.0406%206.8472%206.4004%208.6172%204.6218%203.4664%2010.65%204.9395%2016.393%204.9394h36.189v2.4121h-41.328c-3.1472%200-5.9708-0.59201-8.6152-1.7207-2.8381-1.3433-5.295-3.0654-7.4473-5.1992-1.9457-2.0535-3.5746-4.5575-4.8438-7.6816-1.1929-2.9364-1.8437-6.2609-1.8437-10.125v-30.637c0-3.5926%200.66513-6.7607%201.9355-9.6699%200.0197-0.0448%200.0393-0.0897%200.0586-0.13476%201.4307-3.3663%203.2565-6.2018%205.4805-8.6192%202.1744-2.3635%204.6051-4.1428%207.3672-5.4355%200.1054-0.0489%200.21022-0.099%200.31445-0.15039%202.725-1.3536%205.1568-1.9024%207.3965-1.9024zm236.15%200h3.5977v80.881h-3.5977zm-334.72%203.0059%200.0215%200.0137c-8.2666-0.0113-14.976%206.6826-14.984%2014.949v35.221c0%205.8152%202.7388%2013.34%206.6738%2017.473%203.7991%203.9891%2011.794%207.2129%2017.418%207.2129h7.9062c5.696%200%2013.481-3.0733%2017.449-7.041%204.032-4.0322%207.0391-11.831%207.0391-17.645v-25.695c0-5.7171-3.1095-13.625-7.1387-17.525-3.993-3.9286-11.695-6.9629-17.35-6.9629h-17.035zm50.529%201.2598c-0.0114%200.0261-0.0179%200.0539-0.0293%200.0801-8e-3%200.0191-0.0212%200.0356-0.0293%200.0547l0.0586-0.13476zm-75.924%201.1328%200.043%200.1211c-9e-3%20-0.0274-0.0237-0.0527-0.0332-0.0801-5e-3%20-0.0133-5e-3%20-0.0277-0.01-0.041zm195.29%200.5625%200.17188%200.47266c-0.0264-0.0763-0.071-0.14457-0.0977-0.22071-0.031-0.0818-0.0428-0.17024-0.0742-0.25195zm-77.082%200.28125c-3e-3%202e-3%20-7e-3%202e-3%20-0.01%204e-3l-0.0176%200.0117c9e-3%20-6e-3%200.0184-0.0102%200.0273-0.0156zm-58.557%203.5859c0.0205%200.0193%200.0403%200.0391%200.0606%200.0586-3e-3%20-3e-3%20-5e-3%20-7e-3%20-8e-3%20-0.01-0.0175-0.0163-0.0351-0.0326-0.0527-0.0488zm171.97%200.83398%200.01%200.01c-0.084%200.0633-0.033%200.0109-0.1152%200.0703%200.036-0.0265%200.072-0.0532%200.1074-0.0801zm-8.9355%202.9824-0.01%204e-3h0.01zm239.34%200.48242%200.1602%200.0723c-0.026-0.0117-0.053-0.0176-0.078-0.0293-0.028-0.0126-0.054-0.0304-0.082-0.043zm-554.88%201.1484c-0.0467%200.0206-0.0901%200.0476-0.13672%200.0684-0.0227%200.0104-0.0437%200.013-0.0664%200.0234zm319.34%203.8203c-0.038%200.0278-0.077%200.0558-0.1152%200.084-0.01%205e-3%20-0.011%200.0109-0.018%200.0156l0.1328-0.0996zm251.34%206.8906%200.2188%200.26172c-0.035-0.0435-0.078-0.0797-0.1133-0.12305-0.038-0.0446-0.068-0.0942-0.1055-0.13867zm43.856%206.8496-0.01%204e-3%20-0.064%200.0234c0.024-9e-3%200.048-0.0183%200.072-0.0273zm-34.824%2010.178%200.1152%200.39453c-0.023-0.0832-0.058-0.16302-0.082-0.2461-0.015-0.0486-0.018-0.0999-0.033-0.14843zm-31.727%208.7188c0%209e-3%200.011%200.0179%200.016%200.0273l-0.01-0.0176c0-3e-3%20-0.01-7e-3%20-0.01-0.01zm-339.47%2027.893c0.0117%205e-3%200.0235%200.0102%200.0352%200.0156l-0.0215-8e-3c-5e-3%20-2e-3%20-9e-3%20-6e-3%20-0.0137-8e-3zm370.37%200.9961-0.1015%200.25976c0.01-0.0225%200.014-0.0459%200.023-0.0684%200.024-0.0648%200.058-0.12648%200.082-0.1914z%22%20color%3D%22%23000000%22%20color-rendering%3D%22auto%22%20fill%3D%22%23fff%22%20image-rendering%3D%22auto%22%20shape-rendering%3D%22auto%22%20solid-color%3D%22%23000000%22%20style%3D%22block-progression%3Atb%3Bisolation%3Aauto%3Bmix-blend-mode%3Anormal%3Btext-decoration-color%3A%23000000%3Btext-decoration-line%3Anone%3Btext-decoration-style%3Asolid%3Btext-indent%3A0%3Btext-transform%3Anone%3Bwhite-space%3Anormal%22%2F%3E%3Cpath%20d%3D%22m20.064%20121.71a5.1013%205.1013%200%200%200-5.1008%205.1008v134.6a5.1013%205.1013%200%200%200%205.1008%205.1008h23.718a5.1013%205.1013%200%200%200%205.1008-5.1008v-50.636h28.896c5.7494%200%2011.256-1.045%2016.371-3.1511%205.0768-2.0905%209.5322-5.0736%2013.198-8.891%203.7038-3.8522%206.6317-8.2761%208.7139-13.174%202.249-5.112%203.3828-10.588%203.3828-16.251v-5.9288c0-5.6593-1.1328-11.131-3.3784-16.24-2.0741-5.0131-5.0077-9.4629-8.7434-13.211-3.6446-3.7883-8.0689-6.7519-13.106-8.8363-5.1251-2.2527-10.663-3.3799-16.437-3.3799h-57.715zm533.76%200c-6.2024%200-11.948%201.0142-17.116%203.1349-4.94%201.9503-9.3196%204.7826-12.976%208.4393a5.1013%205.1013%200%200%200-0.076%200.078c-3.5767%203.7321-6.2633%208.3056-8.0526%2013.517-1.6229%204.6067-2.3743%209.7106-2.5269%2015.152h-13.013a5.1013%205.1013%200%200%200-5.1008%205.1009v22.729a5.1013%205.1013%200%200%200%205.1008%205.1008h12.885v66.647a5.1013%205.1013%200%200%200%205.1008%205.1009h20.754a5.1013%205.1013%200%200%200%205.1008-5.1009v-66.647h17.035a5.1013%205.1013%200%200%200%205.1008-5.1007v-22.729a5.1013%205.1013%200%200%200-5.1008-5.1008h-16.98c0.1302-2.7984%200.9341-4.6462%202.6021-6.3141%201.7939-1.7939%203.8327-2.6566%207.263-2.6566h7.1154a5.1013%205.1013%200%200%200%205.1008-5.1008v-21.149a5.1013%205.1013%200%200%200-5.1008-5.1008h-7.1154zm21.985%200a5.1013%205.1013%200%200%200-5.1008%205.1008v23.125a5.1013%205.1013%200%200%200%205.1008%205.1008h23.323a5.1013%205.1013%200%200%200%205.1008-5.1008v-23.125a5.1013%205.1013%200%200%200-5.1008-5.1008h-23.323zm134.14%200a5.1013%205.1013%200%200%200-5.1008%205.1008v134.6a5.1013%205.1013%200%200%200%205.1008%205.1008h22.136a5.1013%205.1013%200%200%200%205.1009-5.1008v-61.469c0-2.0449%200.1779-3.838%200.4841-5.4078%200.3736-1.4266%200.894-2.4494%201.5261-3.222%200.5359-0.655%201.3412-1.273%202.7836-1.8139a5.1013%205.1013%200%200%200%200.152-0.059c1.3931-0.5736%203.5873-0.9992%206.5561-0.9992h4.9414c2.9687%200%205.0804%200.4397%206.258%200.9549a5.1013%205.1013%200%200%200%200.2538%200.1033c1.4424%200.5409%202.2477%201.1589%202.7836%201.814a5.1013%205.1013%200%200%200%200.1742%200.2022c0.6589%200.7248%201.0827%201.536%201.3283%202.8455a5.1013%205.1013%200%200%200%200.012%200.06c0.3185%201.5926%200.4944%203.4336%200.4944%205.5215v61.469a5.1013%205.1013%200%200%200%205.1008%205.1008h22.335a5.1013%205.1013%200%200%200%205.1008-5.1008v-66.213c0-4.7924-0.8332-9.535-2.4618-14.134-1.6651-4.8329-4.2891-9.1653-7.7751-12.827-3.4075-3.8486-7.7162-6.8972-12.736-9.1168-5.1217-2.3243-10.941-3.4138-17.31-3.4138h-11.859c-2.7706%200-5.4406%200.2179-8.0025%200.67a5.1013%205.1013%200%200%200-0.053%200.01c-0.03%200-0.057%200.017-0.087%200.022v-29.597a5.1013%205.1013%200%200%200-5.1008-5.1008h-22.136zm-68.706%2033.008c-4.9666%200-9.627%200.916-13.798%202.8412-4.0962%201.8905-7.6611%204.6435-10.507%208.122a5.1013%205.1013%200%200%200-0.017%200.019c-2.6606%203.2866-4.672%207.1069-6.0307%2011.334-1.3483%204.1949-2.0234%208.5622-2.0234%2013.025%200%204.1725%200.4325%208.2916%201.2988%2012.334%200.9278%204.3299%202.6744%208.3284%205.21%2011.815a5.1013%205.1013%200%200%200%200.089%200.118c2.7488%203.5575%206.3745%206.4211%2010.65%208.559a5.1013%205.1013%200%200%200%200.063%200.031c4.7302%202.2835%2010.307%203.275%2016.646%203.275h17.789c1.1553%200%202.2082%200.1416%203.2042%200.4133%200.8187%200.2233%201.4922%200.5607%202.1623%201.0819a5.1013%205.1013%200%200%200%200.3025%200.2184c0.4599%200.3066%200.7409%200.6124%201.0347%201.1999a5.1013%205.1013%200%200%200%200.1874%200.3424c0.191%200.3184%200.3964%200.9865%200.431%202.1003-0.1059%201.9654-0.4875%202.5957-1.8007%203.4492a5.1013%205.1013%200%200%200-0.1018%200.068c-1.7124%201.1717-3.3502%201.6782-5.4196%201.6782h-41.112a5.1013%205.1013%200%200%200-5.1008%205.1008v19.568a5.1013%205.1013%200%200%200%205.1008%205.1008h47.832c4.4661%200%208.8057-0.8624%2012.858-2.577%203.986-1.6864%207.5361-4.0426%2010.514-7.0209%203.023-3.0231%205.3245-6.7086%206.8719-10.856%201.702-4.2093%202.5268-8.8176%202.5268-13.702v-0.5918c0-4.78-0.6563-9.3581-1.9866-13.678-1.2267-4.411-3.2713-8.3874-6.1162-11.723-2.7579-3.3874-6.3392-6.0447-10.504-7.9021-4.2097-1.937-8.9814-2.8293-14.164-2.8293h-22.138c-0.8953%200-1.3031-0.1617-2.1312-1.0789-0.9091-1.2612-1.2663-2.3314-1.2663-3.7031%200-0.6182%200.098-1.2432%200.3321-1.9453a5.1013%205.1013%200%200%200%200.046-0.1476c0.2339-0.7799%200.5506-1.3968%200.9741-1.9615%200.3822-0.5095%200.6741-0.7238%200.9682-0.8708a5.1013%205.1013%200%200%200%200.1948-0.1033c0.276-0.1533%200.8136-0.3469%201.8715-0.3469h39.332a5.1013%205.1013%200%200%200%205.1008-5.1008v-20.555a5.1013%205.1013%200%200%200-5.1008-5.1008h-44.273zm-221.78%200.1978a5.1013%205.1013%200%200%200-5.1008%205.1008v101.39a5.1013%205.1013%200%200%200%205.1008%205.1008h24.509a5.1013%205.1013%200%200%200%205.1008-5.1008v-41.902c0-2.6929%200.8463-5.4724%202.9002-8.6224%202.2886-3.3041%205.2126-6.3063%208.8733-9.0223a5.1013%205.1013%200%200%200%200.022-0.016c3.8222-2.8667%207.9825-5.1272%2012.538-6.8055a5.1013%205.1013%200%200%200%200.1092-0.041c4.4957-1.7746%208.7186-2.6095%2012.754-2.6095h2.5696a5.1013%205.1013%200%200%200%205.1008-5.1008v-24.508a5.1013%205.1013%200%200%200-5.1008-5.1009h-2.5696c-4.5348%200-9.0693%200.4249-13.589%201.2723-4.5481%200.8528-8.9107%202.1399-13.066%203.8595a5.1013%205.1013%200%200%200-0.059%200.024c-3.7372%201.6018-7.2214%203.6264-10.482%205.9776v-8.7995a5.1013%205.1013%200%200%200-5.1008-5.1008h-24.509zm-370.58%200.5166h24.943c4.7566%200%207.1537%201.1272%208.6017%202.7924a5.1013%205.1013%200%200%200%200.0753%200.084c1.7043%201.8748%202.6272%204.2337%202.6272%208.0321%200%204.1115-0.97128%206.4892-2.5474%208.1441-1.3772%201.4461-3.9217%202.5681-8.7567%202.5681h-24.943v-21.621zm112.89%200.2745c-6.1832%200-11.863%201.0072-16.923%203.1378-4.8876%201.9302-9.1394%204.6039-12.576%208.0409-3.363%203.363-5.9973%207.3186-7.8254%2011.737a5.1013%205.1013%200%200%200-0.0561%200.1402c-1.6155%204.259-2.6413%208.7386-3.0773%2013.39a5.1013%205.1013%200%200%200%205.0787%205.5775h18.037c-1.9667%200.4605-3.8748%201.074-5.6868%201.9055-3.9186%201.7284-7.337%204.2445-10.064%207.4386-2.7194%203.0546-4.7674%206.7145-6.1369%2010.823-1.3708%204.1124-2.0412%208.4974-2.0412%2013.077%202e-5%204.6424%200.58357%209.0775%201.7785%2013.26a5.1013%205.1013%200%200%200%200.0487%200.1608c1.3586%204.2268%203.3701%208.0471%206.0306%2011.334a5.1013%205.1013%200%200%200%200.17268%200.2022c2.821%203.1345%206.2655%205.7016%2010.206%207.6719a5.1013%205.1013%200%200%200%200.14464%200.069c4.1714%201.9253%208.8319%202.8411%2013.798%202.8411h56.132a5.1013%205.1013%200%200%200%205.1008-5.1008v-66.213c0-4.7929-0.83281-9.536-2.4618-14.135-1.655-4.8036-4.186-9.117-7.5346-12.783-3.4136-3.8696-7.7382-6.9314-12.777-9.1596-5.1399-2.3325-11.021-3.4138-17.509-3.4138h-11.859zm61.148%200a5.1013%205.1013%200%200%200-5.1008%205.1008v134.99a5.1013%205.1013%200%200%200%205.1008%205.1008h22.929a5.1013%205.1013%200%200%200%205.1008-5.1008v-30.403c3.4185%200.7164%206.9825%201.1129%2010.711%201.1129h6.3244c6.2932%200%2012.06-0.9296%2017.221-2.9002%205.2036-1.937%209.7584-4.7698%2013.465-8.4763%203.799-3.799%206.7145-8.3376%208.6681-13.447a5.1013%205.1013%200%200%200%200.0177-0.046c1.9448-5.2359%202.8884-10.933%202.8884-16.994v-27.079c0-6.1801-0.93705-11.89-2.9061-17.04-1.9543-5.1114-4.8862-9.6073-8.7154-13.292-3.684-3.6704-8.2011-6.4812-13.359-8.4098-5.1777-2.1183-10.974-3.1216-17.28-3.1216h-45.064zm126.6%200c-4.7715%200-9.5168%201.2111-14.052%203.464-4.5389%202.1244-8.5884%205.108-12.036%208.8556-3.4321%203.7305-6.1857%208.0628-8.2401%2012.897-2.1272%204.8713-3.1865%2010.148-3.1865%2015.658v30.636c0%205.5889%200.9664%2010.888%202.9445%2015.757%201.9303%204.7514%204.5896%208.9543%207.9582%2012.476a5.1013%205.1013%200%200%200%200.0782%200.081c3.4484%203.4485%207.4548%206.2424%2011.926%208.3287a5.1013%205.1013%200%200%200%200.1284%200.058c4.5981%201.9925%209.5478%202.9902%2014.678%202.9902h51.191a5.1013%205.1013%200%200%200%205.1008-5.1008v-22.137a5.1013%205.1013%200%200%200-5.1008-5.1008h-46.052c-3.5752%200-5.8571-0.7768-7.4151-1.9453-1.0688-0.8017-1.9128-2.1988-1.9128-5.9982v-0.2361h58.938a5.1013%205.1013%200%200%200%205.1008-5.1008v-25.497c0-4.5987-0.93073-9.2274-2.6862-13.796-1.6325-4.7167-4.0329-9.0039-7.1642-12.746-3.067-3.9514-6.9881-7.165-11.588-9.5566-4.7618-2.6802-10.229-3.9865-16.079-3.9865h-22.532zm226.28%200a5.1013%205.1013%200%200%200-5.1008%205.1008v100.6a5.1013%205.1013%200%200%200%205.1008%205.1008h23.323a5.1013%205.1013%200%200%200%205.1008-5.1008v-100.6a5.1013%205.1013%200%200%200-5.1008-5.1008h-23.323zm-127.56%2013.648h-0.01c-0.01%200.01-0.017%200.01-0.025%200.016l0.029-0.021zm-283.11%2019.085h4.9414c3.1161%200%205.3098%200.4557%206.4542%200.9564a5.1013%205.1013%200%200%200%200.25386%200.1033c1.4116%200.5293%202.0471%201.0864%202.4087%201.5836%200.54024%200.7429%201.0025%201.7671%201.2855%203.2766a5.1013%205.1013%200%200%200%200.0118%200.06c0.13826%200.6913%200.13224%201.612%200.214%202.3969h-28.418c-0.0223%200-0.0427%200.01-0.0649%200.01a5.1013%205.1013%200%200%200%202.0486-2.9578c0.56017-2.2407%201.3181-3.1924%202.3674-3.8713a5.1013%205.1013%200%200%200%200.17122-0.1166c0.69953-0.4938%203.5651-1.4376%208.3257-1.4376zm85.816%200.1977h17.035c3.101%200%205.0183%200.806%206.869%202.6567a5.1013%205.1013%200%200%200%200.09%200.087c1.7521%201.6687%202.5666%203.5153%202.5666%206.7819v25.694c0%203.2666-0.83405%205.2426-2.6567%207.0653-1.8513%201.8513-3.7691%202.6581-6.869%202.6581h-7.9051c-3.0998%200-4.8855-0.7845-6.5841-2.5681-1.7152-1.8009-2.546-3.8371-2.546-7.1553v-35.22zm103.71%200.1978h12.255c3.1797%200%204.8459%200.8289%206.6299%203.1481a5.1013%205.1013%200%200%200%200.059%200.077c1.1609%201.451%201.9474%203.2059%202.3984%205.3502h-29.765c0.0794-0.3336%200.12968-0.6838%200.22877-1.0066%200.64108-1.7883%201.3912-3.2%202.1947-4.2713%200.76497-1.02%201.6117-1.7483%202.6847-2.3261a5.1013%205.1013%200%200%200%200.25534-0.1476c0.9164-0.5639%201.8007-0.8236%203.0596-0.8236zm-201.19%2037.158h27.511v9.9595h-27.511c-0.11347%200-0.37288-0.1824-0.77781-0.5667-0.32633-0.5082-0.84128-1.8234-0.84128-4.4131%200-2.5366%200.52776-3.8219%200.88261-4.3185%200.53225-0.5835%200.7257-0.6612%200.73648-0.6612z%22%20fill%3D%22%23005679%22%20stroke-width%3D%220%22%2F%3E%3Cpath%20d%3D%22m20.064%20121.71a5.1013%205.1013%200%200%200-5.1016%205.1016v71.801h92.482c3.6524-3.8255%206.5535-8.2026%208.6152-13.053%202.249-5.112%203.3828-10.588%203.3828-16.252v-5.9297c0-5.6593-1.1313-11.13-3.377-16.238-2.0741-5.0131-5.0084-9.4627-8.7441-13.211-3.6446-3.7883-8.0681-6.7535-13.105-8.8379-5.1251-2.2527-10.663-3.3789-16.438-3.3789h-57.715v-2e-3zm533.75%200c-6.2016%202.2e-4%20-11.947%201.0143-17.115%203.1348-4.9399%201.9503-9.3198%204.7828-12.976%208.4395a5.1013%205.1013%200%200%200-0.076%200.0781c-3.5767%203.7321-6.2615%208.3066-8.0508%2013.518-1.6229%204.6067-2.3747%209.7092-2.5273%2015.15h-13.014a5.1013%205.1013%200%200%200-5.1015%205.1016v22.729a5.1013%205.1013%200%200%200%205.1015%205.1016h12.885v3.6504h30.957v-3.6504h17.035a5.1013%205.1013%200%200%200%205.0996-5.1016v-22.729a5.1013%205.1013%200%200%200-5.0996-5.1016h-16.98c0.1302-2.7984%200.9336-4.6446%202.6016-6.3125%201.7939-1.7939%203.8314-2.6582%207.2617-2.6582h7.1172a5.1013%205.1013%200%200%200%205.0996-5.0996v-21.148a5.1013%205.1013%200%200%200-5.0996-5.1016h-7.1153zm21.986%200a5.1013%205.1013%200%200%200-5.0996%205.1016v23.125a5.1013%205.1013%200%200%200%205.0996%205.0996h23.324a5.1013%205.1013%200%200%200%205.0996-5.0996v-23.125a5.1013%205.1013%200%200%200-5.0996-5.1016h-23.324zm134.14%200a5.1013%205.1013%200%200%200-5.0996%205.1016v71.801h32.455c0.064-1.4499%200.1344-2.8944%200.3652-4.0781%200.3736-1.4266%200.8953-2.4501%201.5274-3.2227%200.5359-0.655%201.3408-1.2716%202.7832-1.8125a5.1013%205.1013%200%200%200%200.1523-0.0605c1.3931-0.57362%203.5859-0.99805%206.5547-0.99805h4.9414c2.9687%200%205.0802%200.43988%206.2578%200.95508a5.1013%205.1013%200%200%200%200.254%200.10351c1.4422%200.5409%202.2492%201.1574%202.7851%201.8125a5.1013%205.1013%200%200%200%200.1738%200.20313c0.6589%200.7248%201.0826%201.5362%201.3282%202.8457a5.1013%205.1013%200%200%200%200.012%200.0586c0.2419%201.2095%200.3122%202.698%200.375%204.1934h32.656v-3.4141c0-4.7924-0.8323-9.5363-2.4609-14.135-1.6651-4.8329-4.2894-9.1642-7.7754-12.826-3.4075-3.8486-7.7166-6.8976-12.736-9.1172-5.1217-2.3243-10.942-3.4141-17.311-3.4141h-11.857c-2.7706%200-5.442%200.21782-8.0039%200.66993a5.1013%205.1013%200%200%200-0.053%200.01c-0.03%200-0.056%200.0184-0.086%200.0234v-29.598a5.1013%205.1013%200%200%200-5.1015-5.1016h-22.137zm-68.707%2033.008c-4.9658%202.5e-4%20-9.626%200.91686-13.797%202.8418-4.0962%201.8905-7.6617%204.6426-10.508%208.1211a5.1013%205.1013%200%200%200-0.016%200.0195c-2.6606%203.2866-4.6726%207.1072-6.0312%2011.334-1.3485%204.1949-2.0235%208.5626-2.0235%2013.025%200%202.8834%200.2838%205.7279%200.6973%208.5527h72.191c-0.092-0.0422-0.165-0.10898-0.2578-0.15039-4.2097-1.937-8.9829-2.8301-14.166-2.8301h-22.137c-0.8953%200-1.3027-0.16092-2.1308-1.0781-0.9091-1.2612-1.2676-2.3314-1.2676-3.7031%200-0.6182%200.098-1.2432%200.332-1.9453a5.1013%205.1013%200%200%200%200.047-0.14844c0.2339-0.7799%200.5511-1.3962%200.9746-1.9609%200.3822-0.5095%200.6727-0.7241%200.9668-0.8711a5.1013%205.1013%200%200%200%200.1953-0.10351c0.276-0.1533%200.8132-0.34766%201.8711-0.34766h39.332a5.1013%205.1013%200%200%200%205.1015-5.0996v-20.555a5.1013%205.1013%200%200%200-5.1015-5.1016h-44.272zm-221.78%200.19727a5.1013%205.1013%200%200%200-5.1016%205.1016v38.596h51.547c2.3855-1.3682%204.8582-2.5958%207.498-3.5684a5.1013%205.1013%200%200%200%200.1094-0.041c4.4957-1.7746%208.7189-2.6094%2012.754-2.6094h2.5684a5.1013%205.1013%200%200%200%205.1015-5.1016v-24.508a5.1013%205.1013%200%200%200-5.1015-5.1016h-2.5684c-4.5348%200-9.0701%200.42603-13.59%201.2734-4.5481%200.8528-8.9108%202.1398-13.066%203.8594a5.1013%205.1013%200%200%200-0.059%200.0234c-3.7372%201.6018-7.2219%203.6273-10.482%205.9785v-8.8008a5.1013%205.1013%200%200%200-5.1015-5.0996h-24.508v-2e-3zm-370.58%200.51758h24.943c4.7566%200%207.1536%201.1258%208.6016%202.791a5.1013%205.1013%200%200%200%200.0762%200.0859c1.7043%201.8748%202.627%204.2328%202.627%208.0312%200%204.1115-0.97265%206.4896-2.5488%208.1445-1.3772%201.4461-3.9209%202.5684-8.7559%202.5684h-24.943v-21.621zm112.89%200.27343c-6.1832%200-11.862%201.0081-16.922%203.1387-4.8876%201.9302-9.1411%204.604-12.578%208.041-3.363%203.363-5.9961%207.3183-7.8242%2011.736a5.1013%205.1013%200%200%200-0.0566%200.14062c-1.6155%204.259-2.6401%208.7377-3.0762%2013.389a5.1013%205.1013%200%200%200%205.0781%205.5781h18.037c-0.91104%200.21332-1.7526%200.59736-2.6348%200.88281h72.119v-3.4141c0-4.7929-0.83386-9.5358-2.4629-14.135-1.655-4.8036-4.1866-9.1172-7.5352-12.783-3.4136-3.8696-7.7365-6.932-12.775-9.1602-5.1399-2.3325-11.022-3.4141-17.51-3.4141h-11.859zm61.148%200a5.1013%205.1013%200%200%200-5.1016%205.1016v37.805h33.131v-9.9746h17.035c3.101%200%205.0185%200.80555%206.8691%202.6562a5.1013%205.1013%200%200%200%200.0899%200.0879c1.7521%201.6687%202.5664%203.5146%202.5664%206.7812v0.44922h32.734v-1.043c0-6.1801-0.9372-11.889-2.9062-17.039-1.9543-5.1114-4.8856-9.6081-8.7148-13.293-3.684-3.6704-8.2018-6.4816-13.359-8.4102-5.1777-2.1183-10.973-3.1211-17.279-3.1211h-45.064zm126.6%200c-4.7715%200-9.5172%201.212-14.053%203.4648-4.5389%202.1244-8.5893%205.1079-12.037%208.8555-3.4321%203.7305-6.1858%208.0627-8.2402%2012.896-2.1272%204.8713-3.1856%2010.148-3.1856%2015.658v2.0312h97.562v-2.8203c0-4.5987-0.93008-9.2268-2.6855-13.795-1.6325-4.7167-4.0328-9.0039-7.1641-12.746-3.067-3.9514-6.9885-7.165-11.588-9.5566-4.7618-2.6802-10.228-3.9883-16.078-3.9883h-22.531zm226.28%200a5.1013%205.1013%200%200%200-5.0996%205.1016v37.805h33.523v-37.805a5.1013%205.1013%200%200%200-5.0996-5.1016h-23.324zm-127.56%2013.643%200.01%206e-3h-0.01c-0.01%200.01-0.017%200.01-0.025%200.0156l0.029-0.0215zm-283.11%2019.092h4.9414c3.1161%200%205.3087%200.45438%206.4531%200.95508a5.1013%205.1013%200%200%200%200.25391%200.10351c1.4116%200.5293%202.0485%201.0868%202.4102%201.584%200.54024%200.7429%201.0021%201.7678%201.2852%203.2773a5.1013%205.1013%200%200%200%200.0117%200.0586c0.13826%200.6913%200.13113%201.6135%200.21289%202.3984h-28.416c-0.0223%200-0.0442%200.01-0.0664%200.01a5.1013%205.1013%200%200%200%202.0488-2.959c0.56017-2.2407%201.3179-3.1922%202.3672-3.8711a5.1013%205.1013%200%200%200%200.17188-0.11524c0.69953-0.4938%203.5656-1.4375%208.3262-1.4375v-4e-3zm189.53%200.39453h12.254c3.1797%200%204.8469%200.82924%206.6309%203.1484a5.1013%205.1013%200%200%200%200.0586%200.0762c1.1609%201.451%201.9474%203.2073%202.3984%205.3516h-29.766c0.0794-0.3336%200.12943-0.68501%200.22852-1.0078%200.64108-1.7883%201.3918-3.2002%202.1953-4.2715%200.76497-1.02%201.6126-1.7464%202.6856-2.3242a5.1013%205.1013%200%200%200%200.2539-0.14844c0.9164-0.5639%201.8016-0.82422%203.0606-0.82422z%22%20fill-opacity%3D%220%22%20stroke-width%3D%220%22%2F%3E%3Ccircle%20cx%3D%22587.51%22%20cy%3D%22129.39%22%20r%3D%2226.202%22%20fill%3D%22%23ff2500%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2216.618%22%2F%3E%3Cpath%20d%3D%22m14.963%20209.43v51.98a5.1013%205.1013%200%200%200%205.1016%205.1016h23.717a5.1013%205.1013%200%200%200%205.1016-5.1016v-50.637h28.896c3.5535%200%206.966-0.54157%2010.299-1.3438h-73.115zm112.04%200c-1.8386%202.5478-3.4094%205.3218-4.457%208.4648-1.3708%204.1124-2.041%208.4988-2.041%2013.078%202e-5%204.6424%200.58436%209.0775%201.7793%2013.26a5.1013%205.1013%200%200%200%200.0488%200.16015c1.3586%204.2268%203.3687%208.0474%206.0293%2011.334a5.1013%205.1013%200%200%200%200.17383%200.20117c2.821%203.1345%206.2645%205.7016%2010.205%207.6719a5.1013%205.1013%200%200%200%200.14453%200.0703c4.1714%201.9253%208.8322%202.8398%2013.799%202.8398h56.133a5.1013%205.1013%200%200%200%205.1016-5.0996v-51.98h-86.916zm90.82%200v86.371a5.1013%205.1013%200%200%200%205.1016%205.1016h22.928a5.1013%205.1013%200%200%200%205.1016-5.1016v-30.402c3.4185%200.7164%206.9827%201.1133%2010.711%201.1133h6.3242c6.2932%200%2012.059-0.92979%2017.221-2.9004%205.2036-1.937%209.7583-4.7701%2013.465-8.4766%203.799-3.799%206.7143-8.3378%208.668-13.447a5.1013%205.1013%200%200%200%200.0176-0.0469c1.9448-5.2359%202.8887-10.932%202.8887-16.992v-15.219h-32.734v14.428c0%203.2666-0.83363%205.2418-2.6562%207.0644-1.8513%201.8513-3.7693%202.6582-6.8691%202.6582h-7.9062c-3.0998%200-4.8854-0.78476-6.584-2.5684-1.7152-1.8009-2.5449-3.8361-2.5449-7.1543v-14.428h-33.131zm94.186%200v17.787c0%205.5889%200.96529%2010.887%202.9434%2015.756%201.9303%204.7514%204.5904%208.9549%207.959%2012.477a5.1013%205.1013%200%200%200%200.0781%200.0801c3.4484%203.4485%207.4551%206.2438%2011.926%208.3301a5.1013%205.1013%200%200%200%200.12891%200.0566c4.5981%201.9925%209.5474%202.9902%2014.678%202.9902h51.191a5.1013%205.1013%200%200%200%205.0996-5.0996v-22.139a5.1013%205.1013%200%200%200-5.0996-5.0996h-46.053c-3.5752%200-5.8561-0.77681-7.4141-1.9453-1.0688-0.8017-1.9141-2.1986-1.9141-5.998v-0.23633h58.939a5.1013%205.1013%200%200%200%205.0996-5.1016v-11.857h-97.562zm102.35%200v51.98a5.1013%205.1013%200%200%200%205.1016%205.1016h24.508a5.1013%205.1013%200%200%200%205.1015-5.1016v-41.902c0-2.6929%200.8465-5.4711%202.9004-8.6211%200.3523-0.50856%200.8243-0.96271%201.2071-1.457h-38.818zm98.584%200v52.178a5.1013%205.1013%200%200%200%205.1015%205.1016h20.754a5.1013%205.1013%200%200%200%205.1015-5.1016v-52.178h-30.957zm57.762%200v51.98a5.1013%205.1013%200%200%200%205.0996%205.1016h23.324a5.1013%205.1013%200%200%200%205.0996-5.1016v-51.98h-33.523zm41.93%200c0.7929%201.6622%201.6571%203.288%202.7402%204.7774a5.1013%205.1013%200%200%200%200.09%200.11718c2.7488%203.5575%206.3747%206.4226%2010.65%208.5606a5.1013%205.1013%200%200%200%200.062%200.0293c4.7302%202.2835%2010.308%203.2754%2016.646%203.2754h17.789c1.1553%200%202.2071%200.14236%203.2031%200.41406%200.8187%200.2233%201.492%200.56083%202.1621%201.082a5.1013%205.1013%200%200%200%200.3028%200.21875c0.4599%200.3066%200.7413%200.61172%201.0351%201.1992a5.1013%205.1013%200%200%200%200.1875%200.3418c0.191%200.3184%200.3971%200.98776%200.4317%202.1016-0.1059%201.9654-0.4876%202.5957-1.8008%203.4492a5.1013%205.1013%200%200%200-0.1016%200.0664c-1.7124%201.1717-3.3505%201.6797-5.4199%201.6797h-41.113a5.1013%205.1013%200%200%200-5.0996%205.0996v19.568a5.1013%205.1013%200%200%200%205.0996%205.1016h47.832c4.4661%200%208.8067-0.86352%2012.859-2.5781%203.986-1.6864%207.5353-4.0432%2010.514-7.0215%203.023-3.0231%205.3257-6.7086%206.873-10.855%201.702-4.2093%202.5254-8.8163%202.5254-13.701v-0.59179c0-4.78-0.656-9.3583-1.9863-13.678-0.8821-3.1717-2.3353-6.0105-4.0566-8.6562h-81.426zm92.215%200v51.98a5.1013%205.1013%200%200%200%205.0996%205.1016h22.137a5.1013%205.1013%200%200%200%205.0996-5.1016v-51.98h-32.336zm60.084%200v51.98a5.1013%205.1013%200%200%200%205.1016%205.0996h22.334a5.1013%205.1013%200%200%200%205.1015-5.0996v-51.98h-32.537zm-611.46%2016.562h27.512v9.959h-27.512c-0.11347%200-0.37241-0.18211-0.77734-0.56641-0.32633-0.5082-0.8418-1.8224-0.8418-4.4121%200-2.5366%200.52796-3.8218%200.88281-4.3184%200.53225-0.5835%200.72555-0.66211%200.73633-0.66211z%22%20fill%3D%22url(%23a)%22%20stroke-width%3D%220%22%2F%3E%3Cpath%20d%3D%22m14.963%20198.62v10.818h73.115c2.0596-0.49572%204.1187-1.0022%206.0723-1.8066%205.0768-2.0905%209.5317-5.0732%2013.197-8.8906%200.0363-0.0377%200.0615-0.0833%200.0977-0.1211h-92.482zm126.83%200c-1.0222%200.33075-2.0801%200.57713-3.0527%201.0234-3.9186%201.7284-7.3371%204.2434-10.064%207.4375-0.63903%200.71782-1.1149%201.5748-1.6797%202.3574h86.916v-10.818h-72.119zm76.023%200v10.818h33.131v-10.818h-33.131zm59.691%200v10.818h32.734v-10.818h-32.734zm34.494%200v10.818h97.562v-10.818h-97.562zm102.35%200v10.818h38.818c2.1038-2.7172%204.5687-5.2684%207.666-7.5664a5.1013%205.1013%200%200%200%200.021-0.0156c1.6072-1.2055%203.3099-2.2434%205.041-3.2363h-51.547zm98.584%200v10.818h30.957v-10.818h-30.957zm57.762%200v10.818h33.523v-10.818h-33.523zm38.859%200c0.1849%201.263%200.3339%202.5322%200.6015%203.7812%200.5315%202.4802%201.4056%204.8083%202.4688%207.0371h81.426c-0.6726-1.0338-1.2594-2.1292-2.0586-3.0664-2.6964-3.3119-6.1995-5.9011-10.246-7.752h-72.191zm95.285%200v10.818h32.336v-9.4883c0-0.50292%200.098-0.8572%200.1191-1.3301h-32.455zm59.965%200c0.02%200.47364%200.1191%200.8259%200.1191%201.3281v9.4902h32.537v-10.818h-32.656z%22%20fill%3D%22url(%23b)%22%20stroke-width%3D%220%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
};



var fishs = {
	B:{
		name : 'Blu',
		type : "B",
		lvlUpCost : 100,
		lifeSpan : 40*60*1000,
		claimBase : 3,
		price : 100,
		lvlUpVar : {base:[32,20],inc:[10,6]}
	},
	R:{
		name : 'Red',
		type : "R",
		lvlUpCost : 200,
		lifeSpan : 40*60*1000,
		claimBase : 3,
		price : 150,
		lvlUpVar : {base:[37,23],inc:[10,6]}
	},
	Y:{
		name : 'Orang',
		type : "Y",
		lvlUpCost : 200,
		lifeSpan : 40*60*1000,
		claimBase : 3,
		price : 150,
		lvlUpVar : {base:[37,23],inc:[10,6]}
	}
};


var fishShop = {};
Object.keys(fishs).map(e=>fishShop[e]=fishs[e]);



var fishCraft = {
	G:{
		name : 'Mini Gold',
		type : "G",
		desc : "Generate 300<img src='"+IMG.icon.money+"' class='icon'>/min",
		length : 37,
		height:22,
		delay : 6000,
		function0 :g=>{},
		function1 :g=>{},
		function :g=>{g.uang+=30;g.viewMoney();},
		price : {B:10,R:0,Y:0}
	},
	G1:{
		name : 'Gold',
		type : "G1",
		desc : "Generate 600<img src='"+IMG.icon.money+"' class='icon'>/min",
		length : 50,
		height:30,
		delay : 6000,
		function0 :g=>{},
		function1 :g=>{},
		function :g=>{g.uang+=60;g.viewMoney();},
		price : {B:30,R:10,Y:0}
	},
	N:{
		name : 'Shadow',
		type : "N",
		desc : "Generate 400<img src='"+IMG.icon.money+"' class='icon'>/min.<br>Add shadow effect on tank.",
		length : 100,
		height:42,
		delay : 6000,
		function0 :g=>{

			g.el.glass.style.backgroundImage = "url('"+IMG.bg.shadow+"')";
			g.el.glass.style.backgroundPosition = "center top";
		},
		function1 :g=>{
			g.el.glass.style.background = null;
		},
		function :g=>{
			g.uang+=4;g.viewMoney();
		},
		price : {B:100,R:50,Y:20}
	}
};


var fishCraftShop = {
	G : fishCraft.G,
	G1 : fishCraft.G1,











	N : fishCraft.N
};




var GUIDE = {
	"Currencies":"There are two types of currencies: paper and coin.<br><br><strong>Paper</strong>. Mainly papers are used to unlock <b>Creatures</b>. There are are three types papers: <img src='"+IMG.icon.paper+"' class='icon coinB'>, <img src='"+IMG.icon.paper+"' class='icon coinR'>, and <img src='"+IMG.icon.paper+"' class='icon coinY'>. Each paper are produced by specific fish. The maximum ammount of each paper you can store is <strong>2.000.000</strong>.<br><br><strong>Coin</strong>. Coin ( <img src='"+IMG.icon.money+"' class='icon'>) used for buying and upgrading <b>Fish</b>. Coins are produced by <b>Creatures</b>. The maximum ammount of Coin you can store is <strong>2.000.000.000</strong>.",
	"Fish":"Fish can be bought from <b>Fish shop( <img src='"+IMG.icon.shop+"' class='icon'>)</b>. Fish are used to producing paper. Click on fish to show its stats. Upgrade it to earn more coin. Fish always producing paper even when you offline.<br><br>Tank have limited amount of fish. Each fish have their own lifespan ( <img src='"+IMG.icon.heart+"' class='icon'>). Fish will disappear when its lifespan is over. So, you can buy a new one.",
	"Creatures":"Creatures can be crafted on <b>Creatures Craft ( <img src='"+IMG.icon.craft+"' class='icon'>)</b>. Most Creatures have special abilities. It also generating coin. Creatures have unlimited lifespan, but it works only when you are online. You can place it on tank at most 5 Creatures.",
	"Tank":"Tank level affects how many fish you can place in it. Upgrade the tank to increase the limit."
};
class Game{
	constructor(parentEl){
		let saya=this;
		this.parentEl = parentEl;
		this.el = {};


		this.el.glass = f.ce("div");
		f.sa(this.el.glass,"class","glass");
		f.ac(this.parentEl,this.el.glass);
		this.el.aqua = f.ce("div");
		f.sa(this.el.aqua,"class","aqua");
		f.ac(this.el.glass,this.el.aqua);
		this.el.amb = f.ce("div");
		f.sa(this.el.amb,"class","amb");
		f.ac(this.el.aqua,this.el.amb);


		this.el.bottomBar = f.ce("div");
		f.sa(this.el.bottomBar,"class","bottomBar");
		f.ac(this.parentEl,this.el.bottomBar);


		this.el.tutup = f.qs(".tutup");








		this.menu = new Menu(this);

		this.ikan = [];
		this.craftUnlocked = ["G"];
		this.craftObj = [];
		this.craft = [];
		this.craftMaxItem = 5;
		this.tankItemsUnlocked = [];
		this.tankItems = [];
		this.glassLvlUpCost = 1000;
		this.glassLvl = 1;
		this.onModalRemoved = [];
		this.fishVars = {};
		this.uang = 0;
		this.paper = {
			B:0,
			R:0,
			Y:0
		};


		this.el.modal = f.ce("div");
		f.sa(this.el.modal,"class","modal");
		this.el.popUp = f.ce("div");
		f.sa(this.el.popUp,"class","popUp");
		let uBar = f.ce("div");
		f.ac(this.el.popUp, uBar);
		let title = f.ce("div");
		f.sa(title,"class","title");
		this.el.title = title;
		f.ac(uBar, title);
		let btnClose = f.ce("div");
		f.sa(btnClose,"class","btnClose");
		let hideModal = ()=>{
			this.hideModal();
		}
		this.el.modal.onclick = function(ev){
			if(ev.target==saya.el.modal){
				saya.hideModal();
			}
		};
		btnClose.onclick = hideModal;
		f.ac(uBar, btnClose);
		this.el.content = f.ce("div");
		f.ac(this.el.popUp, this.el.content);
		f.ac(this.el.modal, this.el.popUp);


		this.el.topBar = f.ce("div");
		f.sa(this.el.topBar,"class","topBar");
		f.ac(this.parentEl,this.el.topBar);

		this.viewLogo();
		this.viewPaper();
		this.viewMoney();


		this.glassLvl--;
		this.glassLvlUp(true);



		try{
			let hidden, visibilityChange; 
			if(typeof document.hidden !== "undefined"){
				hidden = "hidden";
				visibilityChange = "visibilitychange";
			}else
			if(typeof document.msHidden !== "undefined"){
				hidden = "msHidden";
				visibilityChange = "msvisibilitychange";
			}else
			if(typeof document.webkitHidden !== "undefined"){
				hidden = "webkitHidden";
				visibilityChange = "webkitvisibilitychange";
			}













			let onHide;
			let doReload = false;
			let handleVisibilityChange = function(){

				window.clearTimeout(onHide);
				if(document[hidden]) {
					onHide = window.setTimeout(function(){
						saya.transisiTutup();
						doReload = true;
					}, 300000);

				}else{
					if(doReload){
						window.setTimeout(function(){
							try{
								saya.saveData(function(){
									window.location = window.location;
								});
							}catch(e){
								window.location = window.location;
							}
						}, 1000);
					}
				}
			};
			if(typeof document.addEventListener === "undefined" || hidden === undefined) {
			}else{
				document.addEventListener(visibilityChange, handleVisibilityChange, false);
			}
		}catch(e){
			console.log(e);
		}

	}

	glassLvlUp(free=false){
		if(this.glassLvl>=10){
			this.glassLvl = 10;
			return;
		}
		let cost = Math.pow(2,this.glassLvl-1)*this.glassLvlUpCost;
		if(cost>this.paper.B && !free)return;
		this.paper.B -= free?0:cost;
		this.glassLvl++;
		this.el.glass.style.width = Math.min(600,400+20*this.glassLvl) + "px";
		this.el.glass.style.height = Math.min(400,200+20*this.glassLvl) + "px";
		this.viewMoney();
	}

	newGame(type){
		this.transisiTutup();
		this.hideModal();
		let saya = this;

		window.setTimeout(()=>{
			try{
				window.clearInteval(saya.saveInterval);
			}catch(e){}
			saya.el.aqua.innerHTML=null;
			saya.el.amb = f.ce("div");
			f.sa(saya.el.amb,"class","amb");
			f.ac(saya.el.aqua,saya.el.amb);

			saya.uang = 500;
			saya.viewMoney();

			saya.ikan.map(e=>{
				if(e)e.kill(saya);
			});

			saya.ikan = [];
			saya.glassLvl=0;
			saya.glassLvlUp(true);
			saya.paper={};
			saya.viewPaper();

			saya.el.aqua.style.background = null;
			saya.craftObj.map(e=>{
				e.kill(saya);
			});			
			saya.craft=[];
			saya.craftUnlocked=["G"];
			saya.craftObj=[];
			saya.fishVars = {};

			saya.tankItemsUnlocked = [];
			saya.tankItems.map(el=>el && el.item && el.item.kill() );
			saya.tankItems = [];
		},1000);

		window.setTimeout(()=>{
			saya.addIkan("B");
			saya.transisiBuka();
			if(type=="kongGuest"){
				saya.showModalInfo("Hello Guest","You are playing in guest mode. Your progress will not be saved. To keep your progress save, please login.");
			}
		},2000);
	}

	addIkan(type,free = false,x=null,y=null){
		if(!type)return;


		let totalIkan = 0;
		this.ikan.map(e=>e && (totalIkan++) );
		if(this.glassLvl*2+1 <= totalIkan)return;

		if(!free){
			if(fishs[type].price > this.uang)return;
			this.uang -= fishs[type].price;
			this.viewMoney();
		}

		let ikan = new Ikan(x||this.el.aqua.offsetWidth*Math.random(),y||this.el.aqua.offsetHeight*Math.random(),this.el.aqua, 74, 46, type,!(x&&y));
		ikan.move(0,0);
		ikan.elWrap.style.animation = "birthIkan .5s";
		this.ikan.push(ikan);
		this.afterAddIkan(ikan);
	}

	addIkan2(type,free = false,x=null,y=null){
		if(!type)return;


		let totalIkan = 0;
		this.ikan.map(e=>e && (totalIkan++) );
		if(this.glassLvl*2+1 <= totalIkan)return;

		if(!free){
			if(fishs[type].price > this.uang)return;
			this.uang -= fishs[type].price;
			this.viewMoney();
		}

		let ikan = new Ikan2(x||this.el.aqua.offsetWidth*Math.random(),y||this.el.aqua.offsetHeight*Math.random(),this.el.aqua, 74, 46, type,!(x&&y));
		ikan.move(0,0);
		ikan.elWrap.style.animation = "birthIkan .5s";
		this.ikan.push(ikan);
		this.afterAddIkan(ikan);
	}

	loadIkan(arr){
		if(!fishs[arr[1]]){
			console.log("Game::loadIkan() ERROR");
			return;
		}

		if(arr[4] && arr[4]==2){
			let type = arr[1];
			let level = arr[2] || 1;
			let ikan = new Ikan2(this.el.aqua.offsetWidth*Math.random(),this.el.aqua.offsetHeight*Math.random(),this.el.aqua, 74, 46, type,true,true,level);
			

			ikan.timeCreated = arr[0]?arr[0]:ikan.timeCreated;
			ikan.lastClaim = arr[3];
			this.ikan.push(ikan);
			this.afterAddIkan(ikan);
			
		}else{
			let type = arr[1];
			let level = arr[2] || 1;
			let ikan = new Ikan(this.el.aqua.offsetWidth*Math.random(),this.el.aqua.offsetHeight*Math.random(),this.el.aqua, 74, 46, type,true,true,level);
			ikan.timeCreated = arr[0]?arr[0]:ikan.timeCreated;
			ikan.lastClaim = arr[3];
			this.ikan.push(ikan);
			this.afterAddIkan(ikan);
		}
	}

	afterAddIkan(ikan){

		ikan.onclick = e=>{
			ikan.nextPos = {
				x:this.parentEl.offsetWidth/2|0,
				y:this.parentEl.offsetHeight/2|0
			};
			this.el.content.innerHTML = "";
			f.ac(this.el.content, ikan.viewStats(this));

			this.showModal(ikan.name+" Fish");
		}
		ikan.paperIntervalClaim(this);
		this.menu.updateMenuBuyIkan();

		let now = new Date();
		let saya = this;
		window.setTimeout(()=>{
			ikan.tryToKill(saya);
		}, ikan.timeCreated + ikan.lifeSpan - now.getTime());

	}



	addCraft(type){
		if(!type)return;

		let totalIkan = 0;
		this.craft.map(e=>e && (totalIkan++) );
		if(this.craftMaxItem <= totalIkan)return;
		if(this.craft.indexOf(type)!=-1)return;
		if(this.craftUnlocked.indexOf(type)==-1)return;


		let ikan = new Craft(this.el.aqua.offsetWidth*Math.random(),this.el.aqua.offsetHeight*Math.random(),this.el.aqua, 74, 46, type);
		ikan.intervalFunction(this);
		this.craft.push(type);
		this.craftObj.push(ikan);
		ikan.function0(this,ikan);
	}

	removeCraft(type){
		if(type==null)return;

		let idx = this.craft.indexOf(type);
		if(idx!=-1){














			this.craftObj[idx].kill(this);










		}
	}

	unlockCraft(type){
		for(let i of Object.keys(fishCraft[type].price)){
			if(fishCraft[type].price[i]>this.paper[i])return;
		}
		this.craftUnlocked.push(fishCraft[type].type);
		for(let i of Object.keys(fishCraft[type].price)){
			this.paper[i] -= fishCraft[type].price[i];
		}
		this.viewPaper();
		try{kongregate.stats.submit("craft", this.craftUnlocked.length);}catch(e){}
	}

	showPop(info="",x=0,y=0){

		let div = f.ce("div");
		div.classList.add("pop1");
		div.style.left = (x-this.parentEl.offsetLeft+400)+"px";
		div.style.top = (y-this.parentEl.offsetTop+240)+"px";
		div.onclick = e=>this.outerHTML="";
		div.innerHTML=info;

		f.ac(this.parentEl,div);

		window.setTimeout(()=>{
			try{
				f.rc(this.parentEl,div);
			}catch(e){}
		},1000);
	}

	showModalInfo(title="",info=""){
		let saya = this;
		this.el.content.innerHTML = "";
		let div1 = f.ce("div");
		f.sa(div1,"style","text-align:center;padding:10px;");
		div1.innerHTML = info;
		f.ac(this.el.content, div1);

		div1 = f.ce("div");
		f.sa(div1,"style","text-align:center;");
		let button = f.ce("button");
		button.innerHTML = " OK ";
		button.onclick = function(){
			saya.hideModal();
		};
		f.ac(div1, button);
		f.ac(this.el.content, div1);

		this.showModal(title);

	}

	showModalWide(title=null){
		if(this.parentEl.contains(this.el.modal)){

		}else{
			this.el.title.innerHTML = title;
			this.el.popUp.style.width = "95%";
			this.el.popUp.style.height = "400px";
			this.el.popUp.style.opacity = 0;
			f.ac(this.parentEl,this.el.modal);
			let zoomin = ()=>{
				this.el.popUp.style.opacity = 1;
			}
			setTimeout(zoomin,50);
		}
	}

	showModal(title=null){
		if(this.parentEl.contains(this.el.modal)){

		}else{
			this.el.title.innerHTML = title;
			this.el.popUp.style.width = "400px";
			this.el.popUp.style.height = "auto";
			this.el.popUp.style.opacity = 0;
			f.ac(this.parentEl,this.el.modal);
			let zoomin = ()=>{
				this.el.popUp.style.opacity = 1;
			}
			setTimeout(zoomin,50);
		}
	}

	hideModal(){
		this.el.content.innerHTML = "";
		this.onModalRemoved.map(e=>{e()});
		this.onModalRemoved = [];
		if(this.parentEl.contains(this.el.modal)){
			this.el.popUp.style.opacity = 0;
			let zoomin = ()=>{
				f.rc(this.parentEl,this.el.modal);
			}
			setTimeout(zoomin,100);
		}else{
		}
	}



	viewLogo(){
		let saya = this;
		let logo = f.ce("img");
		f.sa(logo,"class","logo");
		f.sa(logo,"src",IMG.logo);
		logo.onclick=e=>{
			saya.el.content.innerHTML = "";
			saya.showModalInfo("<img src='"+IMG.logo+"' class='icon'>", f.credit().outerHTML);
		};


		f.ac(this.el.topBar,logo);
	}

	viewMoney(){
		if(!this.el.moneyBar){
			this.el.moneyBar = f.ce("div");
			f.sa(this.el.moneyBar,"class","moneyBar");
		}
		if(!this.el.topBar.contains(this.el.moneyBar)){
			f.ac(this.el.topBar,this.el.moneyBar);
		}
		this.uang = Math.min(this.uang||0,2000000000);
		this.el.moneyBar.innerText = f.numFormat(this.uang);
	}

	viewPaper(){
		this.viewPaperChild("B");
		this.viewPaperChild("R");
		this.viewPaperChild("Y");
	}

	viewPaperChild(id){
		if(!this.el.paperBar){
			this.el.paperBar = {};
		}
		if(!this.el.paperBar[id]){
			this.el.paperBar[id] = f.ce("div");
			f.sa(this.el.paperBar[id],"class","paperBar paper"+id);
		}
		this.paper[id] = Math.min(parseInt(this.paper[id])||0,2000000);
		this.el.paperBar[id].innerText = f.numFormat(this.paper[id]);
		if(!this.el.topBar.contains(this.el.paperBar[id])){
			f.ac(this.el.topBar,this.el.paperBar[id]);
		}
	}


	viewStatus(text){
		let div = f.ce("div");

		div.innerText = text;
		f.ac(this.el.bottomBar,div);

		window.setTimeout(()=>{
			div.style.transitionDuration = "1s";
			div.style.opacity = "0";
			div.style.height = "0px";
			div.style.padding = "0px";
		},2000);
		window.setTimeout(()=>{
			f.rc(this.el.bottomBar,div);
		},4000);

	}

	transisiBuka(){
		try{
			this.el.tutup.style.left=(Math.random()>.5?100:-100)+"%";
		}catch(e){}
	}
	transisiTutup(){
		try{
			this.el.tutup.style.left="0%";
		}catch(e){}
	}





	kongLogin(){
		let param = {
			"KongregateId": window.kongVars.userId,
			"AuthTicket": window.kongVars.token,
			"CreateAccount": true,
			"TitleId": PlayFab.settings.titleId
		};
		PlayFabClientSDK.LoginWithKongregate(param, (r,e)=>{
			try{

				if(!r.data.NewlyCreated && 1){

					this.loadData1();
				}else{
					this.newGame();


					this.saveData();

				}

				let saya = this;
				saya.loggedIn = true;
				this.saveInterval = window.setInterval(()=>{
					saya.saveData();
				},60000);
			}catch(e){
				if(e!==null){
					let saya = this;
					window.setTimeout(()=>{saya.kongLogin()},2000);
				}else{
					this.newGame();
				}
			}
		});
	}

	loadData(){
		let saya = this;
		saya.transisiTutup();

		let param = {
			Keys :[]
		};
		PlayFabClientSDK.GetUserData(param, (r,e)=>{

			try{


				if(r.data.Data.glassLvl){
					saya.glassLvl=1;
					while(saya.glassLvl<parseInt(r.data.Data.glassLvl.Value)){
						saya.glassLvlUp(true);
					}
				}

				if(r.data.Data.curr){
					let data = JSON.parse(r.data.Data.curr.Value);
					saya.uang = parseInt(data[0]);
					saya.viewMoney();
					saya.paper = data[1];
					saya.viewPaper();
				}
				
				if(r.data.Data.craftUnlocked){
					saya.craftUnlocked = JSON.parse(r.data.Data.craftUnlocked.Value);
					saya.craftUnlocked = saya.craftUnlocked.length?saya.craftUnlocked:['G'];
				}
				
				if(r.data.Data.craft){
					for(let i of saya.craft){
						saya.removeCraft(i);
					}
					JSON.parse(r.data.Data.craft.Value).slice(0,saya.craftMaxItem).map(e=>{
						try{
							saya.addCraft(e);
						}catch(e){}
					});
				}

				if(r.data.Data.ikan1){

					for(let i of saya.ikan){
						if(i)i.kill(saya);
					}
					saya.ikan=[];

					JSON.parse(r.data.Data.ikan1.Value).sort((i,j)=>Math.random()>.5?1:-1).map(e=>{
						try{
							saya.loadIkan(e);
						}catch(e){}
					});
				}
				

				if(r.data.Data.general1){
					let general1 = JSON.parse(r.data.Data.general1.Value);
					saya.tankItemsUnlocked=general1.tankItemsUnlocked;
					saya.tankItems.map(el=>el && el.item && el.item.kill() );
					general1.tankItems.sort((a,b)=>b[1]<a[1]?1:-1).map(el=>{
						let tank = new Tank(saya,el[0][0],el[0][1]||0);
					});
				}




				window.setTimeout(()=>{
					saya.transisiBuka();
					if(saya.uang<1 && saya.paper.B<1){
						saya.addIkan("B",true);
					}
				},2001);
			}catch(err){
				if(e!==null){
					let saya = this;
					window.setTimeout(()=>{saya.loadData()},2000);
				}else{
					console.error(e);
					saya.newGame();
				}
			}
		});

	}

	loadData1(){
		let saya = this;
		saya.transisiTutup();

		let param = {
		"InfoRequestParameters": {
			"GetUserAccountInfo": false,
			"GetUserInventory": false,
			"GetUserVirtualCurrency": false,
			"GetUserData": true,
			"UserDataKeys": [],
			"GetUserReadOnlyData": false,
			"GetCharacterInventories": false,
			"GetCharacterList": false,
			"GetTitleData": true,
			"TitleDataKeys":[],
			"GetPlayerStatistics": false,
			"GetPlayerProfile": false
			}
		};

		PlayFabClientSDK.GetPlayerCombinedInfo(param, (r,e)=>{


			try{

				if(r.data.InfoResultPayload.TitleData.fishCraft){
					try{
						eval("window.temp ="+r.data.InfoResultPayload.TitleData.fishCraft);
						fishCraft = window.temp;
					}catch(e){

					}
				}

				if(r.data.InfoResultPayload.TitleData.fishCraftShop){
					try{
						eval("window.temp ="+r.data.InfoResultPayload.TitleData.fishCraftShop);
						fishCraftShop = window.temp;
					}catch(e){

					}
				}

				if(r.data.InfoResultPayload.TitleData.fishs){
					try{
						eval("window.temp ="+r.data.InfoResultPayload.TitleData.fishs);
						fishs = window.temp;

						fishShop = {};
						Object.keys(fishs).map(e=>fishShop[e]=fishs[e]);

					}catch(e){
						console.log(e);
					}
				}










				
				if(r.data.InfoResultPayload.UserData.glassLvl){
					saya.glassLvl=1;
					while(saya.glassLvl<parseInt(r.data.InfoResultPayload.UserData.glassLvl.Value)){
						saya.glassLvlUp(true);
					}
				}
				if(r.data.InfoResultPayload.UserData.curr){
					let data = JSON.parse(r.data.InfoResultPayload.UserData.curr.Value);
					saya.uang = parseInt(data[0]);
					saya.viewMoney();
					saya.paper = data[1];
					saya.viewPaper();
				}
				
				if(r.data.InfoResultPayload.UserData.craftUnlocked){
					saya.craftUnlocked = JSON.parse(r.data.InfoResultPayload.UserData.craftUnlocked.Value);
					saya.craftUnlocked = saya.craftUnlocked.length?saya.craftUnlocked:['G'];
				}
				
				if(r.data.InfoResultPayload.UserData.craft){
					for(let i of saya.craft){
						saya.removeCraft(i);
					}
					JSON.parse(r.data.InfoResultPayload.UserData.craft.Value).slice(0,saya.craftMaxItem).map(e=>{
						try{
							saya.addCraft(e);
						}catch(e){}
					});
				}

				if(r.data.InfoResultPayload.UserData.ikan1){

					for(let i of saya.ikan){
						if(i)i.kill(saya);
					}
					saya.ikan=[];

					JSON.parse(r.data.InfoResultPayload.UserData.ikan1.Value).sort((i,j)=>Math.random()>.5?1:-1).map(e=>{
						try{
							saya.loadIkan(e);
						}catch(e){}
					});
				}
				

				if(r.data.InfoResultPayload.UserData.general1){
					let general1 = JSON.parse(r.data.InfoResultPayload.UserData.general1.Value);
					saya.tankItemsUnlocked=general1.tankItemsUnlocked;
					saya.tankItems.map(el=>el && el.item && el.item.kill() );
					general1.tankItems.sort((a,b)=>b[1]<a[1]?1:-1).map(el=>{
						let tank = new Tank(saya,el[0][0],el[0][1]||0);
					});
				}


				window.setTimeout(()=>{
					saya.transisiBuka();
					if(saya.uang<1 && saya.paper.B<1 && saya.paper.R<1 && saya.paper.Y<1){
						saya.addIkan("B",true);
					}
				},2001);
			}catch(err){
				console.error(err);
				if(e!==null){
					let saya = this;
					window.setTimeout(()=>{saya.loadData1()},2000);
				}else{
					saya.newGame();
				}
			}
		});

	}

	saveData(callback=function(){}){
		try{
			kongregate.stats.submit("craft", this.craftUnlocked.length);
			kongregate.stats.submit("tankLvl", this.glassLvl);
		}catch(e){}
		let param = {
			Data:{
				glassLvl: this.glassLvl,
				ikan1:JSON.stringify(this.ikan.map(e=>{
					try{


						return e.save();
					}catch(e){}
				})),



				curr:JSON.stringify([this.uang, this.paper]),

				craft:JSON.stringify(this.craft),
				craftUnlocked:JSON.stringify(this.craftUnlocked),

				general1: JSON.stringify({
					tankItemsUnlocked:this.tankItemsUnlocked,
					tankItems:this.tankItems.map(e=>{
						try{
							return [e.item.save(),e.index];
						}catch(e){}
					})
				})

			}

		};
		let saya = this;
		let saving = function(r,e){
			if(r!==null){
				saya.viewStatus("Game saved.");
				callback();
				window.setTimeout(()=>{
					saya.saveDataPublic();
				},5000);
			}
		};
		PlayFabClientSDK.UpdateUserData(param,saving);
	}

	saveDataPublic(){
		let param = {
			Data:{
				savePublic :JSON.stringify({
					glassLvl: this.glassLvl,
					ikan1:JSON.stringify(this.ikan.map(e=>{
						try{
							return e.save();
						}catch(e){}
					})),
					craft:JSON.stringify(this.craft),
					tankItems:this.tankItems.map(e=>{
						try{
							return [e.item.save(),e.index];
						}catch(e){}
					})
				})

			},
			Permission: "Public"
		};
		let saya = this;
		let saving = function(r,e){
			if(r!==null){

			}
		};
		PlayFabClientSDK.UpdateUserData(param,saving);
	}



}

class Menu{
	constructor(game){
		this.game = game;
		this.el = {};

		this.vars = {};

		this.addMenuSave();
		this.addMenuBuyIkan1();
		this.addMenuCraft();
		this.addMenuTank();
		this.addMenuGuide();
	}


	addMenu(menu,y=0,text="", img="",click=()=>{}){
		this.el[menu] = f.ce("div");
		f.sa(this.el[menu],"class","sideMenu");
		this.el[menu].style.top = (60+y*80)+"px";
		this.el[menu].style.backgroundImage = "url('"+img+"')";
		this.el[menu].onclick = click;
		f.ac(this.el[menu], f.ce("br"));
		f.ac(this.el[menu], f.ce("br"));
		f.ac(this.el[menu], f.ct(text));
		f.ac(this.game.parentEl,this.el[menu]);
	}

	addMenuSave(){
		let saya = this;
		let click = function(){
			saya.game.viewStatus("Saving...");
			if(saya.game.loggedIn){
				saya.game.saveData();
			}else{

				kongregate.services.showRegistrationBox();

			}
		};
		this.addMenu("menuSave",4,"Save",IMG.icon.save,click);
	}

	addMenuGuide(){
		let saya = this;
		let click = function(){
			saya.game.el.content.innerHTML = "";
			f.ac(saya.game.el.content, saya.guide());
			saya.game.showModalWide("Gude Book");
		};
		this.addMenu("menuGuide",3,"Guide",IMG.icon.book,click);
	}

	addMenuTank(){
		let saya = this;
		let click = function(){
			saya.game.el.content.innerHTML = "";
			f.ac(saya.game.el.content, saya.tank());
			saya.game.showModalWide("Tank");
		};
		this.addMenu("menuTank",2,"Tank",IMG.icon.tank,click);
	}

	addMenuCraft(){
		let saya = this;
		let click = function(){
			saya.game.el.content.innerHTML = "";
			let div = saya.fishCraft1();
			f.ac(saya.game.el.content, div );

			saya.game.showModalWide("Creatures Craft");



		};
		this.addMenu("menuCraft",1,"Craft",IMG.icon.craft,click);
	}

	addMenuBuyIkan1(){
		let saya = this;
		let click = function(){
			let totalIkan = 0;
			saya.game.ikan.map(e=>e && (totalIkan++) );
			saya.game.el.content.innerHTML = "";
			if(saya.game.glassLvl*2+1 > totalIkan || 1){
				f.ac(saya.game.el.content, saya.fishShop());
				saya.game.showModalWide("Fish Shop ("+totalIkan+"/"+(saya.game.glassLvl*2+1)+")");

			}else{

				saya.game.showModalInfo("Insufficient Space","Tank is full ("
					+totalIkan+"/"+(saya.game.glassLvl*2+1)+"). Upgrade your tank to place more fish.");
			}
		};
		this.addMenu("menuShop",0,"Shop",IMG.icon.shop,click);


		if(0){





















		}else{
			let notif = f.ce("div");
			f.sa(notif,"class","notifAngka");
			f.ac(this.el.menuShop,notif);
			this.updateMenuBuyIkan = function(){
				try{
					let totalIkan = 0;
					saya.game.ikan.map(e=>e && (totalIkan++) );
					if(saya.game.glassLvl*2+1 > totalIkan){

						notif.innerHTML = (saya.game.glassLvl*2+1)-totalIkan;
						notif.style.display = "";
					}else{
						notif.style.display = "none";
					}
				}catch(e){
					notif.style.display = "none";
					window.setTimeout(this.updateMenuBuyIkan,2000);

				}
			};
			this.updateMenuBuyIkan();
		}



	}

	fishShop(scrollTop=0){
		let saya = this;
		let div = f.ce("div");
		f.sa(div,"style","overflow-y:scroll;max-height:350px;margin:10px 0px;position:relative;");
		div.onscroll =e=>{scrollTop=div.scrollTop;};


		for(let i of Object.keys(fishShop).sort((a,b)=>fishs[a].price>fishs[b].price?1:-1)){
			let menu = f.ce("div");
			f.sa(menu,"class","shopMenu");

			let aquaMini = f.ce("div");
			f.sa(aquaMini,"class","aquaMini");
			f.ac(menu,aquaMini);
			
			let div1 = f.ce("div");
			f.sa(div1,"class","title1");
			div1.innerHTML = fishShop[i].name;
			f.ac(menu, div1);

			let buy = f.ce("button");
			div1 = f.ce("div");

			if(!fishShop[i].v){
				let ikan = new Ikan((160-fishShop[i].lvlUpVar.base[0])/2 ,(100-fishShop[i].lvlUpVar.base[1])/2,aquaMini, 200, 200, fishShop[i].type,false,false,1);


				div1.innerHTML = "<img src='"+IMG.icon._plus(IMG.icon.paper)+"' class='icon coin"+fishShop[i].type+"'>"+(fishShop[i].claimBase*6)+"/min";



				div1.innerHTML += "<br><img src='"+IMG.icon.heart+"' class='icon'>"+f.lifeBar(fishShop[i].lifeSpan);
				f.ac(menu, div1);


				div1 = f.ce("div");
				buy.onclick = function(ev){
					saya.game.addIkan(fishShop[i].type);


					let totalIkan = 0;
					saya.game.ikan.map(e=>e && (totalIkan++) );
					saya.game.el.title.innerHTML="Fish Shop ("+totalIkan+"/"+(saya.game.glassLvl*2+1)+")";
					saya.game.showPop(" <span style='color:#911'><img src='"+IMG.icon.money+"' class='icon'>"+f.numFormat(fishShop[i].price), ev.pageX, ev.pageY)+"</span>";
				}

			}else
			if(fishShop[i].v==2){

				let ikan = new Ikan2((160-fishShop[i].lvlUpVar.base[0])/2 ,(100-fishShop[i].lvlUpVar.base[1])/2,aquaMini, 200, 200, i ,false,false,1);

				div1 = f.ce("div");
				for(let j in fishShop[i].claimBase){
					div1.innerHTML += "<img src='"+IMG.icon._plus(IMG.icon.paper)+"' class='icon coin"+fishShop[i].curr[j]+"'>"+(fishShop[i].claimBase[j]*6)+"/min<br>";
				}



				div1.innerHTML += "<img src='"+IMG.icon.heart+"' class='icon'>"+f.lifeBar(fishShop[i].lifeSpan);
				f.ac(menu, div1);

				div1 = f.ce("div");
				buy.onclick = function(ev){
					saya.game.addIkan2(i);


					let totalIkan = 0;
					saya.game.ikan.map(e=>e && (totalIkan++) );
					saya.game.el.title.innerHTML="Fish Shop ("+totalIkan+"/"+(saya.game.glassLvl*2+1)+")";
					saya.game.showPop(" <span style='color:#911'><img src='"+IMG.icon.money+"' class='icon'>"+f.numFormat(fishShop[i].price), ev.pageX, ev.pageY)+"</span>";
				}
			}
			
			buy.innerHTML = " <img src='"+IMG.icon.money+"' class='icon'>"+f.numFormat(fishShop[i].price);


			try{

				let totalIkan = 0;
				saya.game.ikan.map(e=>e && (totalIkan++) );

				if(this.game.uang<fishShop[i].price || saya.game.glassLvl*2+1 <= totalIkan){
					f.sa(buy,"disabled","");
				}else{
					f.ra(buy,"disabled");
				}
			}catch(e){
				console.log(e);
			}

			let update = window.setInterval(()=>{
				try{

					let totalIkan = 0;
					saya.game.ikan.map(e=>e && (totalIkan++) );

					if(this.game.uang<fishShop[i].price || saya.game.glassLvl*2+1 <= totalIkan){
						f.sa(buy,"disabled","");
					}else{
						f.ra(buy,"disabled");
					}
				}catch(e){
					console.log(e);
				}
			}, 1000);

			this.game.onModalRemoved.push(()=>{
				window.clearInterval(update);
				saya.updateMenuBuyIkan();
			});


			f.sa(div1,"style","text-align:center;position: absolute;bottom: 0;width:100%;");
			f.ac(div1, buy);
			f.ac(menu, div1);
			f.ac(div, menu);
		}

		return div;
	}

	fishCraft(scrollTop=0,short=null){
		let saya = this;
		let fishShop = {};
		let div = f.ce("div");
		f.sa(div,"style","overflow-y:scroll;max-height:350px;margin:10px 0px;position:relative;");
		div.onscroll =e=>{scrollTop=div.scrollTop;};

		if(!short){






			for(let i of this.game.craftUnlocked.sort((a,b)=> this.game.craft.indexOf(a)!=-1?-1:this.game.craft.indexOf(b)!=-1?1: Object.values(fishCraft[b].price).reduce((c,d)=>c+d) < Object.values(fishCraft[a].price).reduce((c,d)=>c+d)?1:-1)){
				if(!fishShop[i]){
					fishShop[i] = fishCraft[i];
				}
			}

			for(let i of Object.keys(fishCraftShop).sort((a,b)=>Object.values(fishCraftShop[b].price).reduce((c,d)=>c+d) < Object.values(fishCraftShop[a].price).reduce((c,d)=>c+d)?1:-1)){

				if(!fishShop[i]){
					fishShop[i] = fishCraftShop[i];
				}
			}
			short = Object.keys(fishShop);
		}else{
			for(let i of short){
				if(!fishShop[i]){
					fishShop[i] = fishCraft[i];
				}
			}
		}



		for(let i of Object.keys(fishShop)){
			let menu = f.ce("div");
			f.sa(menu,"class","shopMenu");

			let aquaMini = f.ce("div");
			f.sa(aquaMini,"class","aquaMini");
			f.ac(menu,aquaMini);
			let ikan = new Craft((160-fishShop[i].length)/2 ,(100-fishShop[i].height)/2,aquaMini, 200, 200, fishShop[i].type,false,false,1);

			let div1 = f.ce("div");
			f.sa(div1,"class","title1");
			div1.innerHTML = fishShop[i].name;
			f.ac(menu, div1);

			div1 = f.ce("div");
			f.sa(div1,"style","height:100px;overflow-y:hidden");
			div1.innerHTML = fishShop[i].desc;
			f.ac(menu, div1);




			div1 = f.ce("div");
			f.sa(div1,"style","text-align:center;height:80px;display:grid;place-items:center");
			if(this.game.craftUnlocked.indexOf(i)==-1){
				menu.style.backgroundColor = "#777777";
				ikan.hint();
				let buy = f.ce("button");
				buy.onclick = function(){
					saya.game.unlockCraft(i);
					saya.game.el.content.innerHTML = "";
					saya.game.el.title.innerHTML="Creatures Craft ("+saya.game.craft.length+"/"+saya.game.craftMaxItem+")";
					let div = saya.fishCraft(scrollTop, short);
					f.ac(saya.game.el.content, div);
					div.scrollTop = scrollTop;
				}
				buy.innerHTML = " Unlock ";

				let div2 = f.ce("div");
				f.sa(div2,"style","text-align:left;");
				div2.innerHTML = "";
				let idx=-1;
				for(let j of Object.keys(fishShop[i].price)){
					div2.innerHTML += fishShop[i].price[j]?" <img src='"+IMG.icon.paper+"' class='icon coin"+j+"'>"+f.numFormat(fishShop[i].price[j])+(++idx%2?"<br>":""):"";
					if(this.game.paper[j]<fishShop[i].price[j]){
						f.sa(buy,"disabled","");
					}
				}


				let update = window.setInterval(()=>{
					try{

						let disabled = false;
						for(let j of Object.keys(fishShop[i].price)){
							if(this.game.paper[j]<fishShop[i].price[j]){
								disabled = true;
							}
						}
						if(disabled){
							f.sa(buy,"disabled","");
						}else{
							f.ra(buy,"disabled");
						}
					}catch(e){
						console.log(e);
					}
				}, 1000);
				this.game.onModalRemoved.push(()=>{window.clearInterval(update)});

				f.ac(div1, div2);
				f.ac(div1, buy);
			}else
			if(this.game.craft.indexOf(i)==-1){

				let totalIkan = 0;
				saya.game.craft.map(e=>e && (totalIkan++) );

				let buy = f.ce("button");
				f.sa(buy,"class","green");

				buy.onclick = function(){
					saya.game.addCraft(fishShop[i].type);
					if(1){
						saya.game.el.content.innerHTML = "";
						saya.game.el.title.innerHTML="Creatures Craft ("+saya.game.craft.length+"/"+saya.game.craftMaxItem+")";
						let div = saya.fishCraft(scrollTop,short);
						f.ac(saya.game.el.content, div);
						div.scrollTop = scrollTop;

					}else{
						saya.game.hideModal();
					}
				}


				buy.innerHTML = " Insert to tank ";
				if(totalIkan>=this.game.craftMaxItem){
					buy.innerHTML = " Remove others first ";
					f.sa(buy,"disabled","");
				}

				f.ac(div1, buy);

			}else{
				let buy = f.ce("button");
				f.sa(buy,"class","red");










				((buy,saya,i)=>{
					buy.onclick = function(){
						saya.game.removeCraft(i);

						if(1){
							saya.game.el.content.innerHTML = "";
							saya.game.el.title.innerHTML="Creatures Craft ("+saya.game.craft.length+"/"+saya.game.craftMaxItem+")";
							let div = saya.fishCraft(scrollTop,short);
							f.ac(saya.game.el.content, div);
							div.scrollTop = scrollTop;
						}else{
							saya.game.hideModal();
						}
					}
				})(buy,saya,fishShop[i].type);


				buy.innerHTML = " Remove from tank ";

				f.ac(div1, buy);

			}


			f.ac(menu, div1);
			f.ac(div, menu);
		}

		return div;
	}

	fishCraft1(scrollTop=0,short=null){
		let saya = this;
		let fishShop = {};
		let div = f.ce("div");
		f.sa(div,"class",'tank');

		div.onscroll =e=>{scrollTop=div.scrollTop;};

		if(!short){
			for(let i of this.game.craftUnlocked.sort((a,b)=> this.game.craft.indexOf(a)!=-1?-1:this.game.craft.indexOf(b)!=-1?1: Object.values(fishCraft[b].price).reduce((c,d)=>c+d) < Object.values(fishCraft[a].price).reduce((c,d)=>c+d)?1:-1)){
				if(!fishShop[i]){
					fishShop[i] = fishCraft[i];
				}
			}

			for(let i of Object.keys(fishCraftShop).sort((a,b)=>Object.values(fishCraftShop[b].price).reduce((c,d)=>c+d) < Object.values(fishCraftShop[a].price).reduce((c,d)=>c+d)?1:-1)){
				if(!fishShop[i]){
					fishShop[i] = fishCraftShop[i];
				}
			}
			short = Object.keys(fishShop);
		}else{
			for(let i of short){
				if(!fishShop[i]){
					fishShop[i] = fishCraft[i];
				}
			}
		}

		let divLeft = f.ce("div");
		f.sa(divLeft,"class","left");
		f.ac(div,divLeft);
		let divRight = f.ce("div");
		f.sa(divRight,"class","right");
		f.ac(div,divRight);
		divRight.style.overflowY = "scroll";

		let divTitle = f.ce("div");
		f.sa(divTitle,"class",'title1');
		f.ac(divLeft, divTitle);

		let divDesc = f.ce("div");
		f.sa(divDesc,"style","height:200px;overflow-y:hidden");
		f.ac(divLeft, divDesc);

		let divAct = f.ce("div");
		f.sa(divAct,"style","text-align:center;position:absolute;width:100%;bottom:10px;");
		f.ac(divLeft, divAct);



		for(let i of Object.keys(fishShop)){
			let menu = f.ce("div");
			f.sa(menu,"class","shopMenu");
			menu.style.height = "auto";
			menu.style.width = "auto";
			menu.style.padding = "0";
			menu.style.margin = "3px";
			menu.style.cursor = "pointer";

			let aquaMini = f.ce("div");
			f.sa(aquaMini,"class","aquaMini");

			aquaMini.style.height = "50px";
			aquaMini.style.width = "80px";
			f.ac(menu,aquaMini);
			let ikan = new Craft((80-fishShop[i].length)/2 ,(50-fishShop[i].height)/2,aquaMini, 200, 200, fishShop[i].type,false,false,1);
			ikan.elWrap.style.transform = "scale(.5)";

			let div1 = f.ce("div");
			f.sa(div1,"class","center");

			let icon = f.ce("img");
			f.sa(icon,"class","icon");
			f.sa(icon,"src",IMG.icon.check);
			icon.style.position = "absolute";
			icon.style.left = "0";
			icon.style.top = "0";
			icon.style.opacity = 0;


			let updateState = function(saya,i,refresh=true){
				let div1 = f.ce("div");
				if(saya.game.craftUnlocked.indexOf(i)==-1){
					menu.style.backgroundColor = "#777777";
					aquaMini.style.backgroundColor = "#bbb";
					ikan.hint();
					let buy = f.ce("button");
					buy.onclick = function(){
						saya.game.unlockCraft(i);
						menu.style.backgroundColor = "";
						aquaMini.style.backgroundColor = "";
						icon.style.opacity = 0;
						ikan.unHint();
						updateState(saya,i);

					}
					buy.innerHTML = " Unlock ";

					let div2 = f.ce("div");

					div2.innerHTML = "";
					let idx=-1;
					for(let j of Object.keys(fishShop[i].price)){
						div2.innerHTML += fishShop[i].price[j]?" <img src='"+IMG.icon.paper+"' class='icon coin"+j+"'>"+f.numFormat(fishShop[i].price[j])+(++idx%2?"<br>":""):"";
						if(saya.game.paper[j]<fishShop[i].price[j]){
							f.sa(buy,"disabled","");
						}
					}
					if(!buy.disabled){
						f.sa(icon,"src",IMG.icon.warn);
						icon.classList.add("goyang");
						icon.style.opacity = 1;
					}


					let update = window.setInterval(()=>{
						try{

							let disabled = false;
							for(let j of Object.keys(fishShop[i].price)){
								if(saya.game.paper[j]<fishShop[i].price[j]){
									disabled = true;
								}
							}
							if(disabled){
								f.sa(buy,"disabled","");
							}else{
								f.ra(buy,"disabled");
								if(saya.game.craftUnlocked.indexOf(i)==-1){
									f.sa(icon,"src",IMG.icon.warn);
									icon.classList.add("goyang");
									icon.style.opacity = 1;
								}
							}
						}catch(e){
							console.log(e);
						}
					}, 1000);
					saya.game.onModalRemoved.push(()=>{window.clearInterval(update)});

					f.ac(div1, div2);
					f.ac(div1, buy);
				}else
				if(saya.game.craft.indexOf(i)==-1){

					let totalIkan = 0;
					saya.game.craft.map(e=>e && (totalIkan++) );

					let buy = f.ce("button");
					f.sa(buy,"class","green");

					buy.onclick = function(){
						saya.game.addCraft(fishShop[i].type);
						f.sa(icon,"src",IMG.icon.check);
						icon.classList.remove("goyang");
						icon.style.opacity = 1;
						updateState(saya,i);
					}


					buy.innerHTML = " Insert to tank ";
					if(totalIkan>=saya.game.craftMaxItem){
						buy.innerHTML = " Remove others first ";
						f.sa(buy,"disabled","");
					}

					f.ac(div1, buy);

				}else{
					f.sa(icon,"src",IMG.icon.check);
					icon.classList.remove("goyang");
					icon.style.opacity = 1;

					let buy = f.ce("button");
					f.sa(buy,"class","red");


					((buy,saya,i)=>{
						buy.onclick = function(){
							saya.game.removeCraft(i);

							icon.style.opacity = 0;
							updateState(saya,i);

						}
					})(buy,saya,fishShop[i].type);


					buy.innerHTML = " Remove from tank ";

					f.ac(div1, buy);

				}

				if(refresh){
					divAct.innerHTML = "";
					f.ac(divAct, div1);
				}
				return div1;
			};



			updateState(saya,i,false);
			f.ac(menu, icon);
			((menu,i,div1)=>{
				menu.onclick = function(e){
					divTitle.innerHTML = fishShop[i].name;
					divDesc.innerHTML = fishShop[i].desc;
					updateState(saya,i);
					try{f.qs("#shopMenuSelected").id="";}catch(e){}
					menu.id="shopMenuSelected";


				};
			})(menu,i,div1);
			f.ac(divRight, menu);
		}

		return div;
	}

	tank(){
		let saya = this;
		let div = f.ce("div");
		f.sa(div,"class",'tank');




		let div1 = f.ce("div");
		f.sa(div1,"class",'left');


		let div11 = f.ce("div");
		f.sa(div11,"class",'title1');
		div11.innerHTML = "Tank Properties";
		f.ac(div1, div11);

		let icon = f.ce("img");
		f.sa(icon,"class","iconBig");
		f.sa(icon,"src",IMG.icon.tank);
		f.ac(div1, icon);

		let table = f.ce("table");
		let tr = f.ce("tr");
		let td = f.ce("td");
		td.innerHTML = "Level";
		f.ac(tr,td);
		td = f.ce("td");

		let textGlassLvl = f.ce("span");
		textGlassLvl.innerHTML = this.game.glassLvl+"/10";
		f.ac(td,textGlassLvl);


		f.ac(tr,td);
		f.ac(table,tr);


		tr = f.ce("tr");
		td = f.ce("td");
		td.innerHTML = "Paperfish";
		f.ac(tr,td);
		td = f.ce("td");
		let totalIkan = 0;
		this.game.ikan.map(e=>e && (totalIkan++) );
		let textTotalIkan = f.ce("span");
		textTotalIkan.innerHTML = (totalIkan+"/"+(this.game.glassLvl*2+1));
		f.ac(td,textTotalIkan);
		f.ac(tr,td);
		f.ac(table,tr);




		tr = f.ce("tr");
		td = f.ce("td");
		td.innerHTML = "Upgrade";
		f.ac(tr,td);
		td = f.ce("td");
		let button = f.ce("button");

		let buttonSet = function(saya,button,textTotalIkan,textGlassLvl){
			f.ra(button,"disabled");
			if(saya.game.glassLvl>=10){
				button.innerHTML = "Maxed";
				f.sa(button,"disabled","");
			}else{
				let cost = Math.pow(2,saya.game.glassLvl-1)*saya.game.glassLvlUpCost;
				button.innerHTML = " <img src='"+IMG.icon.paper+"' class='icon coinB'> "+f.numFormat(cost);
				if(cost>saya.game.paper.B){
					f.sa(button,"disabled","");
				}

				button.onclick = function(ev){
					saya.game.glassLvlUp();


					buttonSet(saya, this, textTotalIkan,textGlassLvl);
					saya.game.showPop(" <span style='color:#911'><img src='"+IMG.icon.paper+"' class='icon coinB'> "+f.numFormat(cost), ev.pageX, ev.pageY)+"</span>";

				}

			}

			textGlassLvl.innerHTML = saya.game.glassLvl+"/10";


			let totalIkan = 0;
			saya.game.ikan.map(e=>e && (totalIkan++) );
			textTotalIkan.innerHTML = (totalIkan+"/"+(saya.game.glassLvl*2+1));

		};
		buttonSet(saya, button, textTotalIkan, textGlassLvl);
		
		let buttonUpdate = window.setInterval(()=>{
			buttonSet(saya, button,textTotalIkan, textGlassLvl);
		}, 1000);

		this.game.onModalRemoved.push(()=>{
			window.clearInterval(buttonUpdate);
		});


		f.ac(td,button);
		f.ac(tr,td);
		f.ac(table,tr);

		f.ac(div1, table);



		let div2 = f.ce("div");
		f.sa(div2,"class",'right');
		div2.style.overflowY = "scroll";

		let div21 = f.ce("div");
		f.sa(div21,"class",'title1');
		div21.innerHTML = "Tank Items";
		f.ac(div2, div21);




		let tankItemsList=[];
		for(let i of saya.game.tankItemsUnlocked){
			if(tankItemsList.indexOf(i)==-1 && tankItemsShop.indexOf(i)!==-1){
				tankItemsList.push(i);
			}
		}
		for(let i of tankItemsShop.sort((a,b)=>Object.values(tankItems[b].price).reduce((c,d)=>c+d) < Object.values(tankItems[a].price).reduce((c,d)=>c+d)?1:-1)){
			if(tankItemsList.indexOf(i)==-1){
				tankItemsList.push(i);
			}
		}
		for(let i of tankItemsList)
		{
			let menu = f.ce("div");
			f.sa(menu,"class","shopMenu");
			menu.style.height = "260px";
			menu.style.width = "auto";
			menu.style.padding = "0";
			menu.style.margin = "3px";
			menu.style.cursor = "pointer";

			let name = f.ce("div");
			f.sa(name,"class","title1");
			f.ac(name,f.ct(tankItems[i].name));
			f.ac(menu,name);

			let aquaMini = f.ce("div");
			f.sa(aquaMini,"class","aquaMini");
			let aquaMiniSize=[220,150];
			aquaMini.style.height = aquaMiniSize[1]+"px";
			aquaMini.style.width = aquaMiniSize[0]+"px";
			aquaMini.style.overflowY = "visible";
			aquaMini.style.display = "list-item";

			let el = tankItems[i].el.cloneNode(true);
			f.ac(aquaMini, el);


			let scale=1;
			if(tankItems[i].width.slice(-2)=='px'){
				let width = parseInt(tankItems[i].width.slice(0,-2));
				if(width>aquaMiniSize[0]){
					scale = Math.min(scale,aquaMiniSize[0]/width);
				}
			}
			if(tankItems[i].height.slice(-2)=='px'){
				let height = parseInt(tankItems[i].height.slice(0,-2));
				if(height>aquaMiniSize[1]){
					scale = Math.min(scale,aquaMiniSize[1]/height);
				}
			}
			el.style.transform = "scale("+scale+") translate(-50%,0)";
			el.style.left = "50%";
			el.style.transformOrigin = "left bottom";

			let money = f.ce("div");
			money.style.color="#000000";
			money.innerHTML = "<img src='"+IMG.icon._plus(IMG.icon.money)+"' class='icon'>"+(tankItems[i].money*20)+"/min";
			f.ac(aquaMini, money);


			let divAct0 = f.ce("div");
			let updateState = function(refresh=false){
				let divAct = f.ce("div");
				divAct.style.textAlign = "center";
				if(saya.game.tankItemsUnlocked && saya.game.tankItemsUnlocked.indexOf(i)!==-1){
					menu.style.backgroundColor = "";

					let isEnabled=-1;
					(saya.game.tankItems || []).map((el, idx)=>el && el.item.type==i && (isEnabled=idx));

					let divBuy = f.ce("div");
					let conf = f.ce("button")
					conf.innerHTML = "Move";
					f.ac(divBuy, conf);
					f.ac(divAct, divBuy);

					if(isEnabled==-1){
						f.sa(conf,"disabled","");
					}else{
						conf.onclick = function(){
							saya.game.tankItems[isEnabled].item.configure();
							saya.game.hideModal();
						}
					}

					divBuy = f.ce("div");
					let button = f.ce("button")
					f.ac(divBuy, button);
					f.ac(divAct, divBuy);
					if(isEnabled!==-1){
						button.classList.add("red");
						button.innerHTML = "Remove";
						button.onclick = function(){
							saya.game.tankItems.map(e=>e && e.item.type==i && e.item.kill() );
							updateState(true);
						};
					}else{
						button.classList.remove("red");
						button.innerHTML = "Insert";
						button.onclick = function(){
							let tank = new Tank(saya.game,i);
							updateState(true);
						};
					}

				}else{
					menu.style.backgroundColor = "#777777";
					let divPrice = f.ce("div");
					let isEnabled = true;

					if(saya.game.glassLvl<(tankItems[i].minGlassLvl || 1)){
						divPrice.innerHTML = "Available on Tank lvl. "+(tankItems[i].minGlassLvl || 1);
						isEnabled = false;
					}else{
						for(let j of Object.keys(tankItems[i].price)){
							divPrice.innerHTML+=" <img src='"+IMG.icon.paper+"' class='icon coin"+j+"'> "+f.numFormat(tankItems[i].price[j]);
							isEnabled &= tankItems[i].price[j]<=saya.game.paper[j];
						}
					}

					let divBuy = f.ce("div");
					let buy = f.ce("button")
					buy.innerHTML = "Buy";
					((buy,i, saya,menu)=>{
						buy.onclick = function(){
							for(let j of Object.keys(tankItems[i].price)){
								saya.game.paper[j]-=tankItems[i].price[j];
							}
							saya.game.tankItemsUnlocked.push(i);
							updateState(true);
						};
						
					})(buy, i,saya,menu);

					if(!isEnabled){
						f.sa(buy,"disabled","");
					}
					f.ac(divBuy, buy);

					f.ac(divAct, divPrice);
					f.ac(divAct, divBuy);
				}
				if(refresh){
					divAct0.innerHTML = '';
					f.ac(divAct0,divAct);
				}
				saya.game.viewPaper();
				return divAct;
			};

			f.ac(menu,aquaMini);
			f.ac(menu, divAct0);
			f.ac(div2,menu);

			updateState(true);
			let update = window.setInterval(()=>updateState(true),2000);

			saya.game.onModalRemoved.push(()=>{
				window.clearInterval(update);
			});


		}

		f.ac(div, div1);
		f.ac(div, div2);





		this.game.onModalRemoved.push(()=>{
			saya.updateMenuBuyIkan();
		});

		return div;
	}


	guide(){
		let saya = this;
		let div = f.ce("div");
		f.sa(div,"class",'tank');




		let div1 = f.ce("div");
		f.sa(div1,"class",'left');

		let div11 = f.ce("div");
		f.sa(div11,"class",'title1');
		div11.innerHTML = "Contents";
		f.ac(div1, div11);





		let div2 = f.ce("div");
		f.sa(div2,"class",'right');

		let div21 = f.ce("div");
		f.sa(div21,"class",'title1');
		f.ac(div2, div21);

		let div22 = f.ce("div");
		f.ac(div2, div22);

		f.ac(div, div1);
		f.ac(div, div2);

		for(let i of Object.keys(GUIDE)){
			let button = f.ce("button");
			f.ac(button,f.ct(i));
			f.ac(div1,button);
			f.ac(div1,f.ce("br"));

			((button,i)=>{
				button.onclick = function(){
					div21.innerHTML = i;
					div22.innerHTML = GUIDE[i];
				};
			})(button,i);
		}

		return div;
	}
}
class Ikan{
	constructor(x,y,parentEl,length=200,height=100,type="N",moveable=true,enableNotif=true,level=1,dir=null){
		if(moveable){
			x = Math.max(  0, Math.min((parentEl.offsetWidth||0)-length, x));
			y = Math.max(100, Math.min((parentEl.offsetHeight||0)-height, y));
		}

		let now = new Date();
		this.lastClaim = now.getTime();
		this.timeCreated = now.getTime();




		if(!moveable){
			this.x = x|0;
			this.y = y|0;
			this.dir=dir || 0;
		}else{
			this.x = (parentEl.offsetWidth/2|0||0);
			this.y = -200;
			this.dir=(x<this.x?0:1);
		}

		if(!fishs[type])throw "Undefined ikan";

		let fishVar = fishs[type]||fishs["B"];

		for(let i of Object.keys(fishVar)){
			this[i] = fishVar[i];
		}


		this.level = level;

		length = this.lvlUpVar.base[0]+this.level*this.lvlUpVar.inc[0];
		height = this.lvlUpVar.base[1]+this.level*this.lvlUpVar.inc[1];

		this.maxLevel = 10;
		this.parentEl = parentEl;
		this.speed = 50;
		this.length = length;
		this.height = height;
		this.nextPos = null;
		this.fishVar = {};



		f.craft.swanAnim(this);






























		let onclick =e=>{
			this.onclick(e);
		};
		this.elWrap.addEventListener("click", onclick);


		if(moveable){
			this.move(x-this.x, y-this.y,10)
		}

		if(enableNotif){






		}
	}


	prepareAnim(){
		this.elWrap = f.ce("div");
		f.sa(this.elWrap,"class","ikan");
		f.sa(this.elWrap,"style","z-index:9;");
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
			el.style.backgroundImage = "url('data:image/svg+xml;utf8, "+IMG.fishs[this.type]+"')";
			el.style.backgroundPosition = (-length*i)+"px 0";
			el.style.animationDuration = (1+3*this.length/200)+"s";
		}
		this.elWrap.style.left = this.x +"px";
		this.elWrap.style.top = this.y +"px";

		f.ac(this.elWrap,this.el);
		f.ac(this.parentEl,this.elWrap);

	}

	paperIntervalClaim(game){
		if(this.claimingInterval){
			window.clearInterval(this.claimingInterval);
		}

		let saya = this;
		let claim = function(){
			saya.paperClaim(game);
		}
		this.claimingInterval = window.setInterval(claim,3000);
	}

	paperClaim(game,force=false){
		let now = new Date();
		if(now.getTime() - this.lastClaim>=3000 || force){
			let claimed = this.claimBase*this.level*(Math.min(now.getTime(),this.timeCreated+this.lifeSpan) - this.lastClaim)/10000|0;
			if(claimed>0){
				game.paper[this.type] = parseInt(game.paper[this.type])+claimed;
				this.lastClaim = now.getTime();
			}
			game.viewPaper();
		}
	}

	save(){
		let param = [
			this.timeCreated,
			this.type,
			this.level,
			this.lastClaim
		];

		return param;
	}
























	tryToKill(game){
		let saya = this;

		let now = new Date();
		if(saya.timeCreated + saya.lifeSpan <= now.getTime()){

			saya.kill(game);
		}
		else{
			window.setTimeout(()=>{
				saya.tryToKill(game);
			}, saya.timeCreated + saya.lifeSpan - now.getTime());
		}
	}
	

	kill(game=null){
		try{
			window.clearInterval(this.claimingInterval);
			this.paperClaim(game,true);
		}catch(e){}
		this.el.classList.add("death");

		if(game){
			let idx = game.ikan.indexOf(this);
			if(idx!=-1){
				game.ikan[idx] = null;
			}
			game.menu.updateMenuBuyIkan();
		}

		let saya = this;
		window.setTimeout(function(){
			try{
				saya.elWrap.outerHTML = "";
			}catch(e){}
		},this.elWrap.style.transitionDuration.slice(0,-1)*1000);
	}

	levelUp(game,free = true){
		let saya = this;
		if(this.level>=this.maxLevel)return;


		if(!free){
			let lvlUpCost = Math.pow(2,this.level)*this.lvlUpCost;
			if(game.uang<lvlUpCost)return;
			game.uang-=lvlUpCost;
		}
		
		this.level++;
		try{
			paperClaim(game,true);
		}catch(e){}



		if(0){
			let ikan = null;
			if(this.constructor.name=="Ikan"){
				ikan = new Ikan(this.elWrap.offsetLeft,this.elWrap.offsetTop,this.parentEl,200,100,this.type,false,true,this.level,this.dir);
			}else
			if(this.constructor.name=="Ikan2"){
				ikan = new Ikan2(this.elWrap.offsetLeft,this.elWrap.offsetTop,this.parentEl,200,100,this.type,false,true,this.level,this.dir);
			}
			this.elWrap.outerHTML = "";
			this.elWrap = ikan.elWrap;
			this.el = ikan.el;
			this.length = ikan.length;
			this.height = ikan.height;
			ikan.onclick = this.onclick;









			this.dontMove = true;
			this.onDontMove = function(){
				this.dontMove = false;
				this.move(0,0);
			};


			this.el.style.animation = null;
			let shine =()=>{
				this.el.style.animation = "shine 1s";
			};
			setTimeout(shine,100);


			return;
		}




		let length = this.lvlUpVar.base[0]+this.level*this.lvlUpVar.inc[0];
		let height = this.lvlUpVar.base[1]+this.level*this.lvlUpVar.inc[1];



		this.length = length;
		this.height = height;

		this.elWrap.style.height = height+"px";
		this.elWrap.style.width = (length)+"px";

		this.el.style.height = height+"px";
		this.el.style.width = (length)+"px";



		length /= 5;
		let els = this.el.querySelectorAll(".ikan .ikan .ruas");



		for(let i in els){
			if(!els[i].style){

				continue;
			}
			els[i].style.width = (length+1)+"px";
			els[i].style.left = (parseInt(i)?length:0)+"px";
			els[i].style.height = height+"px";
			els[i].style.backgroundPosition = (-length*i)+"px 0";
			els[i].style.animationDuration = (1+3*this.length/200)+"s";
		}
		
		this.el.style.animation = null;
		let shine =()=>{
			this.el.style.animation = "shine 1s";
		};
		setTimeout(shine,100);










	}

	lifeBar(game){
		let now = new Date();
		let div = f.ce("div");
		f.sa(div,"class","lifeBar");

		let bar = f.ce("div");
		f.sa(bar,"class","lifeBarHp");
		f.ac(div, bar);

		if(0){
			bar.style.width = ((now.getTime() - this.timeCreated)/this.lifeSpan*100|0)+"%";
			bar.style.transitionDuration = ((-now.getTime() + this.timeCreated + this.lifeSpan)/998|0)+"s";
			window.setTimeout(()=>{
				bar.style.width = "100%";
			},1000);
		}else{
			let saya=this;

			let text = f.ce("div");
			f.sa(text,"class","lifeBarText");
			f.ac(div, text);

			let updateFunction=function(){
				let now=new Date();
				bar.style.width = ((now.getTime() - saya.timeCreated)/saya.lifeSpan*100|0)+"%";
				if(game)text.innerHTML = f.lifeBar(saya.timeCreated+saya.lifeSpan-now.getTime());
			};
			updateFunction();
			let update = window.setInterval(()=>{
				updateFunction();

			},1000);
			if(game){
				(saya.game || game).onModalRemoved.push(()=>{
					window.clearInterval(update);
				});
			}

		}
		return div;
	}

	viewStats(game){
		this.game = this.game || game;
		let div = f.ce("div");

		let uBar = f.ce("div");
		let aquaMini = f.ce("div");
		f.sa(aquaMini,"class","aquaMini");
		f.ac(uBar,aquaMini);
		let ikan = new Ikan((160-this.length)/2,(100-this.height)/2,aquaMini, this.length, this.height, this.type,false,false,this.level);

		let table = f.ce("table"),tr,td;


		tr = f.ce("tr");
		td = f.ce("td");
		td.innerHTML = "Level &nbsp;&nbsp;&nbsp;&nbsp;";
		f.ac(tr, td);
		td = f.ce("td");
		td.innerText = this.level+"/"+this.maxLevel;
		f.ac(tr, td);
		f.ac(table, tr);

		tr = f.ce("tr");
		td = f.ce("td");
		td.innerText = "Life ";
		f.ac(tr, td);
		td = f.ce("td");
		f.ac(td,this.lifeBar(game));
		f.ac(tr, td);
		f.ac(table, tr);

		
		tr = f.ce("tr");
		td = f.ce("td");
		td.innerHTML = "Paper";
		f.ac(tr, td);
		td = f.ce("td");
		td.innerHTML = " <img src='"+IMG.icon._plus(IMG.icon.paper)+"' class='icon coin"+this.type+"'>"+(this.claimBase*this.level*6)+"/min";
		f.ac(tr, td);
		f.ac(table, tr);


		if(this.level < this.maxLevel){
			let lvlUpCost = Math.pow(2,this.level)*this.lvlUpCost;
			tr = f.ce("tr");
			td = f.ce("td");
			let button = f.ce("button");
			button.innerHTML = "Lvl. Up<br><img src='"+IMG.icon.money+"' class='icon'>"+f.numFormat(lvlUpCost);
			f.ac(td, button);
			f.ac(tr, td);
			f.sa(td,"colspan",2);

			let saya = this;
			let onclick = function(ev){

					
				saya.levelUp(game);

				if(game.uang<lvlUpCost){
					f.sa(button,"disabled","");
				}else{
					f.ra(button,"disabled");
				}


				if(game.ikan.indexOf(saya)!=-1){
					game.uang -= lvlUpCost;
					game.showPop(" <span style='color:#911'><img src='"+IMG.icon.money+"' class='icon'>"+f.numFormat(lvlUpCost), ev.pageX, ev.pageY)+"</span>";
				}else{
					game.hideModal();
				}

				ikan.kill();

				game.el.content.innerHTML = "";
				f.ac(game.el.content, saya.viewStats(game));

				game.viewMoney();


				if(0)
				window.setTimeout(()=>{
					game.el.content.innerHTML = "";
					f.ac(game.el.content, saya.viewStats(game));
					game.showModal(saya.name+" Fish");
				},500);
			}
			button.onclick = onclick;


			let update = window.setInterval(()=>{
				try{
					if(game.uang<lvlUpCost){
						f.sa(button,"disabled","");
					}else{
						f.ra(button,"disabled");
					}
				}catch(e){
					console.log(e);
				}
			}, 1000);

			game.onModalRemoved.push(()=>{window.clearInterval(update)});

			if(game.uang<lvlUpCost){
				f.sa(button,"disabled","");
			}


			f.ac(table, tr);
		}
		else{
			tr = f.ce("tr");
			td = f.ce("td");
			let button = f.ce("button");
			button.innerHTML = " Level <br> Maxed ";
			f.ac(td, button);
			f.ac(tr, td);
			f.sa(td,"colspan",2);
			f.sa(button,"disabled","");
			f.ac(table, tr);
		}


		f.ac(uBar,table);
		

		f.ac(div,uBar);
		return div;
	}

	move(x,y,speed=null,moveable=true){
		if(moveable){
			x = Math.min(this.parentEl.offsetWidth-this.length, Math.max(  0,this.x + x));
			y = Math.min(this.parentEl.offsetHeight-this.height-10,Math.max(  0,this.y + y));
		}
		let delay = 0;
		if(x>this.x && this.dir==0){
			delay = 2000;
			this.dir = 1;
			this.el.style.transitionDuration="2s";
			this.el.style.transform=" perspective(400px) rotateY(180deg)";
		}else
		if(x<this.x && this.dir==1){
			delay = 2000;
			this.dir = 0;
			this.el.style.transitionDuration="2s";
			this.el.style.transform=" perspective(400px) rotateY(0deg)";
		}

		let distance = speed?1000/speed:Math.sqrt((this.x-x)*(this.x-x)+(this.y-y)*(this.y-y));

		this.x = x|0;
		this.y = y|0;
		setTimeout(()=>{
			this.elWrap.style.transitionDuration=Math.max(distance/40|0,1)+"s";
			this.elWrap.style.left = this.x +"px";
			this.elWrap.style.top = this.y +"px";

			try{
				window.clearTimeout(this.timeoutMove);
			}catch(e){}
			this.timeoutMove = window.setTimeout(()=>{

				let X = this.nextPos && this.nextPos.x!=undefined?this.nextPos.x-this.x:this.parentEl.offsetWidth*(Math.random()-.5);
				let Y = this.nextPos && this.nextPos.y!=undefined?this.nextPos.y-this.y:this.parentEl.offsetHeight*(Math.random()-.5);

				this.nextPos = null;

				if(moveable){
					if(this.dontMove){
						this.onDontMove();
					}else{
						this.move(X, Y);
					}
				}
			},distance*25+500+ (Math.random()<.5? 10000:2500)*Math.random() );


		},delay+1);

	}
	onDontMove(){

	}

	onclick(e){
	}

	addNotif(){
		this.notif = this.notif || f.ce("div");
		this.notif.innerText = "!";
		f.sa(this.notif,"class","notif");
		if(!this.hasNotif()){
			f.ac(this.elWrap,this.notif);
		}
	}

	hasNotif(){
		return this.elWrap.contains(this.notif);
	}

	clearNotif(){
		try{
			f.rc(this.elWrap,this.notif);
		}catch(e){}
	}

}




class Ikan2 extends Ikan{
	constructor(...args){
		super(...args);
		let lastClaim = this.lastClaim;
		this.lastClaim = [];
		for(let i in this.claimBase)this.lastClaim.push(lastClaim);
	}


	prepareAnim(){


		this.elWrap = f.ce("div");
		f.sa(this.elWrap,"class","ikan");
		f.sa(this.elWrap,"style","z-index:9;");
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

	paperClaim(game,force=false){
		let now = new Date();

		for(let i in this.claimBase){
			if(now.getTime() - this.lastClaim[i]>=3000 || force){

				let claimed = this.claimBase[i]*this.level*(Math.min(now.getTime(),this.timeCreated+this.lifeSpan) - this.lastClaim[i])/10000|0;
				if(claimed>0){

					game.paper[this.curr[i]] += claimed;
					this.lastClaim[i] = now.getTime();
				}
			}
			game.viewPaper();
		}
	}



	save(){

		let param = [
			this.timeCreated,
			this.type,
			this.level,
			[...this.lastClaim],
			this.v
		];

		return param;
	}



	viewStats(game){
		let div = f.ce("div");

		let uBar = f.ce("div");
		let aquaMini = f.ce("div");
		f.sa(aquaMini,"class","aquaMini");
		f.ac(uBar,aquaMini);
		let ikan = new Ikan2((160-this.length)/2,(100-this.height)/2,aquaMini, this.length, this.height, this.type,false,false,this.level);

		let table = f.ce("table"),tr,td;


		tr = f.ce("tr");
		td = f.ce("td");
		td.innerHTML = "Level &nbsp;&nbsp;&nbsp;&nbsp;";
		f.ac(tr, td);
		td = f.ce("td");
		td.innerText = this.level+"/"+this.maxLevel;
		f.ac(tr, td);
		f.ac(table, tr);

		tr = f.ce("tr");
		td = f.ce("td");
		td.innerText = "Life ";
		f.ac(tr, td);
		td = f.ce("td");
		f.ac(td,this.lifeBar(game));
		f.ac(tr, td);
		f.ac(table, tr);

		
		tr = f.ce("tr");
		td = f.ce("td");
		td.innerHTML = "Paper";
		f.ac(tr, td);
		td = f.ce("td");
		for(let i in this.claimBase){
			td.innerHTML += " <img src='"+IMG.icon._plus(IMG.icon.paper)+"' class='icon coin"+this.curr[i]+"'>"+(this.claimBase[i]*this.level*6)+"/min<br>";
		}
		f.ac(tr, td);
		f.ac(table, tr);


		if(this.level < this.maxLevel){
			let lvlUpCost = Math.pow(2,this.level)*this.lvlUpCost;
			tr = f.ce("tr");
			td = f.ce("td");
			let button = f.ce("button");
			button.innerHTML = "Lvl. Up<br><img src='"+IMG.icon.money+"' class='icon'>"+f.numFormat(lvlUpCost);
			f.ac(td, button);
			f.ac(tr, td);
			f.sa(td,"colspan",2);

			let saya = this;
			let onclick = function(ev){
				saya.levelUp(game);
				
				if(game.uang<lvlUpCost){
					f.sa(button,"disabled","");
				}else{
					f.ra(button,"disabled");
				}


				if(game.ikan.indexOf(saya)!=-1){
					game.uang -= lvlUpCost;
					game.showPop(" <span style='color:#911'><img src='"+IMG.icon.money+"' class='icon'>"+f.numFormat(lvlUpCost), ev.pageX, ev.pageY)+"</span>";
				}else{
					game.hideModal();
				}

				ikan.kill();

				game.el.content.innerHTML = "";
				f.ac(game.el.content, saya.viewStats(game));

				game.viewMoney();

				if(0)
				window.setTimeout(()=>{
					game.el.content.innerHTML = "";
					f.ac(game.el.content, saya.viewStats(game));
					game.showModal(saya.name+" Fish");
				},500);
			}
			button.onclick = onclick;

			if(game.uang<lvlUpCost){
				f.sa(button,"disabled","");
			}



			let update = window.setInterval(()=>{
				try{
					if(game.uang<lvlUpCost){
						f.sa(button,"disabled","");
					}else{
						f.ra(button,"disabled");
					}
				}catch(e){
					console.log(e);
				}
			}, 1000);

			game.onModalRemoved.push(()=>{window.clearInterval(update)});

			if(game.uang<lvlUpCost){
				f.sa(button,"disabled","");
			}

			f.ac(table, tr);
		}
		else{
			tr = f.ce("tr");
			td = f.ce("td");
			let button = f.ce("button");
			button.innerHTML = " Level <br> Maxed ";
			f.ac(td, button);
			f.ac(tr, td);
			f.sa(td,"colspan",2);
			f.sa(button,"disabled","");
			f.ac(table, tr);
		}


		f.ac(uBar,table);
		

		f.ac(div,uBar);
		return div;
	}







}
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


		if(moveable){
			this.move(x-this.x, y-this.y,10)
		}

		if(enableNotif){
		}

	}
	moveArea(x,y){
		let saya=this;
		this.areaLimit = this.areaLimit.map((e,i)=>(typeof e === 'string')?(i%2?saya.parentEl.offsetHeight:saya.parentEl.offsetWidth)+parseInt(e):e);

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
		let now = new Date();

		saya.lastFunctionCall = saya.lastFunctionCall || now.getTime();
		this.functionInterval = window.setInterval(()=>{
			let now = new Date();
			while(now.getTime()-saya.lastFunctionCall >=saya.delay){
				saya.function(game,saya);
				saya.lastFunctionCall+=saya.delay;
			}









		},this.delay);
	}


	move(x,y,speed=null,moveable=true){
		if(moveable){


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
			this.function1(game,this);
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













		let els = this.elWrap.getElementsByTagName('div');

		for(let i in els){
			if(!els[i].style){
				continue;
			}






			if(els[i].style.backgroundImage){
				els[i].style.backgroundImage = "url('data:image/svg+xml;utf8, "+IMG.fishs._hint(IMG.fishs[this.img])+"')";
			}
		}


	}

	unHint(game){













		let els = this.elWrap.getElementsByTagName('div');

		for(let i in els){
			if(!els[i].style){
				continue;
			}






			if(els[i].style.backgroundImage){
				els[i].style.backgroundImage = "url('data:image/svg+xml;utf8, "+(IMG.fishs[this.img])+"')";
			}
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
var tankItems = {
	grass :{
		name :"Grass",
		type :"grass",
		price:{B:50000,Y:50000},
		money:2,
		width :"100%",
		height :"15px",
		el : (i=f.ce("div"))&&(f.sa(i,"style","position:absolute;bottom:0;left:0px;width:100%;height:15px;background-image:url('"+IMG.tank.grass+"');background-size:15px;background-repeat:repeat-x")||1)&&i
	},
	rocks :{
		name :"Rocks",
		type :"rocks",
		price:{B:100000,R:100000},
		money:2,
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

	}











};
var tankItemsShop = [
	"grass","rocks","pagoda","house","sand"
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
			if(this.game.glassLvl<(tankItems[type].minGlassLvl || 1))return;

			let isUsed=false;
			let saya = this;
			this.game.tankItems.map(el=>el && el.item && el.item.type==saya.type && (isUsed=true) );

			if(isUsed){

			}else{
				this.elWrap = f.ce("div");
				f.sa(this.elWrap,"class","tankItems");


				f.ac(this.elWrap,tankItems[this.type].el.cloneNode(true));
				this.elWrap.style.width = tankItems[this.type].width;
				this.elWrap.style.height = tankItems[this.type].height;
				this.elWrap.style.left = this.left+"px";


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

				saya.elWrap.style.left=vars.left+"px";
			};
			f.ac(divPos,input);
			f.ac(modal,divPos);
		}



		let divButtons = f.ce("div");
		f.sa(divButtons,"class","rightButtonsPanel");

		let buttonUp = f.ce("button");
		buttonUp.innerHTML="Move forward";
		buttonUp.onclick = function(e){
			if(idx==saya.game.tankItems.length-1)return;

			let nextItem = saya.game.tankItems[idx+1].item;


			
			saya.game.tankItems[idx+1].item=saya;
			saya.game.tankItems[idx].item=nextItem;
			idx++;
			saya.normalizeElWrap();
		};
		f.ac(divButtons,buttonUp);
		f.ac(divButtons,f.ce('br'));

		let buttonDown = f.ce("button");
		buttonDown.innerHTML="Move backward";
		buttonDown.onclick = function(e){
			if(idx==0)return;

			let prevItem = saya.game.tankItems[idx-1].item;


			
			saya.game.tankItems[idx-1].item=saya;
			saya.game.tankItems[idx].item=prevItem;
			idx--;
			saya.normalizeElWrap();
		};
		f.ac(divButtons,buttonDown);
		f.ac(divButtons,f.ce('br'));

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

		let buttonCancel = f.ce("button");
		f.sa(buttonCancel,"class","red");
		buttonCancel.innerHTML="Cancel";
		buttonCancel.onclick = function(e){
			saya.elWrap.style.left=saya.left+"px";

			try{
				f.rc(saya.game.parentEl, modal);
			}catch(err){
				console.log(err);
			}
		};

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




window.onload = function(){
	if(window.location.host=="localhost"){
	    PlayFab.settings.titleId = "3D56";
	}else{
	    PlayFab.settings.titleId = "EAC6";
	}
	window.game = new Game(f.qs("#wadah"));


	let kongUser = function(){
		console.log("---------------------------");
		window.kongVars = {
			username : kongregate.services.getUsername(),
			userId : kongregate.services.getUserId(),
			isGuest : kongregate.services.isGuest(),
			token : kongregate.services.getGameAuthToken()
		};


		if(!(window.isOnKong)){
			if(window.kongVars.isGuest){
				game.newGame("kongGuest");
				kongregate.services.showRegistrationBox();
			}else{
				game.kongLogin();
			}
		}
		window.isOnKong = true;
		kongregate.stats.submit("initialized", 1);
	}


	let kongUserLoggedin = function(){
		console.log("---------------------------");
		window.kongVars = {
			username : kongregate.services.getUsername(),
			userId : kongregate.services.getUserId(),
			isGuest : kongregate.services.isGuest(),
			token : kongregate.services.getGameAuthToken()
		};


		if(window.kongVars.isGuest){
			game.newGame();
			kongregate.services.showRegistrationBox();
		}else{
			game.hideModal();
			game.kongLogin();
		}
		window.isOnKong = true;
		kongregate.stats.submit("initialized", 1);
	}



	try{
		kongregateAPI.loadAPI(function(){
			window.kongregate = kongregateAPI.getAPI();
			kongUser();

			kongregate.services.addEventListener('login', function(){
				kongUserLoggedin();
			});
		});
	}
	catch(e){
		window.isOnKong = false;
		game.newGame();

	}























	









































}


})();