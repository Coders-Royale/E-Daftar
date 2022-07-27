import { IsArray, IsDateString, IsString } from "class-validator";

export class CreateIronToken {
    @IsString()
    id: string
    @IsString()
    role: string
}

export class LoginInput {
    @IsString()
    email: string
    @IsString()
    password: string
    @IsString()
    role: string
}

export class CreateAdminInput {
    @IsString()
    name: string
    @IsString()
    gender: string
    @IsDate()
    dob: Date
    @IsString()
    address: string;
    @IsString()
    department: string;
    @IsString()
    password: string;
}

export class CreateEmployeeInput extends CreateAdminInput { };

export class CreateDocumentInput {
    @IsString()
    employeeId: string
    @IsString()
    employee_name: string;
    @IsString()
    subject: string
    @IsString()
    description: string
    @IsArray()
    main_file: string[]
    @IsArray()
    reference_file: string[]
    @IsString()
    forwarding_dept: string
    @IsString()
    category: string
}

export class CreateRoomInput {

}