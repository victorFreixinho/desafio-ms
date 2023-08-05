import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  @Min(1)
  id: number;
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsNumber()
  @Min(1)
  age: number;
  @IsBoolean()
  active: boolean;
  @IsDateString()
  createdAt: Date;
}
