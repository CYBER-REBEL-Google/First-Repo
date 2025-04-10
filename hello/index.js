const arr = [
    {
      image: "https://i.pravatar.cc/150?img=1",
      username: "john_doe",
      age: 28
    },
    {
      image: "https://i.pravatar.cc/150?img=2",
      username: "jane_smith",
      age: 34
    },
    {
      "image": "https://i.pravatar.cc/150?img=3",
      username: "alex_jones",
      "age": 22
    },
    {
      "image": "https://i.pravatar.cc/150?img=4",
      username: "emma_brown",
      "age": 19
    },
    {
      "image": "https://i.pravatar.cc/150?img=5",
      username: "michael_davis",
      "age": 45
    },
    {
      "image": "https://i.pravatar.cc/150?img=6",
      username: "sarah_wilson",
      "age": 31
    },
    {
      "image": "https://i.pravatar.cc/150?img=7",
      username: "david_martin",
      "age": 27
    },
    {
      "image": "https://i.pravatar.cc/150?img=8",
      username: "olivia_lee",
      "age": 24
    },
    {
      "image": "https://i.pravatar.cc/150?img=9",
      username: "james_taylor",
      "age": 38
    },
    {
      "image": "https://i.pravatar.cc/150?img=10",
      username: "lily_hernandez",
      "age": 29
    },
    {
      "image": "https://i.pravatar.cc/150?img=11",
      username: "benjamin_moore",
      "age": 33
    },
    {
      "image": "https://i.pravatar.cc/150?img=12",
      username: "lucas_jackson",
      "age": 26
    }
  ];
let body = document.querySelector('body')
let sum =``;
arr.forEach(function(elem,i){
    console.log(elem.age)
            sum = sum +` <div class="card">
        <img src="https://images.unsplash.com/photo-1743082217603-e6c91b3ecd90?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        <h1>24</h1>
    <h2>hello</h2>
</div>`
})

// elem[i].age not working instend elem.age dirclty


// body.innerHTML=sum;









// let arr= [{age:10},{age:10}]
// arr.forEach(function(ele,i){
//     console.log(arr[i].age)
// })