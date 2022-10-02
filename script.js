var getname = document.getElementById("name")
        var getsurname = document.getElementById("surname")
        var getage = document.getElementById("age")
        const newPost = 
        {
            age : 99,
            name : "Your Name",
            surname : "Your Age",
            registered : "2022-07-05T11:51:05-03:00",
        }
        
        document.querySelector("button").addEventListener("click",()=>{
            fetch("http://localhost:8080/api/users/add",{
                method : "POST",
                body : JSON.stringify(newPost),
                headers : {"Content-type":"application/json"}
            })
            .then(response=>response.json())
            .then(json=>{
                console.log(json)
            })
            .catch(err=>console.log(err))
        })