        function Monster(){
            this.bite=function(monstername){
                if(this==catmonster){
                    console.log(this.name+ this.typeofdamage + monstername +'. Текущий уровень здоровя '+monstername+ ' равен '+
                        (birdmonster.currenthp=birdmonster.currenthp-this.sizeofdamage) );
                }
                else{
                    console.log(this.name+ this.typeofdamage + monstername +'. Текущий уровень здоровя '+monstername+ ' равен '+
                         (catmonster.currenthp=catmonster.currenthp-this.sizeofdamage) );
                }
            }
            this.sayName=function(){
                alert(this.name);
            }
        }
        var monster=new Monster();

        function Catmonster(name){
            this.name=name;
            this.starthp=50;
            this.currenthp=50;
            this.typeofdamage=' царапать ';
            this.sizeofdamage=5;
        }
        Catmonster.prototype=monster;
        var catmonster=new Catmonster('Cat');
        console.log(catmonster);

        function Birdmonster(name){
            this.name=name;
            this.starthp=60;
            this.currenthp=60;
            this.typeofdamage=' клевать ';
            this.sizeofdamage=3;
        }
        Birdmonster.prototype=monster;
        var birdmonster=new Birdmonster('Bird');
        console.log(birdmonster);
        catmonster.bite(birdmonster.name);
        catmonster.bite(birdmonster.name);
        catmonster.bite(birdmonster.name);
        console.log(birdmonster);
        birdmonster.bite(catmonster.name);
        console.log(catmonster);