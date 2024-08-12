 
        const heroes = [
            { name: "Hero 1", picture: "https://via.placeholder.com/150?text=Hero+1", baseValue: 10 },
            { name: "Hero 2", picture: "https://via.placeholder.com/150?text=Hero+2", baseValue: 15 }
        ];

        const weapons = [
            { name: "Weapon 1", value: 5 },
            { name: "Weapon 2", value: 7 },
            { name: "Weapon 3", value: 6 },
            { name: "Weapon 4", value: 8 },
            { name: "Weapon 5", value: 9 },
            { name: "Weapon 6", value: 4 },
            { name: "Weapon 7", value: 3 },
            { name: "Weapon 8", value: 10 }
        ];

        function startBattle() {
            const userHeroIndex = document.getElementById("heroSelect").value;
            const userWeaponIndex = document.getElementById("weaponSelect").value;
            
            const userHero = heroes[userHeroIndex];
            const userWeapon = weapons[userWeaponIndex];

           
            const opponentHeroIndex = Math.floor(Math.random() * heroes.length);
            const opponentWeaponIndex = Math.floor(Math.random() * weapons.length);

            const opponentHero = heroes[opponentHeroIndex];
            const opponentWeapon = weapons[opponentWeaponIndex];

            const userPower = userHero.baseValue + userWeapon.value;
            const opponentPower = opponentHero.baseValue + opponentWeapon.value;

            const heroImages = document.getElementById("heroImages");
            heroImages.innerHTML = `
                <div class="hero" id="userHero">
                    <h2>${userHero.name}</h2>
                    <img id="userHeroImage" src="${userHero.picture}" alt="${userHero.name}">
                    <p>Weapon: ${userWeapon.name}</p>
                </div>
                <div class="hero" id="opponentHero">
                    <h2>${opponentHero.name}</h2>
                    <img id="opponentHeroImage" src="${opponentHero.picture}" alt="${opponentHero.name}">
                    <p>Weapon: ${opponentWeapon.name}</p>
                </div>
            `;

        
            document.getElementById("userHeroImage").classList.add("hit");
            document.getElementById("opponentHeroImage").classList.add("hit");

            setTimeout(() => {
                document.getElementById("userHeroImage").classList.remove("hit");
                document.getElementById("opponentHeroImage").classList.remove("hit");

                let result;
                if (userPower > opponentPower) {
                    result = `
                        <h2 class="winner">You won!</h2>
                        <p>${userHero.name} defeated ${opponentHero.name}.</p>
                    `;
                } else if (userPower < opponentPower) {
                    result = `
                        <h2 class="loser">You lost!</h2>
                        <p>${opponentHero.name} defeated ${userHero.name}.</p>
                    `;
                } else {
                    result = `
                        <h2>It's a tie!</h2>
                        <p>${userHero.name} and ${opponentHero.name} have equal power.</p>
                    `;
                }

          
                document.getElementById("result").innerHTML = `
                    <p>Your Hero: ${userHero.name} with ${userWeapon.name} (Power: ${userPower})</p>
                    <p>Opponent Hero: ${opponentHero.name} with ${opponentWeapon.name} (Power: ${opponentPower})</p>
                    ${result}
                `;
            }, 500); 
        }
   