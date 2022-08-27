const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('<h1>มึงอย่าเซ็คย่อ ซีหม่อ สองห่อ ใส่ไข่ ไอหน้าหี</h1>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.info('Server is ready at', PORT)
})