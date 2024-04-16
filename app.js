const express = require("express");
const http = require("http");
const mqtt = require("mqtt");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000", // İstemci kök alanınıza izin verin
    methods: ["GET", "POST"],
    credentials: true, // Gerekirse, tarayıcıya izin verilen credentiale'lara izin verin
  },
});

const cors = require("cors"); // CORS modülü ekleyin
app.use(express.static(__dirname)); // sunucuda bacground resmi görünmesi için eklendi!

app.use(cors());

const mqttClient = mqtt.connect("mqtt://192.168.98.183:1883");

mqttClient.on("connect", () => {
  console.log("MQTT Broker ile bağlanti sağlandi");
    mqttClient.subscribe(
      // "silabs/aoa/position/multilocator-test_room/ble-pd-1C34F16110FF"
      "silabs/aoa/position/multilocator-test_room/ble-pd-1C34F1633706"

    );
  //  mqttClient.subscribe(
  //    "silabs/aoa/position/multilocator-test_room/ble-pd-1C34F1633706"
  //  );
});

mqttClient.on("message", (topic, message) => {
  const data = message.toString();
  

  const parsedData = JSON.parse(data);

  // Farklı cihazlardan gelen verilere göre işlem yap
  if (topic === "silabs/aoa/position/multilocator-test_room/ble-pd-1C34F1633706") {
  
    // İlk cihazın verisi
    console.log("Cihaz 1 Verisi:", parsedData);

    // Burada cihaz 1 için gerekli işlemleri yapabilir ve çizim yapabilirsiniz
  } else if (
    topic === "silabs/aoa/position/multilocator-test_room/ble-pd-1C34F16110FF"
  ) {
    // İkinci cihazın verisi
    console.log("Cihaz 2 Verisi:", parsedData);

    // Burada cihaz 2 için gerekli işlemleri yapabilir ve çizim yapabilirsiniz
  }

  io.emit("mqtt_message", data);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("Web istemcisi ile bağlanti sağlandi");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} adresinde calisiyor`);
});
