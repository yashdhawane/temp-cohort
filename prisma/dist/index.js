"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/**
 * Creates a new user in the database.
 * @param username - The unique username for the user.
 * @param password - The user's password.
 * @param firstName - The user's first name.
 * @param lastName - The user's last name.
 * @returns The created user object.
 */
function createUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield prisma.user.create({
                data: {
                    username,
                    password,
                    firstName,
                    lastName,
                },
            });
            return user;
        }
        catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
// Example usage:
(() => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield createUser('john_doe', 'securepassword123', 'John', 'Doe');
    console.log('User created:', newUser);
}))();
