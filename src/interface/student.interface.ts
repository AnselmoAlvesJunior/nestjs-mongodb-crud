import { Document } from 'mongoose';
export interface IStudent extends Document {
  readonly _id: string;
  readonly name: string;
  readonly roleNumber: number;
  readonly class: number;
  readonly gender: string;
  readonly marks: number;
  readonly __v: number;
}
