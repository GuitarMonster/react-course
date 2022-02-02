import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

import { useRef } from "react";

export default function NewMeetupForm(props) {
  const titleInput = useRef();
  const imageInput = useRef();
  const addressInput = useRef();
  const descriptionInput = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const data = {
      title: titleInput.current.value,
      image: imageInput.current.value,
      address: addressInput.current.value,
      description: descriptionInput.current.value,
    };

    props.onAddNew(data);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required ref={titleInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" id="image" required ref={imageInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required ref={addressInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea rows="5" id="description" required ref={descriptionInput} />
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
