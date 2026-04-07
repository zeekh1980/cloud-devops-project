const express = require("express")
const app = express()

app.get("/", (req,res)=>{
  res.send("Version 2 🚀 Auto Deploy Working!")
})

const PORT = 3000

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App running on port ${PORT}`)
})