class Wardrobe{
    constructor(user) {
        this.user = user
    }

    onSkinPackClick(packName){
        this.user.skinPack = packName
        const battle = new Battle(this.user)
        let contentPage = document.getElementById("content")
        contentPage.innerHTML = ""
        contentPage.appendChild(battle.render())
    }

    render() {
        const packs = document.createElement("div")
        const defaultPack = document.createElement("button")
        defaultPack.setAttribute("class", "button-86")
        const defaultPackName = "default"
        defaultPack.innerHTML = `<img src = "../../images/enemiesSkinPacks/${defaultPackName}/LVL5.svg" alt = "enemy" width="200" height="200">`
        defaultPack.onclick = () => this.onSkinPackClick(defaultPackName)


        const monsterPack = document.createElement("button")
        const monstersPackName = "monsters"
        monsterPack.setAttribute("class", "button-86")
        monsterPack.innerHTML = `<img src = "../../images/enemiesSkinPacks/${monstersPackName}/LVL5.svg" alt = "enemy" width="200" height="200">`
        monsterPack.onclick = () => this.onSkinPackClick(monstersPackName)
        packs.appendChild(defaultPack)
        packs.appendChild(monsterPack)

        return packs
    }
}