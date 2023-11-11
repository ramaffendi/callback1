class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((d, index) => {
      open += `
        <tr>
          <td>${index + 1}</td>
          <td>${d[0]}</td>
          <td>${d[1]}</td>
          <td>${d[2]}</td>
          <td>${d[3]}</td>
        </tr>
      `;
    });

    return open + close;
  }

  render(element) {
    let table =
      "<table class='table table-hover'>" +
      this.createHeader(["No", ...this.init.columns]) +
      this.createBody(this.init.data) +
      "</table>";
    element.innerHTML = table;
  }
}

const tableData = [
  ["Edi Hartono", "edi.eduwork@gmail.com", "08912324", "manager"],
  ["Dodi Prakoso", "dodi@upscale.id", "08134235", "staff finance"],
  ["Rama", "rama11@yahoo.com", "081235235", "marketing"],
  ["Rival", "rivald@gmail.com", "08231245", "web designer"],
  ["Santri", "sans@yahoo.com", "08231245", "web develops"],
];

const table = new Table({
  columns: ["Name", "Email", "Nohp", "Jabatan",],
  data: tableData
});

const app = document.getElementById("app");
table.render(app);
