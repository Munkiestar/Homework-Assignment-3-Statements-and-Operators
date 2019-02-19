/*
All men are mortal
Socrates is a man.
Therefore, socrates is mortal.
*/


let mortal = true;
let men = mortal;
let socrates = men;

if((men === mortal) && (socrates === men)){
	console.log('Therefore, socrates is mortal.');
}




/*
This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.
*/

let cake = false;
let vanilla = false;
let chocolate = false;

if(cake === vanilla || cake === chocolate){
	if(!chocolate){
		console.log('Therefore, this cake is vanilla');
	}
}





