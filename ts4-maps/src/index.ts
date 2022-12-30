import { Company } from './Company';
import { User } from './User';
import { CustomMap } from './CustomMap';


const user = new User();
const company = new Company();

console.log(user);
console.log(company);

const mapElement: HTMLElement = document.getElementById('map') as HTMLElement;
const customMap = new CustomMap("map");

console.log(customMap);

customMap.addMarker(user);
customMap.addMarker(company)

