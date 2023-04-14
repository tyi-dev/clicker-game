class Menu{
    constructor(user) {
        this.currentUser = user
    }
    renderBattle(){
        const battle = new Battle(this.currentUser)
        let contentPage = document.getElementById("content")
        contentPage.innerHTML = ""
        contentPage.appendChild(battle.render())
    }
    renderForge(){
        const forge = new Forge(this.currentUser)
        let contentPage = document.getElementById("content")
        contentPage.innerHTML = ""
        contentPage.appendChild(forge.render())
    }
    renderWardrobe(){
        const wardrobe = new Wardrobe(this.currentUser)
        let contentPage = document.getElementById("content")
        contentPage.innerHTML = ""
        contentPage.appendChild(wardrobe.render())
    }
    renderLogin(){
        const registrationPage = new Registration()
        let mainPage = document.getElementById("container")
        mainPage.innerHTML = ""
        registrationPage.renderAllUsers()
    }

    render(){
        const menuAndContent = document.createElement("div")
        menuAndContent.setAttribute("class", "menuAndContent")
        const menu = document.createElement("div")
        const mainButtons = document.createElement("div")
        const sideButtons = document.createElement("div")
        const battle = document.createElement('button');
        const forge = document.createElement('button');
        const wardrobe = document.createElement('button');
        const logout = document.createElement('button');
        const battleImage = document.createElement("img")
        battleImage.setAttribute("src", "../../images/layoutDetails/battle.svg")
        battle.appendChild(battleImage)
        const forgeImage = document.createElement("img")
        forgeImage.setAttribute("src", "../../images/layoutDetails/forge.svg")
        forge.appendChild(forgeImage)
        const wardrobeImage = document.createElement("img")
        wardrobeImage.setAttribute("src", "../../images/layoutDetails/wardrobe.svg")
        wardrobe.appendChild(wardrobeImage)
        const logoutImage = document.createElement("img")
        logoutImage.setAttribute("src", "../../images/layoutDetails/logout.svg")
        logout.appendChild(logoutImage)
        menu.setAttribute("class", "button-86")
        battle.setAttribute("class", "button-86")
        forge.setAttribute("class", "button-86")
        wardrobe.setAttribute("class", "button-86")
        logout.setAttribute("class", "button-86")
        battle.onclick = () => this.renderBattle(this.currentUser);
        forge.onclick = () => this.renderForge(this.currentUser);
        wardrobe.onclick = () => this.renderWardrobe(this.currentUser);
        logout.onclick = () => this.renderLogin(this.currentUser);
        mainButtons.appendChild(battle)
        mainButtons.appendChild(forge)
        mainButtons.appendChild(wardrobe)
        sideButtons.appendChild(logout)
        menu.appendChild(mainButtons)
        menu.appendChild(sideButtons)
        return menu
    }
 }



