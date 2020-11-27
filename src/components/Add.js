import React, { useState } from "react";
import { hot } from "react-hot-loader";
import axios from "axios";

function Add( {setDisplayAdd} ) {
  // TODO : update initial state later when user info is saved to state at login
  const [ inputs, setInputs ] = useState({user_id: 1});

  async function addNewSite() {
    await axios.post("/campsites", inputs);

    // TODO : add to campsites state
  };

  return (
    <div className="add-container">

      <div className="new-input-container">
        <label for="camp name">Camp Name*:</label>
        <input
          type="text"
          className="new-input"
          name="name"
          placeholder="Konashidaira"
          onInput={e => setInputs({...inputs, name: e.target.value})}
          required
        />
      </div>

      <div className="new-input-container">
        <label for="image">Address:</label>
        <input
          type="text"
          className="new-input"
          name="address"
          placeholder="Kamikochi, Nagano, Japan 390-1516"
          onInput={e => setInputs({...inputs, address: e.target.value})}
        />
      </div>

      <div className="new-input-container">
        <label for="image">Image:</label>
        <input
          type="text"
          className="new-input"
          name="image"
          placeholder="www.image-url.com"
          onInput={e => setInputs({...inputs, url_to_image: e.target.value})}
        />
      </div>

      <div className="new-input-container">
        <label for="website">Website:</label>
        <input
          type="text"
          className="new-input"
          name="website"
          placeholder="www.nihonalpskankou.com"
          onInput={e => setInputs({...inputs, website: e.target.value})}
        />
      </div>

      <div className="new-input-container">
        <label for="description">Description:</label>
        <input
          type="text"
          className="new-input"
          name="description"
          placeholder="Great for mountain-lovers!"
          onInput={e => setInputs({...inputs, description: e.target.value})}
        />
      </div>

      <div className="new-input-container new-submit">
        <button className="submit-new-buttom" onClick={addNewSite}>Submit</button>
        <button className="cancel-button" onClick={() => setDisplayAdd(false)}>
          Cancel
        </button>
      </div>

    </div>
  );
}

export default hot(module)(Add);
