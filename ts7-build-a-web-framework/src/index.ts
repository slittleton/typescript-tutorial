import { User } from "./models/User";
import { UserForm } from './views/UserForm';




const collection = User.buildUserCollection();


const userForm = new UserForm(document.getElementById('root') as Element)

userForm.render()