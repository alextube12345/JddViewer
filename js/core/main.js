var scene_manager;
var mesh_tools;
var mesh_array = [];
var moret_reader;
var serpent_reader;
var moret_manager;
var serpent_manager;

var buttons_generator; 

function start_or_refresh(){
	var text = document.getElementById("textareabox").value;
	code_choice = document.getElementById("code-select").value;		
	var mesh_tools = new meshTools();	

	if (code_choice == "MORET"){
		moret_reader = new moretReader(mesh_tools);
		moret_reader.moret_parsing(text);

		if (firstStart){
			console.log("MORET first parsing")
			document.getElementById('start_button').value = "Refresh";			
			scene_manager = new sceneManager();
			scene_manager.scene_initialization();			
        	set_planes();
			moret_manager = new moretManager(moret_reader, mesh_tools, document);			
			firstStart = false;			
		} else {
			console.log("refresh MORET parsing");
			buttons_generator.remove_transparency_buttons();
			moret_manager.remove_objects_from_scene();	
			mesh_array = [];
			moret_manager.reset(moret_reader);
		} 
		moret_manager.create_objects_in_the_scene();
		buttons_generator = new buttonsGenerator(moret_manager, mesh_array, document);
		buttons_generator.create_buttons(); 
		set_planes_position(moret_manager);  
		scene_manager.locate_camera(); 
		scene_manager.render();
		
	} else if (code_choice == "SERPENT"){
		serpent_reader = new serpentReader(mesh_tools);
        serpent_reader.parsing(text);
		if (firstStart){
			console.log("SERPENT first parsing");
			document.getElementById('start_button').value = "Refresh";				
            scene_manager = new sceneManager();		
			scene_manager.scene_initialization();	
			set_planes();
			serpent_manager = new serpentManager(serpent_reader, mesh_array, mesh_tools, document);
			
			firstStart = false;	
		} else {
			console.log("refresh SERPENT parsing");
			buttons_generator.remove_transparency_buttons();
			serpent_manager.remove_objects_from_scene(); // a corriger car là il y a peu de mesh dans la scene qui peut être enlevé.	
			mesh_array = [];
			serpent_manager.reset(serpent_reader);
		}
		serpent_manager.create_objects_in_the_scene();	
		buttons_generator = new buttonsGenerator(serpent_manager, mesh_array, document);  
		buttons_generator.create_buttons(); 
		set_planes_position(serpent_manager); 	 
		scene_manager.locate_camera();			
		scene_manager.render();
			
	} else if(code_choice == "TRIPOLI"){
		alert("sorry, Tripoli not available for now, work in progress...");
	}else if(code_choice == "MCNP"){
		alert("sorry, MCNP not available for now, work in progress...");
	}
}



