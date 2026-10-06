// ---------- Завдання 1: Робота з об'єктами ----------

// 1. Об'єкт place
const place = {
  name: "Колізей",
  country: "Італія",
  city: "Рим",
  budget: 800,        // орієнтовний бюджет поїздки, USD
  isVisited: true,

  // 2. Метод placeInfo
  placeInfo() {
    console.log(
      `Назва: ${this.name}, Країна: ${this.country}, Місто: ${this.city}, ` +
      `Бюджет: ${this.budget} USD, Відвідано: ${this.isVisited ? "Так" : "Ні"}`
    );
  },
};

console.log("=== Завдання 1: об'єкт place ===");
place.placeInfo();

// 3. Змінюємо isVisited на протилежне і знову викликаємо метод
place.isVisited = !place.isVisited;
place.placeInfo();


// ---------- Завдання 2: Масив та об'єкти ----------

// Фабрична функція: усі місця мають однакову структуру та методи
function createPlace(name, country, city, budget, isVisited) {
  return {
    name,
    country,
    city,
    budget,
    isVisited,

    placeInfo() {
      console.log(
        `Назва: ${this.name}, Країна: ${this.country}, Місто: ${this.city}, ` +
        `Бюджет: ${this.budget} USD, Відвідано: ${this.isVisited ? "Так" : "Ні"}`
      );
    },

    // Метод markAsVisited (аналог markAsRead)
    markAsVisited() {
      this.isVisited = true;
    },
  };
}

// 1. Масив places (5 об'єктів)
const places = [
  createPlace("Колізей", "Італія", "Рим", 800, true),
  createPlace("Ейфелева вежа", "Франція", "Париж", 950, false),
  createPlace("Храм Кіёмідзу-дера", "Японія", "Кіото", 1800, false),
  createPlace("Саграда Фамілія", "Іспанія", "Барселона", 700, true),
  createPlace("Мачу-Пікчу", "Перу", "Куско", 2200, false),
];

// 2. Функція displayPlaces
function displayPlaces() {
  console.log("--- Список місць для подорожей ---");
  for (const item of places) {
    item.placeInfo();
  }
}

console.log("\n=== Завдання 2: масив places ===");
displayPlaces();

// 3. Додаємо нове місце методом push() і знову виводимо список
places.push(createPlace("Санторіні", "Греція", "Ія", 1100, false));
console.log("\nПісля додавання нового місця:");
displayPlaces();


// ---------- Завдання 3: Методи масивів ----------
console.log("\n=== Завдання 3: методи масивів ===");

// 1. Сортування за бюджетом (за зростанням)
places.sort((a, b) => a.budget - b.budget);
console.log("Місця, відсортовані за бюджетом (за зростанням):");
displayPlaces();

// 2. filter(): лише невідвідані місця
const notVisitedPlaces = places.filter((item) => !item.isVisited);
console.log("\nНевідвідані місця (notVisitedPlaces):");
console.log(notVisitedPlaces);

// 3. find(): місце в Японії
const japanPlace = places.find((item) => item.country === "Японія");
console.log("\nМісце в Японії (метод find):");
console.log(japanPlace);


// ---------- Додаткові завдання до індивідуального проєкту ----------
console.log("\n=== Додаткові завдання ===");

// Функція calculateAverageBudget: середній бюджет усіх місць
function calculateAverageBudget() {
  if (places.length === 0) return 0;
  const sum = places.reduce((total, item) => total + item.budget, 0);
  return sum / places.length;
}

console.log("Середній бюджет подорожі:", calculateAverageBudget().toFixed(2), "USD");

// Перевірка методу markAsVisited
const paris = places.find((item) => item.city === "Париж");
console.log("Париж до markAsVisited:");
paris.placeInfo();
paris.markAsVisited();
console.log("Париж після markAsVisited:");
paris.placeInfo();


// ---------- Завдання 4: Взаємодія з користувачем ----------

// Запитує дані про нове місце і додає його до масиву places
function addPlaceFromUser() {
  const name = prompt("Введіть назву місця:");
  if (name === null || name.trim() === "") {
    alert("Назву не введено. Місце не додано.");
    return false;
  }

  const country = prompt("Введіть країну:");
  if (country === null || country.trim() === "") {
    alert("Країну не введено. Місце не додано.");
    return false;
  }

  const city = prompt("Введіть місто:");
  if (city === null || city.trim() === "") {
    alert("Місто не введено. Місце не додано.");
    return false;
  }

  const budget = Number(prompt("Введіть бюджет поїздки (USD):"));
  if (!Number.isFinite(budget) || budget < 0) {
    alert("Некоректний бюджет. Місце не додано.");
    return false;
  }

  const isVisited = confirm("Місце вже відвідано? (OK – так, Скасувати – ні)");

  places.push(
    createPlace(name.trim(), country.trim(), city.trim(), budget, isVisited)
  );
  return true;
}

console.log("\n=== Завдання 4: додавання місць користувачем ===");
do {
  if (addPlaceFromUser()) {
    displayPlaces(); // після кожного додавання – оновлений список
  }
} while (confirm("Додати ще одне місце?"));
