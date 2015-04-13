
function find_nth_permutation(chars,n)
{
	var memo={};
	var lexicographic_permutation=function(chars,r)
	{
		if(r==0)
		{
			return chars.join("");
		}
		var k=chars.length;	
		if(k==0)
		{
			return "";
		}
		var m=Math.floor(r/(k-1));		
		var curr=chars[m];
		chars.splice(m,1);
		console.log(chars);
		return curr+lexicographic_permutation(chars,r%(k-1));
	}
	return lexicographic_permutation(chars,n);
}
