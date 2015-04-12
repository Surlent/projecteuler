function sum_multiples(n,factors)
{
	var sum=0;
	var list=[];
	for (var k=1;k<n;k++)
	{
		for(var j=0;j<factors.length;j++)
		{
			if((k%factors[j])==0)
			{
				//list.push(k);
				sum+=k;
				break;
			}
		}
	}
	//console.log(list);
	return sum;
}
function sum_multiples_3_5(n)
{
	return sum_multiples(n,"3,5");
}