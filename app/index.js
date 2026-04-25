const express = require("express")
const app = express()
const path = require("path")

app.use(express.urlencoded({ extended: true }))

 app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"))
})

app.post("/track", (req, res) => {
  const id = req.body.trackingId
  res.send(`
    <h2>Tracking Result</h2>
    <p>Shipment ID: ${id}</p>
    <p>Status: In Transit 🚚</p>
    <a href="/">Back</a>
  `)
})

app.get("/about", (req, res) => {
  res.send(`
    <h1>About Zipp Logistics</h1>
    <p>We provide fast and reliable delivery services.</p>
    <a href="/">Home</a>
  `)
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})