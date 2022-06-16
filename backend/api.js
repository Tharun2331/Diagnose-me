const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

app.use(cors())

app.post('/image', upload.single('file'), function (req, res) {
  res.json({})
})


app.get("/predict", async (req,res)=>{
  const MODEL_PATH = 'https://cdn.glitch.global/dd712284-b4e7-4ec9-9ea8-bdc54ab34cdb/model.json?v=1655149085624';
  (async () => {
    const model = await tf.loadLayersModel(MODEL_PATH);
    model.summary();
  })();


})
const port = 4000
app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`)
})