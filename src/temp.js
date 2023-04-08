async function test(){
  console.log(await fetch("http://dellmatch-prod-alb-1086496184.us-east-1.elb.amazonaws.com/projects", {
    "headers": {
      "content-type": "application/json",
      "Referer": "http://dellmatch-prod-bucket.s3-website-us-east-1.amazonaws.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Access-Control-Allow-Origin": "*",
    },
    "body": "{\"name\":\"TESTE PROJETO\",\"area\":\"IT\",\"description\":\"TESTE PROJETO\",\"keywords\":[\"javascript\"],\"teamSize\":1,\"teamMembers\":[],\"status\":\"In progress\",\"applicationDeadline\":\"2023-03-01\",\"endDate\":\"2023-03-31\",\"startDate\":\"2023-03-09\"}",
    "method": "POST"
  }))
}

test()