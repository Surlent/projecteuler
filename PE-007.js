function find_nth_prime(n)
{
	var max_value=(n>1)?(Math.ceil((n)*Math.log(n+1))):(2);
	var sieve=new Array(max_value+1);
	for (var i = 2; i <= max_value; i++) 
	{
		sieve[i] = 1;
	}
	var prime_count=0;
	var last_prime=0;
	for(var i=2;i<=max_value;i++)
	{	
		if(sieve[i]==1)
		{				
			prime_count++;
			last_prime=i;
			if(prime_count==n)
			{
				return last_prime;
			}
			for(var j=Math.pow(i,2);j<=max_value;j+=i)
			{	
				sieve[j]=0;			
			}			
		}
	}
	alert("Not found");
}