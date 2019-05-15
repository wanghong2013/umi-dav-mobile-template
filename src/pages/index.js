import Link from 'umi/link';
import { Button, Flex, } from "antd-mobile";
const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);
export default function () {
  return (
    <div className="g-wrapper">
      <Link to="/users"></Link>
      <Button>按钮3</Button>
      <Flex>
        <Flex.Item><PlaceHolder /></Flex.Item>
        <Flex.Item><PlaceHolder /></Flex.Item>
      </Flex>
    </div>
  );
}

