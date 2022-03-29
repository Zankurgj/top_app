import { Htag } from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";
import { P } from "../components/P/P";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h2">Lorem, ipsum.</Htag>
      <Button appearance="primary" arrow="right" >кнопка1</Button>
      <Button appearance="ghost" arrow="down" className="aslkjdkjsa">
        кнопка
      </Button>
      <P size="l" className="jopa">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nemo soluta hic asperiores necessitatibus dignissimos quia ex architecto assumenda veniam.</P>
    </>
  );
}
