function emptyAlert(varName) {
  if (varName === "") {
    alert(`${varName} alanı boş bırakılamaz`);
  } else {
    console.log(`${varName}`);
  }
}

function getname() {
  var name = document.getElementById("getName").value;

  emptyAlert(name);
}

function getsurname() {
  var surname = document.getElementById("getSurname").value;

  emptyAlert(surname);
}

function getbirthdate() {
  var date = document.getElementById("birthdate").value;

  emptyAlert(date);
}

function getdepartment() {
  var department = document.getElementById("departmentName").value;

  emptyAlert(department);
}

function getgender() {
  var gender = document.getElementById("gender");

  emptyAlert(gender);
}




function allInformations() {
  getname();
  getsurname();
  getbirthdate();
  getdepartment();
  getgender();
}
