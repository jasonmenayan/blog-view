import React from 'react'

function Tile(props) {
  console.log('tiledata:', props.tiledata);
  let tile = (type => {
    switch(type) {
      case 'text':
        return (
          <div>
            <div className="title">
              {props.tiledata.title}
            </div>
            <div className="bodytext">
              {props.tiledata.body}
            </div>
          </div>
        );
      case 'quote':
        return (
          <div>
            <div className="quote">
              {props.tiledata.text} 
            </div>
            <div className="quotesource" dangerouslySetInnerHTML={{__html: props.tiledata.source}} />
          </div>
        );
      case 'link':
        return (
          <div>
            <div className="image">
              <img src={props.tiledata.photos && props.tiledata.photos.length > 0 && props.tiledata.photos[0].original_size.url} alt="" role="presentation" />
            </div>
            <div className="title">
              <a href={props.tiledata.url}>{props.tiledata.title}</a>
            </div>
            <div className="bodytext">
              {props.tiledata.excerpt}
            </div>
            <div className="linksource">
              {props.tiledata.author}
            </div>
          </div>
        );
      case 'answer':
        return (
          <div>
            <div className="question">
              {props.tiledata.question}
            </div>
            <div className="answer">
              {props.tiledata.answer}
            </div>
          </div>
        );
      case 'video':
        return (
          <div className="video" dangerouslySetInnerHTML={{__html: props.tiledata.player[0].embed_code}} />
        );
      case 'audio':
        return (
          <div>
            <div className="audio" dangerouslySetInnerHTML={{__html: props.tiledata.player}} />
            <div className="audioplaycount">
              {props.tiledata.plays}
            </div>
            <div className="caption">
              {props.tiledata.caption.length > 0 && props.tiledata.caption}
            </div>
          </div>
        );
      case 'photo':
        return (
          <div>
            <div className="image">
              <img src={props.tiledata.photos[0].alt_sizes[0].url} alt={props.tiledata.photos[0].caption} role="presentation" />
            </div>
            <div className="caption">
              {props.tiledata.caption.length > 0 && props.tiledata.caption}
            </div>
          </div>
        );
      case 'chat':
        return (
          <div>
            <div className="chatfirst">
              <span className="firstchatter">{props.tiledata.dialogue[0].label}</span> {props.tiledata.dialogue[0].phrase}
            </div>
            <div className="chatsecond">
              <span className="secondchatter">{props.tiledata.dialogue[1].label}</span> {props.tiledata.dialogue[1].phrase}
            </div>
          </div>
        );
      default:
        return null;
    }
  })(props.tiledata.type);
  return (
    <div className="tile">
  	  {tile}
    </div>
  );
}

export default Tile;