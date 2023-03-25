import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title: string; 

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsOptional()
    @MinLength(15)
    description: string;

    @IsOptional()
    @MinLength(15)
    slug: string;

    @IsOptional()
    @IsNumber()
    stock: number;

    @IsOptional()
    @MinLength(15)
    gender: string;

}