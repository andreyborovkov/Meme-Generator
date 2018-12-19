import React, { Component } from 'react';

class MemePreview extends Component {
      render() {
        const {selectedImageURL} = this.props;
        return (
            <div>
                MemePreview
                <img src={selectedImageURL} />
            </div>
        );
    }
}

export default MemePreview;