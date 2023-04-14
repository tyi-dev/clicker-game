function getUsers(){
    return axios.get('http://localhost:3000/users')
}
function postUsers(){

}
class Battle{
    enemyHP = {
        hp: 0
    }
    constructor(user) {
        this.user = user
    }

    resetEnemyHP(){
        this.enemyHP.hp = this.user.stage * 25 + this.user.lvl * 5
    }

    goToNewLevel(){
        this.user.lvl += 1
        if (this.user.lvl > 5){
            alert('Stage complete! You are rewarded with Level Up Point! Progress saved!')
            this.user.upgradePoints += 1
            this.user.lvl = 1
            this.user.stage += 1
            getUsers().then((response) => {
                let users = response.data
                for(let i = 0; i < users.length; i++){
                    if(this.user.id === users[i].id){
                        users[i] = this.user
                        axios.post('http://localhost:3000/users', users)
                    }
                }
            }, (error) => {
                console.log(error)
            });
        }
        this.resetEnemyHP()
        const enemyHPCounter = document.getElementById("enemyHPCounter")
        enemyHPCounter.innerHTML = `HP: ${this.enemyHP.hp}`
        const totalDMGCounter = document.getElementById("totalDMGCounter")
        totalDMGCounter.innerHTML = `Total damage: ${this.user.totalDMGDealt}`
        const enemyButton = document.getElementById("enemyHitButton")
        enemyButton.innerHTML = `<img src = "../../images/enemiesSkinPacks/${this.user.skinPack}/LVL${this.user.lvl}.svg" alt = "enemy">`
    }

    onEnemyClick(){
        this.user.totalDMGDealt += this.user.damagePerClick
        if(this.enemyHP.hp - this.user.damagePerClick * 2<= 0){
            this.goToNewLevel()
        }else{
            const enemyHPCounter = document.getElementById("enemyHPCounter")
            this.enemyHP.hp -= this.user.damagePerClick
            enemyHPCounter.innerHTML = `HP: ${this.enemyHP.hp - this.user.damagePerClick}`
            const totalDMGCounter = document.getElementById("totalDMGCounter")
            totalDMGCounter.innerHTML = `Total Damage: ${this.user.totalDMGDealt}`
        }
    }

    render(){
        const enemyHolder = document.createElement("div")
        const enemyHPCounter = document.createElement("div")
        const totalDMGCounter = document.createElement("div")
        const statsHolder = document.createElement("div")
        statsHolder.setAttribute("class", "statsHolder")
        enemyHPCounter.setAttribute("id", "enemyHPCounter")
        totalDMGCounter.setAttribute("id", "totalDMGCounter")
        totalDMGCounter.innerHTML = `Total Damage: ${this.user.totalDMGDealt}`
        this.resetEnemyHP()
        enemyHPCounter.innerHTML = `HP: ${this.enemyHP.hp}`
        const enemyButton = document.createElement("button")
        enemyButton.setAttribute("class", "button-86 enemyButton")
        enemyButton.setAttribute("id", "enemyHitButton")
        enemyButton.innerHTML = `<img src = "../../images/enemiesSkinPacks/${this.user.skinPack}/LVL${this.user.lvl}.svg" alt = "enemy">`
        enemyButton.onclick = () => this.onEnemyClick()
        statsHolder.appendChild(totalDMGCounter)
        statsHolder.appendChild(enemyHPCounter)
        enemyHolder.appendChild(statsHolder)
        enemyHolder.appendChild(enemyButton)
        return enemyHolder
    }
}