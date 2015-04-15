function solve_problem(problem,input)
	{	
		var inputs;
		
		switch(problem)
		{
			case "001":
			case "002":
			case "003":
			case "004":
			case "005":
			case "006":
			case "007":
			case "009":
			case "010":
			case "012":
			case "014":
			case "091":
			{
				inputs=input.split("\n");
				break;
			}
			case "008":
			{
				inputs=input.replace(/(\r\n|\n|\r)/gm,"");	
				inputs=inputs.split("\n\n");
				console.log(inputs);
				break;
			}
			case "011":
			case "013":
			case "018":
			case "067":
			{
				inputs=input.split("\n\n");				
				break;
			}
		}
		var inputs_length=inputs.length;
		var results={};
		var func;
		switch(problem)
		{		
			case "001":
			{				
				func=sum_multiples_3_5;
				break;
			}
			case "002":
			{
				func=sum_multiples_fibonacci_2;
				break;
			}
			case "003":
			{
				func=largest_prime_factor;
				break;
			}
			case "004":
			{
				func=largest_palindrome_product;
				break;
			}
			case "005":
			{
				func=smallest_evenly_divisible;
				break;
			}
			case "006":
			{
				func=diff_sum_power_2;
				break;
			}
			case "007":
			{
				func=find_nth_prime;
				break;
			}
			case "008":
			{
				func=greatest_adjacent_product_13;
				break;
			}
			case "009":
			{
				func=pythagorean_triplet;
				break;
			}
			case "010":
			{
				func=sum_primes;
				break;
			}
			case "011":
			{
				func=highest_product_grid_4;
				break;
			}
			case "012":
			{
				func=lowest_divisible_triangular;
				break;
			}
			case "013":
			{
				func=large_sum_2;
				break;
			}
			case "014":
			{
				func=longest_collatz_sequence;
				break;
			}
			case "018":
			case "067":
			{
				func=max_path_sum;
				break;
			}
			case "024":
			{
				func=find_nth_permutation;
				break;
			}
			case "091":
			{
				func=count_right_triangles;
				break;
			}
		}
		for(var i=0;i<inputs_length;i++)
		{
			var start = window.performance.now();
			results[inputs[i]]={};
			results[inputs[i]].result=func(inputs[i]);
			results[inputs[i]].time=format_time((window.performance.now()-start));
		}
		return results;		
	}