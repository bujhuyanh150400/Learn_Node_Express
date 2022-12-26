const express = require('express') // yêu cầu express
const app = express() // trả về 1 biến app để ta sử dụng
const port = 3000 // định nghĩa cổng port để ta chạy
// Định nghĩa route (tuyến đường)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})