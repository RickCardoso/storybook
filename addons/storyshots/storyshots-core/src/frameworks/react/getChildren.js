// eslint-disable-next-line import/no-extraneous-dependencies
import shallow from 'react-test-renderer/shallow';

export default element => {
  const renderer = shallow.createRenderer();
  renderer.render(element);
  return renderer.getRenderOutput();
};
