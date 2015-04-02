function smallest_evenly_divisible(n)
{
	var a=n;	
	while(true)
	{
		var m=n;		
		while (a%m==0)
		{			
			m--;			
			if(m==1)
			{
				return a;
			}
		}
		a+=n;
	}
}
function factorize(n) {
 var min_factor = least_factor(n);
 if (n==min_factor) return ''+n;
 return min_factor+"*"+factorize(n/min_factor);
}
function reduced_factorize(n)
{	
	var f=factorize(n);
	var f_array=f.split("*");
	var result={};
	for (var i=0;i<f_array.length;i++)
	{
		result[f_array[i]]=(f_array[i] in result)?(result[f_array[i]]+1):(1);
	}
	return result;
}
function multiply_missing_factors(a_factorized,n)
{
	var n_factorized=reduced_factorize(n);
	var missing_factors={};	
	var result=a_factorized;
	for(var factor in n_factorized)
	{		
		if(factor in a_factorized)
		{
			if(n_factorized[factor]>a_factorized[factor])
			{
				result[factor]+=n_factorized[factor]-a_factorized[factor];
			}
		}
		else
		{
			missing_factors[factor]=n_factorized[factor];
			result[factor]=n_factorized[factor];
		}
	}
}
function smallest_evenly_divisible2(n)
{
	var a_factors={};
	a_factors[1]=1;
	for(var i=1;i<=n;i++)
	{
		multiply_missing_factors(a_factors,i);
	}
	var a=1;
	for(var factor in a_factors)
	{
		a*=Math.pow(factor,a_factors[factor]);
	}
	return a;
}