import { Tag, P, Htag, Button, Rating  } from "../components";
import { useEffect, useState } from "react";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from 'axios';
import { MenuItem } from "../intefaces/menu.interface";

function Home({menu}:HomeProps): JSX.Element {
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
      <ul>
        {menu.map(m =>(<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory
    });
    return {
        props: {
          menu,
          firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}