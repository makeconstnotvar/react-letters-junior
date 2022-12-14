/*
1. Сформировать массив из пар ['AA','AB',...'AZ','BA','BB'...'ZZ'].  
2. Вывести все пары на страницу.  
3. Сделать рядом с каждой парой кнопку, которая красит пару в зеленый цвет.  
4. Сделать рядом с каждой парой еще одну кнопку, которая удалит эту пару со страницы.
*/

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const pairs = [];

export default function App() {
  
  return (
    <div className="app">
      <h1>Буквы</h1>
      <div>{letters}</div>
      <h2>Пары букв</h2>
      <div>{pairs}</div>
    </div>
  );
}
