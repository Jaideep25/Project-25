class dustbin
{
	constructor(x,y,width,height)
	{
	    var options ={
			isStatic : true
		}
		this.body=Bodies.rectangle(x, y, width, height, options);
		World.add(world, this.body);
	}
	display()
	{
		var p = this.body.position;
		push();
		//translate(p.x, p.y);
		rectMode(CENTER);
		fill("white");
		stroke("white");
		rect(p.x, p.y, this.width, this.height);
		pop();
	}

}