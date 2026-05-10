import { Controller, Post, Body, BadRequestException, ConflictException } from '@nestjs/common';
import   bcrypt from 'bcryptjs';
import  jwt from 'jsonwebtoken';
import oracledb from 'oracledb';

@Controller('auth')
export class AuthController {

  @Post('register')
  async register(@Body() body: any) {
    const { name, email, password, location, school, courses, program, year } = body;

    let connection;
    try {
      connection = await oracledb.getConnection();

    
      const existingUser = await connection.execute(
        `SELECT * FROM users WHERE email = :email`,
        [email]
      );

      if (existingUser.rows && existingUser.rows.length > 0) {
        throw new ConflictException('User already exists');
      }

      
      const hashedPassword = await bcrypt.hash(password, 10);

  
      await connection.execute(
        `INSERT INTO users (name, email, password, location, school, courses, program, year) 
         VALUES (:name, :email, :password, :location, :school, :courses, :program, :year)`,
        {
          name,
          email,
          password: hashedPassword,
          location,
          school,
          courses: Array.isArray(courses)? courses.join(',') : courses,
          program,
          year
        },
        { autoCommit: true }
      );

      return { message: 'User registered successfully' };

    } catch (error) {
      if (error instanceof ConflictException) throw error;
      throw new BadRequestException('Registration failed');
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }

  @Post('login')
  async login(@Body() body: any) {
    const { email, password } = body;
    let connection;
    try {
      connection = await oracledb.getConnection();

      const result = await connection.execute(
        `SELECT * FROM users WHERE email = :email`,
        [email]
      );

      if (!result.rows || result.rows.length === 0) {
        throw new BadRequestException('Invalid credentials');
      }

      const user = result.rows[0];
      const isMatch = await bcrypt.compare(password, user[2]); // assuming password is 3rd column

      if (!isMatch) {
        throw new BadRequestException('Invalid credentials');
      }

      const secret = process.env.JWT_SECRET;
if (!secret) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

const token = jwt.sign(
  { id: user.ID, email: user.EMAIL },
  secret,
  { expiresIn: '7d' }
);


      return { token };

    } finally {
      if (connection) await connection.close();
    }
  }
}