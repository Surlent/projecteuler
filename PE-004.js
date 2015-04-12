function largest_palindrome_product(n)
{
	var first=Math.pow(10,n-1);
	var last=(first*10)-1;
	var largest_product=0;
	var current_sum=0;
	var numbers=[];
	for(var i=last;i>=first+1;i--)
	{
		if(2*i<current_sum)
		{
			//console.log(numbers);
			return largest_product;
		}
		for(var j=i-1;j>=first;j--)
		{
			
			var product=(i*j);
			var product_string=product.toString();	
			if((product>largest_product))
			{
				if(product_string==product_string.split("").reverse().join(""))
				{
					largest_product=product;
					current_sum=i+j;
					numbers=[i,j];					
				}
			}
		}
	}
	//console.log(numbers);
	return largest_product;
}