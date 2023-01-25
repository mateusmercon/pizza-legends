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
        
        const hero = new GameObject({
            x: 5,
            y: 6,
        });
        const npc1 = new GameObject({
            x: 7,
            y: 9,
            src: "images/characters/people/npc1.png"
        })

        hero.sprite.draw(this.context);
        npc1.sprite.draw(this.context);


    }
}