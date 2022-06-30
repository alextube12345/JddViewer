
class PickHelper {

    constructor() {
      this.raycaster = new THREE.Raycaster();
      this.pickedObject = null;
      this.pickedObjectSavedColor = 0;
    }

    pick(x_position, y_position, scene, camera) {
        //console.log("i am picking");
        var normalizedPosition = {x : x_position, y : y_position };
        //console.log(normalizedPosition);

      // restore the color if there is a picked object      
      if (this.pickedObject) {
          this.pickedObject.material.color.setHex(this.pickedObjectSavedColor);        
        this.pickedObject = undefined;
      }
   
      // cast a ray through the frustum
      this.raycaster.setFromCamera(normalizedPosition, camera);
      // get the list of objects the ray intersected
      //console.log(this.raycaster);
      const intersectedObjects = this.raycaster.intersectObjects(scene.children);
      
      //console.log("intersectedObjects : ", intersectedObjects);
      
      if (intersectedObjects.length) {
        //console.log("there is one object intersected !")
        // pick the first object. It's the closest one
        for (let intersection of intersectedObjects){
          if (intersection.object.material.transparent == false){
            this.pickedObject = intersection.object;
            //console.log("intersection :", intersection);
            // save its color
            this.pickedObjectSavedColor = this.pickedObject.material.color.getHex();
            // set its color to red
            this.pickedObject.material.color.setHex(0xFF0000);           
            
            this.display_object_name(scene, intersection);    
            
            this.display_cursor(intersection);
            
            break;
          }
        }
      }
    }

    
    display_cursor(intersection){
      var x_cursor = document.getElementById("x_cursor");
      var y_cursor = document.getElementById("y_cursor");
      var z_cursor = document.getElementById("z_cursor");
      x_cursor.innerHTML = "x_cursor : " + intersection.point.x.toFixed(2);
      y_cursor.innerHTML = "y_cursor : " + intersection.point.y.toFixed(2);
      z_cursor.innerHTML = "z_cursor : " + intersection.point.z.toFixed(2);
    }

    display_object_name(scene, intersection){
      //console.log("Name of the mesh selected :", this.pickedObject.name);

      var jdd_title = document.getElementById("jdd_title");
      jdd_title.innerHTML= "Name of the mesh selected : " + this.pickedObject.name + "\t - Material : " + this.pickedObject.material.name;

      if (scene.getObjectByName("object_name_displayed")){
        scene.remove(scene.getObjectByName("object_name_displayed"));
      }
      // create a canvas element
      var canvas1 = document.createElement('canvas');
      var context1 = canvas1.getContext('2d');
      context1.font = "Bold 20px Arial";
      context1.fillStyle = "rgba(255,0,0,0.95)";
      let text = this.pickedObject.name
      context1.fillText(text, 100, 50);
      //context1.fillText(text, 100, 50);

      // canvas contents will be used for a texture
      var texture1 = new THREE.Texture(canvas1) 
      texture1.needsUpdate = true;
          
      var material1 = new THREE.MeshBasicMaterial( {map: texture1, side:THREE.DoubleSide } );
      material1.transparent = true;

      let mesh1 = new THREE.Mesh(
          new THREE.PlaneGeometry(canvas1.width, canvas1.height),
          material1
        );
      mesh1.name = "object_name_displayed";
      //mesh1.position.set(0,50,10);
      //mesh1.position.set(intersection.point.x,intersection.point.y, intersection.point.z);
      mesh1.position.set(-100,30,intersection.point.z);
      scene.add( mesh1 );
      
      //console.log("mesh1", mesh1);
    }

  }