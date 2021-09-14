const http = require('http')
const fs = require('fs')    //system plików

const server = http.createServer((req, res) => {

       //frontend
       fs.readFile('index.html', function(err, data){
       res.writeHead(200, {
           'Content-Type': 'text/html'
       })
        res.write(data)   
        return res.end()
// nagłówek 200 jest potrzebny do powiadomienia, że wszystko działą dobrze, nie wysłanie takiego nagłówku może 
// źle wpływać na pozycjonowanie
       })
// data musi być przypisany do res (czyli odpowiedzi)

})

server.listen(3000, () => {
    console.log('Your node server is running')  //backend

})