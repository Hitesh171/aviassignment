fetch('./friends.json')
.then(function(response){
    return response.json();
})
.then(function(data){
    for(var i=0;i<data.length;i++){
        document.getElementById("data").innerHTML+=data[i].id+":-"+data[i].firstName + " "+data[i].lastName +"<br/>";
    }
})
.catch(function(err){
    console.log(err);
});