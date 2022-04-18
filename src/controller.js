// const data = {};

const data = [
    {
      id: 1,
      name: "Levis",
      age: 25,
      lastname: "Ordaya",
      email: "demo@gmail.com",
      password: "123456"
    },
  ];

export const index = (req, res) => {
    res.json({
        data: "test success",
    });
};

export const login = (req, res) => {
    //const email = req.body.email;
    //const password = req.body.password;
    const {email, password} = req.body;

    // req.body.id = data.length + 1;
    // data.push(req.body);

    res.json({
        data: {
            type: "login",
            email,
            password
        }

    });
};

export const signup = (req, res) => {
    const {name, age, lastname} = req.body;

    // req.body.id = data.length + 1;
    // data.push(req.body);

    res.json({
        data: {
            type: "signup",
            name,
            age, 
            lastname
        }
    });
};

export const showuser = (req, res) => {

    const { id } = req.params;

    res.json({
        data: {
            type: "showuser",
            id: "1",
            name: "Levis",
            age: "28",
            lastname: "Rodriguez"
        }
    });
};

export const reset = (req, res) => {
    const {id, email, password} = req.body;

    // req.body.id = data.length + 1;
    // data.push(req.body);

    res.json({
        data: {
            type: "reset",
            id,
            email,
            password
        }
    });
};

export const update = (req, res) => {
    //const {id, name, age, lastname} = req.body;
    const id = Number(req.params.id)
    const index = data.findIndex(data => data.id === id)
    if (index === -1) {
        return res.status(404).send('data no existe')
    }
    // req.body.id = data.length + 1;
    // data.push(req.body);

    res.json({
        data: {
            type: "update",
        }
    });
};

const obj = {
    name: "claudia",
    age: "23",
    lastname: "perez",
};
const {name: nombre, age, lastname} = obj;
console.log(nombre);
console.log(age);
console.log(lastname);