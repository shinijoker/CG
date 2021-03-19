var scene; //mundo virtual
var camera; //area de visualização
var renderer; //responsavel por renderizar tudo

var elementos = [];
var velx = 0.06;
var vely = 0.08;
var cx=1;
var cy=1;
var tx=0;
var ty=1;

	//ConeGeometry
var criaCone = function(){
	let geometria = new THREE.ConeGeometry(3, 7, 20);

	let material = new THREE.MeshBasicMaterial({color: 0x2845ff});

    let cone = new THREE.Mesh(geometria, material);
    cone.position.x = -3;
    elementos["cone1"] = cone;

    scene.add(cone);
}

//TorusKnotGeometry

var criaTorusknot = function(){
    let geometria = new THREE.TorusKnotGeometry(3.5, 1.5, 8, 64, 2, 3);

    let material = new THREE.MeshBasicMaterial({color: 0x862D63});

    let torus = new THREE.Mesh(geometria, material);

    torus.position.x = -3;
	elementos["torus1"] = torus;

	scene.add(torus);

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

	criaCone();
    criaTorusknot();
	
	animation();
	
};

var animation = function (){
	requestAnimationFrame(animation); //adiciona o método na fila de renderização

/////////////////////////CONE/////////////////////////
	//cone x
	if(cx==1){
		if (elementos["cone1"].position.x <= 20){
			elementos["cone1"].position.x +=velx;

		}
		else {
			elementos["cone1"].position.x -=velx;
			cx=0;
		}
	}
	if(cx==0){
		if(elementos["cone1"].position.x >= -20){
			elementos["cone1"].position.x-= velx;
		}
		else {
			cx=1;
		}
	}
	//cone y
	if(cy==1){
		if (elementos["cone1"].position.y < 16){
			elementos["cone1"].position.y += vely;

		}
		else {
			cy=0;
		}
	}
	if(cy==0){
		if(elementos["cone1"].position.y > -11){
			elementos["cone1"].position.y -= vely;
		}
		else {
			cy=1;
		}
	}
	/////////////////CONE/////////////////

/////////////////////////TORUS/////////////////////////
	//torus x
	if(tx==1){
		if (elementos["torus1"].position.x <= 20){
			elementos["torus1"].position.x +=velx;

		}
		else {
			elementos["torus1"].position.x -=velx;
			tx=0;
		}
	}
	if(tx==0){
		if(elementos["torus1"].position.x >= -20){
			elementos["torus1"].position.x-= velx;
		}
		else {
			tx=1;
		}
	}
	// 	torus y
	if(ty==1){
		if (elementos["torus1"].position.y < 16){
			elementos["torus1"].position.y += vely;

		}
		else {
			ty=0;
		}
	}
	if(ty==0){
		if(elementos["torus1"].position.y > -11){
			elementos["torus1"].position.y -= vely;
		}
		else {
			ty=1;
		}
	}

	/////////////////TORUS/////////////////
	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
}

window.onload = this.init