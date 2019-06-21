class User{
	constructor(name,age)
	{
		this.name=name;
		this.age=age;
	}
	 compare(p)
	{
      if(this.age>p.age)
      {
      	alert("john is older than mary");
      }
      else
      {
      	alert("mary is older than john");
      }
	}
}
let user1=new User("john",23);
let user2=new User("mary",22);
user1.compare(user2);
