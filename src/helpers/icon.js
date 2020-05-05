import { faTrash, faSignOutAlt, faEdit, faVideoSlash, faEnvelopeOpenText, faSpinner, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
return library.add(faTrash, faSignOutAlt, faEdit, faVideoSlash, faEnvelopeOpenText, faSpinner, faPlusCircle);
};

export default Icons;