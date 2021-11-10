import { useState } from 'react';
import { Box } from '@chakra-ui/react';
const Tree = ({ data = [] }) => {
  return (
    <Box>
      <Box>
        {data.map(tree => (
          <TreeNode node={tree} />
        ))}
      </Box>
    </Box>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.children ? true : false;

  return (
    <Box>
      <Box onClick={e => setChildVisiblity(v => !v)}>
        <Box>
          {node.label} {hasChild && <span>&#8595;</span>}
        </Box>
      </Box>

      {hasChild && childVisible && (
        <Box>
          <Box ml="2">
            <Tree data={node.children} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Tree;
