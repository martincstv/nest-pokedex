import { IsInt, IsPositive, IsString, Min, min, MinLength } from "class-validator";

export class CreatePokemonDto {

    // isInt, isPositive, min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    // isString, Minlenght 1
    @IsString()
    @MinLength(1)
    name: string;

}
