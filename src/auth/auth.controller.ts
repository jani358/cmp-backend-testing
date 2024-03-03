
import { AuthService } from './auth.service';  
import { Controller, Post, Body } from "@nestjs/common";  

@Controller('auth')  // Define a controller with the base route 'auth'
export class AuthController {
  constructor(private authService: AuthService) {}  // Constructor to inject AuthService into the controller

  @Post('signup')  // POST endpoint at 'auth/signup'
  singUp(@Body('id') id: string) {  
    return this.authService.login(id);  // Call the AuthService's login method with the 'id'
  }

  @Post('signin')  // POST endpoint at 'auth/signin'
  signin() {  // Handler for the 'signin' endpoint
    return this.authService.signUp();  
}
