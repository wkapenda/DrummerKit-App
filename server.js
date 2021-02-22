//jshint esversion:6

const express = require('express')
const app = express()
// const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.sendFile(__dirname, "public", "index.html")
})




// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started succesfully");
});