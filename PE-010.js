function sum_primes(n)
{
	var primes=primes_list(n);
	var sum=0;
	for(var i=0;i<primes.length;i++)
	{
		sum+=primes[i];
	}
	return sum;
}