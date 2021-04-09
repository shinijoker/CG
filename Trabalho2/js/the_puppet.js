var scene; //mundo virtual
var camera; //area de visualizaÃ§Ã£o
var renderer; //responsavel por renderizar tudo

var elementos = [];

var velocidade = 0.07;

var criaSisSolar = function(){

	let red = 	new THREE.Color(1,0,0);
	let green = new THREE.Color(0,1,0);
	let blue = 	new THREE.Color(0,0,1);
	let cores = [red, green, blue];

	let materials = [
		new THREE.MeshBasicMaterial({color: red}),
		new THREE.MeshBasicMaterial({color: green}),
		new THREE.MeshBasicMaterial({color: blue}),
		new THREE.MeshBasicMaterial({color: red}),
		new THREE.MeshBasicMaterial({color: green}),
		new THREE.MeshBasicMaterial({color: blue})
	];
/* //cria sol q n usa//
	let sol = new THREE.Mesh(new THREE.SphereGeometry(8, 32, 32), new THREE.MeshBasicMaterial({color: 0xffff00}));
	sol.position.x = -10;
	elementos["sol"] = sol;
	
	let pivot = new THREE.Group();
	sol.add(pivot);
	pivot.position.x = sol.position.x+8; //posicao do sol


	elementos["pivot"] = pivot;

	//cria terra q n usa//
	let terra = new THREE.Mesh(new THREE.SphereGeometry(1.5, 6, 6), new THREE.MeshBasicMaterial({color: blue}));
	pivot.add(terra);
	terra.position.x += pivot.position.x+26;
	elementos["terra"] = terra;

	let marte = new THREE.Mesh(new THREE.SphereGeometry(2, 6, 6), new THREE.MeshBasicMaterial({color: red}));
	pivot.add(marte);
	marte.position.x += pivot.position.x+20;


	// let cubo2 = new THREE.Mesh(new THREE.BoxGeometry(10, 3, 3), materials);
	// cubo2.position.x= 7;
	// elementos["cubo2"] = cubo2;	
	
	
	scene.add(sol);
	//scene.add(pivot);
*/
};

var criaMonstro = function (){
	let puppet=[];

	let red = 	new THREE.Color(1,0,0);
	let green = new THREE.Color(0,1,0);
	let blue = 	new THREE.Color(0,0,1);
	let cores = [red, green, blue];
	let materials = [
		new THREE.MeshBasicMaterial({color: blue}), 	// lado esquerdo
		new THREE.MeshBasicMaterial({color: blue}),		// direito
		new THREE.MeshBasicMaterial({color: blue}), 	// cima
		new THREE.MeshBasicMaterial({color: blue}), 	// baixo
		new THREE.MeshBasicMaterial({color: green}),	// frente
		new THREE.MeshBasicMaterial({color: blue}) 		// costas
	];

	let tronco = new THREE.Mesh(new THREE.BoxGeometry(4, 7, 2), materials);
	puppet["tronco"] = tronco;

	let cabeca = new THREE.Mesh(new THREE.SphereGeometry(1.85, 32, 32), new THREE.MeshBasicMaterial({color: blue}));
	puppet["cabeca"] = cabeca;
	tronco.add(cabeca);
	cabeca.position.y=tronco.position.y+5.15;

	//BRACO ESQUERDO
//ombroE
	let ombroE = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["ombroE"] = ombroE;
	tronco.add(ombroE);
	ombroE.position.y= tronco.position.y+3;
	ombroE.position.x= tronco.position.y+3;
//PivotOmbroE
	let pivotombroE = new THREE.Group();
	puppet["pivotombroE"] = pivotombroE;
	ombroE.add(pivotombroE);
//bracoE
	let bracoE = new THREE.Mesh(new THREE.BoxGeometry(1, 2.8, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["bracoE"] = bracoE;
	pivotombroE.add(bracoE)
	bracoE.position.y-=1.6;
//cotoveloE
	let cotE = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), new THREE.MeshBasicMaterial({color: 0xffff00}));
	puppet["cotE"] = cotE;
	bracoE.add(cotE);
	cotE.position.y= bracoE.position.y+0.5;
	cotE.position.x= bracoE.position.x;
//PivotCotoveloE
	let pivotcotE = new THREE.Group();
	puppet["pivotcotE"] = pivotcotE;
	cotE.add(pivotcotE);
//antebracoE
	let antebracoE = new THREE.Mesh(new THREE.BoxGeometry(1, 2.5, 1), new THREE.MeshBasicMaterial({color: blue}));
	puppet["antebracoE"] = antebracoE;
	pivotcotE.add(antebracoE)
	antebracoE.position.y-=1.3;

	//BRACO DIREITO
//ombroD
	let ombroD = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["ombroD"] = ombroD;
	tronco.add(ombroD);
	ombroD.position.y= tronco.position.y+3;
	ombroD.position.x= tronco.position.y-3;
//PivotombroD
	let pivotombroD = new THREE.Group();
	puppet["pivotombroD"] = pivotombroD;
	ombroD.add(pivotombroD);
//bracoD
	let bracoD = new THREE.Mesh(new THREE.BoxGeometry(1, 2.8, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["bracoD"] = bracoD;
	pivotombroD.add(bracoD)
	bracoD.position.y-=1.6;
//cotoveloD
	let cotD = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), new THREE.MeshBasicMaterial({color: 0xffff00}));
	puppet["cotD"] = cotD;
	bracoD.add(cotD);
	cotD.position.y= bracoD.position.y+0.5;
	cotD.position.x= bracoD.position.x;
//PivotCotoveloD
	let pivotcotD = new THREE.Group();
	puppet["pivotcotD"] = pivotcotD;
	cotD.add(pivotcotD);
//antebracoD
	let antebracoD = new THREE.Mesh(new THREE.BoxGeometry(1, 2.5, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["antebracoD"] = antebracoD;
	pivotcotD.add(antebracoD)
	antebracoD.position.y-=1.3;

	// PERNA ESQUERDA
//quadrilE
	let quadrilE = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["quadrilE"] = quadrilE;
	tronco.add(quadrilE);
	quadrilE.position.y= tronco.position.y-3.3;
	quadrilE.position.x= tronco.position.x+1;
//PivotquadrilE
	let pivotquadrilE = new THREE.Group();
	puppet["pivotquadrilE"] = pivotquadrilE;
	quadrilE.add(pivotquadrilE);
//coxaE
	let coxaE = new THREE.Mesh(new THREE.BoxGeometry(1, 2.8, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["coxaE"] = coxaE;
	pivotquadrilE.add(coxaE)
	coxaE.position.y-=1.6;
//joelhoE
	let joelhoE = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), new THREE.MeshBasicMaterial({color: 0xffff00}));
	puppet["joelhoE"] = joelhoE;
	coxaE.add(joelhoE);
	joelhoE.position.y= coxaE.position.y+0.5;
	joelhoE.position.x= coxaE.position.x;
//PivotjoelhoE
	let pivotjoelhoE = new THREE.Group();
	puppet["pivotjoelhoE"] = pivotjoelhoE;
	joelhoE.add(pivotjoelhoE);
//pernaE
	let pernaE = new THREE.Mesh(new THREE.BoxGeometry(1, 2.5, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["pernaE"] = pernaE;
	pivotjoelhoE.add(pernaE)
	pernaE.position.y-=1.3;
//peE
	let peE = new THREE.Mesh(new THREE.BoxGeometry(1, 0.5, 2), new THREE.MeshBasicMaterial({color: blue}));
	puppet["peE"] = peE;
	pernaE.add(peE)
	peE.position.y-=1.3;
	peE.position.z=0.3;

	// PERNA DIREITA
//quadrilD
	let quadrilD = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["quadrilD"] = quadrilD;
	tronco.add(quadrilD);
	quadrilD.position.y= tronco.position.y-3.3;
	quadrilD.position.x= tronco.position.x-1;
//PivotquadrilD
	let pivotquadrilD = new THREE.Group();
	puppet["pivotquadrilD"] = pivotquadrilD;
	quadrilD.add(pivotquadrilD);
//coxaD
	let coxaD = new THREE.Mesh(new THREE.BoxGeometry(1, 2.8, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["coxaD"] = coxaD;
	pivotquadrilD.add(coxaD)
	coxaD.position.y-=1.6;
//joelhoD
	let joelhoD = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), new THREE.MeshBasicMaterial({color: 0xffff00}));
	puppet["joelhoD"] = joelhoD;
	coxaD.add(joelhoD);
	joelhoD.position.y= coxaD.position.y+0.5;
	joelhoD.position.x= coxaD.position.x;
//PivotjoelhoD
	let pivotjoelhoD = new THREE.Group();
	puppet["pivotjoelhoD"] = pivotjoelhoD;
	joelhoD.add(pivotjoelhoD);
//pernaD
	let pernaD = new THREE.Mesh(new THREE.BoxGeometry(1, 2.5, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["pernaD"] = pernaD;
	pivotjoelhoD.add(pernaD)
	pernaD.position.y-=1.3;
//peD
	let peD = new THREE.Mesh(new THREE.BoxGeometry(1, 0.5, 2), new THREE.MeshBasicMaterial({color: blue}));
	puppet["peD"] = peD;
	pernaD.add(peD)
	peD.position.y-=1.3;
	peD.position.z=0.3;


	elementos["puppet"] = puppet;
	scene.add(tronco);
};



var init = function (){
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 150);
	
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	
	camera.position.z =80;
	camera.position.x = 0;
	camera.position.y = 2;
	
	criaMonstro();
	

	animation();


	document.addEventListener('keydown', apertouButao);
	document.addEventListener('keyup', soltouBotao);

	//metodos do mouser
	document.addEventListener('mousewheel', onMouseWheel);
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mousedown', onMouseClick);
	document.addEventListener('mouseup', onMouseUp);

	
};

var clicando = false;
var mouserPosAnterior = {
	x:0,
	y:0
}

var onMouseMove = function(e){
	let diferencaMovimento = {
		x: e.offsetX - mouserPosAnterior.x,
		y: e.offsetY - mouserPosAnterior.y
	}

	if (clicando){

		 let angulosQuaternion = new THREE.Quaternion().setFromEuler(
		 	new THREE.Euler (	paraRadianos(diferencaMovimento.y)*0.5,
		 					    paraRadianos(diferencaMovimento.x)*0.5,
		 						0,
		 						'XYZ')
		 );
		 elementos["puppet"]["tronco"].quaternion.multiplyQuaternions(angulosQuaternion, elementos["puppet"]["tronco"].quaternion);
	}
	mouserPosAnterior = {
		x: e.offsetX,
		y: e.offsetY
	}
};

var onMouseClick = function(e){
	clicando = true;
};

var onMouseUp = function(e){
	clicando = false;
};

var onMouseWheel = function (e){
	//for (let el in elementos){
		elementos["puppet"]["tronco"].scale.x+= (e.deltaY > 0)?-0.1:0.1;
		elementos["puppet"]["tronco"].scale.y+= (e.deltaY > 0)?-0.1:0.1;
		elementos["puppet"]["tronco"].scale.z+= (e.deltaY > 0)?-0.1:0.1;
	//}
	//Mesma coisa que o anterior 
	//if (e.deltaY > 0){
		
	// 	elementos["cubo2"].scale.y-=0.1;
	// 	elementos["cubo2"].scale.z-=0.1;
	// } else {
	// 	elementos["cubo2"].scale.x+=0.1;
	// 	elementos["cubo2"].scale.y+=0.1;
	// 	elementos["cubo2"].scale.z+=0.1;
	// }

}
/*
key 1 = key q/ 49 = 81
key 2 = key w/ 50 = 87

*/

var key_q = false;
var key_w = false;
var key_e = false;
var key_r = false;

var key_1 = false;
var key_2 = false;
var key_3 = false;
var key_4 = false;

var key_a = false;
var key_s = false;
var key_d = false;
var key_f = false;

var key_z = false;
var key_x = false;
var key_c = false;
var key_v = false;

var key_space = false;


var soltouBotao = function(e){

	if (e.keyCode == 81){ //q ombE
		key_q = false;
	}
	if (e.keyCode == 87){ //w
		key_w = false;
	}
	if (e.keyCode == 69){ //e cotE
		key_e = false;
	}
	if (e.keyCode == 82){ //r
		key_r = false;
	}

	if (e.keyCode == 49){ //1 ombD
		key_1 = false;
	}
	if (e.keyCode == 50){ //2
		key_2 = false;
	}
	if (e.keyCode == 51){ //3 cotD
		key_3 = false;
	}
	if (e.keyCode == 52){ //4
		key_4 = false;
	}

	//perna esquerda
	if (e.keyCode == 65){ //a quadrilE
		key_a = false;
	}
	if (e.keyCode == 83){ //s
		key_s = false;
	}
	if (e.keyCode == 68){ //d joelhoE
		key_d = false;
	}
	if (e.keyCode == 70){ //f
		key_f = false;
	}
	//perna direita
	if (e.keyCode == 90){ //z quadrilD
		key_z = false;
	}
	if (e.keyCode == 88){ //x
		key_x = false;
	}
	if (e.keyCode == 67){ //c joelhoD
		key_c = false;
	}
	if (e.keyCode == 86){ //v
		key_v = false;
	}

	if (e.keyCode == 32){ //espaco
		key_space = false;
	}
}

var apertouButao =  function(e){
	console.log(e.keyCode);

	//braco esquerdo
	if (e.keyCode == 49){ //1 ombE
		key_1 = true;
	}
	if (e.keyCode == 50){ //2
		key_2 = true;
	}
	if (e.keyCode == 51){ //3 cotE
		key_3 = true;
	}
	if (e.keyCode == 52){ //4
		key_4 = true;
	}
	//braco direito
	if (e.keyCode == 81){ //q ombD
		key_q = true;
	}
	if (e.keyCode == 87){ //w
		key_w = true;
	}
	if (e.keyCode == 69){ //e cotD
		key_e = true;
	}
	if (e.keyCode == 82){ //r
		key_r = true;
	}
	//perna esquerda
	if (e.keyCode == 65){ //a quadrilE
		key_a = true;
	}
	if (e.keyCode == 83){ //s
		key_s = true;
	}
	if (e.keyCode == 68){ //d joelhoE
		key_d = true;
	}
	if (e.keyCode == 70){ //f
		key_f = true;
	}
	//perna direita
	if (e.keyCode == 90){ //z quadrilD
		key_z = true;
	}
	if (e.keyCode == 88){ //x
		key_x = true;
	}
	if (e.keyCode == 67){ //c joelhoD
		key_c = true;
	}
	if (e.keyCode == 86){ //v
		key_v = true;
	}


	if (e.keyCode == 32){ //space
		key_space = true;
	}
//usar pra fzer key_m = monxtrao e key_n nao monxtrao
/*
	if (e.keyCode == 189){ //-
		elementos["terra"].scale.x-=0.1;
		elementos["cubo2"].scale.y-=0.1;
		elementos["cubo2"].scale.z-=0.1;
	}
	if (e.keyCode == 187){ // +
		elementos["terra"].scale.x+=0.1;
		elementos["terra"].scale.y+=0.1;
		elementos["terra"].scale.z+=0.1;
	}
*/
}

var velocidadeombroDireitoC = -0.02;
var velocidadeombroDireitoL = -0.02;

var velocidadeombroEsquerdoC = -0.02;
var velocidadeombroEsquerdoL = -0.02;


var velocidadecotDireitoC = -0.02;
var velocidadecotDireitoL = -0.02;

var velocidadecotEsquerdoC = -0.02;
var velocidadecotEsquerdoL = -0.02;
// feito

var velocidadequadrilDireitoC = -0.02;
var velocidadequadrilDireitoL = -0.02;

var velocidadequadrilEsquerdoC = -0.02;
var velocidadequadrilEsquerdoL = -0.02;


var velocidadejoelhoDireitoC = -0.02;
var velocidadejoelhoDireitoL = -0.02;

var velocidadejoelhoEsquerdoC = -0.02;
var velocidadejoelhoEsquerdoL = -0.02;



var animation = function (){
	requestAnimationFrame(animation); //adiciona o metodo na fila de renderizacao
	
	//gira boneco
	if (key_space){ // pivot gira o boneco
		elementos["puppet"]["tronco"].rotation.y += 0.03;
	}



	//ombro esquerdo

	if (key_1){ //movimento frente
		if (elementos["puppet"]["pivotombroE"].rotation.x < -3 || elementos["puppet"]["pivotombroE"].rotation.x > 1.3)
			velocidadeombroEsquerdoC*=-1;

		elementos["puppet"]["pivotombroE"].rotation.x += velocidadeombroEsquerdoC;
	}
	if (key_2){ // move ombro esquerdo pra fora
		if (elementos["puppet"]["pivotombroE"].rotation.z < 0 || elementos["puppet"]["pivotombroE"].rotation.z > 1.4)
			velocidadeombroEsquerdoL*=-1;

		elementos["puppet"]["pivotombroE"].rotation.z += velocidadeombroEsquerdoL;
	}

	//ombro direito

	if (key_q){ //movimento frente
		if (elementos["puppet"]["pivotombroD"].rotation.x < -3 || elementos["puppet"]["pivotombroD"].rotation.x > 1.3)
			velocidadeombroDireitoC*=-1;

		elementos["puppet"]["pivotombroD"].rotation.x += velocidadeombroDireitoC;
	}
	if (key_w){ // move ombro Direito pra fora
		if (elementos["puppet"]["pivotombroD"].rotation.z > 0 || elementos["puppet"]["pivotombroD"].rotation.z < -1.4)
			velocidadeombroDireitoL*=-1;

		elementos["puppet"]["pivotombroD"].rotation.z += velocidadeombroDireitoL;
	}
	


	//cotovelo esquerdo

	if (key_3){ //movimento frente
		if (elementos["puppet"]["pivotcotE"].rotation.x < -2.8 || elementos["puppet"]["pivotcotE"].rotation.x > 0)
			velocidadecotEsquerdoC*=-1;

		elementos["puppet"]["pivotcotE"].rotation.x += velocidadecotEsquerdoC;
	}
	if (key_4){ // move cot esquerdo pra fora
		if (elementos["puppet"]["pivotcotE"].rotation.z < 0 || elementos["puppet"]["pivotcotE"].rotation.z > 0.5)
			velocidadecotEsquerdoL*=-1;

		elementos["puppet"]["pivotcotE"].rotation.z += velocidadecotEsquerdoL;
	}
	

	//cotovelo direito

	if (key_e){ //movimento frente
		if (elementos["puppet"]["pivotcotD"].rotation.x < -2.8 || elementos["puppet"]["pivotcotD"].rotation.x > 0)
			velocidadecotDireitoC*=-1;

		elementos["puppet"]["pivotcotD"].rotation.x += velocidadecotDireitoC;
	}
	if (key_r){ // move cot esquerdo pra fora
		if (elementos["puppet"]["pivotcotD"].rotation.z > 0 || elementos["puppet"]["pivotcotD"].rotation.z < -0.5)
			velocidadecotDireitoL*=-1;

		elementos["puppet"]["pivotcotD"].rotation.z += velocidadecotDireitoL;
	}


	//quadril esquerdo
	if (key_a){
		if (elementos["puppet"]["pivotquadrilE"].rotation.x < -2 || elementos["puppet"]["pivotquadrilE"].rotation.x > 0.7)
            velocidadequadrilEsquerdoC *=-1;

		elementos["puppet"]["pivotquadrilE"].rotation.x += velocidadequadrilEsquerdoC;
	}
	if (key_s){
		if (elementos["puppet"]["pivotquadrilE"].rotation.z < 0 || elementos["puppet"]["pivotquadrilE"].rotation.z > 0.5)
            velocidadequadrilEsquerdoL *=-1;

		elementos["puppet"]["pivotquadrilE"].rotation.z += velocidadequadrilEsquerdoL ;
	}
	//joelho esquerdo
	if (key_d){ 
		if (elementos["puppet"]["pivotjoelhoE"].rotation.x < 0 || elementos["puppet"]["pivotjoelhoE"].rotation.x > 2.5)
            velocidadejoelhoEsquerdoC *=-1;

		elementos["puppet"]["pivotjoelhoE"].rotation.x += velocidadejoelhoEsquerdoC;
	}
	if (key_f){
		if (elementos["puppet"]["pivotjoelhoE"].rotation.z > 0.2 || elementos["puppet"]["pivotjoelhoE"].rotation.z < -0.8)
            velocidadejoelhoEsquerdoL *=-1;

		elementos["puppet"]["pivotjoelhoE"].rotation.z += velocidadejoelhoEsquerdoL ;
	}

//
	//quadril direito
	if (key_z){
		if (elementos["puppet"]["pivotquadrilD"].rotation.x < -2 || elementos["puppet"]["pivotquadrilD"].rotation.x > 0.7)
            velocidadequadrilDireitoC *=-1;

		elementos["puppet"]["pivotquadrilD"].rotation.x += velocidadequadrilDireitoC;
	}
	if (key_x){
		if (elementos["puppet"]["pivotquadrilD"].rotation.z > 0 || elementos["puppet"]["pivotquadrilD"].rotation.z < -0.5)
            velocidadequadrilDireitoL *=-1;

		elementos["puppet"]["pivotquadrilD"].rotation.z += velocidadequadrilDireitoL *-1;
	}

	//joelho direito
	if (key_c){ 
		if (elementos["puppet"]["pivotjoelhoD"].rotation.x < 0 || elementos["puppet"]["pivotjoelhoD"].rotation.x > 2.5)
            velocidadejoelhoDireitoC *=-1;

		elementos["puppet"]["pivotjoelhoD"].rotation.x += velocidadejoelhoDireitoC;
	}
	if (key_v){
		if (elementos["puppet"]["pivotjoelhoD"].rotation.z < -0.2 || elementos["puppet"]["pivotjoelhoD"].rotation.z > 0.8)
            velocidadejoelhoDireitoL *=-1;

		elementos["puppet"]["pivotjoelhoD"].rotation.z += velocidadejoelhoDireitoL *-1;
	}
//
	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
}

function paraRadianos(angulo){
	return angulo * (Math.PI/180);
}

window.onload = this.init