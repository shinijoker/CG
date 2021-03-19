var scene; //mundo virtual
var camera; //area de visualização
var renderer; //responsavel por renderizar tudo

var elementos = [];

var criaCubo = function(){
	let geometria = new THREE.BoxGeometry(1, 1, 1);

	let red = 	new THREE.Color(1,0,0);
	let green = new THREE.Color(0,1,0);
	let blue = 	new THREE.Color(0,0,1);
	let cores = [red, green, blue];


	let material = new THREE.MeshBasicMaterial({color: 0x2845ff});
	
	let cubo = new THREE.Mesh(geometria, material);
	cubo.position.x = -3;
	elementos["cubo1"] = cubo;

	let cubo2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),
		new THREE.MeshBasicMaterial({color: 0x672050}));
	cubo2.position.x= 3;
	elementos["cubo2"] = cubo2;	
	
	
	scene.add(cubo2);
	scene.add(cubo);

};

var init = function (){
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 100);
	
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	camera.position.z =50;
	camera.position.x = 0;
	camera.position.y = 2;

	criaCubo();
	
	animation();
	
};

var animation = function (){
	requestAnimationFrame(animation); //adiciona o método na fila de renderização

	elementos["cubo1"].position.x+=0.01;
	
	if (elementos["cubo2"].position.x > -20)
		elementos["cubo2"].position.x-=0.07;
	else
		elementos["cubo2"].position.x+=0.07;

	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
}

window.onload = this.init