var scene; //mundo virtual
var camera; //area de visualização
var renderer; //responsavel por renderizar tudo


var criaCubo = function(){
    let geometria = new THREE.BoxGeometry(1, 1, 1);

    let red = new THREE.Color(1,0,0);
    let green = new THREE.Color(0,1,0);
    let blue  = new THREE.Color(0,0,1);
    let cores = [red, green, blue];
    console.log(geometria.faces);////////////////////////////////////////////

    for(let i=0; i<3; i++){
        geometria.faces[4*i].color = cores[i];
        geometria.faces[4*i+1].color = cores[i];
        geometria.faces[4*i+2].color = cores[i];
        geometria.faces[4*i+3].color = cores[i];
    }


    let material = new THREE.MeshBasicMaterial({color: 0xffffff, vertexColors: true});
    //glut
    let cubo = new THREE.Mesh(geometria, material);

    scene.add(cubo);
};


var init = function (){
    
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 100);
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 80;
    camera.position.x = 20;
    camera.position.y = 10;


    criaCubo();
    
    renderer.render(scene, camera);
};

window.onload = this.init