class Shape {
    constructor(){
        this.color = "";
        this.text = "";
        this.textColor = "";
    }
    setColor(color){
        this.color = color;
    }
     
    setText(text){
        this.text = text;
    }

    setTextColor(textColor){
        this.textColor = textColor;
    }
}
class Circle extends Shape {
    render(){
        return`<svg width="100" height="100" viewBox="0 0 100 100">
    <!-- Circle -->
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="4" fill="${this.color}" />
    
    <!-- Text Element -->
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="12px" fill="${this.textColor}">${this.text}</text>
</svg>
`
    }
}
class Square extends Shape {
    render(){
        return`<svg width="100" height="100" viewBox="0 0 100 100">
    <!-- Square -->
    <rect x="10" y="10" width="80" height="80" stroke="black" stroke-width="4" fill="${this.color}" />
    
    <!-- Text Element -->
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="12px" fill="${this.textColor}">${this.text}</text>
</svg>
`
    }
}
 
class Triangle extends Shape {
    render(){
        return`<svg width="100" height="100" viewBox="0 0 100 100">
    <!-- Triangle -->
    <polygon points="50,10 90,90 10,90" fill="${this.color}" stroke="black" stroke-width="4"/>
    
    <!-- Text Element -->
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="12px" fill="${this.textColor}">${this.text}</text>
</svg>
`
    }
}


module.exports = {Circle,Square,Triangle}