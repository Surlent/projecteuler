function path_sum(triangle,n,i)
{	
	//console.log("n:"+n+",i:"+i+",number:"+triangle[n][i]);
	var increase=0;
	if(n==1){
			increase=triangle[0][0];
	}
	else if(i==0)
	{
			increase=path_sum(triangle,n-1,i);
	}
	else if((i==1)||(i==n-1))
	{
			increase=Math.max(path_sum(triangle,n-1,i-1),path_sum(triangle,n-1,i));
	}
	else if(i==n)
	{
			increase=path_sum(triangle,n-1,i-1);
	}
	else
	{
			increase=Math.max(path_sum(triangle,n-1,i-1),path_sum(triangle,n-1,i),path_sum(triangle,n-1,i+1));
	}
	return triangle[n][i]+increase;
}
function path(triangle,n,i)
{
	var chosen_index=-1;
	if(n==1){
			return [[n,i,triangle[n][i]]].concat([[0,0,triangle[0][0]]]);
	}
	else if(i==0)
	{
			//increase=path(triangle,n-1,i);
			chosen_index=i;
	}
	else if((i==1)||(i==n-1))
	{
			//increase=Math.max(path(triangle,n-1,i-1),path_sum(triangle,n-1,i));
			if(path_sum(triangle,n-1,i)>path_sum(triangle,n-1,i-1))
			{
				chosen_index=i;
			}
			else
			{
				chosen_index=i-1;
			}
	}
	else if(i==n)
	{
			//increase=path_sum(triangle,n-1,i-1);
			chosen_index=i-1;
	}
	else
	{
			increase=0;//Math.max(path_sum(triangle,n-1,i-1),path_sum(triangle,n-1,i),path_sum(triangle,n-1,i+1));
			for(var k=-1;k<=1;k++)
			{
				var sum=path_sum(triangle,n-1,i+k);
				if(sum>increase)
				{
					increase=sum;
					chosen_index=i+k;
				}
			}
	}
	console.log("n:"+n+",i:"+i);
	return [[n,i,triangle[n][i]]].concat(path(triangle,n-1,chosen_index));
}
function max_path_sum(triangle)
{
	var max_sum=0;
	var last_row_index=triangle.length-1;
	var last_pair=[];
	for (var i=0;i<triangle[last_row_index].length;i++)
	{
		var sum=path_sum(triangle,last_row_index,i);
		if(sum>max_sum)
		{
			max_sum=sum;
			last_pair=[last_row_index,i];
		}
	}
	//var path1=path(triangle,last_pair[0],last_pair[1]);
	//console.log(path1.reduce(function(a,b){console.log("a:"+a[2]+",b:"+b[2]);return a+b[2];},0));
	//console.log(path(last_pair[0],last_pair[1]));
	return max_sum;
}