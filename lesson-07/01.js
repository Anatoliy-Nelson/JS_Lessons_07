/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  let result = ''; // Переменная для хранения результата
  let capitalizeNext = true; // Флаг, указывающий, что следующая буква должна быть заглавной

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (capitalizeNext && char !== ' ') {
      // Делаем заглавной, если это начало слова
      result += char.toUpperCase();
      capitalizeNext = false; // Следующие буквы в этом слове не будут заглавными
    } else {
      result += char; // Просто добавляем букву как есть
    }

    // Если текущий символ — пробел, следующее слово нужно будет начать с заглавной буквы
    if (char === ' ') {
      capitalizeNext = true;
    }
  }

  return result;
}

console.log(capitalizeWords('hello world from javascript')); // "Hello World From JavaScript"

// *************************************
// function capitalizeWords(str) {
//   return str
//     .split(" ") // Разбиваем строку на массив слов
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Преобразуем первую букву каждого слова в заглавную
//     .join(" "); // Соединяем обратно в строку
// }

// console.log(capitalizeWords("hello world from javascript"));