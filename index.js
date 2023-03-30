	let lyrics = '';
 
	for(let i=99;i>=0;i--){
		document.getElementById('lyrics').innerHTML=lyrics;
		
		if(i>2){
			lyrics+=i+ " bottles of beer on the wall, ";
			lyrics+=i+" bottles of beer"+ "<br>";
			lyrics+="Take one down and pass it around, ";
			lyrics+=(i-1)+" bottles of beer on the wall"+ "<br>"+ "<br>";
		}
		
		else if(i==2){
			lyrics+=i+ " bottles of beer on the wall, ";
			lyrics+=i+" bottles of beer"+ "<br>";
			lyrics+="Take one down and pass it around, ";
			lyrics+=(i-1)+" bottle of beer on the wall"+ "<br>"+ "<br>";
		}
		
		else if(i==1){
			lyrics+=i+ " bottle of beer on the wall, ";
			lyrics+=i+" bottle of beer"+ "<br>";
			lyrics+="Take one down and pass it around, ";
			lyrics+=(i-1)+" bottles of beer on the wall!"+ "<br>"+ "<br>";
			lyrics+="No more bottles of beer on the wall, no more bottles of beer."+"<br>"+"Go to the store and buy some more, 99 bottles of beer on the wall"+ "<br>";	
		}	

			
	}
	

	
