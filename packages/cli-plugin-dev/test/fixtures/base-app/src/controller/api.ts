import {
  Controller,
  Post,
  Get,
  Provide,
  Inject,
  Query,
  Body,
  HttpCode,
  Redirect,
  Config
} from '@midwayjs/decorator';
import { UserService } from '../service/user';

@Provide()
@Controller('/')
export class APIController {
  @Inject()
  ctx: any;

  @Inject()
  userService: UserService;

  @Config()
  watchKey: string;

  @Config()
  unWatchKey: string;

  @Post()
  async postData(@Body('bbbbb') bbbb) {
    return 'data';
  }

  @Get('/', { middleware: [] })
  @HttpCode(201)
  async home(@Query('name') name: string) {
    return 'hello world,' + name;
  }

  @Get('/testWatch')
  @HttpCode(201)
  async testWatch() {
    return this.watchKey;
  }

  @Get('/tesUnWatch')
  @HttpCode(201)
  async tesUnWatch() {
    return this.unWatchKey;
  }

  @Get('/login')
  @Redirect('/')
  async redirect() {
  }

}
