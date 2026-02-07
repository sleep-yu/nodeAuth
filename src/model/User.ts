import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  username: string;
  nickname?: string;
  password: string;
  sex: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: [true, '邮箱不能为空'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (v: string) {
        //  邮箱格式验证
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: '邮箱格式不正确'
    }
  },
  username: {
    type: String,
    required: [true, '用户名不能为空'],
    unique: true,
    trim: true,
    validate: {
      validator: function (v: string) {
        return v.length >= 2 && v.length <= 45;
      },
      message: '用户名长度必须是2~45之间'
    }
  },
  nickname: {
    type: String,
    trim: true,
    validate: {
      validator: function (v: string) {
        return v.length >= 2 && v.length <= 45;
      },
      message: '昵称长度必须是2~45之间'
    }
  },
  password: {
    type: String,
    required: [true, '密码不能为空'],
  },
  sex: {
    type: Number,
    default: 2,
    enum: {
      values: [0, 1, 2],
      message: '性别必须是: 0-男 1-女 2-未选择'
    }
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function (doc, ret: any) {
      delete ret.password;
      delete ret.__v;
      return ret
    }
  },
})

export default mongoose.model<IUser>('User', UserSchema);