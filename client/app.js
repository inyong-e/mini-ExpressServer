

function getTest(){
  var name = sessionStorage.getItem('name');
  fetch('http://localhost:3000/getTest')
  .then(res=> res.json())
  .then(json=>{
    console.log(json);
  })
}

function postTest(){
  sessionStorage.setItem('name', 'inyong');
  fetch('http://localhost:3000/postTest',{
    method: 'POST',
    body: JSON.stringify({a:1,b:2}),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res=> res.json())
  .then(json=>{
    console.log(json);
  })
}
