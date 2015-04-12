function greatest_adjacent_product(number,n)
{
	var number_str=number.toString();
	var greatest_product=0;
	var numbers=[];
	for(var k=0;k<=number_str.length-n;k++)
	{
		var product=1;		
		for(var l=k;l<k+n;l++)
		{
			product*=parseInt(number_str[l]);
		}
		if(greatest_product<product)
		{
			greatest_product=product;
			numbers=[];
			for(var l=k;l<k+n;l++)
			{
				numbers.push(number_str[l]);
			}			
		}
	}
	//console.log(numbers);
	return greatest_product;
}

function greatest_adjacent_product_13(number)
{
	return greatest_adjacent_product(number,13);
}