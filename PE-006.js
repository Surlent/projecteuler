function sum_of_powers(n,power)
{
	if(power==2)
	{
		return n*(n+1)*(2*n+1)/6;
	}
	var sum=0;
	for(var k=1;k<=n;k++)
	{
		sum+=Math.pow(k,power);
	}
	return 	sum;
}

function power_of_sum(n,power)
{
	var sum=n*(n+1)/2;
	return Math.pow(sum,power);
}

function diff_sum_power(n,power)
{
	return power_of_sum(n,power)-sum_of_powers(n,power);
}