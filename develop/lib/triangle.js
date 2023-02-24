class triangle {
    constructor() {}
    render(){
        return this.shape = 'polygon points="200,50 300,200 100,200"'
    } 
    setColor(e){
        var color = e;
        return this.color = color;
    }
    setTextColor(e){
        var Textcolor = e;
        return this.Textcolor = Textcolor;
    }
    text(){
       return this.text = 'text x="200" y="170" font-size="55" text-anchor="middle"'
    }
}

module.exports = triangle;