class Outer{
	constructor()
	{
		debugger;
		this.element = document.getElementsByClassName("container");
		this.btn = document.getElementsByTagName("button")[0]	;
		this.btn.addEventListener("click",this.adding(this));
	}
	
	static IncDiv_No()
	{
      this.count+=1;
	}
	static getDiv_No()
	{
		return this.count;
	}
	static setDiv_No()
	{
		this.count = 0;
	}
	adding(element)
	{
		debugger;
		const newDiv = document.createElement("div");
		newDiv.classList.add("inner");
		const div_content = document.createTextNode(Outer.getDIv_No());
		newDiv.appendChild("div_content");
		Outer.IncDiv_No();
		this.element[0].appendChild("newDiv");
		newDiv.addEventListener("click",() => {
		alert("newDiv.innerHTML");
		});
}

}
Outer.count=0;
const obj = new Outer();
obj.adding();

