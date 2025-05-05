const app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view);

const graphics = new PIXI.Graphics();
graphics.beginFill(0xff0000);
graphics.drawRect(100, 100, 200, 150);
graphics.endFill();
app.stage.addChild(graphics);
