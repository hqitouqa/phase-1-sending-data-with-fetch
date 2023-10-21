// Add your code here


 function submitData(name,email,id){
    const configurationObject = {
        method:'POST',
        headers: {
          'Content-Type': "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({name,email,id})
            
    };
  return fetch("http://localhost:3000/users", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    document.body.innerHTML = object['id']
  })
  .catch(function (error) {
    document.body.innerHTML = error.message
  })
}
