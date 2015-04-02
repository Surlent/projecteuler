// Auxiliary
function format_time(time)
{
	var split_time=time.toString().split(".");
	var significand=split_time[0].substr(0,12);
	var mantissa=split_time[1].substr(0,6);
	return significand+","+mantissa+"ms";
}
function is_prime(n)
{
	var sqrtN=Math.sqrt(n);
	for(var m=2;m<=sqrtN;m++)
	{
		if (n%m==0)
		{
			return false;
		}
	}
	return true;
}
function primes_list(n)
{	
	var max_value=n;
	var sieve=new Array(max_value);
	var sqrt_max_value=Math.sqrt(max_value);
	var primes_list=new Array();
	for (var i = 0; i <= max_value; i++) 
	{
		sieve[i] = (i>1)?(1):(0);
	}
	for(var i=2;i<=max_value;i++)
	{	
		if(sieve[i]==1)
		{			
			primes_list.push(i);
			if (i<sqrt_max_value)
			{
				for(var j=Math.pow(i,2);j<=max_value;j+=i)
				{	
					sieve[j]=0;			
				}
			}			
		}
	}
	return primes_list;
}
function dot_product(a,b)
{
   if(a.length=b.length)
   {
   		var dot=0;
   		for(k=0;k<a.length;k++)
   		{
   			dot+=a[k]*b[k];
   		}
   		return dot;
   }
   else
   {
   	   return false;
   	   console.log("Vectors have different size.");
   }
}
function is_right_triangle(p1,p2,p3)
{	
	var v1=[p1[0]-p3[0],p1[1]-p3[1]];
	var v2=[p2[0]-p3[0],p2[1]-p3[1]];
	var v3=[p2[0]-p1[0],p2[1]-p1[1]];
	if((dot_product(v1,v2)==0)||(dot_product(v1,v3)==0)||(dot_product(v2,v3)==0))
	{
		return true;
	}
	else
	{
		return false;
	}
}
// End of auxiliary