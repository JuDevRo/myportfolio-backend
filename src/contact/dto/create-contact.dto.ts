import { IsNotEmpty } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  subject: string;

  @IsNotEmpty()
  description: string;
}
