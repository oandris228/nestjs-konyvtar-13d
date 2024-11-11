import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const book = this.booksService.findOne(+id);
    if (!book) throw new NotFoundException('No book with ID ' + id);

    return book;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    const book = await this.booksService.update(+id, updateBookDto);
    if (!book) throw new NotFoundException('No book with ID ' + id);

    return book;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    const success = this.booksService.remove(+id);
    if (!success) {
      throw new NotFoundException('No book with ID ' + id);
    }
  }
}
