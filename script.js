function firstWord(s) {
  // your code here

	let s1 = s.trim();
	let firstWord = s1.split(" ")[0];
	return firstWord;
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
