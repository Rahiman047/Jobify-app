const register = async (req,res) =>{
    res.send('register User')
}

const login = async (req,res) =>{
    res.send('login User')
}

const updateUser = async (req,res) =>{
    res.send('Update User')
}

export {register,login,updateUser}