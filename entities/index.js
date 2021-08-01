import Matter from "matter-js";
import Bird from "../components/Bird";
import Floor from "../components/Floor";

import { Dimensions } from "react-native";
import Obstacle from "../components/Obstacle";
import { getPipeSizePosPair } from "../utils/random";

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width


export default (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false })

  let world = engine.world;

  world = engine.world;

  world.gravity.y = 0.7;

  const getPipeSizePosA = getPipeSizePosPair()
  const getPipeSizePosB = getPipeSizePosPair(windowWidth * 0.9)

  return {
    physics: {engine, world},
    
    ObstacleTop1: Obstacle(world, 'ObstacleTop1', 'red', getPipeSizePosA.pipeTop.pos, getPipeSizePosA.pipeTop.size ),
    ObstacleBottom1: Obstacle(world, 'ObstacleBottom1', 'red', getPipeSizePosA.pipeBottom.pos, getPipeSizePosA.pipeBottom.size ),

    ObstacleTop2: Obstacle(world, 'ObstacleTop2', 'red', getPipeSizePosB.pipeTop.pos, getPipeSizePosB.pipeTop.size ),
    ObstacleBottom2: Obstacle(world, 'ObstacleBottom2', 'red', getPipeSizePosB.pipeBottom.pos, getPipeSizePosB.pipeBottom.size ),

    Floor1: Floor(world, 'Floor', 'green', getPipeSizePosA.floorBottom.pos, getPipeSizePosA.floorBottom.size),

    
    Bird: Bird(world, 'green', {x: 50, y: 300}, {height: 40, width:40})
  }
}
