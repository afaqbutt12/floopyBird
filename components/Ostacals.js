import Matter from "matter-js";
import React from "react";
import { View } from "react-native";

const Obstacle = ( world, label, color, position, size ) => {
  const initialOstacalsShape = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    { label, isStatic:true}, 
  );
  Matter.World.add(world, initialOstacalsShape);
  return{
    body: initialOstacalsShape,
    color,
    label,
    position,
    renderer:<OstacalsShape/>
  };
};

export default Obstacle;
const OstacalsShape = (props) => {

  const bodyWidth = props.body.bounds.max.x - props.body.bounds.min.x;
  const bodyHeight = props.body.bounds.max.y - props.body.bounds.min.y;
// console.log(body);
  const xBody = props.body.position.x - bodyWidth / 2;
  const yBody = props.body.position.y - bodyHeight / 2;
  if (isNaN(xBody) || isNaN(yBody) || isNaN(bodyWidth) || isNaN(bodyHeight)) {
    return <View />;
  }
//   console.log(body.bounds.max.x,body.bounds.max.y);
  return (
    <View
      style={{
        borderColor: props.color,
        borderStyle: "solid",
        borderWidth: 1,
        position: "absolute",
        left: xBody,
        top: yBody,
        width: bodyWidth,
        height: bodyHeight,
      }}
    />
  );
};
