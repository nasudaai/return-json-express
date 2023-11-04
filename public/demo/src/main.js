console.log('main.js')

const root = document.getElementById('root');
//console.log(root)
root.appendChild(document.createElement('ul'))

const uList = document.querySelector('ul')
//console.log(uList)

for (let i = 0; i < 10; i = i + 1) {
    const list = document.createElement('li');
    const n = i + 1;
    list.textContent = `${n}`;
    uList.appendChild(list);
    
}