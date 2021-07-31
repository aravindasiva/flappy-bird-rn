import Matter from "matter-js";
import Bird from "../components/Bird";

export default (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false })

  let world = engine.world;

  world = engine.world;

  world.gravity.y = 0.4;

  return {
    physics: {engine, world},
    Bird: Bird(world, 'green', {x: 50, y: 300}, {height: 40, width:40})
  }
}
