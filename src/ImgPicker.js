import React, {Component} from 'react';

class ImgPicker extends Component {
    render() {
      const {selectImage} = this.props
      return (
        <div className="ImgPicker">
            <img id={1} src="./images/Sad.jpg"  onClick={selectImage} />            
            <img id={2} src="./images/Angry.jpg" onClick={selectImage} />
            <img id={3} src="./images/Funny.jpg" onClick={selectImage} />  
        </div>
      );
    }
  }
  
  export default ImgPicker;


