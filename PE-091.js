function count_right_triangles(n)
{
	var m=n+1;
	//var linear_grid = new Array(n*n);
	var m_sqr=m*m;
	var count=0;
	var list=[];
	for(var k1=1;k1<m_sqr-1;k1++)
	{
		for(var k2=k1+1;k2<m_sqr;k2++)
		{			
			var p1=[k1%m,(k1-(k1%m))/m];
			var p2=[k2%m,(k2-(k2%m))/m];			
			if (is_right_triangle([0,0],p1,p2))
			{
				count++;
			}
		}
	}
	//console.log(list);
	return count;
}

function count_right_triangles_v2(n)
{
	var m=n+1;
	//var linear_grid = new Array(n*n);
	var m_sqr=m*m;
	var count=0;
	var list=[];
	for(var k1=0;k1<m;k1++)
	{
		for(var k2=0;k2<m;k2++)
		{		
			if(k1!=0||k2!=0)
			{	
				for(var l1=0;l1<m;l1++)
				{
					for(var l2=0;l2<m;l2++)
					{
						if(l1!=0||l2!=0)
						{
							if (k1!=l1||k2!=l2)
							{
								var p1=[k1,k2];
								var p2=[l1,l2];
								//console.log([[0,0],p1,p2])
								if (is_right_triangle([0,0],p1,p2))
								{
									count++;
								}
							}							
						}						
					}	
				}
			}
		}
	}
	//console.log(list);
	return count/2;
}