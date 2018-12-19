import React, { Component } from 'react';
import ImgPicker from './ImgPicker';
import MemePreview from './MemePreview';
import TextInputs from './TextInputs';



class MemeEditor extends Component {
    
    constructor(){
        super();
        this.state = {
          currentText:'',
          selectedImageURL:''
        };
      }

      setTopText = (e) => {
        const newValue = e.target.value;
        this.setState({currentTopText: newValue})
      }

      selectImage = (e) => {
        const selectedImageURL = e.target.src;
        this.setState({selectedImageURL: selectedImageURL});
        console.log(selectedImageURL);
      }
      
      
    render() {
        const {currentText, selectedImageURL} = this.state;

            return (
                <div>
                    <ImgPicker selectImage={this.selectImage}/>
                    <MemePreview selectedImageURL={selectedImageURL} />
                    <TextInputs />
                </div>
            );
        }
}

export default MemeEditor;