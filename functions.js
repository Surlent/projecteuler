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
function least_factor(n) {
 if (isNaN(n) || !isFinite(n)) return NaN;  
 if (n==0) return 0;  
 if (n%1 || n*n<2) return 1;
 if (n%2==0) return 2;  
 if (n%3==0) return 3;  
 if (n%5==0) return 5;  
 var sqrt_n = Math.sqrt(n);
 for (var i=7;i<=sqrt_n;i+=30) {
  if (n%i==0)      return i;
  if (n%(i+4)==0)  return i+4;
  if (n%(i+6)==0)  return i+6;
  if (n%(i+10)==0) return i+10;
  if (n%(i+12)==0) return i+12;
  if (n%(i+16)==0) return i+16;
  if (n%(i+22)==0) return i+22;
  if (n%(i+24)==0) return i+24;
 }
 return n;
}
function factorize(n) {
 var min_factor = least_factor(n);
 if (n==min_factor) return ''+n;
 return min_factor+"*"+factorize(n/min_factor);
}
function reduced_factorize(n)
{
	return reduced_factorize_v1(n);
}
function reduced_factorize_v1(n)
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
function reduced_factorize_v2(n) // This is too slow
{
	var primes = primes_list(n);
	var m=n;
	var result={};
	for (var k=0;k<primes.length;k++)
	{
		var p=primes[k];
		while ((m%p) == 0)
		{
		  m /= p
		  result[p]=(p in result)?(result[p]+1):(1);
		}
		if (m == 1)
		{
		  return result;
		}
    }
}
function count_divisors(n)
{	
	var rf=reduced_factorize(n);
	var result=1;	
	for(var divisor in rf)
	{
		result*=rf[divisor]+1;
	}
	return result;
}
