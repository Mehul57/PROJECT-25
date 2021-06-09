class paper
{
	constructor(x,y,width,height)
	{
		var options = {
       'isStatic' :false,
	   'restitution' : 0.3,
	   'friction' : 0.5,
	   'density' : 1.5
		}
		this.x=x;
		this.y=y;
		this.body = Bodies.rectangle(x, y, width, height, options);
		this.paperWidth=width
		this.paperHeight=height
		
		
		this.image=loadImage("paper.png")
		
		

		
		
		
		World.add(world,this.body)

	}
	display()
	{
			
			var paperr=this.body.position
	

			/*push()
			translate(paperr.x,paperr.y);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			rect(0,0,this.body, this.paperHeight);
			pop()

			push()
			translate(paperr.x,paperr.y);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RA/DIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.body, this.paperHeight);
			pop()*/

			push()
			translate(paperr.x,paperr.y);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.paperHeight/2,this.paperWidth+30, this.paperHeight+30)
			rect(0,0,this.paperWidth, this.body);
			pop()
			
	}

}