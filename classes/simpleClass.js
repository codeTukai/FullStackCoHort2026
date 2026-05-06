class rectangle{
    constructor(height, width, color){
        this.height = height
        this.width = width
        this .color = color
    }

    area(){
        return this.height * this.width
        
        
    }

    paints(){
        return `color is ${this.color}`
    }
}

const rect = new rectangle(2, 3, "red")
const res = rect.area()
console.log(rect.paints());

console.log(res);
