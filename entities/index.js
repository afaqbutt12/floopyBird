import Matter from 'matter-js'
import React from 'react'
import Birds from '../components/Birds';
import { Dimensions } from 'react-native';
import Floor from '../components/Floor';
import Obstacle from '../components/Ostacals';
import { getPipeSizePosPair, getPipeSizeProps } from '../utils/random';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const entries = (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false })
  engine.gravity.y = 0.4;
  let world = engine.world


  const pipeSizePosA = getPipeSizePosPair()
    const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.9)
  return{
    physics: { engine, world },
    Bird: Birds(world, 'green', { x: 50, y: 300 }, { height: 40, width: 40 }),

    ObstacleTop1: Obstacle(world, 'ObstacleTop1', 'red', pipeSizePosA.pipeTop.pos, pipeSizePosB.pipeTop.size),
    ObstacleBottom1: Obstacle(world, 'ObstacleBottom1', 'bule', pipeSizePosA.pipeBottom.pos, pipeSizePosB.pipeBottom.size),

    ObstacleTop2: Obstacle(world, 'ObstacleTop2', 'red', pipeSizePosA.pipeTop.pos, pipeSizePosB.pipeTop.size),
    ObstacleBottom2: Obstacle(world, 'ObstacleBottom2', 'bule', pipeSizePosA.pipeBottom.pos, pipeSizePosB.pipeBottom.size),

    Floor: Floor(world, 'green', { x: windowHeight/2, y: windowHeight }, { height: 50, width: windowHeight }),



  }
}
export default entries