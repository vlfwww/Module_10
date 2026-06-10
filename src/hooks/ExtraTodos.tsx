import { useTranslation } from "react-i18next";
import { useExtraTodos } from ".";
import { Todo } from "../types/notes";

interface ExtraTodosValues {
  data: Todo[];
  isLoading: boolean;
}

const ExtraTodos: React.FC = () => {
  const { data, isLoading }: ExtraTodosValues = useExtraTodos();
  console.log(data);
  const { t } = useTranslation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 data-testid="main-message">{t("extra_todos.message")}</h1>
      {data.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};
export default ExtraTodos;
