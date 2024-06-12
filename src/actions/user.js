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

//Hàm chỉnh sửa thông tin User
export const EditUser = async ({ firstName, lastName, email, address }) => {
  await connectToDatabase();

  try {
    //Kiểm tra xem các trường thông tin có được điền đầy đủ không
    if (!firstName || !lastName || !email || !address) {
      return { error: 'Please fill in all fields', status: 400 };
    }

    //Tìm User theo email
    const user = await User.findOne({ email });

    //Nếu User tồn tại thì cập nhật thông tin
    if (user) {
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.address = address;

      await user.save();
      return { message: 'User updated successfully', status: 200 };
    } else {
      //Nếu User không tồn tại thì trả về thông báo lỗi
      return { error: 'User not found', status: 404 };
    }
  } catch (error) {
    console.log(error);
    return { error: 'An error occurred', status: 500 };
  }
};

//Hàm xóa User
export const DeleteUser = async (email) => {
  await connectToDatabase();

  try {
    //Kiểm tra xem email có được điền không
    if (!email) return { error: 'Please fill in all fields', status: 400 };

    //Tìm User theo email
    const user = await User.findOne({ email });

    //Nếu User tồn tại thì xóa User
    if (user) {
      await User.deleteOne({ email });
      return { message: 'User deleted successfully', status: 200 };
    } else {
      //Nếu User không tồn tại thì trả về thông báo lỗi
      return { error: 'User not found', status: 404 };
    }
  } catch (error) {
    console.log(error);
    return { error: 'An error occurred', status: 500 };
  }
};
