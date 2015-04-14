function lattice_paths(m,n,k)
{
	m=parseInt(m);
	n=parseInt(n);
	k=parseInt(k);
    var memo={};
	var count_paths=function(i,j,l)
	{
		var key=[i,j,l];
		if(key in memo)
		{
			return memo[key];
		}
		if((i==0)&&(j==0))
		{
			return memo[key]=1;
		}
		if(i==0)
		{
			return memo[key]=count_paths(i,j-1,0);
		}
		if(j==0)
		{
			if(l<k)
			{
				return memo[key]=count_paths(i-1,j,l+1);
			}
			else
			{
				return memo[key]=0;
			}
		}
		if(l<k)
		{
			return memo[key]=count_paths(i,j-1,0)+count_paths(i-1,j,l+1);
		}
		else
		{
			return memo[key]=count_paths(i,j-1,0);
		}
	}
	return count_paths(m,n,0);
}