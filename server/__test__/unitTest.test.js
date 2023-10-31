import { newTeacher, getTeachers } from "../controllers/teachers.controllers";
import { loginUser } from "../controllers/users.controllers";
//Pruebas para obtener la lista de profesores


// Verify token and return list of teachers
    it('should return list of teachers when valid token is provided', async () => {
        const req = {
          token: 'validToken'
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        };
        const user = {
          type: 'teacher'
        };
        jest.spyOn(jwt, 'verify').mockImplementation((token, secret, callback) => {
          callback(null, user);
        });
        jest.spyOn(User, 'find').mockResolvedValue([user]);
    
        await getTeachers(req, res);
    
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith([user]);
      });

    // Return empty list if no teachers found
    it('should return empty list when no teachers are found', async () => {
        const req = {
          token: 'validToken'
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        };
        jest.spyOn(jwt, 'verify').mockImplementation((token, secret, callback) => {
          callback(null, {});
        });
        jest.spyOn(User, 'find').mockResolvedValue([]);
    
        await getTeachers(req, res);
    
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith([]);
      });


    // Return 401 if token is invalid
    it('should return 401 status code when invalid token is provided', async () => {
        const req = {
          token: 'invalidToken'
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        };
        jest.spyOn(jwt, 'verify').mockImplementation((token, secret, callback) => {
          callback('Invalid token');
        });
    
        await getTeachers(req, res);
    
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.send).toHaveBeenCalledWith('Token Inválido');
      });

    // Remove 'propiedad' property from each teacher object
    it('should remove \'propiedad\' property from each teacher object', async () => {
        const req = {
          token: 'validToken'
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        };
        const teacher1 = {
          type: 'teacher',
          propiedad: 'value1'
        };
        const teacher2 = {
          type: 'teacher',
          propiedad: 'value2'
        };
        jest.spyOn(jwt, 'verify').mockImplementation((token, secret, callback) => {
          callback(null, {});
        });
        jest.spyOn(User, 'find').mockResolvedValue([teacher1, teacher2]);
    
        await getTeachers(req, res);
    
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith([{ type: 'teacher' }, { type: 'teacher' }]);
      });

//Pruebas para loguear un usuario
    // Successfully finds user with matching email and password, generates and sends JWT token
    it('should generate and send JWT token when user is found with matching email and password', () => {
        // Mock req and res objects
        const req = { body: { email: 'test@example.com', pass: 'password' } };
        const res = { send: jest.fn() };
  
        // Mock User.find() method
        User.find = jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockResolvedValueOnce([{ _id: '123', type: 'user', ced: '1234567890', password: bcrypt.hashSync('password', 10) }])
        });
  
        // Call the loginUser function
        loginUser(req, res);
  
        // Verify that the JWT token is generated and sent in the response
        expect(res.send).toHaveBeenCalledWith({ id: '123', type: 'user', ced: '1234567890', token: expect.any(String) });
      });

          // Successfully finds user with matching email and password, returns user id, type, ced and token
    it('should return user id, type, ced and token when user is found with matching email and password', () => {
        // Mock req and res objects
        const req = { body: { email: 'test@example.com', pass: 'password' } };
        const res = { send: jest.fn() };
  
        // Mock User.find() method
        User.find = jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockResolvedValueOnce([{ _id: '123', type: 'user', ced: '1234567890', password: bcrypt.hashSync('password', 10) }])
        });
  
        // Call the loginUser function
        loginUser(req, res);
  
        // Verify that the user id, type, ced, and token are returned in the response
        expect(res.send).toHaveBeenCalledWith({ id: '123', type: 'user', ced: '1234567890', token: expect.any(String) });
      });

          // No user found with matching email, returns 500 error
    it('should return 500 error when no user is found with matching email', () => {
        // Mock req and res objects
        const req = { body: { email: 'test@example.com', pass: 'password' } };
        const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
  
        // Mock User.find() method
        User.find = jest.fn().mockReturnValueOnce({
          exec: jest.fn().mockResolvedValueOnce([])
        });
  
        // Call the loginUser function
        loginUser(req, res);
  
        // Verify that a 500 error is returned
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalled();
      });

//Pruebas para registrar usuario
    // Successfully creates a new teacher with valid input
    it('should create a new teacher when valid input is provided', async () => {
        const req = {
          body: {
            ced: "123456789",
            password: "password123",
            // add other required fields here
          }
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        };
    
        await newTeacher(req, res);
    
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.send).toHaveBeenCalledWith(expect.any(String));
      });
    // Hashes the password before saving to the database
    it('should hash the password before saving to the database', async () => {
        const req = {
          body: {
            ced: "123456789",
            password: "password123",
            // add other required fields here
          }
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        };
    
        await newTeacher(req, res);
    
        expect(User.prototype.save).toHaveBeenCalled();
        expect(User.prototype.save.mock.calls[0][0].password).not.toBe("password123");
      });