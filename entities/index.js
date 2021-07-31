import Matter from "matter-js";

export default (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false })

  let world = engine.world;

  world = engine.world;

  world.gravity.y = 0.4;

  return {
    physics: {engine, world}
    
  }
}
