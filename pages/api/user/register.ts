import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';
import { jwt, validations } from '../../../utils';

type Data = 
|{ message: string }
|{ 
    token: string;
    user: {
        email: string;
        name: string;
        role: string;
    }
 }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'POST':
            return registerUser(req,res)
    
        default:
            return res.status(400).json({message: 'Bad request'})
    }

}

const registerUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const {email= '', password= '', name=''} = req.body as {email: string, password: string, name: string};
    

    if(password.length < 6) {
        return res.status(400).json({message: 'La contraseña debe ser mayor a 6 caracteres'})
    }

    if(name.length < 2) {
        return res.status(400).json({message: 'El nombre debe ser mayor a 2 caracteres'})
    }

    
    if(!validations.isValidEmail(email)){
        return res.status(400).json({message: 'El correo no es válido'})
    }
    
    await db.connect();
    const user = await User.findOne({email})

    //101 is the wrong email and 102 is the same with password
    if(user){
        await db.disconnect();
        return res.status(400).json({message: 'Ese correo ya está registrado'})
    }

    const newUser = new User({
        email: email.toLocaleLowerCase(),
        password: bcrypt.hashSync(password),
        role: 'client',
        name,
    })

    try {
        await newUser.save({validateBeforeSave: true})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Check logs in server'})
    }
    
    const {_id, role} = newUser

    const token = jwt.signToken(_id, email);

    return res.status(200).json({
        token,
        user:{
            email, role, name
        }
    })
}
