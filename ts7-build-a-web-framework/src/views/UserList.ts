import { CollectionView } from "../../CollectionView";
import { UserProps } from "../interfaces/UserProps";
import { User } from "../models/User";
import { UserShow } from "./UserShow";


export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}