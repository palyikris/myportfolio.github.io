import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom';

function NewMeetupsPage(){

    const history = useHistory()

    function addMeetupHandler(meetupData){
        fetch(
            'https://learningreact-d7dcd-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(() => {
            history.replace('/');
        })

    }


    return(
        <section>
            <h1>Add new Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
        </section>
    )
}

export default NewMeetupsPage;