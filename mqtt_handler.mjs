import mqtt from 'mqtt'

export class MqttHandler {
  constructor() {
    this.mqttClient = null
    this.host = 'mqtt://143.198.219.107'
    this.username = 'Edzel'
    this.password = 'Anaklusmos21'
  }

  connect() {
    this.mqttClient = mqtt.connect(this.host, { username: this.username, password: this.password })

    // Mqtt error calback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected`);
    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

    // Sends a mqtt message to topic: mytopic
    sendMessage(topic, message) {
      this.mqttClient.publish(topic, message);
    }
}
