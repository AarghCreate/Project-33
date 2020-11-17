class BALL
{

  constructor( x , y , width , height , r , f , fA , d , a , s ) 
  {
    var options = 
      {
        'restitution': r ,
        'friction': f ,
        'frictionAir': fA ,
        'density': d ,
        'angle': a ,
        'isStatic': s ,
    }
    this.body = Bodies.rectangle( x , y , width , height , options );
    this.width = width;
    this.height = height;
    
    World.add( world , this.body );
  }

  display( color )
  {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate( pos.x , pos.y );
    rotate(angle);
    rectMode( CENTER );
    fill( color );
    rect( 0 , 0 , this.width , this.height );
    pop();
  }

  score()
  {
    if( this.body.position.y > 285 && this.body.position.y < 300 )
    {
      if( this.body.position.x > 0 && this.body.position.x < 100 )
      {
        score = score + 100;
      }
      if( this.body.position.x > 100 && this.body.position.x < 200 )
      {
        score = score + 200;
      }
      if( this.body.position.x > 200 && this.body.position.x < 300 )
      {
        score = score + 300;
      }
      if( this.body.position.x > 300 && this.body.position.x < 400 )
      {
        score = score + 400;
      }
    }
  }

}