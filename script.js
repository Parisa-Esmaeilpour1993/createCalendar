function createCalendar(elem, year, month) {

    let d = new Date(year, month-1);

    let table = `<table>
    <tr>
        <th>MO</th>
        <th>TU</th>
        <th>WE</th>
        <th>TH</th>
        <th>FR</th>
        <th>SA</th>
        <th>SU</th>
        </tr>
        <tr>`;

    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    while (d.getMonth() == month-1) {
      table += `<td>${d.getDate()}</td>`;

      if (getDay(d) % 7 == 6) { 
        table += `</tr><tr>`;
      }

      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    table += `</tr></table>`;

    elem.innerHTML = table;
  }

  function getDay(d) {
    let day = d.getDay();
    if (day == 0) day = 7;
    return day - 1;
  }

  createCalendar(calendar, 2012, 8);