import React from "react";
import { boxes } from "./Working.constants";

interface WorkingBoxProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Box = ({ children, title, description }: WorkingBoxProps) => {
  return (
    <div>
      {children}
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export const Working = () => {
  return (
    <div>
      <h1>How it works?</h1>
      <div>
        {boxes.map((box) => (
          <Box key={crypto.randomUUID()} {...box}>
            {" "}
            {box.icon}{" "}
          </Box>
        ))}
      </div>
    </div>
  );
};
