import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

    id?:string;
    
    @Prop({unique:true, required: true})
    email:string;

    @Prop({required: true})
    name: string;
    
    @Prop({minlength: 6, required: true})
    password?:string;
    
    @Prop({default: true})
    isActive:boolean;
    @Prop({type: [String], default: ['user']})
    role:string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
