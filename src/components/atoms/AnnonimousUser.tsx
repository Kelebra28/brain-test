import React from "react";

const AnnonimousUser = ({ setUserInfo, handleChangeUser, data }: any) => {
  return (
    <div>
      <ul>
        <li>
          <input value={data.firstName} name="firstName" onChange={handleChangeUser}  placeholder="Nombre"  type="text" />
        </li>
        <li>
          <input value={data.lastName} name="lastName" onChange={handleChangeUser} placeholder="Apellidos"  type="text" />
        </li>
        <li>
          <input value={data.genre} name="genre" onChange={handleChangeUser} placeholder="Genero" type="text" />
        </li>
        <li>
          <input value={data.age} name="age" onChange={handleChangeUser} placeholder="Edad" type="text" />
        </li>
        <li>
          <input value={data.email} name="email" onChange={handleChangeUser} placeholder="Correo" type="text" />
        </li>
        <button onClick={() => setUserInfo(false)}> Continuar </button>
      </ul>
    </div>
  );
};

export default AnnonimousUser;
