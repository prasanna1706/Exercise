class Text{
  constructor()
  { 
    this.objinput1=document.getElementById("input1");
    this.objinput2=document.getElementById("input2");
    this.submission=document.getElementById("button");
    this.submission.addEventListener("click",this.verify.bind(this));
    }
verify(event)
{   
  event.preventDefault();
  if(!isNaN(this.objinput1.value))

  { 
    this.objinput2.value=true;

    }
    else
    {
      this.objinput2.value=false;
      } 

  }
}
 const field= new Text();