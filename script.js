const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = [
  'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 
  'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 
  'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 
  'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 
  'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 
  'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 
  'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 
  'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 
  'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 
  'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 
  'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'
];

function search(str) {
  let results = [];
  for (const item of fruits) {
    if (item.toLowerCase().includes(str.toLowerCase())) {
      results.push(item);
    }
  }
  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = '';
  if (inputVal) {
    for (let result of results) {
      let li = document.createElement('li');
      li.innerText = result;
      suggestions.appendChild(li);
    }
  }
}

function useSuggestion(e) {
  if (e.target && e.target.nodeName === "LI") {
    input.value = e.target.innerText;
    suggestions.innerHTML = '';
  }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
