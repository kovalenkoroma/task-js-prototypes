        function Monster(){
            this.bite=function(monster){
                monster.currenthp -= this.sizeofdamage;
            }
            this.getName=function(){
                console.log(this.name);
                return this.name;
            }
        }
        var monster = new Monster();

        function Catmonster(name){
            this.name=name;
            this.starthp=50;
            this.currenthp=this.starthp;
            this.typeofdamage='царапать';
            this.sizeofdamage=5;
        }
        Catmonster.prototype= monster;

        var catmonster=new Catmonster('Cat');
        function Birdmonster(name){
            this.name=name;
            this.starthp=60;
            this.currenthp=this.starthp;
            this.typeofdamage='клевать';
            this.sizeofdamage=3;
        }
        Birdmonster.prototype= monster;
        var birdmonster=new Birdmonster('Bird');

        console.log(catmonster);
        console.log(birdmonster);

        catmonster.getName();
        birdmonster.getName();

        catmonster.bite(birdmonster);
        console.log(catmonster.name + ' ' + catmonster.typeofdamage +' '+ birdmonster.name);
        console.log(birdmonster);
        catmonster.bite(birdmonster);
        console.log(catmonster.name + ' ' + catmonster.typeofdamage +' '+ birdmonster.name);
        console.log(birdmonster);
        birdmonster.bite(catmonster);
        console.log(birdmonster.name + ' ' + birdmonster.typeofdamage +' '+ catmonster.name);
        console.log(catmonster);
