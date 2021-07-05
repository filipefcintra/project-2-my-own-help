import React from "react";

function NewForm(props) {
  return (
    <form>
      <h1>{props.title}</h1>
      <div className="form-group">
        <label htmlFor="newFormName">Name</label>
        <input
          type="text"
          className="form-control"
          id="newFormName"
          name="name"
          onChange={props.handleChange}
          value={props.state.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="newFormTagline">Tagline</label>
        <input
          type="file"
          name="files"
          id="files"
          onChange={props.handleInputFileChange}
          multiple
        />
      </div>
      <div className="form-group">
        <label htmlFor="NewFormDescription">Description</label>
        <input
          type="text"
          className="form-control"
          id="NewFormDescription"
          name="description"
          onChange={props.handleChange}
          value={props.state.description}
        />
      </div>
      <div className="form-group">
        <label htmlFor="NewFormFirstBrewed">First Brewed</label>
        <input
          type="text"
          className="form-control"
          id="NewFormFirstBrewed"
          name="first_brewed"
          onChange={props.handleChange}
          value={props.state.first_brewed}
        />
      </div>
      <div className="form-group">
        <label htmlFor="NewFormBrewersTips">Brewer's Tips</label>
        <input
          type="text"
          className="form-control"
          id="NewFormBrewersTips"
          name="brewers_tips"
          onChange={props.handleChange}
          value={props.state.brewers_tips}
        />
      </div>
      <div className="form-group">
        <label htmlFor="NewFormAttenuationLevel">Attenuation Level</label>
        <input
          type="number"
          className="form-control"
          id="NewFormAttenuationLevel"
          name="attenuation_level"
          onChange={props.handleChange}
          value={props.state.attenuation_level}
        />
      </div>
      <div className="form-group">
        <label htmlFor="NewFormContributedBy">Contributed By</label>
        <input
          type="text"
          className="form-control"
          id="NewFormContributedBy"
          name="contributed_by"
          onChange={props.handleChange}
          value={props.state.contributed_by}
        />
      </div>
      <button
        onClick={props.handleSubmit}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}

export default NewForm;
