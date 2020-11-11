import React from "react";
import { hot } from "react-hot-loader";

function Add( {setDisplayAdd} ) {
  return (
    <div className="add-container">

      <div className="new-input-container">
        <label for="camp name">Camp Name*:</label>
        <input
          type="text"
          className="new-input"
          name="name"
          placeholder="Konashidaira"
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
        />
      </div>

      <div className="new-input-container">
        <label for="image">Image:</label>
        <input
          type="text"
          className="new-input"
          name="image"
          placeholder="www.image-url.com"
        />
      </div>

      <div className="new-input-container">
        <label for="website">Website:</label>
        <input
          type="text"
          className="new-input"
          name="website"
          placeholder="www.nihonalpskankou.com"
        />
      </div>

      <div className="new-input-container">
        <label for="description">Description:</label>
        <input
          type="text"
          className="new-input"
          name="description"
          placeholder="Great for mountain-lovers!"
        />
      </div>

      <div className="new-input-container new-submit">
        <button className="submit-new-buttom">Submit</button>
        <button className="cancel-button" onClick={() => setDisplayAdd(false)}>
          Cancel
        </button>
      </div>

    </div>
  );
}

export default hot(module)(Add);
