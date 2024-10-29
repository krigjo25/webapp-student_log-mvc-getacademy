// Initiate the login controller
function loginHandler(event) {
    /*
        This function is responsible for collecting login data 
        from the form and verifying it against the stored user data.
    */
    
    // Prevents the page from reloading
    event.preventDefault();

    // Collecting data from the form inputs in the model
    let username = model.input.login.username;
    let password = model.input.login.password;

    // Verify user credentials
    let user = model.data.users.find(u => u.username == username && u.password == password);

    if (user) {
        alert("Login successful!");
        model.app.currentpage = 'dashboard';  // Update the model's state to navigate to the main page
        updateView();  // Render the appropriate view based on the new state
        sessionUser();  // Initialize the session
    } else {
        alert("Incorrect login credentials");
    }
}

// Initialize the session
function sessionUser()
{
    for (let i = 0; i < model.users.length; i++)
    {
        if (model.users[i].name == model.app.inputs.login.username)
        {
            model.session.id = model.users[i].id;
        }
    }
    //  Fetch id from user in model

}