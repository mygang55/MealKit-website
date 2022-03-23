//jshint esversion:6
class Product
{
    fakeDB = [];

    constructor()
    {
        this.fakeDB.push({ 
            title: "Tender Beef",
            description: "Tender Beef with Mac'n Cheese",
            price: "$10.76",
            imgPath:"beef.jpg",
            featured: true
        });

        this.fakeDB.push({ 
            title: "Cheese Steak",
            description: "Keto Cheese Steak",
            price: "$10.76",
            imgPath: "steak.jpg",
            featured: true
        });

        this.fakeDB.push({ 
            title: "Curry Salmon",
            description: "Coconut Curry Salmon",
            price: "$11.95",
            imgPath: "currySalmon.jpg",
            featured: true
        });


        this.fakeDB.push({ 
            title: "Mealball Pasta",
            description: "Tomato sauce mealball pasta",
            price: "$10.65",
            imgPath: "meatballPasta.jpg",
            featured: true
        });

        this.fakeDB.push({ 
            title: "Gluten Free",
            description: "A gluten-free package",
            price: "$109.00",
            numberOfmeal: "11 meals",
            imgPath: "glutenFree.jpg",
            featured: false
        });

        this.fakeDB.push({ 
            title: "Muscle Gain",
            description: "Higher protein and calories",
            price: "$127.76",
            numberOfmeal: "11 meals",
            imgPath: "muscleGain.jpg",
            featured: false
        });

        this.fakeDB.push({ 
            title: "Vegan",
            description: "A fully plant-based package",
            price: "$99.76",
            numberOfmeal: "11 meals",
            imgPath: "vegan.jpg",
            featured: false
        });

        this.fakeDB.push({ 
            title: "Weight Loss",
            description: "Low calories package",
            price: "$110.76",
            numberOfmeal: "11 meals",
            imgPath: "weightLoss.jpg",
            featured: false
        });


    }

    getPackagedMeal()
    {
        const pack=[];
        this.fakeDB.forEach(element =>{
            if(element.featured==false)
            {
                pack.push(element);
            }        
        });

        return pack;
    }


    getTopMeal()
    {
        const top4=[];
        //loop through the fakeDB
        this.fakeDB.forEach(element =>{
            if(element.featured)
                top4.push(element);            
        });
        return top4;
    }
}

//export class 


module.exports = Product;