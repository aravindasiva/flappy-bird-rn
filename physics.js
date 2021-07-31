import Matter from "matter-js";

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
    
    return entities;
}
export default Physics