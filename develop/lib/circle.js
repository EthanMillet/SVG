class circle {
    constructor() {}
    render(){
        return this.shape = 'circle cx="150" cy="100" r="80"';
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
       return this.text = 'text x="150" y="125" font-size="60" text-anchor="middle"'
    }
}

module.exports = circle;