class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
    }

    hide() {
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display() {

        var title = createElement('h1');
        title.html("carRacing game");
        title.position(420, 100);

        // var input = createInput("Name");
        // var button = createButton("Play");
        this.input.position(440, 200);
        this.button.position(510, 300);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount += 1;
            player.updateCount(playerCount);

            // var greeting = createElement("h2");
            this.greeting.html("Hello " + player.name);
            this.greeting.position(470, 250);

        })

    }
}