class Person{
            
    constructor(name,age,year,gender,address,phonenumber){
                this.name = name;
                this.age = age;
                this.year = year;
                this.gender = gender;
                this.address = address;
                this.phonenumber = phonenumber;
    }

    getAge(){
        return this.age;
    }
    getName(){
        return this.name;
    }

    setName(name){
        return this.name=name;
    }
     
}
    const person1 = new Person("Anand",23,2001,"Male","987/A,Amman kovil street,Chennai", 8768543216)
console.log(person1);
console.log(person1.getAge());
console.log(person1.getName());
person1.name="vishwa";
console.log(person1.name);