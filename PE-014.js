function longest_collatz_sequence(n)
{
	return longest_collatz_sequence_v2(n);
}
function longest_collatz_sequence_v1(n)
{
	//var longest_sequence=[];
	var longest_count=0;
	var starting_number=0;
	for(var i=1;i<n;i++)
	{				
				var current=i;	
				var current_count=1;		
				//var current_sequence=[];			
				//current_sequence.push(current);
				//var k=0;
				while (current!==1)
				{											
					current=collatz_next(current);
					current_count++;
					//current_sequence.push(current);	
				}
				if(current_count>longest_count)
				{	
					longest_count=current_count;
					starting_number=i;
					//longest_sequence=current_sequence;			
				}
	}
	//console.log(reached_numbers)
	//console.log(longest_sequence);
	console.log(longest_count);
	return starting_number;
}
function longest_collatz_sequence_v2(n)
{
	var memo={};
	var longest_count=0;
	var starting_number=0;
	var collatz_count=function(n){ return (memo[n]||(memo[n]=((n==1)?(1):(collatz_count(collatz_next(n))+1))));};
	for(var i=1;i<n;i++)
	{
		var current_count=collatz_count(i);
		if(current_count>longest_count)
		{
			starting_number=i;
			longest_count=current_count;
		}
	}
	return starting_number;
}
function collatz_next(a)
{
	return (a%2==0)?(a/2):(3*a+1);
}

