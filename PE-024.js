
function find_nth_permutation(n,k)
{
	var chars=[];
	for(var i=0;i<k;i++)
	{
		chars.push(i);
	}
	var perm_memo={};
	var fact_memo={};
	var factorial=function(n)
	{
		if((n==1)||(n==0)) return 1;
		return (fact_memo[n]||(fact_memo[n]=factorial(n-1)*n));
	}
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
		var m=Math.floor(r/factorial(k-1));		
		var curr=chars[m];
		chars.splice(m,1);
		console.log(chars);
		return curr+lexicographic_permutation(chars,r%factorial(k-1));
	}
	return lexicographic_permutation(chars,n);
}
