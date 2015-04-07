function longest_collatz_sequence(n)
{
	var longest_sequence=[];
	var longest_count=0;
	var starting_number=0;
	var reached_numbers={};
	for(var i=1;i<n;i++)
	{				
			if(!(i in reached_numbers))
			{
				var current=i;	
				var current_count=1;		
				var current_sequence=[];			
				current_sequence.push(current);
				//var k=0;
				while (current!==1)
				{											
					current=collatz_next(current);
					current_count++;
					current_sequence.push(current);
					reached_numbers[current]=1;
					//k++;			
				}
				if(current_count>longest_count)//current_sequence.length>longest_sequence.length)
				{	
					longest_count=current_count;
					starting_number=i;
					longest_sequence=current_sequence;			
				}
			}
	}
	//console.log(reached_numbers)
	console.log(longest_sequence);
	console.log(longest_count);
	return starting_number;
}

function collatz_next(a)
{
	return (a%2==0)?(a/2):(3*a+1);
}