function getUsers(){
    return axios.get('http://localhost:3000/users')
}

class Registration{
    onNewAccountClick(){
        const mainPage = document.getElementById("container")
        mainPage.innerHTML = ""
        mainPage.innerHTML = `<div class = "defaultContainerStyles">
                              <label>Input your name:<input id="nameInput"></label>
                              <label>Input your surname:<input id="surnameInput"></label>
                              <label>Create you nickname!<input id="nicknameInput"></label>
                              <button id="saveButton">Save</button></div>>`
        const nameInput = document.getElementById('nameInput');
        const surnameInput = document.getElementById('surnameInput');
        const nicknameInput = document.getElementById('nicknameInput');
        const saveButton = document.getElementById('saveButton');
        saveButton.addEventListener('click',() =>{
            let newUser = {
                id: 1,
                firstName: nameInput.value,
                lastName: surnameInput.value,
                inGameName: nicknameInput.value,
                stage: 1,
                lvl: 1,
                damagePerClick: 1,
                upgradePoints: 0,
                totalDMGDealt: 0
            }
            getUsers().then((response) => {
                let users = response.data
                newUser.id = Math.max.apply(null, users.id)
                users.push(newUser)
                axios.post('http://localhost:3000/users', users)

            }, (error) => {
               console.log(error)
            });
            mainPage.innerHTML = ""
            const registrationPage = new Registration()
            registrationPage.renderAllUsers()
            location.reload()
        })

    }


    newAccount(){
        const newAccountElement = document.createElement("button")
        newAccountElement.setAttribute("class", "user button-86")
        newAccountElement.innerHTML = `<img src = "../../images/layoutDetails/addNewAccount.svg" alt = "newAccount">`
        newAccountElement.onclick = () => this.onNewAccountClick()
        return newAccountElement
    }

    onUserElementClick = (user) => {
        this.currentUser = user
        const menu = new Menu(this.currentUser)
        const mainPage = document.getElementById("container")
        mainPage.innerHTML = ""
        mainPage.appendChild(menu.render())

        const content = document.createElement("div");
        content.setAttribute("id", "content")
        mainPage.appendChild(content);
        menu.renderBattle()
    }
    renderOneUser(user){
        const loginButton = document.createElement('button');
        loginButton.setAttribute("class", "user button-86")
        loginButton.onclick = () => this.onUserElementClick(user);
        loginButton.innerHTML = `<span>${user.inGameName}, </span>
                            <span>Stage ${user.stage}</span>`
        const mainPage = document.getElementById("container")
        mainPage.appendChild(loginButton)
    }
    renderAllUsers(){
        getUsers().then((response) => {
            let users = response.data
            for(let i = 0; i < users.length; i++){
                registrationPage.renderOneUser(users[i])
            }
        }, (error) => {
            console.log(error)
        });
        const mainPage = document.getElementById("container")
        mainPage.appendChild(registrationPage.newAccount())
    }

}
const registrationPage = new Registration()
registrationPage.renderAllUsers()



