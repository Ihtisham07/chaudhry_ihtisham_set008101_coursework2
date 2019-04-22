
var Ahmed = require('./util/http_util');


/* Exported function which is used to display user register form page. */
exports.showRegisterPage = function (req, resp) {
    buildRegisterPage(req, resp, "");
}


/* Exported function also used to send a register success message to client. */
exports.registerSubmit = function (req, resp) {

    resp.writeHead(200, {'Content-Type':'text/html'});

    var page_title = "Register Success";

    var page_menu = http_util.pageMenu();

    var page_content = "User info registration success.";

    var page_data = http_util.buildPage(page_title, page_menu, page_content);

    resp.end(page_data);
}


/* Private function that create and return user register form page. */
function buildRegisterPage(req, resp, error_message) {

    http_util.getUrlParams(req, resp);

    var page_title = "Register Page";

    var page_menu = http_util.pageMenu();

    var register_form = "<h3>Input user data to register.</h3>";

    if(error_message!=='' && error_message!==null && error_message!==undefined)
    {
        register_form += "<font color=red>" + error_message + "</font><br/><br/>>";
    }

    register_form += "<form method='post' action='/register-submit'>" +
		"Email :<input type='text' name='email' value='{email}'/><br/><br/>" +
        "Password :<input type='password' name='password' value='{password}'/><br/><br/>" +
        "<input type='submit' value='Register'/><br/><br/>" +
        "</form>";



    if(req.password==null || req.password==undefined)
    {
      alert("ahmed");
        req.password = '';
    }

    if(req.email==null || req.email==undefined)
    {
      alert("helo");
        req.email = '';
    }



    register_form = register_form.replace("{password}", req.password);

    register_form = register_form.replace("{email}", req.email);

	const sqlite3 = require('./node_modules/sqlite3/sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db/ahmad.db', sqlite3.OPEN_READWRITE);

db.run(`INSERT INTO users (email,password) VALUES('ahmed_raza@live.com','123456')`);

    var register_page_data = http_util.buildPage(page_title, page_menu, register_form);

    resp.writeHead(200, {'Content-Type':'text/html'});

    resp.end(register_page_data);
}
