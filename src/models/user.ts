export class User {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string
  ) {}
}

export class UserDetail {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public email: string,
    public avatar: string
  ) {}
}

export class UserForChange {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public email: string
  ) {}
}
