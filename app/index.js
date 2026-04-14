const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send(`
    <h1>Zipp Logistics 🚚</h1>
    <p>Fast & Reliable Delivery</p>

    <h3>Track Shipment</h3>
    <form method="POST" action="/track">
      <input name="trackingId" placeholder="Enter Tracking ID" />
      <button type="submit">Track</button>
    </form>

    <p><a href="/about">About Us</a></p>
  `)
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