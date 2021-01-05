import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiProperty } from '@nestjs/swagger';


class CreatePostDto {
  @ApiProperty({
    description: '帖子标题'
  })
  title: string
  @ApiProperty({
    description: '帖子内容'
  })
  content: string
}

class UpdatePostDto {
  @ApiProperty({
    description: '帖子id'
  })
  id: string
  @ApiProperty({
    description: '帖子标题'
  })
  title: string
  @ApiProperty({
    description: '帖子内容'
  })
  content: string
}

class ByIdPostDto {
  @ApiProperty({
    description: '帖子id'
  })
  id: string
}

@Controller('post')
@ApiTags('帖子')
export class PostController {
  @Get()
  @ApiOperation({
    summary: '显示帖子列表'
  })
  index() {
    return []
  }

  @Post()
  @ApiOperation({
    summary: '创建帖子'
  })
  create(@Body() body: CreatePostDto) {

    return {
      msg: 'success',
      data: body
    }
  }

  @Get('detail')
  @ApiOperation({ summary: '帖子详情' })
  detail(@Query('id') id: string) {
    return {
      id,
      title: '123'
    }
  }


  @Put('update')
  @ApiOperation({ summary: '编辑帖子' })
  update(@Body() body: UpdatePostDto) {
    return {
      msg: 'success',
      data: body
    }
  }

  @Delete('remove')
  @ApiOperation({
    summary: '删除帖子'
  })
  remove(@Body() body: ByIdPostDto) {
    return {
      body,
      msg: 'success'
    }
  }

}
