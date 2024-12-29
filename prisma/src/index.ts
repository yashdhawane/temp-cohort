import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Creates a new user in the database.
 * @param username - The unique username for the user.
 * @param password - The user's password.
 * @param firstName - The user's first name.
 * @param lastName - The user's last name.
 * @returns The created user object.
 */
async function createUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  try {
    const user = await prisma.user.create({
      data: {
        username,
        password,
        firstName,
        lastName,
      },
    });
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Example usage:
(async () => {
  const newUser = await createUser(
    'john_doe',
    'securepassword123',
    'John',
    'Doe'
  );
  console.log('User created:', newUser);
})();
