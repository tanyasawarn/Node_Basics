const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;

  if (url === '/') {
   response.write('<html>');
   response.write('<head><title>Enter Message</title></head>');
   response.write(
     '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>'
   );
   response.write('</html>');
   return response.end();
 }

  if (url === '/message' && method === 'POST') {
    const body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    });

    return request.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split('=')[1];
      fs.writeFileSync('message.txt', message,);

      response.statusCode = 302;
      response.setHeader('Location', '/');
      return response.end();
    });
    response.write('</body>');
    response.write('</html>');
    return response.end();
   
  }

 


  response.setHeader('Content-Type', 'text/html');
  response.write('<html>');
  response.write('<head><title>My first page</title></head>');
  response.write('<body><h2>Tanya</h2></body>');
  response.write('</html>');
  response.end();
});

server.listen(4000);
