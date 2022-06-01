function handleSubmit(event) {
  event.preventDefault();
  let local = event.target.children[0].textContent;
  let visitante = event.target.children[3].textContent;
  let golesLocal = event.target.children[1].value;
  let golesVisitante = event.target.children[2].value;

  let ganoLocal = false;
  let empate = false;
  if (golesLocal > golesVisitante) ganoLocal = true;
  else if (golesLocal == golesVisitante) empate = true;


  // console.log(`${local} ${golesLocal} | ${golesVisitante} ${visitante}`);
  let tds = document.querySelectorAll('td');
  for (let td of tds) {
    if (td.textContent == local || td.textContent == visitante) {
      // si empatan
      if (empate) {
        td.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent = parseInt(td.nextElementSibling.nextElementSibling.nextElementSibling.textContent) + 1;
      }
      // PJ + 1
      td.nextElementSibling.nextElementSibling.textContent = parseInt(td.nextElementSibling.nextElementSibling.textContent) + 1;
    }
    if (td.textContent == local) {
      // GF del local
      td.parentElement.children[7].textContent = parseInt(td.parentElement.children[7].textContent) + parseInt(golesLocal);
      // GC del local
      td.parentElement.children[8].textContent = parseInt(td.parentElement.children[8].textContent) + parseInt(golesVisitante);
    }
    if (td.textContent == visitante) {
      // GF del visitante
      td.parentElement.children[7].textContent = parseInt(td.parentElement.children[7].textContent) + parseInt(golesVisitante);
      // GC del visitante
      td.parentElement.children[8].textContent = parseInt(td.parentElement.children[8].textContent) + parseInt(golesLocal);
    }

  }
}
