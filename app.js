import { MqttHandler } from './mqtt_handler.mjs'
import express from 'express'

const app = express()


app.use(express.json())
app.use(express.urlencoded())

var mqttClient = new MqttHandler();
mqttClient.connect();

app.get('/', (req, res) => {
  res.status(200).send("OLA!")
})

app.post('/publish', (req, res) => {
  const { topic, message } = req.body
  console.log(topic, message)
  mqttClient.sendMessage(topic, message)
  res.status(200).send('Message sent to' + mqttClient.host)
})

app.listen(3000, () => {
  console.log("app running on port 3000")
})