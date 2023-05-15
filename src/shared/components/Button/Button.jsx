import { Btn } from '../Button/Button.styled';

const Button = ({
  title,
  styled,
  type,
  margin,
  onSubmit,
  onClick,
  children,
}) => {
  return (
    <Btn
      className={styled}
      onSubmit={onSubmit}
      type={type}
      style={{ margin: margin }}
    >
      {title}

      {children}
    </Btn>
  );
};

export default Button;

// "styled" =  назва потрібної кнопки
// "title" =  текст потрібної кнопки
// "type" =  тип потрібної кнопки
// "margin" = відступи потрібної кнопки

// НАЗВИ
// add - "додати" кругла на mobile і овальна на desktop і tablet
// learnMore - біла овальна
// learnMore blue - синя овальна під svg лапка
// filter - кнопка фільтр під svg
// like - кругла кнопка під svg сердечко

// приклад використання:
// learnMore - біла овальна <Button styled="learnMore"/>
// learnMore blue - синя овальна під svg лапка <Button styled="learnMore blue"/>

// Для створення кастомних кнопок імпортуємо Button в файл styled
// Приклад:
// export const Btn = styled(Button)'';
