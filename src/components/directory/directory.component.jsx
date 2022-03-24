import React from 'react';
import './directory.styles.scss';

import sections from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = { sections };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl }) => (
          <MenuItem key={id} title={title} />
        ))}
      </div>
    );
  }
}

export default Directory;