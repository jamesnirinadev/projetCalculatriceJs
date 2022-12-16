

/**
PROJET CALCULATRICE FROM SCRATCH BY JamesNirinaDev
-------------------
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|

OBJECTIFS :
Créer une calculatrice qui donne le résultat des variabales sélectionnées.

TOOLS :
1 - écouter les touches cliquer par l'utilisateur;
2 - récupérer la valeur des touches;
3 - effectuer l'opération avec eval();
4 - afficher le résultat;

BONUS :
Bouton initialisation de la calculatrice;

*/






let tempValue = [];
let OperationEnString;
let sum = 0;
let validationFinOperation = false;
const block = document.getElementById('blockOneChildOne');

/**
 Function myGet --- Récupère les valeurs de l'utilisateur
 */
function myGet(value){
    console.log("tempValue -- début fonction myGet : " + tempValue);
    InProgressCalc(value, tempValue )
    affichageResultat(tempValue )
};





/**
Function InProgressCalc --- Incrémente l'array tab pour
*/
function InProgressCalc(valueInput, tab){
    console.log("tempValue -- début fonction InProgressCalc: " + tab);
    //Trie des valeurs --- inscription des chiffres dans tab
    if(valueInput == '0' || valueInput == '1' || valueInput == '2' || valueInput == '3' || valueInput == '4' || valueInput == '5' || valueInput == '6' || valueInput == '7' || valueInput == '8' || valueInput == '9') {
        tab.push(valueInput);
        let lastKey = tab[tab.length-1];

        lastKey_Int = parseInt(lastKey);
        NewValue = parseInt("" + lastKey_Int);
        console.log("test unitaire --- La valeur à ajouter à l'array : " + NewValue);
        tab.splice(tab.length-1, 1, NewValue)
    } else { //Trie des valeurs --- inscription des opérateurs dans tab
        tab.push(valueInput);
        let lastKey = tab[tab.length-1];
        console.log("test unitaire --- La valeur à ajouter à l'array : " + lastKey);
    }
};




/**
Function affichageResultat --- termine un calcul si la valeur 'sum =' exist
*/
function affichageResultat(tab){
        result = tab.find(tab => tab === 'sum =');
        if(result === 'sum ='){

            // suppression 'sum =' + foçage du stype String avec array.join() pour le calcul avec eval()
            indexToDelete = tab.indexOf('sum =');
            tab.splice(indexToDelete, 1);
            OperationEnString = tab.join('');
            sum = eval(OperationEnString);
            block.innerHTML = sum;

            validationFinOperation = true;
            return OperationEnString;
        } else {
            OperationEnString = tab.join('');
            block.innerHTML = OperationEnString;
            validationFinOperation = false;
            result = '';
            return OperationEnString;
        };
}







/**
Function initialisationCalculatrice --- réinitialise les valeurs pour un nouveaux calculs
*/
function initialisationCalculatrice(){
    tempValue = [];
    OperationEnString = '';
    sum = 0;
    validationFinOperation = false;
    affichageTemp = 0;
    block.innerHTML = affichageTemp;
}

