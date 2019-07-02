class Outer{
constructor(){
	
	this.parent=document.getElementsByClassName("container");
	this.btn=document.getElementById("btn1");
    this.btn.addEventListener("click",this.adding.bind(this));
}
static increase(){

	Outer.count +=1;
}
static getcount(){
	return Outer.count;
}
adding(){
	    const newDiv = document.createElement("div");
	   
	    
		newDiv.classList.add("inner");
		const div_content = document.createTextNode(Outer.getcount());
		
		newDiv.appendChild(div_content);
		Outer.increase();
		
		this.parent[0].appendChild(newDiv);
		newDiv.addEventListener("click",() => 
		{
		alert(newDiv.innerHTML);
		});

}

}
Outer.count=0;
const object=new Outer();