let email = document.getElementById("email");
let password = document.getElementById("password");
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  console.log(email.value);
  console.log(password.value);
  e.preventDefault();
  let thanx = document.getElementById("thanx");
  thanx.innerText = "Thank You for Registering";
  let getemail = email.value;
  let getpassword = password.value;
  email.value = "";
  password.value = "";
  let container = document.getElementById("container");
  container.innerHTML = ` <form>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Email</label>
        <input type="email" class="form-control" id="newemail" placeholder="Email">
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Password</label>
        <input type="password" class="form-control" id="newpassword" placeholder="Password">
      </div>
    </div>
    <div class="form-group">
      <label for="inputAddress">Address</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
    </div>
    <div class="form-group">
      <label for="inputAddress2">Address 2</label>
      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputCity">City</label>
        <input type="text" class="form-control" id="inputCity">
      </div>
      
      <div class="form-group col-md-2">
        <label for="inputZip">Zip</label>
        <input type="text" class="form-control" id="inputZip">
      </div>
    </div>
    </div>
    <button id="newBtn" type="submit" class="btn btn-primary">Submit</button>
  </form>`

  let newemail = document.getElementById("newemail");
  let newpassword = document.getElementById("newpassword");
  let newBtn = document.getElementById("newBtn");
  newBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (newemail.value != getemail || newpassword.value != getpassword) {
      let div = document.createElement("div");
      div.innerHTML = `<p style="color:red";>Wrong email or password</p>`;
      container.appendChild(div);

    }
    else {
      container.innerHTML = "";
      let div2 = document.createElement("div");
      div2.innerHTML = `<p style="color:green";>Thank You!Your details are successfully registered</p>`;
      container.appendChild(div2);
    }
  })
});

