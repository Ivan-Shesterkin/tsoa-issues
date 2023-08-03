// src/users/usersService.ts
import {User} from "./user";

export class UsersService {

    public create(userCreationParams: User): User {
        return {
            nickname: userCreationParams.nickname,
            clanName: userCreationParams.clanName
        };
    }
}
