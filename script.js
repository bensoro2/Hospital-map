const map = L.map("map").setView([13.75, 100.5167], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

const infoDisplay = document.getElementById("info-display");

const hospitalData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "โรงพยาบาลศิริราช",
        category: "hospital",
        address: "2 ถนนวังหลัง แขวงศิริราช เขตบางกอกน้อย กรุงเทพมหานคร 10700",
        phone: "02-419-7000",
      },
      geometry: {
        type: "Point",
        coordinates: [100.4841, 13.7572],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย",
        category: "hospital",
        address:
          "1873 ถนนพระรามที่ 4 แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330",
        phone: "02-256-4000",
      },
      geometry: {
        type: "Point",
        coordinates: [100.5315, 13.7318],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "โรงพยาบาลรามาธิบดี",
        category: "hospital",
        address:
          "270 ถนนพระรามที่ 6 แขวงทุ่งพญาไท เขตราชเทวี กรุงเทพมหานคร 10400",
        phone: "02-201-1000",
      },
      geometry: {
        type: "Point",
        coordinates: [100.525, 13.767],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "โรงพยาบาลพระมงกุฎเกล้า",
        category: "hospital",
        address: "315 ถนนราชวิถี แขวงทุ่งพญาไท เขตราชเทวี กรุงเทพมหานคร 10400",
        phone: "02-763-9300",
      },
      geometry: {
        type: "Point",
        coordinates: [100.5292, 13.7711],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "โรงพยาบาลราชวิถี",
        category: "hospital",
        address: "2 ถนนพญาไท แขวงทุ่งพญาไท เขตราชเทวี กรุงเทพมหานคร 10400",
        phone: "02-206-2900",
      },
      geometry: {
        type: "Point",
        coordinates: [100.5345, 13.7663],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "โรงพยาบาลตำรวจ",
        category: "hospital",
        address:
          "492/1 ถนนพระรามที่ 1 แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330",
        phone: "02-207-6000",
      },
      geometry: {
        type: "Point",
        coordinates: [100.5378, 13.7438],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "โรงพยาบาลบำรุงราษฎร์ อินเตอร์เนชั่นแนล",
        category: "hospital",
        address:
          "33 สุขุมวิท ซอย 3 แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110",
        phone: "02-066-8888",
      },
      geometry: {
        type: "Point",
        coordinates: [100.553, 13.7451],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "โรงพยาบาลกรุงเทพ",
        category: "hospital",
        address:
          "2 ซอยศูนย์วิจัย 7 ถนนเพชรบุรีตัดใหม่ แขวงบางกะปิ เขตห้วยขวาง กรุงเทพมหานคร 10310",
        phone: "1719",
      },
      geometry: {
        type: "Point",
        coordinates: [100.581, 13.7659],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "โรงพยาบาลสมิติเวช สุขุมวิท",
        category: "hospital",
        address:
          "133 สุขุมวิท 49 แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพมหานคร 10110",
        phone: "02-022-2222",
      },
      geometry: {
        type: "Point",
        coordinates: [100.5782, 13.7298],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "โรงพยาบาลเปาโล พหลโยธิน",
        category: "hospital",
        address: "670/1 ถนนพหลโยธิน แขวงสามเสนใน เขตพญาไท กรุงเทพมหานคร 10400",
        phone: "02-271-7000",
      },
      geometry: {
        type: "Point",
        coordinates: [100.5575, 13.812],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "โรงพยาบาลพญาไท 2",
        category: "hospital",
        address: "943 ถนนพหลโยธิน แขวงสามเสนใน เขตพญาไท กรุงเทพมหานคร 10400",
        phone: "1772",
      },
      geometry: {
        type: "Point",
        coordinates: [100.5378, 13.7711],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "โรงพยาบาลวิชัยยุทธ",
        category: "hospital",
        address: "53 ถนนเศรษฐศิริ แขวงสามเสนใน เขตพญาไท กรุงเทพมหานคร 10400",
        phone: "02-265-7777",
      },
      geometry: {
        type: "Point",
        coordinates: [100.537, 13.7808],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "โรงพยาบาลยันฮี",
        category: "hospital",
        address:
          "454 ถนนจรัญสนิทวงศ์ แขวงบางอ้อ เขตบางพลัด กรุงเทพมหานคร 10700",
        phone: "1723",
      },
      geometry: {
        type: "Point",
        coordinates: [100.5098, 13.8066],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "โรงพยาบาลเลิดสิน",
        category: "hospital",
        address: "190 ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500",
        phone: "02-353-9800",
      },
      geometry: {
        type: "Point",
        coordinates: [100.5167, 13.7247],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "โรงพยาบาลตากสิน",
        category: "hospital",
        address:
          "543 ถนนสมเด็จเจ้าพระยา แขวงคลองสาน เขตคลองสาน กรุงเทพมหานคร 10600",
        phone: "02-437-0123",
      },
      geometry: {
        type: "Point",
        coordinates: [100.497, 13.7322],
      },
    },
  ],
};

function displayGeoJsonData() {
  try {
    L.geoJSON(hospitalData, {
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng);
      },
      onEachFeature: function (feature, layer) {
        let popupContent = `<b>${feature.properties.name}</b>`;
        if (feature.properties.phone) {
          popupContent += `<br>โทร: ${feature.properties.phone}`;
        }
        layer.bindPopup(popupContent);

        layer.on("click", function (e) {
          let infoHtml = `<h3>${
            feature.properties.name || "ข้อมูลไม่ระบุ"
          }</h3>`;
          if (feature.properties.address) {
            infoHtml += `<p><strong>ที่อยู่:</strong> ${feature.properties.address}</p>`;
          }
          if (feature.properties.phone) {
            infoHtml += `<p><strong>โทรศัพท์:</strong> ${feature.properties.phone}</p>`;
          }
          infoHtml += `<p><strong>ประเภท:</strong> โรงพยาบาล</p>`;
          infoDisplay.innerHTML = infoHtml;
        });
      },
    }).addTo(map);
  } catch (error) {
    console.error("Error displaying GeoJSON data:", error);
    infoDisplay.innerHTML = "<p>เกิดข้อผิดพลาดในการแสดงข้อมูลแผนที่</p>";
  }
}

displayGeoJsonData();
