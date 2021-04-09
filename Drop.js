class Drop{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

    display(){






    }
}