import { Provider } from "react-redux";
import store from "../redux/store";

export default function ReduxProvider(props: any) {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
}
