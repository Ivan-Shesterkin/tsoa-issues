
import {
    Body,
    Controller,

    Post,
    Route,
    SuccessResponse,
} from "tsoa";
import {User} from "./user";
import {UsersService, } from "./user.service";

@Route("users")
export class UsersController extends Controller {

    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public async createUser(
        @Body() requestBody: User
    ): Promise<User> {
        this.setStatus(201); // set return status 201
        return new UsersService().create(requestBody);

    }
}
