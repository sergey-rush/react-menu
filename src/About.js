import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="block">
  This text is within a <strong>block</strong>.
</div>
<div className="block">
  This text is within a <strong>second block</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
</div>
<div className="block">
  This text is within a <strong>third block</strong>. This block has no margin at the bottom.
</div>
            </div>

        );
    }
}