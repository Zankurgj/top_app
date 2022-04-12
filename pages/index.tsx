import { Tag, P, Htag, Button, Rating  } from "../components";
import { useEffect, useState } from "react";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [state, setState] = useState(0);
  const [rating, setRating] = useState(4);
  
  useEffect(()=> {
    
  })

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
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </>
  );
}

export default withLayout(Home);