à faire :
les unions
rajout de l'export des couleurs dans l'export vers dae. A priori il faut rajouter une texture.
rajouter les LBOX
rajout du drag and drop
ameliorer button main transparent par rapport aux trous et aux formes infinies.
air button
water button
VR 3D

infos texte pour l'utilisateur sur la sélection des volumes
curseur sur volume : xmin, xmax, ymin, ymax, 
vecteurs unitaires x, y, z
equivalent de intersect_parents_lattice pour les réseaux hexa

corriger jonctions benchmark TA


v 67 28 06 22
- again simplification of PLYExporter.js for exporting larger 3D files. (without UV and normal information)

v 66 27 06 22
- simplification of PLYExporter.js
- 3D export for larger 3D simulations (doesn't work with firefox).
- moret INTE intersections added

v65 27 05 22
moret : 
- material naming from their apollo name (if available)
- hexagone lattices of hexagone lattices added


v64 26 05 22
moret : 
- added msec in hexagonal arrays
- simplification moretmeshCreator.js and integration of generical functions into mesh_tools.js
- debug center plot button.


v63 25 05 22
moret : moret 4 lattices translated into moret 5 syntax before reading.
moret : SPHERE turned into SPHE

v62 25 05 22
moret : ETSU improved 

v61 25 05 22
serpent : simplification and improvement of main.js, serpentManager.js 

v60 25 05 22
moret : simplification of main.js, moretManager.js and sceneManager.js

v60 25 05 22
- improved HTML presentation

v59 25 05 22
- moret lattices improved : INDP keyword included (to change lattice coordinates).

v58 24 05 22
moret : 
- improved comments (*) ignore.
- DIMR (for lattices) taken into account even if not at the beginning of a line.
- lattice's mpri improved : deletion of the initial mpri after creation of the lattice.


v57 21 05 22
improved color/material association and management in mesh_tools for all codes for meshes and lattices.
serpent : cartesian lattice added, problem with position if container not centered.


v56 19 05 22
serpent improvements : 
- added cuboid
- improved intersections
- color management
- improved pre-parsing
- improved pin's parents intersections
- added circular lattices, with pin intersection
- creation of a multiple substraction function in mesh_tools (gain in terms of  of CSG/Mesh conversions)
- added possibility to extract to dae and ply (for serpent).


v55 18 05 22 
serpent improvements : 
- universes taken into account
- intersection of base universe "0" by the other universes
- inclusion of pins into the universes.


v54 18 05 22
- simplification and generalization of buttonsGenerator.js
serpent : 
- improvement of pin reading 
- parent intersection for pins.
- display the name of a mesh's material.
- axes helper added (RGB = xyz).

v53 13 05 22
- debug the remove of the first msec (distinction first module vs secondary modules)
- added light, useful for MeshPhongMaterial
- correction color management (same color for same material). 

v 52 12 05 22
- export toward collada (.dae) improved : grid not included, 
- export toward .ply added: include colors and ability to exclude transparent meshes from the exportation.
- the library PLYExporter has been adapted for the second point.


v51 11 05 22
improved gui:
- correction plane cut initialization.
- header added with the title
- cursor position displayed (bug with z for now)
- the mesh's name is written in stead of the title when hovered
added a grid transparency button
- when main transparency button is checked, all the mesh transparency buttons are checked too.
- center button's plane cuts corrected



v50 09 05 22
added a button to get every mesh transparent.
added a button to center the whole plot in the scene (better for OrbitControls).
debug export to stl and obj (now fonctionnal)

v49 08 05 22
infinite cylinders added. 
reading and plotting of mpla added
moretmeshcreator mesh rotation simplified.

v48 07 05 22
debug hex lattice creation.

v47 07 05 22
infinite cone added.

v46 07 05 22
debug PLA
debug add_holes_and_intersect : checks if the parent module of the hole is the same as its type.

v45 06 05 22
improved moret reading modularization : moretMeshCreator.js is now a class.

v44 06 05 22
improved moret reading modularization : creation of moretModuleCreator.js

v44 06 05 22
improved moret reading modularization : creation of moretMeshCreator.js

v43 06 05 22
improved moret reading modularization : creation of moretLatticeCreator.js

v42 06 05 22
beginning of implementation of hexagonal lattices.

v41 05 05 22
return of mesh highlighting (work with serpent)
mesh color generation and association with materials improved

v40 04 05 22
beginning of a new feature : SERPENT plotting. 

v39 04 05 22
improved camera management.

v38 04 05 22
added PLA management, ie plane meshes for intersection.
refreshing the plot corrected

v37 04 05 22
separation of the first module and the other module lattice creation. It debugs the plotting of lattice of lattice.


v36 04 05 22
corrected the absence of clipping of lattices.
improved GUI clipping planes
new : highlight a mesh by hovering the mouse on it. There is a text in the scene 
SUPE reading improved, when not on the same line as the VOLU
correction in eliminating the first msec cell of each lattice
repaired version, Ok for multiple lattices.


v 35 21 03 22
- prise en compte des mailles primaires dans les réseaux de manière améliorée
- rajout des mailles secondaires (par 2 manières, soit par MSEC ou NAPP)
- creation d'une fonction (non encore aboutie) de suppression de la maille secondaire plottée au début (celle qui sert de modèle mais qui est mal placée en général)
- separation de la fonction de creation de plusieurs réseaux.

v34 18 03 22
amelioration de la modularite : 
- la scene est gérée par une classe sceneManager
- creation d'une classe main pour gérer chacun des codes
- division de codeManager en moretManager + serpentManager
- simplification de codeManager/moretManager

remise en état des contrôles au clavier pour translater les objets dans la scene.
remise en état de la partie Serpent + amélioration de sa modularité.

v33 18 03 22
amélioration de la modularité : moretReader (qui permet de "parser" le JDD MORET 
dans des tableaux (volumes, types etc.) est à présent une classe indépendante.
Les autres fonctions ou objets font appel à ses tableaux de données MORET par des expressions
du type "moret_reader.attribut".

07 03 22
suggestion Nicolas et Arthur : vue arborescente sur le côté des objets (pour choisir ce qu'on veut mettre en transparence).
+ mettre en surbrillance le volume sélectionné


v32 06 03 22
amélioration des coupes en X, Y et Z. fonction globalement fonctionnelle même si on peut apporter des améliorations (plage des coordonnées pour la coupe). 

v31 04 03 22
amélioration de la fonction add_cell_to_its_container pour mieux prendre en compte les cas où
un volume et son module ont le même nom. 
test avec le jdd d'entreposage d'AC REB. 
amélioration du moret_reader pour les cas où une BOX est appelée "BOITE" +  
où les volumes et les trous ne sont pas en début de ligne.



v30 03 03 22
amélioration de la prise en charge des modules dans les types, réseaux 
forte amélioration du positionnement des mesh et de trous en lien avec leur module 

v29 01 03 22
- correction de la rotation des hexagones en Z.
- rajout des HEXX HEXY
- rajout des ellipses
- simplification du reader pour les cylindres
- rajout de fonction d'épuration du JDD avec lecture (on remplace les ":" par des espaces et on rajoute des sauts de ligne avant les "VOLU").
- rajout des rotations



v28 :
le pb avec emballage de Gabriel quand je rajoute le réseau : pas de gesion des modules dans les réseaux...
début de rajout des hexagones. Les hexagones en Z sont implémentés. Pb de rotation à régler. hexagones en X et Y à rajouter.
il faut rajouter les unions pour emballage Gabriel.
Pb avec emballage de Gabriel sûrement lié à l'implémentation des SUPE/ECRA voir des ETSU/TRUN par rapport aux relations filiales.


v27 27_02_22
- réglage du pb concernant l'interaction des mailles d'un lattice avec leur parent (ne scindait pas les parents plus haut)
- rajout d'un SUPE/ECRA mais sans traitement des coordonnées relatives/absolues. Tant que les ECRA se font entre enfants du même volume, pas de souci, par contre s'il
y a des petits enfants en jeu, cela peut poser pb. 
- amélioration de la recherche des modules (comme ça on peut avoir un module 5 sans nécessairement avoir un module 4...)

v26 26 02 22: VERSION MAJEURE
- grosse correction au niveau de la fonction d'intersection avec les parents --> il y avait un bug coordonnées locales/globales.
	+ retrait du caractère récursif de cette fonction qui ralentissait tout.
	+ amélioration modularité de cette fonction.
- rajout des ETSU/TRUN --> marche très bien avec l'emballage de Gabriel.

pb à régler concernant les lattices, interaction avec les parents. OK


v25 26 02 22:
- rajout d'une fonction de localisation de la caméra (surement à améliorer)
- amélioration du cutManager, que j'ai enlevé pour le moment pour des raisons de performances. 
	Pas encore de réglage fin opérationnel avec le slider.

v24 25_02_22:
amélioration de la modularité avec :
- la division en plus de fichiers .js et le renommage adéquat des fichiers existant
- la création des classes buttonsGenerator + codeManager
- la simplification et amélioration de la lisibilité de init_or_reload()
résolution du pb CRM pb intersection volumes --> j'avais oublié de remettre intersect_parents()

v23 24 02 22:
- rajout d'une fonction set_planes dans 3d_rendering qui peut créer des plans de coupes. Je ne peux pas les régler pour le moment
	 lib-gui a l'air d'être assez importantes avec beaucoups de fichiers...



v22 du 24_02_22:
- trous à présent transparents
- pleine intégration de modules (les trous sont bien remplis avc des modules)
- création de boutons d'expoert en .dae et en .stl. et en .obj. Le .dae donne un fichier utilisable pour 4 boules, le .stl fourni un 
fichier mais qui semble avoir des soucis. Le .obj semble fonctionner...

améliorer gestion des trous + rajout des modules dedans OK
rajouter les plans de section OK
idée : export vers logiciel CAO OK


v21 23_02_22
rajout des trous, mais comme des volumes. A voir si on veut les mettre en transparence ou ne vraiment que créer des intersections.
urgent : module dans les trous
faire attention car les volumes dans les modules 1 peuvent avoir écrit "0" comme module conteneur alors qu'ils sont bien dans le 1. 




v20 23_02_22
les version entre 16 et 20 sont des ratés...
- j'ai enfin réussi à bien paramétrer les soustractions de volumes entre parents et enfants. Il manque la soustraction entre volumes frères... à voir dans moret



v16 22_02_22
- modification de index.html pour permettre d'accueillir un parser serpent par la suite.
- Mise en place d'une extension JS (après beaucoup de recherches...) permettant de faire de la CSG. Il s'agit de : 
https://github.com/manthrax/THREE-CSGMesh que j'ai dû adapter pour virer les imports et les exports pour pouvoir l'intégrer via des balises
<script src= ...></script> au final, ça marche --> on peut voir le test de CSG en choisissant SERPENT + appuyer sur le bouton.

v15 21_02_22
- rajout de la possibilité de refresh
- unification des 2 boutons de l'index en un seul 
- rajout d'un switch serpent, moret, tripoli (pour l'instant, seul moret fonctionne

v14 21_02_22:
- bonne amélioration de la modularité de moret_parser.js qui aidera sur le long terme.
- finalisation de l'intégration de la notion de module. En particulier on peut avoir 2 volumes de même id_volu appartenant à des modules différents sans que cela pose pb.
	- plus de pb avec le fichier de test : test_modules.mor
	- en revanche : - il faudra sûrement rajouter la notion de module pour lattice_reading sinon il y aura des pb si 2 réseaux de modules différents ont le nom de maille.
- il accepte de ne pas avoir de MODU 0 et de fonctionner tout de même. 
- Il reste à rajouter les mailles secondaires dans les réseaux pour pouvoir être plus réaliste en terme d'assemblages


v13 19_02_22:
- rajout de la notion de "conteneur" entre les volumes et les modules.
	- en particulier les coordonnées sont mieux gérées car les coordonnées des enfants sont relatives à celles de parents
	- correction de la rotation des cylindres. Un cylindre est généré selon Y donc il faut le tourner pour avoir un CYLZ.
	Le pb était qu'un fils CYLZ était encore tourné par rapport à son parent et donc n'était plus selon Oz. J'ai utilisé les transformations par matrice pour éviter qu'un enfant ne tourne avec
	son parent.

v12 19_02_22:
- correction du bug de non fonctionnement si la partie du JDD MORET concernant une lattice était absente.
- rajout de 'water' et passage au lower case pour colorier l'eau en bleue.
- rajout d'un lecteur des modules
- rajout du id_cont caractérisant le conteneur d'un volume
- rajout des groupes, 1 groupe est créé pour 1 module (bijection)

v11 19_02_22:
- rajout des réseaux avec une maille primaire (pas la maille secondaire)
- les boutons sont également générés pour les mailles réseaux primaires.

v10 18_02_22:
-amélioration de l'affichage du canvas, qui occupe 70% de la largeur de la fenetre, sans qu'il n'y ait d'effet
de déformation

-amelioration des controles, rajout de la possibilité d'avancer, reculer, gauche, droite les objets
- avec le clic droit on fait tout translater également.
- rajout du terme BOIT en plus de BOX


v7 18_02_22:
- les switch de transparence fonctionnent à présent

v6 18_02_22:
- generateur automatique de bouton switch pour la transparence (ils ne font rien actuellement).


v5
ajout de fonctionnalité:
- tracer les sphères
- les 3 types de cylindres : CYLX, CYLY, CYLZ.
