import { Controller, Get, Post } from '@nestjs/common';

@Controller('post')
export class PostController {
  @Get()
  index() {
    return []
  }

  @Post()
  create() {
    return {
      msg: 'success'
    }
  }

  @Get(':id')
  detail() {
    return {
      id: 1,
      title:'123'
    }
  }

}
