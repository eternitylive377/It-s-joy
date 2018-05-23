function gener(){
	let min = document.getElementById("min").value;
	let max = document.getElementById("max").value;
	const col = document.getElementById("col").value;
	let mass = ["a","b","c","d","e","f",
                 "g","h","j","k","m","n",
				 "p","r","s","t","u","v",
				 "x","y","z","A","B","C",
				 "D","E","F","G","H","J",
				 "K","M","N","P","R","S",
				 "T","U","V","X","Y","Z",
				 "2","3","4","5","6","7",
				 "8","9","?","&","%","@",
				 "*","+","=","#","№"]
	let pass=[];
	let passwords=[];
	for(let i=1; i<((col+1)/10); i++){
		pass.splice(0, pass.length); //Очистка массива
		let pass_s=0;
		let len_i=getRandom(min, max);
			for(let j=1; j<len_i+1; j++){
				pass_s=0;
				let value=getRandom(0, mass.length);
				pass_s=mass[value];
				pass.unshift(pass_s);
			}
		document.getElementById('out').innerHTML = pass.join('');
	}
}

function getRandom(min, max){
		min = parseInt(min);
		max = parseInt(max);
		return Math.floor(min + Math.random() * (max + 1 - min));
}