# Ozon Progress Bar

Визуализация прогресса

## Технологии
 - JavaScript
 - HTML
 - CSS
 - Vite
 - GitHub Pages

## Локальный запуск
```bash
git clone https://github.com/MarianCompany/ozon-progress-bar.git
cd ozon-progress-bar
npm ci
npm run dev
```

### Особенности

### Создание экземпляра

```js
import { Progress } from './Progress.js';

const root = document.getElementById('progress-container');

const progress = new Progress({
  root,          // DOM-элемент, куда рендерится прогресс
  initialValue: 25, // начальное значение прогресса (0–100)
  radius: 45        // радиус круга
});
```

---

### Методы

| Метод               | Описание                                            | Пример                             |
| ------------------- | --------------------------------------------------- | ---------------------------------- |
| `setValue(value)`   | Установить значение прогресса (0–100)               | `progress.setValue(75)`            |
| `setAnimated(flag)` | Включить/выключить анимацию вращения                | `progress.setAnimated(true)`       |
| `setHidden(flag)`   | Скрыть или показать прогресс                        | `progress.setHidden(true)`         |
| `getState()`        | Получить текущее состояние                          | `console.log(progress.getState())` |
| `destroy()`         | Удаляет прогресс-бар из DOM и отписывает слушателей | `progress.destroy()`               |


### Кастомизация

#### Через CSS переменные

Есть возможность менять цвета, а также толщину круга:

```css
.progress {
  --progress-color: #0000FF;        /* цвет прогресса */
  --progress-track-color: #dddddd;  /* цвет фона/трек */
  --progress-thickness: 10px;       /* толщина круга */
}
```

### Пример использования

*Необходимо использовать файлы билда из `dist/progress`*
```html
<div id="progress-container"></div>

<script type="module">
  import './progress/progress.css';
  import { Progress } from './progress/progress.js';

  const progress = new Progress({
    root: document.getElementById('progress-container'),
    initialValue: 30,
    radius: 50
  });

  progress.setValue(80);
  progress.setAnimated(true);
</script>
```
