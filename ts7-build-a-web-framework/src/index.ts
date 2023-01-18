import { User } from "./models/User";
import { UserForm } from './views/UserForm';




const collection = User.buildUserCollection();
const user = User.buildUser({ name: "NAME1", age: 20 });


const root = document.getElementById('root');

if (root) {
  const userForm = new UserForm(root as Element, user);
  userForm.render();
} else {
  throw new Error('Root element not found');
}


