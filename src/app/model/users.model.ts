export class Users{
    public Id:string;
    public Name:string;
    public UserName:string;
    public Email:string;
    public Phone:string;
    public Website:string;
    constructor(id:string,name:string,userName:string,email:string,phone:string,website:string){
        this.Id=id;
        this.Name=name;
        this.UserName=userName;
        this.Email=email;
        this.Phone=phone;
        this.Website=website;
    }
}
