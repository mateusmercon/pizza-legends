class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.context = this.canvas.getContext("2d");
    }

    init() {

        const map = new Image();
        map.src = "images/maps/DemoLower.png"
        map.onload = () => {
            this.context.drawImage(map, 0, 0)
        }
        
        const x = 5;
        const y = 6;
        
        const hero = new Image();
        hero.src = "images/characters/people/hero.png"
        hero.onload = () => {
            this.context.drawImage(
                hero,
                0,
                0,
                32,
                32,
                x * 16 - 8,
                y * 16 - 16,
                32,
                32
            )
        }

        const sahdow = new Image();
        sahdow.src = "images/characters/shadow.png"
        sahdow.onload = () => {
            this.context.drawImage(
                sahdow,
                0,
                0,
                32,
                32,
                x * 16 - 8,
                y * 16 - 16,
                32,
                32
            )
        }

    }
}