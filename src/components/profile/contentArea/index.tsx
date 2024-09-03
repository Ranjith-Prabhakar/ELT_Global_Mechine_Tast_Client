import Navbar from './navbar';
import Content from './content';

type Props = {}

const ContentArea = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Content />
    </div>
  );
}

export default ContentArea;