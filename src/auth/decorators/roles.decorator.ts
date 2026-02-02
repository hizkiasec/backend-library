import { SetMetadata } from '@nestjs/common';
import { user_role as UserRole } from '@prisma/client';

export const Roles = (...roles: UserRole[]) =>
  SetMetadata('roles', roles);
