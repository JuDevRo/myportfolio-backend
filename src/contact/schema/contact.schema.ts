import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContactDocument = HydratedDocument<Contact>;

@Schema()
export class Contact {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  subject: string;

  @Prop()
  description: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
