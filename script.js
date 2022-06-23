let groups = [
  ['A', ['Qatar', 'Ecuador', 'Senegal', 'Paises Bajos']],
  ['B', ['Inglaterra', 'Irán', 'EEUU', 'Gales']],
  ['C', ['Argentina', 'A. Saudita', 'México', 'Polonia']],
  ['D', ['Francia', 'Perú', 'Dinamarca', 'Túnez']],
  ['E', ['España', '???', 'Alemania', 'Japón']],
  ['F', ['Bélgica', 'Canadá', 'Marruecos', 'Croacia']],
  ['G', ['Brasil', 'Serbia', 'Suiza', 'Camerún']],
  ['H', ['Portugal', 'Ghana', 'Uruguay', 'Corea del Sur']]
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
// let matches = document.getElementById('matches')
// for (let g of groups) {
//   let i = 0;
//   for (let team of g[1]) {
//     let a = document.createElement('div');
//     a.id = 'a';
//     a.textContent = team;
//     if (i % 2 != 0) {
//       let res = document.createElement('div');
//       res.id = 'res';
//       let b = ' vs';
//       matches.lastElementChild.append(b)
//       matches.lastElementChild.append(a)
//     }
//
//     matches.append(a);
//     i++;
//   }
// }
//

function handleSubmit(event) {
  event.preventDefault();
  let local = event.target.children[0].textContent;
  let visitante = event.target.children[3].textContent;
  let golesLocal = event.target.children[1].value;
  let golesVisitante = event.target.children[2].value;

  let ganoLocal = false;
  let ganoVisitante = false;
  let empate = false;
  if (golesLocal > golesVisitante) ganoLocal = true;
  else if (golesLocal < golesVisitante) ganoVisitante = true
  else if (golesLocal == golesVisitante) empate = true;


  // console.log(`${local} ${golesLocal} | ${golesVisitante} ${visitante}`);
  let tds = document.querySelectorAll('td');
  for (let td of tds) {
    if (td.textContent == local || td.textContent == visitante) {
      // si empatan PE + 1
      if (empate) {
        td.nextElementSibling.nextElementSibling.nextElementSibling.textContent = parseInt(td.nextElementSibling.nextElementSibling.textContent) + 1;
      }
      // PJ + 1
      td.nextElementSibling.textContent = parseInt(td.nextElementSibling.textContent) + 1;
    }
    if (td.textContent == local) {
      if (ganoLocal) {
        td.parentElement.children[2].textContent = parseInt(td.parentElement.children[2].textContent) + 1;
      } else if (ganoVisitante) {
        td.parentElement.children[4].textContent = parseInt(td.parentElement.children[4].textContent) + 1;
      }
      // GF del local
      td.parentElement.children[5].textContent = parseInt(td.parentElement.children[5].textContent) + parseInt(golesLocal);
      // GC del local
      td.parentElement.children[6].textContent = parseInt(td.parentElement.children[6].textContent) + parseInt(golesVisitante);
    }
    if (td.textContent == visitante) {
      if (ganoLocal) {
        td.parentElement.children[4].textContent = parseInt(td.parentElement.children[4].textContent) + 1;
      } else if (ganoVisitante) {
        td.parentElement.children[2].textContent = parseInt(td.parentElement.children[2].textContent) + 1;
      }
      // GF del visitante
      td.parentElement.children[5].textContent = parseInt(td.parentElement.children[5].textContent) + parseInt(golesVisitante);
      // GC del visitante
      td.parentElement.children[6].textContent = parseInt(td.parentElement.children[6].textContent) + parseInt(golesLocal);
    }

  }
}
