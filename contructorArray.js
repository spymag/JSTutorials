// Our Person constructor
var Person = function(name,age){
    this.name = name;
    this.age = age;
    }

// Now we can make an array of people
var family = [];

// loop through our new array
for (i=0;i<4;i++){
    if (i===0){     
    family[i] = new Person("alice",40);
    console.log(family[i]);
    }
    else if (i===1){
        family[i] = new Person("bob",42);
        console.log(family[i]);
        }
            else if (i===2){
        family[i] = new Person("michelle",8);  
        console.log(family[i]);
        }
            else {
        family[i] = new Person("timmy",6); 
        console.log(family[i]);
        }
    }
