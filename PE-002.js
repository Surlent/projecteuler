function sum_multiples_fibonacci(n,factors)
{
	var sum=0;
	var f_prev=0;
	var f_curr=1;
	var list=[];
	while(f_curr<=n)
	{
		for(var j=0;j<factors.length;j++)
		{
			if((f_curr%factors[j])==0)
			{
				list.push(f_curr);
				sum+=f_curr;
				break;
			}
		}
		var f_curr_old=f_curr;
		f_curr=f_curr+f_prev;
		f_prev=f_curr_old;
	}
	console.log(list);
	return sum;
}