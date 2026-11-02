import mongoose, { Document, Schema } from "mongoose";

export interface IExample extends Document {
  title: string;
  description?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const exampleSchema: Schema = new Schema<IExample>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Example = mongoose.model<IExample>("Example", exampleSchema);
