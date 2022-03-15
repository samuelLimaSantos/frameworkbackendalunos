"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
class User {
    constructor(name, email, password) {
        this.password = password;
        this.name = name;
        this.email = email;
        this.password = password;
        this.hashPassword();
    }
    getPassword() {
        return this.password;
    }
    hashPassword() {
        this.password = bcrypt_1.default.hashSync(this.password, 5);
    }
}
const jose = {
    name: 'Jose',
    email: 'jose@email.com',
    birthday: new Date()
};
