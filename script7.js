const ulle = document.querySelector('ul#categories');
const lile = ulle.querySelectorAll('li.item');
console.log(`Кількість категорій: ${lile.length}`);

lile.forEach(li => {
  const catname = li.querySelector('h2');

  const catename = li.querySelectorAll('li');

  console.log(`Категорія: ${catname.textContent}`);
  console.log(`Елмент: ${catename.length}`);
});