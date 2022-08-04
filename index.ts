import { Invoice, Payment } from "./classImplementsInterface";
import { hasPrint } from "./interfaceForClass";

const documentOne: hasPrint = new Invoice("Vinamilk", "drink milk", 50000);
const documentTwo: hasPrint = new Payment("Vietnam Airline", "fly", 25000000);

const allDocuments: hasPrint[] = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwo);

console.log(allDocuments);
