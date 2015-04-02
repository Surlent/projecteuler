function format_time(time)
{
	var split_time=time.toString().split(".");
	if(split_time.length>1)
	{
		var significand=split_time[0].substr(0,12);
		var mantissa=split_time[1].substr(0,6);
		if(significand.length>=4)
		{
			var new_significand=significand.substr(0,significand.length-3);
			var new_mantissa=significand.substr(significand.length-3,significand.length);
			return new_significand+","+(new_mantissa+mantissa).substr(0,6)+"s";
		}
		else return significand+","+mantissa+"ms";
	}
	else return split_time;
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
   		var dot=0;		
   		for(k=0;k<a.length;k++)
   		{
   			dot+=a[k]*b[k];
   		}
   		return dot;
}
function is_right_triangle(p1,p2,p3)
{
	return is_right_triangle_v2(p1,p2,p3);
}
function is_right_triangle_v1(p1,p2,p3)
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
function is_right_triangle_v2(p1,p2,p3)
{
	var sides=new Array(3);
	sides[0]=((p1[0]-p3[0])*(p1[0]-p3[0])+(p1[1]-p3[1])*(p1[1]-p3[1]));
	sides[1]=((p2[0]-p3[0])*(p2[0]-p3[0])+(p2[1]-p3[1])*(p2[1]-p3[1]));
	sides[2]=((p2[0]-p1[0])*(p2[0]-p1[0])+(p2[1]-p1[1])*(p2[1]-p1[1]));
	if(sides[0]>sides[1]&&sides[0]>sides[2])
	{
		return (sides[0]==sides[1]+sides[2]);
	}
	else if(sides[1]>sides[0]&&sides[1]>sides[2])
	{
		return (sides[1]==sides[0]+sides[2]);
	}
	else
	{
		return (sides[2]==sides[0]+sides[1]);
	}
}