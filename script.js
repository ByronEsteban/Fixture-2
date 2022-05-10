let groups = [
  ['A', ['Qatar', 'Ecuador', 'Senegal', 'Paises Bajos']],
  ['B', ['Inglaterra', 'Iran', 'EEUU', 'Gales']],
  ['C', ['Argentina', 'A. Saudita', 'Mexico', 'Polonia']],
  ['D', ['Francia', 'Peru', 'Dinamarca', 'Tunez']]
];
let cols = ['Equipos', 'PJ', 'PG', 'PE', 'PP', 'GF', 'GE', 'DG', 'Pts'];

for (let g of groups) {
  let div = document.createElement('div');
  let title = document.createElement('h3');
  let table = document.createElement('table');
  // group name
  title.textContent = g[0];
    // group styling
  div.classList.add('group');
  let header = document.createElement('tr')
  for (let c of cols) {
    let data = document.createElement('th');
    data.textContent = c;
    header.append(data);
  }
  table.append(header);
  for (let team of g[1]) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = team;
    tr.append(td);

    for (let i = 0; i < 8; i++) {
      let zero = document.createElement('td');
      zero.textContent = '0';
      tr.append(zero);
    }
    table.append(tr);
  }
  div.append(title);
  div.append(table);
  document.querySelector('.tables').append(div);
}
