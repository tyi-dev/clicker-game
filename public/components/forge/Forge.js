class Forge{
    constructor(user){
        this.currentUser = user
    }
    upgradeDMG(){
        this.currentUser.upgradePoints -= 1
        this.currentUser.damagePerClick += 1
        const damageNumber = document.getElementById("damageNumberHolder")
        damageNumber.innerHTML = `<strong>${this.currentUser.damagePerClick}</strong>`
        const availableLVLUPPointsHolder = document.getElementById("availableLVLUPPointsHolder")
        availableLVLUPPointsHolder.innerHTML = `<strong>${this.currentUser.upgradePoints}</strong>`
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
        damageStatsCounter.setAttribute("class", "damageStats")
        const damageUpgradeButton = document.createElement('button');
        damageUpgradeButton.setAttribute("class", "button-86")
        damageUpgradeButton.setAttribute("id", "upgradeButton")
        if(this.currentUser.upgradePoints <= 0){
            damageUpgradeButton.setAttribute("disabled", true)
        }
        damageUpgradeButton.onclick = () => this.upgradeDMG(this.currentUser);
        damageUpgradeButton.innerHTML = `<span><img src = "../../images/layoutDetails/DMGUpgrade.svg" alt = "arrowUp"></span>`
        const damageNumberDiv = document.createElement("div")
        damageNumberDiv.innerHTML = `<span>Current damage: </span>`
        const pointsAvailableHolder = document.createElement("div")
        pointsAvailableHolder.innerHTML = `<span>Upgrade points: </span>`
        const damageNumberHolder = document.createElement("span")
        damageNumberHolder.setAttribute("id", "damageNumberHolder")
        damageNumberHolder.innerHTML = `<strong>${this.currentUser.damagePerClick}</strong>`
        const availableLVLUPPointsHolder = document.createElement("span")
        availableLVLUPPointsHolder.setAttribute("id", "availableLVLUPPointsHolder")
        availableLVLUPPointsHolder.innerHTML = `<strong>${this.currentUser.upgradePoints}</strong>`
        damageStatsCounter.appendChild(availableLVLUPPointsHolder)
        pointsAvailableHolder.appendChild(availableLVLUPPointsHolder)
        damageNumberDiv.appendChild(damageNumberHolder)
        damageStatsCounter.appendChild(damageNumberDiv)
        damageStatsCounter.appendChild(pointsAvailableHolder)
        damageStatsCounter.appendChild(damageUpgradeButton)


        forge.appendChild(damageStatsCounter)

        return forge
    }
}