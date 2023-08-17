import {useParams} from "react-router-dom";
export const Contact = () =>{
    const {contactId} = useParams();
    return (
        <div>Contact showing with id {contactId}</div>
    )
}