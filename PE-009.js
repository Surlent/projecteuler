function rec_greatest_common_denominator(a, b)
{
    if (b == 0)
	{
       return a;
	}
    else
	{
       return greatest_common_denominator(b, a % b);
	}
}	  
function greatest_common_denominator(a, b)
{
    while (b != 0)
	{
       var t = b;
       b = a % b;
       a = t;
	}
    return a;
}
function pythagorean_triplet(sum)
{
	var k=1;
	//for(var k=1;k<sum;k++)
	//{
		for(var m=2;m<sum;m++)
		{
			for(var n=1;n<m;n++)
			{
				var a=k*(m*m-n*n);
				var b=k*2*m*n;
				var c=k*(m*m+n*n);
				//console.log([a,b,c]);
				var test_sum=a+b+c;//2*k*m*(m+n);
				if(test_sum==sum)
				{							
					console.log([a,b,c]);
					return a*b*c;
				}
				/*if((m-n)%2==1)
				{
					if(greatest_common_denominator(m,n)==1)
					{*/		
						
					/*}
				}*/
			}
		}
	//}
	return "not found";
}