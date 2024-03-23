import { JsonObject } from ".";


type Address = {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

export class Todo {
  id: string;
  title: string;
  description: string;
  address: Address;

  constructor(json: JsonObject) {
    this.id = json.id as string;
    this.title = json.title as string;
    this.description = json.description as string;
    this.address = json.address as Address;
  }

  getAddressString(): string {
    const addressComponents = [this.address.street, this.address.city, this.address.state, this.address.zipcode];
    return addressComponents.filter(Boolean).join(', ');
  }
}