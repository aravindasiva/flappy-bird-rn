import Matter from "matter-js";
import { getPipeSizePosPair } from "./utils/random";
import { Dimensions } from "react-native"

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const Physics = (entities, {touches, time, dispatch}) => {
    let engine = entities.physics.engine

    touches.filter(touch => touch.type === 'press')
        .forEach(touch => { 
            Matter.Body.setVelocity(entities.Bird.body, {
                x: 0,
                y: -6
            })
        })

    Matter.Engine.update(engine, time.delta)

    for (let index = 1; index <= 2; index++) {
        
        if (entities[`ObstacleTop${index}`].body.bounds.max.x <= 50 && !entities[`ObstacleTop${index}`].point){
            entities[`ObstacleTop${index}`].point = true
            dispatch({type: 'new_point'})
        }

        if (entities[`ObstacleTop${index}`].body.bounds.max.x <= 0){
            entities[`ObstacleTop${index}`].point = false

            const pipeSizPos = getPipeSizePosPair(windowWidth * 0.9)   
            
            Matter.Body.setPosition(entities[`ObstacleTop${index}`].body, pipeSizPos.pipeTop.pos)
            Matter.Body.setPosition(entities[`ObstacleBottom${index}`].body, pipeSizPos.pipeBottom.pos)    
    
        }

        Matter.Body.translate(entities[`ObstacleTop${index}`].body, {x: -3, y:0})
        Matter.Body.translate(entities[`ObstacleBottom${index}`].body, {x: -3, y:0})    
    }

    Matter.Events.on(engine, 'collisionStart', (event) => {
        dispatch({type: 'game_over'})
    })

    return entities;
}
export default Physics