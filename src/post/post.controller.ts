import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiProperty } from '@nestjs/swagger';
const db = require('../../models')

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
  async index() {
    const data = await db.Articles.findAll({
      include: [
        {
          model: db.Categories,
          attributes: ['id', 'name'],
        },
        {
          model: db.User,
          attributes: ['id', 'nickname', 'avatar', 'gender'],
        },
        {
          model: db.Comments,
          attributes: ['id', 'content', 'userId', 'createdAt', 'updatedAt'],
          include: [
            {
              model: db.User,
              attributes: ['id', 'nickname', 'avatar', 'gender'],
            },
          ],
        },
      ],
      order: [['updatedAt', 'DESC']],
    })
    return {
      code: 200,
      data,
      msg: 'success'
    }
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
