let myMap = new Map ();

myMap.set('key', 'prop');
myMap.set(31, 123);
myMap.set('what', 'yes');

for(let name of myMap.keys()){
    console.log('Ключ свойства', name)
}

for(let name of myMap.values()){
    console.log('Значение свойства', name)
}