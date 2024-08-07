import Matter from "matter-js";
import React from "react";
import { View } from "react-native";

const Floor = ( world, color, position, size ) => {
  const initialFloorShape = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    { label: "Floor", isStatic:true }
  );
  Matter.World.add(world, initialFloorShape);
  return{
    body: initialFloorShape,
    color,
    position,
    renderer:<FloorShape/>
  };
};

export default Floor;

const FloorShape = (props) => {

  const bodyWidth = props.body.bounds.max.x - props.body.bounds.min.x;
  const bodyHeight = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - bodyWidth / 2;
  const yBody = props.body.position.y - bodyHeight / 2;
  if (isNaN(xBody) || isNaN(yBody) || isNaN(bodyWidth) || isNaN(bodyHeight)) {
    return <View />;
  }
//   console.log(body.bounds.max.x,body.bounds.max.y);
  return (
    <View
      style={{
        backgroundColor: props.color,
        position: "absolute",
        left: xBody,
        top: yBody,
        width: bodyWidth,
        height: bodyHeight,
      }}
    />
  );
};
