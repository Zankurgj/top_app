import { Htag } from "../components/Htag/Htag";
import { Button } from "../components/Button/Button";
import { P } from "../components/P/P";
import { Tag } from "../components/Tag/Tag";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [state, setState] = useState(0);
  
  return (
    <>
      <Htag tag="h2">{state}</Htag>
      <Button appearance="primary" arrow="right" onClick={()=> setState(x => x+1)}>кнопка1</Button>
      <Button appearance="ghost" arrow="down" className="aslkjdkjsa">
        кнопка
      </Button>
      <P size="l" className="jopa">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nemo soluta hic asperiores necessitatibus dignissimos quia ex architecto assumenda veniam.
      </P>
      <Tag color="red" href="sadksd">Ghost</Tag>
    </>
  );
}
