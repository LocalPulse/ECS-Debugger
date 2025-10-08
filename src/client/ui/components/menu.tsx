import React from "@rbxts/react";

interface Props {

}

export function app(props: Props) {
	return <frame
  key={"Frame"}
  BackgroundColor3={Color3.fromRGB(255, 255, 255)}
  BorderColor3={Color3.fromRGB(0, 0, 0)}
  BorderSizePixel={0}
  Size={UDim2.fromOffset(678, 565)}
/>
}