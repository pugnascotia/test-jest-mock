import React from 'react';

const Widget = ({ name = 'default' }) => <div>
  Hello, I am a { name } widget.
</div>;

export default Widget;
