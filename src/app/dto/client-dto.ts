export class ClientDTO{
    id: string;
    sharedKey: string;
    businessId: string;
    email: string;
    phone: string;
    dateAdded: Date;

    constructor(id: string, sharedKey: string, businessId: string, 
        email: string, phone: string, dateAdded: Date) {
            this.id = id;
            this.sharedKey = sharedKey;
            this.businessId = businessId;
            this.email = email;
            this.phone = phone;
            this.dateAdded = dateAdded;
        }
}