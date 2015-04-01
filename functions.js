function format_time(time)
{
	var split_time=time.toString().split(".");
	var significand=split_time[0].substr(0,12);
	var mantissa=split_time[1].substr(0,6);
	return significand+","+mantissa+"ms";
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
 
// Number 3
function largest_prime_factor(n) {
 var min_factor = least_factor(n);
 if (n==min_factor) return ''+n;
 return largest_prime_factor(n/min_factor);
}

// trial division
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
// End of Number 3

// Number 5
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
// End of Number 5

// Number 6
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
// End of Number 6

// Number 7
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
// End of Number 7
// Number 9
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
// End of Number 9

// Number 10
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
// End of Number 10

//Number 11
function highest_product_grid(matrix,n)
{
	var highest_product=0;
	var best_indexes=[];
	for(var i=0;i<matrix.length;i++)
	{
		for(var j=0;j<matrix[i].length;j++)
		{
			if(i+n-1<matrix.length)
			{
				var test_product=1;
				for(var k=0;k<n;k++)
				{
					test_product*=matrix[i+k][j];
				}
				if(highest_product<test_product)
				{
					highest_product=test_product;
					best_indexes=[];
					for(var k=0;k<n;k++)
					{
						best_indexes.push([matrix[i+k][j],i+k,j]);
					}
				}
				if(j+n-1<matrix[i].length)
				{
					var test_product=1;
					for(var k=0;k<n;k++)
					{
						test_product*=matrix[i+k][j+k];
					}
					if(highest_product<test_product)
					{
						highest_product=test_product;
						best_indexes=[];
						for(var k=0;k<n;k++)
						{
							best_indexes.push([matrix[i+k][j+k],i+k,j+k]);
						}
					}
				}
				if(j-(n-1)>=0)
				{
					var test_product=1;
					for(var k=0;k<n;k++)
					{
						test_product*=matrix[i+k][j-k];
					}
					if(highest_product<test_product)
					{
						highest_product=test_product;
						best_indexes=[];
						for(var k=0;k<n;k++)
						{
							best_indexes.push([matrix[i+k][j-k],i+k,j-k]);
						}
					}
				}
			}
			if(j+n-1<matrix[i].length)
			{
				var test_product=1;
				for(var k=0;k<n;k++)
				{
					test_product*=matrix[i][j+k];
				}
				if(highest_product<test_product)
				{
					highest_product=test_product;
					best_indexes=[];
					for(var k=0;k<n;k++)
					{
						best_indexes.push([matrix[i][j+k],i,j+k]);
					}
				}
			}
		}
	}
	return [highest_product,best_indexes];
}
// End of Number 11