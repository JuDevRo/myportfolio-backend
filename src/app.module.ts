import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { MongooseModule } from '@nestjs/mongoose/dist';

//const URI =
//'mongodb://root:root@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
const URI =
  'mongodb+srv://JuDevRo:123789@myportfolio.jnluw4e.mongodb.net/?retryWrites=true&w=majority';

@Module({
  imports: [MongooseModule.forRoot(URI), ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
