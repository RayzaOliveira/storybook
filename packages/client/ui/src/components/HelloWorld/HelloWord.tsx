import React from 'react';

import { Button } from 'theme-ui';

const HelloWorld = () => {
  return (
    <div>
      <Button type="button" onClick={() => alert('Welcome 🙋‍♀️')}>
        <h3>Hello World 🚀</h3>
      </Button>
    </div>
  );
};

export default HelloWorld;
