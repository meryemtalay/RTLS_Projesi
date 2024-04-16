# Real-Time Location System (Gerçek Zamanlı Konum Sistemi)

Bu proje, MQTT protokolü üzerinden gelen verileri dinleyerek gerçek zamanlı olarak nesnelerin konumunu izlemek için bir sistem sağlar. Node.js tabanlı bir sunucu ve bir web istemcisi kullanılarak oluşturulmuştur.

## Kullanılan Teknolojiler ve Kütüphaneler

- **Node.js**: Sunucu tarafı yazılımını çalıştırmak için kullanılmıştır.
- **Express.js**: HTTP sunucusunu oluşturmak ve yönetmek için kullanılmıştır.
- **Socket.IO**: Sunucu ve istemci arasında gerçek zamanlı iletişim sağlamak için kullanılmıştır.
- **MQTT.js**: MQTT broker'ına bağlanmak ve MQTT mesajlarını işlemek için kullanılmıştır.
- **Canvas API**: İstemci tarafında harita görüntüsü oluşturmak ve nesnelerin konumlarını görselleştirmek için kullanılmıştır.

## Proje İçeriği

- **Sunucu Tarafı**: Node.js ve Express.js kullanılarak oluşturulmuş, MQTT istemcisi ile bağlantı sağlanmış ve MQTT mesajlarını işleyen bir HTTP sunucusudur.
- **İstemci Tarafı**: Canvas API kullanılarak oluşturulmuş bir harita görüntüsüdür. WebSocket (Socket.IO) üzerinden sunucu ile iletişim kurarak gerçek zamanlı konum verilerini alır ve görselleştirir.

## Nasıl Çalıştırılır

1. Node.js yüklü olduğundan emin olun.
2. Proje dizininde terminali açın.
3. Gerekli bağımlılıkları yüklemek için `npm install` komutunu çalıştırın.
4. Sunucuyu başlatmak için `node server.js` komutunu çalıştırın.
5. Tarayıcıda `http://localhost:3000` adresine gidin.

![rtlsfoto](https://github.com/meryemtalay/RTLS_Projesi/assets/73894202/0d96e8a2-d9f4-4ebd-90b1-3a6bf6ff10ee)
