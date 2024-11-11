import { IsDefined, IsInt, IsISBN, IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsISBN()
  isbn: string;

  @IsInt()
  publishYear: number;
}
