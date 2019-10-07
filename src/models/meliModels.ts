import * as mongoose from 'mongoose'
Object.defineProperty(exports, "__esModule", { value: true });
const Schema = mongoose.Schema

export const AuthSchema = new Schema({
    access_token: { type: String },
    expires_in: { type: Number },
    refresh_token: { type: String },
    scope: { type: String },
    token_type: { type: String },
    user_id: { type: Number },
});
//# sourceMappingURL=meliModels.js.map