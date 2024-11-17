## README.md

# 🌤 Skyly - Weather Forecast Website

### Opis projektu
**Skyly** to aplikacja internetowa, która dostarcza bieżące informacje o aktualnych warunkach pogodowych na podstawie nazwy miasta podanej przez użytkownika. Jest to proste i szybkie narzędzie do sprawdzenia pogody w dowolnym miejscu.

---

### Funkcjonalności
- **Aktualna pogoda**: Informacje na temat bieżących warunków pogodowych, takich jak temperatura, wilgotność, prędkość wiatru, ciśnienie atmosferyczne i inne szczegóły.
- **Wyszukiwanie po nazwie miasta**: Użytkownik może ręcznie wpisać nazwę miasta, aby sprawdzić aktualne warunki pogodowe.

---

### Wymagania
- System obsługujący Git (do eksportowania repozytorium na lokalny komputer).
- Dostęp do API pogody (np. [OpenWeatherMap](https://openweathermap.org/api)) z kluczem API.

---

### Instalacja

1. **Eksportowanie repozytorium na lokalny komputer**
   - Skorzystaj z poniższego polecenia, aby sklonować repozytorium:
     ```bash
     git clone https://github.com/nazwa-uzytkownika/skyly.git
     cd skyly
     ```

2. **Uruchomienie aplikacji**
   - Otwórz plik `index.html` w przeglądarce internetowej.

Aplikacja będzie działać lokalnie i umożliwi przeglądanie aktualnych warunków pogodowych.

---

### Technologie
- **Frontend**: HTML, CSS, JavaScript
- **API**: OpenWeatherMap lub inne wybrane API pogodowe

---

### Przykłady funkcji

- **`search()`**
  - Funkcja umożliwiająca użytkownikowi wprowadzenie nazwy miejscowości, dla której chcemy uzyskać dane pogodowe.

- **`checkWeather()`**
  - Funkcja odpowiedzialna za pobranie i wyświetlenie aktualnych danych pogodowych dla wprowadzonego miasta.

---

### Plan rozwoju
- Dodanie możliwości sprawdzania prognozy pogody na kolejne dni.
- Wprowadzenie funkcji wyszukiwania pogody na podstawie lokalizacji użytkownika.
- Opcja zapisania kilku ulubionych miast użytkownika.
- Dodania mapy.
- Umożliwienie innych przydatnych ustawień.
