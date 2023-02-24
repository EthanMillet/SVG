
class square {
    constructor() {}
    render(){
        return this.shape = 'rect x="100" y="100" width="100" height="100"';
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
       return this.text = 'text x="75" y="90" font-size="60" text-anchor="middle"'
    }
}

module.exports = square;