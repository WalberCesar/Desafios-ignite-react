import { IPost } from "../../pages/Home";
import { dateFormatter } from "../../utils/formatter";
import { Container } from "./index.style";
type Props = {
  item: IPost;
};
export function Post({ item }: Props) {
  return (
    <Container to={`/Issues/${item.number}`}>
      <div>
        <strong>{item.title}</strong>
        <span>{dateFormatter(item.created_at)}</span>
      </div>

      <p>{item.body}</p>
    </Container>
  );
}
