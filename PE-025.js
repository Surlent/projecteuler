function first_n_digit_fibonacci(n)
{
	var sum=0;
	var f_prev=0;
	var f_curr=1;
	var expo_prev=0;
	var expo_curr=0;
	var i=1;
	while(expo_curr<n-1)
	{
		var f_curr_old=f_curr;
		var expo_curr_old=expo_curr;
		if(expo_curr>expo_prev)
		{
			f_curr=(f_curr+f_prev/10);
		}
		else
		{
			f_curr=(f_curr+f_prev);			
		}
		if(f_curr>=10)
		{			
			f_curr/=10;
			expo_curr++;
			
		}
		f_prev=f_curr_old;	
		expo_prev=expo_curr_old;
		i++;		
	}
	return [i,f_curr,expo_curr];
}

function first_n_digit_fibonacci_low(n)
{
	var memo={};
	var fib=function(k)
	{		
		return (((k==1)||(k==2))?(1):(memo[k]||(memo[k]=fib(k-1)+fib(k-2))));
	}
	var i=1;
	while(fib(i)<Math.pow(10,n-1))
	{
		i++;
	}
	return [i,fib(i)];
}