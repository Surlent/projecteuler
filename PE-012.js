function lowest_divisible_triangular(n)
{
	n=parseInt(n);
	var triangular=1;
	var k=1;
	while (true)
	{		
		if(count_divisors(triangular)>n)
		{
			return triangular;
		}
		k++;
		triangular+=k;
	}
}