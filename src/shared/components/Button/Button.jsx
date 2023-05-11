import React from "react";
import { Btn } from "../Button/Button.styled";

const Button = ({ title, styled, type, margin, onSubmit, onClick }) => {
  return (
    <Btn
      className={styled}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      style={{ margin: margin }}
    >
      {title}
    </Btn>
  );
};

export default Button;

// "styled" =  назва потрібної кнопки
// "title" =  текст потрібної кнопки
// "type" =  тип потрібної кнопки
// "margin" = відступи потрібної кнопки

// НАЗВИ
// add - кругла "додати"
