import { ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
    Trrrrrr
    </ChildAsFC>
};

export default Parent;