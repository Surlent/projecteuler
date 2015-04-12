function large_sum(numbers)
{
	var sum=0;
	for(var i=0;i<numbers.length;i++)
	{
		sum+=parseInt(numbers[i]);
	}
	return sum;
	//return numbers.reduce(function(a,b){return parseInt(a)+parseInt(b);}); LOST PRECISION
}

function large_sum_2(matrix)
{
	return large_sum(matrix.split("\n"));
}