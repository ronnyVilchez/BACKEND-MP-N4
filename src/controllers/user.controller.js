import { User } from "../models/Users.js"

export const userInfo = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.userId(id)
        if (user.length === 0) return res.status(404).json({ message: 'Usuario no encontrado' })

        res.json(user[0])

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createNewUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) return res.status(500).json({ message: 'Falta ingresar datos' })

        const newUser = await User.createUser(email, password)

        if (newUser.affectedRows === 1) return res.status(200).json({ message: 'Usuario creado con exito' })

        return res.status(500).json({ message: 'Hubo un error interno al crear el usuario' })




    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const editNewUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, biography, phone, email, password, photo } = req.body

        if (!email) return res.status(500).json({ message: 'El email o password no pueden estar vacios' })

        const newUser = await User.editUser(id, name, biography, phone, email, password, photo)

        if (newUser.affectedRows === 1) return res.status(200).json({ message: 'Usuario editado con exito' })

        return res.status(500).json({ message: 'Hubo un error interno al editar el usuario' })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}