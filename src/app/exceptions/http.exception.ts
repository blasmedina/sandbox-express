export class HttpException extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = this.constructor.name.replace(/(Exception)$/, '').concat('Error');
    this.status = status;
    this.message = message;
  }
}
