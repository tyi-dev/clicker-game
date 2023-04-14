class Forge{
    constructor(user){
        this.currentUser = user
    }
    upgradeDMG(){
        this.currentUser.upgradePoints -= 1
        this.currentUser.damagePerClick += 1
        const damageNumber = document.getElementById("damageNumberHolder")
        damageNumber.innerHTML = this.currentUser.damagePerClick
        if(this.currentUser.upgradePoints <= 0){
            const upgradeButton = document.getElementById("upgradeButton")
            upgradeButton.setAttribute("disabled", true)
        }
    }
    render(){
        const forge = document.createElement("div")
        const damageStatsCounter = document.createElement("div")
        damageStatsCounter.setAttribute("class", "damageStats")
        const DMGImage = document.createElement("img")
        DMGImage.setAttribute("src", "../../images/layoutDetails/forgeDMG.svg")
        damageStatsCounter.innerHTML = `
            <img src = "../../images/layoutDetails/forgeDMG.svg" alt = "dmgIcon">
            <span>Damage per click upgrade!</span>
        `
        const damageUpgradeButton = document.createElement('button');
        damageUpgradeButton.setAttribute("id", "upgradeButton")
        if(this.currentUser.upgradePoints <= 0){
            damageUpgradeButton.setAttribute("disabled", true)
        }
        damageUpgradeButton.onclick = () => this.upgradeDMG(this.currentUser);
        damageUpgradeButton.innerHTML = `<span><img src = "../../images/layoutDetails/DMGUpgrade.svg" alt = "arrowUp"></span>`
        const damageNumberDiv = document.createElement("div")
        damageNumberDiv.innerHTML = `<span>Current damage: </span>`
        const damageNumberHolder = document.createElement("span")
        damageNumberHolder.setAttribute("id", "damageNumberHolder")
        damageNumberHolder.innerHTML = this.currentUser.damagePerClick
        damageNumberDiv.appendChild(damageNumberHolder)
        damageStatsCounter.appendChild(damageUpgradeButton)
        forge.appendChild(damageStatsCounter)
        forge.appendChild(damageNumberDiv)
        return forge
    }
}