import React from 'react';
import './Audio.css';
import loop from './loop-arrows.svg';
import sound0 from './assets/sounds/enavantnousautre.mp4';
import sound1 from './assets/sounds/jvaistarracherlefoie.mp4';
import sound2 from './assets/sounds/arretetesconneries.mp4';
import sound3 from './assets/sounds/jesuisunebete.mp4';
import sound4 from './assets/sounds/jtecasselatete.mp4';
import sound5 from './assets/sounds/jyvoispasbeau.mp4';
import sound6 from './assets/sounds/laviandedanslestorchons.mp4';
import sound7 from './assets/sounds/leblond.mp4';
import sound8 from './assets/sounds/mabite.mp4';
import sound9 from './assets/sounds/personnenemaime.mp4';
import sound10 from './assets/sounds/pleinlcul.mp4';
import sound11 from './assets/sounds/ramenelaugealameme.mp4';
import sound12 from './assets/sounds/ramenervosauges.mp4';
import sound13 from './assets/sounds/uneheure.mp4';
import sound14 from './assets/sounds/vindiouvousmefaitechier.mp4';
import sound15 from './assets/sounds/vousmefaiteschier.mp4';



class AudioComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = "";
    this.urls = [
      {sample:sound0, label:"En avant..."}, 
      {sample:sound1, label:"...Le foie"},
      {sample:sound2, label:"...Conneries"},  
      {sample:sound3, label:"...Bête"},
      {sample:sound4, label:"...Tête"},
      {sample:sound5, label:"...Pas beau"},
      {sample:sound6, label:"...Torchons"},
      {sample:sound7, label:"...Blond"},
      {sample:sound8, label:"...Bite"},
      {sample:sound9, label:"Personne..."},
      {sample:sound10, label:"...Cul"},
      {sample:sound11, label:"...Mémé"},
      {sample:sound12, label:"...Auges"},
      {sample:sound13, label:"...heure"},
      {sample:sound14, label:"vindiou...chier"},
      {sample:sound15, label:"...chier"},
      ];


  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  player(elt) {
    // const audio = new Audio(src);
    // let promise = audio.play();

    let promise = elt.querySelector('audio').play();

    if(promise !== undefined) {
      promise.then(_ => {
      
        // Automatic playback started!
        // Show playing UI.
        
      })
      .catch(error => {
        console.log(error.message);
        // Auto-play was prevented
        // Show paused UI.
      }); 
    }
  }

  handleChange(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    
    
    if(e.target.nodeName !== "LI")return;
    this.player(e.target);
  }

  render() {
  
    let itemsList = this.urls.map(function(item, index){
      return <li key={index} className="AudioComponent" data-label={item.label}><span>{item.label}</span>
            <img src={loop} alt=""/>
        <audio src={item.sample} id={index}></audio>
      </li>
    });
    return (
      <div>
        <ul onClick={this.handleChange.bind(this)} className="items">{itemsList}</ul>
      </div>
    );
  } 
}

export default AudioComponent;