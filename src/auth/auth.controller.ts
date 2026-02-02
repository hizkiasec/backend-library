import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // ===== REGISTER =====
  @Post('register')
  @ApiOperation({ summary: 'Registrasi user baru (ADMIN / PETUGAS / MEMBER)' })
  register(@Body() dto: any) {
    return this.authService.register(dto);
  }

  // ===== LOGIN =====
  @Post('login')
  @ApiOperation({ summary: 'Login user dan menghasilkan JWT token' })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto.username, dto.password);
  }
}
