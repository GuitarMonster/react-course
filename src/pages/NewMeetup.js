import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetupPage() {
  const navigate = useNavigate();

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
      navigate('/');
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