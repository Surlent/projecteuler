function sum_primes(n)
{
	n=parseInt(n);
	var primes=primes_list(n);
	var sum=0;
	var primes_length=primes.length;
	for(var i=0;i<primes_length;i++)
	{
		sum+=primes[i];
	}
	return sum;
}