// ## Exo 1 
//     ## Déclarer une variable qui se nomme 'multiplicateur' valant 5
//     ## Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc. (ex: 5x1 = ... 5x2 = ... 5x3 = ... jusqu'à 9)
        // let multiplicateur = 5;
        // for( let i = 0; i < 10; i++){
        //     console.log(i*multiplicateur);
        // }
// - ## Exo 3
//     ## Faire une boucle décendante pour les nombres pairs de 20 à 0
//         ## Ex: 20-18-16, ect.
        // for(let i = 20; i > 0; i=i-2){ ou i-=2
        //     console.log(i);
        // }
// - ## Exo 4
//     ## Créer un tableau avec les prénoms des gens de la classe
//     ## Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau qui se nomme 'longPrenoms'
        // let classe = ["agim", "adil", "ali", "mouna", "yassine", "elvis", "chris", "antoine", "jean", "fanny", "haroune", "ilias D","ilias E","lira","nasila","seif","stan","van hoa","nathan", "kevin" ];
        // let tab2 = [];
        //  for (let i = 0; i < classe.length; i++){
        //         if (classe[i].length > 5){
        //                 tab2.push(classe[i]);
        //         }else{

        //         }
        //  }
//     ##  Créer un tableau qui se nomme 'sommes' avec une multitude de valeurs numérique
//         let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
//     ## créer un tableau qui se nomme 'grossesSommes'. Si la valeur excède 60, pousser les dans ce tableau et les retirer du tableau sommes
//  let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
//  let grossesSommes =[];
//  for( let i=0; i < sommes.length; i++){
//          if(sommes[i] > 60){
//                  grossesSommes.push(sommes[i]);
//                 //  sommes.shift(sommes[i]);
//                  console.log(sommes + grossesSommes);
//          }
//  }
//  for (let i=0; i < grossesSommes.length; i++){
//          sommes.splice(sommes.indexOf(grossesSommes[i]), 1)
//  }
//  console.log(sommes);
//  console.log(grossesSommes);
// - ## Exo 6
//     ##  Voici un tableau : 
     let donnee = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
     let typeNumber=[];
     let typeString=[];
     let typeObject=[];
     let typeAutres=[];


//     ## Triez le contenu du tableau donnees en verifiant le type de chaque donnée
       
//     ## Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.
//     ## Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvée sur internet dans les bons tableaux.

        donnee.forEach(element => {
               
                if (typeof element == "number"){
                        typeNumber.push(element);
                }else if (typeof element == "string"){
                         typeString.push(element);
                        
                }else if (typeof element == "object"){
                         typeObject.push(element);
                         
                }else{
                         typeAutres.push(element);
                }
                
        });


donnee.splice(0, donnee.length);
        console.log(donnee);
        console.log(typeNumber);
        console.log(typeString);
        console.log(typeObject);
        console.log(typeAutres);

//
