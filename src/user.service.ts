import { PrsimaService } from './prisma.service';
import { Injectable } from '@nestjs/common';
import { user, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrsimaService) {}

  async user(
    userWhereUniqueInput: Prisma.userWhereInput,
  ): Promise<user | null> {
    return this.prisma.user.findUnique({
      where?: userWhereUniqueInput,
    });
  }
}
