import { Button, CircleProgress, UndoIcon } from './styles';

type Props = {
  countdown: number;
  onCancel: () => void;
};

export const UndoButton = ({ countdown, onCancel }: Props) => {
  return (
    countdown > 0 && (
      <Button onClick={onCancel}>
        <CircleProgress>{countdown}</CircleProgress>
        Desfazer
        <UndoIcon />
      </Button>
    )
  );
};
