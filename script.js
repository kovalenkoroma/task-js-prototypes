        function Monster(){
            this.bite = function(monster){
                monster.currentHp -= this.sizeOfDamage;
                damage.call(this,monster);
            }
            this.getName = function(){
                console.log("Меня зовут " + this.name);
                return this.name;
            }
        }
        var monster = new Monster();

        function Catmonster(name){
            this.name = name;
            this.startHp = 50;
            this.currentHp = this.startHp;
            this.typeOfDamage = 'царапать';
            this.sizeOfDamage = 5;
        }
        Catmonster.prototype = monster;
        var catMonster = new Catmonster('Cat');

        function Birdmonster(name){
            this.name = name;
            this.startHp = 60;
            this.currentHp = this.startHp;
            this.typeOfDamage = 'клевать';
            this.sizeOfDamage = 3;
        }
        Birdmonster.prototype = monster;
        var birdMonster = new Birdmonster('Bird');

        function damage(objectOfDamage)
        {
            console.log(this.name + ' ' + this.typeOfDamage +' '+ objectOfDamage.name + " и нанес " + this.sizeOfDamage + "ед. урона. " + "Здоровье " + objectOfDamage.name +" равно " + objectOfDamage.currentHp );
        }

       /*демонстрация работы*/

        console.log(catMonster);
        console.log(birdMonster);

        catMonster.getName();
        birdMonster.getName();

        catMonster.bite(birdMonster);
        catMonster.bite(birdMonster);
        console.log(birdMonster);

        birdMonster.bite(catMonster);
        console.log(catMonster);