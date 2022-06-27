function Animal(){   

    this.name = name;

    var self = this;

    var foodAmount = 50;   

    function formatFoodAmount() {        
        return foodAmount + ' гр';
    }

    this.dailyNorm = function (amount){
        if(!arguments.length) return formatFoodAmount();

        if(amount<30||amount>100){
            throw new Error('столько корма насыпать нельзя')
        }
            foodAmount = amount;
    }

    this.feed = function() {    
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };

}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;
    this.feed = function(){    
        animalFeed();
        this.happyCat();
        return this;
    }

    this.happyCat = function(){
        console.log('кот доволен ^_^')
    }

    this.stroke = function(){
        console.log('Гладим кота');
        return this;
    }
}


var barsik = new Cat('Барсик');

console.log(barsik.dailyNorm(75));

barsik.stroke().feed().stroke();