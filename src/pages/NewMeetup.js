import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from 'react';

function NewMeetupPage() {
  const history = useHistory();

  function onAddNew(data) {
    // fetch();  todo learn more about feth
    fetch(
      'https://react-getting-started-b2346-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', 
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/');
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddNew={onAddNew} />
    </section>
  )
}

export default NewMeetupPage;