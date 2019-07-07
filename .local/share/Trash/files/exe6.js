class Outside
{
 constructor()
	{
	
	this.element = document.getElementsByClassName("container")[0];
	this.btn = document.getElementByTagName("button")[0];
	this.count=0;
}

	addEventListener()
	{
	this.btn.addEventListener("click",this.add.bind(this));
}

add()
{ 
	let newDiv = document.createElement("div");
	newDiv.classList.add("inner");s
	newDiv.innerText = this.count++;
    this.element.appendChild(newDiv);
    newDiv.addEventListener("click",this.function.bind(this));
    
}

function()
{
	alert(newDiv.innerText);
}

}

let obj = new Outside();
obj.addEventListener();


