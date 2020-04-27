import { Controller } from '@nestjs/common'
import { User } from './user.entity'
import { ApiTags } from '@nestjs/swagger'
import { Crud, CrudController } from '@nestjsx/crud'
import { UsersService } from './users.service'
@Crud({
  model: {
    type: User
  }
  // dto: {
  //   create: GoodDTO,
  //   update: GoodDTO,
  // },
  //表示查询外键
  // query: {
  //   join: {
  //     application: { eager: true },
  //   },
  // },
})
@ApiTags('用户')
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}
