async function test(){
  console.log(await fetch("http://18.213.246.108:3000/projects", {
    "headers": {
      "content-type": "application/json",
      "Referer": "http://deploy-dellmatch-app.s3-website-us-east-1.amazonaws.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Access-Control-Allow-Origin": "*",
    },
    "body": "{\"name\":\"TESTE PROJETO\",\"area\":\"IT\",\"description\":\"TESTE PROJETO\",\"keywords\":[\"javascript\"],\"teamSize\":1,\"teamMembers\":[],\"status\":\"In progress\",\"applicationDeadline\":\"2023-03-01\",\"endDate\":\"2023-03-31\",\"startDate\":\"2023-03-09\"}",
    "method": "POST"
  }))
}

test()