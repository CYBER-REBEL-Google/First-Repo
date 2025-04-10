const arr = [     
    {       
      image: "https://i.pravatar.cc/150?img=1",       
      username: "john_doe",       
      age: 28,       
      isf: "strenger"     
    },     
    {       
      image: "https://i.pravatar.cc/150?img=2",       
      username: "jane_smith",       
      age: 2,
      isf: "strenger"
    },     
    {       
      image: "https://i.pravatar.cc/150?img=3",       
      username: "alex_jones",       
      age: 22,
      isf: "strenger"
    },     
    {       
      image: "https://i.pravatar.cc/150?img=4",       
      username: "emma_brown",       
      age: 19,
      isf: "strenger"
    },     
    {       
      image: "https://i.pravatar.cc/150?img=5",       
      username: "michael_davis",       
      age: 15,
      isf: "strenger"
    },     
    {       
      image: "https://i.pravatar.cc/150?img=6",       
      username: "sarah_wilson",       
      age: 31,
      isf: "strenger"
    },     
    {       
      image: "https://i.pravatar.cc/150?img=7",       
      username: "david_martin",       
      age: 27,
      isf: "strenger"
    },     
    {       
      image: "https://i.pravatar.cc/150?img=8",       
      username: "olivia_lee",       
      age: 24,
      isf: "strenger"
    },     
    {       
      image: "https://i.pravatar.cc/150?img=9",       
      username: "james_taylor",       
      age: 18,
      isf: "strenger"
    },     
    {       
      image: "https://i.pravatar.cc/150?img=10",       
      username: "lily_hernandez",       
      age: 29,
      isf: "strenger"
    },     
    {       
      image: "https://i.pravatar.cc/150?img=11",       
      username: "benjamin_moore",       
      age: 45,
      isf: "strenger"
    },     
    {       
      image: "https://i.pravatar.cc/150?img=12",       
      username: "lucas_jackson",       
      age: 26,
      isf: "strenger"
    }   
  ];
  
let body = document.querySelector('body')
function hero(){
let sum ="";
arr.forEach(function(elem,idx){
            sum = sum +` <div class="card">
        <img src=${elem.image} alt="">
        <h1>${elem.age}</h1>
    <h2>${elem.username}</h2>
    <h1>${elem.isf}</h1>
    <button id=${idx}>Add Friend</button>
</div>`
})

// elem[i].age not working instend elem.age dirclty


body.innerHTML=sum;
}
hero();

body.addEventListener('click',function(dets){

    let value=arr[(dets.target.id)]
    value.isf="Friend";
    hero()

})







// let arr= [{age:10},{age:10}]
// arr.forEach(function(ele,i){
//     console.log(arr[i].age)
// })