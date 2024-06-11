'use server';
import { connectToDatabase } from '@/database/db';
import User from '@/models/user';

//Hàm Add User vào db
export const AddUser = async ({ firstName, lastName, email, address }) => {
  await connectToDatabase();
  try {
    if (!firstName || !lastName || !email || !address) {
      return { error: 'Please fill in all fields', status: 400 };
    }

    const newUser = new User({ firstName, lastName, email, address });
    if (newUser) {
      await newUser.save();
      return { message: 'User added successfully', status: 201 };
    } else {
      return { error: 'User already exists', status: 400 };
    }
  } catch (error) {
    console.log(error);
    return { error: 'An error occurred', status: 500 };
  }
};

//Hàm lấy danh sách User từ db
export const DisplayUsers = async () => {
  await connectToDatabase();
  try {
    const users = await User.find();
    if (users) {
      return { data: users, status: 200 };
    } else {
      return { error: 'No users found', status: 404 };
    }
  } catch (error) {
    console.log(error);
    return { error: 'An error occurred', status: 500 };
  }
};
