const translations = {
  en: {
    title: "Cafe Menu",
    coffee: "Coffee",
    desserts: "Desserts",
    americano: "Americano",
    latte: "Latte",
    cake: "Chocolate Cake",
    donut: "Donut"
  },
  ka: {
    title: "კაფეს მენიუ",
    coffee: "ყავა",
    desserts: "დესერტები",
    americano: "ამერიკანო",
    latte: "ლატე",
    cake: "შოკოლადის ტორტი",
    donut: "დონატი"
  },
  ru: {
    title: "Меню кафе",
    coffee: "Кофе",
    desserts: "Десерты",
    americano: "Американо",
    latte: "Латте",
    cake: "Шоколадный торт",
    donut: "Пончик"
  }
};

function setLang(lang) {
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("coffee-title").innerText = translations[lang].coffee;
  document.getElementById("dessert-title").innerText = translations[lang].desserts;
  document.getElementById("americano").innerText = translations[lang].americano;
  document.getElementById("latte").innerText = translations[lang].latte;
  document.getElementById("cake").innerText = translations[lang].cake;
  document.getElementById("donut").innerText = translations[lang].donut;
}