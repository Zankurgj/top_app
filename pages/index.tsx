import { Htag } from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h2">Lorem, ipsum.</Htag>
      <Button appearance="primary" arrow="right" >кнопка1</Button>
      <Button appearance="ghost" arrow="down" className="aslkjdkjsa">
        кнопка
      </Button>
    </>
  );
}
